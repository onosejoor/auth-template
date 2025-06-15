package cookies

import (
	"errors"
	"log"
	"main/models"
	"os"
	"time"

	"github.com/golang-jwt/jwt/v5"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

var (
	refreshTokenSecret = []byte(os.Getenv("JWT_SECRET"))
	accessTokenSecret  = []byte(os.Getenv("ACCESS_SECRET"))
	accessTokenExpiry  = 15 * time.Minute
	refreshTokenExpiry = 7 * 24 * time.Hour
)

type TokenPair struct {
	AccessToken  string `json:"access_token"`
	RefreshToken string `json:"refresh_token"`
	ExpiresIn    int64  `json:"expires_in"`
}

type Claims struct {
	Username string `json:"username"`
	ID       any    `json:"id"`
	jwt.RegisteredClaims
}

func GenerateTokens(user models.UserRes) (*TokenPair, error) {

	accessClaims := &Claims{
		Username: user.Username,
		ID:       user.ID,
		RegisteredClaims: jwt.RegisteredClaims{
			IssuedAt:  jwt.NewNumericDate(time.Now()),
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(accessTokenExpiry)),
		},
	}

	accessToken := jwt.NewWithClaims(jwt.SigningMethodHS256, accessClaims)

	accessTokenString, err := accessToken.SignedString(accessTokenSecret)
	if err != nil {
		return nil, err
	}

	refreshTokenClaims := &Claims{
		Username: user.Username,
		ID:       user.ID,
		RegisteredClaims: jwt.RegisteredClaims{
			IssuedAt:  jwt.NewNumericDate(time.Now()),
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(refreshTokenExpiry)),
		},
	}

	refreshToken := jwt.NewWithClaims(jwt.SigningMethodHS256, refreshTokenClaims)

	refreshTokenString, err := refreshToken.SignedString(refreshTokenSecret)
	if err != nil {
		return nil, err
	}

	return &TokenPair{
		RefreshToken: refreshTokenString,
		AccessToken:  accessTokenString,
		ExpiresIn:    int64(accessTokenExpiry.Seconds()),
	}, nil
}

func VerifyAccessToken(tokenString string) (*models.UserRes, error) {
	token, err := jwt.ParseWithClaims(tokenString, &Claims{}, func(token *jwt.Token) (any, error) {
		return accessTokenSecret, nil
	})
	if err != nil {
		return nil, err
	}

	if claims, ok := token.Claims.(*Claims); ok && token.Valid {
		userId, _ := primitive.ObjectIDFromHex(claims.ID.(string))
		return &models.UserRes{
			ID:       userId,
			Username: claims.Username,
		}, nil
	}

	return nil, errors.New("invalid token")
}

func verifyRefreshToken(tokenString string) (*models.UserRes, error) {
	token, err := jwt.ParseWithClaims(tokenString, &Claims{}, func(token *jwt.Token) (any, error) {
		return refreshTokenSecret, nil
	})
	if err != nil {
		return nil, err
	}

	if claims, ok := token.Claims.(*Claims); ok && token.Valid {
		userId, _ := primitive.ObjectIDFromHex(claims.ID.(string))
		return &models.UserRes{
			ID:       userId,
			Username: claims.Username,
		}, nil
	}

	return nil, errors.New("invalid refresh token")
}

func RefreshAccessToken(refreshTokenString string) (*TokenPair, error) {
	user, err := verifyRefreshToken(refreshTokenString)
	if err != nil {
		log.Println("Error verifying refresh token: ", err.Error())
		return nil, err
	}

	return GenerateTokens(*user)
}

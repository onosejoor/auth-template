package cookies

import (
	"fmt"
	"main/models"
	"os"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
)

func VerifyJwt(session string) (valid bool, err error) {
	var secretKey = []byte(os.Getenv("JWT_SECRET"))

	token, err := jwt.Parse(session, func(t *jwt.Token) (interface{}, error) {
		if _, ok := t.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", t.Header["alg"])
		}
		return secretKey, nil
	})
	if err != nil {
		fmt.Println("Error parsing token:", err)
		return false, err
	}
	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		fmt.Println("Token is valid!")
		fmt.Println("Claims:", claims)
		return true, nil
	} else {
		fmt.Println("Invalid token")
		return false, nil

	}
}

func CreateSession(payload models.UserRes, ctx *fiber.Ctx) error {
	expirationTime := time.Now().Add(7 * 24 * time.Hour)

	tokens, err := GenerateTokens(payload)
	if err != nil {
		return err
	}

	ctx.Cookie(&fiber.Cookie{
		Secure:   os.Getenv("ENVIRONMENT") == "production",
		Expires:  time.Now().Add(15 * time.Minute),
		HTTPOnly: true,
		Name:     "auth_access_token",
		Value:    tokens.AccessToken,
		SameSite: fiber.CookieSameSiteLaxMode,
		Path:     "/",
	})

	ctx.Cookie(&fiber.Cookie{
		Secure:   os.Getenv("ENVIRONMENT") == "production",
		Expires:  expirationTime,
		HTTPOnly: true,
		Name:     "auth_session_token",
		Value:    tokens.RefreshToken,
		SameSite: fiber.CookieSameSiteLaxMode,
		Path:     "/",
	})
	return nil
}

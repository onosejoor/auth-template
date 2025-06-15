package middlewares

import (
	"main/cookies"
	"os"
	"time"

	"github.com/gofiber/fiber/v2"
)

func AuthMiddleware(ctx *fiber.Ctx) error {

	accessToken := ctx.Cookies("auth_access_token")
	if accessToken != "" {
		user, err := cookies.VerifyAccessToken(accessToken)
		if err == nil {
			ctx.Locals("user", user)
			return ctx.Next()

		}
	}

	refreshToken := ctx.Cookies("auth_session_token")
	if refreshToken == "" {
		return ctx.Status(401).JSON(fiber.Map{
			"success": false,
			"message": "Unauthorised, no valid refresh or access token",
		})
	}

	newTokens, err := cookies.RefreshAccessToken(refreshToken)
	if err != nil {
		return ctx.Status(401).JSON(fiber.Map{
			"success": true,
			"message": "invalid refresh token",
		})
	}

	ctx.Cookie(&fiber.Cookie{
		Secure:   os.Getenv("ENVIRONMENT") == "production",
		Expires:  time.Now().Add(15 * time.Minute),
		HTTPOnly: true,
		Name:     "auth_access_token",
		Value:    newTokens.AccessToken,
		SameSite: fiber.CookieSameSiteLaxMode,
		Path:     "/",
	})

	user, _ := cookies.VerifyAccessToken(newTokens.AccessToken)
	ctx.Locals("user", user)
	return ctx.Next()

}

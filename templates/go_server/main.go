package main

import (
	"log"

	oauth_config "main/configs/oauth"
	"main/db"
	"main/handlers"
	"main/middlewares"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatalln("Error loading .env")
	}

	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins:     "http://localhost:3000",
		AllowCredentials: true,
	}))

	oauth := oauth_config.InitializeOauthConfig()

	auth := app.Group("/auth")
	auth.Post("/signup", handlers.HandleSignup)
	auth.Post("/signin", handlers.HandleSignin)
	auth.Post("/oauth", oauth.GetOauthController)

	userRoute := auth.Group("/user").Use(middlewares.AuthMiddleware)
	userRoute.Get("", handlers.HandleGetUser)

	db.GetClient()
	log.Println("Server listening on port 8080")
	app.Listen(":8080")
}

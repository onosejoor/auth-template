package handlers

import (
	"log"
	"main/db"
	"main/models"

	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func HandleGetUser(ctx *fiber.Ctx) error {
	client := db.GetClient()
	userId := ctx.Params("id")

	var user models.User

	authUser := ctx.Locals("user").(*models.UserRes)

	err := client.Collection("users").FindOne(ctx.Context(), bson.M{"_id": authUser.ID}).Decode(&user)
	if err != nil {
		if err.Error() == mongo.ErrNoDocuments.Error() {
			return ctx.Status(404).JSON(fiber.Map{
				"success": false, "message": "User does not exist",
			})
		}
		log.Printf("Database error when finding user with id %s: %v\n", userId, err)
		return ctx.Status(500).JSON(fiber.Map{
			"success": false, "message": "Error getting user data",
		})

	}

	ctx.Status(200).JSON(fiber.Map{
		"success": true,
		"user":    user,
	})
	return nil

}

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-auth-background flex items-center justify-center p-4">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-auth-text-primary">Welcome</h1>
        <p className="text-auth-text-secondary text-lg">Choose an option to get started</p>
        <div className="flex gap-4 justify-center">
          <Link href="/signin">
            <Button className="bg-auth-button-primary text-white hover:bg-auth-button-primary-hover">
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              variant="outline"
              className="border-auth-input-border text-auth-text-primary hover:bg-auth-button-secondary-hover"
            >
              Sign Up
            </Button>
          </Link>
          <Link href="/profile">
            <Button
              variant="outline"
              className="border-auth-input-border text-auth-text-primary hover:bg-auth-button-secondary-hover"
            >
              Profile
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

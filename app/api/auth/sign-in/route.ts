import { NextResponse } from "next/server"

// This would connect to your database in a real application
const users = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    email: "john@example.com",
    password: "password123", // In a real app, this would be hashed
    role: "user",
  },
  {
    id: "2",
    firstName: "Admin",
    lastName: "User",
    username: "admin",
    email: "admin@example.com",
    password: "admin123", // In a real app, this would be hashed
    role: "admin",
  },
]

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password, role } = body

    // Validate input
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    // Find user by email
    const user = users.find(
      (user) =>
        (user.email === email || user.username === email) &&
        user.password === password &&
        (role ? user.role === role : true),
    )

    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    // In a real app, you would create a session or JWT token here
    const token = "mock_jwt_token_" + user.id

    // Return user info without password
    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json({
      user: userWithoutPassword,
      token,
    })
  } catch (error) {
    console.error("Error signing in:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

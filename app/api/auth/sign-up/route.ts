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
]

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, username, email, password } = body

    // Validate input
    if (!firstName || !lastName || !username || !email || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Check if user already exists
    const existingUser = users.find((user) => user.email === email || user.username === username)

    if (existingUser) {
      return NextResponse.json({ error: "User with this email or username already exists" }, { status: 409 })
    }

    // In a real app, you would hash the password here
    // const hashedPassword = await bcrypt.hash(password, 10)

    // Create new user
    const newUser = {
      id: (users.length + 1).toString(),
      firstName,
      lastName,
      username,
      email,
      password, // This would be hashedPassword in a real app
      role: "user",
    }

    // In a real app, you would save to database here
    users.push(newUser)

    // Return the user without the password
    const { password: _, ...userWithoutPassword } = newUser

    return NextResponse.json(
      {
        message: "User created successfully",
        user: userWithoutPassword,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error creating user:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

const mongoose = require("mongoose");
const User = require("./models/User");
require("dotenv").config({ path: "./config.env" });

// Test user data
const testUser = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  password: "password123",
  phone: "1234567890",
  dateOfBirth: new Date("1990-01-01"),
  gender: "male",
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    country: "USA",
    zipCode: "10001",
  },
  preferences: {
    categories: ["business", "technology"],
    newsletter: true,
  },
};

async function testUserCreation() {
  try {
    // Connect to MongoDB
    console.log("🔌 Connecting to MongoDB...");
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost:27017/magone"
    );
    console.log("✅ Connected to MongoDB successfully");

    // Clear existing test user
    await User.deleteOne({ email: testUser.email });
    console.log("🧹 Cleared existing test user");

    // Create new user
    console.log("👤 Creating test user...");
    const user = new User(testUser);
    await user.save();
    console.log("✅ User created successfully");

    // Fetch user to verify
    const fetchedUser = await User.findById(user._id).select("-password");
    console.log("📋 User details:", JSON.stringify(fetchedUser, null, 2));

    // Test password comparison
    const isPasswordValid = await user.comparePassword("password123");
    console.log(
      "🔐 Password validation test:",
      isPasswordValid ? "PASSED" : "FAILED"
    );

    // Test public profile method
    const publicProfile = user.getPublicProfile();
    console.log(
      "🔒 Public profile (no password):",
      publicProfile.password ? "FAILED" : "PASSED"
    );

    console.log("\n🎉 All tests passed successfully!");
  } catch (error) {
    console.error("❌ Test failed:", error.message);
  } finally {
    // Close connection
    await mongoose.connection.close();
    console.log("🔌 MongoDB connection closed");
    process.exit(0);
  }
}

// Run the test
testUserCreation();

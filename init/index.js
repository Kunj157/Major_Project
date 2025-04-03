const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");

if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const dbUrl = process.env.ATLASDB_URL || "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
  await initDB();
  process.exit(0);
}

const initDB = async () => {
  await Listing.deleteMany({});
  
  // Create a default user
  await User.deleteMany({}); // Clear existing users
  const defaultUser = new User({
    email: "admin@example.com",
    username: "admin"
  });
  const registeredUser = await User.register(defaultUser, "admin123");
  
  // Add the user as owner to all listings
  initData.data = initData.data.map(listing => ({
    ...listing,
    owner: registeredUser._id,
  }));
  
  await Listing.insertMany(initData.data);
  console.log("Data was initialized");
};

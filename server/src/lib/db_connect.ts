import mongoose from "mongoose";
export const dbConnect = async () => {
try {
    await mongoose.connect(process.env.MONGODB_URL!, {
        dbName: "Front-forge"
    });
    console.log("Connection successful");
} catch (error) {
    console.log("Error connecting to database")
}
}
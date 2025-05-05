const mongoose = await import("mongoose");


export const connectToDB = async () => {
    const db = await mongoose.connect(process.env.MONGODB_URI,
        {
            dbName: process.env.MONGODB_DB_NAME,
        }
    );

    console.log("🚀 DB connected");
    return db;
};      
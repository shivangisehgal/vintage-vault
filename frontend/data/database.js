import mongoose from "mongoose"

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "AntiqueShop",
    })
    .then((c) => console.log(`Database connected to ${c.connection.host}`))
    .catch((e) => console.log(e))
}
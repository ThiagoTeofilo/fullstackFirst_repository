const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true})

        console.log(`conectado ao banco de dados: ${connect.connection.host}`)
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB
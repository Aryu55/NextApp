import { MongoClient } from 'mongodb'

async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, name, message } = req.body
        if (!email ||
            !email.includes("@") ||
            !name ||
            !name.trim() === " " ||
            !message ||
            message.trim() === " ") {
            res.status(420).json({ message: "Invalid input" })
            return
        }

        const newMessage = { email, name, message }
        let client
        const connString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.tqzca.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
        try {
            client = await MongoClient.connect(connString,
                { useUnifiedTopology: true, useNewUrlParser: true })
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "error" })
            return
        }
        const db = client.db()
        try {
            const result = await db.collection("messages").insertOne(newMessage)
        } catch (error) {
            console.log(error);
            client.close();
            res.status(500).json({ message: "error" })
            return
        }
        client.close();
        res.status(200).json(newMessage)
    }
}

export default handler
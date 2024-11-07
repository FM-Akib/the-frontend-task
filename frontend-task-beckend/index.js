const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qvgg1my.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    
    
    

   
    const tasksCollection = client.db("TasksDB").collection("tasksCategory");

    
    app.get('/api/taskCategory', async (req, res) => {
      try {
        const tasks = await tasksCollection.find().toArray();
        res.send(tasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).send({ error: "Failed to fetch tasks" });
      }
    });

    app.patch('/api/taskCategory/attachments',async (req, res) => {
        try {
        const { clientId, attachments } = req.body;

        if (!clientId || !attachments) {
          return res.status(400).json({ error: 'Client ID and attachments are required' });
        }
      

        const result = await tasksCollection.updateOne(
        { "cards.clientId": clientId },
        { $set: { "cards.$.attachments": attachments } }
        );

        if (result.modifiedCount === 0) {
        return res.status(404).json({ error: 'Client not found' });
        }

        res.send(result);
    } catch (error) {
        console.error("Error updating attachments:", error);
        res.status(500).json({ error: 'An internal server error occurred' });
    }
    });



    await client.connect();
    await client.db("admin").command({ ping: 1 });
   

  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
}

run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Task Server is running!');
});

app.listen(port, () => {
  console.log(`Task app listening on port ${port}`);
});

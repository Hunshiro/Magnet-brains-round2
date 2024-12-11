const { MongoClient, ObjectId } = require("mongodb");

const uri = "mongodb+srv://hansthenicsofficial:prab123@cluster0.trfyv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Replace with your MongoDB connection string
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db("shopitty");
    const collection = database.collection("products");

    const products = [
      {
        _id: ObjectId("630330e5ae8f95f539392009"),
        title: "Colorful Slip-on Unisex Streetwear Sneakers Fashion",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, ex. Hic, voluptatibus avudera.",
        price: 120.5,
        imageId: "630330e5ae8f95f539392009.jpg"
      },
      {
        _id: ObjectId("6303321bae8f95f53939200a"),
        title: "White Sneakers for Sport with Blue Outline",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, ex. Hic, voluptatibus avudera.",
        price: 199.99,
        imageId: "6303321bae8f95f53939200a.webp"
      }
    ];

    const result = await collection.insertMany(products);
    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

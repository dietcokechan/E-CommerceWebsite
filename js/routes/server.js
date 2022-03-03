const {MongoClient} = require('mongodb');

async function main(){
    /**
     * Connection string: mongodb+srv://<databasename>:<password>@cluster0.jqkdw.mongodb.net/test"
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://88metalsDB:Gd7cE37qVG2kF6i7@88metals.jmaw4.mongodb.net/test";
 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

const express = require('express');
const mongo = require('mongodb').MongoClient;

const app = express();

// endpoint for products
app.post("/Product", (req, res) => {
    res.json({
        confirmation: "success",
        data: "it works!"
    });
})

app.get("/Products", (req, res) => {

})

// endpoint for customers
app.post("/Customer", (req, res) => {

})

app.get("/Customers", (req, res) => {
    
})

// endpoint for orders
app.post("/Order", (req, res) => {

})

app.get("/Orders", (req, res) => {
    
})

// start server
app.listen(5555, () => console.log("Server ready"))
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://user1:<password>@cluster0.rekzhu2.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

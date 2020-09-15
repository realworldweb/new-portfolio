const express = require('express') //your original BE server

const serverless = require('serverless-http')

const app = express()

const cors = require('cors')

const moment = require("moment")

const router = express.Router()

const {MongoClient} = require('mongodb')

const url = process.env.mongoServer;//authenticate

let projectsList
let certsList

async function main (get){
 
 const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true})
 
 try{
 await client.connect()
 if( get === 'projects'){
 await projectsMount(client);//mount projects so we can run various requests
 return
 }
  if( get === 'certs'){
 await certsMount(client);//mount certs so we can run various requests
 return
  }
  
  if( get === 'feedback'){
   await feedbackMount(client);
   return
  }
  
 }catch(e){
  console.error(e)
 }
 
 
 
 async function projectsMount(client){// load products and pass it to express route for processing.
 console.log('ran')
   projectsList = await client.db('portfolio').collection('project')
   
   
   
 }
 
 async function certsMount(client){// load certs and pass it to express route for processing.
 console.log('ran')
   certsList = await client.db('portfolio').collection('courses')
   
   
 }
 
  async function feedbackMount(client){// load certs and pass it to express route for processing.
 console.log('ran')
   feedbackList = await client.db('portfolio').collection('feedback')
   
   
 }
 
};

async function insert (feedback){
 
 const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true})
 
 try{
 await client.connect()
 await feedbackInsert(client, feedback)
 }catch(e){
  console.error(e)
 }
 finally{
  await client.close()
 }
 
 async function feedbackInsert(client, feedback){// load certs and pass it to express route for processing.
 const now = moment();

 feedback.createdOn = now.format("MMM Do YY")
   const feedbackList = await client.db('portfolio').collection('feedback')
   
   const data = await feedbackList.insertOne(feedback)
 }

 
};



app.use(cors());

router.get('/projects', async (req, res) => {// return all from api projects
 await main('projects').catch(console.error)// call main to start mongo
  const data = await projectsList.find({}).toArray()
  
  res.json(data);

 
  
});

router.get('/projects/:id', async (req, res) => {// query projects api 
  await main('projects').catch(console.error)// call main to start mongo
  const data = await projectsList.find({"name" : req.params.name})
  
  res.json(data);
  
 
  
});

router.get('/certs', async (req, res) => {//return all certs from api 
 await main('certs').catch(console.error);// call main to start mongo
 
  const data = await certsList.find({}).toArray()
  
  res.json(data);

 
  
});

router.get('/certs/:id', async (req, res) => {//return all certs from api 
 await main('certs').catch(console.error)// call main to start mongo
  const data = await certsList.find({}).toArray()
  
  res.json(data);

 
  
});

router.get('/feedback', async (req, res) => {//return all certs from api 
 await main('feedback').catch(console.error)// call main to start mongo
  const data = await feedbackList.find({}).toArray()
  
  res.json(data);

 
  
});

router.post('/feedback', async (req, res) => {
const mongoDocument = JSON.parse(req.body)
 await insert(mongoDocument).catch(console.error)
 res.send('success')
 
})

 

 

 app.use('/.netlify/functions/server', router)
 
 module.exports = app;
 module.exports.handler = serverless(app);


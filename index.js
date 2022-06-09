const port = 8080;
const dbConnectionString = "mongodb://127.0.0.1:27017/school?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.0";
const MongoClient = require('mongodb').MongoClient;
const express = require("express");
const app = express();
app.use(express.json());
var objectId = require('mongodb').ObjectID; 

MongoClient.connect(dbConnectionString, { useUnifiedTopology: true})
           .then(client => {
                console.log('Connected to Database');
                const db = client.db('school');

                app.get('/student', function (request, response){
                    let printTable = `<table border=1> 
                                        <tr> 
                                            <th>
                                                Id
                                            </th>
                                            <th>
                                                Name
                                            </th>
                                        </tr>`;
                    db.collection('students').find({}).toArray()
                      .then(results => {
                        results.map((i) => {
                            printTable += `<tr>
                            <td>${i._id}</td>
                            <td>${i.name}</td>
                            </tr>`
                        });
                    
                        printTable += `</table>`
                        response.send(printTable);
                       })
                       .catch(error => console.error(error))
                   
                });

                app.post('/student', function (request, response){

                    db.collection('students').insertOne(request.body)
                    .then(result => {
                        response.send("Record added successfully.");
                    })
                    .catch(error => console.error(error))

                });

                app.put('/student/:id', function (request, response){     

                    db.collection('students').updateOne({'_id': objectId(request.params.id)},
                        {
                            $set: {name : request.body.name}
                        }
                    )
                    .then(result => {
                        response.send("Record updated successfully.");
                    })
                    .catch(error => console.error(error)) 

                });
                
                app.delete('/student/:id', function (request, response){

                    db.collection('students').deleteOne({'_id': objectId(request.params.id)})
                    .then(result => {
                        response.send("Record deleted successfully.");
                    })
                    .catch(error => console.error(error))

                });
                
                app.listen(port, ()=>{console.log("server is running on port " + port);});

            })
           .catch(error => console.error(error));



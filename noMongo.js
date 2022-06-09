// var students = 
// [
//     {id: 01, name:"Saleem"},    
//     {id: 02, name:"Aqeel"},    
//     {id: 03, name:"Rehan"},    
//     {id: 04, name:"Muazzam"},  
//     {id: 05, name:"Nihal"},
// ]

// app.get('/student', function (request, response){
//     let printTable = `<table border=1> 
//                         <tr> 
//                             <th>
//                                 Id
//                             </th>
//                             <th>
//                                 Name
//                             </th>
//                         </tr>`;

//     var students = 
//     students.map((i) => {
//         printTable += `<tr>
//         <td>${i.id}</td>
//         <td>${i.name}</td>
//         </tr>`
//     });

//     printTable += `</table>`
//     response.send(printTable);
// });

// app.post('/student', function (request, response){
//     var student = {
//         id : students.length + 1,
//         name : request.body.name
//     }
//     students.push(student);
//     response.send("Record added successfully.");
// });

// app.put('/student/:id', function (request, response){
//     var student = students.find(s=>s.id === parseInt(request.params.id));
//     student.name = request.body.name;
//     response.send("Record updated successfully.");
// });

// app.delete('/student/:id', function (request, response){
//     var student = students.find(s=>s.id === parseInt(request.params.id));
//     var index = students.indexOf(student);
//     students.splice(index, 1);
//     response.send("Record deleted successfully.");
// });

// app.listen(port, ()=>{console.log("server is running on port " + port);});

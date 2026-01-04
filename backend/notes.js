import express from 'express'; // ES6 module syntax have to add "type": "module" in package.json
//const express = require('express'); can do it like by default
const app = express(); // create an express app

// express app have many methods like get, post, put, delete etc. this are rest api methods

//Endpoint = URL + Method
//for all common api we can use app.use("/api/notes", notesRoutes);
app.get("/api/notes", (req, res) => {
    res.status(200).send("Hello from server");
});//get = read data

app.post("/api/notes", (req, res) => {
    res.status(201).json({message:"Post request to the notes"});
});//post = create data

app.put("/api/notes/:id", (req, res) => {
    res.status(201).json({message:"Post updated"});
});//put = update data

app.delete("/api/notes/:id", (req, res) => {
    res.status(200).json({message:"Post deleted"});
});//delete = delete data

app.listen(5001,() => {
    console.log('Server is running on port 5001'); 
});
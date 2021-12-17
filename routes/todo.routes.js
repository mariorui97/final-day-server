const express = require('express')
const router = express.Router()
const axios = require('axios');

let TodoModel = require('../models/Todo.model')
let DuosModel = require('../models/Duos.model')
// NOTE: All your API routes will start from /api 

// will handle all GET requests to http:localhost:5005/api/todos
router.get('/todos', (req, res) => {
     TodoModel.find()
     .populate('userId')
          .then((todos) => {               
               res.status(200).json(todos)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          })              
})

// will handle all POST requests to http:localhost:5005/api/create
router.post('/create', (req, res) => {  
    const {summonerName, favChamps, position, note, listed} = req.body;
    console.log(req.body)
    TodoModel.create({summonerName, position, favChamps, note, listed, userId: [req.session.loggedInUser._id]})
          .then((response) => {

               res.status(200).json(response)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          })  
})

// will handle all GET requests to http:localhost:5005/api/todos/:todoId
//PS: Don't type :todoId , it's something dynamic, 
router.get('/todos/:todoId', (req, res) => {
    TodoModel.findById(req.params.todoId)
     .then((response) => {
          res.status(200).json(response)
     })
     .catch((err) => {
          res.status(500).json({
               error: 'Something went wrong',
               message: err
          })
     }) 
})



// will handle all DELETE requests to http:localhost:5005/api/todos/:id
router.delete('/todos/:id', (req, res) => {
    TodoModel.findByIdAndDelete(req.params.id)
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          })  
})

// will handle all PATCH requests to http:localhost:5005/api/todos/:id
router.patch('/todos/:id', (req, res) => {
    let id = req.params.id
    const {summonerName, favChamps, position, note} = req.body;
    TodoModel.findByIdAndUpdate(id, {$set: {summonerName: summonerName, favChamps: favChamps,  position: position, note: note}}, {new: true})
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          }) 
})

module.exports = router;
const axios = require('axios')


exports.homeRoute  = (req,res) => {
    axios.get('http://localhost:3000/api/users')
     .then(function(response){
        res.render('index', {users: response.data});
     })
     .catch(err => {
         res.send(err);
     })
}

exports.adduser = (req,res) => {
    res.render('add-user');
}

exports.updateuser = (req,res) => {
    axios.get('http://localhost:3000/api/users', {params: {id: req.query.id}})
     .then(function(userdata) {
        res.render('update-user', {user: userdata.data})
     })
     .catch(err => {
         res.send(err);
     })
}

exports.viewuser = (req,res) => {
    axios.get('http://localhost:3000/api/users', {params: {id: req.query.id}})
     .then(function(userdata) {
         res.render('view-user', {user: userdata.data})
     })
}
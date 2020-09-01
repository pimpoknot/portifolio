const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const photos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server 
})

server.get("/", function(req, res){
  return res.render("about")

})

server.get("/Photos", function(req, res){
  return res.render("Photos")
})

server.get("/portifolio", function(req, res){
  return res.render("portifolio", {items: photos})

})

server.listen(5000,  function(){
  console.log("Server is running")
})
// Here we create the protocol and port variables
const { read } = require('fs')
const http = require('http')
const port = 3001

// And here the server variable
const server = http.createServer(function(req, res){
    res.write('Hello Nucba people! lets rock it =) ')
    res.end()
})

// Now we listen to the server in the assigned port
server.listen(port, function(error){
    if(error){
        console.log('Something went wrong and I dont have idea what went wrong =)', error)
    } else {
        console.log('Server is listening on port ' + port)
    }
})
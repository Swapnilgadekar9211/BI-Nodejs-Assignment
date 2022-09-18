const http = require('http')
const url = require('url')

const data = { 

    "result": {
    
    "rootVegetables": [ "turnips",
    
    "ginger",
    
    "beets"
    
    ],
    
    "leafyVegetables": [ "broccoli",
    
    "spinach",
    
    "cabbage"
    
    ]
    
    }
    
    }

http.createServer((req,res)=>{
  const parsedURL = url.parse(req.url,true)
  if(parsedURL.pathname === '/vegetables' && req.method === 'GET'){
    res.writeHead(200)
    res.end(JSON.stringify(data))
  }
  else{
    res.writeHead(300)
    res.end(JSON.stringify({"msg":"data not found"}))
  }
}).listen(8080,()=>console.log('server started'))
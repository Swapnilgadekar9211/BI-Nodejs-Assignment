const http = require('http')
const url = require('url')

const data3 = [
    {
        "object":"circle",
        "metric":"area"
    },
    {
        "object":"sphere",
        "metric":"area"
    },
    {
        "object":"sphere",
        "metric":"volume"
    }
]

const server = http.createServer((req,res)=>{
    const parsedURL = url.parse(req.url,true)

    if(parsedURL.pathname === '/metrics' && req.method === 'GET'){
        const qdataObject = parsedURL.query.object
        const qdataMetric = parsedURL.query.metric
        const qdataRadius = parsedURL.query.radius

        const result = data3.find((item)=>qdataObject===item.object&&qdataMetric===item.metric)
        console.log(result)
        console.log('radius = ',qdataRadius)
        if(qdataObject != null && qdataMetric != null && qdataRadius != null){
            res.writeHead(200)
            let area;
            /* Area of circle */
            if(result.object  === 'circle' && result.metric === 'area'){
                area = 3.14 * qdataRadius * qdataRadius
                area = Math.round(area*100)/100 
            }
            /* Area of sphere */
            if(result.object  === 'sphere' && result.metric === 'area'){
                area = 12.56 * qdataRadius * qdataRadius
                area = Math.round(area*100)/100
            }
            /* Volume of sphere */
            if(result.object  === 'sphere' && result.metric === 'volume'){
                area = 4.19 * qdataRadius * qdataRadius * qdataRadius
                area = Math.round(area*100)/100
            }
            res.end(`${qdataMetric} of ${qdataObject} is ${area}`)
        }
        else{
            res.writeHead(300)
            res.end("enter object, metric, & radius")
        }
    }
})
server.listen(8080,()=>console.log('server started'))
const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  const parsedURL = url.parse(req.url, true);
 
  if (parsedURL.pathname === '/age' && req.method === 'GET') {

    const qdatauname = parsedURL.query.name
    const qdatayear = parsedURL.query.year
    const qdatamonth = parsedURL.query.month
    const qdatadate = parsedURL.query.date

    if (qdatauname != null && qdatayear != null && qdatamonth != null & qdatadate != null) {
      res.writeHead(200);
      let d = new Date();
      let yearNow = d.getFullYear();
      let monthNow = d.getMonth() + 1;
      let dateNow = d.getDay();

      let age = yearNow - qdatayear;
      if (
        monthNow < qdatamonth ||
        (monthNow == qdatamonth && dateNow < qdatadate)
      ) {
        age -= 1;
      }

      res.end(
        JSON.stringify(`hello ${qdatauname}, you are ${age} years old.`)
      );
    } else {
      res.writeHead(300);
      res.end(JSON.stringify({ msg: 'data not found' }));
    }
  }
});
server.listen(8080, () => console.log('server started'));

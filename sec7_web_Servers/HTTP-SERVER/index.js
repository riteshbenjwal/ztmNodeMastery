const http = require("http");
const PORT = 3000;

/*const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type' : 'application/json',
    });
    res.end(JSON.stringify({
        id: 1,
        name: 'Ritesh Benjwal'
    }));
});

*/

//or

const server = http.createServer();

const friends = [
  {
    id: 1,
    name: 'Sir Isaac Newton',
  },
  {
    id: 2,
    name: 'Sir ritesh',
  },
  {
    id: 3,
    name: 'Gokul Don',
  }
]

server.on("request", (req, res) => {
   const items = req.url.split('/');  // ['', 'friends', '2']

  if (items[1] === "friends") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
   if(items.length === 3){
      const friendIndex = Number(items[2]) 
      res.end(JSON.stringify(friends[friendIndex]))
   }else{
    res.end(
      JSON.stringify(friends)
    );
   }
  } else if (items[1] === "messages") {
    res.statusCode = 200;
    res.setHeader(`Content-Type`, `text/html`);
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>Hello Isaac!</li>");
    res.write("<li>What are your thoughts on astronomy:</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  }else{
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

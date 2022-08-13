
function getMessages(req, res){
    res.send("<ul><li>Hello Albert!</li></ul>");
  }

  function postMessage(req, res){
    res.send("Updating messages...");
    console.log("POST");
  }

  module.exports ={
    getMessages,
    postMessage
  };
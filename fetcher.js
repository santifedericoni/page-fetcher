const request = require('request');
const fs = require('fs');

let userInputs = process.argv.slice(2);
request(userInputs[0], (error, response, body ) => {
  fs.writeFile(userInputs[1],body, (err) =>  {
    if (err){
      console.error(err);
    }
    else {
      console.log(`Downloaded and saved ${body.length} bytes to ${userInputs[1]}`); 
    }
  })
});
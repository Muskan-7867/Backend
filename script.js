const fs = require("fs")

fs.writeFile("heyy.txt", "hello backend" , function(err){
if(err) console.error(err);
else console.log("done");
})
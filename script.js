//file system

const fs = require("fs")
//for write file
fs.writeFile("heyy.txt", "hello backend" , function(err){
if(err) console.error(err);
else console.log("done");
})


//for append text to file
fs.appendFile('heyy.txt', 'welcome to backend', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});


//for rename the file
fs.rename('heyy.txt', 'hiii.txt', (err) => {
  if (err) throw err;
  console.log('Rename complete!');
});
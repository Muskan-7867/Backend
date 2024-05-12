
//database is used for stores everything like img,song,long file etc.
//types of database -- SQL or  NO-SQL 
//SQL {store data in the form of tables like row or column}
//No SQL {store data in the form of objects}
//we use mongodb with the concept of No SQL.
//terminologies -- 
//Database -- Document -- Collection
//mongoose is helps to communicate node js to mongodb.
const mongoose =  require('mongoose');
mongoose.connect(`mongodb://localhost:27017`)
//schem means user ke pass kya kya details hongi 
 const userSchema = mongoose.Schema({
Name: String,
Username: String,
Email: String,
 })
 //on the basis of module we use crud opration
 module.exports = mongoose.model('user',userSchema) 
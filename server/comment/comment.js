const mongoose =require('mongoose');
const DB_URL = 'mongodb://localhost:27017/logincomment';
mongoose.connect(DB_URL,{useNewUrlParser:true},function(err){
    if(err){

        　　　　console.log('Connection Error:' + err)
        
        　　}else{
        
        　　　　console.log('Connection success!') }
});
const models = {
    comments:{
        'info':{'type':String,'require':true},
        'time':{'type':String,'require':true}
    }
}
for(let m in models){
    mongoose.model(m,new mongoose.Schema(models[m]))
}
// mongoose.model('comments').create({info:'456'},function(err,doc){
//     console.log(err)
//     console.log('123')
// })
module.exports = {
    getModel:function (name) {
        return mongoose.model(name)
    }
};
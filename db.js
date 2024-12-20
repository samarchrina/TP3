const mongose=require('mongose');
const dotenv=require('dotenv');
const uri=process.env.URI_MONGODB;
const connectDB=async()=>{
    try{
        await mongose.connect(uri)
        .then(()=> console.log("Established a connection to the database"));
        .catch( err => console.log("something went wrong when connecting " ,err));
    }
}
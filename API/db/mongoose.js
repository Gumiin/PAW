// This file will handle connection logic to the MongoDB database

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://${encodeURIComponent("Guminn")}:${encodeURIComponent("VUCqw9AR%Nrv]#2")}@cluster0.rxbyctm.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser: true }).then(() => {
    console.log("Connected to MongoDB successfully :)");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});

// To prevent deprectation warnings (from MongoDB native driver)



module.exports = {
    mongoose
};
const mongoose = require('mongoose');
const chalk = require('chalk');

// Setting up mongodb
const mongoDB = mongoose.connect(
    "mongodb://127.0.0.1:27017/avanthika-collections",
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true },
    (error => {
        let mongoUrl = "mongodb://127.0.0.1:27017/avanthika-collections";
        if (error) {
            console.error(chalk.red('⨉'),`Error connecting Mongo DB`);
        } else {
            console.log(chalk.green('✔'),`Mongo connected to ${mongoUrl}`);
        }
    })
);

module.exports = mongoDB;
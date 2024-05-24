const mongoose = require("mongoose") // new

mongoose
	.connect("mongodb+srv://fatima17bayramli:fatimabayramli@cluster12.uip4vr3.mongodb.net/")
	.then(() => {
		console.log("my db server");
		})
    .catch((error)=> {
        console.log(error);
    })

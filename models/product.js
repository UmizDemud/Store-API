const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "product name must be provided"],
	},
	price: {
		type: Number,
		required: [true, "product price must be provided"],
	},
	currency: {
		type: String,
		default: "dollars",
	},
	featured: {
		type: Boolean,
		required: false,
	},
	rating: {
		type: Number,
		default: 4.5,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
	company: {
		type: String,
		enum: {
			values: ["ikea", "liddy", "caressa", "marcos", "other"],
			massage: "{VALUE} is not supported",
		},
	},
});

module.exports = mongoose.model("Product", productSchema);

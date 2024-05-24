const Foods = require("../models/Foods")

const getAllFoods = async (req, res) => {
	const posts = await Foods.find()
	res.send(posts)
}

const postFood = async (req, res) => {
	const post = new Foods({
		title: req.body.title,
		content: req.body.content,
        price: req.body.price
	})
	await post.save()
	res.send(post)
}

const getFood = async (req, res) => {
	try {
		const post = await Foods.findOne({ _id: req.params.id })
		res.send(post)
	} catch {
		res.status(404)
		res.send({ error: "Foods doesn't exist!" })
	}
}

const patchFood = async (req, res) => {
	try {
		const post = await Foods.findOne({ _id: req.params.id })

		if (req.body.title) {
			post.title = req.body.title
		}

		if (req.body.content) {
			post.content = req.body.content
		}
        if (req.body.price) {
			post.price = req.body.price
		}

		await post.save()
		res.send(post)
	} catch {
		res.status(404)
		res.send({ error: "Foods doesn't exist!" })
	}
}

const deleteFood = async (req, res) => {
	try {
		await Foods.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Foods doesn't exist!" })
	}
}

module.exports = {
    getAllFoods,
    postFood,
    deleteFood,
    patchFood,
    getFood
}
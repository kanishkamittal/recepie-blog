const route = require('express').Router()
const { Recepie } = require('../../models/db')

const { fetchRecepies,
  createRecepie,
  fetchNonVegRecepies,
  fetchVegRecepies
} = require('../../controllers/recepies')

route.get('/', async (req, res) => {
  // Get all recepies
    const recepies = await fetchRecepies()
    res.status(200).json(recepies)
})

route.get('/veg', async (req, res) => {
  // Get all veg recepies
  const recepies = await fetchVegRecepies()
  res.status(200).json(recepies)
.redirect('/auth/login')

})

route.get('/nonVeg', async (req, res) => {
  // Get all non veg recepies
  const recepies = await fetchNonVegRecepies()
  res.status(200).json(recepies)
})

route.post('/', async (req, res) => {
  // Add a new recepie
  const r=await createRecepie(
    req.body.name,
    req.body.type,
    req.body.ingredients,
    req.body.recepie
    )
    res.send(r)
})

route.delete('/:id',async (req, res) => {
  const id = req.params.id;
 await Recepie.destroy({
  where: { id: id }
})
res.send({
  message: "Recepie was deleted successfully!"
})
})

route.put('/:id',async (req, res) => {
  const id = req.params.id;
 await Recepie.update(req.body,{
  where: { id: id }
})
res.send({
  message: "Recepie was updated successfully!"
})
})

route.delete('/:id/comments',async (req, res) => {
  const id = req.params.id;
 await  Comment.destroy({
  where: { id: id }
})
res.send({
  message: "Comment was deleted successfully!"
})
})


module.exports = route





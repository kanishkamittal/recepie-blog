const route = require('express').Router()
const { fetchRecepies,fetchRecepieById,fetchVegRecepies,fetchNonVegRecepies } = require('../../controllers/recepies')

route.get('/', async (req, res) => {
  try {
    const recepies = await fetchRecepies()
    res.render('pages/recepies', {recepies })
  } catch (e) {
    console.error(e)
    res.redirect('/')
  }

})

route.get('/veg', async (req, res) => {
  try {
    const recepies = await fetchVegRecepies()
    res.render('pages/recepies', {recepies })
  
  } catch (e) {
    console.error(e)
    res.redirect('/')
  }
})

route.get('/nonVeg', async (req, res) => {
  try {
    const recepies = await fetchNonVegRecepies()
    res.render('pages/recepies', {recepies })
  } catch (e) {
    console.error(e)
    res.redirect('/')
  }
})

route.get('/:id', async (req, res) => {
  // Fetch a particular recepie 
  const recepieId = req.params.id
  if (isNaN(parseInt(recepieId))) {
    console.error(new Error('Recepie ID is not correct number'))
    res.redirect('/')
  }
  try {
    const recepie = await fetchRecepieById(recepieId)
    res.render('pages/recepies/id', { recepie })
  } catch (e) {
    throw e
  }
})



module.exports = route
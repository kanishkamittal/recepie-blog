const { Recepie,Comment,User } = require('../models/db')

async function createRecepie (name,type, ingredients, recepie,img) {
  if (typeof name !== 'string' || name.length < 1) {
    throw new Error('Name empty or undefined')
  }
  if (typeof recepie !== 'string' || recepie.length < 1) {
    throw new Error('Recepie empty or undefined')
  }

  try {
    return await Recepie.create({
      name, type,ingredients, recepie,img
    })
  
  } catch (e) {
    throw e
  }
  
}



async function fetchRecepies () {
  try {
    return await Recepie.findAll()
  } catch (e) {
    throw (e)
  }
}

async function fetchVegRecepies () {
  try {
    return await Recepie.findAll({ where: { type: "veg" } })
  } catch (e) {
    throw (e)
  }
}

async function fetchNonVegRecepies () {
  try {
    return await Recepie.findAll({ where: { type: "non veg" } })
  } catch (e) {
    throw (e)
  }
}

/*
async function fetchCommentById (id) {
  
  try {
    return await Recepie.findByPk(id)
  } catch (e) {
    throw (e)
  }
 
}
*/

async function fetchRecepieById (id) {
  try {
    return await Recepie.findByPk(id,{
      
      include: [
        {
          model: Comment,
         include: [
            {
              model: User,
              attributes: [ 'username' ]
            }
          ]
        }
      ]
    })
  } catch (e) {
    throw e
  }
}




module.exports = {
  createRecepie,
  fetchRecepies,
  fetchRecepieById,
  fetchNonVegRecepies,
  fetchVegRecepies
}



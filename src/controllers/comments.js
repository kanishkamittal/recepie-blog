const { Comment } = require('../models/db')

async function fetchComments () {
  try {
    return await Comment.findAll()
  } catch (e) {
    throw (e)
  }
}

async function createComment (title,message,userId,recepieTbId) {
    if (typeof title !== 'string' || title.length < 1) {
      throw new Error('Title empty or undefined')
    }
      try {
      return await Comment.create({
        title,message,userId,recepieTbId
      })
    
    } catch (e) {
      throw e
    }
    
  }


module.exports = {
  createComment,
  fetchComments
}




const { Comment } = require('../models/db')

async function fetchComments () {
  try {
    return await Comment.findAll()
  } catch (e) {
    throw (e)
  }
}

async function createComment (message,userId,recepieTbId) {
    if (typeof message !== 'string' || message.length < 1) {
      throw new Error('Message empty or undefined')
    }
      try {
      return await Comment.create({
        message,
        userId,
        recepieTbId
      })
    
    } catch (e) {
      throw e
    }
    
  }


module.exports = {
  createComment,
  fetchComments
}




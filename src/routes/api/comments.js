const route = require('express').Router()
const { Comment } = require('../../models/db')

const { createComment, fetchComments} = require('../../controllers/comments')

route.get('/', async (req, res) => {
  // Get all comments
  const comments = await fetchComments()
  res.status(200).json(comments)
})
  
route.post('/', async (req, res) => {
    // Add a new comment
    const c=await createComment(
      req.body.title,
      req.body.message,
      req.body.userId,
      req.body.recepieTbId
      )
      res.send(c)
  })

  route.delete('/:id',async (req, res) => {
    const id = req.params.id;
   await Comment.destroy({
    where: { id: id }
  })
  res.send({
    message: "Comment was deleted successfully!"
  })
  })
  
  route.put('/:id',async (req, res) => {
    const id = req.params.id;
   await Comment.update(req.body,{
    where: { id: id }
  })
  res.send({
    message: "Comment was updated successfully!"
  })
  })
  
module.exports = route
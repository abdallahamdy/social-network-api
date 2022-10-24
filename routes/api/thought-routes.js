const router = require('express').Router();

const {
    getAllThought,
    addThought,
    removeThought,
    addReaction,
    deleteReaction,
    getSingleThought
  } = require('../../controllers/thought-controller');

// /api/thoughts
router.route('/').get(getAllThought);

// /api/thoughts/:userId
router.route('/:userId').post(addThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .delete(removeThought)
  .get(getSingleThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
    .post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;
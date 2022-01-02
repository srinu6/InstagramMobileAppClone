const express = require('express');
const {check, validationResult} = require('express-validator');
const UserData = require('../models/Data');
const router = express.Router();

const validate = [
  check('userName')
    .isLength({min: 3, max: 50})
    .withMessage('title should be between 3- 50 letters'),
];

router.post('/', validate, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).send({errors: errors.array()});
  }

  const userData = new UserData({
    userName: req.body.userName,
    userImageUri: req.body.userImageUri,
    postImageUri: req.body.postImageUri,
    caption: req.body.caption,
    description: req.body.description,
    likesCount: req.body.likesCount,
    commentsCount: req.body.commentsCount,
    postedAt: req.body.postedAt,
  });

  userData
    .save()
    .then((result) => {
      res.send({
        message: 'data successfully created',
        data: result,
      });
    })
    .catch((err) => console.log(err));
});

router.get('/', (req, res) => {
  UserData.find()
    .then((userData) => {
      res.send(userData);
    })
    .catch((err) => console.log(err));
});

// api/userData/id
router.get('/:id', (req, res) => {
  const userID = req.params.id;
  UserData.findById(userID)
    .then((userData) => {
      res.send(userData);
    })
    .catch((err) => console.log(err));
});

// api/userData/id  - update existing id data
router.put('/:id', (req, res) => {
  const userID = req.params.id;
  UserData.findById(userID)
    .then((userData) => {
      userData.userName = req.body.userName;
      userData.userImageUri = req.body.userImageUri;
      userData.postImageUri = req.body.postImageUri;
      userData.caption = req.body.caption;
      userData.description = req.body.description;
      userData.likesCount = req.body.likesCount;
      userData.commentsCount = req.body.commentsCount;
      userData.postedAt = req.body.postedAt;

      return userData.save();
    })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

// delete the id  data
router.delete('/:id', (req, res) => {
  const userID = req.params.id;
  UserData.findByIdAndDelete(userID)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

module.exports = router;

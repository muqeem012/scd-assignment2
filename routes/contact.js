const express = require('express');
const router = express.Router();
const {createContact, getAllContacts, deleteContact, updateContact} = require('../controllers/contact')

router.route('/').post(createContact)
router.route('/').get(getAllContacts)
router.route('/').delete(deleteContact)
router.route('/').patch(updateContact)

module.exports = router;
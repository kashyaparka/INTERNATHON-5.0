const express = require('express')
const router = express.Router()
const { v4 } = require('uuid');

const authController = require('../controllers/authControllers')
const { requireAuth, redirectIfLoggedIn } = require('../middleware/userAuth')
router.get('/verify/:id', authController.emailVerify_get)
router.get('/signup',redirectIfLoggedIn, authController.signup_get)
router.post('/signup', authController.signup_post)
router.get('/login', redirectIfLoggedIn, authController.login_get)
router.post('/login', authController.login_post)
router.get('/logout', requireAuth, authController.logout_get)

//group

router.get('/group', requireAuth, authController.groupCreate_get)
router.post('/group', requireAuth, authController.groupCreate_post)
router.post('/about', authController.about)


router.post('/groupInfoEqual/:id', requireAuth, authController.groupInfoEqual_post)
router.get('/groupInfo/:id', requireAuth, authController.groupInfo_get)
router.post('/groupInfo/:id', requireAuth, authController.groupInfo_post)//group id
//csv
router.get('/groupUnEqualCsv/:id', requireAuth, authController.groupUnEqualCsv_get)
router.get('/groupEqualCsv/:id', requireAuth, authController.groupEqualCsv_get)

//remainder
router.get('/reminder/:amount/:email/:id', requireAuth, authController.remainder_get)

module.exports = router
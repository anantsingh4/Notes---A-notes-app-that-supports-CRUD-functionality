const express = require('express');
const router = express.Router();
const { isLoggedin } = require('../middleware/checkAuth');
const dashboardController = require('../controlllers/dashboardController');

/**
 * Dashboard routes
 */

router.get('/dashboard', isLoggedin, dashboardController.dashboard);
router.get('/dashboard/item/:id', isLoggedin, dashboardController.dashboardViewNote);
router.post('/dashboard/item/:id', isLoggedin, dashboardController.dashboardUpdateNote);
router.post('/dashboard/item-delete/:id', isLoggedin, dashboardController.dashboardDeleteNote);
router.get('/dashboard/add', isLoggedin, dashboardController.dashboardAddNote);
router.post('/dashboard/add', isLoggedin, dashboardController.dashboardAddNoteSubmit);
router.get('/dashboard/search', isLoggedin, dashboardController.dashboardSearch);
router.post('/dashboard/search', isLoggedin, dashboardController.dashboardSearchSubmit);

module.exports = router;
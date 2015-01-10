'use strict';

module.exports = function (router) {
    router.get('/', function (req, res) {
        res.render('pages/index');
    });

    router.get('/about', function (req, res) {
        res.render('pages/about');
    });

    router.get('/team', function (req, res) {
        res.render('pages/team');
    });

    router.get('/message', function (req, res) {
        res.render('pages/message');
    });


    router.get('/history', function (req, res) {
        res.render('pages/history');
    });

};

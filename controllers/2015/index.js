'use strict';

module.exports = function (router) {
    router.get('/signup', function (req, res) {
        res.render('2015/signup');
    });

    router.get('/workshop/list', function (req, res) {
        res.render('2015/workshop-list');
    });
};

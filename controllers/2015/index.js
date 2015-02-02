'use strict';

module.exports = function (router) {
	router.get('/', function (req, res) {
		res.render('2015/index');
	});

    router.get('/signup', function (req, res) {
        res.render('2015/signup');
    });

    router.get('/workshop/list', function (req, res) {
        res.render('2015/workshop-list');
    });
};

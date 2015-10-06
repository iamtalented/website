'use strict';

module.exports = function (router) {
	router.get('/', function (req, res) {
		res.render('2016/index');
	});

    router.get('/signup', function (req, res) {
        res.render('2016/signup');
    });

    router.get('/workshop/list', function (req, res) {
        res.render('2016/workshop-list');
    });
};

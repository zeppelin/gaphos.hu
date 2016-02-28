var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', {
    title: 'Gaphos Media',

    galleries: [{
      title: 'Football',
      photos: [{
        title: 'Some title #1',
        url: 'http://unsplash.it/1200/800?image=500',
        thumbnailUrl: 'http://unsplash.it/300/200?image=500',
        width: 1200,
        height: 800,
        thumbnailWidth: 300,
        thumbnailHeight: 200
      }, {
        title: 'Some title #2',
        url: 'http://unsplash.it/800/1200?image=501',
        thumbnailUrl: 'http://unsplash.it/200/300?image=501',
        width: 800,
        height: 1200,
        thumbnailWidth: 200,
        thumbnailHeight: 300
      }, {
        title: 'Some title #2',
        url: 'http://unsplash.it/800/1200?image=502',
        thumbnailUrl: 'http://unsplash.it/200/300?image=502',
        width: 800,
        height: 1200,
        thumbnailWidth: 200,
        thumbnailHeight: 300
      }, {
        title: 'Some title #2',
        url: 'http://unsplash.it/1200/800?image=503',
        thumbnailUrl: 'http://unsplash.it/300/200?image=503',
        width: 1200,
        height: 800,
        thumbnailWidth: 300,
        thumbnailHeight: 200
      }, {
        title: 'Some title #2',
        url: 'http://unsplash.it/1200/800?image=504',
        thumbnailUrl: 'http://unsplash.it/300/200?image=504',
        width: 1200,
        height: 800,
        thumbnailWidth: 300,
        thumbnailHeight: 200
      }, {
        title: 'Some title #2',
        url: 'http://unsplash.it/1200/800/?image=505',
        thumbnailUrl: 'http://unsplash.it/300/200/?image=505',
        width: 1200,
        height: 800,
        thumbnailWidth: 300,
        thumbnailHeight: 200
      }, {
        title: 'Some title #2',
        url: 'http://unsplash.it/1200/800?image=506',
        thumbnailUrl: 'http://unsplash.it/300/200?image=506',
        width: 1200,
        height: 800,
        thumbnailWidth: 300,
        thumbnailHeight: 200
      }, {
        title: 'Some title #1',
        url: 'http://unsplash.it/1200/800?image=614',
        thumbnailUrl: 'http://unsplash.it/300/200?image=614',
        width: 1200,
        height: 800,
        thumbnailWidth: 300,
        thumbnailHeight: 200
      }, {
        title: 'Some title #2',
        url: 'http://unsplash.it/800/1200?image=615',
        thumbnailUrl: 'http://unsplash.it/200/300?image=615',
        width: 800,
        height: 1200,
        thumbnailWidth: 200,
        thumbnailHeight: 300
      }, {
        title: 'Some title #2',
        url: 'http://unsplash.it/1200/800?image=616',
        thumbnailUrl: 'http://unsplash.it/300/200?image=616',
        width: 1200,
        height: 800,
        thumbnailWidth: 300,
        thumbnailHeight: 200
      }, {
        title: 'Some title #2',
        url: 'http://unsplash.it/1200/800?image=617',
        thumbnailUrl: 'http://unsplash.it/300/200?image=617',
        width: 1200,
        height: 800,
        thumbnailWidth: 300,
        thumbnailHeight: 200
      }, {
        title: 'Some title #2',
        url: 'http://unsplash.it/1200/800/?image=618',
        thumbnailUrl: 'http://unsplash.it/300/200/?image=618',
        width: 1200,
        height: 800,
        thumbnailWidth: 300,
        thumbnailHeight: 200
      }]
    }, {
      title: 'Fencing',
      photos: [{
        title: 'Some title #1',
        url: 'http://unsplash.it/1200/800?image=607',
        thumbnailUrl: 'http://unsplash.it/300/200?image=607',
        width: 1200,
        height: 800,
        thumbnailWidth: 300,
        thumbnailHeight: 200
      }, {
        title: 'Some title #2',
        url: 'http://unsplash.it/800/1200?image=608',
        thumbnailUrl: 'http://unsplash.it/200/300?image=608',
        width: 800,
        height: 1200,
        thumbnailWidth: 200,
        thumbnailHeight: 300
      }, {
        title: 'Some title #2',
        url: 'http://unsplash.it/800/1200?image=609',
        thumbnailUrl: 'http://unsplash.it/200/300?image=609',
        width: 800,
        height: 1200,
        thumbnailWidth: 200,
        thumbnailHeight: 300
      }, {
        title: 'Some title #2',
        url: 'http://unsplash.it/1200/800?image=610',
        thumbnailUrl: 'http://unsplash.it/300/200?image=610',
        width: 1200,
        height: 800,
        thumbnailWidth: 300,
        thumbnailHeight: 200
      }, {
        title: 'Some title #2',
        url: 'http://unsplash.it/1200/800?image=611',
        thumbnailUrl: 'http://unsplash.it/300/200?image=611',
        width: 1200,
        height: 800,
        thumbnailWidth: 300,
        thumbnailHeight: 200
      }, {
        title: 'Some title #2',
        url: 'http://unsplash.it/1200/800/?image=612',
        thumbnailUrl: 'http://unsplash.it/300/200/?image=612',
        width: 1200,
        height: 800,
        thumbnailWidth: 300,
        thumbnailHeight: 200
      }, {
        title: 'Some title #2',
        url: 'http://unsplash.it/1200/800?image=613',
        thumbnailUrl: 'http://unsplash.it/300/200?image=613',
        width: 1200,
        height: 800,
        thumbnailWidth: 300,
        thumbnailHeight: 200
      }]
    }, {
      title: 'Other Sports',
      photos: [{
        title: 'Some title #1',
        url: 'http://unsplash.it/1200/800?image=514',
        thumbnailUrl: 'http://unsplash.it/300/200?image=514',
        width: 1200,
        height: 800,
        thumbnailWidth: 300,
        thumbnailHeight: 200
      }, {
        title: 'Some title #2',
        url: 'http://unsplash.it/800/1200?image=515',
        thumbnailUrl: 'http://unsplash.it/200/300?image=515',
        width: 800,
        height: 1200,
        thumbnailWidth: 200,
        thumbnailHeight: 300
      }, {
        title: 'Some title #2',
        url: 'http://unsplash.it/1200/800?image=516',
        thumbnailUrl: 'http://unsplash.it/300/200?image=516',
        width: 1200,
        height: 800,
        thumbnailWidth: 300,
        thumbnailHeight: 200
      }, {
        title: 'Some title #2',
        url: 'http://unsplash.it/1200/800?image=517',
        thumbnailUrl: 'http://unsplash.it/300/200?image=517',
        width: 1200,
        height: 800,
        thumbnailWidth: 300,
        thumbnailHeight: 200
      }, {
        title: 'Some title #2',
        url: 'http://unsplash.it/1200/800/?image=518',
        thumbnailUrl: 'http://unsplash.it/300/200/?image=518',
        width: 1200,
        height: 800,
        thumbnailWidth: 300,
        thumbnailHeight: 200
      }]
    }]
  });
});

module.exports = router;

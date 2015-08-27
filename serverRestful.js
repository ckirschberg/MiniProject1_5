/**
 * Created by christiankirschberg on 03/08/15.
 */
// server.js

//This is not part of your curriculum, but nice to have to test your client side code.:
//This article is useful.
// https://mongodb.github.io/node-mongodb-native/api-articles/nodekoarticle1.html

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

var cors = require('cors');
app.use(cors());

var mongodb = require('mongodb');
var ObjectId = require('mongodb').ObjectID;
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://admin:admin@ds036178.mongolab.com:36178/nodeapi';

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});


// more routes for our API will happen here
router.route('/Internships')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {

        MongoClient.connect(url, function (err, db) {
            if (err) {
                console.log('Unable to connect to the mongoDB server. Error:', err);
            } else {
                console.log('Connection established to', url);

                // Get the documents collection
                var collection = db.collection('internshipsTest');

                // Insert some users
                collection.insert(req.body, function (err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Inserted %d documents into the "internshipsTest" collection. The documents inserted with "_id" are:', result.length, result);
                    }
                    //Close connection
                    db.close();
                    res.json("Ok");
                });
            }
        });
    })

    // get all the bears (accessed at GET http://localhost:8080/api/bears)
    .get(function(req, res) {
        MongoClient.connect(url, function (err, db) {
            if (err) {
                console.log('Unable to connect to the mongoDB server. Error:', err);
            } else {
                console.log('Connection established to', url);
            }

            var collection = db.collection('internshipsTest');


            collection.find().toArray(function(err, items) {
                res.json(items);
            });
        });

        /*
         Bear.find(function(err, bears) {
         if (err)
         res.send(err);

         res.json(bears);
         });
         */
    });



router.route('/Internships/:internship_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
        Bear.findById(req.params.bear_id, function(err, bear) {
            if (err)
                res.send(err);
            res.json(bear);
        });
    })

    // update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:bear_id)
    .put(function(req, res) {

        // use our bear model to find the bear we want
        Bear.findById(req.params.bear_id, function(err, bear) {

            if (err)
                res.send(err);

            bear.name = req.body.name;  // update the bears info

            // save the bear
            bear.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Bear updated!' });
            });

        });
    })

    // delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
    .delete(function(req, res) {
        MongoClient.connect(url, function (err, db) {
            if(err) { return console.dir(err); }

            var collection = db.collection('internshipsTest');


            console.log("params");
            console.log(req.params.internship_id);

            collection.remove( {"_id":  ObjectId(req.params.internship_id) }, {w:1},
                function(err, result) {
                    console.log("deleted: " + result);
                });
        });
        /*
         Bear.remove({
         _id: req.params.bear_id
         }, function(err, bear) {
         if (err)
         res.send(err);

         res.json({ message: 'Successfully deleted' });
         });
         */
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
//app.listen(port);
//console.log('Magic happens on port ' + port);

app.listen(8080, function(){
    console.log('CORS-enabled web server listening on port 8080');
});
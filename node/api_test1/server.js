var express = require('express'),
    bodyParser = require('body-parser'),
    _ = require('underscore'),
    json = require('./movies.json'),
    app = express();

app.set('port', process.env.PORT || 3500);

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

var router = new express.Router();
// TO DO: Setup endpoints ...


router.get('/test', function(req, res) {
    var data = {
        name: 'Jason Krol',
        website: 'http://kroltech.com'
    };

    res.json(data);
});

// ************************************************************
// api endpoint for GET
// ************************************************************
router.get('/', function(req, res) {
    res.json(json);
});

// ************************************************************
// api endpoint for POST
// ************************************************************
router.post('/', function(req, res) {
    // insert the new item into the collection (validate first)
    if(req.body.Id && req.body.Title && req.body.Director && req.body.Year && req.body.Rating) {
        json.push(req.body);
        res.json(json);
    } else {
        res.json(500, { error: 'There was an error!' });
    }
});

// ************************************************************
// api endpoint for PUT
// ************************************************************
router.put('/:id', function(req, res) {
    // update the item in the collection
    if(req.params.id && req.body.Title && req.body.Director && req.body.Year && req.body.Rating) {
        _.each(json, function(elem, index) {
            // find and update:
            if (elem.Id === req.params.id) {
                elem.Title = req.body.Title;
                elem.Director = req.body.Director;
                elem.Year = req.body.Year;
                elem.Rating = req.body.Rating;
            }
        });

        res.json(json);
    } else {
        res.json(500, { error: 'There was an error!' });
    }
});


app.use('/', router);

var server = app.listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});

const express = require('express')
const cors = require('cors')
const app = express()
const monk = require ('monk')

app.use(cors())
app.use(express.json())

const db = monk('localhost/tweeter');
const tweets = db.get('tweets');


app.listen(5000, () =>{
    console.log("Listening on http://localhost:5000");
    
})

app.get('/', (req,res)=>{
    res.json({
    message: 'Tweeeter'
    })

});

function isValidTweed(tweet){
    return tweet.name && tweet.name.toString().trim() != '' &&
    tweet.content && tweet.content.toString().trim() != '' ;

}

app.post('/tweets', (req, res) =>{

    if(isValidTweed(req.body)){ //Validation, Prevent injection
        //Insert in db
        const tweet ={ 
            name: req.body.name.toString(), //toString helps with validation
            content: req.body.content.toString(),
            created: new Date()
        }
        
        tweets.insert(tweet)
        .then(createdTweet =>{
            res.json(createdTweet)
        });
    }

    else{
        res.status(422);
        res.json({
            message: "Name and content required!"
        })
    }
})
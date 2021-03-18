let express = require('express');
let app = express();
let cors = require('cors');
// let bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.urlencoded({extended: true})); 
app.use(express.json());   
// console.log('bodyParse: ', bodyParser.urlencoded());
// app.use(bodyParser.urlenconded({ extended: false }));
// app.use(bodyParser.json());

// Entry points

app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'));

app.get('/api/whoami', (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"]
  })
});

// Listener

let listener = app.listen(process.env.PORT, () => console.log(`App is listening on port ${listener.address().port}`))

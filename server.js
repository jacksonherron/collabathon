// ------------------------------ REQUIRE CORE MODULES ------------------------------ //
// Express
const express = require('express');
const app = express();
// Database
const db = require('./models');
// ------------------------------ GLOBAL VARIABLES ------------------------------ //
const PORT = process.env.PORT || 3000;

// ------------------------------ MIDDLEWARE------------------------------ //
// Serve Public Directory 
app.use(express.static(`${__dirname}/public`));


// ------------------------------ HTML ENDPOINTS ------------------------------ //
//Sign up Form
app.get('/', (req, res) => res.sendFile(`${__dirname}/views/index.html`));



// ------------------------------ API ENDPOINTS ------------------------------ //
app.get('/api/subscribers', (req, res) => {
    db.Subscriber.find({}, (err, allSubscribers) => {
        if (err) return res.status(400).json({ status: 400, error: err });
        res.json({ status: 200, data: allSubscribers })
    })
})


// ------------------------------ START SERVER ------------------------------ //
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT} 🤖`));
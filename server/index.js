const fs = require('fs');

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/challenges.json', (req, res) => {
    fs.readdir('./challenges', (err, files) => {
        if(err){
            console.error(err);
            res.status(500).send('Error reading challenges directory');
            return;
        }

        const challenges = files.filter(file => file.endsWith('.challenge.json')).map(file => {
            const challengeData = fs.readFileSync(`./challenges/${file}`);
            return JSON.parse(challengeData);
        });
        res.json(challenges);
    });
});

app.listen(port, 'localhost', () => {
  console.log(`Server is running on http://localhost:${port}`);
});
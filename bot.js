const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/login/github', (req, res) => {
    res.redirect(
        'https://github.com/login/oauth/authorize?' +
        `client_id=${process.env.GITHUB_CLIENT_ID}` +
        `redirect_uri=https://splitleaf-codebot.herokuapp.com/authenticate` +
        `scope=user%20read:org`
    );
});

app.get('/authenticate', (req, res) => {
    console.log('Request', req);
    console.log('Response', res);

    res.send(
`Authenticating...<br>
Access Token: ${req.params.access_token}<br>
Token Type: ${req.params.token_type}`
    );
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Codebot is listening on port ${port}. Beep boop.`);
});


// https://github.com/login/oauth/authorize?client_id=126be9d892050bb67fc3&redirect_uri=https://splitleaf-codebot.herokuapp.com/authenticate&scope=user%20read:org

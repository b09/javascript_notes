## Protecting your API key

There are bots that scan GitHub for these keys to abuse them. Maybe there's not much damage someone can do with a Spotify key. But if someone had your AWS one...they could spin up a million servers and charge it to your credit card!

The solution is to stick it in another file that you then `.gitignore`.

```js
// helpers/api_key.js

const API_KEY = '<paste in the key (token) you were given when you signed up for the API>';

module.exports = API_KEY;

// e.g const API_KEY = "BQAdE9IadrGHpgckmYyIlRGH..."

```

```bash
# .gitignore

api_key.js
```

### Using the key in our request

Before we send our request (ie before `request.send()`) we need to include this key in our request so we can be authorized. The way you do this **will vary between APIs** - here is one example -

```js
const API_KEY = require('./helpers/api_key.js')

const authorizationHeader = `Bearer ${API_KEY}`;
request.setRequestHeader("Authorization", authorizationHeader);
// ...
// request.send();

```

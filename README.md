# Introduction
This is the plugin to check the provided email is valid or not.
This plugin checks following things:
- valid email format
- valid tld
- valid email host

## Implementation
```javascript
var validate = require('email-validation-pro')
validate.email(email); // check without email host
validate.email(email, true); // check with email host
```

## Test
`yarn test`
# Introduction
This is the plugin to check the provided email is valid or not.
This plugin checks following things:
- valid email format
- valid tld
- valid email host

## Installation
- `npm npm i email-validation-pro`
- `yarn add email-validation-pro`

## Implementation
```javascript
var validate = require('email-validation-pro');
validate.email(email); // check without email host
validate.email(email, true); // check with email host
```

## Test
`yarn test`
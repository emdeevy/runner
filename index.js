'use strict';

const { prompt } = require('enquirer');

prompt({
    type: 'confirm',
    name: 'question',
    message: 'Did you like enquirer?'
})
    .then(answer => console.log('Answer:', answer));
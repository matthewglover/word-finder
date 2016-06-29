const getMatchingWords = require('./word-search/get-matching-words');


getMatchingWords('bri').on('data', data => console.log(data));

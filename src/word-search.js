const getMatchingWords = require('./word-search/get-matching-words');


getMatchingWords('br').on('data', console.log.bind(console));

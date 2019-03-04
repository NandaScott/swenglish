'use strict';

const axios = require('axios');

function fetchHTML(word) {
    return axios.get(`http://folkets-lexikon.csc.kth.se/folkets/folkets.en.html#${word}`)
        .then((resp) => {
            return resp.data;
        })
        .catch((error) => {
            return error.response.data;
        });
}

async function getWord(word) {
    let html = await fetchHTML(word);

    
}

module.exports = { getWord };
const fetch = require('node-fetch');

const getQuiz = async() => {
    let data = await fetch("https://opentdb.com/api.php?amount=12&category=13&difficulty=easy&type=multiple");
    return await data.json();
}

getQuiz();

module.exports = getQuiz;
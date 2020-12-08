const fetch = require('node-fetch');

const getQuiz = async(amount, category, difficulty) => { //something here
    let data = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`);
    return await data.json();
}

// getQuiz();

module.exports = getQuiz;
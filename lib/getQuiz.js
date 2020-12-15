const fetch = require('node-fetch');

const getQuiz = async(amount, category, difficulty) => {
    let data = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`);
    const info = await data.json();
    console.log(info)
    return info
}
module.exports = getQuiz;
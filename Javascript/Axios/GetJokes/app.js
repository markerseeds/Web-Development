// const fetchBitcoinPrice = async () => {
//     const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     console.log(res);
// }

// async function fetchBitcoinPrice() {
//     const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     console.log(res);
// }

const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}

const getDadJoke = async () => {
    const config = { headers: {Accept: 'application/json'}};
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke
}

button.addEventListener('click', addNewJoke);
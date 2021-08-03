//This is a random horoscope Generator.

const signs = ['Air', 'Earth', 'Water', 'Fire'];
const luckyNumber = Math.floor(Math.random() * 99);
const advise = ['do not eat yellow snow!', 'you must break some eggs to make an omlette', 'the bigger they are the harder they fall!', 'RUN!.. and dont look back.', 'measure twice and cut once', 'always look both ways!', 'beware...unthinkable thimgs lay ahead']

const generateSign = () =>{
    let number = Math.floor(Math.random() * 4)
    return `Your Sign is ${signs[number]}`;
}

const generateLuckyNumber = () =>{
    return `your lucky number is ${luckyNumber}`;
}

const generateAdvise = () =>{
    let number = Math.floor(Math.random() * 7)
    return advise[number];
}

const run = () => {
    return ` Welcome to the Horoscope Generator...${generateSign()} and ${generateLuckyNumber()}. One piece of advise for you is ${generateAdvise()}`
}

console.log(run());
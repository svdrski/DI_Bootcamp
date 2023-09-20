import  readline from 'readline';
import {getWeather} from './weather.js'

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export  const ask = () => { rl.question('City ? ', (answer) => {
    getWeather(answer)
    rl.close();
});}
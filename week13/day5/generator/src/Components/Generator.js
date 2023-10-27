import { useEffect, useState } from "react"
import quotes from "./Quotes"


export default function Generator () {

    const [currentQuote, setcurrentQuote] = useState(0)
    const [content, setcontent] = useState({ quote: quotes[currentQuote].quote, author: quotes[currentQuote].author })
    const [color, setColor] = useState('rgb(82, 139, 52)')


    //random number
    const getrandom = () => { return Math.floor(Math.random() * quotes.length) + 1}

    //generate random new number and setting new color and quote
    function generate () {
        let value
        while((value = getrandom()) ===  currentQuote) {}
        setcurrentQuote(value)
        setColor(rgbGenerator())
    }

    //color generator
    function rgbGenerator() {
        let num = () => {return Math.floor(Math.random() * 256) + 1} 
        return `rgb(${num()}, ${num()}, ${num()})`
    }


    // when currentQuote changed => update color and quote on the state and render it
    useEffect(()=> {
        document.body.style.backgroundColor = color
        setcontent({quote: quotes[currentQuote].quote, author: quotes[currentQuote].author})
    }, [currentQuote])

    return (
        <div className="box">
            {/* use color as variable to check updates to show animation*/}
            <div key={color} className="animation" >
                <h1  className='quote ' style={{ color: color }}>{content.quote}</h1>
                <p className="author " style={{color: color}}>{content.author}</p>
            </div>
        
            <button onClick={generate} className="btn" style={{backgroundColor: color}}>Generate Quote</button>
        </div>
    )
}
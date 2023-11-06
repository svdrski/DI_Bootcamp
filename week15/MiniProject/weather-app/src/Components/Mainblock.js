export default function Mainblock ({defaultw, cityData}){


    function saver() {
    try{
        const data = JSON.parse(localStorage.getItem('list')) || []
        if(!data.some(item => item.key ===cityData[0].Key)){
            data.push({key: cityData[0].Key, name: cityData[0].LocalizedName})
            localStorage.setItem('list', JSON.stringify(data))
        }
    } catch(e) {console.log(e)}
    }
    

    return(
        defaultw.length  ? 
        <div className="home">
            <img className="icon2" src={`https://developer.accuweather.com/sites/default/files/${defaultw[0].Day.Icon > 10 ?defaultw[0].Day.Icon : "0" + defaultw[0].Day.Icon}-s.png`}></img>
            <h1 className="temper"> {defaultw[0].Temperature.Maximum.Value}</h1>
            <p className="unit">{defaultw[0].Temperature.Maximum.Unit}</p>
            <p className="msg"> In {cityData[0].LocalizedName } {defaultw[0].Day.IconPhrase}</p>
            <button className="save" onClick={saver}>Save</button>
        </div>
        :
        <h1>Loading....</h1>
    )
}
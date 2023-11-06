export default function Card ({defaultw}) {

    if (defaultw) {
        const dayOfWeek = new Date(defaultw.Date).toLocaleDateString('en-EN', { weekday: 'short' });
        const id = defaultw.Day.Icon > 10 ?defaultw.Day.Icon : "0" + defaultw.Day.Icon
        
        return(
            <div className="card">
                <p className="day">{dayOfWeek}</p>
                    <div className="first">
                        <img className="icons" src={`https://developer.accuweather.com/sites/default/files/${id}-s.png`}></img>
                        <h1 className="tempers"> {defaultw.Temperature.Maximum.Value}</h1>
                        <p className="units">{defaultw.Temperature.Maximum.Unit}</p>
                    </div>
                <p className="status"> {defaultw.Day.IconPhrase}</p>
            </div>  
        )

    }

}
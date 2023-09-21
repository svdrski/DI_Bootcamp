import { formatDuration, intervalToDuration, addYears, setMonth, setDay } from 'date-fns';
const nextYear = setDay((setMonth((addYears(new Date(), 1)),0)),1)

const duration = intervalToDuration({
    start: new Date(),
    end: nextYear,
});

const result = formatDuration(duration, { format: ['months', 'days', 'hours', 'minutes'] })
export  const calc = () => {console.log(`the 1st January is in ${result}`)}


import  {formatDuration, intervalToDuration } from 'date-fns';

export function getdate () {
    const now = new Date()
    const date2 = new Date(2023,8,26)
    const name = 'Kipur'
    
    const remainingTime = intervalToDuration({ start: now, end: date2 });
    const formattedDuration = formatDuration(remainingTime, { format: ['days', 'hours', 'minutes'] });
    
    const result = `The next holiday is in ${formattedDuration} (${name})`;
     
    console.log(result)
}
getdate()
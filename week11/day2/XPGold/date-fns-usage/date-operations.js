import { format, addDays } from 'date-fns'


export function get5 (){
    /// Current date
    const  current = format(new Date(), 'yyyy-MM-dd HH:mm:ss')
    console.log('Current date and time: ' + current)

    // add 5 days
    const  add5 = addDays(new Date(), 5)
    console.log('Current date and time + 5 days: '+ String(add5))
}


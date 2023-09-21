import { differenceInMinutes } from 'date-fns';
import datePrompt from 'date-prompt'


export const birth = () => {datePrompt('When is your birthday?')
.then(isoStr => console.log('You live', differenceInMinutes(new Date(), new Date(isoStr)), 'minutes'))
}
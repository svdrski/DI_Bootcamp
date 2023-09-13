const urls = [
    'https://www.swapi.tech/api/people/1',
    'https://www.swapi.tech/api/people/2',
    'https://www.swapi.tech/api/people/3',
    'https://www.swapi.tech/api/people/4'
]

let result = urls.map(value => fetch(value))

Promise.all(result)
    .then(a => Promise.all(a.map(value => value.json())))
    .then(a => a.map(value => value.result.properties))
    .then(a => console.log(a))
    .catch(error => console.log('Error >', error))


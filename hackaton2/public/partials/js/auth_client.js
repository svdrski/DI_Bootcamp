//localStorage.clear()

const key = localStorage.getItem('key')
console.log(key)

 fetch('/auth', {
    method: 'POST',
    headers: {
        'Authorization': `${key}`,
        'Accept': 'application/json'}
});


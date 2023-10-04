const yargs = require('yargs');
const fs = require('fs')

yargs
// get list
  .command('list', 'print hello world', () => {
    console.log('aa')
    fs.readFile('./data/data.json', 'utf-8', (err, data) => {
      data1 = JSON.parse(data)
      data1.forEach(item =>{
        console.log('--')
        console.log('Title: ' + item.title)
        console.log('Body: ' + item.body)
      })
    })
  })


// add new note
  .command('add', 'add notes', () => {
  }, (values) => {
     fs.readFile('./data/data.json', 'utf-8', (e, data)=> {
       let pdata = JSON.parse(data)
             const note = {
              title: values.title,
              body: values.body
            }
       pdata.push(note)
       const senddata = JSON.stringify(pdata)
       fs.writeFileSync('./data/data.json', senddata)
       console.log('--')
      console.log('Title: ' + note.title)
      console.log('Body: ' + note.body)
    })
  })


//read one
 .command('read', 'read one', () => {
   }, (values) => {
   fs.readFile('./data/data.json', 'utf-8', (e, data)=> {
     let pdata = JSON.parse(data)
     const note = pdata.find(item => item.title = values.title)
     console.log('--')
     console.log('Title: ' + note.title)
     console.log('Body: ' + note.body)
   })
 })

 .command('remove', 'remove note', () => {
   }, (values) => {
   fs.readFile('./data/data.json', 'utf-8', (e, data)=> {
     let pdata = JSON.parse(data)
     const index = pdata.findIndex(item => item.title = values.title)
     pdata.splice(index, 1)
     const jdata = JSON.stringify(pdata)
     console.log(jdata)
     fs.writeFileSync('./data/data.json', jdata)
     console.log('Note removed')
   })
 })


  .argv;
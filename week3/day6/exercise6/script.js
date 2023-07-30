const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

  
  for ( let i in details) {
    console.log(i, details[i] )
  }

  let string = "";

  for ( let i in details) {
   string = string + (i + " " + details[i] + " ")
  }

  console.log(string)



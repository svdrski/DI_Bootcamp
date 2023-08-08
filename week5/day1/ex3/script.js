function getvalue() {
  event.preventDefault();

  let name = document.forms[0].fname.value
  let sur = document.forms[0].lname.value
  console.log (name, sur)
}


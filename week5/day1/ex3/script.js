function getvalue(e) {
  event.preventDefault();

  let name = document.forms[0].fname.value
  let name2 = e.target.elements.fname.value;
  let sur = document.forms[0].lname.value;
  let sur2 = e.target.elements.lname.value;
  console.log (name,name2, sur,sur2)
}


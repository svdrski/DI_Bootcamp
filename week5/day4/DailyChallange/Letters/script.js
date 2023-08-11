function check(e) {
    if (!/^[a-zA-Z]*$/.test(e.key)) {
      e.preventDefault();
    } 
}
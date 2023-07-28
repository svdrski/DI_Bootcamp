let value = " * ";

// for (i = 0; i < 6; i++) {
//   console.log (value);
//   value = value + " * "
// }


// do {
// console.log(value);
// value = value + " * "
// } while (value.length / 3 !== 7)


for (i = 0; value.lastIndexOf("*") < 18; i++) {
  while (value.lastIndexOf(" * ") < 3 * i ) {
    console.log(value);
    value = value + " * ";
  }
}

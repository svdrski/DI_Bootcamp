const inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];


function getCarHonda(carInventory) {
//2.1
let result = carInventory.find(v => v.car_make === 'Honda')
//2.2
result = `This is a ${result.car_make} ${result.car_model} from ${result.car_year}`
return result 
}
console.log(getCarHonda(inventory))


/// Part 2

function sortCarInventoryByYear(carInventory) {
 let result =  carInventory.sort((a, b) => a.car_year - b.car_year)
 return result
}

console.log(sortCarInventoryByYear(inventory))

function createCalendar(year, month) {
  month-= 1
  let wkdays = ["MO", "TU", "WE", "TH ", "FR", "SA", "SU"]
  let monthDays = new Date(year, month,0).getDate();
  let firDay = new Date(year,month, 1).getDay()
  console.log(monthDays)
  console.log(firDay)

  let table = document.createElement("table");
  let hrow = document.createElement("tr")
  for (i = 0; i < 7; i++){
    let thh = document.createElement("th")
    thh.textContent = wkdays[i]
    hrow.appendChild(thh)
  }
  table.appendChild(hrow)

  let day = 2 - firDay;

  for (let week = 0; day <= monthDays; week++){
    let ro = document.createElement("tr")
       for(let wday = 0; wday < 7; wday++){
        let nd = document.createElement("td")
        if (day > 0 && day <=monthDays) {
          nd.textContent = day
        }
        day++
        ro.appendChild(nd)
       }
       table.appendChild(ro)
  }

  document.body.appendChild(table)

}

createCalendar(2012,9)
createCalendar(2012,10)
createCalendar(2012,11)
createCalendar(2023,8)





// function createCalendar(year, month) {
//     const weekdayNames = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
//     const daysInMonth = new Date(year, month, 0).getDate();
//     const firstDay = new Date(year, month, 1).getDay();
  
//     const table = document.createElement('table');
  
//     // Create header row with weekday names
//     const headerRow = document.createElement('tr');
//     for (let i = 0; i < 7; i++) {
//       const th = document.createElement('th');
//       th.textContent = weekdayNames[i];
//       headerRow.appendChild(th);
//     }
//     table.appendChild(headerRow);
  
//     // Create calendar days
//     let day = 2 - firstDay; // Start from Saturday (6) for September 2012
//     for (let week = 0; day <= daysInMonth; week++) {
//       const row = document.createElement('tr');
//       for (let weekday = 0; weekday < 7; weekday++) {
//         const cell = document.createElement('td');
//         if (day > 0 && day <= daysInMonth) {
//           cell.textContent = day;
//         }
//         day++;
//         row.appendChild(cell);
//       }
//       table.appendChild(row);
//     }
  
//     document.body.appendChild(table);
//   }
  
//   // Call the function with year = 2012 and month = 8 (September)
//   createCalendar(2012, 8);  
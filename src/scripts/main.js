'use strict';
const cells = [...document.querySelectorAll('td')];

const data = [...cells].map(cell => cell.textContent.trim());
// console.log(data);


let res = [];

function restData(arr) {
  // let res = [];

  for (let i = 1; i < data.length; i += 5) {
    // console.log(data[i]);
    res.push(data[i]);
  }

  return res;
}
console.log(restData(data));



function column(arr) {
  const rows = document.querySelectorAll('table tbody tr');
  console.log(rows);

  arr.map((el, index) => {
    if (rows[index]) {
      // console.log(rows[index]);
      const cell = document.createElement('td');

      cell.textContent = el;
      rows[index].append(cell);
    }
  });
}

console.log(column(res));

var gridItem = document.querySelectorAll('.grid div');
var featuredItem = document.querySelector('.featured');
var filterBtn = document.querySelectorAll('.filter-btn');
// var filterBtnArray = Array.prototype.slice.call(filterBtn);
// console.log(filterBtnArray);



// Get filter button attributes
// for (let i = 0; i < filterBtnArray.length; i++) {
//   const filterAttr = filterBtnArray[i].getAttribute('data-filter');
//   console.log(filterAttr);
// }

// Get Aatributes of grid items
// for (let a = 0; a < gridItem.length; a++) {
//   const gridFilterAttr = gridItem[a].getAttribute('data-filterType');
//   console.log(gridFilterAttr);
// }



function getAttributes(event) {
  event.preventDefault();
  // var btnFilterArray = [];
  // var gridArray = [];

  var thisValue = event.target.getAttribute('data-filter');

  // Get button filter attributes
  // for (let i = 0; i < filterBtn.length; i++) {
  //   const filterAttr = filterBtn[i].getAttribute('data-filter');
  //   // console.log(filterAttr)
  //   // btnFilterArray.push(filterAttr);
  // }

  // Get grid item filter attributes
  for (let a = 0; a < gridItem.length; a++) {
    const gridFilterAttr = gridItem[a].getAttribute('data-filterType');
    if (thisValue == gridFilterAttr) {
      gridItem[a].classList.add('active')
      gridItem[a].classList.remove('not-active')
    } else if (thisValue == 'all') {
      gridItem[a].className = 'active';
      featuredItem.className = 'featured active'


    } else {
      gridItem[a].classList.remove('active')
      gridItem[a].classList.add('not-active')
    }
    // gridArray.push(gridFilterAttr);
  }



  // console.log(btnFilterArray);
  // console.log(gridArray);


  console.log(thisValue);
}

for (let b = 0; b < filterBtn.length; b++) {
  filterBtn[b].addEventListener('click', getAttributes);

}
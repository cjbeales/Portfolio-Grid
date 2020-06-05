var gridItem = document.querySelectorAll('.grid-item');
var showcaseItem = document.querySelectorAll('.showcase');
var filterBtn = document.querySelectorAll('.filter-btn');

console.log(showcaseItem);

function getAttributes(event) {
  event.preventDefault();

  var thisValue = event.target.getAttribute('data-filter');

  for (let a = 0; a < gridItem.length; a++) {
    const gridFilterAttr = gridItem[a].getAttribute('data-filterType');

    if (thisValue == gridFilterAttr) {

      gridItem[a].classList.add('active');
      // featuredItem.classList.toggle('active');
      // gridItem[a].classList.remove('not-active')

    } else if (thisValue !== gridFilterAttr) {
      gridItem[a].classList.remove('active');
    }
  }


  if (thisValue == 'all' && showcaseItem.className !== 'grid-item showcase active') {
    for (let i = 0; i < showcaseItem.length; i++) {
      showcaseItem[i].classList.add('active');
    }
  } else {
    return false;
  }

  console.log(thisValue);
}

for (let b = 0; b < filterBtn.length; b++) {
  filterBtn[b].addEventListener('click', getAttributes);
}
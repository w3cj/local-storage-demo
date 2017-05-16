let items = [];

$(appReady);

function appReady() {
  console.log('hello from jquery');

  $('#nameForm').submit(saveName);
  $('#itemForm').submit(saveItem);

  if(localStorage.name) {
    $('#storedName').text(localStorage.name)
  }

  if(localStorage.items) {
    items = JSON.parse(localStorage.items);
    renderItems();
  }
}

function saveItem() {
  event.preventDefault();
  const item = $('#item').val();
  items.push(item);
  console.log(items);
  localStorage.items = JSON.stringify(items);
  renderItems();
}

function renderItems() {
  $('.items').empty();
  for (var i = 0; i < items.length; i++) {
    $('.items').append(`<li>${items[i]}</li>`)
  }
}

function saveName(event) {
  event.preventDefault();
  const name = $('#name').val();
  localStorage.name = name;
}

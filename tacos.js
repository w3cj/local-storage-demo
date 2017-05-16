$(appReady);

function appReady() {
  if(localStorage.name) {
    $('#storedName').text(localStorage.name)
  }

  getTacos()
    .then(addTacosToPage);
}

function getTacos() {
  if(localStorage.tacos) {
    const tacoResult = JSON.parse(localStorage.tacos);
    console.log('From localstorage:', tacoResult);
    return Promise.resolve(tacoResult);
  }

  return $.get('https://tacos.now.sh/')
    .then(function(result) {
        console.log('From API:', result);
        localStorage.tacos = JSON.stringify(result);
        return result;
    });
}

function addTacosToPage(tacoResult) {
  for (var i = 0; i < tacoResult.base_layers.length; i++) {
    $('#base_layers').append(`<li>${tacoResult.base_layers[i].title}</li>`)
  }
}

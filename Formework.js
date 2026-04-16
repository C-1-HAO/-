const favoriteColorBlock = document.querySelector('#favoriteColorBlock')
const colorOptions = favoriteColorBlock.querySelectorAll('input')
const hintBlock = document.querySelector('#hintBlock')


colorOptions.forEach(function(option){
  option.addEventListener('click', showHint)
})


function showHint(event){
  if(event.target.checked) {
    hintBlock.style.display = 'block'
  } else {
    hintBlock.style.display = ''
  }
}

hintBlock.addEventListener('click', hiddenHint)


function hiddenHint() {
  hintBlock.style.display = 'none'

  colorOptions.forEach(function(option) {
    if(option.checked){
      option.checked = false;
    } 
  })
}
document.addEventListener('DOMContentLoaded', (event) => {
  var tabs_control = document.querySelectorAll('.tabs-control i');
  var tabs = document.querySelectorAll('.tab');
  
  tabs_control.forEach((element, index) => {
    element.addEventListener("click", function (event) {
      tabs_control.forEach(e => e.classList.remove('active'));
      event.target.classList.add('active');
      tabs.forEach(element => {
        element.classList.remove('active')
      })
      tabs[index].classList.add('active');
    })
  })
})
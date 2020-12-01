let num = document.querySelector('.finish-num');

document.querySelectorAll('.count').forEach(function (button) {
   button.addEventListener('click', on_button_click);
});

function on_button_click(e){
   num.value += e.target.textContent;
}
// let check_quantity = 0;
function clean() {
   num.value = '';
}
function del(){
   let d_last = num.value.split('');
   d_last.pop();
   num.value = d_last.join('');
   // check_quantity--;
}
function count(){
   if(num.value === ''){
      num.value = 'че нить напиши -_-'
   } else{
      num.value = eval(num.value);
   }
  
}
function plus_but(e) {
   num.value += e.textContent;
}
function dick(e) {
   num.value = '--з';
}
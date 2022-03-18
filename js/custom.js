// change the header to sticky with white background
window.addEventListener('scroll',function(){
const header = document.querySelector('header');
header.classList.toggle("sticky", window.scrollY > 0);
});


//function to close the menu
let closeItem=document.querySelector('.closeMenuIcon');
let menuItem=document.querySelector('.openMenu');
let navigation=document.querySelector('.navigation');

closeItem.addEventListener('click',()=>{
menuItem.classList.remove('active');
closeItem.classList.remove('active');
navigation.classList.remove('active');
console.log('hi');
});


//function to toggle the menu
function toggleMenuFn()
{
    menuItem.classList.toggle('active');
    closeItem.classList.toggle('active');
    navigation.classList.toggle('active');
}
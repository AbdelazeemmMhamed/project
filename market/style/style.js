let searchForm=document.querySelector('.search-form');



document.querySelector('#search-btn').onclick= () => {
    searchForm.classList.toggle('active');
    shoppingCarts.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');



}


let shoppingCarts=document.querySelector('.shopping-carts');
let cartBtn =document.querySelector('#cart-btn')



cartBtn.onclick= ()=>{
shoppingCarts.classList.toggle('active');
loginform.classList.remove('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active')
}



let loginform=document.querySelector('.login-form');
document.querySelector('#login-btn').onclick=() =>{
    loginform.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCarts.classList.remove('active'); 
}



let navbar=document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick=() => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCarts.classList.remove('active');
    loginform.classList.remove('active');
 

}



window.onscroll =() => {

    searchForm.classList.remove('active');
    shoppingCarts.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}





const swiper = new Swiper('.products-slider', {
    speed: 600,
    spaceBetween: 150,

});



const swiper1 = new Swiper('.reviwes-slider', {
    speed: 600,
    spaceBetween: 150,

});





  










































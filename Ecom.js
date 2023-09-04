var home = document.getElementById('home');
var about = document.getElementById('about');
var rated = document.getElementById('rated');
var shop = document.getElementById('shop');
var contact = document.getElementById('contact');

let y=0;
let x=['image4.webp','image5.jpg','image1.jpg'];
setInterval(() => {
    document.getElementById('blured').style.backgroundImage = `url(${x[y]})`;
    document.getElementById('sharped').style.backgroundImage = `url(${x[y]})`;
    y++;
    if(y==3){
        y=0;
    }
}, 3000);

window.addEventListener('scroll',function(){
    if(window.scrollY>0){
        document.getElementById('new').style.backgroundColor = "white";
        document.getElementById('new').style.color = "rgb(255, 0, 81)";
        this.document.documentElement.style.setProperty('--color1','rgb(255, 0, 81)');
    }
    else{
        document.getElementById('new').style.backgroundColor = "rgb(255, 0, 81)";
        document.getElementById('new').style.color = "white";
        this.document.documentElement.style.setProperty('--color1','white');

    }
});

home.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
});
about.addEventListener('click',()=>{
    const offset = document.getElementById('abtn').offsetTop;
    window.scrollTo({
        top:offset,
        behavior:'smooth'
    });
});
rated.addEventListener('click',()=>{
    const offset = document.getElementById('trends').offsetTop;
    window.scrollTo({
        top:offset,
        behavior:'smooth'
    });
});
shop.addEventListener('click',()=>{
    const offset = document.getElementById('shopsy').offsetTop;
    window.scrollTo({
        top:offset,
        behavior:'smooth'
    });
});
contact.addEventListener('click',()=>{
    const offset = document.getElementById('foot').offsetTop;
    window.scrollTo({
        top:offset,
        behavior:'smooth'
    });
});
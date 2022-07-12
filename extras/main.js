const btntoggle = document.querySelector('.toggle-btn');

const video = document.querySelector('.reproducir');
btntoggle.addEventListener('click' , function(){
    document.getElementById('slidebar').classList.toggle('active');
    
});

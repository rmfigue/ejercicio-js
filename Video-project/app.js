const btn   = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');
const ret   = document.querySelector('.ret-btn');
const ava   = document.querySelector('.ava-btn');

btn.addEventListener('click', function() 
{
    if (!btn.classList.contains('slide'))
         { btn.classList.add('slide');
           video.pause();
         }
    else
         { btn.classList.remove('slide');
           video.play();
    }
});

ret.addEventListener('click', function() 
{
    if (!ret.classList.contains('slide'))
         {
           video.currentTime -= 3;
         }    
});

ava.addEventListener('click', function() 
{
    if (!ava.classList.contains('slide'))
         {
           video.currentTime += 3;
         }    
});


const preloader = document.querySelector('.preloader')
window.addEventListener('load',function() {
       preloader.classList.add("hide-preloader");
})
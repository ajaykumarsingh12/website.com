heading=document.getElementsByClassName('heading');
for( let i=0; i<heading.length; i++){
    heading[i].style.cssText+="text-align:center;background:black;padding:5px 10px;margin:5px;color:white;"
}


var sticky=document.getElementById('sticky');
var child=document.getElementsByTagName('a')
window.addEventListener('scroll',()=>{
    if(window.pageYOffset<130){
        sticky.classList.add('document')
    }
    else if(window.pageYOffset>130){
        sticky.classList.remove('document')
    
      
    }

})
var span=document.getElementById('fone');
window.addEventListener('wheel',(event)=>{
    if(event.deltaY>0){
       span.classList.add('span1')
       span.style.display="inline-block";
    }
    else if(event.deltaY<0){
        span.classList.remove('span1');
        span.style.display="none";
    }
})

window.addEventListener('wheel',(event)=>{
    if(event.deltaY>0){
        document.getElementById('coaching').style.cssText+="font-size:20px;color:green;"  
    }
   
    else if(event.deltaY<0){
        document.getElementById('coaching').style.cssText+="font-size:15px; color:white;"  
    }
})

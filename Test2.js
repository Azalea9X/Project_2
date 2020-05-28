//I am selecting the elements that are the buttons chat are changing the slides. 

let button1 = document.querySelector('#Dot1');
let button2 = document.querySelector('#Dot2');
let button3 = document.querySelector('#Dot3');
let button4 = document.querySelector('#Dot4');
let button5 = document.querySelector('#Dot5');
let button6 = document.querySelectorAll('Span.dot');
let button7 = document.querySelectorAll('.active');
 

let para = document.querySelectorAll('p');
for (i = 0; i < para.length; i++){
    console.log(para[i]);
};

//I'm going to try to do code differently. This code is not liking what I am trying to do. It's messing up my JS. 
let images = []; 
let time = 1500; 
 
//Image List
images[0] = "file:///C:/Users/Azale/Documents/Web Development Practice Portfolio/Images/Practice_image_1.jpg";

images[1] = "file:///C:/Users/Azale/Documents/Web Development Practice Portfolio/Images/Practice_image_3.jpg";

images[2] = "file:///C:/Users/Azale/Documents/Web Development Practice Portfolio/Images/Practice_image_5.jpg";

images[3] = "file:///C:/Users/Azale/Documents/Web Development Practice Portfolio/Images/Practice_Image_2.jpg";
 
images[4] = "file:///C:/Users/Azale/Documents/Web%20Development%20Practice%20Portfolio/Images/Web-Background%20(2).jpg";  

function removeAttr(){

for (i = 0; i < button6.length; i++){
 
   //Look for active classes
     
   
    //Start the add event listener!
    button6[i].addEventListener('click', function(e){
    for (i = 0; i < button6.length; i++){
        button6[i].classList.remove('active');
    }
    let target = e.target; 
    target.classList.add('active');
    switch(target) { 
    case button1: 
    image.src = images[0]; 
    
 
    //console.log("Validation"); 
     
    case button2: 
    image.src = images[1]; 
  
     
    //console.log("Validation");
   
    case button3: 
    image.src = images[2]; 
 
    
    //console.log("Validation"); 
   
    case button4:
    image.src = images[3]; 
  
    //console.log("Validation"); 
 
 
    case button5: 
    image.src = images[4]; 
    i = 0;
   
    //console.log("Validation");
 break;

}
    
    }, false);

    
//alert(button6.length);
    }
                                }

 
    
setTimeout(removeAttr, 2000); 
alert(this.innerWidth);
let image = document.querySelector('#image');
  "file:///C:/Users/Azale/Documents/Web%20Development%20Practice%20Portfolio/Images/Blank_Image.jpg";

console.log(image);
 
function changeSrc(e){

image.src = images[i]; 

 
   
    
    if (i < images.length){
     
    i++; 
    
}
   

else {
i = 0;
image.src = "file:///C:/Users/Azale/Documents/Web%20Development%20Practice%20Portfolio/Images/Blank_Image.jpg";
    
}
    

 
 
setTimeout("changeSrc()", time); 
console.log(image).value.src;
}

window.onload = changeSrc; 
//Get the images and put them in an array
//let i = 0; 

 
/*

//Grab the section for the dots. 

let dot_nav = document.querySelector('.dots-navigation');

//Definitely works
let image = document.querySelector('#image');
 

dot_nav.addEventListener('click', function(e){
let selectDot = e.target.closest('.dot');
for (i = selectDot[i]; i < selectDot.length; i++) {

    
i++; 
    
}

}
                        
                        
                        );  
                        
 


//I am following an example from Traversy Media. It's okay. I can do light JS. */
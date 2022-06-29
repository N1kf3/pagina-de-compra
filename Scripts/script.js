function ClickCate(){
    var myar = window.getComputedStyle(document.getElementById("boton"),null).getPropertyValue('visibility')

    const boton = document.getElementById('boton');
   

    if (myar === 'hidden'){
       
        boton.style.visibility= 'visible';
        boton.classList.toggle('active');
   }else{
    boton.style.visibility= 'hidden'
   }
}

function openForm() {
    document.getElementById("login-box").style.display = "block";
  }

function CloseForm(){
    document.getElementById("login-box").style.display = 'none';
    document.getElementById("create-box").style.display = 'none';
}

function CreateForm(){
    document.getElementById("login-box").style.display = 'none';
    document.getElementById("create-box").style.display = "block";
}


// funciones para las tabs 
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


function changeImg(idb){
    let cuenta = 0;
    
    if ( document.URL.includes("item1.html") ) {
        cuenta = 5;
        
    }else if (document.URL.includes("item2.html")){
        cuenta = 6;
        
    }else if (document.URL.includes("item3.html")){
        cuenta = 6;
        
    }else if (document.URL.includes("item4.html")){
        cuenta = 5;
        
    }else if (document.URL.includes("item5.html")){
        cuenta = 1;
        
    }else if (document.URL.includes("item6.html")){
        cuenta = 4;
        
    }else if (document.URL.includes("item7.html")){
        cuenta = 5;
        
    }else if (document.URL.includes("item8.html")){
        cuenta = 5;
        
    }else if (document.URL.includes("item9.html")){
        cuenta = 6;
        
    }else if (document.URL.includes("item-10.html")){
        cuenta = 7;
        
    }else if (document.URL.includes("item-11.html")){
        cuenta = 5;
        
    }else if (document.URL.includes("item-12.html")){
        cuenta = 5;
        
    }else if (document.URL.includes("item-13.html")){
        cuenta = 5;
        
    }else if (document.URL.includes("item-14.html")){
        cuenta = 5;
        
    }else if (document.URL.includes("item-15.html")){
        cuenta = 5;
        
    }else if (document.URL.includes("item-16.html")){
        cuenta = 5;
        
    }else if (document.URL.includes("item-17.html")){
        cuenta = 6;
        
    }else if (document.URL.includes("item-18.html")){
        cuenta = 5;
        
    }


   
    for(let i = 0; i <= cuenta; i++){
        myar = window.getComputedStyle(document.getElementById('img'+i),null).getPropertyValue('visibility');
        imagen = document.getElementById('img'+i);
        document.getElementById('but'+i).classList.replace('circleA', 'circle');
        
        if (myar === 'visible'){
            imagen.style.visibility = 'hidden';
            imagen.style.display = 'none';
            
        }
    }
    document.getElementById('img'+idb).style.visibility = 'visible';
    document.getElementById('img'+idb).style.display = 'block';
    document.getElementById('but'+idb).classList.replace('circle', 'circleA');
    
   
}

var canvas = document.getElementById("output");
var context = canvas.getContext("2d");
var canvasw = canvas.width;
var canvash = canvas.height;

function checkthis()
   {
      var numbers = /^[0-9]+$/;
     var check = document.getElementById("radius").value;
     if(check.match(numbers)){

     }else{
         alert("numbers only")
         return false
     }
    }
      


function volume_sphere(){
    var volume;
    var radius = document.getElementById('radius').value;
    radius = Math.abs(radius);
    volume = (4/3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4);
    document.getElementById('volume').value = volume;
    

    return draw(radius);
    return false;
   } 
  


function draw(radius){
    
    if(radius >= canvasw/2&&canvash){
        alert("radius to big")
    }
    
    var c = document.getElementById("output");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "gold";
ctx.arc(canvasw/2, canvash/2,radius, 0, 2 * Math.PI);
ctx.stroke();
}

function cleanup(){
    const canvas = document.getElementById('output');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
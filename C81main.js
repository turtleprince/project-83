


var mouse_event = "empty"; 
var last_mouse_x, last_mouse_y;


canvas = document.getElementById('myCanvas');
ctx = document.getElementById('myCanvas').getContext("2d");

color = "blue";
line_Width = 2;






canvas.addEventListener("mousedown", my_mouse_down);

function my_mouse_down(e){
    color = document.getElementById("color").value;
    line_Width = document.getElementById("width_line").value;
    
  
    mouse_event = "mouse_Down";

}

canvas.addEventListener("mouseup", my_mouse_up);

function my_mouse_up(e){

    mouse_event = "mouse_Up";
}


canvas.addEventListener("mouseleave", my_mouse_leave);

function my_mouse_leave(e){

    mouse_event = "mouse_Leave";
}



canvas.addEventListener("mousemove", my_mouse_move);

function my_mouse_move(e){


    current_mouse_x = e.clientX- ctx.offsetLeft;
    current_mouse_y = e.clientY- ctx.offsetTop;


    if (mouse_event == "mouse_Down"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_Width;
        ctx.moveTo(last_mouse_x,last_mouse_y);
        ctx.lineTo(current_mouse_x,current_mouse_y);
        ctx.stroke();
    }

    last_mouse_x = current_mouse_x;
    last_mouse_y = current_mouse_y;

}






function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

/*
function draw_circle(mousex,mousey){


    ctx.arc(mousex, mousey, 40 ,0 , 2*Math.PI);
    ctx.stroke();
} */
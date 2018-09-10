var canvas = document.querySelector("canvas");

var ctx = canvas.getContext("2d");

var timer = setInterval(main, 1000/60);

var s = new GameObject();
 

function main()
{
    ctx.clearRect(0,0, canvas.width,canvas.height);
 
    
        s.drawRect();
        s.move();

        if (s.y+s.h/2 > canvas.height)
        {
            s.vy = -s.vy;

        }
         if (s.y-s.h/2 < 0)
         {
             s.vy = -s.vy;
         }

}

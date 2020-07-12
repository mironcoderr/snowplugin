

let snow = document.querySelector(".snow");
let ctx = snow.getContext("2d");
let width = window.innerWidth;
let height = window.innerHeight;

snow.width = width;
snow.height = height;

let arr = [];

for(i=0; i<100; i++) {
    arr.push({
        x : Math.random() * width,
        y : Math.random() * height,
        r : Math.random() + 3,
        d : Math.random() + 1,
    })
}

function snowPlugin() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "white";
    ctx.beginPath();

    for(i=0; i<100; i++) {
        ctx.moveTo(arr[i].x, arr[i].y);
        ctx.arc(arr[i].x, arr[i].y, arr[i].r, 0, Math.PI * 2);
    }

    ctx.fill();

    for(i=0; i<100; i++) {
        arr[i].y += Math.pow(arr[i].d, 2);

        if(arr[i].y > height) {
            arr[i] = {
                x : Math.random() * width,
                y : 0,
                r : arr[i].r,
                d : arr[i].d,
            }
        }
    }
}

setInterval(function(){
    snowPlugin();
}, 50);




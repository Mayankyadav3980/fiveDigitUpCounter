
let n=0;
const ip = document.getElementById("ip");
ip.addEventListener('change', (e) => {
    n = e.target.value;
})

const btn = document.getElementById('btn');
btn.addEventListener('click', handleClick );
let id=0;
function handleClick(){
//   console.log(n);
//   let onceD = document.querySelector(".b5");
   id = setInterval(timer, 1000);
  function timer (){
    if (n == -1) {
      clearInterval(id);
      return;
    }
    // console.log(n);
    let temp = n;
    let o = temp%10;temp=Math.floor(temp/10);
    let t = temp%10; temp=Math.floor(temp/10);
    let h = temp%10; temp = Math.floor(temp/10);
    let th = temp%10; temp = Math.floor(temp/10);
    let tth  = temp%10; temp = Math.floor(temp/10);
    console.log(tth,th, h, t, o);
    document.querySelector(".b5").textContent =o  ;
    document.querySelector(".b4").textContent =t ;
    document.querySelector(".b3").textContent =h  ;
    document.querySelector(".b2").textContent =th  ;
    document.querySelector(".b1").textContent =tth  ;

    n--;
  };
};

function stop(){
    clearInterval(id);
}

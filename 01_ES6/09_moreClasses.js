class Star{
  constructor(){
    this.x = Math.floor(Math.random() * 100);
    this.y = Math.floor(Math.random() * 100);
    this.size = Math.floor(Math.random() * 20) + 16
  }   

  show(){
    let container = document.querySelector('main')
    let newElement = document.createElement('div')
    newElement.classList.add(`star${counter}`, 'star')
    container.appendChild(newElement)
    
  }

  position(){
    
    // console.log('size',this.size)
    let grayScale =  this.size.map(10, 35, 100, 255);
    // console.log(grayScale)
    let cssString = `
    position:absolute;
    width:${this.size}px;  
    height:${this.size}px;  
    left:${this.x}%; top: ${this.y}%; 
    background-color: rgb(${grayScale},${grayScale},${grayScale});
    z-index: ${this.size}`
    // console.log(cssString)
    let selector = `.star${counter}`
    let star = document.querySelector(selector)
    // console.log(star)
    star.style.cssText = cssString;
    counter++
  }


}
Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

let counter = 0;
let stars = [];


const star = new Star()
for(let i = 0 ; i < 100; i++){
  stars[i] = new Star()
  stars[i].show()
  stars[i].position()

}
document.querySelector('main').addEventListener('mousemove', (e)=>{
  // console.log(window)
  document.querySelectorAll('.star').forEach(item =>{
   
    requestAnimationFrame(()=>{
      // console.log(x)
      let mouseX = e.clientX
      let mouseY = e.clientY
      // console.log(-50 * item.style.width / 100)
      let itemW = parseInt(item.style.width);
      // console.log('mouseX', mouseX)
      distanceX = mouseX.map(0 , window.innerWidth, -itemW * 2, itemW * 2 )
      // console.log(item,'distanceX',distanceX)
      distanceY = mouseY.map(0 , window.innerHeight, -itemW * 2, itemW * 2 )
      item.style.cssText += `transform: translate(${distanceX}px, ${distanceY}px);`
    });
    
  })
}) 


window.onload = function () {
  setTimeout( () => {
    fadeOutEffect()
  }, 3000);
}

function fadeOutEffect() {
  let fadeTarget = document.querySelector('h1')
  let fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
          fadeTarget.style.opacity = 1;
      }
      if (fadeTarget.style.opacity > 0) {
          fadeTarget.style.opacity -= 0.1;
      } else {
          clearInterval(fadeEffect);
      }
  }, 100);
}
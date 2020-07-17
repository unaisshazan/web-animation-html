var CloudElem = document.getElementById("cloud-div")
var animatedElem = CloudElem.animate([
    { transform: 'translate(-1100px,0)' },
    { transform: 'translate(800px,0)' },

], {
    duration: 5000,
    iterations: Infinity,
   
})

var planeElem = document.getElementById('plane-div')
var planeAnimation = planeElem.animate([
    { transform: 'translate(0,0)' },
    { transform: 'translate(600px,-500px)' },
    { transform: 'translate(2000px,-500px)' },
    

], {
    duration: 3000,
    iterations: Infinity,
    playbackRate:-4,
})

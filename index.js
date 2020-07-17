var CloudElem = document.getElementById("cloud-div")
var animatedElem = CloudElem.animate([
    { transform: 'translate(0,0)' },
    { transform: 'translate(600px,0)' },

], {
    duration: 5000,
    iterations: Infinity,
    playbackRate:-4,
})

var planeElem =document.getElementById("plan-div")
var planeAnimation = planeElem.animate([
    { transform: 'translate(0,0)' },
    { transform: 'translate(600px,0)' },

], {
    duration: 5000,
    iterations: Infinity,
    playbackRate:-4,
})

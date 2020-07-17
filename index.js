var CloudElem = document.getElementById("cloud-div")
var animatedElem = CloudElem.animate([
    { transform: 'translate(100%,0)' },
    { transform: 'translate(-100%,0)' },

], {
    duration: 5000,
    iterations: Infinity,
   
})

var planeElem = document.getElementById('plane-div')
var planeAnimation = planeElem.animate([
    { transform: 'translate(0,0)' },
    { transform: 'translate(600px,-500px)' },
    { transform: 'translate(2000px,-100%)' },
    

], {
    duration: 3000,
    iterations: Infinity,
    playbackRate:-4,
})

var birdElem = document.getElementById('bird-image')
var birdAnimation = birdElem.animate([
    { transform: 'translate(0,0)' },
    { transform: 'translate(100%,0)' },
    { transform: 'translate(1000px,0)' },
    

], {
    duration: 3000,
    iterations: Infinity,
    playbackRate:-4,
})
var birdElem = document.getElementById('bird-image2')
var birdAnimation = birdElem.animate([
    { transform: 'translate(0,0)' },
    { transform: 'translate(100,0)' },
    { transform: 'translate(1000px,0)' },
    

], {
    duration: 3000,
    iterations: Infinity,
    playbackRate:-4,
})


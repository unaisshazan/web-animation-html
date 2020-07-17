var CloudElem = document.getElementById("cloud-div")
var animatedElem = CloudElem.animate([
    { transform: 'translate(0,0)' },
    { transform: 'translate(600px,0)' },

], {
    duration: 5000,
    iterations: Infinity
})

document.addE
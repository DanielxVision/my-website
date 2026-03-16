particlesJS("particles-js", {
particles: {
number: { value: 80 },
color: { value: "#ffffff" },
shape: { type: "circle" },
opacity: { value: 0.2 },
size: { value: 3 },
move: {
enable: true,
speed: 1
}
},
interactivity: {
events: {
onhover: {
enable: true,
mode: "repulse"
}
}
}
});

function scrollToTutorials(){
document.getElementById("tutorials").scrollIntoView({
behavior:"smooth"
})
}

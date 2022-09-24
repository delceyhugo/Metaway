document.addEventListener('mousemove', (e) => {
    document.querySelector('.torch').style.transform = `translate(${e.pageX}px, ${e.pageY}px)`
})
document.addEventListener('mouseleave', (e) => {
    document.querySelector('.torch').style.transform = `translate(-10000px, -10000px)`
})
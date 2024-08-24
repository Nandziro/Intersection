let fruitImage = document.querySelectorAll('.fruits__list-img')
let fruitText = document.querySelectorAll('.fruits__list-li')
let observer = new IntersectionObserver(item => {
    item.forEach(elem => {
        if(elem.isIntersecting){
            elem.target.classList.add("active")
        }  
        else{
            elem.target.classList.remove("active")
        }
    })
})
fruitImage.forEach(item => {
    observer.observe(item)
})

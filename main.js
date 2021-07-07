function showImg() {
    let targetElement = document.querySelector(".card") 
    
    for (let customer of customers) {
        let pictureEl = document.createElement("div")
        pictureEl.innerHTML = createImageElement(customer.picture.large)
        targetElement.appendChild(pictureEl) 
    }
}

function createImageElement (url) {
    return `<img src=${url}>`
}

showImg()
console.log("LOADING")
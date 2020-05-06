//const customers is from customers.js 
    //why square brackets? u r assigning the component the elements in the array that will be used in function renderPageContent

function showImg() {
    let targetElement = document.querySelector("#card") 
//^this is a declaration. Let is declaring a local variable that will be initialized to a value below. So we are grabbing the node w class #card and calling it in the following function.
    for (let object of customers) {
//for/of loops through values of an iterable object; customers are iterable
        let pictureEl = document.createElement("li")
//this is a declaration creating node "li". ListItemElement of "li" will be pulled below
        pictureEl.innerHTML = createImageElement(customer.picture.medium)
//We are taking the li element created and creating an image element. Here we are telling the machine that imgUrl is the item of the function. We are going into const customer and pulling from picture pulling thumbnail
        pictureEl.appendChild(targetElement(object.title))
//This should be adding the title element as well
        targetElement.appendChild(listItemElement)
//adding the created element to the DOM
        console.log("li should be created and added to DOM")
    }
}

function createImageElement (url) {
    return `<img src=${url}>`
}

function createTitleElement (title) {
    let titleEl = document.createElement("h1")
    titleEl.innerText = `${title}`
    return titleEl
}

// showImg() 
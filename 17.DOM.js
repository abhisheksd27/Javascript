// // DOM Manipulation

// // get element by id

// const  heading = document.getElementById('main-heading')
// console.log(heading)



// // classname
// const movies_list=document.getElementsByClassName('movies-list')
// console.log(movies_list)


// // getelement by tag

// const h2s = document.getElementsByTagName('h2')
// console.log(h2s)


// // query selector

// const first_movie = document.querySelector('.movies-list li:first-child')
// console.log(first_movie)
// const container = document.querySelector('.container')
// console.log(container)

// // query selector all

// const all_movies = document.querySelectorAll('.movies-list li')
// console.log(all_movies)


console.log("-------------------------------------------------------------")

// styling an element


// const title = document.querySelector('#main-heading')

// title.style.color ='red';


// const list_items = document.querySelectorAll('.list-items')

// list_items.forEach(item => {
//     item.style.fontSize = '2rem';
// })


// list_items.forEach(i=>{
//     i.addEventListener('click', function(){
//         console.log(this.innerText)
//     })
// })


console.log("-------------------------------------------------------------")


// create element

// const ul = document.querySelector('ul')

// const li= document.createElement('li')



// // adding elements
// ul.append(li)

// // modifying the text

// li.innerText = 'Avengers'

// const firstListItem= document.querySelector('.list-items')

// console.log(firstListItem.innerText)
// console.log(firstListItem.innerHTML)
// console.log(firstListItem.textContent)



console.log("-------------------------------------------------------------")

// // modifying elements class and attributes

// // li.setAttribute('id','main-heading');
// // li.removeAttribute('id')


// // const title=document.querySelector('#main-heading')

// // console.log(title.getAttribute('id'))



// // class

// li.classList.add('list-items')

// li.classList.remove('list-items')

// console.log(li.classList.contains('list-items'))

// // remove elements

// li.remove();

console.log("-------------------------------------------------------------")


//  traversing the DOM

// parent node traversal

// let ul = document.querySelector('ul')
// console.log(ul)
// console.log(ul.parentNode.parentNode)
// console.log(ul.parentElement.parentElement)

// const html = document.documentElement;
// console.log(html.parentNode)
// console.log(html.parentElement)

// child node traversal

// console.log(ul.childNodes)
// console.log(ul.children)
// console.log(ul.firstElementChild)
// console.log(ul.lastElementChild)
// console.log(ul.childElementCount)

// ul.childNodes[1].style.backgroundColor="blue";

// sibling node traversal
// const div = document.querySelector('div')
// console.log(div.childNodes)

// console.log(ul.previousSibling)
// console.log(ul.nextSibling)
// console.log(ul.previousElementSibling)
// console.log(ul.nextElementSibling)





console.log("-------------------------------------------------------------")



// Event Listeners

// element.addEventListener("click", function);

// const buttonTwo= document.querySelector(".btn-2")


// function alertBtn(){
//     alert("Button 2 Clicked")
// }
// buttonTwo.addEventListener("click", alertBtn)

// buttonTwo.removeEventListener("click", alertBtn);



// mouse over

// const newBackgroundColor = document.querySelector('.box-3')

// function changeBgColor(){
//     newBackgroundColor.style.backgroundColor = 'blue'
// }

// newBackgroundColor.addEventListener("mouseover", changeBgColor)

console.log("-------------------------------------------------------------")
// reveal event

// const revealBtn= document.querySelector('.reveal-btn')

// const hiddenContent = document.querySelector('.hidden-content')



// function revealContent(){
//     if(hiddenContent.classList.contains('reveal-btn')){
//         hiddenContent.classList.remove('reveal-btn')

        
//     }else{
//         hiddenContent.classList.add('reveal-btn')
//     }
// }

// revealBtn.addEventListener("click", revealContent)



console.log("-------------------------------------------------------------")

// Event Propagation


// Event capturing
// target
// Event bubbling


// window.addEventListener("click",function(){
//     console.log("Window Clicked")
// },false)

// document.addEventListener("click",function(){
//     console.log("Document Clicked")
// },false)

// document.querySelector(".div2").addEventListener("click",function(e){
//     // e.stopPropagation()
//     console.log("Div 2 Clicked")
// },{once:true})

// document.querySelector(".div1").addEventListener("click",function(){
//     console.log("Div 1 Clicked")
// },false)

// document.querySelector("button").addEventListener("click",function(e){
//     console.log(e.target.innerText='Clicked')
//     if(e.target.innerText==="Clicked"){
//         e.target.innerText='Click'
//     }else{
//         e.target.innerText='Clicked'
//     }
    
// },false)


console.log("-------------------------------------------------------------")


// Event Delegation

// it allows users to append a single event lisner to a 
// parent elememnt that adds it to all of its present and 
// future descendants that match a selector



// document.querySelector("#Football").addEventListener
// ("click",function(e){
//     console.log("Football clicked")

//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor = "red"
//     }
// })


document.querySelector('#sports').addEventListener("click",function(e){
    // console.log(e.target.getAttribute('id')+ ' is Clcked')

    const target = e.target;
    
    if(target.matches('li')){
        if(target.style.backgroundColor === "red"){
                target.style.backgroundColor = ""
        }else{
                target.style.backgroundColor = "red"
        }
        
    }
})


const sports = document.querySelector("#sports")

const newSport = document.createElement('li');

newSport.innerText = 'rugby';
newSport.setAttribute('id','rugby');

sports.appendChild(newSport);


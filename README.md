# expanding-card

<img width="1429" alt="Screenshot 2021-03-03 at 21 53 41" src="https://user-images.githubusercontent.com/71224770/109877736-496a9a00-7c6b-11eb-8cf3-bc9f7926d8ff.png">

project notes

1. html<br />
h1 - title<br />
div - box<br />
p - text<br />

2. css<br />
flexbox<br />
background-image<br />
transition<br />
p - text is hidden, but visible when the card fully expands<br />
@media<br />

3. js<br />
click - eventListener<br />

challenge by Brad Traversy & Florin Pop on Udemy "50 Project in 50 Days"


# takeout from the instructor

1. html<br />
background-image used inline css.<br />

2. css<br />
  a. .container: width using vw (used padding + px, so had to change it at @media)<br />
  b. for the div box<br />
    background-size: cover; (this cropped my images since they are bigger than boxes, so I used 100% 100%)<br />
    background-repeat: no-repeat; (this should've been in the .box, not in each box selectors)<br />
    <b>cursor: pointer;</b> (didn't think of it)<br />
    parent element's position: relative to make children's position: absolute(for the text, but I used flex for the positioning)<br />
    transition: flex 0.7 ease-in; (it didn't work what I expected)<br />
  c. text: opacity: 0; & active selector: opacity: 1; transition: opacity 0.3s ease-in 0.4s;(I used visibility: hidden & javascript)<br />
  d. @media: showing 3 boxes <em>.class-name:nth-of-type(4), .class-name:nth-of-type(5) {display: none;}</em> (I used flex-direction: column)<br />

3. JavaScript<br />
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
} 

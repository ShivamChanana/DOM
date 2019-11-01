const user = 'tom'
document.getElementById("app").innerHTML=`
<h1> Hello ${user} </h1>
`
const heading = document.createElement("h1")
console.log(heading)
heading.innerHTML= `<span> Hello create Element</span> ${document.URL}`
document.body.appendChild(heading)

const test = "simple string"
const p1 = document.createElement("p")
p1.innerHTML = test
document.getElementById("app2").appendChild(p1)

const logo = document.querySelector("#logo")
logo.innerText = "Yo new logo"
console.log(logo)


<ol>
    <li id = "web-id">mern</li>
    <li> html</li>
    <li class = "web-class"> css</li>
    <li class = "web-class">js</li>
    </ol>
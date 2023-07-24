const header=document.createElement('header')
const logo=document.createElement('h3')

logo.innerText=document.createTextNode='ELzero'

header.appendChild(logo)
document.body.appendChild(header)
header.className="website-head"
header.style.backgroundColor="white"
header.style.height="50px"
document.querySelector('body').style.margin='0'
const h3= document.querySelector('h3')
header.style.borderRadius="10px"
header.style.display="flex"
header.style.justifyContent='space-between'
h3.style.paddingLeft="10px"
h3.style.color="green"
h3.style.marginTop='15px'
document.querySelector('body').style.backgroundColor="grey"
document.querySelector('body').style.cssText="display:flex; flex-direction: column; height :100%;  padding: 0;";
document.querySelector('html').style.cssText="height:100%; margin:0; padding: 0;"

const navbar=document.createElement('ul')
const home=document.createElement("li")
const about=document.createElement("li")
const service=document.createElement("li")
const contact=document.createElement("li")
home.innerText=document.createTextNode="Home"
about.innerText=document.createTextNode="About"
service.innerText=document.createTextNode="Service"
contact.innerText=document.createTextNode="Contact"

navbar.append(home,about,service,contact)
header.appendChild(navbar)
navbar.style.cssText="display:flex;gap:20px;list-style-type:none;padding-right:20px"


// FOR THE CONTENT


const content=document.createElement('div')
content.className="content"

for( var i=0;i<15;i++){
    const span=document.createElement("span")
    const product=document.createElement("div")
    
    const br=document.createElement("br")
    span.textContent=i+1 
    product.className="product"
    product.innerText=document.createTextNode='Product '
    product.appendChild(br)
    product.appendChild(span)
    content.appendChild(product)
   
    document.body.appendChild(content)
    product.style.cssText=" padding:20px; border:1px solid rgb(221,221,221);border-radius:6px; text-align:center; margin:10px; display:inline-block; height:60px; width:calc((100%)/5); background-color:white;"
    span.style.cssText="font-size:40px"
    content.style.flex="1"
    content.style.backgroundColor="grey"
}

// for the footer

const footer=document.createElement('footer')
 const head3=document.createElement('h4')

head3.innerText=document.createTextNode='Challenge from ELZERO WEB SCHOOL CODDED BY ISLAM BIROUK Copyright 2023'

document.body.appendChild(footer)
 
footer.append(head3);

footer.style.cssText='flex-shrink: 0; background-color:green;color:white; padding:0px;   width:100%; text-align:center; font-size:20px'

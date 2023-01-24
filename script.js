// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
//Task 1
let mainEl = document.querySelector('main');
//console.log(mainEl);

//Task 1.1
//console.log(--main-bg)
mainEl.style.backgroundColor = 'var(--main-bg)'

//Tast 1.2
mainEl.innerHTML = '<h1> SEI Rocks! </h1>'

//Task 1.3
 mainEl.classList.add("flex-ctr")

//Task 2.0
let topMenuEl = document.getElementById ('top-menu');
//console.log(topMenuEl);

//Tass 2.1
topMenuEl.style.height = '100%'

//Task 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

//Task 2.3
topMenuEl.classList.add("flex-around")

//Task 3.0

//Task 3.1
//let li = document.createElement('li')
// VG.setAttribute("href","www.google.com")
menuLinks.forEach((link) => {
  let a = document.createElement('a')
  a.setAttribute("href",link.href)
  a.textContent = link.text
  topMenuEl.appendChild(a)
})

//Task 4.0
let subMenuEl = document.getElementById('sub-menu')

//Task 4.1
subMenuEl.style.height = '100%'

//Task 4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'

//Task 4.3
subMenuEl.classList.add('flex-around')

//Task 4.4
subMenuEl.style.position = 'absolute'

//Task 4.5
subMenuEl.style.top = '0'

//Task 5.1
let topMenuLinks = topMenuEl.querySelectorAll('a')
//console.log(topMenuLinks)
//topMenuLinks.forEach((item) => console.log(item))
let showingSubMenu = false

//Task 5.2

// let ul = document.querySelector('ul')
// ul.addEventListener('click', handleCLick);
// function handleCLick(evt){
//     console.log(evt.target);
// }
//console.log(topMenuEl)
topMenuEl.addEventListener('click', fnListener);

function fnListener(evt){
  evt.preventDefault();
  if(evt.target.tagName.toLowerCase() !== 'a'){
    return;
  }
  //console.log(evt.target.textContent)
  //console.log(evt.target.tagName.toLowerCase())

  //Task 5.3
  if (evt.target.classList.contains('active')){
    evt.target.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    return;
  }
  //Tast 5.4
  topMenuLinks.forEach((link) => {
    link.classList.remove('active')
  })
  // for(let i=0; i <topMenuLinks.length; i++)
  //   topMenuLinks[i].class
  //evt.target.classList.remove('active');
  //Task 5.5
  evt.target.classList.add('active');
  //Task 5.6
  let linkCopy= ''
  menuLinks.forEach(link => {
    if(evt.target.text === link.text)
      if(link.hasOwnProperty('subLinks')){
        //console.log(link)
        showingSubMenu = true
        linkCopy = link
      }else{
        showingSubMenu = false
      }
    //Task 5.7
    if(showingSubMenu){
      buildSubMenu(linkCopy)  
      subMenuEl.style.top = '100%'
    }else{
        subMenuEl.style.top = '0'
    }
  })//Task 6.4
  if(evt.target.textContent === 'about')
    mainEl.innerHTML = '<h1> ' + evt.target.textContent.toUpperCase() + ' </h1>' ;
 } 
 //console.log(subMenuEl)
//     menuLinks.forEach((link) => {
//   let a = document.createElement('a')
//   a.setAttribute("href",link.href)
//   a.textContent = link.text
//   topMenuEl.appendChild(a)
// })
//Task 5.8
function buildSubMenu(linkCopy){
  subMenuEl.innerHTML="";
  //sublinks.forEach(sublink => {
  for(let sublink of linkCopy.subLinks){
    let a = document.createElement('a');
    a.setAttribute("href",sublink.href);
    a.textContent = sublink.text;
    subMenuEl.appendChild(a);
  }
}
//Task 6.0
subMenuEl.addEventListener('click',subFnListener);

function subFnListener(evt){
  evt.preventDefault();
  if(evt.target.tagName.toLowerCase() !== 'a'){
    return;
  }
  //Task 6.1
  showingSubMenu = false;
  subMenuEl.style.top = '0';
  //Task 6.2
  topMenuLinks.forEach((link) => {
    link.classList.remove('active')
  })
//Task 6.3
  mainEl.innerHTML = '<h1> ' + evt.target.innerText + ' </h1>' ;
}

  
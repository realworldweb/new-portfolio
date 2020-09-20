class MobileNav{
 constructor(){
 this.toggler = document.querySelector('.header__toggle')
 this.togglerArea = this.toggler.getAttribute('data-target')
 this.togglerState = this.toggler.getAttribute('aria-expanded')
 this.load = true
 this.events()

 
 }
events(){

this.toggler.addEventListener('click', e =>  this.run(e))

} 
 
 
run(){

 const head = this.togglerArea
 const childEl = document.querySelector(head).children
 if( this.load === true)
 for(const el of childEl){//set intial values for all children
 
  el.style.transition = 'opacity 4s'
  el.style.opacity = 0
  
 }
 if(this.togglerState === 'false'){
  
  
  this.togglerState = 'true'
  document.querySelector('.header').classList.remove('header--navclosed')//open header
  
  

  setTimeout(function(){//reveal area nav
  document.querySelector(head).classList.remove('d-none') 
 document.querySelector(head).classList.add('d-flex') 
 }, 150)
  
 setTimeout(function(){//reveal area nav
  
  for(const el of childEl){//reveal children 
  el.style.opacity = 1
  }
  }, 250)
  
  

  
  
  
 }else{
  this.togglerState = 'false'
  
    for(const el of childEl){//hide children
 el.style.opacity = 0
    }
  setTimeout(function(){
 document.querySelector('.header').classList.add('header--navclosed')//close header
  }, 100)
  
  setTimeout(function(){//hide area nav
  document.querySelector(head).classList.add('d-none')
  document.querySelector(head).classList.remove('d-flex')
  }, 600)

}
}
}

export default MobileNav;
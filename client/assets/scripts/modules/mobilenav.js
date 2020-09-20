class MobileNav{
 constructor(){
 this.toggler = document.querySelector('.header__toggle')
 this.togglerArea = this.toggler.getAttribute('data-target')
 this.togglerState = this.toggler.getAttribute('aria-expanded')
 this.events()

 
 }
events(){

this.toggler.addEventListener('click', e =>  this.run(e))

} 
 
 
run(){
 
 const head = this.togglerArea
 const childEl = document.querySelector(head).children
 for(const el of childEl){
 
  el.style.transition = 'opacity 2s'
  
 }
 if(this.togglerState === 'false'){
  
  
  this.togglerState = 'true'
  document.querySelector('.header').classList.remove('header--navclosed')
  
  
 setTimeout(function(){
  document.querySelector(head).classList.remove('d-none') 
  document.querySelector(head).classList.add('d-flex')
  
  }, 400)
  
  for(const el of childEl){
  el.style.opacity = 1
  }

  
  
  
 }else{
  this.togglerState = 'false'
  
    for(const el of childEl){
 el.style.opacity = 0
    }
  setTimeout(function(){
 document.querySelector('.header').classList.add('header--navclosed')
  }, 100)
  
  setTimeout(function(){
  document.querySelector(head).classList.add('d-none')
  document.querySelector(head).classList.remove('d-flex')
  }, 600)

}
}
}

export default MobileNav;
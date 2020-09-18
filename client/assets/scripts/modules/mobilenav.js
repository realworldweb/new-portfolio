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
 if(this.togglerState === 'false'){
  
  this.togglerState = 'true'
  document.querySelector(head).classList.add('collapsing')
  
  setTimeout(function(){
 document.querySelector(head).classList.remove('collapsing')
 document.querySelector(head).classList.add('header__tran')
}, 50)

  document.querySelector(head).classList.add('show')
  document.querySelector(head).classList.remove('header__tran')
 }else{
  this.togglerState = 'false'
 
  document.querySelector(this.togglerArea).classList.remove('show')
  
 }
}



}


export default MobileNav
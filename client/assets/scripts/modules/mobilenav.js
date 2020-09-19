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
 
  
  
  document.querySelector('.header').style.height = '292px'
  document.querySelector(head).style.position = 'absolute'
  document.querySelector(head).classList.add('show')

  
 }else{
  this.togglerState = 'false'
    document.querySelector('.header').style.height= ''
  document.querySelector(this.togglerArea).classList.remove('show')
  
 }
}



}


export default MobileNav
class Filter{
constructor(){
this.filter = document.querySelector('.filter')
this.filterToggle = document.querySelector('.filter__toggle')
this.opened = false
this.events()




}

events(){

this.filterToggle.addEventListener('click', e=> this.toggleFilter(e))


}

toggleFilter(){

 
if(this.opened === true){

this.filter.classList.add('filter--hidden')
this.filterToggle.classList.remove('filter__toggle--opened')
this.opened = false

}else{

this.filter.classList.remove('filter--hidden')
this.filterToggle.classList.add('filter__toggle--opened')
this.opened = true

}


}



}




export default Filter
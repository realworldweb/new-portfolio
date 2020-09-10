class Projects{
 constructor(projectsList){
  this.projectsContainer = document.getElementById('projectsContainer')
  
  this.projectsContainer.innerHTML =`<h1>${projectsList[0].name}</h1>`
  
  
}
 
 
 
}
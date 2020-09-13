class Project{
 constructor(projectsList){
 this.projectContainer = document.getElementById('projectDetails')
 this.projectList = projectsList
 this.locationString = window.location.href
  this.queryString = this.locationString.split('?')
  if(this.queryString.length > 1){//length should be two location string and query
   this.queryUrl = this.queryString[1].split('=')
   this.queryArray = this.queryUrl[1].split('%20')
   this.query = this.queryArray.join(' ')
   
   
  }else{//length less than two no query given cotinue as normal
  
   this.projectContainer.innerHTML = `<p class="d-flex justify-content-center productdetails__error mb-5">Please select a valid project</p>
   <a class="btn d-block w-50 mx-auto productdetails__error-link mt-5">Return to projects</a>`
   
   return
  }
 this.setProject()
 
 
 
 
 
}



setProject(){



}












}


export default Project;
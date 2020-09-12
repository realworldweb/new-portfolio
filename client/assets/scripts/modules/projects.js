class Projects{
 constructor(projectsList){
  this.projectsPane = document.getElementById('projectsPane')
  this.projects = projectsList
  this.locationString = window.location.href
  this.queryString = this.locationString.split('?')
  if(this.queryString.length > 1){//length should be two location string and query
   this.queryUrl = this.queryString[1].split('=')
   this.queryArray = this.queryUrl[1].split('%20')
   this.query = this.queryArray.join(' ')
   
   
  }else{//length less than two no query given cotinue as normal
   this.query = 0
  }
  this.prepareQuery()
  this.loadProjects()
 }
 
 
prepareQuery(){
 
  
  if(this.query.length > 0){//catch query
   console.log(this.query)
  this.projectThumbs = this.projects.filter(project => {
   return project[this.queryUrl[0]].includes(this.query)
  
   
  }).map(project => {
   const mappedArray = []
   mappedArray.push({"name": project.name , "img": project.img})
   return mappedArray;
  })
  
 
  
 }
 else{//no query proceed
  
  this.projectThumbs = this.projects.map(project => {
   const mappedArray = []
   mappedArray.push({"name": project.name , "img": project.img})
   return mappedArray;
  })
  
 }
  
 
 
}
 
loadProjects(){
   
 
    for(const project of this.projectThumbs){//add default thumb selection
    
     this.projectsPane.innerHTML +=`<a href="/projects/name=${project[0].name}" class="projects__card position-relative text-white mx-3 mr-2 mb-4">
 <picture>
  <source sizes="1000px" srcset="assets/images/${project[0].img.medium.url} 1200w" media="(min-width: 2200px)">
  <source sizes="700px" srcset="assets/images/${project[0].img.medium.url} 800w" media="(min-width: 1800px)">
  <img sizes="500px"  srcset="assets/images/${project[0].img.small.url} 650w" src="assets/images/${project[0].img.small.url}" class="card-img rounded" alt="${project[0].img.alt}">
 </picture>
  <div class="position-absolute projects__overlay">
  <p class="position-relative d-block mx-auto text-center"><i>${project[0].name}</i></p>
    <span class="sr-only">link to project ${project[0].name}</span>
  </div>
</a>`
    
    
    }
    
  }
}
 
 
 


export default Projects;
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
  
   this.projectContainer.innerHTML = `<p class="d-flex justify-content-center projectdetails__error mb-5">Please select a valid project</p>
   <a type="button" href="projects.html" class="btn d-block w-30 m-5 mx-auto projectdetails__error-link">Return to projects</a>`
   
   return
  }
 this.setProject()
 
 
 
 
 
}



setProject(){

const project = this.projectList.filter(project => {return project[this.queryUrl[0]] === this.query})
const projectTags = project[0].frontTools.concat(project[0].backTools, project[0].devTools);

this.projectContainer.innerHTML = `
<div class="d-block position-relative mx-auto bg-white pb-3 projectdetails__main">
<picture>
<source sizes="1000px" srcset="assets/images/${project[0].img.large.url} 1200w" media="(min-width: 1800px)">
<source sizes="700px" srcset="assets/images/${project[0].img.medium.url} 800w" media="(min-width: 1000px)">
<img sizes="500px" srcset="assets/images/${project[0].img.small.url} 550w" src="assets/images/${project[0].img.small.url}" alt="${project[0].img.alt}" class="d-block mx-auto float-lg-left projectdetails__main-pic">
</picture>
<h1 class="d-block text-center projectdetails__title">${project[0].name}</h1>

<a type="button" href="${project[0].gitHub}" class="btn  text-center d-block d-lg-inline position-relative mx-auto mb-2 projectdetails__button" rel="noopener" target="_blank"><i aria-hidden="true" class="fab fa-github-square mx-2" alt="github"></i>GitHub Source<span class="sr-only">Link to github source</span></a><br>
<a type="button" href="${project[0].live}" class="btn text-center d-lg-inline d-block position-relative mx-auto mb-2 projectdetails__button" rel="noopener" target="_blank"><i class="fas fa-link mx-2"></i>Hosted Example</a>

<div class="row justify-content-center"><span class="col-12 text-center projectdetails__type">Type:&nbsp;&nbsp;${project[0].type}</span></div>
<p class="d-block mx-auto mt-3 text-center projectdetails__desc">${project[0].desc}</p>
</div>
<div class="d-block position-relative projectdetails__tools pb-3">
<h2 class="d-block text-center">Languages & tools</h2>
<ul id="usedlist" class="row mt-5 mx-auto text-center list-unstyled projectdetails__list">
</ul>
</div>
<div class="d-block mx-auto position-relative projectdetails__foreword">
<h3 class="col-12 text-center mt-3">Foreword</h3>
<p class="d-block mx-auto text-center">${project[0].foreword}</p>
</div>
   `
const tagslist = document.getElementById('usedlist')
for(const tag of projectTags){
 
tagslist.innerHTML +=`<li class="col-6 list-item">${tag}</li>`
 
 
}

}












}


export default Project;
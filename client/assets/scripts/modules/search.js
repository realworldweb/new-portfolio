class Search{
 constructor(projectsList, certsList){
  this.searchContainer = document.getElementById('searchContainer')
  this.projects = projectsList
  this.certs = certsList
  this.locationString = window.location.href
  this.queryString = this.locationString.split('?')
  if(this.queryString.length > 1){//length should be two location string and query
   this.queryUrl = this.queryString[1].split('=')
   this.queryArray = this.queryUrl[1].split('%20')
   this.query = this.queryArray.join(' ')
   
   
  }else{//length less than two no query given cotinue as normal
  
   this.searchContainer.innerHTML = `<p class="single-p  mb-5">Please Enter a search string</p>`
   
   return
  }
  this.runSearch()
}
 

runSearch(){
 
 const certsReturn = this.certs.filter( cert => {
  
  return Object.values(cert).some(cert =>{ if(typeof(cert) === 'string' && cert.includes(this.query.toLowerCase())){
  return Object;
  }
  })}).map(cert => {
   const mappedArray = []
   mappedArray.push({"name": cert.name , "img": cert.certificate})
   return mappedArray;
  })
  
 
 const projectsReturn = this.projects.filter( project => {
  
  return Object.values(project).some( project =>{  if((typeof(project) === 'string' || typeof(project) === 'object' && project.length > 0) && project.includes(this.query.toLowerCase())){
  return Object;
  }
  console.log(typeof(project))
   })}).map(project => {
   const mappedArray = []
   mappedArray.push({"name": project.name , "img": project.img})
   return mappedArray;
  })
 
 this.searchContainer.innerHTML +=`<div class="row justify-content-center  search__returned-projects opacity opacity--none">
 <p class="col-12 d-block mx-auto text-center search-results__cat">Projects matching ${this.query}</p>
 </div>
 <div class=" row  justify-content-center search__returned-certs opacity opacity--none">
 <p class="col-12 d-block mx-auto text-center search-results__cat">Certificates matching ${this.query}</p>
 </div>`
 
 const projectLoad = document.querySelector('.search__returned-projects')
 for(const project of projectsReturn){//add default thumb selection
    
     projectLoad.innerHTML +=`<a href="project.html?name=${project[0].name}" class="search-results__card position-relative text-white mx-3 mr-2 mb-4">
 <picture>
  <source sizes="1000px" srcset="assets/images/${project[0].img.large.url} 1200w" media="(min-width: 2200px)">
  <source sizes="700px" srcset="assets/images/${project[0].img.medium.url} 800w" media="(min-width: 1800px)">
  <img sizes="500px"  srcset="assets/images/${project[0].img.small.url} 650w" src="assets/images/${project[0].img.small.url}" class="card-img rounded" alt="${project[0].img.alt}">
 </picture>
  <div class="position-absolute search-results__overlay">
  <p class="position-relative d-block mx-auto text-center"><i>${project[0].name}</i></p>
    <span class="sr-only">link to project ${project[0].name}</span>
  </div>
</a>`
    
    
    }
   
    const certLoad = document.querySelector('.search__returned-certs')
   for(const cert of certsReturn){//add default thumb selection
    
     certLoad.innerHTML +=`<a href="cert.html?name=${cert[0].name}" class="search-results__card position-relative text-white mx-3 mr-2 mb-4">
 <picture>
  <source sizes="1000px" srcset="assets/images/${cert[0].img.large.url} 1200w" media="(min-width: 2200px)">
  <source sizes="700px" srcset="assets/images/${cert[0].img.medium.url} 800w" media="(min-width: 1800px)">
  <img sizes="500px"  srcset="assets/images/${cert[0].img.small.url} 650w" src="assets/images/${cert[0].img.small.url}" class="card-img rounded" alt="${cert[0].img.alt}">
 </picture>
  <div class="position-absolute search-results__overlay">
  <p class="position-relative d-block mx-auto text-center"><i>${cert[0].name}</i></p>
    <span class="sr-only">link to cert ${cert[0].name}</span>
  </div>
</a>`
    
    
    } 
  setTimeout(function(){
   document.querySelector('.loader').classList.add('opacity--none')
   certLoad.classList.remove('opacity--none')
   projectLoad.classList.remove('opacity--none')
   },100)
 
 
}
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}

export default Search;
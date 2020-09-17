import '../styles/styles.css'
const regeneratorRuntime = require("regenerator-runtime")

import Gallery from './modules/simplegallery.js'
import loadCerts from './modules/loadcerts.js'
import loadProjects from'./modules/loadprojects.js'


let currentPage = document.title




const certsContainer = document.getElementById('certsContainer')
  
if(certsContainer !== null){
 const slides = async () =>  {
const certsInfo = await loadCerts()

certsContainer.innerHTML =`<div class="d-flex flex-wrap gallery justify-content-center">
  <div class="row">
<i id="control-left" class="fas fa-caret-down left"></i>
<picture class="">
<source id="large" sizes="1000px" srcset="assets/images/${certsInfo[certsInfo.length-6].certificate.large.url} 1100w" media="(min-width: 1200px)">
<source id="medium" class="medium" sizes="700px" srcset="assets/images/${certsInfo[certsInfo.length-6].certificate.medium.url} 580w" media="(min-width: 1000px)">
<source id="mediumxl" class="medium"  sizes="700px" srcset="assets/images/${certsInfo[certsInfo.length-6].certificate.medium.url} 780w" media="(min-width: 700px)">
<img sizes="500px" srcset="assets/images/${certsInfo[certsInfo.length-6].certificate.small.url} 600w" src="assets/images/${certsInfo[certsInfo.length-6].certificate.small.url}" alt="${certsInfo[certsInfo.length-6].certificate.alt}" class="d-block mx-auto text-center gallery__main-pic">
</picture>
<i id="control-right" class="fas fa-caret-down right"></i>
</div>
</div>
`
 return new Gallery(certsInfo)
}
slides()
}



 

let search


			   
			   if(currentPage === 'Portfolio search'){
	
	
	import(/* webpackChunkName: "search"*/ "./modules/search").then(x => {
 if(typeof search == 'undefined'){
   console.log(search)
			  search = new x.default(projectList, certsList)
    
 }
     
     
     }).catch(() => console.log("there was a problem"))
  
  
 }
	

		   
			   
			   
  

 










import '../styles/styles.css';
const regeneratorRuntime = require("regenerator-runtime");
import Axios from 'axios';


import Gallery from './modules/simplegallery.js';
import Projects from './modules/projects.js'
import Filter from './modules/filter.js'
let filter = new Filter()
let certsList;
let projectsList;
const loadProjects = async () =>{
 
try {
  const response = await Axios.get('https://confident-panini-5ece9c.netlify.app//.netlify/functions/server/projects');
  projectsList = response.data;
  const projectsPane = document.getElementById('projectsPane')
  
if(projectsPane !== null){
 
 return new Projects(projectsList);
}else{
 
 return projectsList;
 
}

 }catch (error){
  
  console.error(error);
  
 }
}



const loadCerts = async () =>{
 
 
try {
  const response = await Axios.get('https://confident-panini-5ece9c.netlify.app//.netlify/functions/server/certs');
  certsList = response.data;
  const certsContainer = document.getElementById('certsContainer')
  
if(certsContainer !== null){
certsContainer.innerHTML =`<div class="d-flex flex-wrap gallery justify-content-center">
  <div class="row">
<i id="control-left" class="fas fa-caret-down left"></i>
<picture class="">
<source id="medium" srcset="assets/images/${certsList[0].certificate.medium.url}" media="(min-width: 700px)">
<img src="assets/images/${certsList[0].certificate.small.url}" alt="${certsList[0].certificate.alt}" class="d-block mx-auto text-center gallery__main-pic">
</picture>
<i id="control-right" class="fas fa-caret-down right"></i>
</div>
</div>
`
return new Gallery(certsList);
}else{
 
 return certsList;
 
}
 }catch (error){
  
  console.error(error);
  
 }
}






document.getElementById('body').addEventListener('onload', loadCerts());
document.getElementById('body').addEventListener('onload', loadProjects());

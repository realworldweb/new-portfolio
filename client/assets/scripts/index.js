import '../styles/styles.css';
const regeneratorRuntime = require("regenerator-runtime");
import Axios from 'axios';


import Gallery from './modules/simplegallery.js';
import Projects from './modules/projects.js'
import Certs from './modules/certs.js'
import Filter from './modules/filter.js'

const filterContainer = document.querySelector('.filter')

if(filterContainer !== null){
let filter = new Filter()
}

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
<source id="large" sizes="1000px" srcset="assets/images/${certsList[certsList.length-6].certificate.large.url} 1100w" media="(min-width: 1200px)">
<source id="medium"sizes="700px" srcset="assets/images/${certsList[certsList.length-6].certificate.medium.url} 580w" media="(min-width: 1000px)">
<source id="medium"sizes="700px" srcset="assets/images/${certsList[certsList.length-6].certificate.medium.url} 780w" media="(min-width: 700px)">
<img sizes="500px" srcset="assets/images/${certsList[certsList.length-6].certificate.small.url} 600w" src="assets/images/${certsList[certsList.length-6].certificate.small.url}" alt="${certsList[certsList.length-6].certificate.alt}" class="d-block mx-auto text-center gallery__main-pic">
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

const certsPane = document.getElementById('certsPane')

if(certsPane !== null){

const certs = async () =>  {
const certsInfo = await loadCerts()

 return new Certs(certsInfo)}
 certs();
}




document.getElementById('body').addEventListener('onload', loadCerts());
document.getElementById('body').addEventListener('onload', loadProjects());

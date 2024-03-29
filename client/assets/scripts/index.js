import '../styles/styles.css'
import regeneratorRuntime from "regenerator-runtime"
import Gallery from './modules/simplegallery.js'
import loadCerts from './modules/loadcerts.js'
import loadProjects from'./modules/loadprojects.js'
import loadFeedback from'./modules/loadfeedback.js'
import MobileNav from './modules/mobilenav.js'

const mobile = new MobileNav()

let currentPage = document.title




const certsContainer = document.getElementById('certsContainer')
  
if(certsContainer !== null){
 const slides = async () =>  {
const certsInfo = await loadCerts()

certsContainer.innerHTML =`<div class="d-flex flex-wrap gallery justify-content-center">
  <div class="row">
  <svg xmlns="http://www.w3.org/2000/svg" class="caret caret--left" width="3.5rem" height="3.5rem" viewbox="0 0 1.764 3.528"><path fill="currentColor" stroke-width=".353" d="M1.764 0L0 1.764l1.764 1.764z"/></svg>
<picture class="">
<source id="large" sizes="1000px" srcset="assets/images/${certsInfo[certsInfo.length-6].certificate.large.url} 1100w" media="(min-width: 1200px)">
<source id="medium" class="medium" sizes="700px" srcset="assets/images/${certsInfo[certsInfo.length-6].certificate.medium.url} 580w" media="(min-width: 1000px)">
<source id="mediumxl" class="medium"  sizes="700px" srcset="assets/images/${certsInfo[certsInfo.length-6].certificate.medium.url} 780w" media="(min-width: 700px)">
<img sizes="500px" srcset="assets/images/${certsInfo[certsInfo.length-6].certificate.small.url} 600w" src="assets/images/${certsInfo[certsInfo.length-6].certificate.small.url}" alt="${certsInfo[certsInfo.length-6].certificate.alt}" class="d-block mx-auto text-center gallery__main-pic" width="500" height="350">
</picture>
<svg xmlns="http://www.w3.org/2000/svg" class="caret caret--right" width="3.5rem" height="3.5rem" viewbox="0 0 1.764 3.528"><path fill="currentColor" stroke-width=".353" d="M0 3.528l1.764-1.764L0 0z"/></svg>
</div>
</div>
`
 return new Gallery(certsInfo)
}
slides()
}


let filter

if(currentPage === 'Portfolio Projects' || currentPage === 'Portfolio certificates'){

 import(/* webpackChunkName: "filter"*/ "./modules/filter").then(x => {
 if(typeof filter == 'undefined'){
   
			filter = () => {
    
    return new x.default() }
    
    filter(x)
 }else{
  filter(x)
  
 }
 
 })

}

let projects


if(currentPage === 'Portfolio Projects'){
	

	
	import(/* webpackChunkName: "projects"*/ "./modules/projects.js").then(x => {
 if(typeof projects == 'undefined'){
   
			projects = async(x)=> {
    const projectsInfo = await loadProjects()
    
    
   return new x.default(projectsInfo) }
    
    projects(x)
 }else{
  projects(x)
  
 }
 
 })
  
  
 }
 
 let project

if(currentPage === 'Portfolio Project'){
	
	
	import(/* webpackChunkName: "project"*/ "./modules/project.js").then(x => {
 if(typeof project == 'undefined'){
   
			project = async(x)=> {
    const projectsInfo = await loadProjects()
    
    
   return new x.default(projectsInfo) }
    
    project(x)
 }else{
  project(x)
  
 }
 
 })
  
  
 }

let certs

if(currentPage === 'Portfolio certificates'){
	
	
	import(/* webpackChunkName: "certs"*/ "./modules/certs.js").then(x => {
 if(typeof certs == 'undefined'){
   
			certs = async(x)=> {
    const certsInfo = await loadCerts()
    
    
   return new x.default(certsInfo) }
    
    certs(x)
 }else{
  certs(x)
  
 }
 
 })
  
  
 }
 
  let cert

if(currentPage === 'Portfolio Certificate'){
	
	
	import(/* webpackChunkName: "cert"*/ "./modules/cert.js").then(x => {
 if(typeof cert == 'undefined'){
   
			cert = async(x)=> {
    const certsInfo = await loadCerts()
    
    
   return new x.default(certsInfo) }
    
    cert(x)
 }else{
  cert(x)
  
 }
 
 })
  
  
 }

 

let search


			   
			   if(currentPage === 'Portfolio search'){
	
	
	import(/* webpackChunkName: "search"*/ "./modules/search").then(x => {
 if(typeof search == 'undefined'){
   
			search = async(x)=> {
    const certsInfo = await loadCerts()
    const projectsInfo = await loadProjects()
    
   return new x.default(projectsInfo, certsInfo) }
    
    search(x)
 }else{
  search(x)
  
 }
 
 })
  
  
 }
	
 let feedback
 let getFeedback
 
 if(currentPage === 'Portfolio feedbackpage'){//load feedback scripts if feedback page is requested
	
import(/* webpackChunkName: "feedback"*/ "./modules/feedback").then(x => {
 if(typeof feedback == 'undefined'){
   
			feedback = () => {
    
    return new x.default() }
    
    feedback(x)
 }else{
  feedback(x)
  
 }
 
 })
 
 import(/* webpackChunkName: "getFeedback"*/ "./modules/getfeedback").then(x => {
 if(typeof getFeedback == 'undefined'){
   
			getFeedback = async(x)=> {
    const feedbackInfo = await loadFeedback()
    
    
   return new x.default(feedbackInfo) }
    
    getFeedback(x)
 }else{
  getFeedback(x)
  
 }
 
 })
 
  
  
 }
 
 let contact
 
 if(currentPage === 'Portfolio contact-us'){//load contact scripts if contact page is requested
	
import(/* webpackChunkName: "contact"*/ "./modules/form").then(x => {
 if(typeof contact == 'undefined'){
   
			contact = () => {
    
    return new x.default() }
    
    contact(x)
 }else{
  contact(x)
  
 }
 
 })
 
 }
  
  

			   
			   
  

 










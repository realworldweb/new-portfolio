import Filter from './modules/filter.js'
import Project from './modules/project.js'
import Projects from './modules/projects.js'
import loadProjects from'./modules/loadprojects.js'


const filterContainer = document.querySelector('.filter')
const projectsPane = document.getElementById('projectsPane')




if(filterContainer !== null){
let filter = new Filter()
}



if(projectsPane !== null){
  const projects = async () =>  {
const projectsInfo = await loadProjects()

 return new Projects(projectsInfo)}
 projects();
}
const projectDetails = document.getElementById('projectDetails')

if(projectDetails !== null){

const project = async () =>  {
const projectsInfo = await loadProjects()

 return new Project(projectsInfo)}
 project();
}


const regeneratorRuntime = require("regenerator-runtime");
import Search from './modules/search.js'
import loadProjects from'./modules/loadprojects.js'
import loadCerts from './modules/loadcerts.js';

const searchContainer = document.getElementById('searchContainer')

if(searchContainer !== null){

const search = async () =>  {
const certsInfo = await loadCerts()
const projectsInfo = await loadProjects()

 return new Search(projectsInfo, certsInfo)}
 search()
}
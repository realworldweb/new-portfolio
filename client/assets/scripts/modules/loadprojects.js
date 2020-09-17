import Axios from 'axios'
let projectsList;


const loadProjects = async () =>{
 
try {
  const response = await Axios.get('https://confident-panini-5ece9c.netlify.app//.netlify/functions/server/projects');
  projectsList = response.data;
 
 return projectsList;
 }catch (error){
  
  console.error(error);
  
 }
 
}

export default loadProjects;
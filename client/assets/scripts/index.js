import '../styles/styles.css';

import Axios from 'axios'

 
 
 
 Axios.get('http://localhost:4000/api/', {
 headers: {
   'Access-Control-Allow-Origin' : '*'
	}}).then( response =>{
    projects = response.data
    
    return document.getElementById(projectsTitle).innerHTML = projects[0].name 
    
    })	
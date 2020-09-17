const regeneratorRuntime = require("regenerator-runtime");
import Axios from 'axios'
let certsList;




const loadCerts = async () =>{
 
 
try {
  const response = await Axios.get('https://confident-panini-5ece9c.netlify.app//.netlify/functions/server/certs');
  certsList = response.data;
  
  return certsList;
 }catch (error){
  
  console.error(error);
  
 }
}

export default loadCerts;
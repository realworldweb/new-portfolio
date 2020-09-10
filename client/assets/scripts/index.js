import '../styles/styles.css';
const regeneratorRuntime = require("regenerator-runtime");
import Axios from 'axios';


import Gallery from './modules/simplegallery.js';
let certsList;




const loadData = async () =>{
 
try {
  const response = await Axios.get('https://confident-panini-5ece9c.netlify.app//.netlify/functions/server/certs');
  certsList = response.data;
  const certsContainer = document.getElementById('certsContainer')
  certsContainer.innerHTML =`<div class="d-flex flex-wrap gallery justify-content-center">
  <div class="row">
<i id="control-left" class="fas fa-caret-down left"></i>
<picture class="">
<source id="large" srcset="assets/images/${certsList[0].certificate.large.url}" media="(min-width: 1200px)">
<source id="medium" srcset="assets/images/${certsList[0].certificate.medium.url}" media="(min-width: 400px)">
<img src="assets/images/${certsList[0].certificate.small.url}" alt="${certsList[0].certificate.alt}" class="d-block mx-auto text-center gallery__main-pic">
</picture>
<i id="control-right" class="fas fa-caret-down right"></i>
</div>
</div>
`
return new Gallery(certsList);
 }catch (error){
  
  console.error(error);
  
 }
}



document.getElementById('body').addEventListener('onload', loadData());

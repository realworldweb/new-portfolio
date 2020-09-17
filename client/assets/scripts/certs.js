const regeneratorRuntime = require("regenerator-runtime");
import Certs from './modules/certs.js'
import Cert from './modules/cert.js'
import loadCerts from './modules/loadcerts.js';


const certsPane = document.getElementById('certsPane')

if(certsPane !== null){

const certs = async () =>  {
const certsInfo = await loadCerts()

 return new Certs(certsInfo)}
 certs();
}




const certDetails = document.getElementById('certDetails')

if(certDetails !== null){

const cert = async () =>  {
const certsInfo = await loadCerts()

 return new Cert(certsInfo)}
 cert();
}



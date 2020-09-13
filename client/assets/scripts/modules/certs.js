class Certs{
 constructor(certsList){
  this.certsPane = document.getElementById('certsPane')
  this.certs = certsList
  this.certsThumbs
  this.locationString = window.location.href
  this.queryString = this.locationString.split('?')
  if(this.queryString.length > 1){//length should be two location string and query
   this.queryUrl = this.queryString[1].split('=')
   this.queryArray = this.queryUrl[1].split('%20')
   this.query = this.queryArray.join(' ')
   
   
  }else{//length less than two no query given cotinue as normal
   this.query = 0
  }
  this.prepareQuery()
  this.loadCerts()
 }

prepareQuery(){
 
 if(this.query.length > 0){//catch query
   console.log(this.query)
  this.certsThumbs = this.certs.filter(cert => {
   return cert[this.queryUrl[0]].includes(this.query)
  
   
  }).map(cert => {
   const mappedArray = []
   mappedArray.push({"name": cert.name , "img": cert.certificate})
   return mappedArray;
  })
  
  
 }
 else{//no query proceed
  
  this.certsThumbs = this.certs.map(cert => {
   const mappedArray = []
   mappedArray.push({"name": cert.name , "img": cert.certificate})
   return mappedArray;
  })
  
 }
 
 
 
}
 
 
loadCerts(){

 
    for(const cert of this.certsThumbs){//add default thumb selection
    
     this.certsPane.innerHTML +=`<a href="cert.html?name=${cert[0].name}" class="projects__card projects__card--cert position-relative text-white mx-3 mr-2 mb-4">
 <picture>
  <source sizes="1000px" srcset="assets/images/${cert[0].img.large.url} 1200w" media="(min-width: 2200px)">
  <source sizes="700px" srcset="assets/images/${cert[0].img.medium.url} 800w" media="(min-width: 1800px)">
  <img sizes="500px"  srcset="assets/images/${cert[0].img.small.url} 650w" src="assets/images/${cert[0].img.small.url}" class="card-img rounded" alt="${cert[0].img.alt}">
 </picture>
  <div class="position-absolute projects__overlay">
  <p class="position-relative d-block mx-auto text-center"><i>${cert[0].name}</i></p>
    <span class="sr-only">link to cert ${cert[0].name}</span>
  </div>
</a>`
    
    
    }
    
  }
}
 
 
 


export default Certs;
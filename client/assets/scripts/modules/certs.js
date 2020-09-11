class Certs{
 constructor(certsList){
  console.log(certsList)
  this.certsPane = document.getElementById('certsPane')
  this.certsThumbs = certsList.map(cert => {
   const mappedArray = []
   mappedArray.push({"name": cert.name , "img": cert.certificate})
   return mappedArray;
  })
  this.loadCerts()
 }
 
 
loadCerts(){

 
    for(const cert of this.certsThumbs){//add default thumb selection
    console.log(cert[0])
     this.certsPane.innerHTML +=`<a href="/certs/name=${cert[0].name}" class="projects__card projects__card--cert position-relative text-white mx-3 mr-2 mb-4">
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
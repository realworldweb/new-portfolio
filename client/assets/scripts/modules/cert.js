class Cert{
 constructor(certsList){
 this.certContainer = document.getElementById('certDetails')
 this.certList = certsList
 this.locationString = window.location.href
  this.queryString = this.locationString.split('?')
  if(this.queryString.length > 1){//length should be two location string and query
   this.queryUrl = this.queryString[1].split('=')
   this.queryArray = this.queryUrl[1].split('%20')
   this.query = this.queryArray.join(' ')
   
   
  }else{//length less than two no query given cotinue as normal
  
   this.certContainer.innerHTML = `<p class="d-flex justify-content-center certdetails__error mb-5">Please select a valid cert</p>
   <a type="button" href="certs.html" class="btn d-block w-30 m-5 mx-auto certdetails__error-link">Return to certs</a>`
   
   return
  }
 this.setCert()
 
 
 
 
 
}



setCert(){

const cert = this.certList.filter(cert => {return cert[this.queryUrl[0]] === this.query})


this.certContainer.innerHTML = `<div id="trans" class="opacity opacity--none">
<div class="d-block position-relative mx-auto bg-white pb-3 certdetails__main">
<picture>
<source sizes="1000px" srcset="assets/images/${cert[0].certificate.large.url} 1200w" media="(min-width: 1800px)">
<source sizes="700px" srcset="assets/images/${cert[0].certificate.medium.url} 800w" media="(min-width: 1000px)">
<img sizes="500px" srcset="assets/images/${cert[0].certificate.small.url} 550w" src="assets/images/${cert[0].certificate.small.url}" alt="${cert[0].certificate.alt}" class="d-block mx-auto float-lg-left ml-lg-2 certdetails__main-pic" width="500"
>
</picture>
<h1 class="d-block text-center certdetails__title">${cert[0].name}</h1>
<p class="d-block mx-auto mt-3 text-center certdetails__desc">${cert[0].desc}</p>
</div>
<div class="d-block position-relative certdetails__info pb-3">
<h2 class="d-block text-center">Course-Info</h2>
<div class="row mt-2 certdetails__awarded">
<span class="col-sm-6 text-center">AwardBy:&nbsp;${cert[0].awardedBy}</span>
<span class="col-sm-6 text-center">GainedOn:&nbsp;${cert[0].gained}</span>
</div>
<a type="button" href="${cert[0].link}" class="btn text-center my-5 d-block position-relative mx-auto mb-2 certdetails__button" rel="noopener" target="_blank"><i class="fas fa-link mx-2"></i>Online Certificate</a>

</div>
<div class="d-block mx-auto certdetails__modules">
<h3 class="d-block position-relative text-center">Modules</h3>
<ul class="list-unstyled d-block justify-content-center certdetails__modules-list">
</ul>
</div>
</div>`

const modules = document.querySelector('.certdetails__modules-list')
for(const module of cert[0].modules){
 
modules.innerHTML +=`<li class="col-12 text-center list-item">${module}</li>`
 
 
}



setTimeout(function(){
   
  
   
   document.getElementById('trans').classList.remove('opacity--none')
  },100)

}












}


export default Cert;
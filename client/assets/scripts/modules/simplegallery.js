class Gallery{
	constructor(certsList){
        
       this.eventArea = document.querySelector(".gallery")//galley event section
       this.swipeArea = document.querySelector(".gallery__swipe")
       this.mainImg = document.querySelector(".gallery__main-pic")//image to change sm
       this.mdImg = document.querySelector("#medium")//image to change medium
       this.lgImg = document.querySelector("#large")//image to change large
       this.thumbs = document.querySelector(".gallery__thumbs-container")//area to load thumbs
       //array of thumbs
       this.imgArray = certsList.map(object => {
        const mappedArray =[];
        mappedArray.push(object.certificate)
        
        return mappedArray;
       })
       this.currentImage = 0
       this.activeThumb
       this.touched = 0;
       this.events()
       this.loadImgs()
        
		
	}
	
	events() {
		
		this.eventArea.addEventListener("click", e => this.toggleImg(e,'none'))//event for left/right nav
  this.swipeArea.addEventListener("ontouchmove", e => this.handleTouch(e))
		this.thumbs.addEventListener("click", e => this.thumbChange(e))//event for selection by thumbs

		
	}
 //load images to thumb container
 loadImgs(){
  let count = 0
  for(const img of this.imgArray){//add default thumb
  let thumb = `<picture>
  <source srcset="/assets/images/${img[0].small.url}" media="(min-width: 1300px)">
  <img src="/assets/images/${img[0].thumb.url}" alt="${img[0].alt}" id="${count}" name="gallery ${count}" class="mx-2 mb-2 gallery__thumb">
  </picture>`
  if(count === this.currentImage){//add styled active thumb
   thumb = `<picture>
  <source srcset="/assets/images/${img[0].small.url}" media="(min-width: 1300px)">
   <img src="/assets/images/${img[0].thumb.url}" alt="${img[0].alt}" id="${count}" name="gallery ${count}" class="mx-2 mb-2 gallery__thumb gallery__thumb--active">
   </picture>`
   
   
  }
  count++
  this.thumbs.innerHTML += thumb
  this.activeThumb = document.querySelector('.gallery__thumb--active')//set first active thumb
  }
	}
 
 handleTouch(e){
  
  this.touched = e.touches[0].clientX
  
  if(this.touched > e.touches[0].clientX){
   
   this.toggleImg(e,'left')
   
  }
  else{
   
  this.toggleImg(e,'right')
  
 }
  
 }
 
	toggleImg(e, dir) {
   this.activeThumb = document.querySelector('.gallery__thumb--active')//call current active thumb
   //handle slideshow toggle left/right
	if(e.target.classList.value.includes('left') || e.target.parentNode.classList.value.includes('left') || dir === 'left'){
  if (this.currentImage > 0){
    this.currentImage--
    this.activeThumb.classList.remove('gallery__thumb--active')
    this.activeThumb = this.activeThumb.parentNode.previousSibling.childNodes[3]
    console.log(this.activeThumb);
    this.activeThumb.classList.add('gallery__thumb--active')
  }
 this.lgImg.srcset = `/assets/images/${this.imgArray[this.currentImage][0].large.url}`
 this.mdImg.srcset = `/assets/images/${this.imgArray[this.currentImage][0].medium.url}`
 this.mainImg.src = `/assets/images/${this.imgArray[this.currentImage][0].small.url}`
 this.mainImg.alt = this.imgArray[this.currentImage][0].alt
  }
 if(e.target.classList.value.includes('right') || e.target.parentNode.classList.value.includes('right')|| dir === 'right'){
 if (this.currentImage < this.imgArray.length-1){
    this.currentImage++
    this.activeThumb.classList.remove('gallery__thumb--active')
    this.activeThumb = this.activeThumb.parentNode.nextSibling.childNodes[3]
    console.log(this.activeThumb)
    this.activeThumb.classList.add('gallery__thumb--active')
    this.lgImg.srcset = `/assets/images/${this.imgArray[this.currentImage][0].large.url}`
    this.mdImg.srcset = `/assets/images/${this.imgArray[this.currentImage][0].medium.url}`
    this.mainImg.src =`/assets/images/${this.imgArray[this.currentImage][0].small.url}` 
    this.mainImg.alt = this.imgArray[this.currentImage][0].alt;
  
  }
		
	}
	}
 //handle change by thumb
 thumbChange(e){
  this.activeThumb = document.querySelector('.gallery__thumb--active')//call current active thumb
  if(e.target.name.includes('gallery')){//avoid misclicks on other elements
  const src = e.target.src.split("/")// get the full source of image and split to get relative path
  const srcArray = src[src.length-1].split('-')//
  let lg = srcArray.map( (word) => { // create link for large image
   let mappedArray = []
   if(word.includes('.webp')){
    mappedArray.push('lg.webp')
   }
   else{
    mappedArray.push(word)
   }
   
   return mappedArray
  })
  const lgSrc = lg.join('-')
  let md = srcArray.map( (word) => { // create link for large image
   let mappedArray = []
   if(word.includes('.webp')){
    mappedArray.push('md.webp')
   }
   else{
    mappedArray.push(word)
   }
   
   return mappedArray
  })
  const mdSrc = md.join('-')
   let sm = srcArray.map( (word) => { // create link for large image
   let mappedArray = []
   if(word.includes('.webp')){
    mappedArray.push('sm.webp')
   }
   else{
    mappedArray.push(word)
   }
   
   return mappedArray
  })
  const smSrc = sm.join('-')
  this.lgImg.srcset = `/assets/images/${lgSrc}`
  this.mdImg.srcset = `/assets/images/${mdSrc}`
  this.mainImg.src = `/assets/images/${smSrc}`
  this.mainImg.alt = e.target.alt
  this.currentImage = parseInt(e.target.id)//update current image
  this.activeThumb.classList.remove('gallery__thumb--active')//remove current active thumb
  e.target.classList.add('gallery__thumb--active')//add active class to new active tab
  }
 }
	
	
}



export default Gallery;
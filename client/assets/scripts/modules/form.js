import Axios from 'axios'

class ContactUs{
	constructor(){
		this.container = document.querySelector('.contact__direct-mail')
		this.formEl = document.querySelectorAll('.contact__input')
		this.phone = document.getElementById('phoneinput')
		this.email = document.getElementById('emailinput')
		this.sub = document.getElementById('subjectinput')
  this.error = document.getElementById('errorMsg')
		this.run = document.getElementById('contact-us')
		this.events()
			
	}



events(){
	this.sub.addEventListener('blur', () => this.validate())
    this.run.addEventListener('submit', e => {
	  e.preventDefault()
      this.compileForm()
    })
}

validate(){
if(this.phone.value === "" && this.email.value === ""){
		
  this.error.innerHTML= 'please enter either a Phone number or Email'
  this.error.classList.remove('display--none')
		
		}
		else if(this.phone.value.length < 11 && this.email.value === ""){
			
			this.error.innerHTML= 'phone number should be at least 11 digits'
		}
		else {
			
			
				contactMade = 'made'
			
		}	
	
	
	
	
	
}


compileForm(){
	
	let count = 0;
	this.formEl.forEach( () => {
    this.el = this.formEl[count]
	let name = this.el.getAttribute('name')
	this.name = this.el.value
	postInfo[name] = this.name
	count++
	
	})
	
	if(contactMade === 'made'){
		
		postJson = JSON.stringify(postInfo)
		this.sendrequest()
	
				
	}else{
		this.error.innerHTML = 'Please check your phone or email'
	}

}

sendrequest(){
 
 console.log('ran request')
	
	Axios.post('/.netlify/functions/send-email', postJson ).then(() => {
      console.log('ran') 
      this.run.remove()
      this.success()
    }).catch((e) => {
     if(e.contains(502) === true){
       this.success()
     }
      this.error.innerHTML = 'Sorry something went wrong please retry'
    })
}
	
success(){
	
	this.container.insertAdjacentHTML('beforeend', `
   
      <h3 class="contact-us__success">Success your message has been sent!</h3>
	  <h3 class="contact-us__success contact-us__success--smaller">Contact will be made on your phone or email provided</h3>
        
    `)
	
	
}

}

let postJson
let postInfo = {}

let contactMade

export default ContactUs;
import Axios from 'axios'

class Feedback{
	constructor(){
		this.container = document.querySelector('.feedback__leave-feedback')
		this.formEl = document.querySelectorAll('.feedback__input')
		this.name = document.getElementById('nameinput')
  this.error = document.getElementById('errorMsg')
		this.run = document.querySelector('.feedback__form')
		this.events()
			
	}



events(){
	
 this.run.addEventListener('submit', e => {
	  e.preventDefault()
      this.compileFeedback()
    })
}

compileFeedback(){
	
	let count = 0;
	this.formEl.forEach( () => {
    this.el = this.formEl[count]
	let name = this.el.getAttribute('name')
	this.name = this.el.value.toString()
	postInfo[name] = this.name
	count++
	
	})
	postJson = JSON.stringify(postInfo)
		this.sendrequest()
	}

sendrequest(){
	
	Axios.post('/.netlify/functions/server/feedback', postJson ).then(() => {
      this.run.remove()
      this.success()
    }).catch(() => {
      this.error.innerHTML = 'Sorry something went wrong please retry'
    })
}
	
success(){
	
	this.container.insertAdjacentHTML('beforeend', `
   
      <h3 class="contact-us__success">Success your feedback has been sent!</h3>
	  <h3 class="contact-us__success contact-us__success--smaller">Thanks for taking time to leave feedback we appreciate your thoughts</h3>
        
    `)
	
	
}

}

let postJson
let postInfo = {}

export default Feedback;
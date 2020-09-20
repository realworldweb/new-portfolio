class GetFeedback{
 constructor(feedbackList){
  this.feedbackStage = document.getElementById('feedbackStage')
  this.feedbacklimited = document.getElementById('feedbackLimited')
  this.feedback = feedbackList
  this.feedbackLimit = feedbackList.slice(feedbackList.length -2)
  
   
   
  
  this.loadFeedback()
 }

showContent(){
 document.querySelector('.loader--cream').classList.add('opacity--none')
 document.getElementById('feedbackContent').classList.remove('opacity--none')
 
}

 
 
loadFeedback(){
  console.log(this.feedbacklimited)
  if(this.feedbacklimited !== null){
   if(this.feedbackLimit.length === 0){
    this.feedbacklimited.innerHTML +=`
     <p id="feedbackContent" class="d-block mx-auto text-center opacity opacity--none">Doesn't look like there's any feedback yet.<br> Why not be the first to leave some!</p>`
    this.showContent()
    return
   }
    for(const feedback of this.feedbackLimit){//add default thumb selection
 
     this.feedbacklimited.innerHTML +=`
     <div id="feedbackContent" class="d-inline-block position-relative text-center mx-auto mt-3 p-4 feedback-display feedback-display--limited">
     <p class="feedback-display__topic"><span class=" float-left feedback-display__feedback-label">Topic:&nbsp;</span><br>${feedback.about}</p>
     <p class="feedback-display__feedback"><span class=" float-left feedback-display__feedback-label">Feedback:</span><br>${feedback.body}</p>
     <p class="d-inline mr-5 feedback-display__name"><i>Name:&nbsp;${feedback.name}</i></p>
     <p class="d-inline ml-5 feedback-display__created-on"><i>Created on:&nbsp;${feedback.createdOn}</i></p>
     </div><br>`
    
    this.showContent()
    }
    this.feedbacklimited.innerHTML +=`<a href="allfeedback.html" class="d-block text-right m-5 feedback__link">See All Feedback<i class="fas fa-angle-double-right ml-2"></i></a>`
    return
  }
  
  if(this.feedbackStage !== null){
   if(this.feedback.length === 0){
    this.feedbackStage.innerHTML +=`
     <p class="d-block mx-auto text-center">Doesn't look like there's any feedback yet.<br> Why not be the first to leave some!</p>`
    return
   }
    for(const feedback of this.feedback){//add default thumb selection
 
     this.feedbackStage.innerHTML +=`
     <div class="d-inline position-relative p-4 mx-auto my-3 m-sm-4 text-center feedback-display">
     <p class="feedback-display__topic"><span class=" float-left feedback-display__feedback-label">Topic:&nbsp;</span><br>${feedback.about}</p>
     <p class="feedback-display__feedback"><span class=" float-left feedback-display__feedback-label">Feedback:</span><br>${feedback.body}</p>
     <p class="d-lg-inline mr-5 feedback-display__name"><i>Name:&nbsp;${feedback.name}</i></p>
     <p class="d-lg-inline ml-5 feedback-display__created-on"><i>Created on:&nbsp;${feedback.createdOn}</i></p>
     </div><br>`
    
    
    }
    
    return
  }
  
}
}
 
 
 


export default GetFeedback;
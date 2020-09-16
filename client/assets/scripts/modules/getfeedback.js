class GetFeedback{
 constructor(feedbackList){
  this.feedbackStage = document.getElementById('feedbackStage')
  this.feedback = feedbackList
  this.feedbackLimit = feedbackList.slice(feedbackList.length -2)
  
   
   
  
  this.loadFeedback()
 }


 
 
loadFeedback(){

 
    for(const feedback of this.feedbackLimit){//add default thumb selection
 
     this.feedbackStage.innerHTML +=`
     <div class="d-inline-block position-relative text-center mx-auto mt-3 p-4 feedback-display feedback-display--limited">
     <p class="feedback-display__topic"><span class=" float-left feedback-display__feedback-label">Topic:&nbsp;</span><br>${feedback.about}</p>
     <p class="feedback-display__feedback"><span class=" float-left feedback-display__feedback-label">Feedback:</span><br>${feedback.body}</p>
     <p class="d-inline mr-5 feedback-display__name"><i>Name:&nbsp;${feedback.name}</i></p>
     <p class="d-inline ml-5 feedback-display__created-on"><i>Created on:&nbsp;${feedback.createdOn}</i></p>
     </div><br>`
    
    
    }
    this.feedbackStage.innerHTML +=`<a href="allfeedback.html" class="d-block text-right m-5 feedback__link">See All Feedback<i class="fas fa-angle-double-right ml-2"></i></a>`
    
  }
}
 
 
 


export default GetFeedback;
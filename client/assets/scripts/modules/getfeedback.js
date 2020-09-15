class GetFeedback{
 constructor(feedbackList){
  this.feedbackStage = document.getElementById('feedbackStage')
  this.feedback = feedbackList
  
   
   
  
  this.loadFeedback()
 }


 
 
loadFeedback(){

 
    for(const feedback of this.feedback){//add default thumb selection
      console.log(feedback)
     this.feedbackStage.innerHTML +=`<p>${feedback.about}</p>
     <div id="content">
     <p>${feedback.body}</p>
     <p>${feedback.name}</p>
     <p>${feedback.createdOn}</p>
     </div>`
    
    
    }
    
  }
}
 
 
 


export default GetFeedback;
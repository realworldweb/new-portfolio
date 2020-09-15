class GetFeedback{
 constructor(feedbackList){
  this.feedbackStage = document.getElementById('feedbackStage')
  this.feedback = feedbackList
  
   
   
  
  this.loadFeedback()
 }


 
 
loadFeedback(){

 
    for(const feedback of this.feedback){//add default thumb selection
      console.log(feedback)
     this.feedbackStage.innerHTML +=`<p>Topic:&nbsp;${feedback.about}</p>
     <div id="content">
     <p>Feedback:<br>${feedback.body}</p>
     <p><i>Name:$nbsp;${feedback.name}</i></p>
     <p><i>Created on:$nbsp;${feedback.createdOn}</i></p>
     </div>`
    
    
    }
    
  }
}
 
 
 


export default GetFeedback;
import Feedback from './modules/feedback.js'
import GetFeedback from './modules/getfeedback.js'
import Axios from 'axios'

let feedbackList;

const feedbackContainer = document.getElementById('feedbackContainer')
  const feedbackStage = document.getElementById('feedbackStage')

const loadFeedback = async () =>{

 
try {
  const response = await Axios.get('https://confident-panini-5ece9c.netlify.app//.netlify/functions/server/feedback');
  feedbackList = response.data;
 
  
if(feedbackContainer !== null || feedbackStage !== null ){

 return new GetFeedback(feedbackList);
}else{
 
 return feedbackList;
 
}

 }catch (error){
  
  console.error(error);
  
 }
}

if(feedbackContainer !== null || feedbackStage !== null ){
loadFeedback()
 
}

if(feedbackContainer !== null){

const feedback  = new Feedback();
}

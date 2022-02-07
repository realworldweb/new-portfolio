import Axios from 'axios'
let feedbackList;

const loadFeedback = async () =>{

 
try {
  const response = await Axios.get('https://confident-panini-5ece9c.netlify.app//.netlify/functions/server/feedback');
  feedbackList = response.data;
 
 return feedbackList;
}catch (error){ 
  
  console.error(error);
  
 }
}



 export default loadFeedback



const SparkPost = require('sparkpost');
const client = new SparkPost(process.env.SPARKPOST);
let body

// If you have a SparkPost EU account you will need to pass a different `origin` via the options parameter:
// const euClient = new SparkPost('<YOUR API KEY>', { origin: 'https://api.eu.sparkpost.com:443' });

exports.handler = function(event, context, callback){
if (event.body) {
    body = JSON.parse(event.body)
  } else {
    console.log('something went wrong err1')
  }
	if(body.body){
		let contact = body.phone + ' ' + body.email
		
	client.transmissions.send({
    options: {

    },
    content: {
      from: 'example@realworldwebportfolio.co.uk',
      subject: body.subject,
      html:'<html><body><p>Name:'+''+body.name+''+'</p><p>Contact:'+''+contact+''+'</p><p>Body:'+''+body.body+''+'</p></body></html>'
    },
    recipients: [
      {address: 'paulrooney60@gmail.com'}
    ]
  })
  .then(data => {
    console.log('Woohoo! You just sent your first mailing!');
    console.log(data);
    callback(null,response)
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  })
	}else{
	 console.log('something went wrong err2')
	}
  
}
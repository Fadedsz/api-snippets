const VoiceResponse = require('twilio').twiml.VoiceResponse;


const response = new VoiceResponse();
response.say({
    language: 'en-En'
}, 'Hej!');

console.log(response.toString());

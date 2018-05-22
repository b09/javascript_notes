const PubSub = require('./helpers/pub_sub.js')
console.log('JS loaded');

document.addEventListener("DOMContentLoaded", function(){
  PubSub.subscribe("my-custom-event", function(event){
    console.log('event object:', event);
    console.log('event.detail:', event.detail);
  });

  PubSub.publish("my-custom-event", {
    name: "Caroline",
    age: 38
  });
});

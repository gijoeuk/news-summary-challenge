var assert = {
  isTrue: function(eventToCheck){
    if (!eventToCheck) {
      throw new Error("No: " + eventToCheck + " is WRONG!");
    }
    console.log('You crushed it like you\'re doing the recycling. BOOOOOOOOOMMMMMMMMM!!!!')
  }
};

const helpers = require('../Helpers/helper')


const registerValidation = (values,next) => {


  
        if (values.phone === "") {
             throw new Error('Phone number is required');
       } else if (isNaN(values.phone)) {
             throw new Error('Invalid entry')
       }
   
       if (values.age === "") {
             throw new Error('Age is required')
       } else if (isNaN(values.age)) {
             throw new Error('Invalid entry')
       }
   
       if (values.name === "") {
             throw new Error('Name is required')
       } else if (!isNaN(values.name)) {
        throw new Error('Invalid entry')
       }
   
};


const eventValidation = (events,next) => {
        
     if(events.length === 0){
        throw new Error("Event is required")
     }else if (events.length >5){
        throw new Error("Maximum 5 events are allowed")
     }
     const duplicate = helpers.hasDuplicates(events)
     if(duplicate){
        throw new Error("Same event can't be added more than once")
     }
   
};




module.exports = {
    registerValidation,  
    eventValidation
} 
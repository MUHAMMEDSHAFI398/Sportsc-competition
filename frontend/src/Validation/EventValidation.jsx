const eventValidate = (values,event) => {
   
    const eventErrors = {};
     
     if(event.events===""){
        eventErrors.events="Event is required"
     }
     for(let i = 0 ; i<values.length;i++){
        if(values[i].events=== event.events){
            eventErrors.events="Same event can't be added more than once" 
        }
     }
    if (values.length >= 5) {
        eventErrors.events = "Maximum 5 events are allowed"
    }
    return eventErrors;
};

export default eventValidate;
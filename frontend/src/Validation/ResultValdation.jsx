const validate = (values) => {

    const errors = {};

    if (values.first === "") {
        errors.first = "First price is required"
    }

    if (values.second === "") {
        errors.second = "Second price is required"
    }
    if (values.third === "") {
        errors.third = "Third price is required"
    }

    if(values.first === values.second || values.second === values.third || values.first===values.third){
        errors.multple="Invalid entry"
    }

    return errors;
};

export default validate;
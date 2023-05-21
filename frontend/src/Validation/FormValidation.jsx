const validate = (values) => {

    const errors = {};

    if (values.phone === "") {
        errors.phone = "Phone number is required"
    } else if (isNaN(values.phone)) {
        errors.phone = "Invalid entry"
    }

    if (values.age === "") {
        errors.age = "Age is required"
    } else if (isNaN(values.age)) {
        errors.age = "Invalid entry"
    }

    if (values.name === "") {
        errors.name = "Name is required"
    } else if (!isNaN(values.name)) {
        errors.name = "Invalid entry"
    }

    return errors;
};

export default validate;
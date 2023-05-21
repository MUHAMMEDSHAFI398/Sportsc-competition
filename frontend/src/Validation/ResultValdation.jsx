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

    return errors;
};

export default validate;
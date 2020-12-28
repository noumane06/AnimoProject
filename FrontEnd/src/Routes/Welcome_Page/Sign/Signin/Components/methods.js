
export function validate(values) {
    const errors = {};

    if (!values.email) {
        errors.email = 'champs requis';
    }

    if (!values.password) {
        errors.password = 'champs requis';
    }
    return errors;
}

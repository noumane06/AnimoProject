
export function validate(values) {
    const errors = {};
    if (!values.firstname) {
        errors.firstname = 'champs requis';
    } else if (values.firstname.length > 20) {
        errors.firstname = 'Doit contenir 15 caractères ou moins';
    }

    if (!values.lastname) {
        errors.lastname = 'champs requis';
    } else if (values.lastname.length > 20) {
        errors.lastname = 'Doit contenir 20 caractères ou moins';
    }

    if (!values.email) {
        errors.email = 'champs requis';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'champs requis';
    } else if (values.password.length < 8) {
        errors.password = 'Doit contenir au moins 8 caractères';
    }
    return errors;
}

export function validate2(values)
{
    const errors = {}
    if (!values.phone) {
        errors.phone = 'champs requis';
    }else if (values.phone.length < 9) {
        errors.phone = 'Numero invalid';
    }
    return errors ;
}
export function validate3(values)
{
    const errors = {}
    if (!values.codeverif) {
        errors.phone = 'champs requis';
    }
    return errors ;
}
import validator from 'validator';
export default function validateInput(target) {
    let type = target.name;
    let value = target.value;
    let errorObj = {};

    switch (type) {
        case "email":
            if (validator.isEmail(value)) {
                errorObj.state = true;            }
            else {
                errorObj.state = false;
                if (value.length === 0) {
                    errorObj.message = "Mandatory field"
                } else {
                    errorObj.message = errorMessages[type];
                }
            }

            break;

        default:
            let regex = validationRules[type]
            let rule = new RegExp(regex);
            if (rule.test(value)) {
                errorObj.state = true;
            }
            else {
                errorObj.state = false;
                if (value.length === 0) {
                    errorObj.message = "Mandatory field"
                } else {
                    errorObj.message = errorMessages[type];
                }
            }

          break;
    }
    return errorObj;
}

let validationRules = {
    name: "[a-zA-z\s]{1,}",
    username: "[a-zA-z0-9]{1,}",
    password: "[a-zA-Z0-9]{6,}",
    contact: "\\d{10}",
}

let errorMessages = {
    name: "Should be alphabets",
    username: "Should be alphanumeric and not special character",
    contact: "Should be numberic and 10 digits",
    email: "Should be valid email",
    contact: "Should be valid number",
}


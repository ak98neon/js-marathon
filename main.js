let phoneNumber = prompt("Please input phone number: ");
alert('Your input: ' + phoneNumber + '\n' + 'Formatted: ' + formattedPhone(phoneNumber));

function formattedPhone(phone) {
    if (isPhoneLengthValid(phone)) {
        return "Number length is wrong!";
    } else {
        let formattedPhoneNumber = '';

        formattedPhoneNumber += phone.substring(0, 2) + ' ';
        formattedPhoneNumber += '(' + phone.substring(2, 5) + ') ';
        formattedPhoneNumber += phone.substring(5, 8) + '-';
        formattedPhoneNumber += phone.substring(8, 10) + '-';
        formattedPhoneNumber += phone.substring(10, 12);
        return formattedPhoneNumber;
    }
}

function isPhoneLengthValid(phone) {
    return phone.length < 12 || phone.length > 12;
}

console.log(formattedPhone('+71234567890')); // +7 (123) 456-78-90

const Patterns = {
    'full-name': /^[A-Z]{1}[a-z]+( [a-zA-Z\'\"\-]+)+$/,
    'email': /^[^@\t\n\r ]+@[^@\t\n\r ]+\.[^@\t\n\r ]+$/,
    'password': /^\d{6,9}$/,
    'phone': /^\d{11}$/,
    'birthday': /^\d{4}-\d{2}-\d{2}$/
};

export default Patterns;
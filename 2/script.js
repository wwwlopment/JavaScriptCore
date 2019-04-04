if (name = prompt('Who\'s there?')) {
    if (name == 'Admin') {
        if (password = prompt('Password?')) {
            if (password == 'TheMaster') {
                alert('Wellcome!');
            } else {
                alert('Wrong password');
            }

        } else {
            alert('Canceled.');
        }
    } else {
        alert('I don\'t know you');
    }
} else {
    alert('Canceled.');
}

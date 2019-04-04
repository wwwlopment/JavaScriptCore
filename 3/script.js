switch (name = prompt('Who\'s there?')) {
    case 'Admin':
        switch (password = prompt('Password?')) {
            case 'TheMaster':
                alert('Wellcome!');
                break;
            case null:
                alert('Canceled.');
                break;
            default:
                alert('I don\'t know you');
        }
        break;
    case null:
        alert('Canceled.');
        break;
    default:
        alert('I don\'t know you');
}

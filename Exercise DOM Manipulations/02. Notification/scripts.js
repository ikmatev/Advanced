function notify(message) {
    let notification = document.getElementById('notification');
    notification.innerHTML = message;
    notification.style.display = 'block';
    setTimeout(removeNotification, 2000);
    function removeNotification(){
        notification.style.display = 'none';
    }
}
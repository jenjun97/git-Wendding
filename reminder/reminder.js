// reminder.js

document.addEventListener('DOMContentLoaded', function() {
    const reminderContent = document.getElementById('reminderContent');
    if (reminderContent) {
        fetch('reminder/reminder.html')
            .then(response => response.text())
            .then(data => {
                reminderContent.innerHTML = data;
            })
            .catch(error => console.error('Error loading reminder.html:', error));
    }
});

// reminder.js其他代碼...

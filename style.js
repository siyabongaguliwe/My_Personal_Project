document.getElementById('new-event-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('event-title').value;
    const date = document.getElementById('event-date').value;
    
    if (title && date) {
        addEvent(title, date);
        document.getElementById('new-event-form').reset();
    }
});

function addEvent(title, date) {
    const eventList = document.getElementById('events');
    const eventItem = document.createElement('li');
    eventItem.textContent = `${title} - ${date}`;
    eventList.appendChild(eventItem);
}

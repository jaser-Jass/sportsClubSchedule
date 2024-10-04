const data = [
    {
        "title": "Upper body",
        "time": "10:00",
        "trener": "Иванов Иван",
        "maxParticipants": 20,
        "currentParticipants": 10
    },
    {
        "title": "Body pump",
        "time": "11:00",
        "trener": "Петров Петр",
        "maxParticipants": 15,
        "currentParticipants": 15
    },
    {
        "title": "Lower body",
        "time": "12:00",
        "trener": "Трушина Ирина",
        "maxParticipants": 25,
        "currentParticipants": 5
    }
];

function renderSchedule() {
    const scheduleDiv = document.getElementById('schedule');
    scheduleDiv.innerHTML = '';

    data.forEach((classInfo, index) => {
        const classElement = document.createElement('div');
        classElement.className = 'card mb-3';
        classElement.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${classInfo.title}</h5>
                <p class="card-text">Время: ${classInfo.time}</p>
                <p class="card-text">Тренер: ${classInfo.trener}</p>
                <p class="card-text">Макс. участники: ${classInfo.maxParticipants}</p>
                <p class="card-text">Записанные участники: ${classInfo.currentParticipants}</p>
                <button class="btn btn-primary" id="signup-${index}" ${classInfo.currentParticipants >= classInfo.maxParticipants ? 'disabled' : ''}>Записаться</button>
                <button class="btn btn-danger" id="cancel-${index}" ${classInfo.currentParticipants === 0 ? 'disabled' : ''}>Отменить запись</button>
            </div>
        `;
        scheduleDiv.appendChild(classElement);

        document.getElementById(`signup-${index}`).addEventListener('click', () => signup(index));
        document.getElementById(`cancel-${index}`).addEventListener('click', () => cancel(index));
    });
}

function signup(index) {
    if (data[index].currentParticipants < data[index].maxParticipants) {
        data[index].currentParticipants++;
        renderSchedule();
    }
}

function cancel(index) {
    if (data[index].currentParticipants > 0) {
        data[index].currentParticipants--;
        renderSchedule();
    }
}

document.addEventListener('DOMContentLoaded', renderSchedule);
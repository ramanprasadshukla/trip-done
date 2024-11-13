const body = document.body;
const selector = document.querySelector("#selector");
const chooseBtn  = document.querySelector("#chooseBtn");
const apply = document.querySelector("#apply");
const addRooms = document.querySelector("#addRooms");
const addRoom = document.querySelector("#addRoom");
const btn1 = document.querySelector("#btn1");
const containers = document.querySelector(".containers")


// chooseBtn.addEventListener('click', ()=> {
//     selector.style.display = "block";
// });

// apply.addEventListener('click', ()=> {
//     selector.style.display = "none";
// });

addRoom.addEventListener('click', ()=> {
    addRooms.style.display = "block";
});

submit.addEventListener('click', ()=> {
    addRooms.style.display = "none";
});


let roomId = 1;
const rooms = [];

document.getElementById('room-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const location = document.getElementById('location').value;
    const price = parseInt(document.getElementById('price').value);
    const bedrooms = parseInt(document.getElementById('bedrooms').value);
    const description = document.getElementById('description').value;

    const room = {
        id: roomId++,
        location,
        price,
        bedrooms,
        description
    };

    rooms.push(room);
    displayRooms(rooms);
    this.reset();
});

document.getElementById('search-button').addEventListener('click', function() {
    const searchLocation = document.getElementById('search-location').value.toLowerCase();
    const maxPrice = parseInt(document.getElementById('max-price').value);
    const minBedrooms = parseInt(document.getElementById('min-bedrooms').value);

    const filteredRooms = rooms.filter(room => {
        return (!searchLocation || room.location.toLowerCase().includes(searchLocation)) &&
               (!maxPrice || room.price <= maxPrice) &&
               (!minBedrooms || room.bedrooms >= minBedrooms);
    });

    displayRooms(filteredRooms);
});

function displayRooms(roomsToDisplay) {
    const roomList = document.getElementById('room-list');
    roomList.innerHTML = '';
   if (rooms.length > 0) { roomsToDisplay.forEach(room => {
        const roomDiv = document.createElement('div');
        roomDiv.className = 'room';
        roomDiv.innerHTML = `
            <strong>Room ID:</strong> ${room.id}<br>
            <strong>Location:</strong> ${room.location}<br>
            <strong>Price:</strong> $${room.price} per month<br>
            <strong>Bedrooms:</strong> ${room.bedrooms}<br>
            <strong>Description:</strong> ${room.description}
        `;
        roomList.append(roomDiv);
    })
         return;
    }
        roomList.innerHTML = '<p>No rooms found.</p>';
   ;
}



const pass = document.querySelector("#pass");
const id = document.querySelector("#id");
const enterForLogin = document.querySelector("#loginBtn");

// enterForLogin.addEventListener("click", ()=>{
//     console.log(working)
//     window.location.href = 'http://127.0.0.1:5500/logined.html';
// })

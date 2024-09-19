// Sample Data
const destinations = [
    { name: "Paris", description: "City of Lights" },
    { name: "Tokyo", description: "Land of Rising Sun" },
    { name: "New York", description: "The Big Apple" }
];

const attractions = [
    { name: "Eiffel Tower", location: "Paris" },
    { name: "Shibuya Crossing", location: "Tokyo" },
    { name: "Statue of Liberty", location: "New York" }
];

const activities = [
    { name: "River Cruise", location: "Paris" },
    { name: "Cherry Blossom Viewing", location: "Tokyo" },
    { name: "Broadway Show", location: "New York" }
];

// Function to Display Destinations
function displayDestinations() {
    const destinationList = document.getElementById('destination-list');
    destinationList.innerHTML = '';
    destinations.forEach(destination => {
        destinationList.innerHTML += `
            <div class="destination">
                <h3>${destination.name}</h3>
                <p>${destination.description}</p>
            </div>
        `;
    });
}

// Function to Display Attractions
function displayAttractions() {
    const attractionList = document.getElementById('attraction-list');
    attractionList.innerHTML = '';
    attractions.forEach(attraction => {
        attractionList.innerHTML += `
            <div class="attraction">
                <h3>${attraction.name}</h3>
                <p>${attraction.location}</p>
            </div>
        `;
    });
}

// Function to Display Activities
function displayActivities() {
    const activityList = document.getElementById('activity-list');
    activityList.innerHTML = '';
    activities.forEach(activity => {
        activityList.innerHTML += `
            <div class="activity">
                <h3>${activity.name}</h3>
                <p>${activity.location}</p>
            </div>
        `;
    });
}

// Search Functionality
function searchDestinations() {
    const searchInput = document.getElementById('search-box').value.toLowerCase();
    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = '';
    const filtered = destinations.filter(dest => dest.name.toLowerCase().includes(searchInput));

    filtered.forEach(dest => {
        suggestions.innerHTML += `<div>${dest.name}</div>`;
    });
}

// Initialize the app
window.onload = function() {
    displayDestinations();
    displayAttractions();
    displayActivities();
};

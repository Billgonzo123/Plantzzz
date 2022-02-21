async function getPlants() {
    const userPlants = await fetch('/api/userPlants/')
        .then(response => {
            return response.json();
        });
    renderUserPlants(userPlants);
};

//render the user plants
async function renderUserPlants(userPlants) {
    userPlants.forEach(e => {
        for (i = 0; i < 14; i++) {
            let newDate = new Date();
            newDate.setDate(newDate.getDate() + i);
            console.log('New Date: ', newDate);
            //get inital water date
            const firstWaterDate = new Date(e.initial_water_date);
            //get how many days since inital water date
            const diff = getDifferenceInDays(newDate, firstWaterDate);

            //if there is no remained, then current date is a day of watering
            if (!(diff % e.watering_interval)) console.log(e.nickname,' needs watering today!', newDate);
        }
    });

}

function getDifferenceInDays(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
};

getPlants();
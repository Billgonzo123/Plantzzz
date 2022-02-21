//this must be required in server.js

module.exports = {
  imageFile: commonName => {
    return commonName
    .replace(/ /g,'_')
    .toLowerCase();
  },

  waterFreq: (interval, dayFlag) => {
    const day = Math.round(interval % 7);
    const week = Math.round(interval / 7);

    return (dayFlag)? day : week;
  },
  
  //check userPlant for watering days
  renderUserPlants: (userPlants) => {
    let dates = [];

    for (i = 0; i < 14; i++) {
      let newDate = new Date();
      newDate.setDate(newDate.getDate() + i);
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      dates.push({ date: newDate.toLocaleDateString("en-US", options), plants: [] });

      userPlants.forEach(plant => {
        //get inital water date
        const firstWaterDate = new Date(plant.initial_water_date);
        //get how many days since inital water date
        const diff = getDifferenceInDays(newDate, firstWaterDate);
        //if there is no remained, then current date is a day of watering
        (diff % plant.watering_interval) ? false : dates[i].plants.push('Water ' + plant.nickname);
      })
      if (!dates[i].plants.length) dates[i].plants.push('No Plants to Water');
    }
    return dates;
  }

};

//get diff in days from inital water date
function getDifferenceInDays(date1, date2) {
  const diffInMs = Math.abs(date2 - date1);
  return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
}
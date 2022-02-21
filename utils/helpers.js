//this must be required in server.js

module.exports = {
    //insert functions into this object to use in handlebars {{function param1 param 2}}
    // sample_function: (param1,param2) => {
    //     return `Helper says: ${param1+param2}`;
    // },

    imageFile: commonName => {
        return commonName
        .replace(/ /g,'_')
        .toLowerCase();
      },

    waterFreq: (interval, dayFlag) => {
      const day = Math.round(interval % 7);
      const week = Math.round(interval / 7);

      return (dayFlag)? day : week;
    }

}
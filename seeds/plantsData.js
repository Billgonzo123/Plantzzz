const { Plants } = require('../models');

const plantsdata = [
    {
        common_name: 'African Violet',
        botanical_name: 'Aloe barbadensis',
        light: 'Bright/Indirect',
        watering_interval: 14,
        difficulty: 'Easy',
        soil: 'Cactus mix',
        temp: '65°-75°F',
        pet_safe: true
    }
    ,
    {
        common_name: 'Aloe Vera',
        botanical_name: 'Aloe barbadensis',
        light: 'Bright/Indirect',
        watering_interval: 14,
        difficulty: 'Easy',
        soil: 'Cactus mix',
        temp: '65°-75°F',
        pet_safe: false,
    }
    ,
    {
        common_name: 'Areca Palm Tree',
        botanical_name: 'Dypsis lutescens',
        light: 'Bright/Indirect',
        watering_interval: 7,
        difficulty: 'Average',
        soil: 'Peat-moss-based',
        temp: '70°-85°F',
        pet_safe: true
    }
    ,
    {
        common_name: 'Birds Nest Fern',
        botanical_name: 'Asplenium nidus',
        light: 'Bright/Indirect',
        watering_interval: 7,
        difficulty: 'Easy',
        soil: 'Peat-moss-based',
        temp: '60°-75°F',
        pet_safe: true
    }
    ,
    {
        common_name: 'Blushing Philodendron',
        botanical_name: 'Philodendron erubescens',
        light: 'Medium/Low/Indirect',
        watering_interval: 7,
        difficulty: 'Easy',
        soil: 'Peat-moss-based',
        temp: '65°-80°F',
        pet_safe: false
    }
    ,
    {
        common_name: 'Boston Fern',
        botanical_name: 'Nephrolepsis exaltata',
        light: 'Bright/Indirect',
        watering_interval: 7,
        difficulty: 'Easy',
        soil: 'Peat-moss-based',
        temp: '65°-75°F',
        pet_safe: true
    }
    ,
    {
        common_name: 'Bromeliad Scarlet Star',
        botanical_name: 'Guzmania lingulata',
        light: 'Bright/Direct',
        watering_interval: 7,
        difficulty: 'Average',
        soil: 'Cactus mix',
        temp: '65°-80°F',
        pet_safe: true
    }
    ,
    {
        common_name: 'Chinese Evergreen',
        botanical_name: 'Aglaonema hybrids',
        light: 'Bright/Indirect',
        watering_interval: 7,
        difficulty: 'Easy',
        soil: 'All-purpose potting mix',
        temp: '65°-75°F',
        pet_safe: false
    }
    ,
    {
        common_name: 'Chinese Money Plant',
        botanical_name: 'Pilea Peperomioides',
        light: 'Bright/Indirect',
        watering_interval: 7,
        difficulty: 'Easy',
        soil: 'Peat-moss-based',
        temp: '65°-85°F',
        pet_safe: true
    }
    ,
    {
        common_name: 'Cymbidium Orchid Plants',
        botanical_name: 'Cymbidium species and hybrids',
        light: 'Bright/Indirect',
        watering_interval: 7,
        difficulty: 'Average',
        soil: 'Orchid potting mix',
        temp: '60°-75°F',
        pet_safe: true
    }
    ,
    {
        common_name: 'Echeveria',
        botanical_name: 'Echeveria species',
        light: 'Bright/Indirect',
        watering_interval: 7,
        difficulty: 'Easy',
        soil: 'Cactus mix',
        temp: '60°-80°F',
        pet_safe: true
    }
    ,
    {
        common_name: 'Elephants Ear',
        botanical_name: 'Alocasia x amazonica',
        light: 'Bright/Indirect',
        watering_interval: 7,
        difficulty: 'Hard',
        soil: 'Peat-moss-based',
        temp: '65°-75°F',
        pet_safe: false
    }
    ,
    {
        common_name: 'English Ivy',
        botanical_name: 'Hedera helix',
        light: 'Bright/Indirect',
        watering_interval: 7,
        difficulty: 'Easy',
        soil: 'Peat-moss-based with perlite',
        temp: '50°-75°F',
        pet_safe: false
    }
    ,
    {
        common_name: 'Fiddle Leaf Fig',
        botanical_name: 'Ficus lyrata',
        light: 'Medium/Indirect',
        watering_interval: 7,
        difficulty: 'Easy',
        soil: 'All-purpose potting mix with perlite',
        temp: '65°-75°F',
        pet_safe: false
    }
    ,
    {
        common_name: 'Flamingo Flower',
        botanical_name: 'Anthurium scherzerianum ',
        light: 'Bright/Indirect',
        watering_interval: 7,
        difficulty: 'Easy',
        soil: 'Peat-moss-based with perlite',
        temp: '65°-75°F',
        pet_safe: false
    }
    ,
    {
        common_name: 'Hawthoria',
        botanical_name: 'Haworthia species',
        light: 'Bright/Indirect',
        watering_interval: 14,
        difficulty: 'Easy',
        soil: 'Catcus/succulent mix',
        temp: '60°-75°F',
        pet_safe: false
    }
    ,
    {
        common_name: 'Heartleaf Philodendron',
        botanical_name: 'Philodendron scandens',
        light: 'Moderate/Indirect',
        watering_interval: 7,
        difficulty: 'Easy',
        soil: 'Peat-moss-based mix',
        temp: '65°-75°F',
        pet_safe: false
    }
    ,
    {
        common_name: 'Hoya Kerri',
        botanical_name: 'Hoya Kerri',
        light: 'Bright/Indirect',
        watering_interval: 14,
        difficulty: 'Easy',
        soil: 'All-purpose potting mix',
        temp: '65°-80°F',
        pet_safe: false
    }
    ,
    {
        common_name: 'Hibiscus',
        botanical_name: 'Hibiscus rosa sinensis hybrids',
        light: 'Bright/Indirect',
        watering_interval: 2,
        difficulty: 'Easy',
        soil: 'All-purpose potting mix with perlite',
        temp: '65°-85°F',
        pet_safe: true
    }
    ,
    {
        common_name: 'Jade Plant',
        botanical_name: 'Crassula ovata',
        light: 'Medium/Low/Indirect',
        watering_interval: 14,
        difficulty: 'Easy',
        soil: 'Peat-moss-based with perlite',
        temp: '65°-75°F',
        pet_safe: false
    }
    ,
    {
        common_name: 'Lucky Bamboo',
        botanical_name: 'Dracaena sanderiana',
        light: 'Bright/Indirect',
        watering_interval: 7,
        difficulty: 'Easy',
        soil: 'N/A. Water and pebbles to keep plant upright',
        temp: '65°-80°F',
        pet_safe: false
    }
    ,
    {
        common_name: 'Mother In Laws Tongue',
        botanical_name: 'Sansevieria trifasciata',
        light: 'Bright/Indirect',
        watering_interval: 14,
        difficulty: 'Easy',
        soil: 'Cactus potting mix',
        temp: '65°-75°F',
        pet_safe: false
    }
    ,

    {
        common_name: 'Nerve Plant',
        botanical_name: 'Fittonia verschaffeltii',
        light: 'Medium/Indirect',
        watering_interval: 3,
        difficulty: 'Hard',
        soil: 'Peat-moss-based mix with perlite',
        temp: '65°-75°F',
        pet_safe: true
    }
    ,
    {
        common_name: 'Panda Plant',
        botanical_name: 'Kalanchoe tomentosa',
        light: 'Bright/Indirect',
        watering_interval: 7,
        difficulty: 'Easy',
        soil: 'Cactus potting mix',
        temp: '65°-80°F',
        pet_safe: false
    }
    ,
    {
        common_name: 'Parlor Palm',
        botanical_name: 'Chamaedorea elegans',
        light: 'Moderate/Indirect',
        watering_interval: 7,
        difficulty: 'Easy',
        soil: 'Peat-moss-based mixed with sharp sand',
        temp: '65°-80°F',
        pet_safe: true
    }
    ,
    {
        common_name: 'Peace Lily',
        botanical_name: 'Spathiphyllum wallisii',
        light: 'Moderate/Indirect',
        watering_interval: 7,
        difficulty: 'Easy',
        soil: 'Peat-moss-based',
        temp: '65°-85°F',
        pet_safe: false
    }
    ,
    {
        common_name: 'Peacock Plant',
        botanical_name: 'Calathea Makoyana',
        light: 'Moderate/Indirect',
        watering_interval: 2,
        difficulty: 'Average',
        soil: 'Peat-moss-based',
        temp: '70°-85°F',
        pet_safe: true
    }
    ,
    {
        common_name: 'Pothos',
        botanical_name: 'Epipremnum aureum',
        light: 'Bright/Indirect',
        watering_interval: 7,
        difficulty: 'Easy',
        soil: 'All-purpose potting mix',
        temp: '65°-80°F',
        pet_safe: false
    }
    ,
    {
        common_name: 'Prayer Plant',
        botanical_name: 'Maranta leuconeura',
        light: 'Moderate/Indirect',
        watering_interval: 7,
        difficulty: 'Average',
        soil: 'Peat-moss-based',
        temp: '65°-80°F',
        pet_safe: true
    }
    ,
    {
        common_name: 'Rubber Plant',
        botanical_name: 'Ficus elastica',
        light: 'Bright/Indirect',
        watering_interval: 7,
        difficulty: 'Easy',
        soil: 'Peat-moss-based',
        temp: '65°-75°F',
        pet_safe: true
    }
    ,
    {
        common_name: 'Sago Palm',
        botanical_name: 'Cycas revoluta',
        light: 'Bright/Indirect',
        watering_interval: 14,
        difficulty: 'Average',
        soil: 'Cactus potting mix',
        temp: '65°-75°F',
        pet_safe: false
    }
    ,
    {
        common_name: 'Shamrock Plant',
        botanical_name: 'Oxalis species',
        light: 'Bright/Indirect',
        watering_interval: 14,
        difficulty: 'Easy',
        soil: 'All-purpose potting mix',
        temp: '55°-75°F',
        pet_safe: false
    }
    ,
    {
        common_name: 'String of Pearls',
        botanical_name: 'Senecio rowleyanus',
        light: 'Bright/Indirect',
        watering_interval: 14,
        difficulty: 'Average',
        soil: 'Fast draining potting mix',
        temp: '65°-85°F',
        pet_safe: false
    }
    ,
    {
        common_name: 'Swiss Cheese Plant',
        botanical_name: 'Monstera deliciosa',
        light: 'Bright/Indirect',
        watering_interval: 7,
        difficulty: 'Easy',
        soil: 'Peat-moss-based mix with perlite',
        temp: '65°-85°F',
        pet_safe: false
    }
    ,
    {
        common_name: 'Venus Fly Trap',
        botanical_name: 'Dionaea muscipula',
        light: 'Bright/Indirect',
        watering_interval: 3,
        difficulty: 'Hard',
        soil: 'Nutrient poor soil',
        temp: '60°-75°F',
        pet_safe: true
    }
    ,
    {
        common_name: 'Weeping Fig',
        botanical_name: 'Ficus benjamina',
        light: 'Bright/Indirect',
        watering_interval: 14,
        difficulty: 'Average',
        soil: 'Fast draining potting mix',
        temp: '65°-85°F',
        pet_safe: false
    }
    ,
    {
        common_name: 'Zebra Plant',
        botanical_name: 'Aphelandra squarrosa',
        light: 'Bright/Indirect',
        watering_interval: 14,
        difficulty: 'Average',
        soil: 'Peat-moss-based with perlite',
        temp: '65°-80°F',
        pet_safe: true
    }
    ,
    {
        common_name: 'ZZ Plant',
        botanical_name: 'Zamioculcas zamiifolia',
        light: 'Bright/Direct',
        watering_interval: 14,
        difficulty: 'Easy',
        soil: 'All-purpose potting mix with perlite',
        temp: '65°-75°F',
        pet_safe: false
    }
]
const seedPlantsData = () => Plants.bulkCreate(plantsdata);

module.exports = seedPlantsData;

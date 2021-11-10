const newCharacterSheet = {

  chroniceSettings: {
    seaOfTime: "",
    clanRestrictions: []
  },

  // data for front page character tile
  summary: [],

  // character sheet data . . .
  sheetData: {
    
    // overview
    name: "",
    chronicle: "",
    sire: "",
    concept: "",
    ambition: "",
    desire: "",
    predator: "",
    clan: "",
    generation: "",

    // attributes
    strength: {
      value: 0
    },
    dexterity: {
      value: 0
    },
    stamina: {
      value: 0
    },
    charisma: {
      value: 0
    },
    manipulation: {
      value: 0
    },
    composure: {
      value: 0
    },
    intelligence: {
      value: 0
    },
    wits: {
      value: 0
    },
    resolve: {
      value: 0
    },

    // health and willpower
    health: {
      value: 4
    },
    willpower: {
      value: 3
    },
    
    // skills
    athletics: {
      value: 0,
      speciality: ""
    },
    brawl: {
      value: 0,
      speciality: ""
    },
    craft: {
      value: 0,
      speciality: ""
    },
    drive: {
      value: 0,
      speciality: ""
    },
    firearms: {
      value: 0,
      speciality: ""
    },
    larceny: {
      value: 0,
      speciality: ""
    },
    melee: {
      value: 0,
      speciality: ""
    },
    stealth: {
      value: 0,
      speciality: ""
    },
    survival: {
      value: 0,
      speciality: ""
    },
    animalKen: {
      value: 0,
      speciality: ""
    },
    etiquette: {
      value: 0,
      speciality: ""
    },
    insight: {
      value: 0,
      speciality: ""
    },
    intimidation: {
      value: 0,
      speciality: ""
    },
    leadership: {
      value: 0,
      speciality: ""
    },
    performance: {
      value: 0,
      speciality: ""
    },
    persuasion: {
      value: 0,
      speciality: ""
    },
    streetwise: {
      value: 0,
      speciality: ""
    },
    subterfuge: {
      value: 0,
      speciality: ""
    },
    academics: {
      value: 0,
      speciality: ""
    },
    awareness: {
      value: 0,
      speciality: ""
    },
    finance: {
      value: 0,
      speciality: ""
    },
    investigation: {
      value: 0,
      speciality: ""
    },
    medicine: {
      value: 0,
      speciality: ""
    },
    occult: {
      value: 0,
      speciality: ""
    },
    politics: {
      value: 0,
      speciality: ""
    },
    science: {
      value: 0,
      speciality: ""
    },
    technology: {
      value: 0,
      speciality: ""
    },
    
    // disciplines
    disciplines: {
      clan: [
        {
          name: "clan1",
          value: 0,
          powers: []
        },
        {
          name: "clan2",
          value: 0,
          powers: []
        },
        {
          name: "clan3",
          value: 0,
          powers: []
        }
      ],
      predator: [
        {
          name: "predator1",
          value: 0,
          powers: []
        },
        {
          name: "predator2",
          value: 0,
          powers: []
        }
      ],
      other: [
        {
          name: "other1",
          value: 0,
          powers: []
        }
      ]
    },
    
    resonance: "",
    
    hunger: {
      value: 1
    },
    
    humanity: {
      value: 7,
      stains: 0
    },
    
    chronicleTenets: [],
    touchstonesAndConvictions: [],
    // clanBane: [], // can be generated from data
  
    advantagesAndFlaws:[
      /*
      // E.G.:
      {
        type: "predator1",
        value: 1,
        note: "example"
      },
      {
        type: "predator2",
        value: 2,
        note: "example"
      }
        */
    ],
  
    // blood potency
    bloodPotency: {
      value: 1
    }, // other values determined
  
    // experience
    totalExperience: 0,
    spentExperience: 0,
  
    // character details
    dateOfBirth: 0,
    dateOfDeath: 0,
    trueAge: 0,
    apparentAge: 0,
    appearance: [],
    distinguishingFeatures: [],
    history: [],
    notes: []
  },

}

export default newCharacterSheet;
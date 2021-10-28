const characterProperties = {
  chronicleOptions: [
    {
      seaOfTime: [],
    }
  ],
  // CORE CONCEPTS
  overview: [
    {
      field: "name",
      displayName: "Name",
      initialValue: ""
    },
    {
      field: "chronicle",
      displayName: "Chronicle",
      initialValue: ""
    },
    {
      field: "sire",
      displayName: "Sire",
      initialValue: ""
    },
    {
      field: "concept",
      displayName: "Concept",
      initialValue: ""
    },
    {
      field: "ambition",
      displayName: "Ambition",
      initialValue: ""
    },
    {
      field: "desire",
      displayName: "Desire",
      initialValue: ""
    },
    {
      field: "predator",
      displayName: "Predator",
      options: [
        {
          name: "alleycat",
          displayName: "Alleycat",
          specialtyBonus: [
            {
              skill: "intimidation",
              specialty: "Stickups"
            },
            {
              skill: "brawl",
              specialty: "Grappling"
            }
          ],
          disciplineBonus: [ "celerity", "potence" ],
          advantagesAndFlaws: [
            {
              type: "contacts",
              value: 3,
              note: "Criminal"
            }
          ],
          other: [
            { humanity: -1 }
          ]
        },
        {
          name: "bagger",
          displayName: "Bagger",
          specialtyBonus: [
            {
              skill: "larceny",
              specialty: "Lockpicking"
            },
            {
              skill: "streetwise",
              specialty: "Black Market"
            }
          ],
          disciplineBonus: ["bloodSorcery", "obfuscate"],
          // bloodSorcery only if clan === "tremere"
          advantagesAndFlaws: [
            // both:
            {
              type: "ironGullet",
              value: 3
            },
            {
              type: "enemy",
              value: 2
            }
          ]
        },
        {
          name: "bloodLeech",
          displayName: "Blood Leech",
          specialtyBonus: [
            {
              skill: "brawl",
              specialty: "Kindred"
            },
            {
              skill: "stealth",
              specialty: "Kindred"
            }
          ],
          disciplineBonus: ["celerity", "protean"],
          advantagesAndFlaws: [
            // choose 1:
            [
              {
                type: "darkSecret",
                value: 2,
                note: "Diablerist"
              },
              {
                type: "shunned",
                value: 2
              },
            ],
            // plus this:
            {
              type: "preyExclusion",
              value: 2,
              note: "Mortals"
            }
          ],
          other: [
            { humanity: -1 },
            { bloodPotency: 1}
          ]
        },
        {
          name: "cleaver",
          displayName: "Cleaver",
          specialtyBonus: [
            {
              skill: "persuasion",
              specialty: "Gaslighting"
            },
            {
              skill: "subterfuge",
              specialty: "Coverups"
            }
          ],
          disciplineBonus: ["animalism", "dominate"],
          advantagesAndFlaws: [            
            {
              type: "darkSecret",
              value: 1,
              note: "Cleaver"
            },
            {
              type: "herd",
              value: 2
            }
          ]
        },
        {
          name: "consensualist",
          displayName: "Consensualist",
          specialtyBonus: [
            {
              skill: "medicine",
              specialty: "Phlebotomy"
            },
            {
              skill: "persuasion",
              specialty: "Vessels"
            }
          ],
          disciplineBonus: ["auspex", "fortitude"],
          advantagesAndFlaws: [
            {
              type: "darkSecret",
              value: 1,
              note: "Masquerade Breacher"
            },
            {
              type: "preyExclusion",
              value: 2,
              note: "Non-consentual"
            }
          ],
          other: [
            { humanity: 1 }
          ]
        },
        {
          name: "farmer",
          displayName: "Farmer",
          specialtyBonus: [
            {
              skill: "animalKen",
              specialty: "Specific Animal"
            },
            {
              skill: "survival",
              specialty: "Hunting"
            }
          ],
          disciplineBonus: ["animalism", "protean"],
          advantagesAndFlaws: [
            {
              type: "farmer",
              value: 2
            }
          ],
          other: [
            { humanity: 1 }
          ]
        },
        {
          name: "osiris",
          displayName: "Osiris",
          specialtyBonus: [
            {
              skill: "occult",
              specialty: "Specific Tradition"
            },
            {
              skill: "performance",
              specialty: "Specific Field"
            }
          ],
          disciplineBonus: ["bloodSorcery", "protean"],
          // bloodSorcery only if clan === "tremere"
          advantagesAndFlaws: [
            [
              // total 3 on:
              {
                type: "fame",
              },
              {
                type: "herd",
              }
            ],
            [
              // total 3 on:
              {
                type: "enemies",
              },
              {
                type: "mythicFlaws", // *** category
              }
            ]
          ]
        },
        {
          name: "sandman",
          displayName: "Sandman",
          specialtyBonus: [
            {
              skill: "medicine",
              specialty: "Anesthetics"
            },
            {
              skill: "stealth",
              specialty: "Break-ins"
            }
          ],
          disciplineBonus: ["auspex", "obfuscate"],
          advantagesAndFlaws: [
            {
              type: "resources",
              value: 1
            }
          ]
        },
        {
          name: "sceneQueen",
          displayName: "Scene Queen",
          specialtyBonus: [
            {
              skill: "etiquette",
              specialty: "Specific Scene"
            },
            {
              skill: "leadership",
              specialty: "Specific Scene"
            },
            {
              skill: "streetwise",
              specialty: "Specific Scene"
            }
          ],
          disciplineBonus: ["dominate", "potence"],
          advantagesAndFlaws: [
            // both of these:
            {
              type: "fame",
              value: 1
            },
            {
              type: "contact",
              value: 1
            },
            // and one of these:
            [
              {
                type: "disliked",
                value: 1
              },
              {
                type: "preyExclusion",
                value: 1,
                note: "Not My Scene"
              }
            ]
          ]
        },
        {
          name: "siren",
          displayName: "Siren",
          specialtyBonus: [
            {
              skill: "persuasion",
              specialty: "Seduction"
            },
            {
              skill: "subterfuge",
              specialty: "Seduction"
            }
          ],
          disciplineBonus: ["fortitude", "presence"],
          advantagesAndFlaws: [
            // both of these:
            {
              type: "beautiful",
              value: 2
            },
            {
              type: "enemy",
              value: 1
            }
          ]
        }
      ],
      initialValue: ""
    },
    {
      field: "clan",
      displayName: "Clan",
      options: [
        {
          name: "brujah",
          displayName: "Brujah",
          disciplines: [
            "celerity", "potence", "presence"
          ],
          bane: "The Blood of the Brujah simmers with barely contained rage, explod- ing at the slightest provocation. Subtract dice equal to the Bane Se- verity of the Brujah from any roll to resist fury frenzy. This cannot take the pool below one die."
        },
        {
          name: "gangrel",
          displayName: "Gangrel",
          disciplines: [
            "animalism", "fortitude", "protean"
          ],
          bane: [
            "Gangrel relate to their Beast much as other Kindred relate to the Gangrel: suspicious partnership. In frenzy, Gangrel gain one or more animal features: a physical trait, a smell, or a behavioral tic. These features last for one more night afterward, lingering like a hangover following debauchery.",
            "Each feature reduces one Attribute by 1 point – the Storyteller may decide that a forked tongue or bearlike musk reduces Charisma, while batlike ears reduce Resolve (“all those distracting sounds”). If nothing immediately occurs to you, the feature reduces Intelligence or Manipulation.",
            "The number of features a Gangrel manifests equals their Bane Severity. If your character Rides the Wave of their frenzy (see p. 219) you can choose only one feature to manifest, thus taking only one penalty to their Attributes."
          ]
        },
        {
          name: "malkavian",
          displayName: "Malkavian",
          disciplines: [
            "auspex", "dominate", "obfuscate"
          ],
          bane: [
            "Afflicted by their lineage, all Malkavians are cursed with at least one type of mental derangement. Depending on their history and the state of their mind at death, they may experience delusions, visions of terrible clarity, or something entirely different.",
            "When the Malkavian suffers a Bestial Failure or a Compulsion, their curse comes to the fore. Suffer a penalty equal to your character’s Bane Severity to one category of dice pools (Physical, Social, or Mental) for the entire scene. This is in addition to any penalties incurred by Compulsions.",
            "You and the Storyteller decide the type of penalty and the exact nature of the character’s affliction during character creation"
          ]
        },
        {
          name: "nosferatu",
          displayName: "Nosferatu",
          disciplines: [
            "animalism", "obfuscate", "potence"
          ],
          bane: {
            text: [
              "Hideous and vile, all Nosferatu count as having the Repulsive Flaw (-2) and can never increase their rating in the Looks Merit. In addition, any attempt to disguise themselves as non-deformed incur a penalty to the dice pool equal to the character’s Bane Severity (this includes Discipline powers like Mask of a Thousand Faces and Impostor’s Guise). Most Nosferatu do not breach the Masquerade by just being seen. They are perceived by mortals to be grotesque and often terrifying, but not always supernaturally so."
            ],
            advantagesAndFlaws: {
              type: "repulsive",
              value: 2
            }
          }
        },
        {
          name: "toreador",
          displayName: "Toreador",
          disciplines: [
            "auspex", "celerity", "presence"
          ],
          bane: [
            "Toreador exemplify the old saying that art in the blood takes strange forms. They desire beauty so intensely that they suffer in its absence. While your character finds itself in less than beautiful surroundings, lose the equivalent of their Bane Severity in dice from dice pools to use Disciplines.",
            "The Storyteller decides specifically how the beauty or ugliness of the Toreador’s environ - ment (including clothing, blood dolls, etc.) penalizes them, based on the character’s aesthetics.That said, even devotees of the Ashcan School never find normal streets perfectly beautiful.",
            "This obsession with aesthetics also causes divas to lose themselves in moments of beauty and a bestial failure often results in a rapt trance, as detailed in the Com- pulsion rules(p. 208)."
          ]
        },
        {
          name: "tremere",
          displayName: "Tremere",
          disciplines: [
            "auspex", "dominate", "bloodSorcery"
          ],
          bane: [
            "Once the clan was defined by a rigid hierarchy of Blood Bonds reaching from the top to the bottom of the Pyramid. But after the fall of Vienna, their Blood has recoiled and aborted all such connections. Tremere vitae can no longer Blood Bond other Kindred, though they themselves can be Bound by Kindred from other clans. A Tremere can still bind mortals and ghouls, though the corrupted vitae must be drunk an additional number of times equal to the vampire’s Bane Severity for the bond to form.",
            "Some theorize this change is the revenge of the Antediluvian devoured by Tremere, others attribute it to a simple mutation. Regardless, the clan studies their vitae intently to discover if the process can be reversed, and, indeed, determine if they would want to do so"
          ]
        },
        {
          name: "ventrue",
          displayName: "Ventrue",
          disciplines: [
            "dominate", "fortitude", "presence"
          ],
          bane: [
            "The Ventrue are in possession of rarefied palates. When a Ventrue drinks blood from any mortal outside their preference, a profound exertion of will is required or the blood taken surges back up as scarlet vomit. Preferences range greatly, from Ventrue who can only feed from genuine brunettes, individuals of Swiss descent, or homosexuals, to others who can only feed from soldiers, mortals who suffer from PTSD, or methamphetamine users.",
            "With a Resolve + Awareness test (Difficulty 4 or more) your character can sense if a mortal possesses the blood they require. If you want your character to feed from anything but their preferred victim, you must spend Willpower points equal to the character’s Bane Severity"
          ]
        },
        {
          name: "caitiff",
          displayName: "Caitiff",
          disciplines: [],
          bane: {
            text: [
              "Untouched by the Antediluvians, the Caitiff share no common bane. Caitiff characters begin with the Suspect (•) Flaw and you may not purchase positive Status for them during character creation.",
              "The Storyteller may always impose a one or two dice penalty on Social tests against fellow Kindred who know they are Caitiff, regardless of their eventual Status.",
              "Further, to improve one of the Disciplines of a Caitiff costs six times the level purchased in experience points"
            ],
            advantagesAndFlaws: {
              type: "suspect",
              value: 1
            }
          }
        },
        {
          name: "thinBlood",
          displayName: "Thin-Blood",
          disciplines: [
            "thinBloodAlchemy"
          ]
        },
      ],
      initialValue: ""
    },
    {
      field: "generation",
      displayName: "Generation",
      options: [
        "10th",
        "11th",
        "12th",
        "13th",
        "14th",
        "15th",
        "16th"
      ],
      initialValue: ""
    },
  ],
  // ATTRIBUTES
  attributes: [
    // physical
    {
      field: "strength",
      displayName: "Strength",
      initialValue: 0
    },
    {
      field: "dexterity",
      displayName: "Dexterity",
      initialValue: 0
    },
    {
      field: "stamina",
      displayName: "Stamina",
      initialValue: 0
    },
    // social
    {
      field: "charisma",
      displayName: "Charisma",
      initialValue: 0
    },
    {
      field: "manipulation",
      displayName: "Manipulation",
      initialValue: 0
    },
    {
      field: "composure",
      displayName: "Composure",
      initialValue: 0
    },
    // mental
    {
      field: "intelligence",
      displayName: "Intelligence",
      initialValue: 0
    },
    {
      field: "wits",
      displayName: "Wits",
      initialValue: 0
    },
    {
      field: "resolve",
      displayName: "Resolve",
      initialValue: 0
    },
  ],
  // HEALTH & WILLPOWER
  healthAndWillpower: [
    {
      field: "health",
      displayName: "Health",
      initialValue: 4
    },
    {
      field: "willpower",
      displayName: "Willpower",
      initialValue: 2
    }
  ],
  // SKILLS
  skills: [
    // physical
    {
      field: "athletics",
      displayName: "Athletics",
      initialValue: 0,
    },
    {
      field: "brawl",
      displayName: "Brawl",
      initialValue: 0
    },
    {
      field: "craft",
      displayName: "Craft",
      initialValue: 0,
      specialty
    },
    {
      field: "drive",
      displayName: "Drive",
      initialValue: 0
    },
    {
      field: "firearms",
      displayName: "Firearms",
      initialValue: 0
    },
    {
      field: "larceny",
      displayName: "Larceny",
      initialValue: 0
    },
    {
      field: "melee",
      displayName: "Melee",
      initialValue: 0
    },
    {
      field: "stealth",
      displayName: "Stealth",
      initialValue: 0
    },
    {
      field: "survival",
      displayName: "Survival",
      initialValue: 0
    },
    // social
    {
      field: "animalKen",
      displayName: "Animal Ken",
      initialValue: 0
    },
    {
      field: "etiquette",
      displayName: "Etiquette",
      initialValue: 0
    },
    {
      field: "insight",
      displayName: "Insight",
      initialValue: 0
    },
    {
      field: "intimidation",
      displayName: "Intimidation",
      initialValue: 0
    },
    {
      field: "leadership",
      displayName: "Leadership",
      initialValue: 0
    },
    {
      field: "performance",
      displayName: "Performance",
      initialValue: 0,
      specialty
    },
    {
      field: "persuasion",
      displayName: "Persuasion",
      initialValue: 0
    },
    {
      field: "streetwise",
      displayName: "Streetwise",
      initialValue: 0
    },
    {
      field: "subterfuge",
      displayName: "Subterfuge",
      initialValue: 0
    },
    // mental
    {
      field: "academics",
      displayName: "Academics",
      initialValue: 0,
      specialty
    },
    {
      field: "awareness",
      displayName: "Awareness",
      initialValue: 0
    },
    {
      field: "finance",
      displayName: "Finance",
      initialValue: 0
    },
    {
      field: "investigation",
      displayName: "Investigation",
      initialValue: 0
    },
    {
      field: "medicine",
      displayName: "Medicine",
      initialValue: 0
    },
    {
      field: "occult",
      displayName: "Occult",
      initialValue: 0
    },
    {
      field: "politics",
      displayName: "Politics",
      initialValue: 0
    },
    {
      field: "science",
      displayName: "Science",
      initialValue: 0,
      specialty
    },
    {
      field: "technology",
      displayName: "Technology",
      initialValue: 0
    },
  ],
  // DISCIPLINES
  disciplines: [
    {
      name: "animalism",
      displayName: "Animalism",
      powers: { // by level
        1: [
          {
            name: "bondFamulus",
            displayName: "Bond Famulus",
          },
          {
            name: "senseTheBeast",
            displayName: "Sense The Beast",
          }
        ],
        2: [
          {
            name: "feralWhispers",
            displayName: "Feral Whispers"
          }
        ],
        3: [
          {
            name: "animalSucculence",
            displayName: "Animal Succulence"
          },
          {
            name: "quellTheBeast",
            displayName: "Quell The Beast"
          },
          {
            name: "unlivingHive",
            displayName: "Unliving Hive",
            amalgam: {
              discipline: "obfuscate",
              score: 2
            }
          },
        ],
      }
    },
    {
      name: "auspex",
      displayName: "Auspex",
      powers: []
    },
    {
      name: "bloodSorcery",
      displayName: "Blood Sorcery",
      powers: []
    },
    {
      name: "celerity",
      displayName: "Celerity",
      powers: []
    },
    {
      name: "dominate",
      displayName: "Dominate",
      powers: []
    },
    {
      name: "fortitude",
      displayName: "Fortitude",
      powers: []
    },
    {
      name: "obfuscate",
      displayName: "Obfuscate",
      powers: []
    },
    {
      name: "Potence",
      displayName: "potence",
      powers: []
    },
    {
      name: "presence",
      displayName: "Presence",
      powers: []
    },
    {
      name: "protean",
      displayName: "Protean",
      powers: []
    },
    {
      name: "thinBloodAlchemy",
      displayName: "Thin-Blood Alchemy",
      powers: []
    }
  ],
  // HUNGER, HUMANITY & RESONANCE
  hungerHumanityAndResonance: [
    {
      field: "hunger",
      displayName: "Hunger",
      initialValue: 0
    },
    {
      field: "humanity",
      displayName: "Humanity",
      initialValue: 0
    },
    {
      field: "resonance",
      displayName: "Resonance",
      initialValue: ""
    },
  ],
  // TENETS, ETC.
  tenets: [
    {
      field: "chronicleTenets",
      displayName: "Chronicle Tenets",
      initialValue: []
    },
    {
      field: "touchstonesAndConvictions",
      displayName: "Touchstones & Convictions",
      initialValue: []
    },
    {
      field: "clanBane",
      displayName: "Clan Bane",
      initialValue: ""
    },
  ],
  // ADVANTAGES & FLAWS
  advantagesAndFlaws: [],
  // BLOOD POTENTCY
  bloodPotency: [
    {
      field: "initialValue",
      displayName: "initialValue",
      initialValue: ""
    },
    {
      field: "bloodSurge",
      displayName: "Blood Surge",
      initialValue: ""
    },
    {
      field: "powerBonus",
      displayName: "Power Bonus",
      initialValue: ""
    },
    {
      field: "feedingPenalty",
      displayName: "Feeding Penalty",
      initialValue: ""
    },
    {
      field: "mendAmount",
      displayName: "Mend Amount",
      initialValue: ""
    },
    {
      field: "rouseReRoll",
      displayName: "Rouse Re-Roll",
      initialValue: ""
    },
    {
      field: "baneSeverity",
      displayName: "Bane Severity",
      initialValue: ""
    },
  ],
  // EXPERIENCE
  experience: [
    {
      field: "total",
      displayName: "Total",
      initialValue: ""
    },
    {
      field: "spent",
      displayName: "Spent",
      initialValue: ""
    },
  ],
  // CHARACTER DETAILS
  details: [
    {
      field: "trueAge",
      displayName: "True Age",
      initialValue: ""
    },
    {
      field: "apparentAge",
      displayName: "Apparent Age",
      initialValue: ""
    },
    {
      field: "dateOfBirth",
      displayName: "Date Of Birth",
      initialValue: ""
    },
    {
      field: "appearance",
      displayName: "Appearance",
      initialValue: ""
    },
    {
      field: "distinguishingFeatures",
      displayName: "Distinguishing Features",
      initialValue: ""
    },
    {
      field: "history",
      displayName: "History",
      initialValue: ""
    },
  ],
  // NOTES
  notes: []
}

export default characterProperties;
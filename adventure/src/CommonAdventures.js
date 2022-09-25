
export const CommonAdventures = {
    FairyGarden: {
        type: "story",
        heading: "Fairy Garden",
        story: "You wander through the forest when you hear the sounds of fluttering wings.  You quiet yourself and sneak further towards the sound.  As you approach, you notice a small number of fairies playing a game.",
        actions: [
            {text: "Return Home", action: "ReturnHome"},
            {text: "Stay and Play",randomAction: {50: "FairyGardenStayAndPlayBad", 100: "FairyGardenStayAndPlay"}},
            {conditions: [{stat:"magic",value:11}], text: "Learn from them", action: "LearnFromFairies"},
            {conditions: [{random:50}], text: "Catch a Fairy", action: "FairiesRandom"}
        ]
    },
    FairiesRandom: {
        type: "story",
        heading: "Catch a Fairy",
        story: "You are bold and attempt to catch a fairy, but you are unsuccessful.",
        actions: [{text: "Return Home",action: "ReturnHome"}]
    },
    LearnFromFairies: {
        type: "story",
        heading: "Learn from the Fairies",
        story: "As you approach, you demonstrate a small bit of your magic and ask the Fairies to teach you more.  They show you their ways.",
        reward:[{stat:"satisfaction",value:1}, {magic:1}],
        actions:[{text: "Return Home",action: "ReturnHome"}]
    },
    FairyGardenStayAndPlay: {
        type: "story",
        heading: "Stay and Play",
        story: "The fairies seem to be playing a game of tag.  One spots you and asks you to join them.  You do so and have a wonderful time.",
        reward: [{stat:"satisfaction",value:1}],
        actions: [{text: "Return Home",action: "ReturnHome"}]
    },
    FairyGardenStayAndPlayBad: {
        type: "story",
        heading: "Chased away!",
        story: "The fairies are annoyed by your presence and flee quickly.",
        actions: [{text: "Return Home",action: "ReturnHome"}]
    },
    PotOfGold: {
        type: "story",
        heading: "Pot of Gold",
        story: "You see a pot of gold in the distance.  It seems to be unguarded.  What do you do?",
        actions: [
            {text: "Return Home",action: "ReturnHome"},
            {text: "Take Some Gold",action:"PotOfGoldTakeGold"}
        ]
    },
    PotOfGoldTakeGold: {
        type: "story",
        heading: "You take some gold",
        reward: [{stat:"gold",value:5}],
        story: "You managed to take some gold and go unnoticed.",
        actions: [{text:"Return Home",action:"ReturnHome"}]
    },
    Ogre: {
        type: "story",
        heading: "Ogre!",
        story: "As you head into the forest, in the distance you see an Ogre",
        actions: [
            {text:"Flee!",action:"ReturnHome"},
            {text:"Fight!",action:"OgreFight"}
        ] 
    },
    OgreFight: {
        type: "combat",
        enemyName: "Ogre",
        stats: {hp:20,attack:5,defense:5,magic:0, reward: [{stat:"gold", value: 10}]},
        heading: "Let the battle begin!",
        story: "An ogre is a tall, terrible smelling, and horribly strong creature.",
        actions: []
    },
    CombatComplete: {
        type: "story",
        heading: "You won!",
        story: "It was hard fought, but you came out victorious",
        reward: [{}],
        actions: [{text: "Return Home",action:"complete"}]
    },
    Flee: {
        type: "story",
        heading: "Live to fight another day...",
        story: "You ran as fast and hard as you could and managed to escape with your life.",
        reward: [{}],
        action: [{text: "Return Home",action:"complete"}]
    },
    ReturnHome: {
        type: "story",
        heading: "Return Home",
        story: "The sun sets as you take the journey back to town",
        actions: [
            {text:"Return Home",action:"complete"}
        ]
    }

};
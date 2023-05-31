// index.html Smash Games - Home
// blast.html Smash Games - Inferno Blast
const data={
    brandname: "Smash Games",
    pages: [
        {
            name: "index",
            pagename: "Home",
            calltoaction: {
                src: "images/SmashGamesLogo-short.png",
                alttext: "smash games logo"
            }
        },
        {
            name:"blast",
            pagename:"Inferno Blast",
            blocks: [
                {  
                    type: "call-to-action",
                    src: "images/Inferno-Jumbotron.png",
                    alttext: "Inferno Blast Gameplay",
                    buttonlinksrc: "https://steampowered.com",
                    buttonlinktext: "buy now on steam!"
                },
                {
                    type: "description",
                    text: "Inferno Blast is an action-packed adventure game that takes players to a fiery realm of danger and excitement. In this game, you'll take on the role of a hero who must navigate through a series of treacherous levels filled with fiery obstacles and hordes of demons. With each level you complete, you'll unlock new weapons and power-ups to help you in your quest to defeat the ultimate demon boss. Can you survive the inferno and emerge victorious?"
                },
                {
                    type: "deck",
                    cards: [
                        {
                            type: "card",
                            // card properties go down here
                            src: "images/Inferno/Inferno-2-short.png",
                            alttext: "Inferno Blast gameplay",
                            title: "Dynamic Environments",
                            body: "Navigate through a variety of fiery landscapes, including fiery pits, hellish hell zones of hell, and demon infested scroogle zones.",
                            
                        },
                        {
                            type: "card",
                            // card properties go down here
                            src: "images/Inferno/Inferno-1-short.png",
                            alttext: "Inferno Blast gameplay",
                            title: "Upgradeable Weapons",
                            body: "Customize your arsenal with a whaggamuffin of tons of different floogle tuned weaponry designed to inflict maximum collateral damage on innocents.",
                            
                        }


                    ],
                }
            ],

        }

    ]
}

console.log(data.brandname + " - "+data.pages[1].blocks[2].cards[1].body)

var block= {
    type: "call to action",
    src: "images/Inferno-Jumbotron.png",
    alttext: "Inferno Blast Gameplay",
    buttonlinksrc: "https://steampowered.com",
    buttonlinktext: "buy now on steam!"
}
const roles={
    eboard:"Editor-in-Chief",
    editorial:{
        member:"Editorial Team",
        eboard:"Executive Editor"
    },
    outreach:{
        member:"Outreach Team",
        eboard:"Director of Outreach"
    },
    journalism:{
        member:"Journalism Team",
        eboard:"Director of Journalism"
    },
    treasury:{
        member:"Treasury Team",
        eboard:"Treasurer"
    },
    technology:{
        member:"Technology Team",
        eboard:"Head of Web Development"
    },
    advertisement:{
        member:"Advertisement Team",
        eboard:"Director of Advertising"
    }
}

// Assuming you have an array of people objects called 'members'
const members = [
    {
        name: "Sofya Levitina",
        position: roles.eboard,
        imageSrc: "sopha_eboard.jpeg"
    },
    {
        name: "Joseph Mooney",
        position: roles.outreach.eboard,
        imageSrc: "joe_eb.jpeg"
    },
    {
        name: "Malak Nechnach",
        position: roles.journalism.member,
        imageSrc: "malak.png"
    },
    {
        name: "Yarden Sackett",
        position: roles.treasury.member,
        imageSrc: "yarden.png"
    },
    {
        name: "Christian Bjork",
        position: roles.editorial.eboard,
        imageSrc: "christian_eb.png"
    },
    {
        name: "Laura Augenbraun",
        position: roles.advertisement.eboard,
        imageSrc: ""  // Add the correct image source
    },
    {
        name: "Devesh Karthik",
        position: roles.journalism.member,
        imageSrc: "devesh.jpeg"
    },
    {
        name: "Rilee Harris",
        position: roles.editorial.member,
        imageSrc: "rilee.jpeg"
    },
    {
        name: "John-Michael Mendez",
        position: roles.technology.member,
        imageSrc: ""  // Add the correct image source
    },
    {
        name: "Siddharth Sinha",
        position: roles.technology.eboard,
        imageSrc: "siddharth_eb.jpg"
    },
    {
        name: "Natalie Aloisio",
        position: roles.editorial.member,
        imageSrc: "natalie.jpeg"
    },
    {
        name: "Ryan Durrell",
        position: roles.journalism.member,
        imageSrc: "ryan.jpeg"
    },
    {
        name: "Sravya Lingam",
        position: roles.advertisement.member,
        imageSrc: ""  // Add the correct image source
    },
    {
        name: "Danya Alboslani",
        position: roles.journalism.member,
        imageSrc: "danya.jpeg"
    },
    {
        name: "Suheera Haq",
        position: roles.advertisement.eboard,
        imageSrc: "suheera_eb.jpeg"
    },
    {
        name: "Enya Goonetilleke",
        position: roles.editorial.member,
        imageSrc: "enya.jpeg"
    },
    {
        name: "Caelah Etter",
        position: roles.treasury.eboard,
        imageSrc: "caelah_eboard.jpeg"
    },
    {
        name: "Mishael Gill",
        position: roles.journalism.member,
        imageSrc: "mishael.jpeg"
    },
    {
        name: "Anshul Rastogi",
        position: [
            roles.editorial.member,
            roles.technology.member
        ],
        imageSrc: "" // Add the correct image source
    },
    {
        name: "Sophia Balskus",
        position: roles.advertisement.member,
        imageSrc: "sophia.png" // Add the correct image source
    }
    // Add more member objects as needed...
];
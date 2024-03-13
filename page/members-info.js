const teams={
    eboard:{
        name:"Executive Board",
        desc:""
    },
    editorial:{
        name:"Editorial Team",
        desc:""
    },
    outreach:{
        name:"Outreach Team",
        desc:""
    },
    journalism:{
        name:"Journalism Team",
        desc:""
    },
    treasury:{
        name:"Treasury Team",
        desc:""
    },
    technology:{
        name:"Technology Team",
        desc:""
    },
    advertisement:{
        name:"Advertisement Team",
        desc:""
    }
}

const misc={
    graphic:"Graphic Designer",
    ignite:"Head of Ignite Initiative"
}

const eboard={
    chief:["Editor-in-Chief",],
    editorial:["Executive Editor",teams.editorial.name],
    outreach:["Director of Outreach",teams.outreach.name],
    journalism:["Director of Journalism",teams.journalism.name],
    treasury:["Treasurer",teams.treasury.name],
    technology:["Head of Web Development",teams.technology.name],
    advertisement:["Director of Advertising",teams.advertisement.name],
    assistant:["E-Board Assistant",]
}


// Assuming you have an array of people objects called 'members'
const members = [
    {
        name: "Sofya Levitina",
        eboard: true,
        position: eboard.chief,
        imageSrc: "sopha_eboard.jpeg",
        email:"sofya.levitina@uconn.edu",
        bio:`
        Sofya Levitina is a Physics and Mathematics-Statistics major
        and Astrophysics minor. She is the Editor in Chief and Founder
        of the Undergraduate Science Journal. Outside of USJ, Sofya
        has worked with her research mentor Daniel Angles-Alcazar
        since her freshman year investigating black hole properties
        within Simba and CAMELS simulations. Sofya is a University
        Scholar working on a project that uses artificial intelligence
        to predict black hole mass, the president of Society of Physics
        Students, and a UCONN@COP27 fellow. Sofya is also a part of
        UCG, a selective consulting group on campus. In her spare time,
        Sofya enjoys cooking and traveling.
        `
    },
    {
        name: "Joseph Mooney",
        eboard: true,
        position: eboard.outreach,
        imageSrc: "joe_eb.jpeg",
        email:"",
        bio:`
        Joseph Mooney is a senior pursuing a dual degree in Physiology
        and Neurobiology and Anthropology. He is the Director of Outreach
        for the Undergraduate Science Journal. Outside of USJ, he has
        worked under his research mentor, Dr. Geoffrey Tanner, for four
        years investigating the effectiveness of beta-hydroxybutyrate
        isomers at ameliorating symptoms following traumatic brain injury
        as well as the effectiveness of cannabidiol at reducing
        phosphorylated-tau expression in Alzheimer’s-simulated <i>D.
        melanogaster</i> models. Joseph is also a member of UAID, a club
        driven towards addressing food insecurity in Windham Country.
        Joseph is a resident assistant at McMahon and in his free time,
        enjoys playing soccer, cooking, and eating said cooked food.
        `
    },
    {
        name: "Caelah Etter",
        eboard: true,
        position: eboard.treasury,
        imageSrc: "caelah_eboard.jpeg",
        email:"",
        bio:`
        Caelah Etter is a sophomore at UConn majoring in Physics, with
        minors in Astrophysics and Art! She is the treasurer of the
        Undergraduate Science Journal. Outside of USJ, she is currently
        involved in research with Jonathan Trump doing research on the
        CEERS 1019 black hole. On campus, she is also in Alpha Phi Omega,
        Alpha Omicron Pi, the Honors Program, and the club sailing team.
        In her free time, she enjoys reading, singing, traveling, and
        photography. 
        `
    },
    {
        name: "Laura Augenbraun",
        eboard: true,
        position: eboard.journalism,
        imageSrc: "",  // Add the correct image source
        email:"",
        bio:`
        Laura Augenbraun is a Senior at UConn double majoring in
        mathematics and journalism. She is the chief Journalist at USJ
        and manages the journalism team. Outside of USJ, Laura is
        involved in UConn Hillel and her sorority Alpha Epsilon Phi.
        `
    },
    {
        name: "Christian Bjork",
        eboard: true,
        position: eboard.editorial,
        imageSrc: "christian_eb.png",
        email:"",
        bio:`
        Christian Bjork is a senior majoring in Mechanical Engineering
        with a minor in Astrophysics. He has been the Executive Editor
        of the Undergraduate Science Journal since its inception.
        Outside of USJ he is involved in the FANTastic Lab studying
        nascent soot formation as well as catalyst nanoparticle
        synthesis with the use of High-Resolution Differential Mobility
        Analysis, Laser Light Scattering, and Light Induced
        Incandescence. Beyond research, he is one of the SRAs in the
        Buckley/Shippee Living Community and a member of the society of
        physics students. In his free time, Christian enjoys collecting
        records, listening to music, hiking, camping, playing various 
        instruments, and more.
        `
    },
    {
        name: "Siddharth Sinha",
        eboard: true,
        position: eboard.technology,
        imageSrc: "siddharth_eb.jpg",
        email:"",
        bio:``
    },
    {
        name: "Suheera Haq",
        eboard: true,
        position: eboard.advertisement,
        imageSrc: "suheera_eb.jpeg",
        email:"",
        bio:`
        Suheera Haq is a sophomore majoring in Molecular and Cell
        Biology as well as an individualized major in Social
        Determinants of Women’s Healthcare. Her position in USJ is
        the Director of Advertisement. Outside of USJ, she is
        currently involved in research in the department of radiation
        oncology at Dana-Farber Cancer Institute. On campus she is
        involved with UConn choirs, the Bengali Student Association,
        and UConn Health Leaders. Outside of school she enjoys music,
        playing pool, and doing the NYT Wordle daily!
        `
    },
    {
        name: "Malak Nechnach",
        eboard: true,
        position: eboard.assistant.concat([teams.journalism.name]),
        imageSrc: "malak.png",
        email:"",
        bio:`
        Malak Nechnach is a sophomore Physiology & Neurobiology major
        as well as Psychology minor. She is part of the journalism team
        at USJ. Outside of USJ, Malak is a mentor for the program Women
        in STEM as well as co-vice president of the French Club. She is
        a Research Assistant for the CALLlab which aims to better
        understand the pathology of ASD by linking research at the
        molecular, neurofunctional and at the behavioral level, with the
        goal to connect complex behaviors to underlying genetic
        mechanisms. During her free time, she enjoys playing soccer,
        playing the piano and traveling!
        `
    },
    {
        name: "Yarden Sackett",
        eboard: false,
        position: [teams.treasury.name],
        imageSrc: "yarden.png",
        email:"",
        bio:`
        Yarden Sackett is a physics major at UConn, and is part of the
        Treasury team for the Undergraduate Science Journal. He has
        previously worked on research involving modifying digital light
        sensors to pick up the spectra of bright stellar objects. In the
        future Yarden will work under professor and researcher Jonathan
        Trump in the spring semester on the early formations of black holes,
        and will continue throughout his undergraduate career. After
        graduating, Yarden plans to continue in the STEM path and pursue
        a graduate degree in Aerospace Engineering.
        `
    },
    {
        name: "Devesh Karthik",
        eboard: false,
        position: [teams.journalism.name],
        imageSrc: "devesh.jpeg",
        email:"",
        bio:`
        Devesh Karthik is a first year physics student in the Journalism
        team of the Undergraduate Science Journal. In High School, he was
        the Co-Editor-in-Chief of <i>The Broadside</i> and Captain of the
        Rocky Hill High School Math Team. At UConn, he is a screenwriter
        in the UCTV film club, and a member of the Undergraduate Philosophy
        Society. Devesh looks forward to working in theoretical condensed
        matter or particle physics research during his undergraduate career.
        In his free time, Devesh likes to watch movies, listen to music,
        and explore the outdoors.
        `
    },
    {
        name: "Rilee Harris",
        eboard: false,
        position: [teams.editorial.name],
        imageSrc: "rilee.jpeg",
        email:"",
        bio:`
        Rilee Harris is a freshman majoring in Biochemistry with a Fine Arts
        minor. She is on the Editorial Team of the Undergraduate Science
        Journal and is a member of the Art and Art History Club. She has done
        independent research using statistical analysis to compare analog
        chronometry to mathematical competencies in preadolescents. In her
        free time, Rilee enjoys reading and doodling on her biology notebooks.
        `
    },
    {
        name: "John-Michael Mendez",
        eboard: false,
        position: [teams.technology.name],
        imageSrc: "",  // Add the correct image source
        email:"",
        bio:`
        John-Michael Mendez is a freshman Materials Science and Engineering
        major. He is on the technology team at USJ. He aims to pursue research
        in the rising field of regenerative engineering. Outside of USJ he plays
        saxophone in the UConn Marching Band and is a developer for GoalTac.
        He is also a United Multiple Sulfatase Deficiency foundation Ambassador.
        `
    },
    {
        name: "Natalie Aloisio",
        eboard: false,
        position: [teams.editorial.name],
        imageSrc: "natalie.jpeg",
        email:"",
        bio:`
        Natalie Aloisio is a senior Physiology and Neurobiology major,
        and is a part of the Editorial Team of the Undergraduate
        Science Journal. Outside of USJ, Natalie works in Dr. Geoffrey
        Tanner’s lab at UConn where she is investigating the
        effectiveness of creatine monohydrate supplementation on
        ameliorating symptoms of mild traumatic brain injury (mTBI)
        using <i>Drosophila melanogaster</i> as a model organism. This
        study uses a Multibeam Activity Monitor to analyze circadian
        rhythm patterns in drosophila post-mTBI. Natalie is also the
        Development Coordinator for Camp Kesem at UConn, a club that
        organizes a free, annual summer camp for children who have been
        impacted by a parent or guardian’s cancer. In her spare time,
        Natalie loves to lift in the gym, cook, and play basketball!
        `
    },
    {
        name: "Ryan Durrell",
        eboard: false,
        position: [teams.journalism.name],
        imageSrc: "ryan.jpeg",
        email:"",
        bio:`
        Ryan Durrell is a senior Economics and Mathematics major. He is
        a member of the journalism team for USJ. Outside of the club, he
        has worked with Professor Metin Cosgel for research in American
        historical economics. On campus, he is involved as a tutor with
        the university, as well as the Economics Society. He has
        conducted research on interests such as the harmonic complexity
        for contemporary music. In his spare time he enjoys playing
        music and travel.
        `
    },
    {
        name: "Sravya Lingam",
        eboard: false,
        position: [teams.advertisement.name],
        imageSrc: "",  // Add the correct image source
        email:"",
        bio:`
        Sravya Lingam is a sophomore allied health major. She is in the
        advertisement team of the Undergraduate Student Journal. She
        also participates in research under Dr. Waring studying social
        media and the effect on perinatal and maternal health as well as
        other maternal health topics. She also works for a non-profit
        called People for Urban and Rural Education.  In her free time
        Sravya enjoys cooking, working out, and finding new shows to watch.
        `
    },
    {
        name: "Danya Alboslani",
        eboard: false,
        position: [teams.journalism.name],
        imageSrc: "danya.jpeg",
        email:"",
        bio:`
        Danya Alboslani is a senior Physics student minoring in astrophysics.
        She is a member of the journalist team for USJ. Outside of USJ Danya
        researches the structure of stellar nurseries at the Milky Way
        Laboratory. She is dedicated to diversity and inclusion in STEM and
        thus is the President for the Women in Physics club as well as a
        co-lead and mentor for the Science, Technology,and Astronomy Recruits.
        In her free time, Danya likes to draw, travel, cook, and play tennis!
        `
    },
    {
        name: "Enya Goonetilleke",
        eboard: false,
        position: [teams.editorial.name,misc.ignite],
        imageSrc: "enya.jpeg",
        email:"",
        bio:`
        Enya Goonetilleke is a freshman in the Honors College majoring
        in Physiology and Neurobiology and minoring in Anthropology of
        Global Health. She is on the editorial Board of the USJ, a
        journal she loves working with! She is currently researching
        with Dr. Sharon Casavant on genetic markers of premature
        infants and is a member of the Collegiate Health Service Corp.
        She is also a member of the Native American and Indigenous
        Student Association. In her spare time, Enya enjoys reading,
        hiking, and learning surgical stitches using a suture pad.
        `
    },
    {
        name: "Mishael Gill",
        eboard: false,
        position: [teams.journalism.name],
        imageSrc: "mishael.jpeg",
        email:"",
        bio:`
        Mishael Gill is a first-year Physiology and Neurobiology major
        in the Special Program in Medicine (SPiM). As a member of the
        journalism team, she contributes articles featuring professors
        and students conducting research around campus. She is currently
        working with Dr. Isaac Macwan at Fairfield University to conduct
        molecular dynamics simulations of the MDR-1 protein and various
        nanoparticles. On campus, she is a part of the Honors Program,
        Pakistani Community at UConn, and Kidney Disease Screening and
        Prevention Program. She loves watching Christopher Nolan movies
        and listening to Gracie Abrams.
        `
    },
    {
        name: "Anshul Rastogi",
        eboard: false,
        position: [teams.editorial.name,teams.technology.name,misc.graphic],
        imageSrc: "", // Add the correct image source
        email:"",
        bio:`
        Anshul Rastogi is an elitist gnome pursuing a questionable
        dual degree in Computer Science and Molecular & Cell Biology.
        He's on the Editorial and Technology Team of the Undergraduate
        Science Journal. He has no qualifications and is part of the club
        as a running joke. He won the position of freshman representative
        for the SPiM Class of 2027 as part of an illicit bet and
        chronically abuses his newfound power to divert SPiM Board funds
        toward his manic broccoli addiction. In his spare time, he enjoys
        digital painting (poorly), reading and writing mostly
        sci-fi/fantasy stories (poorly), and gambling his chess rating
        online (poorly, but, miraculously, also legally). He claims to be
        in the UConn Undergraduate Philosophy Society but no longer attends
        meetings. Moreover, he eats food, against all odds, and has also
        never been sighted in public (hence no photos).
        `
    },
    {
        name: "Sophia Balskus",
        eboard: false,
        position: [teams.advertisement.name],
        imageSrc: "sophia.png", // Add the correct image source
        email:"",
        bio:`
        Sophia Balskus is a Allied Health major, and is an active member
        of the Advertisement Team at Undergraduate Science Journal. As
        an ambitious freshman, she aspires to pursue the Dietetics program
        at the end of her sophomore year. Driven by her curiosity about
        the world of science, Sophia envisions a future filled with
        research opportunities during her time at UConn. Beyond academics,
        she's a dedicated member of both the running and fencing clubs,
        wanting a well-rounded university experience. In her spare time,
        Sophia likes to paint and hike.
        `
    }
    // Add more member objects as needed...
];



function intersection(arr_1,arr_2) {
    return arr_1.filter(item=>new Set(arr_2).has(item))
}

function compare_by_name(m_1,m_2) {
    if (m_1.name<m_2.name) {
        return -1
    }
    else if (m_1.name>m_2.name) {
        return 1
    }
    return 0
}

function compare_members(m_1,m_2) {
    if (intersection(m_1.position,eboard.chief).length>0) {
        return -1;
    }
    if (intersection(m_2.position,eboard.chief).length>0) {
        return 1;
    }
    if (m_1.eboard) {
        if (m_2.eboard) {
            return compare_by_name(m_1,m_2);
        }
        return -1;
    }
    if (m_2.eboard) {
        return 1;
    }
    return compare_by_name(m_1,m_2);
  }

//sorts members by teams
var by_team={};
Object.values(teams).forEach(
    team=>{
        by_team[team.name]=[]
    }
);
members.forEach(
    member=>{
        common_items=intersection(member.position,Object.keys(by_team));
        if (common_items.length>0) {
            common_items.forEach(
                item=>{
                    by_team[item].push(member);
                }
            );
        };
        if (member.eboard) {
            by_team[teams.eboard.name].push(member);
        };
    }
);
Object.values(by_team).forEach(
    team=>{
        team.sort(compare_members)
    }
);
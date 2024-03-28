// this big chunky members.js file takes care of the following:
// - stores all member information
// - formats all member display html
// - formats all eboard display html
// - Also author card formatting for blog pages



// next several dictionaries used to store team and position names
// this way if we ever want to change a team name we can just change it here
// and it updates for all members

// contains team position names and descriptions
const teams={
    eboard:{
        name:"Executive Board",
        desc:""
    },
    editorial:{
        name:"Editorial Team",
        desc:"The editorial team is responsible for reviewing all papers submitted to the Undergraduate Science Journal. This includes thoroughly reading each paper, leaving productive feedback, and scoring it on the USJ rubric. As a whole, the team decides which papers advance to the next step of the process: revision, and submission to the Faculty Review Committee. Members of this team typically read at least two papers each to ensure several reviewers read each paper. Throughout the process, members gain skills in reading academic literature and determining effective writing and what makes an effective paper. Additionally, the editorial team assists other teams as necessary, especially with the search for prospective papers."
    },
    outreach:{
        name:"Outreach Team",
        desc:"The outreach team is responsible for working with the Director of Outreach to create and coordinate events, as well as promote events to professors and students via email. The outreach team is also responsible for writing promotional messages that are then disseminated by other members of USJ. Outreach team members are tasked with forming connections with their professors and professors/advisors in their department to expand the reach of USJ and to most effectively promote organization events and submission timelines."
    },
    journalism:{
        name:"Journalism Team",
        desc:""
    },
    treasury:{
        name:"Treasury Team",
        desc:"The treasury team is responsible for helping the treasurer do administrative tasks, such as booking fundraisers, rooms, tables, etc. They also help with creating fundraisers, and are a big part in USJ’s ignite campaign. They are also expected to participate in the fundraisers and events by manning tables, help set up for events, help the Director of Advertising, etc."
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

// contains miscellaneous positions that don't have an associated team
const misc={
    founder:"Founder",
    graphic:"Graphic Designer",
    ignite:"Head of Ignite Initiative"
}

// contains all eboard positions
const eboard={
    chief:{
        name:["Editor-in-Chief",],
        desc:"The Editor in Chief is the acting president of USJ who oversees and keeps track of all organizational activities to ensure timeliness and completion. The Editor in Chief is responsible for creating semesterly and yearly plans and goals for the organization, brainstorming organizational optimization, and conducting biweekly GBMs and E-board meetings. They do not oversee the teams; each team leader works individually to make sure their team is on track. The Editor in Chief is the main point of contact with the Faculty Review Committee along with the Director of Outreach, and is responsible for keeping them up-to-date on the organization’s progress and events. Finally, the Editor in Chief is in charge of recruiting and acts as the main point of contact for all members. An acting Editor in Chief will problem-solve, strategize, and streamline the publishing and promotion of the Journal.",
    },
    editorial:{
        name:["Executive Editor",teams.editorial.name],
        desc:"The Executive Editor oversees the paper review process from start to finish. This includes everything from curating the rubric and standard used to evaluate the papers, ensuring the integrity of the double-blind review process, assigning reviewers from the student review committee (a.k.a. Editorial Team) to each paper, and reading each paper to ensure a standard of quality. They are also responsible for communicating with the authors of the papers throughout the review process to let them know the status of their paper and deliver their feedback. Finally, the executive editor assists other teams as necessary, especially with the search for prospective papers.",
    },
    outreach:{
        name:["Director of Outreach",teams.outreach.name],
        desc:"The Director of Outreach is responsible for maintaining the club’s relationship with the Faculty Review Committee and promoting the club within UConn offices and UConn organizations. This also includes updating and working with the Office of Undergraduate Research to remain involved in current on-campus research presentations and events. The Director of Outreach is also responsible for creating and managing USJ events, coordinating with the honors office to approve applicable events as honors, and communicating with the advertisement and treasury team to promote and manage event funding. The Director of Outreach also oversees and manages the outreach team to implement events and promote the club to professors and undergraduate students.",
    },
    journalism:{
        name:["Director of Journalism",teams.journalism.name],
        desc:"",
    },
    treasury:{
        name:["Treasurer",teams.treasury.name],
        desc:"The Treasurer is responsible for the financial management, most importantly the banking contract and budget of USJ, which include paying for event spaces, catering, and reimbursing club members. The treasurer is also responsible for planning, organizing, and staffing all of USJ’s fundraising events which in the past have included Krispy Kreme, Ignite, Blaze, and Mooyah. They also do the administrative work for USJ, such as booking rooms and dates. This allows them to work closely with the outreach team, as they are responsible for booking the rooms for all of USJ’s events. They also work with the treasury team to complete SABS’ requirements and funding requests.",
    },
    technology:{
        name:["Head of Web Development",teams.technology.name],
        desc:"",
    },
    advertisement:{
        name:["Director of Advertising",teams.advertisement.name],
        desc:"The Director of Advertisement promotes USJ and its mission to the undergraduate community through social and print media. The Director of Advertisement generates weekly content for the Instagram on a consistent schedule; posts may include photos of GBMs, events, links to blog posts, or notices of upcoming deadlines for the journal. They will also distribute flyers for upcoming events and notices for paper submissions. Finally, to engage undergraduate STEM students, the Director also uses media to recruit new team members and submissions for the journal.",
    },
    assistant:{
        name:["E-Board Assistant",],
        desc:"",
    },
}








/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

// stores all members info
const members={
    "Sofya Levitina":{
        position: eboard.chief.name.concat(misc.founder),
        imageSrc: ".jpeg",
        email:"sofya.levitina@uconn.edu",
        bio:`
        Sofya Levitina is a Physics and Mathematics-Statistics major
        and Astrophysics minor. Outside of USJ, Sofya
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
    "Joseph Mooney":{
        position: eboard.outreach.name,
        imageSrc: ".jpeg",
        email:"",
        bio:`
        Joseph Mooney is a senior pursuing a dual degree in Physiology
        and Neurobiology and Anthropology. Outside of USJ, he has
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
    "Caelah Etter":{
        position: eboard.treasury.name,
        imageSrc: ".jpeg",
        email:"",
        bio:`
        Caelah Etter is a sophomore at UConn majoring in Physics, with minors in Astrophysics and Art! Outside of USJ, she is currently involved in research with Jonathan Trump and Bren Backhaus on the emission lines (specifically Lyman alpha) of the CEERS, JADES, and GLASS galaxies. On campus, she is also in Alpha Phi Omega, Alpha Omicron Pi, the Honors Program, and is a member of Hus-Keys Acapella. In her free time, she enjoys reading, singing, traveling, and photography.
        `
    },
    "Laura Augenbraun":{
        position: eboard.journalism.name,
        imageSrc: "",
        email:"",
        bio:`
        Laura Augenbraun is a Senior at UConn double majoring in
        mathematics and journalism. Outside of USJ, Laura is
        involved in UConn Hillel and her sorority Alpha Epsilon Phi.
        `
    },
    "Christian Bjork":{
        position: eboard.editorial.name,
        imageSrc: ".png",
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
    "Siddharth Sinha":{
        position: eboard.technology.name,
        imageSrc: ".jpg",
        email:"",
        bio:``
    },
    "Suheera Haq":{
        position: eboard.advertisement.name,
        imageSrc: ".jpeg",
        email:"",
        bio:`
        Suheera Haq is a sophomore majoring in Molecular and Cell
        Biology as well as an individualized major in Social
        Determinants of Women’s Healthcare. Outside of USJ, she is
        currently involved in research in the department of radiation
        oncology at Dana-Farber Cancer Institute. On campus she is
        involved with UConn choirs, the Bengali Student Association,
        and UConn Health Leaders. Outside of school she enjoys music,
        playing pool, and doing the NYT Wordle daily!
        `
    },
    "Mishael Gill":{
        position: eboard.advertisement.name.concat([teams.journalism.name]),
        imageSrc: ".jpeg",
        email:"",
        bio:`
        Mishael Gill is a first-year Physiology and Neurobiology major
        in the Special Program in Medicine (SPiM). She contributes articles featuring professors
        and students conducting research around campus. She is currently
        working with Dr. Isaac Macwan at Fairfield University to conduct
        molecular dynamics simulations of the MDR-1 protein and various
        nanoparticles. On campus, she is a part of the Honors Program,
        Pakistani Community at UConn, and Kidney Disease Screening and
        Prevention Program. She loves watching Christopher Nolan movies
        and listening to Gracie Abrams.
        `
    },
    "Malak Nechnach":{
        position: eboard.assistant.name.concat([teams.journalism.name]),
        imageSrc: ".png",
        email:"",
        bio:`
        Malak Nechnach is a sophomore majoring in PNB and minoring in Computer Science. She joined USJ because she is passionate about research, and she is part of the journalism team. Outside of the club, she is a research assistant for Sciolino’s Lab, where her research focuses on understanding how the effects of the central norepinephrine system regulates motivated behaviors. She is a mentor for WiSTEM, Vice president of EDI for the TWN and a SPIN instructor.
        `
    },
    "Yarden Sackett":{
        position: [teams.treasury.name],
        imageSrc: ".png",
        email:"",
        bio:`
        Yarden Sackett is a physics major at UConn. He has
        previously worked on research involving modifying digital light
        sensors to pick up the spectra of bright stellar objects. In the
        future Yarden will work under professor and researcher Jonathan
        Trump in the spring semester on the early formations of black holes,
        and will continue throughout his undergraduate career. After
        graduating, Yarden plans to continue in the STEM path and pursue
        a graduate degree in Aerospace Engineering.
        `
    },
    "Devesh Karthik":{
        position: [teams.journalism.name],
        imageSrc: ".jpeg",
        email:"",
        bio:`
        Devesh Karthik is a first year physics student in the Undergraduate Science Journal. In high school, he was the Co-Editor-in-Chief of <i>The Broadside</i> and Captain of the Rocky Hill High School Math Team. At UConn, he is a screenwriter in the UCTV film club, and a member of the Undergraduate Philosophy Society. Devesh is a member of Santos’ Group, researching theoretical many-body quantum dynamics. In his free time, Devesh likes to watch movies, listen to music, and explore the outdoors.
        `
    },
    "Rilee Harris":{
        position: [teams.editorial.name],
        imageSrc: ".jpeg",
        email:"",
        bio:`
        Rilee Harris is a freshman majoring in Molecular and Cell Biology with a Fine Arts minor. Beyond USJ, she is a member of the Undergraduate Organization of Molecular and Cell Biology and Paint Club. She has done independent research using statistical analysis to compare analog chronometry to mathematical competencies in preadolescents. In her free time, Rilee enjoys reading and doodling on her biology notebooks.
        `
    },
    "John-Michael Mendez":{
        position: [teams.technology.name],
        imageSrc: "",
        email:"",
        bio:`
        John-Michael Mendez is a freshman Materials Science and Engineering
        major. He aims to pursue research
        in the rising field of regenerative engineering. Outside of USJ he plays
        saxophone in the UConn Marching Band and is a developer for GoalTac.
        He is also a United Multiple Sulfatase Deficiency foundation Ambassador.
        `
    },
    "Natalie Aloisio":{
        position: [teams.editorial.name],
        imageSrc: ".jpeg",
        email:"",
        bio:`
        Natalie is a senior Physiology and Neurobiology major. Outside of USJ, Natalie works in Dr. Geoffrey Tanner’s lab at UConn where she is investigating the effectiveness of creatine monohydrate and exogenous ketone body supplementation on ameliorating symptoms of mild traumatic brain injury (mTBI) using Drosophila melanogaster as a model organism. This study uses a multibeam activity monitor to analyze circadian rhythm patterns in Drosophila post-mTBI. Natalie is also the Development Coordinator for Camp Kesem at UConn, a club that organizes a free, annual summer camp for children who have been impacted by a parent or guardian’s cancer. In her spare time, Natalie loves to lift in the gym, cook, and play basketball!
        `
    },
    "Ryan Durrell":{
        position: [teams.journalism.name],
        imageSrc: ".jpeg",
        email:"",
        bio:`
        Ryan Durrell is a senior Economics and Mathematics major. Outside of the club, he
        has worked with Professor Metin Coşgel for research in American
        historical economics. On campus, he is involved as a tutor with
        the university, as well as the Economics Society. He has
        conducted research on interests such as the harmonic complexity
        for contemporary music. In his spare time he enjoys playing
        music and travel.
        `
    },
    "Sravya Lingam":{
        position: [teams.advertisement.name],
        imageSrc: "",
        email:"",
        bio:`
        Sravya Lingam is a sophomore allied health major. She
        also participates in research under Dr. Waring studying social
        media and the effect on perinatal and maternal health as well as
        other maternal health topics. She also works for a non-profit
        called People for Urban and Rural Education.  In her free time
        Sravya enjoys cooking, working out, and finding new shows to watch.
        `
    },
    "Danya Alboslani":{
        position: [teams.journalism.name],
        imageSrc: ".jpeg",
        email:"",
        bio:`
        Danya Alboslani is a senior Physics student minoring in astrophysics.
        Outside of USJ, Danya
        researches the structure of stellar nurseries at the Milky Way
        Laboratory. She is dedicated to diversity and inclusion in STEM and
        thus is the President for the Women in Physics club as well as a
        co-lead and mentor for the Science, Technology,and Astronomy Recruits.
        In her free time, Danya likes to draw, travel, cook, and play tennis!
        `
    },
    "Enya Goonetilleke":{
        position: [teams.editorial.name,misc.ignite],
        imageSrc: ".jpeg",
        email:"",
        bio:`
        Enya Goonetilleke is a freshman in the Honors College majoring
        in Physiology and Neurobiology and minoring in Anthropology of
        Global Health. Beyond USJ, she is currently researching
        with Dr. Sharon Casavant on genetic markers of premature
        infants and is a member of the Collegiate Health Service Corp.
        She is also a member of the Native American and Indigenous
        Student Association. In her spare time, Enya enjoys reading,
        hiking, and learning surgical stitches using a suture pad.
        `
    },
    "Anshul Rastogi":{
        position: [teams.editorial.name,teams.technology.name,misc.graphic],
        imageSrc: "",
        email:"",
        bio:`
        Anshul Rastogi is an elitist gnome pursuing a dual degree in Computer Science and Molecular & Cell Biology.
        He has no qualifications and is part of USJ
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
    "Sophia Balskus":{
        position: [teams.advertisement.name],
        imageSrc: ".png",
        email:"",
        bio:`
        Sophia Balskus is a Allied Health major, and is an active member
        of Undergraduate Science Journal. As
        an ambitious freshman, she aspires to pursue the Dietetics program
        at the end of her sophomore year. Driven by her curiosity about
        the world of science, Sophia envisions a future filled with
        research opportunities during her time at UConn. Beyond academics,
        she's a dedicated member of both the running and fencing clubs,
        wanting a well-rounded university experience. In her spare time,
        Sophia likes to paint and hike.
        `
    },
    "Katherine Lee":{
        position: [teams.outreach.name],
        imageSrc: ".jpg",
        email:"",
        bio:`
        Katherine Lee is a freshman dual majoring in Cognitive Science and Physiology and Neurobiology. Outside of USJ, Katherine is involved in the EcoHouse Learning Community, serving as FYE Mentor for the 2024-2025 year, volunteers at various Eco- and stem events, and dabbles in backstage crew for the Connecticut Repertory Theater! Beyond academics, she enjoys reading, listening to Noah Floersch and The Brook and the Bluff, and spending time outdoors!
        `
    },
    "Erica Lavoie":{
        position: [teams.editorial.name],
        imageSrc: ".jpeg",
        email:"",
        bio:`
        Erica Lavoie is a junior studying Molecular and Cell Biology with a minor in Neuroscience. In addition to USJ, Erica is also involved in the Honors Program, Women in Math, Science, and Engineering (WiMSE) Club, UConn’s Chapter of the Red Cross, and the National Multiple Sclerosis Society. She is also involved in research in the Crocker Lab at UConn Health, and her project focuses on investigating proteolytic processing of the extracellular matrix and glial pathology in the brains of a genetic mouse model for Globoid Cell Leukodystrophy. Beyond academics, she is a big Philly sports fan and loves to go to sporting games, concerts, and the beach!
        `
    },
    "Michael Lanteri":{
        position: [teams.journalism.name],
        imageSrc: ".jpg",
        email:"",
        bio:`
        Michael Lanteri is a first year student studying Computer Science. Outside of USJ, Michael is interested in the fields of software design and AI, being involved in Husky Developers and the UConn AI Safety Team. He is also a member of the Engineering Learning Community. In his free time, Michael likes listening to music and playing the NYT games.
        `
    },
    "Henry Driscoll":{
        position: [teams.editorial.name],
        imageSrc: ".png",
        email:"",
        bio:`
        Henry Driscoll is a second year Math-Physics major. Besides USJ, he is a part of UConn’s Society of Physics Students and volunteers at Quinebaug Valley special olympics as an assistant soccer coach and has research interests in theoretical quantum mechanics. In his free time, Henry enjoys snowboarding and has an impressive collection of bow ties.
        `
    },
    "Edrik Morales":{
        position: [teams.outreach.name],
        imageSrc: ".jpg",
        email:"",
        bio:`
        Edrik Morales is currently a first year MCB & Chemistry double major. Edrik is currently part of the Gilmore Lab focusing on the niche of flow chemistry, which presents the automation of reactions via pumps as well as a member of Calisthenics and Breakdancing club. In his free time, he enjoys gaming and exercising.
        `
    },
    "Lia Gilmore":{
        position: [teams.outreach.name],
        imageSrc: ".jpg",
        email:"",
        bio:`
        Lia Gilmore is a junior physics major and an astrophysics minor. Outside of USJ, Lia recently started her undergraduate research project studying the molecular gas around the active galactic nucleus (AGN) of NGC 3621. Lia is also currently involved in Her Campus at UConn, Kappa Alpha Theta sorority, Women in Physics, and Fencing Club. When not studying for class or at a club meeting, Lia enjoys crocheting, watching YouTube, and reading in her spare time.
        `
    },
    "Alexander Quell":{
        position: [teams.journalism.name],
        imageSrc: ".jpg",
        email:"",
        bio:`
        Alexander Quell is a Freshman Mathematics major. He has yet to engage in any undergraduate research due to being a first semester student, but he still takes any chance he can get to fuel his interests in Biology and Mathematics, such as attending the weekly Math Club. In terms of hobbies, he has recently become fascinated with music and the prospect of making it.
        `
    },
};

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////







// very useful function to return the intersection of two arrays
function intersection(arr_1,arr_2) {
    return arr_1.filter(item=>new Set(arr_2).has(item))
}

// next two functions used for ranking members
// currently ranking is as follows:
// - Editor-In-Chief is always first in the list
// - second priority are eboard members
// - all else is done alphabetically by first name
//   (including between multiple eboard members)

function compare_by_name(name_1,name_2) {
    if (name_1<name_2) {
        return -1
    }
    else if (name_1>name_2) {
        return 1
    }
    return 0
}

function compare_members(entry_1,entry_2) {
    var [name_1,member_1]=entry_1;
    var [name_2,member_2]=entry_2;
    if (intersection(member_1.position,eboard.chief.name).length>0) {
        return -1;
    }
    if (intersection(member_2.position,eboard.chief.name).length>0) {
        return 1;
    }
    if (in_eboard(member_1)) {
        if (in_eboard(member_2)) {
            return compare_by_name(name_1,name_2);
        }
        return -1;
    }
    if (in_eboard(member_2)) {
        return 1;
    }
    return compare_by_name(name_1,name_2);
  }

//put all eboard position names into one list
var eboard_name=teams.eboard.name
var eboard_names={};
Object.values(eboard).forEach(
    position=>{
        eboard_names[position.name[0]]=position.desc;
    }
);

// function to easily check if a given member object is on the eboard
function in_eboard(member) {
    return intersection(Object.keys(eboard_names),member.position).length>0
}

//sorts members by teams
var by_team={};
Object.values(teams).forEach(
    team=>{
        by_team[team.name]=[];
    }
);
Object.entries(members).forEach(
    entry=>{
        var [name,member]=entry;
        common_items=intersection(member.position,Object.keys(by_team));
        if (common_items.length>0) {
            common_items.forEach(
                item=>{
                    by_team[item].push(entry);
                }
            );
        };
        if (in_eboard(member)) {
            by_team[eboard_name].push(entry);
        };
    }
);
Object.values(by_team).forEach(
    team=>{
        team.sort(compare_members)
    }
);

/////////////////////////////////////////////////////////////////////////////////////////

page_path="/page/members.html"
eboard_path="/page/eboard.html"

// used to set member card width on different pages
card_width=12
function set_card_width(width) {
    card_width=width;
}

img_width=`${Math.min(100/3*card_width,200)}px`
img_height=`${Math.min(50*card_width,300)}px`

// generates a card w/ image and bio for a given member object and card_width
function generate_member_card(name,member,card_width) {
    member_image_path="/images/member_images/"
    font_size=`${Math.min(1/6*card_width,1)}em`

    imageSrc=member.imageSrc
    if (imageSrc.length==0) {
        imageSrc="_BLANK.png";
    }
    else if (imageSrc[0]==".") {
        imageSrc=name+imageSrc
    }

    positions="";
    for (idx in member.position) {
        pos=member.position[idx]
        if (idx==0 && in_eboard(member)) {
            positions+=`<a href="${eboard_path}#${pos}" class="card-footer-item">${pos}<br>(${eboard_name})</a>`
        }
        else if (Object.values(misc).includes(pos)) {
            positions+=`<p class="card-footer-item">${pos}</p>`
        }
        else {
            positions+=`<a href="${page_path}#${pos}" class="card-footer-item">${pos}</a>`
        }
    };

    contact="";
    if (member.email!="") {
        contact+=`
            
            <a href="mailto:${member.email}">
                <i class="fa fa-envelope is-centered"></i>
            </a>
        `;
    };

    bio=member.bio;
    if (member.bio.length==0) {
        bio+=`<strong>(BIO PENDING)</strong>`;
    }

    html=`
        <div class="tile is-child  is-${card_width}">
            <div class="card">
                <div class="card-header">
                    <p class="card-header-title is-centered">${name}${contact}</p>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <img src="${member_image_path}${imageSrc}"
                                alt="${name}"; style="object-fit: cover;
                                width:${img_width}; height:${img_height};
                                border-radius:8px;">
                        </div>
                        <div class="media-content" style="font-size:${font_size}">
                            <div class="bio-collapsible">
                                ${bio}
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="card-footer">
                    ${positions}
                </footer>
            </div>
        </div>
        `;
    return html;
}

// generates a given team on members page
function generate_team(name,team) {
    index=0;
    new_col=Math.ceil(team.length/2);
    if (team.length<2) {
        card_width=6;
    }
    else {
        card_width=12;
    }
    desc="";
    Object.values(teams).forEach(
        team_val=>{
            if (team_val.name==name && team_val.desc!="") {
                desc=team_val.desc;
            };
        }
    );
    html=`
    <div class="container">
    <div class="card article promo-block">
        <div class="card-content" id="${name}">
            <h1 class="title is-1 article-title is-centered">${name}</h1>
            <div class="container">
                <p class="subtitle" style="text-indent:40px;">
                    ${desc}
                </p>
            </div>
            <div class="tile section is-ancestor">
    `
    team.forEach(entry=>{
        if (index%new_col==0) {
            html+='<div class="tile is-parent is-vertical">';
        }
        html+=generate_member_card(entry[0],entry[1],card_width);
        if ((index+1)%new_col==0) {
            html+='</div>';
        }
        index++;
    });
    html+=`</div></div></div></div>`
    return html;
}

// generates the entire members page
function generate_all_teams(by_team) {
    html="";
    Object.keys(by_team).forEach(
        name=>{
            if (name!=eboard_name) {
                html+=generate_team(name,by_team[name]);
            };
        }
    );
    return html;
}

// used to generate eboard page
function generate_eboard(eboard) {
    card_width=12;
    html=`
        <div class="container">
        <div class="card article promo-block">
            <div class="card-content" id="${eboard_name}">
                <h1 class="title is-1 article-title is-centered">${eboard_name}</h1>
                <div class="tile section is-ancestor is-vertical">
    `
    Object.keys(eboard_names).forEach(pos=>{
        html+=`
            <div class="container card" id="${pos}" style="background-color: lightgrey;">
                <div class="container">
                    <p class="subtitle is-centered">
                        <strong>${pos}</strong>
                    </p>
                    <p style="text-indent:40px;">
                        ${eboard_names[pos]}
                    </p>
                </div>
        `;
            eboard.forEach(entry=>{
                name=entry[0];
                member=entry[1];
                if (member.position.includes(pos)) {
                    html+=`<div class="tile is-parent">`;
                    html+=generate_member_card(name,member,card_width);
                    html+=`</div>`
                };
            });
        html+=`</div>`;
    });
    html+=`</div></div></div></div>`
    return html;
}

// used in navbar dropdown of members to create links to each team on the members page
function generate_navbar_team_links() {
    html="";
    Object.values(teams).forEach(
        val=>{
            path=`${page_path}#${val.name}`;
            if (val.name==eboard_name) {
                path=`${eboard_path}`;
            }
            html+=`
                <a class="navbar-item" href="${path}">
                    ${val.name}
                </a>
            `;
            if (val.name==eboard_name) {
                html+=`<hr class="navbar-divider">`;
            }
        }
    );
    return html;
}

// optional way to make extra-long bios collapsible
function make_collapsible(bios) {
    for (idx=0;idx<bios.length;idx++) {
        element=bios[idx];
        element.style.maxHeight=img_height;
        element.addEventListener(
            "click",
            event=>{
                if (event.target.style.maxHeight==img_height) {
                    event.target.style.maxHeight=event.target.scrollHeight+"px";
                }
                else {
                    event.target.style.maxHeight=img_height;
                }
            }
        );
    };
}

// for blog posts
function generate_author_card(name) {
    set_card_width(12);
    html="";
    if (Object.keys(members).includes(name)) {
        html+=`
                <div class="container">
                <div class="card article promo-block">
                    <div class="card-content">
                        <h1 class="title is-1 article-title is-centered">Author</h1>
                        <div class="tile is-ancestor is-vertical">
                        <div class="tile is-parent">
            `;
            html+=generate_member_card(name,members[name]);
            html+=`</div></div></div></div></div>`;
    }
    if (html=="") {
        html=`
            Unable to find author with name "${name}."
            Please alert USJ of the issue. Thank you!
        `;
    };
    return html;
}
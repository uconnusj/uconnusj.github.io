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
    },
    graphic:{
        name:"Graphic Design Team",
        desc:""
    }
}

// contains miscellaneous positions that don't have an associated team
const misc={
    founder:"Founder",
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
    graphic:{
        name:["Head of Graphic Design",teams.graphic.name],
        desc:"",
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
    "Anusha Prabhakar": {
        position: [teams.editorial.name],
        imageSrc: ".png",
        email: "",
        bio: `Anusha Prabhakar is a sophomore majoring in Structural Biology & Biophysics and Computer Science. Outside of USJ, she serves as President of the Astronomy Association and is a member of the UConn Emergency Med Club and UConn Rescue. In her free time, she enjoys beekeeping, classical dance, photography, and hiking!`
    },
    "Sean Reddy": {
        position: [teams.technology.name],
        imageSrc: ".png",
        email: "",
        bio: `Sean Reddy is a freshman majoring in Physiology and Neurobiology with a minor in Neuroscience. Outside of USJ, he is a member of the PNB Club and UConn Alzheimer’s Association. He is also a member of the UConn Symphonic Orchestra where he plays the viola. In his free time, Sean enjoys watching reality cooking shows and listening to music.`
    },
    "Andie Napolitano": {
        position: [teams.journalism.name],
        imageSrc: ".png",
        email: "",
        bio: `Andie is a freshman majoring in Allied Health Sciences. She is part of USJ’s journalism team. Outside of USJ, she is a member of Model UN and WiMSE. She is a researcher in UConn’s mHealth and Social Media lab, where she is part of a team studying the effects of diet tracking on weight loss, and previously studied childhood cancer communications. In her free time, she likes to spend time with friends and family, learn new things, go to the gym, and listen to music.`
    },
    "Rilee": {
        position: [teams.editorial.name],
        imageSrc: ".png",
        email: "",
        bio: `Rilee is a sophomore Honors Scholar studying Molecular & Cell Biology while minoring in Studio Art. She is currently serving the editorial team at USJ. She works in Dr. Alexandrescu’s lab studying the structure and dynamics of novel zinc finger proteins. In her free time, Rilee enjoys drawing, reading, and buying candles.`
    },
    "Razil": {
        position: [teams.journalism.name],
        imageSrc: ".png",
        email: "",
        bio: `Razil is a freshman in the UConn Honors Program majoring in Molecular and Cell Biology. Outside of USJ, she is involved in iGEM and holds a passion for genetics and biomedicine. She works as a Student Written Communications Assistant for UConn’s Materials Science and Engineering Department. Razil has a research background having completed a three-year independent research project related to hydrogels to treat Alzheimer’s and for use in developing fully functioning heart organs. Her specific areas of interest are in the mechanisms of neurodegenerative diseases. In her free time, Razil enjoys reading and spending time with friends.`
    },
    "Sam Chichester": {
        position: [teams.technology.name],
        imageSrc: ".png",
        email: "",
        bio: `Sam Chichester is a sophomore majoring in computer science with a concentration in software engineering. Outside of the classroom, he is studying web development and machine learning. In his spare time, he enjoys playing & listening to music, learning languages, and going to the gym.`
    },
    "Elizabeth Evans": {
        position: [teams.journalism.name],
        imageSrc: ".png",
        email: "",
        bio: `Elizabeth is a freshman majoring in Molecular and Cell Biology. Outside of USJ, she is a member of the pre-med society, future health leaders, and run club. She also volunteers at Mansfield Center for Nursing and Rehabilitation through the program Generations Connect. Elizabeth was previously a member of the Dodge-Kafka lab at UConn Health Center, where she researched cellular signaling pathways in skeletal muscle cells. She hopes to continue her passion for research. In her free time, Elizabeth enjoys working out, baking, and hanging out with friends.`
    },
    "Mikayla Rafala": {
        position: [teams.graphic.name],
        imageSrc: ".png",
        email: "",
        bio: `Mikayla Rafala is a Senior majoring in Graphic Design and Minoring in Digital Marketing. At USJ she is a part of the graphic design team. Her passion for graphic design began with a love for illustration, typography, and color while keeping a minimalist style. She has previously worked with UConn’s Design Center to work on publication designs and projects for the University and is currently working with Nutmeg Publishing at UConn. Some fun facts about her are that she loves mint tea, has a cat named Stevie, a turtle named turtle boy, and is interested in learning more about science.`
    },
    "Daris Pon Mohan Kumar": {
        position: [teams.technology.name],
        imageSrc: ".png",
        email: "",
        bio: `Daris Pon Mohan Kumar is a sophomore majoring in Computer Science & Engineering. At USJ, she is a part of the Web Development Team. Outside of the club, she is a part of the E-board for STEM Scholars as Secretary and for Honors Ambassadors as a Coordinator. She is also a UNIV Facilitator, a member of Astronomy Association, and works part-time at UConn Hillel. In her free time, you can find her listening to music, hiking, and doing spin classes at the Rec.`
    },
    "Victoria Dabrowski": {
        position: [teams.editorial.name, teams.graphic.name],
        imageSrc: ".png",
        email: "",
        bio: `Victoria Dabrowski is a freshman at UConn in Honors and the Special Program in Medicine, majoring in Biomedical Engineering with a planned minor in statistics. She is involved in the Collegiate Health Service Corps, Horticulture club and works as a dental assistant. In her free time, she enjoys hiking, knitting, and listening to music.`
    },
    "Anshul Patel": {
        position: [teams.journalism.name],
        imageSrc: ".png",
        email: "",
        bio: `Anshul is a freshman in the UConn Honors program majoring in Molecular and Cell Biology and Physiology and Neurobiology, with a passion for medical research and hands-on clinical experience. In high school, Anshul founded a tutoring committee in the New Haven area, helping students in grades 6-12 with a focus on Science and Math. He also served as Captain of the tennis team for two years. Additionally, he launched a healthcare initiative in India, aimed at improving health outcomes for children in rural areas. At UConn, Anshul is a freshman representative for the Indian Students Association and a member of the Undergraduate Science Journal’s Journalism Team. In his free time, he enjoys spending time with friends, listening to Drake, following Liverpool FC, and reading about psychology and philosophy.`
    },
    "Jenny Alaska": {
        position: [teams.journalism.name],
        imageSrc: ".png",
        email: "",
        bio: `Jenny Alaska is a junior Honors Scholar at UConn majoring in Biomedical Engineering with hopes of attending medical school. She is a member of the Journalism Team at USJ. Currently, Jenny is a research assistant under Dr. Sinder at UConn Health in the Department of Orthopedic Surgery, studying mechanical properties of bone tissue. She also works part time as a math tutor at the UConn Q Center and is a volunteer EMT in Trumbull, CT. Jenny is the Treasurer of the Women’s Club Soccer team at UConn, a Morale Captain for HuskyTHON 2025, and loves to run, read, and hike.`
    },
    "Christopher Smith": {
        position: [teams.journalism.name],
        imageSrc: ".png",
        email: "",
        bio: `Christopher Smith is a freshman at the University of Connecticut; he is pursuing a degree in physiology and neurobiology within the Honors Program. In terms of club at UConn, he participates in the Undergraduate Science Journal, Honors Council, and Honors in STEM.`
    },
    "Abby": {
        position: [teams.editorial.name],
        imageSrc: ".png",
        email: "",
        bio: `Abby is a freshman in the UConn honors program pursuing a dual degree in mechanical engineering and physics as well as a minor in computer science. At USJ, she works on the editorial team. Outside of the club, she is a senator in the Undergraduate Student Government, representing the College of Engineering as well as serving on the External Affairs Committee. She also works as a teaching assistant for anatomy and physiology courses at Johns Hopkins University. In her free time, Abby enjoys playing tennis, baking, and listening to music. She's excited to help publish this year's edition of the Undergraduate Science Journal, as well as to pursue her own research in physics.`
    },
    "Noha Myreen": {
        position: [teams.journalism.name],
        imageSrc: ".png",
        email: "",
        bio: `Noha Myreen is a freshman majoring in Molecular and Cell Biology. At USJ, she is a member of the Journalism team. She has previously worked on cardiac stent drug research under the guidance of Dr. Stouffer at UNC and conducted an independent congenital heart defect project during high school. During her free time, Noha loves to bake sweet treats and spend time with her friends and family. At her time at UConn, Noha plans on exploring her research passions further. She anticipates attending medical school in the future.`
    },
    "Akhil Potdar": {
        position: [teams.editorial.name],
        imageSrc: ".png",
        email: "",
        bio: `Akhil Potdar is a freshman in the UConn Honors Program majoring in Materials Science and Engineering with a planned double minor in Nanotechnology and Electronics and Systems. At USJ, he is a member of the editorial team. Outside of the club, he is a member of the UConn Chamber Orchestra Club and is a member of the UConn Quantum Computing Club. He is also a member of UConn’s Undergraduate Research in Microfabrication Program, where he does research in Dr. Necmi Biyikli’s Atomic Layer Engineering Lab. In his free time, Akhil likes to listen to music (Classical and the Beatles), watch biopics, play the saxophone, and hang out with friends.`
    },
    "Anshul Rastogi": {
        position: eboard.technology.name.concat(eboard.graphic.name),
        imageSrc: ".png",
        email: "",
        bio: ``
    },
    "Devesh Karthik": {
        position: eboard.editorial.name,
        imageSrc: ".png",
        email: "",
        bio: `Devesh Karthik is a sophomore majoring in Physics and the Executive Editor of the Undergraduate Science Journal. Outside of USJ, he is treasurer of UConn Astronomy Association, member of the Undergraduate Philosophy Society, and undergraduate researcher in theoretical condensed matter physics as a member of the Santos’ Group. In his free time, Devesh likes to watch movies, write stories, listen to music, and explore the outdoors.`
    },
    "Mishael Gill": {
        position: eboard.journalism.name.concat(eboard.graphic.name),
        imageSrc: ".png",
        email: "",
        bio: `Mishael Gill is a sophomore Physiology and Neurobiology major in the Special Program in Medicine (SPiM). She serves as USJ’s Executive Journalist and co-Head of the Graphic Design team. She is currently working with Dr. Isaac Macwan at Fairfield University to conduct molecular dynamics simulations of the MDR-1 protein and various nanoparticles. On campus, she is involved as an Honors UNIV facilitator, Social Media Coordinator for Period @ UConn and Treasurer for the Supporting Women and Health Network. She loves watching Christopher Nolan movies and listening to Gracie Abrams.`
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
// 12 = full width
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
        imageSrc="0_BLANK.png";
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


// for journal issues
function generate_editor_list(editor_arr) {
    set_card_width(12);
    html="<ul>";
    editor_arr.forEach(
        name=>{
            if (Object.keys(members).includes(name)) {
                html+=`
                        <li>
                            <strong>${name}</strong>
                        
                    `;
                members[name].position.forEach(
                    position=>{
                        html+=` <strong>&#183</strong> ${position}`;
                    }
                );
                html+="</li>";
            }
        }
    );
    html+="</ul>";
    return html;
}
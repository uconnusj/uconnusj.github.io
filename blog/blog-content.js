img_path="/images/blogs/"
em="—"

function link(link,text) {
    return `<a href="${link}">${text}</a>`;
}

function email(address,text=null) {
    if (Object.is(text,null)) {
        text=address;
    };
    return `<a href="mailto:${address}">${text}</a>`;
}

const categories={
    misc:"Miscellaneous",
    faculty:"Faculty Highlight",
};

const blogs={
    //Blog 1
    blog_2023_11_02:{
        date:new Date("November 2, 2023"),
        category:categories.faculty,
        title:`Professor Metin Coşgel`,
        author:"Ryan Durrell",
        img:{
            src:"Metin.Cosgel-9.13.2020-scaled.jpg",
            alt:"Professor Cosgel"
        },
        content:
            `
                Metin Coşgel is a professor in the Economics Department at the University of Connecticut with 
                a focus on research in historical economics. Originally from Turkey, Professor Coşgel attended 
                Boğaziçi University in Istanbul, where he obtained an undergraduate degree in economics. Educational 
                opportunities then led him to the United States at age 22, where he continued his graduate studies at 
                the University of Iowa, obtaining a PhD in economics. After graduating from the University of Iowa, 
                Coşgel decided to remain in the U.S. before a potential return home, and instead adjusted to the 
                American lifestyle over time. A position at UConn in the Economics Department then found him in Storrs, 
                Connecticut.

                Although originally interested in the mathematical side of the field, Coşgel later transitioned 
                to a focus in historical economics. This has led him to research the economic histories of both the 
                Ottoman Empire, his home, and the United States, his adopted home. As for the Ottoman Empire, Coşgel 
                has recently analyzed 100 volumes of court records from the 16th to 19th century. By extracting around 
                710,000 names of individuals who visited courts during this period, he and his coauthors studied how 
                names, and the concentration of them, have changed over time. They track, for example, the percentage 
                of people who have the top ten names, giving an index to measure individualism in a society. In a 
                more individualistic society, names might be more diverse, and observing how this diversity changes 
                over time can give insights into how individualistic characteristics shift. They also use names to 
                look at religion, gender, and elite networks, which reflect social and economic interactions between 
                various groups in society and how this dynamic developed over centuries.

                As for the economic history of the U.S., Coşgel has been focusing his research on the American 
                offshore whaling industry. As someone whose interest has been drawn to diversity relations, the 
                whaling industry provides an ideal case study: the industry was a pillar of the 19th century American 
                economy and society, and was an incredibly diverse industry, since little background skills were 
                required. This led to ships employing a variety of workers, leading to a high racial diversity in 
                crews. Thus, examining this industry can shed light on the impacts of diversity in American economic 
                history. For example, Coşgel and his coauthors have been researching racial discrimination in the 
                payment of crew members, as well as how the racial diversity of a crew may impact their performance; 
                as the crew gets more diverse, how does the revenue they obtain change? They have found evidence 
                supporting a U-shaped curve, meaning that initially, as diversity increases, productivity goes down, 
                but then begins to rise again after a period of time. This research aims to shed light on the patterns 
                and history of the American economy with respect to diversity relations.

                Although his work on American historical economics is relatively new, his work in Ottoman historical 
                economics has garnered recognition and citations from fellow Ottoman researchers in Turkey; Coşgel 
                has also been recognized with an award from the Ottoman and Turkish Studies Association for his 
                research in the field. While this field is niche in the U.S., he hopes to continue to publish his 
                research and grow historical Ottoman research in America while simultaneously pursuing his research 
                on American economic history. Professor Coşgel is open to inviting any interested undergraduate students 
                to assist him in his research. He can be reached at
                ${email("metin.cosgel@uconn.edu")}, and further information can be gathered
                at his personal website ${link("https://metin-cosgel.scholar.uconn.edu/","here")}.
            `
    },

    //Blog 2
    blog_2024_03_01:{
        date:new Date("March 1, 2024"),
        category:categories.faculty,
        title:`Bio-Integrated “Smart” Materials and Structures Research Group ${em} Dr. Thanh Nguyen`,
        author:"Mishael Gill",
        img:{
            src:"blog2.png",
            alt:"Dr. Thanh Nguyen"
        },
        content:
            `
                Dr. Thanh Nguyen is an associate professor in the Mechanical Engineering Department 
                at the University of Connecticut and the principal investigator of the Nguyen Research 
                Group. The research group focuses on developing the properties of natural and synthetic 
                materials that can be applied to biological systems. More specifically, they integrate 
                automated and adaptive technology to biomedical devices at the nano/micro scales. Nguyen 
                obtained his PhD in Mechanical and Aerospace Engineering at Princeton University, working 
                alongside Professor Michael McAlpine. At Princeton, Nguyen cultivated a passion for biointerfaced 
                nanopiezoelectrics which he now continues to study in his lab. To complete postdoctoral research, 
                he transitioned to MIT and worked on developing a technology that creates 3-D microstructures of 
                biomaterials that could be applied to vaccine/drug delivery systems as well as medical implantation.

                Currently, Nguyen and his research colleagues are focused on regenerative engineering 
                with biomaterials, drug delivery systems, and nanotechnology. Ritopa Das, biomedical 
                engineering PhD student and graduate research assistant at the Nguyen Research Group, 
                has been working alongside Dr. Nguyen since 2017. Das explained that they are developing 
                piezoelectric materials (those which can reversibly convert mechanical energy to electrical 
                energy) to act as scaffolds for tissue regeneration in humans. By applying mechanical 
                stimulation (such as through physiotherapy or through ultrasound vibrations), the produced 
                electrical cues can attract cells into the scaffold and facilitate tissue healing.

                The cycle of testing a piezoelectric material takes around two to three years. First, the group 
                develops a biophysical profile of the material based on its durability and biodegradability. The 
                group then moves on to biological testing in an artificial environment to analyze the material’s 
                regenerative capabilities in a variety of different cells. Finally, the material is finally 
                introduced into animals (typically mice), via surgery, and the effects on cell proliferation 
                and tissue healing are monitored. Using histology, the group analyzes skin regeneration by 
                checking for new growth at hair follicles. According to Das, tissue engineering like this will 
                take around another decade to become more mainstream in bone and wound rehabilitation.

                “The main takeaway from our research is that you should look at adding chemical stimulation or 
                adding biological stimulation to your tissue in order to increase rehabilitation, but physical 
                stimulation like electricity or mechanical forces are equally as important,” Das said.

                Das also adds that while they have ultimately proved that this material can work to regenerate 
                tissue, they must work on optimizing tissue scaffolding technology. For example, now that they 
                know how effective ultrasound is when applied to the piezoelectric material, they must explore 
                the specificity of what intensity, frequency, and charge must be applied to optimize tissue 
                regeneration. They should also test the materials in more animals before this technology can 
                be applied in clinical trials.

                “For me, it [this project] was very interesting because I know a lot of people who have broken 
                bones, I know a lot of people who have arthritis, knee pain, broken ligaments, broken tendons, 
                so I can in a very tangible way see how my research can make the lives of these people better,
                ” Das said.

                Professor Nguyen is open to inviting any interested undergraduate students to join his lab. 
                You can reach him at ${email("nguyentd@uconn.edu")} or access the 
                Nguyen Research Group’s website ${link("https://www.nguyenresearchgroup.com/","here")}.

            <img src="${img_path}blog2_team.png" alt="The Nguyen Research Group (postdocs and graduate students) in 2023." width="400" height="300" class="centered-blog-image">

            <p class="is-centered">The Nguyen Research Group (postdocs and graduate students) in 2023.</p>
            `
    },

    //Blog 3
    blog_2024_03_22:{
        date:new Date("March 22, 2024"),
        category:categories.faculty,
        title:`Menka Jain`,
        author:"Devesh Karthik",
        img:{
            src:"JainMenka.jpg",
            alt:"Dr. Menka Jain"
        },
        content:
            `
                Menka Jain is a professor in the Department of Physics at the University of Connecticut, and a member of the Institute of Materials Science. Jain got her undergraduate physics and mathematics degree from Shri Sahu Ji Maharaj University in Kanpur, India in 1996.

                After Jain received her masters at the same university in 1998, she worked as a project associate in the Department of Physics at IIT, Kanpur for one and a half years, which Jain describes as the reason she pursued a PhD. She graduated from the University of Puerto Rico with a PhD in Chemical Physics in 2004.

                After Jain received her masters at the same university in 1998, she worked as a project associate in the Department of Physics at IIT, Kanpur for one and a half years, which Jain describes as the reason she pursued a PhD. She graduated from the University of Puerto Rico with a PhD in Chemical Physics in 2004.

                Jain received a Director's Postdoctoral Fellowship at the Los Alamos National Laboratory, which allowed her to research anything she wanted. Jain researched multiferroics: materials that have more than one of the ferroic properties in the same phase (ferromagnetism, ferroelectricity, and ferroelasticity).

                In 2008, Jain was hired by the Institute of Materials Science to work at UConn. She currently teaches the undergraduate courses General Physics II (PHYS 1202Q) and The Development of Quantum Physics (PHYS 2300).

                Jain performs experimental research in the magnetic electrical and magnetic properties of materials. She is especially interested in the applications of her research. Thus, she focuses on researching and developing materials that can be used to improve technology.

                One of her latest projects, in collaboration with Dr. Ilya Sochnikov, is to develop a magnetic refrigerator that can cool to temperatures less than one Kelvin. The refrigerator would influence the temperature of the material by applying a magnetic field, and applying stress and strain. These refrigerators are useful in quantum computing, where qubits—quantum bits that store information—must be stored at very low temperatures.

                Jain works with undergraduate students in her lab, where they learn to make materials using chemical methods, check the purities of the materials, and analyze the resulting data. Jain looks for self-motivated students who have taken PHYS 1602 and are willing to spend at least five hours per week on research. Interested students should reach out to Menka Jain at ${email("menka.jain@uconn.edu")}.
            `
    },

    //Blog 4
    blog_2024_03_29:{
        date:new Date("March 29, 2024"),
        category:categories.faculty,
        title:`Bernard Goffinet`,
        author:"Danya Alboslani",
        img:{
            src:"bernard goffinet.png",
            alt:"Dr. Bernard Goffinet"
        },
        content:
            `
                Dr. Bernard Goffinet is a professor in the Ecology and Evolutionary Biology department at the University of Connecticut. He received his Botany degree from the University of  Liège, Belgium, in 1989, and his Ph.D. in Botany from the University of Alberta, Edmonton, Canada, in 1997. After his Ph.D., he became a research associate at Duke University until 1999, when he joined the University of Connecticut as a professor.
                \n\n
                Dr. Goffinet currently teaches Introduction to Plant Biology (BIO1110), Bryophyte and Lichen Biology (EEB3240/5240) and Evolution of Green Plants (EEB3220/5220). In addition to teaching, Dr. Goffinet’s laboratory works on studying bryophytes, more commonly known as mosses, and lichens, which are symbiotic associations between a fungus and an alga. Dr. Goffinet says although bryophytes are small, their genomes “have a toolbox that is as well developed and sophisticated as that of flowering plants.” He is interested in the biology of these organisms and how they survive, grow, and evolve. In recent years, Dr. Goffinet has collaborated with other researchers to sequence entire genomes of bryophytes, as well as record new species of bryophytes and lichens. Recently, he has been reconstructing the evolutionary histories of these organisms using their genomes with the help of his graduate and undergraduate students.
                \n\n
                In addition to research, Dr. Goffinet is very passionate about outreach. His goal is to increase awareness of mosses and lichens across the broader community and inspire curiosity for the natural world. He leads tours, local moss walks, and occasionally gives talks about local biodiversity. He also helped develop the concept of tourism with a hand lens, a new form of tourism highlighting the newly discovered biodiversity of mosses, lichens, and liverworts in the Cape Horn Biosphere Reserve in Chile to its community and the world. If you are curious about bryophytes and lichens you can visit the “Below your feet” exhibit on campus in Wilbur Cross, filled with high resolution images of mosses from New England and Chile photographed by Dr. Goffinet and his collaborator. You can also visit the Connecticut State Museum of Natural History ${link("https://csmnh.uconn.edu/programs/","website")} to learn more about events going on at UConn.
                \n\n
                Dr. Goffinet encourages students to go beyond the classroom and find opportunities to strengthen their experience at UConn. If you are interested in research in Dr. Goffinet’s lab you can view his website ${link("https://bryology.uconn.edu/","here")}. You can also contact him at ${email("bernard.goffinet@uconn.edu")}. Research in his lab is often tailored to a student’s individual interests after multiple discussions, and he would love to hear from passionate students!
            `
    },
};

var all_terms={};
const spring=(year)=>[new Date(`January 1, ${year}`),new Date(`May 31, ${year}`)];
const fall=(year)=>[new Date(`August 1, ${year}`),new Date(`December 31, ${year}`)];
Object.values(blogs).forEach(
    blog=>{
        var year=blog.date.getFullYear();
        var spring_term=spring(year);
        var fall_term=fall(year);
        if (blog.date>spring_term[0] && blog.date<spring_term[1]) {
            all_terms[`${year} Spring`]=spring_term;
        }
        else {
            all_terms[`${year} Fall`]=fall_term;
        };
    }
);
var filters={
    category:Object.values(categories),
    terms:Object.values(all_terms),
};
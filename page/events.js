event_img_path="/images/event_images/"

function link_html(text,link) {
    return `<a href="${link}">${text}</a>`
}

const events=[
    {
        title:"Thesis Revision Event",
        start:new Date("April 9, 2024 18:00:00"),
        end:new Date("April 9, 2024 20:00:00"),
        banner_src:"Thesis Revision Event.png",
        location:link_html("SHH (OAK) 117","https://maps.uconn.edu/m/map/SHH"),
        desc:`
        Students completing a thesis will receive input from professors and peers as well as
        to share and discuss their research interests. This workshop is not limited to students
        writing a thesis and is open to all undergraduate students! Additionally, it is an
        ${link_html("HONORS event","https://events.uconn.edu/event/64818-thesis-revision-event")}
        which is helpful for students looking to complete Honors Laureate.
        `
    },
    {
        title:"Fall 2024 Involvement Fair",
        start:new Date("September 4, 2024 14:00:00"),
        end:new Date("September 4, 2024 18:00:00"),
        banner_src:"Fall 2024 Involvement Fair.jpg",
        location:link_html("Fairfield Way Table 101","https://maps.uconn.edu/m/map/YAH12"),
        desc:`
        Come say hi to us at the Fall 2024 Involvement Fair!
        `
    },
    {
        title:"Fall 2024 First General Body Meeting",
        start:new Date("September 12, 2024 19:00:00"),
        end:new Date("September 12, 2024 20:00:00"),
        banner_src:"Fall 2024 First GBM.JPG",
        location:link_html("GANT W001","https://maps.uconn.edu/m/map/GS"),
        desc:`
        We're holding our first General Body Meeting of the semester! Stop by to learn about the paper
        submissions process or how to get involved in any of our diverse teams here at USJ!
        `
    },
    {
        title:"Fall 2024 Intro to Undergraduate Research",
        start:new Date("November 7, 2024 19:00:00"),
        end:new Date("November 7, 2024 20:15:00"),
        banner_src:"Fall 2024 Intro to Undergrad Research.png",
        location:link_html("GANT W001","https://maps.uconn.edu/m/map/GS"),
        desc:`
        We’re excited to announce our first official research-focused workshop of the year, designed to help you get involved in research at UConn.
        \n\n
        In this workshop, we’ll discuss how to start in research, including practical tips on reaching out to professors and PIs through cold emails and connecting your interests with ongoing research on campus. We’ll also have PIs (Principal Investigators) as guest speakers, who will share insights on what they look for in student researchers and give advice on how to make a strong impression when approaching faculty. You’ll hear firsthand about different research projects happening on campus and how to get involved.
        \n\n
        You’ll also learn about specific opportunities available to UConn students, such as funding options like the IDEA Grant and SURF Grant to support your own research projects. Additionally, we’ll introduce useful resources, including UConn’s library databases like Lincus and PubMed, to help you deepen your knowledge in areas of interest.
        `
    },
];

function format_date(date) {
    date_str=date.toDateString().slice(3)
    hrs=date.getHours();
    meridian=" AM";
    if (hrs>12) {
        hrs-=12;
        meridian=" PM"
    }
    return date_str.slice(0,7)+","+date_str.slice(7)+" "+hrs+":"+date.getMinutes().toString().padStart(2,'0')+meridian;
}

function toISOStringWithTimezone(date) {
    const timezoneOffsetInMinutes = date.getTimezoneOffset();
    const offsetHours = Math.floor(Math.abs(timezoneOffsetInMinutes) / 60);
    const offsetMinutes = Math.abs(timezoneOffsetInMinutes) % 60;
  
    const offsetSign = timezoneOffsetInMinutes < 0 ? '+' : '-';
  
    const formattedOffset = `${offsetSign}${offsetHours.toString().padStart(2, '0')}:${offsetMinutes.toString().padStart(2, '0')}`;
  
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}T${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}.${date.getMilliseconds().toString().padStart(3, '0')}${formattedOffset}`;
  }

function generate_img_path(event) {
    return `${event_img_path}${toISOStringWithTimezone(event.start).slice(0,10)} ${event.banner_src}`;
}


function generate_event_card(event) {
    var html="";
    dim=Math.floor(window.innerWidth/4)
    html+=`
        <div class="card">
            <div class="card-header">
                <p class="card-header-title is-centered" style="font-size:1.5em">${event.title}</p>
            </div>
                <div class="card-image">
                    <nav class="level">
                        <div class="level-item has-text-centered">
                            <figure class="image" style="display:block; margin-left:auto; margin-right:auto;">
                                <img src="${generate_img_path(event)}"
                                id="event_banner"
                                alt="${event.title}"; style="object-fit: contain;
                                width: ${dim}px;
                                border-radius:8px;">
                            </figure>
                        </div>
                        </nav>
                    </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content" style="font-size:1em">
                        <p style="text-indent:40px;">
                            ${event.desc}
                        </p>
                    </div>
                </div>
            </div>
            <footer class="card-footer is-centered">
                ${event.location}
                Start: ${format_date(event.start)}
                <br>
                End: ${format_date(event.end)}
            </footer>
        </div>
        <p class="pb-5"></p>
    `;
    return html;
}

function generate_events(events) {
    num_cols=3;
    var html=`
        <div class="container">
            <div class="card article promo-block">
                <div class="card-content">
                    <h1 class="title is-1 article-title is-centered">Upcoming Events</h1>
                    <div class="columns">
    `;
    var cols=[];
    var past_events=[];
    for (let col=0;col<num_cols;col++) {
        cols.push([]);
    };
    idx=0;
    events.forEach(
        event=>{
                if (event.start>new Date()) {
                    cols[idx].push(generate_event_card(event));
                    idx++;
                    idx=idx%num_cols;
                }
                else {
                    past_events.push(event)
                }
        }
    );
    cols.forEach(
        col=>{
            html+=`<div class="column">`;
            col.forEach(
                event_card=>{
                    html+=event_card;
                }
            )
            html+=`</div>`
        }
    );
    html+="</div></div></div></div>";

    html+=`
        <div class="container">
            <div class="card article promo-block">
                <div class="card-content">
                    <h1 class="title is-1 article-title is-centered">Past Events</h1>
                    <div class="columns">
    `;
    var cols=[];
    for (let col=0;col<num_cols;col++) {
        cols.push([]);
    };
    idx=0;
    past_events.forEach(
        event=>{
            cols[idx].push(generate_event_card(event));
            idx++;
            idx=idx%num_cols;
        }
    );
    cols.forEach(
        col=>{
            html+=`<div class="column">`;
            col.forEach(
                event_card=>{
                    html+=event_card;
                }
            )
            html+=`</div>`
        }
    );
    html+="</div></div></div></div>";
    return html;
}
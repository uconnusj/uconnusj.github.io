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

function generate_img_path(event) {
    return `${event_img_path}${event.start.toISOString().slice(0,10)} ${event.banner_src}`;
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
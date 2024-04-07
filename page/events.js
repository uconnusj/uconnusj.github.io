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
        HONORS event which is helpful for students looking to complete honors laureate.
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
                                alt="${event.title}"; style="object-fit: cover;
                                width: 324px; height:324px;
                                border-radius:8px;">
                            </figure>
                        </div>
                        </nav>
                    </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content" style="font-size:1em">
                        <div class="bio-collapsible">
                            <p style="text-indent:40px;">
                                ${event.desc}
                            </p>
                        </div>
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
    for (let col=0;col<num_cols;col++) {
        cols.push([]);
    };
    idx=0;
    events.forEach(
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
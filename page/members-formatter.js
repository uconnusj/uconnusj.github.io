page_path="/page/members.html"
placeholder=`
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Mauris a mattis est, vel pretium augue. Nullam eu auctor
    risus. Nam ut ligula dignissim nunc venenatis ullamcorper.
    Aenean pulvinar porta magna, non tempus metus tincidunt
    nec. Curabitur sodales convallis est. Fusce volutpat
    lectus vehicula lobortis posuere. Maecenas ultricies dui
    mi, et ultrices eros bibendum in. Donec at eros ex. Nam
    sed finibus leo, et accumsan lectus. Donec a nunc ex.
    Aenean tincidunt ex ullamcorper aliquet eleifend.
`
eboard_name=""
misc_dict={}
teams_dict={}
card_width=12

function set_eboard_name(name) {
    eboard_name=name;
}

function set_misc(misc) {
    misc_dict=misc;
}

function set_teams(teams) {
    teams_dict=teams;
}

function set_card_width(width) {
    card_width=width;
}

img_width=`${Math.min(100/3*card_width,200)}px`
img_height=`${Math.min(50*card_width,300)}px`

function generate_member_card(member,card_width) {
    member_image_path="/images/member_images/"
    font_size=`${Math.min(1/6*card_width,1)}em`

    imageSrc=member.imageSrc
    if (imageSrc=="") {
        imageSrc="BLANK.png";
    }

    positions="";
    for (idx in member.position) {
        pos=member.position[idx]
        if (idx==0 && member.eboard) {
            positions+=`<a href="${page_path}#${eboard_name}" class="card-footer-item">${pos}<br>(${eboard_name})</a>`
        }
        else if (Object.values(misc_dict).includes(pos)) {
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
        <div class="tile is-child section is-${card_width}">
            <div class="card">
                <div class="card-header">
                    <p class="card-header-title is-centered">${member.name}${contact}</p>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <img src="${member_image_path}${imageSrc}"
                                alt="${member.name}"; style="object-fit: cover;
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

function generate_team(name,team) {
    index=0;
    new_col=Math.ceil(team.length/2);
    if (team.length<2) {
        card_width=6;
    }
    else {
        card_width=12;
    }
    desc=placeholder;
    Object.values(teams_dict).forEach(
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
            <div class="tile is-ancestor">
    `
    team.forEach(member=>{
        if (index%new_col==0) {
            html+='<div class="tile is-parent is-vertical">';
        }
        html+=generate_member_card(member,card_width);
        if ((index+1)%new_col==0) {
            html+='</div>';
        }
        index++;
    });
    html+=`</div></div></div></div>`
    return html;
}

function generate_all_teams(by_team) {
    html="";
    Object.keys(by_team).forEach(
        name=>{
            html+=generate_team(name,by_team[name]);
        }
    );
    return html;
}

function generate_navbar_team_links() {
    html="";
    Object.values(teams_dict).forEach(
        val=>{
            html+=`
                <a class="navbar-item" href="${page_path}#${val.name}">
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

function generate_author_card(name,members) {
    set_card_width(12);
    html="";
    members.forEach(
        member=>{
            if (member.name==name) {
                html+=`
                    <div class="container">
                    <div class="card article promo-block">
                        <div class="card-content">
                            <h1 class="title is-1 article-title is-centered">Author</h1>
                            <div class="tile is-ancestor is-vertical">
                            <div class="tile is-parent">
                `;
                html+=generate_member_card(member);
                html+=`</div></div></div></div></div>`;
            };
        }
    );
    if (html=="") {
        html=`
            Unable to find author with name "${name}."
            Please alert USJ of the issue. Thank you!
        `;
    };
    return html;
}
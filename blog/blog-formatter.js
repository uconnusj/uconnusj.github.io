img_path="/images/blogs/"
blog_path="/blog/"

function format_date(date) {
    date_str=date.toDateString().slice(3)
    return date_str.slice(0,7)+","+date_str.slice(7);
}

function generate_blog_link(blog) {
    return `${blog_path}blog_${blog.date.toISOString().slice(0,10)}.html`
}

function generate_blog(blog) {
    html="";

    img_width="300px";
    img_height="300px";

    img="";
    if (blog.img.src!="") {
        img=`
            <img src="${img_path}${blog.img.src}" alt="${blog.img.alt}"
            class="centered-blog-image" style="border-radius:8px; object-fit:cover;
            width:${img_width}; height:${img_height}">
        `;
    };

    html+=`
    <section class="blogs">
        <div class="container">
            <div class="card article promo-block">
                <div class="card-content">
                    <h1 class="title is-1 blog-title">
                        ${blog.title}
                    </h1>
                    <h2 class="subtitle is-4 is-centered">${format_date(blog.date)}</h2>
                        <div class="blogs content">
                            ${img}
    `;
    blog.content.split("\n\n").forEach(paragraph=>{
        if (paragraph[0]=="<") {
            html+=paragraph
        }
        else {
            html+=`
                <p style="text-indent: 40px;">
                    ${paragraph}
                </p>
            `
        }
    });
    html+=`</div></div></div></section>`
    return html;
}

function generate_blog_card(blog) {
    return `
    <a href=${generate_blog_link(blog)} style="text-decoration: none; color: inherit;">
        <div class="card article promo-block" style="height:450px">
            <section class="section">
                <div class="columns">
                    <div class="column is-8 is-offset-2">
                        <div class="content is-medium">
                            <h2 class="subtitle is-4">${format_date(blog.date)}</h2>
                            <h1 class="title">${blog.title}</h1>
                            <div class="clipped">
                                <p style="text-indent: 40px;">${blog.content.split("\n\n")[0]}</p>
                                <p style="text-indent: 40px;">${blog.content.split("\n\n")[1]}</p>
                            </div>
                            <div class="gradientback"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </a>
    `;
}

function generate_blogs_list(blogs) {
    html="";
    html+=`
    <section class="hero ">
        <div class="hero-body">
            <div class="container">
                <div class="columns">
                    <div class="column is-8 is-offset-2">
                        <figure class="image is-16by9">
                            <img src="https://bulmatemplates.github.io/bulma-templates/images/first-post.png" alt="">
                        </figure>
                    </div>
                </div>
    `;
    arr=Object.keys(blogs)
    arr.sort().reverse();
    for (var key in arr) {
        html+=generate_blog_card(blogs[arr[key]]);
    };
    html+=`</div></div></section>`;
    return html;
}

function generate_navbar_blog_links(blogs) {
    html="";
    Object.values(blogs).forEach(
        blog=>{
            html+=`
                <a class="navbar-item" href="${generate_blog_link(blog)}">
                    ${format_date(blog.date)}
                </a>
            `;
        }
    );
    return html;
}
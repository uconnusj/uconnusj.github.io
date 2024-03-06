img_path="/uconnusj.github.io/images/blogs/"
blog_path="/uconnusj.github.io/blog/"

function format_date(date) {
    date_str=date.toDateString().slice(3)
    return date_str.slice(0,7)+","+date_str.slice(7);
}

function generate_blog_link(blog) {
    return `${blog_path}blog_${blog.date.toISOString().slice(0,10)}.html`
}

function generate_blog(blog) {
    html=""

    img_width="300px"
    img_height="200px"

    html+=`
    <section class="blogs">
        <div class="card-content">
            <h1 class="title is-1 blog-title">
                ${blog.title}
            </h1>
            <h2 class="subtitle is-4">${format_date(blog.date)}</h2>
                <div class="blogs content">
                    <img src="${img_path}${blog.img.src}" alt="${blog.img.alt}" width="${img_width}" height="${img_height}" class="centered-blog-image">
    `;
    blog.content.forEach(paragraph=>{
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
    html+=`</div></div></section>`
    return html;
}

function generate_blog_card(blog) {
    return `
    <a href=${generate_blog_link(blog)} style="text-decoration: none; color: inherit;">
        <div class="card article promo-block">
            <section class="section">
                <div class="columns">
                    <div class="column is-8 is-offset-2">
                        <div class="content is-medium">
                            <h2 class="subtitle is-4">${format_date(blog.date)}</h2>
                            <h1 class="title">${blog.title}</h1>
                            <p class="gradientback">${blog.content[0]}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </a>
    `;
}

function generate_blogs(blogs) {
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
const faqs={
    "Will this website ever be done?":`
        Hmm. We'll consider it.
    `,
    "What is the Double-Blind Review Process?":`
        A double-blind review process is one where the identity of the author of a 
        submitted paper is concealed from the reviewer and the identity of the reviewer is 
        likewise concealed from the author. This process was decided to be the fairest review process 
        by the USJ leadership and will serve as an assurance of impartial paper selection 
        for publication.
    `
};

function generate_faqs() {
    html=`
    <div class="container articles-padding">
        <div class="card article first-block">
            <section class="articles">
                <div class="card article promo-block"> 
                    <div class="card-content is-centered">
                        <h1 class="title is-1 article-title">Frequently Asked Questions</h1>
                            <div class="content">
                                <div class="process-diagram">
    `;
    for (const [question,answer] of Object.entries(faqs)) {
        html+=`
            <div class="step-box">
                <h2 class="step-title">Q: ${question}</h2>
                <div class="step-content">
                    ${answer}
                </div>
            </div>
        `;
    };
    html+=`
        </div></div></div></section></div></div>
    `;
    return html
};
import "bulma/css/bulma.min.css";

export default function Home() {
  return (
    <>
      <section className="hero is-info is-medium is-bold">
        <div
          className="hero-body"
          style={{
            background: `url("https://hillsideventures.uconn.edu/wp-content/uploads/sites/3266/2022/11/UConn-Campus.jpg")`,
          }}
        >
          <div className="container has-text-centered">
            <h1 className="title">
              Welcome to UConn Undergraduate Student Journal
            </h1>
          </div>
        </div>
      </section>

      <div className="container">
        {/* <!-- START ARTICLE FEED --> */}
        <section className="articles">
          <div className="column is-8 is-offset-2">
            {/* <!-- START ARTICLE --> */}
            <div className="card article">
              <div className="card-content">
                <h1 className="title article-title">Yuh Mum Gayy</h1>
                {/* date goes here */}
                <div className="tags has-addons">
                  <span className="tag is-rounded">September 10, 2023</span>
                </div>
                <div className="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- END ARTICLE --> */}
            {/* <!-- START PROMO BLOCK --> */}
            <section className="hero is-info is-bold is-small promo-block">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title">
                    <i className="fa fa-bell-o"></i> Nemo enim ipsam voluptatem
                    quia.
                  </h1>
                  <span className="tag is-black is-medium is-rounded">
                    Natus error sit voluptatem
                  </span>
                </div>
              </div>
            </section>
            {/* <!-- END PROMO BLOCK --> */}
          </div>
        </section>
        {/* <!-- END ARTICLE FEED --> */}
      </div>
    </>
  );
}

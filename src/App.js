import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      console.log("key", e.key);
      if (e.key === "Alt") {
        e.preventDefault();
        return;
      }
      if (e.key === "F12") {
        e.preventDefault();
        return;
      } else if (e.ctrlKey && e.shiftKey && e.key === "I") {
        e.preventDefault();
        return;
      }
    });

    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  }, []);
  return (
    <>
      <>
        <div className="surround">
          <div className="header">
            <h1>MY BLOG</h1>
            <br />
            <p>
              Welcome to the blog of{" "}
              <span style={{ background: "black", color: "white" }}>
                {" "}
                unknown{" "}
              </span>
            </p>
          </div>
          <div className="content">
            <div className="left">
              <div className="top">
                <div className="head">
                  <img
                    src="/woods.jpg"
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="ban">
                  <div className="inside">
                    <h2>TITLE HEADING</h2>
                    <br />
                    <h3>
                      Title description,{" "}
                      <span style={{ color: "#d2c0c0" }}>April 7, 2014</span>
                    </h3>
                    <br />
                    <p>
                      Mauris neque quam, fermentum ut nisl vitae, convallis
                      maximus nisl. Sed mattis nunc id lorem euismod placerat.
                      Vivamus porttitor magna enim, ac accumsan tortor cursus
                      at. Phasellus sed ultricies mi non congue ullam corper.
                      Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
                      condimentum, porta lectus vitae, ultricies congue gravida
                      diam non fringilla.
                    </p>
                  </div>
                </div>
                <div className="foot">
                  <div className="read">READ MORE&gt;&gt;</div>
                  <div className="comment">
                    Comment{" "}
                    <span style={{ background: "black", color: "white" }}>
                      0
                    </span>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <div className="head">
                  <img
                    src="bridge.jpg"
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="ban">
                  <div className="inside">
                    <h2>BLOG ENTRY</h2>
                    <br />
                    <h3>
                      Title description,,{" "}
                      <span style={{ color: "#d2c0c0" }}>April 2, 2014</span>
                    </h3>
                    <br />
                    <p>
                      Mauris neque quam, fermentum ut nisl vitae, convallis
                      maximus nisl. Sed mattis nunc id lorem euismod placerat.
                      Vivamus porttitor magna enim, ac accumsan tortor cursus
                      at. Phasellus sed ultricies mi non congue ullam corper.
                      Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
                      condimentum, porta lectus vitae, ultricies congue gravida
                      diam non fringilla.
                    </p>
                  </div>
                </div>
                <div className="foot">
                  <div className="read">READ MORE&gt;&gt;</div>
                  <div className="comment">
                    Comment{" "}
                    <span
                      style={{
                        borderRadius: "10% 10%",
                        background: "black",
                        color: "white",
                      }}
                    >
                      2
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="top-right">
                <div className="a">
                  <img src="avatar_g.jpg" alt="" />
                </div>
                <div className="b">
                  <h3>My Name</h3>
                  <p>
                    Just me, myself and I, exploring the universe of uknownment.
                    I have a heart of love and a interest of lorem ipsum and
                    mauris neque quam blog. I want to share my world with you.
                  </p>
                </div>
              </div>
              <div className="ban-right">
                <div className="upper">
                  <div className="in">Popular Posts</div>
                </div>
                <div className="lower">
                  <div className="ins">
                    <img src="workshop.jpg" alt="" />
                  </div>
                  <div className="ina">
                    <p>
                      Lorembr <br />
                      Sed mattis nunc
                    </p>
                  </div>
                </div>
                <div className="lower">
                  <div className="ins">
                    <img src="gondol.jpg" alt="" />
                  </div>
                  <div className="ina">
                    <p>
                      Ipsum <br />
                      Praes tinci sed
                    </p>
                  </div>
                </div>
                <div className="lower">
                  <div className="ins">
                    <img src="skies.jpg" alt="" />
                  </div>
                  <div className="ina">
                    <p>
                      Dorum <br />
                      Ultricies congue
                    </p>
                  </div>
                </div>
                <div className="lower">
                  <div className="ins">
                    <img src="skies.jpg" alt="" />
                  </div>
                  <div className="ina">
                    <p>
                      Mingsum <br />
                      Lorem ipsum dipsum
                    </p>
                  </div>
                </div>
              </div>
              <div className="bot-right">
                <div className="nam">Tags</div>
                <div className="inside-tag">
                  <p>
                    <span style={{ background: "black", color: "white" }}>
                      Travel
                    </span>{" "}
                    <span>New York</span> <span>London</span> <span>IKEA</span>{" "}
                    <span>NORWA</span> <span>DIY</span>
                    <span>Ideas</span> <span>Baby</span> <span>Family</span>{" "}
                    <span>News</span> <span>Clothing</span>{" "}
                    <span>Shopping</span>
                    <span>Sport</span> <span>Games</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="foot-1">
            <div className="pre">Previous</div>
            <div className="nex">Next&gt;&gt;</div>
          </div>
          <span style={{ color: "white", margin: 10 }}>Powered by:</span>
          <span>
            <a
              href="https://www.w3schools.com/w3css/default.asp"
              style={{ color: "white" }}
            >
              w3.css
            </a>
          </span>
        </div>
      </>
    </>
  );
}

export default App;

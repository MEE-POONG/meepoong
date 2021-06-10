
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://www.meepoong.com?ref=pkr-footer"
                  target="_blank"
                >
                  MEE POONG
                </a>
              </li>
              <li>
                <a
                  href="http://blog.meepoong.com/?ref=pkr-footer"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://www.meepoong.com/license?ref=pkr-footer"
                  target="_blank"
                >
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by MEE POONG
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
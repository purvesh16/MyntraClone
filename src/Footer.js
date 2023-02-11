import React from "react";
import styled from "styled-components";
import { policies, shopping, links } from "./data/FooterData";

const Footer = () => {
  return (
    <FooterBar>
      <div className="footer-container">
        <div className="shoppings">
          <div className="online-shopping common-style">
            <h4 className="title">Online Shopping</h4>
            <ul className="nav-list">
              {shopping.map((link) => {
                const { id, text, url } = link;

                return (
                  <>
                    <li>
                      <a className=" " aria-current="page" href={url} key={id}>
                        {text}
                      </a>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>

          <div className="links common-style">
            <h4 className="title">Useful Links</h4>

            <ul className="nav-list">
              {links.map((link) => {
                const { id, text, url } = link;

                return (
                  <>
                    <li>
                      <a className=" " aria-current="page" href={url} key={id}>
                        {text}
                      </a>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="shoppings common-style">
          <h4 className="title">Online Shopping</h4>

          <ul className="nav-list">
            {policies.map((link) => {
              const { id, text, url } = link;

              return (
                <>
                  <li>
                    <a className=" " aria-current="page" href={url} key={id}>
                      {text}
                    </a>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
        <div className="socials-store common-style">
          <div className="app-store">
            <h4 className="title">EXPERIENCE MYNTRA APP ON MOBILE</h4>
          </div>
          <div className="socials">
            <h4 className="title">Online Shopping</h4>
          </div>
        </div>
        <div className="guarrante-return common-style"></div>
      </div>
    </FooterBar>
  );
};

const FooterBar = styled.footer`
  width: 100%;
  padding: 2rem 18rem;
  margin-top: 2rem;
  background: #f5f5f5;

  .footer-container {
    display: flex;
  }

  .nav-list {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    padding: 1rem;
  }

  h4 {
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
  }
  a {
    font-size: 0.8rem;
    color: grey;
    text-align: start;
  }
`;

export default Footer;

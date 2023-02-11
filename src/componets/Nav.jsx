import React from "react";
import styled from "styled-components";

const links = [
  {
    id: 1,
    text: "Men",
    url: "/men",
  },
  {
    id: 2,
    text: "Women",
    url: "/women",
  },
  {
    id: 3,
    text: "Kids",
    url: "/kids",
  },
  {
    id: 4,
    text: "Home & Living",
    url: "/homeliving",
  },
  {
    id: 5,
    text: "Beauty",
    url: "/beauty",
  },
];
const Nav = () => {
  return (
    <>
      {links.map((link) => {
        const { id, text, url } = link;

        return (
          <Navbar>
            <li className="nav-item ">
              <a
                className="nav-link fw-bold mx-2 my-2  "
                aria-current="page"
                href={url}
                key={id}
              >
                {text}
              </a>
            </li>
          </Navbar>
        );
      })}
    </>
  );
};

const Navbar = styled.nav`
  .nav-item {
    position: relative;
  }
  .nav-item::before {
    content: "";
    width: 0;
    height: 0.2rem;
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    background: red;
    transition: all 0.3s ease;
  }

  .nav-item:hover::before {
    width: 100%;
  }
`;
export default Nav;

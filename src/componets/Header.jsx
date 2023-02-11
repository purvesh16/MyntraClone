import React from "react";
import styled from "styled-components";
import { BsBag } from "react-icons/bs";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import Nav from "./Nav";

const Header = () => {
  return (
    <HeaderSection>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="img/logo.png" alt="" style={{ height: "2.8rem" }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Nav />
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2 search-bar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>

            <div className="profile ">
              <AiOutlineUser className="profile-icon" />
              <AiOutlineHeart className="profile-icon" />
              <BsBag className="profile-icon" />
            </div>
          </div>
        </div>
      </nav>
    </HeaderSection>
  );
};

const HeaderSection = styled.header`
  width: 100%;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  box-shadow: 1px 2px 15px rgba(0, 0, 0, 0.2);
  .search-bar {
    width: 15rem;
    height: 2.8rem;
    outline: none;
    border: none;
    background: #ececec;
  }
  .serach-bar:active {
    outline: none;
    border: none;
  }
  .btn {
    background: #fb2576;
  }
  .search-icon {
    font-size: 2rem;
  }

  .profile {
    display: flex;
    align-tems: cemter;
    justify-content: space-between;
    font-size: 1.2rem;
    margin-left: 1rem;
  }

  .profile-icon {
    margin-right: 1.4rem;
  }
`;

export default Header;

import "../css/NavbarMen.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const NavbarMen = () => {
  const [Open, SetOpen] = useState(false);
  return (
    <>
      <svg
        onClick={() => {
          SetOpen(!Open);
        }}
        class={Open ? "ham hamRotate ham1 active" : "ham hamRotate ham1 "}
        viewBox="0 0 100 100"
        width="80"
      >
        <path
          class="line top"
          d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
        />
        <path class="line middle" d="m 30,50 h 40" />
        <path
          class="line bottom"
          d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
        />
      </svg>{" "}
      <div className="Navbar-Man">
        <Link to="/Women">
          <p className="Women" text="&nbsp;Women&nbsp;">
            &nbsp;Women&nbsp;
          </p>
        </Link>
        <Link to="/">
          <p className="Man" text="&nbsp;Man&nbsp;">
            &nbsp;Man&nbsp;
          </p>
        </Link>
        <Link to="/Child">
          <p className="Child" text="&nbsp;Child&nbsp;">
            &nbsp;Child&nbsp;
          </p>
        </Link>
        <Link to="/Beauty">
          <p className="Beauty" text="&nbsp;Beauty&nbsp;">
            &nbsp;Beauty&nbsp;
          </p>
        </Link>
        <div>
          <input
            className="Navbar-Search-bar"
            type="text"
            placeholder="Search.."
          ></input>
        </div>
        <div className="Icons">
          <svg
            className="Iconsss"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              fill-rule="evenodd"
              d="M6.736 4C4.657 4 2.5 5.88 2.5 8.514c0 3.107 2.324 5.96 4.861 8.12a29.66 29.66 0 004.566 3.175l.073.041.073-.04c.271-.153.661-.38 1.13-.674.94-.588 2.19-1.441 3.436-2.502 2.537-2.16 4.861-5.013 4.861-8.12C21.5 5.88 19.343 4 17.264 4c-2.106 0-3.801 1.389-4.553 3.643a.75.75 0 01-1.422 0C10.537 5.389 8.841 4 6.736 4zM12 20.703l.343.667a.75.75 0 01-.686 0l.343-.667zM1 8.513C1 5.053 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262a31.146 31.146 0 01-5.233 3.576l-.025.013-.007.003-.002.001-.344-.666-.343.667-.003-.002-.007-.003-.025-.013A29.308 29.308 0 0110 20.408a31.147 31.147 0 01-3.611-2.632C3.8 15.573 1 12.332 1 8.514z"
            ></path>
          </svg>
          <svg
            className="Iconss"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              fill-rule="evenodd"
              d="M7.5 1.75C7.5.784 8.284 0 9.25 0h5.5c.966 0 1.75.784 1.75 1.75V4h4.75c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0121.25 22H2.75A1.75 1.75 0 011 20.25V5.75C1 4.784 1.784 4 2.75 4H7.5V1.75zm-5 10.24v8.26c0 .138.112.25.25.25h18.5a.25.25 0 00.25-.25v-8.26A4.233 4.233 0 0118.75 13H5.25a4.233 4.233 0 01-2.75-1.01zm19-3.24a2.75 2.75 0 01-2.75 2.75H5.25A2.75 2.75 0 012.5 8.75v-3a.25.25 0 01.25-.25h18.5a.25.25 0 01.25.25v3zm-6.5-7V4H9V1.75a.25.25 0 01.25-.25h5.5a.25.25 0 01.25.25z"
            ></path>
          </svg>
        </div>
      </div>
      {Open && (
        <div className="Open-Box">
          <ul className="Open-Text">
            <Link to="/Women">
              <p className="Clothess" text="&nbsp;Women&nbsp;">
                &nbsp;Women&nbsp;
              </p>
            </Link>
            <Link to="/">
              <p className="Shoes" text="&nbsp;Men&nbsp;">
                &nbsp;Men&nbsp;
              </p>
            </Link>
            <Link to="/Child">
              <p className="Bags" text="&nbsp;Child&nbsp;">
                &nbsp;Child&nbsp;
              </p>
            </Link>
            <Link to="/Beauty">
              <p className="Accessories" text="&nbsp;Beauty&nbsp;">
                &nbsp;Beauty&nbsp;
              </p>
            </Link>
          </ul>
        </div>
      )}
      <div className="Middle-box">
        <Link to="/Clothes">
          <p className="Clothes" text="&nbsp;Clothes&nbsp;">
            &nbsp;Clothes&nbsp;
          </p>
        </Link>
        <Link to="/ManShoes">
          <p className="Shoes" text="&nbsp;Shoes&nbsp;">
            &nbsp;Shoes&nbsp;
          </p>
        </Link>
        <Link to="/MenBags">
          <p className="Bags" text="&nbsp;Bags&nbsp;">
            &nbsp;Bags&nbsp;
          </p>
        </Link>
        <Link to="/MenAccessories">
          <p className="Accessories" text="&nbsp;Accessories&nbsp;">
            &nbsp;Accessories&nbsp;
          </p>
        </Link>
        <Link to="/MenWatches">
          <p className="Watches" text="&nbsp;Watches&nbsp;">
            &nbsp;Watches&nbsp;
          </p>
        </Link>
      </div>
    </>
  );
};

export default NavbarMen;

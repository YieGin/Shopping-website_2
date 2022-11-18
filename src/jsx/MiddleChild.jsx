import React from "react";
import Image35 from "../Images/35.png";
import Image36 from "../Images/36.png";
import Image37 from "../Images/37.png";
import Image38 from "../Images/38.png";
import Image39 from "../Images/39.png";
import Image40 from "../Images/40.png";
import Image45 from "../Images/45.png";
import Image46 from "../Images/46.png";
import Image41 from "../Images/41.png";
import Image42 from "../Images/42.png";
import Image43 from "../Images/43.png";
import Image44 from "../Images/44.png";

import "../css/MiddleChild.css";
const MiddleChild = () => {
  return (
    <div>
      <div className="Middle-Css">
        <div className="Middle-Text">
          <div className="Middle-Text-1">
            <h1>OUTERWEAR OF</h1>
            <h1>THE SEASON:</h1>
            <p>
              From Burberry logo jackets to Balmain quilted coats, find the new
              essentials
            </p>
          </div>
          <div className="Middle-Image">
            <img className="Image35" src={Image35}></img>
          </div>
        </div>
        <div className="most-beautiful-brands">
          <h3 className="selected">UNMISSABLE NEWS</h3>
          <div className="most-beautiful-Imagee">
            <div className="Image4-box">
              <img className="Image-4" src={Image36}></img>
              <a className="Boxx-Image-1">
                <span className="Boxx-Image-Text">
                  <span>BABY</span>
                  <span className="text-paddingg">Cozy blankets and more</span>
                </span>
                <i className="Boxx-Image-Help"></i>
              </a>
            </div>
            <div className="Image4-box">
              <img className="Image-4" src={Image37}></img>
              <a className="Boxx-Image-1">
                <span className="Boxx-Image-Text">
                  <span>CHILD</span>
                  <span className="text-paddingg">Fall accessories</span>
                </span>
                <i className="Boxx-Image-Help"></i>
              </a>
            </div>
            <div className="Image4-box">
              <img className="Image-4" src={Image38}></img>
              <a className="Boxx-Image-1">
                <span className="Boxx-Image-Text">
                  <span>TEENAGER </span>
                  <span className="text-padding">Jeans, tops and sneakers</span>
                </span>
                <i className="Boxx-Image-Help"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="most-beautiful-Week">
          <div className="most-beautiful-for-child">
            <div className="Image5-box">
              <img className="Image55" src={Image39}></img>
              <a className="Boxx-Image-1">
                <span className="Boxx-Image-Text">
                  <span>FOR THEE LITTLE ONES</span>
                  <span className="text-paddingg"> Rompers,bibs and more</span>
                </span>
                <i className="Boxx-Image-Help"></i>
              </a>
            </div>
            <div className="Image5-box">
              <img className="Image555" src={Image40}></img>
              <a className="Boxx-Image-1">
                <span className="Boxx-Image-Text">
                  <span>FALL PIECES</span>
                  <span className="text-paddingg">
                    {" "}
                    Colorful warm and textured
                  </span>
                </span>
                <i className="Boxx-Image-Help"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="new-t-shirts">
          <h2 className="IN-REVIEW">IN REVIEW: around birth</h2>
          <div className="new-t-shirts-box">
            <div className="Image4-box">
              <img className="Image4" src={Image41}></img>
              <a className="Boxx-Image-1">
                <span className="Boxx-Image-Text">
                  <span>Moschino kids</span>
                  <span className="text-padding">teddy bear changing bag</span>
                  <span>272$</span>
                </span>
                <i className="Boxx-Image-Help"></i>
              </a>
            </div>
            <div className="Image4-box">
              <img className="Image4" src={Image42}></img>
              <a className="Boxx-Image-1">
                <span className="Boxx-Image-Text">
                  <span>Balmain kids</span>
                  <span className="text-padding">logo-print diaper bag</span>
                  <span>560$</span>
                </span>
                <i className="Boxx-Image-Help"></i>
              </a>
            </div>
            <div className="Image4-box">
              <img className="Image4" src={Image43}></img>
              <a className="Boxx-Image-1">
                <span className="Boxx-Image-Text">
                  <span>BOSS kidswear</span>
                  <span className="text-padding">Logo patch changing bag</span>
                  <span>245$</span>
                </span>
                <i className="Boxx-Image-Help"></i>
              </a>
            </div>
            <div className="Image4-box">
              <img className="Image4" src={Image44}></img>
              <a className="Boxx-Image-1">
                <span className="Boxx-Image-Text">
                  <span>Dolce & Gabbana Kids</span>
                  <span className="text-padding">
                    DG logo-print sleeping bag
                  </span>
                  <span>295$</span>
                </span>
                <i className="Boxx-Image-Help"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="most-beautiful-for-child-2">
          <div className="Image5-box">
            <img className="Image5555" src={Image45}></img>
            <a className="Boxx-Image-1">
              <span className="Boxx-Image-Text">
                <span>STELLA MCCARTNEY</span>
                <span className="text-paddingg">
                  {" "}
                  The latest conscious novelties from the
                </span>
                <span className="text-paddingg">British label</span>
              </span>
              <i className="Boxx-Image-Help"></i>
            </a>
          </div>
          <div className="Image5-box">
            <img className="Image55555" src={Image46}></img>
            <a className="Boxx-Image-1">
              <span className="Boxx-Image-Text">
                <span>MIDITERRANEO KIDS, ITALY</span>
                <span className="text-paddingg">
                  {" "}
                  The latest selection from
                </span>
                <span>the La Spezia boutique</span>
              </span>
              <i className="Boxx-Image-Help"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleChild;

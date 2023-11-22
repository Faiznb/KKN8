import React from "react";
import "./Member.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Member = () => {
  return (
    <div className="container m-container">
      <h1 className="text-center">Meet Our Team </h1>
      <div className="row justify-content-center">
        <div className="col-md-3 col-sm-6 my-3">
          <div className="our-team">
            <img src="https://picsum.photos/200" alt="" />
            <div className="team-content">
              <h3 className="title">Erwin Erdiyanto</h3>
              <span className="post">Ketua</span>
              <ul className="social-links">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 my-3">
          <div className="our-team">
            <img src="https://picsum.photos/200" alt="" />
            <div className="team-content">
              <h3 className="title">Nasywa Andin Safitri</h3>
              <span className="post">Sekretaris</span>
              <ul className="social-links">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 my-3">
          <div className="our-team">
            <img src="https://picsum.photos/200" alt="" />
            <div className="team-content">
              <h3 className="title">Ilham Firmansyah</h3>
              <span className="post">Korlap</span>
              <ul className="social-links">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 my-3">
          <div className="our-team">
            <img src="https://picsum.photos/200" alt="" />
            <div className="team-content">
              <h3 className="title">Raihan Fawwas A</h3>
              <span className="post">Acara</span>
              <ul className="social-links">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 my-3">
          <div className="our-team">
            <img src="https://picsum.photos/200" alt="" />
            <div className="team-content">
              <h3 className="title">Riza Satria P</h3>
              <span className="post">Acara</span>
              <ul className="social-links">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 my-3">
          <div className="our-team">
            <img src="https://picsum.photos/200" alt="" />
            <div className="team-content">
              <h3 className="title">Syamsu Huda</h3>
              <span className="post">Acara</span>
              <ul className="social-links">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 my-3">
          <div className="our-team">
            <img src="https://picsum.photos/200" alt="" />
            <div className="team-content">
              <h3 className="title">Faiz Nur Budi</h3>
              <span className="post">Acara</span>
              <ul className="social-links">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 my-3">
          <div className="our-team">
            <img src="https://picsum.photos/200" alt="" />
            <div className="team-content">
              <h3 className="title">Siti Nur R.Ummah</h3>
              <span className="post">PDD</span>
              <ul className="social-links">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 my-3">
          <div className="our-team">
            <img src="https://picsum.photos/200" alt="" />
            <div className="team-content">
              <h3 className="title">Achmad Andrian M</h3>
              <span className="post">Perkap</span>
              <ul className="social-links">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 my-3">
          <div className="our-team">
            <img src="https://picsum.photos/200" alt="" />
            <div className="team-content">
              <h3 className="title">Ahmad Anwar S</h3>
              <span className="post">Perkap</span>
              <ul className="social-links">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;

import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="">
        <div className="carousel">
          <img
            src="/assets/homepage/opened-notebook.webp"
            className="responsive-img"
            alt="carousel-img"
          />
          <div className="corousel-text title title-lg">
            <span className="dark-text">
              <span className="primary-text">X</span>enon-
              <span className="secondary-text">S</span>tationery
            </span>
            <p className="title ">
              A journey from <span className="primary-text">thought</span> to
              <span className="secondary-text"> paper</span> .
            </p>
          </div>

          <div className="offer-text">
            <h2 className="gray-text">
              <span className="title title-lg danger-text"> FLAT 60% OFF </span>
              on various products
            </h2>
            <Link to="/products" className="btn btn-large btn-secondary">
              Shop Now
            </Link>
          </div>
        </div>

        <div className="flex-container-verticle">
          <div>
            <p className=" title title-md introduction-heading">
              Write down thoughts & memories
            </p>
          </div>
          <div className="introduction-text">
            We provide Notebooks and Diaries which helps you to manage your
            thoughts at one place. Grab your daily routine, office-work and
            writings in single place.
          </div>
        </div>
      </div>

      <div className="flex-container">
        <div className="arrivals">
          <div>The best Notebook to give as gift this year.</div>
          <img
            src="/assets/homepage/svgs/notebook.svg"
            className="responsive-img"
            alt="notebook"
          />
        </div>
        <div className="arrivals">
          <div>Free Countrywise Delivery</div>
          <img
            src="/assets/homepage/svgs/cycle.svg"
            className="responsive-img"
            alt="cycle"
          />
        </div>
        <div className="arrivals">
          <div>Talk with pen and paper</div>
          <img
            src="/assets/homepage/svgs/thoughts.svg"
            className="responsive-img"
            alt="thoughts"
          />
        </div>
      </div>

      <div className="container">
        <div className="title title-lg centered-text pd-1">Top Products...</div>
        <div className="flex-container pd-2">
          <div className="card">
            <div className="card-media">
              <img
                className="responsive-img"
                src="/assets/products/moleskine-cahier-cardboard-diary/moleskine-cahier-cardboard-diary-1.webp"
                alt="top products"
              />
            </div>
            <div className="card-header">
              <span className="title">Moleskine Cahier Cardboard Diary</span>
            </div>
          </div>
          <div className="card">
            <div className="card-media">
              <img
                className="responsive-img"
                src="/assets/products/tru-red-small-hard-cover-ruled-diary/tru-red-small-hard-cover-ruled-diary-1.webp"
                alt="top products"
              />
            </div>
            <div className="card-header">
              <span className="title">
                TRU RED Small Hard Cover Ruled Diary
              </span>
            </div>
          </div>
          <div className="card">
            <div className="card-media">
              <img
                className="responsive-img"
                src="/assets/products/rocketbook-fusion-smart-notebook-chocolate/rocketbook-fusion-smart-notebook-chocolate-1.webp"
                alt="top products"
              />
            </div>
            <div className="card-header">
              <span className="title">
                Rocketbook Fusion Smart Notebook (chocolate)
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-container">
        <div className="featured-brand">Featured Brands</div>
        <div className="brand-logos flex-container">
          <div>
            <img
              className="responsive-img"
              src="https://cdn.mos.cms.futurecdn.net/9FjXgFet9VcH4fXyqvva2j-1024-80.jpg.webp"
              alt=""
            />
          </div>

          <div>
            <img
              className="responsive-img"
              src="https://mma.prnewswire.com/media/1386415/rocketbook_logo.jpg?p=facebook"
              alt=""
            />
          </div>
          <div>
            <img
              className="responsive-img"
              src="https://mma.prnewswire.com/media/1396452/TRURED_Logo.jpg?p=twitter"
              alt=""
            />
          </div>
          <div>
            <img
              className="responsive-img"
              src="https://seekvectorlogo.com/wp-content/uploads/2018/03/moleskine-vector-logo.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

import React from "react";
import Navbar from "../Navbar";
import Sidbar from "../Sidbar";
import "../../assets/css/style.css";

export const Container = ({ children }) => {
  return (
    <>
      <Navbar />
      <Sidbar />

      <main id="main" class="main">
     
        <section className="section dashboard">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="row">
                  <div className="col-xxl-4 col-md-12">
                    <div className="card info-card sales-card">{children}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

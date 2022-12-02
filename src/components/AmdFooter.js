import React from "react";

function AmdFooter(){
    return (
      <div className="mt-5 pt-5 pb-5 footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-xs-12 about-company">
              <div className="footer-header">
                <img
                  alt=""
                  src="AMD.png"
                  width="60"
                  height="60"
                  className="d-inline-block align-top image"
                />
                <h2>AMD</h2>
              </div>
              <p class="pr-5 text-white-50">
                Android Malware Detector is a tool which will analyze apks using
                dynamic analysis.{" "}
              </p>
              <div className="socials">
                <a href="/">
                  <img src="facebook.png" alt="" />
                </a>
                <a href="/">
                  <img src="instagram.png" alt="" />
                </a>
                <a href="/">
                  <img src="twitter.png" alt="" />
                </a>
                <a href="/">
                  <img src="youtube.png" alt="" />
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-xs-12 links">
              <h4 class="mt-lg-0 mt-sm-3">Links</h4>
              <ul class="m-0 p-0">
                <li>
                  - <a href="/">Home</a>
                </li>
                <li>
                  - <a href="/about">About us</a>
                </li>
                <li>
                  - <a href="/contact">Contact us</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-4 col-xs-12 location">
              <h4 class="mt-lg-0 mt-sm-4">Location</h4>
              <p>Comsats University Islamabadd</p>
              <p class="mb-0">
                <i class="fa fa-phone mr-3"></i> 03335662534
              </p>
              <p>
                <i class="fa fa-envelope-o mr-3"></i> m.haris8790@gmail.com
              </p>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col copyright">
              <p class="">
                <small class="text-white-50">
                  © 2022. All Rights Reserved.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}
export default AmdFooter;
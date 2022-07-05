import './WhatIDoApp.css';
import logo from '../logo.svg';
import javascript from '../javascript.png';
import htmlCss from '../html-css.png';
import React from 'react';

function App() {
  return (
    <div className="WhatIDoMain" id="WhatIDoApp">
      <div className="WhatIDoDiv py-5">
        <section class="text-center container">
          <div class="row py-lg-5">
              <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="fw-light">What I Do?</h1>
              <p class="lead text-muted">Here are some of languages I used.</p>
              </div>
          </div>
        </section>
        <div class="album py-5 bg-light" id="WID-album-bg">
          <div class="container">
              <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">                       
                  <div class="col">
                      <div class="card shadow-sm WID-img ">
                        <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={logo} className="WID-logo" alt="logo"  />
                      </div>
                  </div>
                  <div class="col">
                      <div class="card shadow-sm WID-img ">
                        <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={javascript} className="WID-javascript" alt="logo"  />
                      </div>
                  </div>
                  <div class="col">
                      <div class="card shadow-sm WID-img " id="WID-html-css">
                        <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={htmlCss} className="WID-html-css" alt="logo"  />
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

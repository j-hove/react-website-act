import React from 'react';
import TypewriterComponent from 'typewriter-effect';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import showcase from './showcase.svg'


function HeroApp() {     

    return (
        <div class="container col-xxl-8 px-4 py-5" id="HeroApp">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">            
                <div class="col-10 col-sm-8 col-lg-5">
                    <img src={showcase} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                </div>                
                <div class="col-lg-7">
                    <h3 class="display-7 lh-1">Welcome to my page! My name is</h3>
                    <h1 class="display-2 fw-bold lh-1 mb-3">Jhoven </h1>
                    <div class="display-6 fw-bold lh-1 mb-3">
                        <span>
                            I'm a
                        </span> 
                        <span class="px-2 text-primary">
                            Full-stack Web Developer 
                        </span>
                        <span>
                            && 
                        </span>                         
                    </div>
                    <div class="display-6 fw-bold lh-1 mb-3 text-warning">
                        <TypewriterComponent
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 20,
                            strings:[
                                'a human (Please believe me)',
                                'a Once. VIP. Army. Midzy.',
                                'aspiring Content Creator.',
                                'aspiring Writer/Blogger.',
                                'aspiring Techpreneur.'
                            ]
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroApp
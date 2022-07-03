import React, { useState }  from 'react';
import TypewriterComponent from 'typewriter-effect';


function HeroApp() {     

    return (
        <div class="container col-xxl-8 px-4 py-5" id="HeroApp">
            <div class="px-4 py-5 my-5">            
                <div class="col-lg">
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


                        {/* <span class="word wisteria display-7 fw-bold lh-1 mb-3">Tobie.</span>
                        <span class="word belize display-7 fw-bold lh-1 mb-3">graczach.</span>
                        <span class="word pomegranate display-7 fw-bold lh-1 mb-3">bukmacherach.</span>                           */}
                    </div>
                    {/* <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                    <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default HeroApp
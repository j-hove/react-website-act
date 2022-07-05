import React from 'react';
import './HobbiesApp.css'

function HobbiesApp () {
    return (
        <main id="Hobbies">
            <section class="py-5 text-center container">
                <div class="row py-lg-1">
                    <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 class="fw-light">Hobbies</h1>
                    <p class="lead text-muted">On my other free time...</p>
                    </div>
                </div>
            </section>
            <div class="album py-5 bg-light">
                <div class="container">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">                       
                        <div class="col">
                            <div class="card shadow-sm">
                                <img class="bd-placeholder-img card-img-top hobbies-img" width="100%" height="225" src="https://tableseasons.com/wp-content/uploads/2018/08/tips-on-how-to-start-journaling-1.jpg" alt="journaling" />
                                <div class="bd-placeholder-img card-img-top hobbies-img hobbies-hover" width="100%" height="225">Journaling. <br /> Brain Dump everything.</div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm">
                                <img class="bd-placeholder-img card-img-top hobbies-img" width="100%" height="225" src="https://images.pexels.com/photos/3782191/pexels-photo-3782191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="reading" />
                                <div class="bd-placeholder-img card-img-top hobbies-img hobbies-hover" width="100%" height="225">Reading Books. <br /> Whenever possible.</div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm">
                                <img class="bd-placeholder-img card-img-top hobbies-img" width="100%" height="225" src="https://unite.pokemon.com/images/share-fb.jpg" alt="games"/>
                                <div class="bd-placeholder-img card-img-top hobbies-img hobbies-hover" width="100%" height="225">Playing Games. <br />As of now Only Pokemon Unite.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    ); 

}

export default HobbiesApp
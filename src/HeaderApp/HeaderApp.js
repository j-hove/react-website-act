import React, { Component } from 'react';
import './HeaderApp.css';

class HeaderApp extends Component {

    render() {
        return (
            <nav class="navbar navbar-expand-md navbar-dark bg-dark stay" aria-label="Fourth navbar example" id="Home">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#HeroApp">Jhoven Español</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
    
                    <div class="d-flex justify-content-end">
                        <div class="collapse navbar-collapse" id="navbarsExample04">
                            <ul class="navbar-nav me-auto mb-2 mb-md-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#Home">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#WhatIDoApp">What I Do?</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#Hobbies">Hobbies</a>
                                </li>
                            </ul>
                        </div>
                    </div>                
                </div>
            </nav>
        );

    };
    

}



// function HeaderApp() {   
//     return (
//         <nav class="navbar navbar-expand-md navbar-dark bg-dark stay" aria-label="Fourth navbar example" id="Home">
//             <div class="container-fluid">
//                 <a class="navbar-brand" href="#HeroApp">Jhoven Español</a>
//                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
//                     <span class="navbar-toggler-icon"></span>
//                 </button>

//                 <div class="d-flex justify-content-end">
//                     <div class="collapse navbar-collapse" id="navbarsExample04">
//                         <ul class="navbar-nav me-auto mb-2 mb-md-0">
//                             <li class="nav-item">
//                                 <a class="nav-link active" aria-current="page" href="#Home">Home</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="#WhatIDoApp">What I Do?</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="#Hobbies">Hobbies</a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>                
//             </div>
//         </nav>
//     );
// }

export default HeaderApp
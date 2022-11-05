import React from 'react';
import projectstyle from '../css-files/Project.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Project() {

    const showMore =()=>{
        const btnName = document.querySelector('.showMore');
        const Divs = document.querySelectorAll('.show-more');

        if(btnName.textContent == 'Show More'){

            btnName.textContent = 'Show Less';
            Divs.forEach(function(item){              
                item.style.display = "block";  
              
              })
        } 
        else{
            btnName.textContent = 'Show More';
            Divs.forEach(function(item){              
                item.style.display = "none";  
              
              })       
         }
    }

   AOS.init();

  return (

    <>
        <section className='project-wrapper' id='project' data-aos="fade-up">
             <div className="container lg:w-[80%] w-full py-20 flex flex-col justify-center items-center m-auto">
                <h1 className='project-head text-center md:text-3xl text-[25px] text-white uppercase'>03. Worthy Projects</h1>

                 <div className="proj-holder mt-20 lg:w-[80%] w-full m-auto lg:px-10 px-3">

                    <div className="card bg-[#3e4555] p-4 cursor-pointer rounded hover:-translate-y-2 transition-all">
                            <div className="card-body flex flex-col justify-evenly min-h-[30vh] px-2">
                                     <div className="card-header">
                                        <h5 className="card-title flex justify-between text-xl mb-10">
                                            <span className='text-[#61a796] text-3xl'><ion-icon name="folder-outline"></ion-icon></span>
                                            <span className='text-white'>
                                                <a href="https://github.com/Jagrati1213/phonepe" target ="_blank" ><ion-icon name="logo-github"></ion-icon> </a>
                                                 <a href="https://jagrati1213.github.io/phonepe/" target ="_blank" ><ion-icon name="share-social-outline"></ion-icon></a>
                                             </span>                                        </h5>
                                        <h6 className="card-subtitle mb-2 text-[#dae1fa] text-2xl font-semibold">Phone Pe Clone</h6>
                                        <p className="card-text text-gray-400">It was a UPI transition project. A Home page website of original Phonepe. In this project i used Taliwind Css</p>
                                     </div>

                                    <div className="card-footer">
                                        <ul className="card-skills flex justify-between text-[#61a796]">
                                            <li className='text-[13px]'>html</li>
                                            <li className='text-[13px]'>JS</li>
                                            <li className='text-[13px]'>Tailwind</li>
                                            <li className='text-[13px]'>AOS</li>
                                            <li className='text-[13px]'>Slick</li>
                                        </ul>
                                    </div>
                            </div>
                    </div>
                    <div className="card  bg-[#3e4555] p-4 cursor-pointer rounded hover:-translate-y-2 transition-all">
                            <div className="card-body flex flex-col justify-evenly min-h-[30vh] px-2">
                                     <div className="card-header">
                                        <h5 className="card-title flex justify-between text-xl mb-10">
                                            <span className='text-[#61a796] text-3xl'><ion-icon name="folder-outline"></ion-icon></span>
                                            <span className='text-white'>
                                                <a href="https://github.com/Jagrati1213/nike-clone" target ="_blank" ><ion-icon name="logo-github"></ion-icon> </a>
                                                 <a href="https://jagrati1213.github.io/nike-clone/" target ="_blank" ><ion-icon name="share-social-outline"></ion-icon></a>
                                             </span>                                        </h5>
                                        <h6 className="card-subtitle mb-2 text-[#dae1fa] text-2xl font-semibold">Nike Clone</h6>
                                        <p className="card-text text-gray-400">It was a E-commerce project. A Home page website of original Nike. In this project i used Taliwind Css</p>
                                     </div>

                                    <div className="card-footer">
                                        <ul className="card-skills flex justify-between text-[#61a796]">
                                            <li className='text-[13px]'>html</li>
                                            <li className='text-[13px]'>JS</li>
                                            <li className='text-[13px]'>Tailwind</li>
                                            <li className='text-[13px]'>AOS</li>
                                            <li className='text-[13px]'>Slick</li>
                                        </ul>
                                    </div>
                            </div>
                    </div>
                    <div className="card  bg-[#3e4555] p-4 cursor-pointer rounded hover:-translate-y-2 transition-all">
                            <div className="card-body flex flex-col justify-evenly min-h-[30vh] px-2">
                                     <div className="card-header">
                                        <h5 className="card-title flex justify-between text-xl mb-10">
                                            <span className='text-[#61a796] text-3xl'><ion-icon name="folder-outline"></ion-icon></span>
                                            <span className='text-white'>
                                                <a href="https://github.com/Jagrati1213/ineuron" target ="_blank" ><ion-icon name="logo-github"></ion-icon> </a>
                                                 <a href="https://jagrati1213.github.io/ineuron/" target ="_blank" ><ion-icon name="share-social-outline"></ion-icon></a>
                                             </span>
                                        </h5>
                                        <h6 className="card-subtitle mb-2 text-[#dae1fa] text-2xl font-semibold">Ineuron UI Clone</h6>
                                        <p className="card-text text-gray-400">It was Team mate project for hackathon. here we learnt about slick,aos things.</p>
                                     </div>

                                    <div className="card-footer">
                                        <ul className="card-skills flex justify-between text-[#61a796]">
                                            <li className='text-[13px]'>html</li>
                                            <li className='text-[13px]'>JS</li>
                                            <li className='text-[13px]'>Css</li>
                                            <li className='text-[13px]'>AOS</li>
                                            <li className='text-[13px]'>Slick</li>
                                            <li className='text-[13px]'>Bootstrap</li>
                                        </ul>
                                    </div>
                            </div>
                    </div>
                    <div className="card  bg-[#3e4555] p-4 cursor-pointer rounded hover:-translate-y-2 transition-all">
                            <div className="card-body flex flex-col justify-evenly min-h-[30vh] px-2">
                                     <div className="card-header">
                                        <h5 className="card-title flex justify-between text-xl mb-10">
                                            <span className='text-[#61a796] text-3xl'><ion-icon name="folder-outline"></ion-icon></span>
                                            <span className='text-white'>
                                                <a href="https://github.com/Jagrati1213/assignment-1" target ="_blank" ><ion-icon name="logo-github"></ion-icon> </a>
                                                 <a href="https://jagrati1213.github.io/assignment-1/" target ="_blank" ><ion-icon name="share-social-outline"></ion-icon></a>
                                             </span>                                        </h5>
                                        <h6 className="card-subtitle mb-2 text-[#dae1fa] text-2xl font-semibold">Protfolio-Home Page UI</h6>
                                        <p className="card-text text-gray-400">It was an assignment project.A UI dev. profile website</p>
                                     </div>

                                    <div className="card-footer">
                                        <ul className="card-skills flex justify-between text-[#61a796]">
                                            <li className='text-[13px]'>html</li>
                                            <li className='text-[13px]'>JS</li>
                                            <li className='text-[13px]'>Bootstrap</li>
                                            <li className='text-[13px]'>FontAwsome</li>
                                        </ul>
                                    </div>
                            </div>
                    </div>
                    <div className="card  bg-[#3e4555] p-4 cursor-pointer rounded hover:-translate-y-2 transition-all">
                            <div className="card-body flex flex-col justify-evenly min-h-[30vh] px-2">
                                     <div className="card-header">
                                        <h5 className="card-title flex justify-between text-xl mb-10">
                                            <span className='text-[#61a796] text-3xl'><ion-icon name="folder-outline"></ion-icon></span>
                                            <span className='text-white'>
                                                <a href="https://github.com/Jagrati1213/assignment-2" target ="_blank" ><ion-icon name="logo-github"></ion-icon> </a>
                                                 <a href="https://jagrati1213.github.io/assignment-2/" target ="_blank" ><ion-icon name="share-social-outline"></ion-icon></a>
                                             </span>                                        </h5>
                                        <h6 className="card-subtitle mb-2 text-[#dae1fa] text-2xl font-semibold">Marketing website UI</h6>
                                        <p className="card-text text-gray-400">It was an Assignment project. It was business related website</p>
                                     </div>

                                    <div className="card-footer">
                                        <ul className="card-skills flex justify-between text-[#61a796]">
                                            <li className='text-[13px]'>html</li>
                                            <li className='text-[13px]'>JS</li>
                                            <li className='text-[13px]'>Bootstap</li>
                                            <li className='text-[13px]'>FontAwesome</li>
                                            
                                        </ul>
                                    </div>
                            </div>
                    </div>
                    <div className="card  bg-[#3e4555] p-4 cursor-pointer rounded hover:-translate-y-2 transition-all">
                            <div className="card-body flex flex-col justify-evenly min-h-[30vh] px-2">
                                     <div className="card-header">
                                        <h5 className="card-title flex justify-between text-xl mb-10">
                                            <span className='text-[#61a796] text-3xl'><ion-icon name="folder-outline"></ion-icon></span>
                                            <span className='text-white'>
                                                <a href="https://github.com/Jagrati1213/assignment-3" target ="_blank" ><ion-icon name="logo-github"></ion-icon> </a>
                                                 <a href="https://jagrati1213.github.io/assignment-3/" target ="_blank" ><ion-icon name="share-social-outline"></ion-icon></a>
                                             </span>                                        </h5>
                                        <h6 className="card-subtitle mb-2 text-[#dae1fa] text-2xl font-semibold">Hosting Website UI</h6>
                                        <p className="card-text text-gray-400">It was an assignment project. A Home page website of Hosting</p>
                                     </div>

                                    <div className="card-footer">
                                        <ul className="card-skills flex justify-between text-[#61a796]">
                                            <li className='text-[13px]'>html</li>
                                            <li className='text-[13px]'>JS</li>
                                            <li className='text-[13px]'>Bootstap</li>
                                            <li className='text-[13px]'>FontAwesome</li>
                                        </ul>
                                    </div>
                            </div>
                    </div>
                    {/* show more-- */}
                    <div className="show-more card  bg-[#3e4555] p-4 cursor-pointer rounded hover:-translate-y-2 transition-all">
                            <div className="card-body flex flex-col justify-evenly min-h-[30vh] px-2">
                                     <div className="card-header">
                                        <h5 className="card-title flex justify-between text-xl mb-10">
                                            <span className='text-[#61a796] text-3xl'><ion-icon name="folder-outline"></ion-icon></span>
                                            <span className='text-white'>
                                                <a href="https://github.com/Jagrati1213/assignment-4" target ="_blank" ><ion-icon name="logo-github"></ion-icon> </a>
                                                 <a href="https://jagrati1213.github.io/assignment-4/" target ="_blank" ><ion-icon name="share-social-outline"></ion-icon></a>
                                             </span>
                                        </h5>
                                        <h6 className="card-subtitle mb-2 text-[#dae1fa] text-2xl font-semibold">API UI</h6>
                                        <p className="card-text text-gray-400">It was an Assignment project.</p>
                                     </div>

                                    <div className="card-footer">
                                        <ul className="card-skills flex justify-between text-[#61a796]">
                                            <li className='text-[13px]'>html</li>
                                            <li className='text-[13px]'>JS</li>
                                            <li className='text-[13px]'>Bootstap</li>
                                            <li className='text-[13px]'>FontAwesome</li>
                                        </ul>
                                    </div>
                            </div>
                    </div>
                    <div className="show-more card  bg-[#3e4555] p-4 cursor-pointer rounded hover:-translate-y-2 transition-all">
                            <div className="card-body flex flex-col justify-evenly min-h-[30vh] px-2">
                                     <div className="card-header">
                                        <h5 className="card-title flex justify-between text-xl mb-10">
                                            <span className='text-[#61a796] text-3xl'><ion-icon name="folder-outline"></ion-icon></span>
                                            <span className='text-white'>
                                                <a href="https://github.com/Jagrati1213/drumkit" target ="_blank" ><ion-icon name="logo-github"></ion-icon> </a>
                                                 <a href="https://jagrati1213.github.io/drumkit/" target ="_blank" ><ion-icon name="share-social-outline"></ion-icon></a>
                                             </span>                                        </h5>
                                        <h6 className="card-subtitle mb-2 text-[#dae1fa] text-2xl font-semibold">JS DrumKit</h6>
                                        <p className="card-text text-gray-400">It was a JS project. Here you can play music with help of keys.</p>
                                     </div>

                                    <div className="card-footer">
                                        <ul className="card-skills flex justify-between text-[#61a796]">
                                            <li className='text-[13px]'>html</li>
                                            <li className='text-[13px]'>JS</li>
                                            <li className='text-[13px]'>Bootstrap</li>
                                            <li className='text-[13px]'>Fontawesome</li>
                                            <li className='text-[13px]'>Audio(js)</li>
                                        </ul>
                                    </div>
                            </div>
                    </div>
                    <div className="show-more card  bg-[#3e4555] p-4 cursor-pointer rounded hover:-translate-y-2 transition-all">
                            <div className="card-body flex flex-col justify-evenly min-h-[30vh] px-2">
                                     <div className="card-header">
                                        <h5 className="card-title flex justify-between text-xl mb-10">
                                            <span className='text-[#61a796] text-3xl'><ion-icon name="folder-outline"></ion-icon></span>
                                            <span className='text-white'>
                                                <a href="https://github.com/Jagrati1213/stopwatch" target ="_blank" ><ion-icon name="logo-github"></ion-icon> </a>
                                                 <a href="https://jagrati1213.github.io/stopwatch/" target ="_blank" ><ion-icon name="share-social-outline"></ion-icon></a>
                                             </span>
                                        </h5>
                                        <h6 className="card-subtitle mb-2 text-[#dae1fa] text-2xl font-semibold">JS Stop Watch</h6>
                                        <p className="card-text text-gray-400">It was JS project. here we can stop watch restart watch, start watch.</p>
                                     </div>

                                    <div className="card-footer">
                                        <ul className="card-skills flex justify-between text-[#61a796]">
                                            <li className='text-[13px]'>html</li>
                                            <li className='text-[13px]'>JS</li>
                                            <li className='text-[13px]'>Css</li>
                                            <li className='text-[13px]'>Bootstrap</li>
                                            <li className='text-[13px]'>FontAwesome</li>
                                            <li className='text-[13px]'>SetIntervals</li>
                                        </ul>
                                    </div>
                            </div>
                    </div>
                    <div className="show-more card  bg-[#3e4555] p-4 cursor-pointer rounded hover:-translate-y-2 transition-all">
                            <div className="card-body flex flex-col justify-evenly min-h-[30vh] px-2">
                                     <div className="card-header">
                                        <h5 className="card-title flex justify-between text-xl mb-10">
                                            <span className='text-[#61a796] text-3xl'><ion-icon name="folder-outline"></ion-icon></span>
                                            <span className='text-white'>
                                                <a href="https://github.com/Jagrati1213/js-todolist" target ="_blank" ><ion-icon name="logo-github"></ion-icon> </a>
                                                 <a href="https://jagrati1213.github.io/js-todolist/" target ="_blank" ><ion-icon name="share-social-outline"></ion-icon></a>
                                             </span>                                        </h5>
                                        <h6 className="card-subtitle mb-2 text-[#dae1fa] text-2xl font-semibold">JS TODOLIST</h6>
                                        <p className="card-text text-gray-400">It was JS project.Here you can add items,delete items, edit items</p>
                                     </div>

                                    <div className="card-footer">
                                        <ul className="card-skills flex justify-between text-[#61a796]">
                                            <li className='text-[13px]'>html</li>
                                            <li className='text-[13px]'>JS</li>
                                            <li className='text-[13px]'>Bootstrap</li>
                                            <li className='text-[13px]'>FontAwsome</li>
                                        </ul>
                                    </div>
                            </div>
                    </div>
                    <div className="show-more card  bg-[#3e4555] p-4 cursor-pointer rounded hover:-translate-y-2 transition-all">
                            <div className="card-body flex flex-col justify-evenly min-h-[30vh] px-2">
                                     <div className="card-header">
                                        <h5 className="card-title flex justify-between text-xl mb-10">
                                            <span className='text-[#61a796] text-3xl'><ion-icon name="folder-outline"></ion-icon></span>
                                            <span className='text-white'>
                                                <a href="https://github.com/Jagrati1213/dad-jokes" target ="_blank" ><ion-icon name="logo-github"></ion-icon> </a>
                                                 <a href="https://jagrati1213.github.io/dad-jokes/" target ="_blank" ><ion-icon name="share-social-outline"></ion-icon></a>
                                             </span>                                        </h5>
                                        <h6 className="card-subtitle mb-2 text-[#dae1fa] text-2xl font-semibold">JS Joke Generator</h6>
                                        <p className="card-text text-gray-400">It was JS project. Where you can generate related Jokes</p>
                                     </div>

                                    <div className="card-footer">
                                        <ul className="card-skills flex justify-between text-[#61a796]">
                                            <li className='text-[13px]'>html</li>
                                            <li className='text-[13px]'>JS</li>
                                            <li className='text-[13px]'>Bootstap</li>
                                            <li className='text-[13px]'>FontAwesome</li>
                                            
                                        </ul>
                                    </div>
                            </div>
                    </div>
                    <div className="show-more card  bg-[#3e4555] p-4 cursor-pointer rounded hover:-translate-y-2 transition-all">
                            <div className="card-body flex flex-col justify-evenly min-h-[30vh] px-2">
                                     <div className="card-header">
                                        <h5 className="card-title flex justify-between text-xl mb-10">
                                            <span className='text-[#61a796] text-3xl'><ion-icon name="folder-outline"></ion-icon></span>
                                            <span className='text-white'>
                                                <a href="https://github.com/Jagrati1213/qr-code-generator" target ="_blank" ><ion-icon name="logo-github"></ion-icon> </a>
                                                 <a href="https://jagrati1213.github.io/qr-code-generator/" target ="_blank" ><ion-icon name="share-social-outline"></ion-icon></a>
                                             </span>                                        </h5>
                                        <h6 className="card-subtitle mb-2 text-[#dae1fa] text-2xl font-semibold">JS QR Code Generator</h6>
                                        <p className="card-text text-gray-400">It was JS project. Where you can Generate  website QR code</p>
                                     </div>

                                    <div className="card-footer">
                                        <ul className="card-skills flex justify-between text-[#61a796]">
                                            <li className='text-[13px]'>html</li>
                                            <li className='text-[13px]'>JS</li>
                                            <li className='text-[13px]'>Bootstap</li>
                                            <li className='text-[13px]'>FontAwesome</li>
                                        </ul>
                                    </div>
                            </div>
                    </div>
                    <div className="show-more card  bg-[#3e4555] p-4 cursor-pointer rounded hover:-translate-y-2 transition-all">
                            <div className="card-body flex flex-col justify-evenly min-h-[30vh] px-2">
                                     <div className="card-header">
                                        <h5 className="card-title flex justify-between text-xl mb-10">
                                            <span className='text-[#61a796] text-3xl'><ion-icon name="folder-outline"></ion-icon></span>
                                            <span className='text-white'>
                                                <a href="https://github.com/Jagrati1213/shade-up" target ="_blank" ><ion-icon name="logo-github"></ion-icon> </a>
                                                 <a href="https://jagrati1213.github.io/shade-up/" target ="_blank" ><ion-icon name="share-social-outline"></ion-icon></a>
                                             </span>
                                        </h5>
                                        <h6 className="card-subtitle mb-2 text-[#dae1fa] text-2xl font-semibold">JS Color Generator</h6>
                                        <p className="card-text text-gray-400">It was JS project. here we can generate rgb,hex color code.</p>
                                     </div>

                                    <div className="card-footer">
                                        <ul className="card-skills flex justify-between text-[#61a796]">
                                            <li className='text-[13px]'>html</li>
                                            <li className='text-[13px]'>JS</li>
                                            <li className='text-[13px]'>Css</li>
                                            <li className='text-[13px]'>Bootstrap</li>
                                            <li className='text-[13px]'>FontAwesome</li>
                                            <li className='text-[13px]'>SetIntervals</li>
                                        </ul>
                                    </div>
                            </div>
                    </div>
                    <div className="show-more card  bg-[#3e4555] p-4 cursor-pointer rounded hover:-translate-y-2 transition-all">
                            <div className="card-body flex flex-col justify-evenly min-h-[30vh] px-2">
                                     <div className="card-header">
                                        <h5 className="card-title flex justify-between text-xl mb-10">
                                            <span className='text-[#61a796] text-3xl'><ion-icon name="folder-outline"></ion-icon></span>
                                            <span className='text-white'>
                                                <a href="https://github.com/Jagrati1213/rock-paper-scissor" target ="_blank" ><ion-icon name="logo-github"></ion-icon> </a>
                                                 <a href="https://jagrati1213.github.io/rock-paper-scissor/" target ="_blank" ><ion-icon name="share-social-outline"></ion-icon></a>
                                             </span>                                        </h5>
                                        <h6 className="card-subtitle mb-2 text-[#dae1fa] text-2xl font-semibold">JS Rock Paper Scissor Game</h6>
                                        <p className="card-text text-gray-400">It was JS project.Here you can play with BOT</p>
                                     </div>

                                    <div className="card-footer">
                                        <ul className="card-skills flex justify-between text-[#61a796]">
                                            <li className='text-[13px]'>html</li>
                                            <li className='text-[13px]'>JS</li>
                                            <li className='text-[13px]'>Bootstrap</li>
                                            <li className='text-[13px]'>FontAwsome</li>
                                        </ul>
                                    </div>
                            </div>
                    </div>
                    <div className="show-more card  bg-[#3e4555] p-4 cursor-pointer rounded hover:-translate-y-2 transition-all">
                            <div className="card-body flex flex-col justify-evenly min-h-[30vh] px-2">
                                     <div className="card-header">
                                        <h5 className="card-title flex justify-between text-xl mb-10">
                                            <span className='text-[#61a796] text-3xl'><ion-icon name="folder-outline"></ion-icon></span>
                                            <span className='text-white'>
                                                <a href="https://github.com/Jagrati1213/password-generator" target ="_blank" ><ion-icon name="logo-github"></ion-icon> </a>
                                                 <a href="https://jagrati1213.github.io/password-generator/" target ="_blank" ><ion-icon name="share-social-outline"></ion-icon></a>
                                             </span>                                        </h5>
                                        <h6 className="card-subtitle mb-2 text-[#dae1fa] text-2xl font-semibold">JS Password Generator</h6>
                                        <p className="card-text text-gray-400">It was JS project. Where you can generate related Passwords</p>
                                     </div>

                                    <div className="card-footer">
                                        <ul className="card-skills flex justify-between text-[#61a796]">
                                            <li className='text-[13px]'>html</li>
                                            <li className='text-[13px]'>JS</li>
                                            <li className='text-[13px]'>Bootstap</li>
                                            <li className='text-[13px]'>FontAwesome</li>
                                            
                                        </ul>
                                    </div>
                            </div>
                    </div>
                    <div className="show-more card  bg-[#3e4555] p-4 cursor-pointer rounded hover:-translate-y-2 transition-all">
                            <div className="card-body flex flex-col justify-evenly min-h-[30vh] px-2">
                                     <div className="card-header">
                                        <h5 className="card-title flex justify-between text-xl mb-10">
                                            <span className='text-[#61a796] text-3xl'><ion-icon name="folder-outline"></ion-icon></span>
                                            <span className='text-white'>
                                                <a href="https://github.com/Jagrati1213/Quizgame" target ="_blank" ><ion-icon name="logo-github"></ion-icon> </a>
                                                 <a href="https://jagrati1213.github.io/Quizgame/" target ="_blank" ><ion-icon name="share-social-outline"></ion-icon></a>
                                             </span>                                        </h5>
                                        <h6 className="card-subtitle mb-2 text-[#dae1fa] text-2xl font-semibold">JS Quizgame</h6>
                                        <p className="card-text text-gray-400">It was JS project. Where you can ans the related questions</p>
                                     </div>

                                    <div className="card-footer">
                                        <ul className="card-skills flex justify-between text-[#61a796]">
                                            <li className='text-[13px]'>html</li>
                                            <li className='text-[13px]'>JS</li>
                                            <li className='text-[13px]'>Bootstap</li>
                                            <li className='text-[13px]'>FontAwesome</li>
                                        </ul>
                                    </div>
                            </div>
                    </div>
                    <div className="show-more card  bg-[#3e4555] p-4 cursor-pointer rounded hover:-translate-y-2 transition-all">
                            <div className="card-body flex flex-col justify-evenly min-h-[30vh] px-2">
                                     <div className="card-header">
                                        <h5 className="card-title flex justify-between text-xl mb-10">
                                            <span className='text-[#61a796] text-3xl'><ion-icon name="folder-outline"></ion-icon></span>
                                            <span className='text-white'>
                                                <a href="https://github.com/Jagrati1213/Tictacteo" target ="_blank" ><ion-icon name="logo-github"></ion-icon> </a>
                                                 <a href="https://jagrati1213.github.io/Tictacteo/" target ="_blank" ><ion-icon name="share-social-outline"></ion-icon></a>
                                             </span>                                        </h5>
                                        <h6 className="card-subtitle mb-2 text-[#dae1fa] text-2xl font-semibold">JS TicTacTeo</h6>
                                        <p className="card-text text-gray-400">It was JS project. Where you can play with your friend.</p>
                                     </div>

                                    <div className="card-footer">
                                        <ul className="card-skills flex justify-between text-[#61a796]">
                                            <li className='text-[13px]'>html</li>
                                            <li className='text-[13px]'>JS</li>
                                            <li className='text-[13px]'>Bootstap</li>
                                            <li className='text-[13px]'>FontAwesome</li>
                                        </ul>
                                    </div>
                            </div>
                    </div>
                    <div className="show-more card  bg-[#3e4555] p-4 cursor-pointer rounded hover:-translate-y-2 transition-all">
                            <div className="card-body flex flex-col justify-evenly min-h-[30vh] px-2">
                                     <div className="card-header">
                                        <h5 className="card-title flex justify-between text-xl mb-10">
                                            <span className='text-[#61a796] text-3xl'><ion-icon name="folder-outline"></ion-icon></span>
                                            <span className='text-white'>
                                                <a href="https://github.com/Jagrati1213/clock" target ="_blank" ><ion-icon name="logo-github"></ion-icon> </a>
                                                 <a href="https://jagrati1213.github.io/clock/" target ="_blank" ><ion-icon name="share-social-outline"></ion-icon></a>
                                             </span>                                        </h5>
                                        <h6 className="card-subtitle mb-2 text-[#dae1fa] text-2xl font-semibold">JS clock</h6>
                                        <p className="card-text text-gray-400">It was JS project. Where you can see current Time.</p>
                                     </div>

                                    <div className="card-footer">
                                        <ul className="card-skills flex justify-between text-[#61a796]">
                                            <li className='text-[13px]'>html</li>
                                            <li className='text-[13px]'>JS</li>
                                            <li className='text-[13px]'>Bootstap</li>
                                            <li className='text-[13px]'>FontAwesome</li>
                                        </ul>
                                    </div>
                            </div>
                    </div>

                 </div>
                  <button onClick={showMore} className='showMore border-2 border-emerald-600 text-base text-emerald-600 p-3 rounded-sm my-20 transition-all hover:text-black hover:bg-emerald-500'>Show More</button>

                  <div className="profile-links flex lg:w-[60%] w-[80%] justify-center">
                     <span className='text-3xl text-white lg:mx-12 mx-2 cursor-pointer hover:text-emerald-600'>
                        <a href="https://github.com/Jagrati1213" target='_blank'><ion-icon name="logo-github"></ion-icon></a></span>
                     <span className='text-3xl text-white lg:mx-12 mx-2 cursor-pointer hover:text-emerald-600'>
                        <a href="https://www.linkedin.com/in/jagrati-gupta-abbb43217/" target='_blank'><ion-icon name="logo-linkedin"></ion-icon></a></span>
                     <span className='text-3xl text-white lg:mx-12 mx-2 cursor-pointer hover:text-emerald-600'>
                        <a href="https://twitter.com/home" target='_blank'><ion-icon name="logo-twitter"></ion-icon></a></span>
                  </div>
             </div>
        </section>
    </>
  )
}

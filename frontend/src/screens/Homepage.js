import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAt, faMapMarkerAlt, faPhoneAlt, faPlus, faQuoteRight } from "@fortawesome/free-solid-svg-icons"
import {faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom'

import Solution1 from "../img/solution1.png"
import Solution2 from "../img/solution2.png"
import Solution3 from "../img/solution3.png"

import Persona1 from "../img/persona1.png"

const Homepage = () => {
    return (
        <div>
            {/* Header */}
            <div className="homepage-background jumbotron">
                <div className="  border-b border-gray-200">
                    <div className="h-16 max-w-6xl mx-auto flex justify-between items-center">
                        <h2 className="text-white">Welcome to SDPR</h2>
                        <div className="space-x-8 text-white ">
                            <span className="inline-flex items-center"> <FontAwesomeIcon className=' mr-1 text-lg' icon={faPhoneAlt} />  +1-541-754-3010</span>
                            <span className="inline-flex items-center"> <FontAwesomeIcon className=' mr-1 text-lg' icon={faMapMarkerAlt} /> 3261 Anmore Road, NY 11230</span>
                            <span className="inline-flex items-center"> <FontAwesomeIcon className=' mr-1 text-lg' icon={faAt} /> johnsonolaolu@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className=" grow flex items-center max-w-6xl mx-auto mt-40">
                    <div className="">
                        <span className="text-sm text-gray-200 mb-2">Welcome to SDPR</span>
                        <h1 className=" max-w-lg font-Dosis text-white text-6xl font-bold">A Machine Learning Recommendation System</h1>
                        <Link to="/dashboard/service1" href="" className="shadow-lg mt-14 flex justify-center items-center h-10 w-40 rounded-full bg-amber-500 font-Dosis font-semibold text-white">Get Started</Link>
                    </div>
                </div>
            </div>

            {/* featured solutions */}
            <div className="featured-solutions mt-20 max-w-6xl mx-auto">
                <div className=" text-center max-w-2xl mx-auto">
                    <h2 className=" text-gray-800 max-w-md mx-auto text-4xl font-Dosis font-bold">Our Featured Solutions</h2>
                    <p className=" text-gray-600">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </p>
                </div>
                <div className=" flex justify-between mt-28">
                    <div className=" w-80">
                        <div className="h-44 w-56 items-end">
                            <img src={Solution1} alt="" className=" w-full" />
                        </div>
                        <div className="mt-5 space-y-4">
                            <h4 className="text-gray-800 text-2xl font-Dosis font-bold">Our Featured Solutions</h4>
                            <p className=" text-gray-600">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore </p>
                            <Link href="" className=" text-amber-500 font-bold inline-flex items-center">Read More <FontAwesomeIcon icon={faPlus} className='text-gray-600 text-xs ml-2' /></Link>
                        </div>
                    </div>
                    <div className=" w-80">
                        <div className="h-44 w-56 flex items-end">
                            <img src={Solution2} alt="" className=" w-full" />
                        </div>
                        <div className="mt-5 space-y-4">
                            <h4 className="text-gray-800 text-2xl font-Dosis font-bold">Our Featured Solutions</h4>
                            <p className=" text-gray-600">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore </p>
                            <Link href="" className=" text-amber-500 font-bold inline-flex items-center">Read More <FontAwesomeIcon icon={faPlus} className='text-gray-600 text-xs ml-2' /></Link>
                        </div>
                    </div>
                    <div className=" w-80">
                        <div className="h-44 w-56 flex items-end">
                            <img src={Solution3} alt="" className=" w-full" />
                        </div>
                        <div className="mt-5 space-y-4">
                            <h4 className="text-gray-800 text-2xl font-Dosis font-bold">Our Featured Solutions</h4>
                            <p className=" text-gray-600">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore </p>
                            <Link href="" className=" text-amber-500 font-bold inline-flex items-center">Read More <FontAwesomeIcon icon={faPlus} className='text-gray-600 text-xs ml-2' /></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Clients */}
            <div className="our-clients mt-16 h-72">
                <div className="max-w-6xl mx-auto"></div>
            </div>

            {/* Testimonials */}
            <div className="testimonials mt-20">
                <div className=" text-center max-w-2xl mx-auto">
                    <h2 className=" text-gray-800 max-w-md mx-auto text-4xl font-Dosis font-bold">Here Is What Our Clients Have To Say</h2>
                </div>
                <div className=" mt-20 grid grid-cols-2 max-w-6xl mx-auto justify-items-center">

                    <div className=" relative">
                        <div style={{ background: "#08756F" }} className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 h-14 w-14 rounded-full flex justify-center items-center shadow-lg">
                            <FontAwesomeIcon icon={faQuoteRight} className=' text-amber-500 text-2xl transform rotate-180' />
                        </div>
                        <div className="qoutebox  h-44 w-80 py-10 px-6 rounded-lg shadow-2xl">
                            <p className=" font-bold text-gray-600 font-Dosis">"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero"</p>
                        </div>
                        <div className="mt-7 pl-4 flex space-x-5 items-center">
                            <div className=" h-12 w-12 rounded-full ">
                                <img src={Persona1} alt="" className=" w-full" />
                            </div>
                            <div className="">
                                <h6 className=" font-Dosis font-bold text-gray-800">Edward Bennet</h6>
                                <span className="text-sm text-gray-600">CEO Edward Inc.</span>
                            </div>
                        </div>
                    </div>

                    <div className=" relative">
                        <div style={{ background: "#08756F" }} className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 h-14 w-14 rounded-full flex justify-center items-center shadow-lg">
                            <FontAwesomeIcon icon={faQuoteRight} className=' text-amber-500 text-2xl transform rotate-180' />
                        </div>
                        <div className="qoutebox  h-44 w-80 py-10 px-6 rounded-lg shadow-2xl">
                            <p className=" font-bold text-gray-600 font-Dosis">"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero"</p>
                        </div>
                        <div className="mt-7 pl-4 flex space-x-5 items-center">
                            <div className=" h-12 w-12 rounded-full ">
                                <img src={Persona1} alt="" className=" w-full" />
                            </div>
                            <div className="">
                                <h6 className=" font-Dosis font-bold text-gray-800">Edward Bennet</h6>
                                <span className="text-sm text-gray-600">CEO Edward Inc.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className=" mt-24 h-96">
                <div className="footer py-20">
                    <div className="max-w-6xl mx-auto flex items-start space-x-5">
                        <div className="w-64">
                            <h2 className=" text-6xl font-bold text-white font-Dosis">SDPR</h2>
                            <p className=" text-white mt-7">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy </p>
                            <div className="social-media flex space-x-2 mt-6">
                                <a href="#" className="">
                                    <div className="h-8 w-8 rounded-full flex justify-center items-center bg-white">
                                        <FontAwesomeIcon style={{color : "#08756F"}}  icon={faFacebookF}/>
                                    </div>
                                </a> 
                                <a href="#" className="">
                                    <div className="h-8 w-8 rounded-full flex justify-center items-center bg-white">
                                        <FontAwesomeIcon style={{color : "#08756F"}}  icon={faTwitter}/>
                                    </div>
                                </a> 
                                <a href="#" className="">
                                    <div className="h-8 w-8 rounded-full flex justify-center items-center bg-white">
                                        <FontAwesomeIcon style={{color : "#08756F"}}  icon={faInstagram}/>
                                    </div>
                                </a> 
                                <a href="#" className="">
                                    <div className="h-8 w-8 rounded-full flex justify-center items-center bg-white">
                                        <FontAwesomeIcon style={{color : "#08756F"}}  icon={faLinkedinIn}/>
                                    </div>
                                </a> 
                            </div>
                        </div>
                        <div className="grid grid-cols-3 flex-grow ">
                            <div className="footer-menu-item">
                                <h2 className=" font-Dosis text-xl font-bold text-white ">Services</h2>
                                <ul className="mt-7 space-y-5">
                                    <li className=""><a href="#" className=" text-white">Service 1</a></li>
                                    <li className=""><a href="#" className=" text-white">Service 2</a></li>
                                    <li className=""><a href="#" className=" text-white">Service 3</a></li>
                                </ul>
                            </div>
                            <div className="footer-menu-item">
                                <h2 className=" font-Dosis text-xl font-bold text-white ">Quicklinks</h2>
                                <ul className="mt-7 space-y-5">
                                    <li className=""><a href="#" className=" text-white">About Us</a></li>
                                    <li className=""><a href="#" className=" text-white">Features</a></li>
                                    <li className=""><a href="#" className=" text-white">Blog</a></li>
                                    <li className=""><a href="#" className=" text-white">Team</a></li>
                                    <li className=""><a href="#" className=" text-white">Contact</a></li>
                                </ul>
                            </div>
                            <div className="footer-menu-item">
                                <h2 className=" font-Dosis text-xl font-bold text-white ">Contact</h2>
                                <ul className="mt-7 space-y-5">
                                    <li className=" text-white"><span className="font-bold mr-1">Address:</span>3261 Anmore Road, NY 11230, Canada</li>
                                    <li className=" text-white"><span className="font-bold mr-1">Email:</span>johnsonolaolu@gmail.com</li>
                                    <li className=" text-white"><span className="font-bold mr-1">Phone:</span>+1-541-754-30103</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Homepage

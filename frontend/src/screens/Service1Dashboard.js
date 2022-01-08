import { faArrowRight, faAt, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import service1DashboardImg from '../img/service1-dashboard img.png'

const Service1Dashboard = () => {
    return (
        <div>
            {/* dahboard */}
            <div className="service1-dashboard">
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
                <div className=" py-8 max-w-6xl mx-auto ">
                    <div className=" border-2 border-dashed border-white p-16 ">
                        <div className="text-center ">
                            <img src={service1DashboardImg} alt="" className="mx-auto w-56" />
                            <h4 className=" text-6xl text-white font-Dosis font-bold mt-2">Upload Csv File</h4>
                            <p className=" text-gray-200 mt-4">Welcome to SDPR</p>
                            <button className=' mt-4  flex justify-center items-center h-10 w-40 rounded-full bg-blue-500 font-Dosis font-semibold text-white mx-auto'> Upload File</button>
                        </div>
                    </div>
                    <div className="">
                        <div className="py-12 max-w-6xl mx-auto flex justify-between items-center">
                            <button className=' mt-4  flex items-center h-10 pl-8 pr-3 rounded-full bg-amber-500 shadow-lg font-Dosis font-semibold text-white mx-auto'>
                                Run Recommendation
                                <FontAwesomeIcon icon={faArrowRight}  className='ml-7 text-lg'/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service1Dashboard

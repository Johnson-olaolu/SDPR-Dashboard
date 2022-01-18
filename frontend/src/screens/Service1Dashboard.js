import { faArrowRight, faAt, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import axios from 'axios'

import service1DashboardImg from '../img/service1-dashboard img.png'
import { useHistory } from 'react-router-dom'

const Service1Dashboard = () => {
    const history = useHistory()
    const [fileSelected, setFileSelected] = useState(false)
    const [fileName, setFileName] = useState(null)
    const [file, setFile] = useState(null)
    const onClickUploadFile = () => {
        const selectFile = document.createElement("input")
        selectFile.type = "file"
        selectFile.name = "file"
        selectFile.addEventListener("change", function (e) {
            console.log(e)
            setFileSelected(true)
            setFileName(e.path[0].files[0].name)
            var formData = new FormData();
            formData.append("file", selectFile.files[0])
            setFile(formData)
            console.log(formData)
        })
        selectFile.click()
    }

    const onClickRunRecommendation = ()=> {
        console.log("recommend")
        axios.post("/predictor", file)
            .then(response => {
                console.log(response )
                history.push("/dashbord/multi-prediction", 
                {
                    studentData : response.data
                })
            })
            .catch(err => {
                console.error(err);
            })
    }
    return (
        <div>
            {/* dahboard */}
            <div className="green-background">
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
                            <button disabled={fileSelected} className=' mt-4  flex justify-center items-center h-10 w-40 rounded-full bg-blue-500 font-Dosis font-semibold text-white mx-auto disabled:bg-blue-200'
                                onClick={onClickUploadFile}> Upload File</button>
                        </div>
                    </div>
                    <div className="">
                        <div className="py-12 max-w-6xl mx-auto flex justify-between items-center">
                            <button className=' mt-4  flex items-center h-10 pl-8 pr-3 rounded-full bg-amber-500 shadow-lg font-Dosis font-semibold text-white mx-auto'
                            onClick={onClickRunRecommendation}>
                                Run Recommendation
                                <FontAwesomeIcon icon={faArrowRight} className='ml-7 text-lg' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service1Dashboard

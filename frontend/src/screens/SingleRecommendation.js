import axios from 'axios'
import { CompeteStudentData } from '../store'
import React, { useContext, useEffect, useState } from 'react'

const SingleRecommendation = ({ match ,  location }) => {
    const [student, setStudent] = useState({});
    const [recommendations, setRecommendations] = useState([])
    const completeStudent = useContext(CompeteStudentData).completeStudent
    
    useEffect(() => {
        const id = match.params.id
        console.log(id)
        const selectedStudent = completeStudent.filter(singleStudent => singleStudent.StudentID == id)
        console.log(selectedStudent)
        setStudent(selectedStudent[0])
        console.log(location)
        axios.post(`/recommendation` , {student : selectedStudent[0]})
            .then(res => {
                console.log(res)
                setRecommendations(res.data.recommendations)
            })
            .catch(err => {
                console.error(err.response);
            })
        //console.


    }, [])
    return (
        <div>
            <div className="h-40 green-background flex justify-center items-center">
                <h2 className=" text-4xl text-white font-medium">{`Student ID: ${student.StudentID}`}</h2>
            </div>
            <div className=" container mx-auto mt-10">
                <h2 className=" text-3xl text-gray-500">Recommendations</h2>
                <ul className="mt-2">
                    {recommendations.map(recommendation => (
                        <li className=" text-gray-700 py-1 text-xl">{recommendation}</li>
                    ))}
                </ul>
            </div>


        </div>
    )
}

export default SingleRecommendation

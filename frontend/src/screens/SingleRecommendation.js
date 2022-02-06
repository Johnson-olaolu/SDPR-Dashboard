import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SingleRecommendation = ({ match ,  location }) => {
    const [student, setStudent] = useState({})
    const [recommendations, setRecommendations] = useState([])
    useEffect(() => {
        // const id = match.params.id
        setStudent(location.state.selectedStudent)
        console.log(location)
        axios.post(`/recommendation` , {student :location.state.selectedStudent})
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

import React from 'react'
import { Link } from 'react-router-dom'

import PersonImage from '../img/Ic_person_48px.svg.png'
const TableRow = ({student , onClickPrediction}) => {
    return (
        <tr >
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src={PersonImage} alt="" />
                    </div>
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{student.StudentID}</div>
                        {/* <div className="text-sm text-gray-500">Student Name</div> */}
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{student.TermGPA}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                {student.prediction == 0 ? (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                    </span>
                ) : (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        Dropout
                    </span>
                )}

            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">student</td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                {student.prediction != 0 ? (
                    <span className="text-indigo-600 hover:text-indigo-900" onClick={() => onClickPrediction(student.StudentID)}>View Recommendations</span>
                ) : null}
            </td>
        </tr>
    )
}

export default TableRow

import React, { useEffect, useState } from 'react'
import TableRow from '../components/TableRow'


const MultiplePredictionScreen = ({ location }) => {

    const [studentDataView, setStudentDataView] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [numPages, setNumPages] = useState([1,2,3,4,5])
    useEffect(() => {
        const studentData = location.state.studentData
        if ((studentData.length / 100) > 1) {

            // var pages = 
            //  Array.from(Array(()).keys())
            
            // setNumPages()
            var startNumber = 10 * (pageNumber - 1)
            var endNumber = (10 * pageNumber) - 1
            setStudentDataView(studentData.slice(startNumber, endNumber))
        }else {
            setStudentDataView(studentData)
        }

    }, [pageNumber])
    return (
        <div>
            <div className="h-40 green-background flex justify-center items-center">
                <h2 className=" text-4xl text-white">View Student Data</h2>
            </div>
            <div className=" container mx-auto mt-10">
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="green-background">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                                            >
                                                Student Details
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                                            >
                                                CGPA
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                                            >
                                                Status
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                                            >
                                                Role
                                            </th>
                                            <th scope="col" className="relative px-6 py-3">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {studentDataView.map((student) => (
                                            <TableRow student={student} />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10 max-w-4xl mx-auto grid grid-cols-12 gap-2 justify-evenly">
                { numPages.map((page, index) =>(
                    <div key={index} className=" h-10 w-10 rounded-full green-background text-white font-bold flex justify-center items-center ">{page}</div>
                ) ) }
            </div>
        </div>
    )
}

export default MultiplePredictionScreen

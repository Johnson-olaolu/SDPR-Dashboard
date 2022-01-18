import React from 'react'

// const student = {
//     BirthYear: 1978,
//     Complete1: 0,
//     CompleteCIP1: -2,
//     CompleteDevEnglish: -2,
//     CompleteDevMath: -2,
//     CumGPA: 3.54,
//     CumLoanAtEntry: -1,
//     EngPlacement: 0,
//     EnrollmentStatus: 2,
//     "Father's Highest Grade Level": 1,
//     GatewayEnglishStatus: 0,
//     HSDip: 1,
//     HighDeg: 0,
//     Major1: 51.1699,
//     NumColCredAcceptTransfer: 0,
//     NumColCredAttemptTransfer: 0,
//     StudentID: 285848,
//     TermGPA: 3.8,
//     "Total Grant": 0,
//     "Total Loan": 35000,
//     "Total Scholarship": 0,
//     "Total Work/Study": 0,
//     prediction: 0
// }
const TableRow = ({student}) => {
    return (
        <tr >
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60' alt="" />
                    </div>
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{student.StudentID}</div>
                        <div className="text-sm text-gray-500">Student Name</div>
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
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                       View Recommendations
                    </a>
                ) : null}
            </td>
        </tr>
    )
}

export default TableRow

import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Tugas7List = () => {
    
    let navigate = useNavigate()
    
    const [ student, setStudent ] = useState(null)

    const [ input, setInput ] = useState(
        {
            name : '',
            course : '',
            score : 0
        }
    )

    //indikator
    const [fetchStatus, setfetchStatus] = useState(true)
    const [currentId, setCurrentId] = useState(-1)

    const fetchData = () => {
        axios.get(`https://backendexample.sanbercloud.com/api/student-scores`)
        .then((e) => {
            //console.log(e.data)
            let data = e.data

            setStudent(data)
        })
    }

    useEffect(() => {
        if (fetchStatus === true) {
            fetchData()
            setfetchStatus(false)
        }
    },[fetchStatus,setfetchStatus])

    //console.log(fetchStatus)

    const handleindexscore = (param) => {
        if (param == null) {
            return "-"
        } else {
            if (param >= 80) {
                return "A"
            } else if (param >= 70 && param < 80) {
                return "B"
            } else if (param >= 60 && param < 70) {
                return "C"
            } else if (param >=50 && param < 60) {
                return "D"
            } else {
                return "E"
            }
        }
    }


    const handleDelete = (e) => {
        let idData = e.target.value

        axios.delete(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
        .then((e) => {
            setfetchStatus(true)
        })
    }

    const handleEdit = (e) => {

        let idData = parseInt(e.target.value)
        //console.log(idData)

        axios.get(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
        .then((e) => {
            let data = e.data
            console.log(data)

            setCurrentId(data.id)
            navigate(`/edit/${idData}`)


            setInput(
                {
                    name : data.name,
                    course : data.course,
                    score : data.score
                }
            )
        })
    }
    return(
        <>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 mt-10">
        <Link to="/edit/:idData"><button type="button" className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-3">Create Data</button></Link>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                    <th scope="col" className="px-6 py-3 blue">
                        NO
                    </th>
                    <th scope="col" className="px-6 py-3">
                        NAMA
                    </th>
                    <th scope="col" className="px-6 py-3">
                        MATA KULIAH
                    </th>
                    <th scope="col" className="px-6 py-3">
                        NILAI
                    </th>
                    <th scope="col" className="px-6 py-3">
                        INDEX NILAI
                    </th>
                    <th scope="col" className="px-6 py-3">
                        ACTION
                    </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        student != null && student.map((e, index) => {
                            return(
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap darktext-white">
                                        {index + 1}
                                    </th>
                                    <td className="px-6 py-4">
                                        {e.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {e.course}
                                    </td>
                                    <td className="px-6 py-4">
                                        {e.score}
                                    </td>
                                    <td className="px-6 py-4">
                                        {handleindexscore(e.score)}
                                    </td>
                                    <td>
                                        <Link><button onClick={handleEdit} value={e.id} type="button" className="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Edit</button></Link>
                                        <button onClick={handleDelete} value={e.id} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Tugas7List
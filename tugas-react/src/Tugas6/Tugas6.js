import axios from "axios";
import React, { useEffect, useState } from "react";

const Tugas6 = () => {

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

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        //console.log(name)
        setInput({...input, [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        //console.log(input)
        let {name,course,score} = input

        if (currentId === -1) {
            axios.post('https://backendexample.sanbercloud.com/api/student-scores', {name,course,score})
            .then((e) => {
                console.log(e)
                setfetchStatus(true)
        })
        .catch((err) => console.log(err))
        } else {
            axios.put(`https://backendexample.sanbercloud.com/api/student-scores/${currentId}`, {name,course,score})
            .then((e) => {
            console.log(e)
            setfetchStatus(true)
        })
        .catch((err) => console.log(err))
        }

        setCurrentId(-1)
        setInput(
            {
                name : '',
                course : '',
                score : 0
            }
        )
    }

    const handleDelete = (e) => {
        let idData = e.target.value

        axios.delete(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
        .then((e) => {
            setfetchStatus(true)
        })
    }

    const handleEdit = (e) => {
        let idData = e.target.value
        //console.log(idData)

        axios.get(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
        .then((e) => {
            let data = e.data
            console.log(data)

            setCurrentId(data.id)

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
        <div className="relative overflow-x-auto w-1/2 border m-auto mt-10">
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
                                    <button onClick={handleEdit} value={e.id} type="button" className="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Edit</button>
                                    <button onClick={handleDelete} value={e.id} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </table>
        </div>

        <form className="w-1/2 border m-auto mt-10w-1/2 border m-auto mt-10" onSubmit={handleSubmit} method="POST">
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input onChange={handleChange} value={input.name} name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
            </div>

            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mata Kuliah</label>
                <input onChange={handleChange} value={input.course} name="course" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mata Kuliah" required />
            </div>

            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nilai</label>
                <input onChange={handleChange} value={input.score} type={'number'} name="score" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nilai" required />
            </div>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
      </>
    )
}

export default Tugas6
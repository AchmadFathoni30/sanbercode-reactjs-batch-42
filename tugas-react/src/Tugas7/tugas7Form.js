import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Tugas7Form = () => {

    let Navigate = useNavigate()

    const handleEdit = (e) => {

        let idData = parseInt(e.target.value)
        //console.log(idData)

        axios.get(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
        .then((e) => {
            let data = e.data
            console.log(data)

            setCurrentId(data.id)
            Navigate(`/edit/${idData}`)


            setInput(
                {
                    name : data.name,
                    course : data.course,
                    score : data.score
                }
            )
        })
    }

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

    const handleSubmit = (e) => {
        e.preventDefault()

        //console.log(input)
        let {name,course,score} = input

        if (currentId === -1) {
            axios.post('https://backendexample.sanbercloud.com/api/student-scores', {name,course,score})
            .then((e) => {
                console.log(e)
                setfetchStatus(true)
                Navigate("/tugas7")
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

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        //console.log(name)
        setInput({...input, [name] : value})
    }

    return(
        <>
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

export default Tugas7Form
import axios from "axios";
import React, { useEffect, useState } from "react";

const Tugas5 = () => {

    const [ student, setStudent ] = useState()

    useEffect(() => {
        axios.get(`https://backendexample.sanbercloud.com/api/student-scores`)
        .then((e) => {
            //console.log(e.data)
            let data = e.data

            setStudent(data)
        })

    },[])

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

    return(
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
            </tr>
          </thead>
          <tbody>
            {
                student != null && student.map((e, index) => {
                    return(
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
                        </tr>
                    )
                })
            }
          </tbody>
        </table>
      </div>
    )
}

export default Tugas5
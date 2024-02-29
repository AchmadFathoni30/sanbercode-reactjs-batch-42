import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {

    const [data, setData] = useState(null)

    let {id} = useParams()
    //console.log(id)

    useEffect(() => {
        if (id !== undefined) {
            axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`)
            .then((res) => {
                //console.log(res)
                setData(res.data)
            })
        }
    }, [])

    //console.log(data)

    return(
        <div>
            {
                data?.company_name
            }
        </div>
    )
}

export default Detail
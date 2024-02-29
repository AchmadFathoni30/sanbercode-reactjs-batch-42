import React, { useState } from "react";
import "../style/Tugas.css";

const Article = () =>{
    const [display, setDisplay] = useState(true)

    const onClose = () =>{
        setDisplay(display == true ? false : true)
    }
    return(
        <div className="artikel">
            <h1>Judul Arikel</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="botton-section">
                {
                    display &&
                    <>
                        <img src="https://cdn.pixabay.com/photo/2017/05/11/08/48/woman-2303361__340.jpg" className="img-section"/>
                        <p><code>posted by : 15 Maret 2023</code></p>
                    </>
                }
                
                <button onClick={onClose}>Sembunyikan Pembuat Artikel</button>
            </div>
        </div>
    )
}

export default Article
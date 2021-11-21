import React from "react";
import Elemento from "./Elemento";
import { useState } from "react";
import fondo from './graf2.jpg';


const Elementos = ({ nfts = [] }) => {

    const [activo, setActivo] = useState(nfts[0]);

    const handleClick = (uno) => {

        setActivo(uno);
        return (
            <div>
                <Elemento elem={uno} />
            </div>
        )
    }

    console.log(nfts);
    console.log(nfts[0]);
    return (
        <div className="row">
            <div className="container">
                <div className="row">
                    <div  className="col-lg-6">
                        <Elemento elem={activo} />
                    </div>
                    <div className="col-lg-6 p-1">

                        <div className="row">
                            {nfts.map((item, index) => (
                                <div key={index} className="col-lg-4">
                                   
                                    <div  style={{fontSize:`20px`, backgroundImage:`url(${fondo})`}} className="card text-white bg-info m-3" >
                                        <button className="page-link bg-info m-0 p-0" onClick={() => handleClick(item)}>
                                            <img  className="img-fluid rounded" src={item.image} alt="" onClick={() => handleClick(item)} />
                                        </button>
                                        <p className="text-center">{item.name}</p>
                                    </div>
                                    
                                </div>
                            ))}
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    )

}

export default Elementos
import React from 'react';
import Listado from './Listado';
import grid from './hexagrid.png';


const Elemento = ({ elem }) => {
    const divStyle = {
        color: 'darkblue'
    };
   
    return (
        <div >
            <div className="row">

                <div className="col-lg-12">
                    <div className="card text-white bg-info m-1 p-1" style={{fontSize:`20px`, backgroundImage:`url(${grid})`}} >
                        <div className="row">
                            <div className="col-lg-6">
                                <img className="img-fluid rounded" src={elem.image} alt="" />
                                <div className="card-img-overlay" >
                                    <h2 className="text-left " style={divStyle}>{elem.name}</h2>
                                    </div>
                                    <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            {Object.keys(elem.attributes).map((key, index) => (
                                                <div key={index}>{key} :</div>
                                            ))}
                                        </div>
                                        <div className="col-lg-6">
                                            {Object.values(elem.attributes).map((key, index) => (
                                                <div key={index}>{key}</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="col-lg-6 mt-1" >
                                <div >{elem.description}</div>
                                <div>{console.log(elem.attributes.rarity)}</div>
                                {console.log(elem)}
                            </div>
                        </div>
                    </div>
                    {elem.attributes.category === "ship" ?
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card text-white bg-info mt-10px" style={{fontSize:`20px`, backgroundImage:`url(${grid})`}}>
                                
                                    <div className="row">
                                        <div className="col-lg-4"> <b>CREW</b><br/><Listado ficha={elem.slots.crewSlots} /> </div>
                                        <div className="col-lg-4"> <b>COMPONENTS</b><br/> <Listado ficha={elem.slots.componentSlots} /></div>
                                        <div className="col-lg-4"> <b>MODULES</b><br/><Listado ficha={elem.slots.moduleSlots} /></div>
                                    </div>
                                    
                            </div>
                        </div>
                    </div>
                    : ""}


                </div>

            </div>
        </div>
    )


}

export default Elemento
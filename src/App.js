import React, { useState, useEffect } from "react";
import Elementos from "./components/Elementos";
import Api from "./components/Api.json";
import fondo from './components/verde.jpg';

function App() {
  const url = "https://galaxy.staratlas.com/nfts";
  const [inventario, setInventario] = useState([]);
  const [filtro, setFiltro] = useState("ship");

  const fetchInventory = async (url) => {
    await fetch(url)
      .then(Response => Response.json())
      .then(data => setInventario(data))
      .catch(error => console.log(error))


  };

  useEffect(() => {
    fetchInventory(url);
  }, [])

  const handleBoton = (nuevofiltro) => {
    setFiltro(nuevofiltro);
    console.log(nuevofiltro);

    <Elementos nfts={Api.filter(item => item.attributes.category === filtro)} />



  };

  const categorias = Api.map((item) => (item.attributes.category));
  console.log(categorias);
  console.log(categorias.indexOf(undefined));
  const categoriasValidadas = categorias.filter(item => item);
  console.log(categoriasValidadas);

  const categoriasUnicas = [...new Set(categoriasValidadas)];
  console.log(categoriasUnicas);



  return (
    <div >
      <div className="row">
        <div className="col text-center">
          <buttom style={{fontSize:`20px`, backgroundImage:`url(${fondo})`}} className="btn btn-primary btn-outline-dark black" type="button" onClick={() => handleBoton("rebirth")}>REBIRTH</buttom>
          <buttom style={{fontSize:`20px`, backgroundImage:`url(${fondo})`}} className="btn btn-primary btn-outline-info black" type="button" onClick={() => handleBoton("ship")}>SHIPS</buttom>
          <buttom style={{fontSize:`20px`, backgroundImage:`url(${fondo})`}} className="btn btn-primary btn-outline-info black" type="button" onClick={() => handleBoton("cosmetic")}>COSMETICS</buttom>
          <buttom style={{fontSize:`20px`, backgroundImage:`url(${fondo})`}} className="btn btn-primary btn-outline-info black" type="button" onClick={() => handleBoton("structure")}>STRUCTURES</buttom>
          <buttom style={{fontSize:`20px`, backgroundImage:`url(${fondo})`}} className="btn btn-primary btn-outline-info black" type="button" onClick={() => handleBoton("access")}>ACCESS</buttom>
          <buttom style={{fontSize:`20px`, backgroundImage:`url(${fondo})`}} className="btn btn-primary btn-outline-info black" type="button" onClick={() => handleBoton("crew")}>CREW</buttom>
          <buttom style={{fontSize:`20px`, backgroundImage:`url(${fondo})`}} className="btn btn-primary btn-outline-info black" type="button" onClick={() => handleBoton("equipment")}>EQUIPMENT</buttom>
        </div>

      </div>
      <Elementos nfts={Api.filter(item => item.attributes.category === filtro)} />
    </div>
  )
}

export default App;

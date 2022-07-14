import React, { useState, useEffect, Component } from 'react';


function SelectCategoria(props) {

    const url = 'http://localhost:3050/categorias';
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        fetch(url).then(res => res.json()).then(json => setCategorias(json.map(categoria => categoria.nombre)))
    });

    const handleAddrTypeChange = (e) => { props.setCategoria(e.target.value) }

    return (
        < select
            onChange={e => handleAddrTypeChange(e)}
            className="browser-default custom-select" >
            {
                categorias.map(name => <option key={name} value={name}>{name}</option>)
            }
        </select >)
}

export default SelectCategoria
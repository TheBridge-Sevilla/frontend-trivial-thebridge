import React, { useState, useEffect } from 'react';


function SelectCategoria(props) {

    const url = 'http://localhost:3050/categorias';
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        console.log('useffect categoria')
        fetch(url).then(res => res.json()).then(json => setCategorias(json.map(categoria => categoria.nombre)))
    },[]);
    const handleCategorias = (e) => { props.setCategoria(e.target.value) }
    return (
        < select onChange={(e) => handleCategorias(e)} >
            {
                categorias.map(name => <option key={name} value={name}>{name}</option>)
            }
        </select >)
}

export default SelectCategoria
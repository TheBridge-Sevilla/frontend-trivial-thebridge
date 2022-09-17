import React, { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';

function SelectCategoria(props) {

    const url = 'http://localhost:3050/categorias';
    const [categorias, setCategorias] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState();
    useEffect(() => {
        console.log('useffect categoria')
        fetch(url).then(res => res.json()).then(json => setCategorias(json.map(categoria => categoria.nombre)))
        console.log(categorias)
    }, []);
    const handleCategorias = (e) => { setCategoriaSeleccionada(e.value), props.setCategoria(e.target.value) }

    return (
        <Dropdown className='w-13rem'
            value={categoriaSeleccionada} options={categorias}
            onChange={(e) => handleCategorias(e)} placeholder="Categorias" />)
}

export default SelectCategoria
import React from 'react'
import "./creditos.css"
import { Sidebar } from 'primereact/sidebar'
import { useContextoUsuario } from '../../contexto/contextoUsuario'

export default function Creditos() {
  const { abrirFooter, setAbrirFooter } = useContextoUsuario();
  return (
    <Sidebar
      visible={abrirFooter}
      position="bottom"
      onHide={() => setAbrirFooter(false)}
      modal={false}
    >
      <div className='wrapper'>
        <div className='static-txt'>Hecho por</div>
        <ul className='dynamic-txts'>
          <a href='https://github.com/eduardoaguilar96'>
            <li>
              <span>eduardoaguilar96</span>
            </li>
          </a>
          <a href='https://github.com/franalvarez88'>
            <li>
              <span>franalvarez88 </span>
            </li>
          </a>
          <a href='https://github.com/swbatallas'>
            <li>
              <span>swbatallas </span>
            </li>
          </a>
          <a href='https://github.com/frapercanFS'>
            <li>
              <span>frapercan </span>
            </li>
          </a>
          <a href='https://github.com/idavid80'>
            <li>
              <span>idavid80</span>
            </li>
          </a>
          <a href='https://github.com/P-Kempf'>
            <li>
              <span>P-Kempf</span>
            </li>
          </a>
        </ul>
        <h4>Made with <span style={{ color: "#e25555" }}>&#9829;</span> by <a
          href='https://github.com/TheBridge-Sevilla'
          target="_blank"
          rel="noopener noreferrer">The bridge Sev</a></h4>
      </div>
    </Sidebar>
  )
}
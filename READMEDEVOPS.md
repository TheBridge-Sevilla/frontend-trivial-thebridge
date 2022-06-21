# Instalación de   Plugin de ESLint

ESLint es la herramienta predominante para la tarea de "limpiar" código javascript tanto en el servidor (node.js) como en el navegador.
```
npm install eslint-plugin-react-hooks --save-dev

```

## Configuración

```
// Tu configuración de ESLint en 
{
  "plugins": [
    // ...
    "react-hooks"
  ],
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
  }
}

```
## Iniciar Eslint

[Iniciar Eslint Tutorial](https://www.abibflores.dev/blog/configurar-eslint-en-un-proyecto-react-con-las-guias-de-estilo-de-airbnb-y-visual-studio-code)

## Instalación de JEST
```
npm i --save-dev jest

```

## Uso JEST

```
npm test 

```
Evitamos hacer largas pruebas manuales de diferentes funciones y ahorraremos mucho tiempo. Si hubiera algún fallo , es detectado y podemos acceder a él rápidamente.


```
npm test nombreArchivo

```
Con esta forma y escribiendo dentro del archivo:

```
test ('quiero probar si suma dos numeros') , () =>{
  expect(sum(1, 2)).toBe(3)
})

```

*La forma correcta de testear un archivo es hacerlo mediante una copia del archivo renombrada con archivo.test.js para no interummpir funcionamiento.



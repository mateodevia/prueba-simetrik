# Punto 3

Para ejecutar el proyecto de react donde se ilustra el funcionamiento del componente creado deben segir los siguientes pasos asumiento que estan parados en el directorio raíz del repositorio

### `cd punto-3`
### `npm install`
### `npm start`

Esto abrirá la aplicación en su navegador y estará corriendo en `http://localhost:3000`

Aclaracion 1: El componente se implemento de tal manera que recibe por props todo el set de datos entregados y el componente dinamicamente calcula los datos a mostrar en los gráficos. Esta funcionalidad adicional se implemento con el objetivo de que se puedan cambiar los datos fácilmente sin necesidad de hacer calculos, y que ademas, si en un futuro se quieren agregar otros graficos o visualizaciones, el componente ya cuenta con toda la información necesaria pera realizarlo.

Aclaración 2: En el enunciado se muestran unos pantallazos de las gráficas a replicar, y tambien se incluía un google sheet con los datos y las gráficas. En ncuanto a la gráfica de línea ,no era igual la del enunciado que la del google sheet, ya que la del google sheet incluía como último punto el total general. En la implementación del componente de React se construyó la gráfica correspondiente a la que se muestra en el enunciado. Se tomó esta decisión para que el eje x de la gráfica quedara consistente y en él se representara solamente la variable tiempo.

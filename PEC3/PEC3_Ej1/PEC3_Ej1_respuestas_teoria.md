**Nombre: Noelia López Galiana**

***Enumera y explica las principales ventajas que aporta el uso de TypeScript sobre JavaScript***


Typescript es un lenguaje que se basa en JavaScript pero que nos ofrece algunas ventajas en su uso respecto de su predecesor. Estas ventajas nos ayudan a que el código resulte más legible y mantenible. Además, hace que el proceso de desarrollo sea también más rápido, por lo que aumenta la productividad y aligera la carga mental de las personas desarrolladoras. Algunas de estas ventajas las podemos observar comparando los códigos adjuntos al ejercicio y son las siguientes: 

· Uso de interfaces. Como vemos, el código TS empieza con el establecimiento de una interfaz. En este caso, define la estructura esperada de los objetos que representan perros:
interface Dog {
  kind: string;
  weight: number;
}
Esto mejora la legibilidad del código y proporciona una guía clara sobre la forma de los datos esperados. En proyectos muy largos y/o complejos, esto puede ayudar a gestionar mejor todo el código y hacerlo más manejable. 

· Relacionado con lo aterior tenemos el tipado estático. Como vemos, se establece desde el principio qué tipo de variable corresponde a cada propiedad del objeto que se está definiendo. Así, para dog se establece una propiedad kind que debe ser una cadena y una propiedad weight que debe ser numérica. 
  kind: string;
  weight: number;

· Corrección de errores. Al establecer de antemano el tipo para cada cada propiedad, el propio código nos indica los errores, al contrario de lo que ocurre en JS. Como vemos en la línea 14 del código, hay un error en la declaración de kind (es un boleano en lugar de una cadena) y no tenemos que esperar a ejecutar el código para ver el error. En la línea 10 del JS tenemos el mismo error pero no se muestra. Esta funcionalidad de TS es útil porque facilita el trabajo del desarrollo del código. 


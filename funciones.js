const productos=["laptop","teléfono","televisor","tablet","pantalla"];

const prodMayusculas=productos.map(producto=>producto.toUpperCase());
console.log(prodMayusculas);

const prodConT=productos.filter(producto=>producto[0]==='t');
console.log(prodConT);

const totalLetras=productos.reduce((total,producto)=>total+producto.length,0);
console.log(totalLetras);
// FUNCIONES QUE SE DECLARAN CON LA PALABRA RESERVADA FUNCTION
function Fn() {
  // { PROP: 'PROPIEDAD' }
  //
  this.prop = 'propiedad'
}

Fn.prototype.lala = function FuncionDePrototipo() {}

const r = new Fn()
//CONSOLE.LOG(R.__PROTO__);
//

// FAT ARROW FUNCTION

const fatFn = () => { // NO TIENEN CONTEXTO DE THIS!!!!
  this.prop = 'lala'
}

const r1 = fatFn()
//CONSOLE.LOG(THIS);

//CONSOLE.LOG(R1)
//

// RETURN IMPLICITO
const fnR = () => 2


console.log(fnR());

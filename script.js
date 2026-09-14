

function changeState(){
  let texto = entrada.value == ""? "Hello World!" : entrada.value;
  let element = document.getElementById("objeto");
  element == null ? null : element.remove();
  if(cont == 11) {
    cont = 0;
  }
  cont = cont + 1;
  console.log(cont);
switch(cont){
  case 1:
    document.body.append(negrito(texto));
    break;
  case 2:
    document.body.append(marcado(texto));
    break;
  case 3:
    document.body.append(small(texto));
    break;
  case 4:
    document.body.append(del(texto));
    break;
  case 5:
    document.body.append(inserido(texto));
    break;
  case 6:
    document.body.append(supSub(texto));
    break;
  case 7:
    document.body.append(code(texto));
    break;
  case 8:
    document.body.append(quoting(texto));
    break;
  case 9:
    document.body.append(abrv(texto));
    break;
  case 10:
    document.body.append(backward(texto));
    break;
  case 11:
    document.body.append(italico(texto));
    break;
}
  return cont;
}

function negrito(texto){
 const negrito = document.createElement('strong');
 negrito.textContent = texto;
 negrito.id = "objeto";
 return negrito;

}

function italico(texto){
 const italico = document.createElement('em');
 italico.textContent = texto;
 italico.id = "objeto";
 return italico;

}

function marcado(texto){
 const marcado = document.createElement('mark');
 marcado.textContent = texto;
 marcado.id = "objeto";
 return marcado;
}

function small(texto){
 const small = document.createElement('small');
 small.textContent = texto;
 small.id = "objeto";
 return small;

}

function del(texto){
 const del = document.createElement('del');
 del.textContent = texto;
 del.id = "objeto";
 return del;

}

function inserido(texto){
 const inserido = document.createElement('ins');
 inserido.textContent = texto;
 inserido.id = "objeto";
 return inserido;

}

function supSub(texto){
 const sup = document.createElement('sup');
 const sub= document.createElement('sub');
 const total = document.createElement('div');
 sup.textContent = texto;
 sub.textContent = texto;
 total.append(sup);
 total.append(sub);
 total.id = "objeto";
 return total;

}

function code(texto){
 const code = document.createElement('code');
 code.textContent = texto;
 code.id = "objeto";
 return code;
}

function quoting(texto){
 const quoting = document.createElement('q');
 quoting.textContent = texto;
 quoting.id = "objeto";
 return quoting;
}

function abrv(texto){
 const abrv = document.createElement('abbr');
 abrv.textContent = "ABBR";
 abrv.title = texto
 abrv.id = "objeto";
 return abrv;

}

function backward(texto){
 const backward = document.createElement('bdo');
 backward.textContent = texto;
 backward.dir = "rtl";
 backward.id = "objeto";
 return backward;

}

const button = document.getElementById("but");
const entrada = document.getElementById("input");
let cont = 0;

button.addEventListener('click', changeState);



let alguem = {nome: 'Krueger',
 idade:25,
 peso: 80.7,
 detalhe: 'GOSTOSO DEMAIS',
 engordar(p=0.1){
     console.log('Engordou!');
     this.peso += p;
 }}

alguem.engordar(2);
 console.log(`${alguem.nome} está pesando ${alguem.peso}Kg.`)
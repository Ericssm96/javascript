var agora = new Date();
var hora = agora.getHours();
var minutos = agora.getMinutes();

console.log(`Agora são exatamente ${hora} horas e ${minutos} minutos.`);

if (12 <= hora && hora < 18){
    console.log('Boa tarde');
}
else if (18 <= hora && hora < 24) {
    console.log('Boa noite');
}
else if (0 <= hora && hora < 6) {
    console.log('Boa madrugada.');
}
else {
    console.log('Bom dia.');
}
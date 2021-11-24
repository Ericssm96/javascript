var idade = 17;
if (idade < 16) {
    console.log('Você ainda não pode votar.')
} else {
    if (16 <= idade < 18){
        console.log('Você pode votar, se quiser.')
    } else {
        if (18 <= idade < 60 ){
            console.log('Você é obrigado a votar :/')
        } else {
            console.log('Precisa votar mais não moss')
        }
    }
}
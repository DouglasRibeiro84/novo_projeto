$(document).ready(function(){

    $('#telefone').mask('(00)00000-0000')
    $(".money").mask("#.##0,00", { reverse: true });
    $("#campo-c").mask('##0,0%', {
        reverse: true,
        translation: {
        '#': { pattern: /[0-9]/, optional: true },
        '0': { pattern: /[0-9]/ }
        }
    });
    $('#campo-d').mask('00')

    $('#form').validate({
        rules: {
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
        },
        messages: {
            nome: 'Este campo é obrigatório!',
            email: 'Este campo é obrigatório!',
        },
    })
});
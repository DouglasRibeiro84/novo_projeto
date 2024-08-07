$(document).ready(function(){
    validacao()
    calculadora()
    
    function validacao (){

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
        submitHandler: function(form){
            const nome = $('#nome').val();
                    $('#nome-modal').text(nome);
                    
                    var myModal = new bootstrap.Modal(document.getElementById('teste-modal'));
                    myModal.show();
        },
        invalidHandler: function(evento, validador) {
            alert('Complete todos os campos')
        }
    })
    }
    function calculadora() {
        $('#formulario').on('submit', function(e) {
            e.preventDefault();
    
            function desformatarParaNumero(valor) {
                return parseFloat(valor.replace(/\./g, '').replace(',', '.')) || 0;
            }
    
            function desformatarTaxaJuros(valor) {
                return parseFloat(valor.replace(',', '.').replace('%', '')) / 100 || 0;
            }
    
            function formatarParaReais(valor) {
                return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
            }
    
            const valorInicial = desformatarParaNumero($('#campo-a').val());
            const valorMensal = desformatarParaNumero($('#campo-b').val());
            const taxaMensal = desformatarTaxaJuros($('#campo-c').val());
            const meses = parseFloat($('#campo-d').val()) || 0;
    
            function calcularMontanteFinal(valorInicial, valorMensal, taxaMensal, meses) {
                let montanteFinal = valorInicial;
                for (let i = 0; i < meses; i++) {
                    montanteFinal += valorMensal;
                    montanteFinal *= (1 + taxaMensal);
                }
                return montanteFinal;
            }
            const montanteFinal = calcularMontanteFinal(valorInicial, valorMensal, taxaMensal, meses);
            $('#valor-final').text(formatarParaReais(montanteFinal));
            $('#reespota').show();
        });
    }
});
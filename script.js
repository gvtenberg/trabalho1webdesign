$(document).ready(function() {
    const htmlElement = $('html');
    const bodyElement = $('body');

    const temaSalvo = localStorage.getItem('tema');
    const fonteSalva = localStorage.getItem('fonte');
    const lgpdAceito = localStorage.getItem('lgpd_aceito');

    if(temaSalvo === 'escuro') {
        htmlElement.addClass('dark');
    }

    if(fonteSalva === 'serif') {
        bodyElement.removeClass('font-sans').addClass('font-serif');
    }

    if (lgpdAceito !== 'sim') {
        $('#lgpd-banner').removeClass('hidden');
    }

    // Alterna o tema claro/escuro
    $('#btn-tema').on('click', function() {
        htmlElement.toggleClass('dark');

        if(htmlElement.hasClass('dark'))
            localStorage.setItem('tema', 'escuro');
        else
            localStorage.setItem('tema', 'claro');
    });

    $('#btn-fonte').on('click', function() {
        if(bodyElement.hasClass('font-sans')){
            bodyElement.removeClass('font-sans').addClass('font-serif');
            localStorage.setItem('fonte', 'serif');
        } else {
            bodyElement.removeClass('font-serif').addClass('font-sans');
            localStorage.setItem('fonte', 'sans');
        }
    });

    $('#btn-entendi').on('click', function() {
        localStorage.setItem('lgpd_aceito', 'sim');
        $('#lgpd-banner').addClass('hidden');
    });

    $('#form-contato').on('submit', function(event) {
        event.preventDefault(); // Evita o recarregamento da página
        const submitButton = $('#btn-enviar');

        const dadosForm = {
            title: $('#nome').val(),
            email: $('#email').val(),
            site: $('#site').val(),
            body: $('#msg').val(),
            userId: 1 // exigência do jsonplaceholder
        };

        const feedbackDiv = $('#form-feedback');

        feedbackDiv.removeClass('hidden bg-green-100 text-green-800 bg-red-100 text-red-800')
                    .addClass('bg-gray-200 text-gray-800')
                    .text('Enviando...');
        feedbackDiv.show();

        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(dadosForm),
            success: function (response) {
                console.log('Resposta do servidor: ', response);

                feedbackDiv.removeClass('bg-gray-200 text-gray-800')
                            .addClass('bg-green-100 text-green-800')
                            .html(`Mensagem enviada com sucesso! Entraremos em contato em breve<br>Número de protocolo: ${response.id}`);
                
                $('#form-contato')[0].reset(); // Limpa o formulário
            },
            error: function() {
                feedbackDiv.removeClass('bg-gray-200 text-gray-800')
                            .addClass('bg-red-100 text-red-800')
                            .text('Erro ao enviar mensagem. Por favor, tente novamente');
            }
        });
    });

    const textarea = $('#msg');
    const contador = $('#contador-caracteres');
    const maximo = textarea.attr('maxlength'); // pega o maxlength de forma automática

    contador.text(`${maximo} caracteres restantes`);

    textarea.on('input', function() {
        const tamanhoAtual = $(this).val().length;
        const restantes = maximo - tamanhoAtual;

        contador.text(`${restantes} caracteres restantes`);

        if(restantes < 50){
            contador.removeClass('text-gray-500 dark:text-gray-400')
                    .addClass('text-red-500 font-bold');
        } else {
            contador.removeClass('text-red-500 font-bold')
                    .addClass('text-gray-500 dark:text-gray-400');
        }
    });
});

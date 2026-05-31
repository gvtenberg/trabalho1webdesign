$(document).ready(function() {
    const htmlElement = $('html');
    const bodyElement = $('body');

    const temaSalvo = localStorage.getItem('tema');
    const fonteSalva = localStorage.getItem('fonte');

    if(temaSalvo === 'escuro') {
        htmlElement.addClass('dark');
    }

    if(fonteSalva === 'serif') {
        bodyElement.removeClass('font-sans').addClass('font-serif');
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
});

/*
 - Adicionar opção para usuário aceitar localStorage
*/
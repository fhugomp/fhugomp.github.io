const form = document.getElementById('form-contato');

form.addEventListener('submit', (evento) => {
    // 1. Impede o recarregamento padrão da página
    evento.preventDefault();

    // 2. Captura os valores que o usuário digitou nos campos
    const nome = document.getElementById('nome').value;
    const emailContato = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    // 3. Monta como a mensagem vai aparecer no corpo do e-mail
    // Usamos \n para quebrar a linha e deixar a leitura organizada
    const corpoEmail = `Nome: ${nome}\nE-mail de contato: ${emailContato}\n\nMensagem:\n${mensagem}`;

    // 4. Codifica o texto para o formato de link de internet
    // (Isso transforma os espaços em %20 e garante que não dê erro no link)
    const assuntoCodificado = encodeURIComponent(assunto);
    const corpoCodificado = encodeURIComponent(corpoEmail);

    // 5. Cria o link 'mailto' apontando para o seu e-mail da UFC
    const emailDestino = "fhugomp@alu.ufc.br";
    const mailtoLink = `mailto:${emailDestino}?subject=${assuntoCodificado}&body=${corpoCodificado}`;

    // 6. Abre o aplicativo de e-mail padrão do usuário já com tudo preenchido
    window.location.href = mailtoLink;
});
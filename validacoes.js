function validarFuncionario() {
    let nome = document.getElementById("nome_funcionario").value;
    let telefone = document.getElementById("telefone").value;
    let email = document.getElementById("email").value;

    if (nome.length < 3) {
        alert("O nome do funcionário deve ter pelo menos 3 caracteres.");
        return false;
    }

    let regexTelefone = /^[0-9]{10,11}$/;
    if (!regexTelefone.test(telefone)) {
        alert("Digite um telefone válido (10 ou 11 dígitos).");
        return false;
    }

    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("Digite um e-mail válido.");
        return false;
    }

    return true;
}


function validarUsuario() {
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value;
    let id_perfil = document.getElementById("id_perfil").value;

    // Validação do nome
    if (nome.length < 3) {
        alert("O nome deve ter pelo menos 3 caracteres.");
        document.getElementById("nome").focus();
        return false;
    }

    if (nome.length > 50) {
        alert("O nome deve ter no máximo 50 caracteres.");
        document.getElementById("nome").focus();
        return false;
    }

    // Validação para não permitir números no nome
    let regexNome = /^[a-zA-ZÀ-ÿ\s]+$/;
    if (!regexNome.test(nome)) {
        alert("O nome não pode conter números ou caracteres especiais.");
        document.getElementById("nome").focus();
        return false;
    }

    // Validação do email
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("Digite um e-mail válido.");
        document.getElementById("email").focus();
        return false;
    }

    if (email.length > 60) {
        alert("O e-mail deve ter no máximo 60 caracteres.");
        document.getElementById("email").focus();
        return false;
    }

    // Validação da senha
    if (senha.length < 8) {
        alert("A senha deve ter pelo menos 8 caracteres.");
        document.getElementById("senha").focus();
        return false;
    }

    if (senha.length > 50) {
        alert("A senha deve ter no máximo 50 caracteres.");
        document.getElementById("senha").focus();
        return false;
    }

    // Validação do perfil
    if (id_perfil === "" || id_perfil === "0") {
        alert("Selecione um perfil válido.");
        document.getElementById("id_perfil").focus();
        return false;
    }

    return true;
}

function validarAlteracaoUsuario() {
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let id_perfil = document.getElementById("id_perfil").value;
    let nova_senha = document.getElementById("nova_senha");

    // Validação do nome
    if (nome.length < 3) {
        alert("O nome deve ter pelo menos 3 caracteres.");
        document.getElementById("nome").focus();
        return false;
    }

    if (nome.length > 50) {
        alert("O nome deve ter no máximo 50 caracteres.");
        document.getElementById("nome").focus();
        return false;
    }

    // Validação para não permitir números no nome
    let regexNome = /^[a-zA-ZÀ-ÿ\s]+$/;
    if (!regexNome.test(nome)) {
        alert("O nome não pode conter números ou caracteres especiais.");
        document.getElementById("nome").focus();
        return false;
    }

    // Validação do email
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("Digite um e-mail válido.");
        document.getElementById("email").focus();
        return false;
    }

    if (email.length > 60) {
        alert("O e-mail deve ter no máximo 60 caracteres.");
        document.getElementById("email").focus();
        return false;
    }

    // Validação do perfil
    if (id_perfil === "" || id_perfil === "0") {
        alert("Selecione um perfil válido.");
        document.getElementById("id_perfil").focus();
        return false;
    }

    // Validação da nova senha (se fornecida)
    if (nova_senha && nova_senha.value !== "") {
        if (nova_senha.value.length < 8) {
            alert("A nova senha deve ter pelo menos 8 caracteres.");
            nova_senha.focus();
            return false;
        }

        if (nova_senha.value.length > 50) {
            alert("A nova senha deve ter no máximo 50 caracteres.");
            nova_senha.focus();
            return false;
        }
    }

return true;

}
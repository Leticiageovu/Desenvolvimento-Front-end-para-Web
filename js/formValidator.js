export function setupFormValidation() {
  const form = document.getElementById('formContato');
  const successMessage = document.getElementById('sucessMessage');

  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    clearErrors(form);
    const isValid = validateForm(form);

    if (isValid) {
      successMessage.classList.add('ativo');
      form.reset();
      setTimeout(() => successMessage.classList.remove('ativo'), 3000);
    }
  });
}

function validateForm(form) {
  let valid = true;

  const nome = form.nome;
  const email = form.email;
  const mensagem = form.mensagem;

  if (!nome.value.trim() || nome.value.length < 3) {
    showError(nome, 'O nome deve ter ao menos 3 caracteres.');
    valid = false;
  }

  if (!email.value.trim() || !validateEmail(email.value)) {
    showError(email, 'Digite um email válido.');
    valid = false;
  }

  if (!mensagem.value.trim() || mensagem.value.length < 10) {
    showError(mensagem, 'A mensagem deve ter ao menos 10 caracteres.');
    valid = false;
  }

  return valid;
}

function showError(input, message) {
  const small = input.nextElementSibling;
  if (small && small.classList.contains('erro-msg')) {
    small.textContent = message;
    input.classList.add('erro-input');
  }
}

function clearErrors(form) {
  const errors = form.querySelectorAll('.erro-msg');
  errors.forEach(err => (err.textContent = ''));

  const inputs = form.querySelectorAll('.erro-input');
  inputs.forEach(inp => inp.classList.remove('erro-input'));
}

function validateEmail(email) {
  // Regex simples para validação básica
  return /\S+@\S+\.\S+/.test(email);
}

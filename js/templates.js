export function homeTemplate() {
  return `
    <section>
      <h2>Bem-vindo ao Home</h2>
      <p>Conteúdo da página inicial.</p>
    </section>
  `;
}

export function sobreTemplate() {
  return `
    <section>
      <h2>Sobre Nós</h2>
      <p>Informações sobre o projeto.</p>
    </section>
  `;
}

export function contatoTemplate() {
  return `
    <section>
      <h2>Contato</h2>
      <form id="formContato" novalidate>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required minlength="3" />
        <small class="erro-msg"></small>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <small class="erro-msg"></small>

        <label for="mensagem">Mensagem:</label>
        <textarea id="mensagem" name="mensagem" required minlength="10"></textarea>
        <small class="erro-msg"></small>

        <button type="submit">Enviar</button>
      </form>
      <div class="sucess-message" id="sucessMessage">Mensagem enviada com sucesso!</div>
    </section>
  `;
}
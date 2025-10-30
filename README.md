# 🎨 Documentação Técnica - Atividade 2: CSS

## 📘 Informações do Projeto
**Atividade:** Desenvolvimento Front-End para Web  
**Turma:** 005  
**Aluna:** *Letícia Gabrielly dos Santos Geovú*  
**RGM:** 46294554  
**Atividade 2:** Estilização com CSS  

---

## 🧩 Descrição do Projeto
Esta atividade faz parte da **2ª etapa prática** do desenvolvimento do site da **ONG Menos Tela e Mais Diversão**.  
O objetivo foi aplicar **estilos visuais com CSS3**, aprimorando a identidade visual, a responsividade e a experiência do usuário, mantendo a coerência com a estrutura HTML desenvolvida na Atividade 1.

O design busca transmitir **leveza, acessibilidade e modernidade**, refletindo o propósito da ONG de promover **diversão saudável fora do mundo digital**.

---

## 🎯 Objetivo da Atividade 2
Implementar e documentar a **camada de apresentação (CSS)** do projeto, explorando propriedades visuais, layout responsivo e boas práticas de design.

### Requisitos Atendidos:
- ✅ Criação de **layout responsivo** utilizando *Flexbox* e *Media Queries*;  
- ✅ Definição de **paleta de cores suaves e acessíveis**;  
- ✅ Aplicação de **transparências, sombras e bordas arredondadas** para um visual moderno;  
- ✅ Estilização de **menus, formulários, tabelas, carrosséis e rodapés**;  
- ✅ Utilização de **feedbacks visuais** (mensagens de sucesso, hover, transições).  

---

## 🖌️ Estrutura e Organização do CSS

### 1. **Estilos Básicos**
O corpo do site utiliza:
- Fonte padrão *Arial, sans-serif* para melhor legibilidade;  
- Imagem de fundo (`fundooo.png`) com `background-size: cover` e `background-position: center`;  
- Margens e espaçamentos zerados para permitir controle total do layout.  

Essas definições garantem uma base limpa e consistente em todas as páginas.

---

### 2. `Cabeçalho e Navegação`
O **`header`** possui fundo claro e espaçamento interno.  
O **menu de navegação (`nav`)** utiliza *Flexbox* para centralizar os links e manter espaçamento entre os itens.  

Os links recebem:
```css
nav a {
  text-decoration: none;
  color: #000;
}

---

### 3. `Menu Mobile Responsivo`
Foi implementado um menu adaptável através de media queries:

- Quando a largura é inferior a 760px, o menu principal é ocultado;

- O botão (.container-mob) é exibido no canto superior direito;

- Ao clicar, o menu é reexibido com a classe .ativo.

Essa lógica garante usabilidade fluida em dispositivos móveis.

---

### 4. `Formulários`

Os formulários seguem um estilo limpo e organizado, com:

- Campos 100% responsivos (width: 100%);

- Bordas suaves e espaçamento interno confortável;

- Botões destacados com cursor: pointer e margens regulares.

Além disso, mensagens de sucesso (.sucess-message) foram adicionadas com cores acessíveis (verde claro e borda verde-escura), exibidas apenas quando ativas.

---

### 5. `Seções e Cards`

As principais seções utilizam:

section {
  background: #ffffffd9; /* Fundo branco com transparência */
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

Esses elementos trazem profundidade e elegância, sem comprometer a legibilidade do conteúdo.
---



### 6. `Tabelas e Listas`

O estilo das tabelas e listas foi pensado para clareza de dados:

- Cabeçalhos com fundo azul (#00bcd4);

- Alternância de cores nas linhas (nth-child(even));

- Efeito hover em linhas e listas, destacando interatividade.

Esses recursos tornam a área de transparência e relatórios mais organizada e profissional.

---

### 7. `Carrossel e Galeria de Projetos`

Foram aplicadas personalizações ao Slick Slider **para aplicação na terceira atividade**:

Arredondamento das imagens (border-radius: 15px);

Sombreamento e fundo semi-transparente no container do carrossel;

Setas de navegação circulares e animadas no hover;

Bolinhas de navegação (slick-dots) com tons de verde (em referência à natureza e vitalidade).

Essas escolhas visuais mantêm a harmonia com a identidade da ONG.


---

### 8. `Rodapé (Footer)`
O rodapé foi centralizado com flexbox, mantendo espaçamento entre os ícones de redes sociais e o texto de direitos autorais.
O layout é limpo, reforçando a consistência entre todas as páginas.

---

### 9. `Responsividade`

Diversas media queries foram utilizadas para ajustar:

Navegação;

- Estrutura de tabelas (convertidas em blocos no mobile);

- Imagens do carrossel;

- Espaçamentos em seções e formulários.

Essas adaptações garantem boa experiência tanto em desktop quanto em smartphones.

---

### Identidade Visual
 
 Elemento	Cor	Função

Azul (#004aad / #00bcd4)	Destaques e títulos	Representa confiança e clareza
Verde (#4CAF50 / #1e6b34)	Ícones e botões	Transmite natureza e equilíbrio
Branco translúcido (#ffffffd9)	Fundo das seções	Proporciona leveza e contraste
Cinza claro (#f5f5f5 / #ccc)	Bordas e áreas neutras	Mantém harmonia visual



⚙️ Técnicas e Boas Práticas Utilizadas

- Uso de Flexbox em praticamente todo o layout;

- Aplicação de transições suaves (transition) em links e botões;

- Uso de variáveis CSS simuladas com cores padronizadas para coerência visual;

- Criação de classes reutilizáveis, facilitando manutenção e escalabilidade;

- Implementação de scroll suave (scroll-behavior: smooth) para melhor navegação

💡 Conclusão

A Atividade 2 consolidou os fundamentos de design responsivo e usabilidade visual, traduzindo a estrutura HTML da Atividade 1 em uma interface agradável, moderna e funcional.
O resultado é um site coerente, acessível e pronto para integração com JavaScript (Atividade 3).

✨ Autoria

Desenvolvido por: Letícia  Geovú
📅 Atividade 2 — Estilização com CSS3
💻 ONG Menos Tela e Mais Diversão

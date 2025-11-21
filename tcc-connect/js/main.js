const conteudo = document.getElementById('conteudo');
const btnHome = document.getElementById('btnHome');
const btnMensagens = document.getElementById('btnMensagens');
const btnArquivos = document.getElementById('btnArquivos');
const btnReunioes = document.getElementById('btnReunioes');
const btnProgresso = document.getElementById('btnProgresso');

function mostrarBemVindo() {
  conteudo.innerHTML = `
    <section id="bemvindo" class="bemvindo">
      <h2>Bem-vindo ao TCC Connect</h2>
      <p>Escolha uma das opções acima para começar.</p>
    </section>
  `;
}

btnHome.addEventListener('click', mostrarBemVindo);

btnMensagens.addEventListener('click', () => {
  conteudo.innerHTML = `
    <h2>Mensagens Diretas</h2>
    <div id="chat">
      <div id="mensagens"></div>
      <input type="text" id="msgInput" placeholder="Digite sua mensagem...">
      <button id="enviarMsg">Enviar</button>
    </div>
  `;

  const mensagensDiv = document.getElementById('mensagens');
  const input = document.getElementById('msgInput');
  const enviar = document.getElementById('enviarMsg');

  enviar.addEventListener('click', () => {
    const texto = input.value.trim();
    if (texto) {
      const msg = document.createElement('p');
      msg.textContent = `Você: ${texto}`;
      mensagensDiv.appendChild(msg);
      input.value = '';
    }
  });
});

btnArquivos.addEventListener('click', () => {
  conteudo.innerHTML = `
    <h2>Arquivos</h2>
    <input type="file" id="upload">
    <ul id="listaArquivos"></ul>
  `;

  const upload = document.getElementById('upload');
  const lista = document.getElementById('listaArquivos');

  upload.addEventListener('change', () => {
    const arquivo = upload.files[0];
    if (arquivo) {
      const li = document.createElement('li');
      li.textContent = arquivo.name;
      lista.appendChild(li);
    }
  });
});

btnReunioes.addEventListener('click', () => {
  conteudo.innerHTML = `
    <h2>Agendar Reunião</h2>
    <label>Data e hora:</label>
    <input type="datetime-local" id="dataReuniao">
    <button id="agendar">Agendar</button>
    <ul id="listaReunioes"></ul>
  `;

  const agendar = document.getElementById('agendar');
  const lista = document.getElementById('listaReunioes');

  agendar.addEventListener('click', () => {
    const data = document.getElementById('dataReuniao').value;
    if (data) {
      const li = document.createElement('li');
      li.textContent = `Reunião agendada para: ${new Date(data).toLocaleString()}`;
      lista.appendChild(li);
    }
  });
});

btnProgresso.addEventListener('click', () => {
  conteudo.innerHTML = `
    <h2>Progresso do TCC</h2>
    <progress value="60" max="100"></progress>
    <p>Etapa atual: Desenvolvimento</p>
  `;
});

// mostra tela inicial ao carregar
mostrarBemVindo();

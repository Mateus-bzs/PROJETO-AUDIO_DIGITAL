(() => {
  const onda = document.getElementById('wave-path');
  if (!onda) return;

  const grupoAmostras = document.getElementById('sample-points');
  const grupoNiveis = document.getElementById('quant-lines');
  const controleVelocidade = document.getElementById('anim-speed');
  const indicadorVelocidade = document.getElementById('speed-value');
  const botaoPausar = document.getElementById('anim-play');
  const botaoReiniciar = document.getElementById('anim-reset');

  const namespaceSvg = 'http://www.w3.org/2000/svg';
  const quantidadeAmostras = 16;
  const inicioX = 55;
  const largura = 620;
  const centroY = 120;
  const amplitude = 76;
  const passoQuantizacao = 20;

  let fase = 0;
  let rodando = true;
  let tempoAnterior = null;

  // Calcula a posição vertical da onda para uma posição horizontal.
  function obterPosicaoY(x) {
    const angulo = ((x - inicioX) / largura) * 2 * Math.PI;
    return centroY - amplitude * Math.sin(angulo + fase);
  }

  // Cria os círculos e os traços do SVG uma única vez.
  const amostras = Array.from({ length: quantidadeAmostras }, (_, indice) => {
    const x = inicioX + (indice * largura) / (quantidadeAmostras - 1);

    const circulo = document.createElementNS(namespaceSvg, 'circle');
    circulo.setAttribute('r', '6');
    circulo.setAttribute('cx', String(x));
    grupoAmostras.append(circulo);

    const traco = document.createElementNS(namespaceSvg, 'line');
    traco.setAttribute('x1', String(x - 10));
    traco.setAttribute('x2', String(x + 10));
    grupoNiveis.append(traco);

    return { x, circulo, traco };
  });

  function desenharQuadro() {
    // Redesenha a curva usando 150 pontos ao longo do gráfico.
    const caminho = Array.from({ length: 150 }, (_, indice) => {
      const x = inicioX + (indice * largura) / 149;
      const y = obterPosicaoY(x);
      const comando = indice === 0 ? 'M' : 'L';

      return `${comando}${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');

    onda.setAttribute('d', caminho);

    for (const { x, circulo, traco } of amostras) {
      // Amostragem: o círculo acompanha a altura da onda nessa posição.
      const y = obterPosicaoY(x);
      circulo.setAttribute('cy', String(y));

      // Quantização: o traço marca o nível discreto mais próximo.
      const deslocamento = y - centroY;
      const nivel = Math.round(deslocamento / passoQuantizacao);
      const yQuantizado = centroY + nivel * passoQuantizacao;

      traco.setAttribute('y1', String(yQuantizado));
      traco.setAttribute('y2', String(yQuantizado));
    }
  }

  function animar(tempoAtual) {
    // A fase avança conforme o tempo e a velocidade selecionada.
    if (rodando) {
      const tempoDecorrido = tempoAtual - (tempoAnterior ?? tempoAtual);
      fase += tempoDecorrido * 0.0008 * Number(controleVelocidade.value);
      tempoAnterior = tempoAtual;
      desenharQuadro();
    }

    requestAnimationFrame(animar);
  }

  botaoPausar.addEventListener('click', () => {
    rodando = !rodando;
    tempoAnterior = null;
    botaoPausar.textContent = rodando
      ? 'Pausar animação'
      : 'Reproduzir animação';
  });

  botaoReiniciar.addEventListener('click', () => {
    fase = 0;
    tempoAnterior = null;
    rodando = true;
    botaoPausar.textContent = 'Pausar animação';
    desenharQuadro();
  });

  controleVelocidade.addEventListener('input', () => {
    indicadorVelocidade.textContent = `${controleVelocidade.value}×`;
  });

  desenharQuadro();
  requestAnimationFrame(animar);
})();

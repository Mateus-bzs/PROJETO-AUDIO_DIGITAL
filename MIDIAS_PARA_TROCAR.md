# Mídias de exemplo para substituir

Todos os caminhos usados pelas páginas ficam em `js/media.js`. Para trocar uma mídia mantendo o nome do arquivo, substitua o arquivo correspondente; se mudar o nome ou a pasta, atualize `src` no mapa. Reexecute `python scripts/gerar_midias.py` para recriar os exemplos sintéticos.

| Arquivo | Uso | Substituição recomendada |
|---|---|---|
| `assets/img/processo-gravacao.png` | Início e módulo de conceitos | Foto/ilustração de microfone ou processo de gravação; atualizar `alt` e legenda no mapa. |
| `assets/img/equipamentos.png` | Galeria multimídia | Foto de equipamentos reais usados no trabalho. |
| `assets/img/capa-apresentacao.png` | Capa do vídeo | Usada na página inicial e na galeria. |
| `assets/svg/onda-sonora.svg` | Conceitos | Diagrama vetorial de onda sonora. |
| `assets/svg/amostragem.svg` | Módulo de amostragem | Diagrama vetorial mostrando instantes de amostragem. |
| `assets/svg/quantizacao.svg` | Módulo de quantização | Diagrama vetorial de níveis de quantização. |
| `assets/audio/tom-8khz.wav`, `tom-22050hz.wav`, `tom-44100hz.wav` | Comparação de taxas | Áudios equivalentes gravados nas respectivas taxas. |
| `assets/audio/tom-8bits.wav`, `tom-16bits.wav` | Comparação de profundidade | Mesmo áudio quantizado nas profundidades indicadas. |
| `assets/audio/tom-exemplo.wav` | Demonstração WAV | Exemplo WAV/PCM para apresentar o formato. |
| `assets/audio/antes-com-ruido.wav`, `depois-limpo.wav` | Antes/depois de tratamento | Gravação original e versão tratada; mantenha o mesmo conteúdo para comparar. |
| `assets/audio/trilha-midi-renderizada.wav` | Galeria MIDI | Renderização audível do arquivo MIDI original. |
| `assets/midi/trilha-exemplo.mid` | Download MIDI | Arquivo MIDI original, editável em software compatível. |
| `assets/video/apresentacao.mp4` | Vídeo de apresentação | Usado na página inicial e na galeria. |
| `assets/audio/tom-exemplo.mp3` | Módulo de formatos | Exemplo em MP3 para comparar com o WAV. |

Os desenhos PNG e SVG, WAVs sintéticos e arquivos MIDI deste protótipo foram gerados pelo script local e não representam gravações reais.

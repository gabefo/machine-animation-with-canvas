# MACHINE ANIMATION

## Assets

A pasta `/assets/frames` contém todos os frames do vídeo. Para otimizar o tempo do carregamento, você pode excluir os frames repetidos ou semelhantes.

## Variáveis

`basePath`: contém o caminho para a pasta onde as imagens estão salvas.

`images`: contém o nome dos arquivos que serão utilizados na animação. Caso alguma imagem seja removida, essa variável também deve ser atualizada.

`imageObjects`: contém os objetos das imagens e é atualizada automaticamente pelo método `preload`.

`frames`: contém os índices das imagens que serão usadas a cada frame. Caso você opte por remover alguma imagem repetida, você deverá passar corretamente o índice da imagem que será utilizada no frame.
Exemplo: se as imagens `0001.png` e `0080.png` forem iguais, você pode excluir o arquivo `0080.png` e passar o índice da imagem `0001.png` (neste caso, 0) no frame de número 80.
O tamanho do array `frames` influenciará na duração da animação.

`frameRate`: taxa de atualização da animação (padrão = 30).

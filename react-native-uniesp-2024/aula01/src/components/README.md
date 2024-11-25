# resultado dos exercicios 01, 02, 03 e 04 da aula01

## Descrição
O componente `Exercicio01` exibe uma imagem de boas -vindas personalizada.

## Imagem do Componente `Exercicio01` rodando
![imagem do exercicio 01 da aula01](/aula01/images/exercicio-01_02.png)

## Documentação

### Parâmetros
- **name** *(string)*: Nome do usuário que será exibido na saudação.

### Uso
```jsx
import React from 'react';
import Exercicio01 from './Exercicio01';

const App = () => {
  return (
    <Exercicio01 name="João" />
  );
};
export default App;
```
## Descrição
- O componente `Exercicio02` é um contador simples que permite ao usuário incrementar ou decrementar o valor exibido na tela por meio de botões.

## Imagem do Componente `Exercicio02` rodando
![imagem do exercicio 02 da aula01](/aula01/images/exercicio-01_02.png)

## Documentação

### Funcionalidades
- O componente exibe um valor de contador que começa em 0.
Existem dois botões:
- Incrementar: Aumenta o valor do contador em 1 a cada clique.
- Decrementar: Diminui o valor do contador em 1 a cada clique.

### Uso
```jsx
import React from 'react';
import Exercicio02 from './Exercicio02';

const App = () => {
  return (
    <Exercicio02 />
  );
};

export default App;
```
### Estado
contador *(number):* Mantém o valor atual do contador, inicializado como 0 é atualizado pelas funções incrementar e decrementar.
### Funções Internas
- incrementar: Atualiza o estado contador, somando 1 ao valor atual.
- decrementar: Atualiza o estado contador, subtraindo 1 do valor atual.
### Estilo
container: Centraliza o conteúdo com alignItems: 'center' e justifyContent: 'center'. Aplica um padding de 100 e um fundo prateado (backgroundColor: 'silver').

## Descrição
O componente Exercicio03 permite ao usuário digitar um texto em um campo de entrada, que é exibido abaixo à medida que o texto é digitado. É uma interface simples para visualizar mensagens em tempo real.

## Imagem do Componente `Exercicio03` rodando
### Digitando algo
![imagem do exercicio 03 da aula01 campo de texto com valor](/aula01/images/exercicio-03-digitado.png)
### Sem digitar
![imagem do exercicio 03 da aula01 sem digitar no campo de texto](/aula01//images/exercicio-03.png)


## Documentação
- Exibe um campo de entrada `(TextInput)` onde o usuário pode digitar um texto.
- Abaixo do campo de entrada, o texto digitado é exibido em tempo real.
- Inclui uma mensagem de título "Frases pensamentos".

### USo
```jsx
import React from 'react';
import Exercicio03 from './Exercicio03';

const App = () => {
  return (
    <Exercicio03 />
  );
};

export default App;
```
### Estado
text (string): Mantém o texto atual digitado pelo usuário. Inicialmente é uma string vazia.

### Estilo
- container: Centraliza o conteúdo com alignItems: 'center' e justifyContent: 'center'. Aplica um padding de 70, margem de 2% e um fundo amarelo (backgroundColor: 'yellow').
- input: Estiliza o campo de entrada com borda preta, altura de 77, largura de 92%, cor do texto preta, fundo amarelo claro (backgroundColor: 'lightyellow'), e padding horizontal de 25.
- text: Cor do texto em prata (color: 'silver').
- textItalic: Estilo do texto do título com cor preta e itálico, tamanho de fonte 22.


## Descrição
O componente `Exercicio04` representa uma mochila de itens, permitindo que o usuário visualize uma lista de itens com suas quantidades e descrições. Ao clicar em um item, é exibida uma descrição detalhada do mesmo.

## Imagem do Componente `Exercicio01` rodando![imagem do exercicio 04 da aula01, item que o jogador possui dentro da mochila](/aula01/images/exercicio-04.png)

## Documentação

### Funcionalidade
Exibe uma lista de itens com suas quantidades.
Ao clicar em um item, a descrição do item é exibida ou oculta.

### Uso
```jsx
import React from 'react';
import Exercicio04 from './Exercicio04';

const App = () => {
  return (
    <Exercicio04 />
  );
};

export default App;
```
### Estado
selecionarItem (string | null): Armazena o ID do item atualmente selecionado. Inicialmente é null.

### Dados
- **mochilaDeItens:** Array de objetos que representa os itens na mochila, cada um com as seguintes propriedades:
- ***id (string):** Identificador único do item.
**item (string):** Nome do item.
quantidade (string): Quantidade do item disponível.
descricao (string): Descrição do item.

### Funções Internas
- **handlePress(id):** Atualiza o estado selecionarItem. Se o ID do item clicado for o mesmo que o atualmente selecionado, ele é desmarcado; caso contrário, o ID do item é marcado.

### Estilo
- *container:* Define a largura da borda, altura de 100%, padding de 10 e fundo amarelo claro (backgroundColor: '#FFB347').
- *title:* Estilo do título principal com borda, tamanho de fonte 29, centralizado e fundo laranja escuro (backgroundColor: '#FF8C00').
- *meusItemStyle:* Estilo para a seção "Meus Itens" com cor e tamanho de fonte adequados.
- *itemContainer:* Estiliza o contêiner dos itens com layout horizontal e espaço entre os elementos.
- *itemStyle:* Estilo do nome do item.
itemQuantidade: Estilo da quantidade do item, com borda e cor.
- *titleDescriçaoItem:* Estilo para o texto de descrição que aparece ao lado de cada item.
descricaoStyle: Estilo da descrição detalhada do item quando exibida.

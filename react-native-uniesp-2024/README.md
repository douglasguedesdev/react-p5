# react-native-uniesp-2024

## PROGRAMAÇÃO DE DISPOSITIVOS MOVEIS

root/
├── assets/                  # Arquivos de mídia utilizados no projeto
│   ├── adaptive-icon.png    # Ícone adaptável para Android/iOS
│   ├── favicon.png          # Ícone para navegadores
│   ├── icon.png             # Ícone principal do app
│   ├── logo.png             # Logotipo do projeto
│   ├── splash.png           # Tela de splash (carregamento inicial)
├── src/                     # Código-fonte principal
│   ├── App.js               # Componente principal do aplicativo
├── app.json                 # Configurações gerais do aplicativo (Expo ou similar)
├── babel.config.js          # Configuração do Babel para transpilação do código
├── package-lock.json        # Controle de versões exato das dependências instaladas
├── package.json             # Dependências e scripts do projeto



O arquivo app.json é usado para configurar aspectos essenciais da aplicação desenvolvida com Expo. Ele define informações como o nome do aplicativo, ícones, splash screen, e configurações específicas para Android, iOS e Web.

bibliotecas usadas

@react-navigation/native
@react-navigation/stack

Se o usuário estiver autenticado:

ListaCartaoScreen: Lista de cartões de estudo.
EdicaoCartaoScreen: Tela para edição de cartões.
TarefasVencimentoProximoScreen: Tela para exibir tarefas próximas do vencimento.
Se o usuário não estiver autenticado:

LoginScreen: Tela de login.

AuthContext:

Gerencia o estado de autenticação (usuário logado e status de carregamento).
Implementado no arquivo src/contexts/AuthContext.js.
CartoesEstudoContext:

Gerencia os cartões de estudo (adicionar, editar, listar).
Implementado no arquivo src/contexts/CartoesEstudoContext.js.

ListaCartaoScreen
Descrição: Exibe uma lista de cartões de estudo.
Arquivo: src/screens/ListaCartaoScreen.js
EdicaoCartaoScreen
Descrição: Permite editar ou criar novos cartões de estudo.
Arquivo: src/screens/EdicaoCartaoScreen.js
TarefasVencimentoProximoScreen
Descrição: Lista tarefas com vencimento próximo.
Arquivo: src/screens/TarefasVencimentoProximoScreen.js
LoginScreen
Descrição: Tela inicial de login do aplicativo.
Arquivo: src/screens/LoginScreen.js
Fluxo do Aplicativo
Inicialização:

O aplicativo verifica o estado de autenticação por meio do AuthContext.
Se o usuário estiver autenticado, ele será redirecionado para a tela de edição de cartões.
Caso contrário, será redirecionado para a tela de login.
Navegação:

As telas são exibidas usando o Stack Navigator, permitindo navegação linear entre elas.

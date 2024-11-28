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

BEBEL.CONFIGS.JS

presets: ['babel-preset-expo']:

Este preset configura o Babel para trabalhar com o Expo. Ele já inclui as configurações necessárias para que o código funcione em um ambiente Expo sem necessidade de ajustes adicionais.
plugins: ['module:react-native-dotenv']:

Este plugin permite o uso de variáveis de ambiente no projeto. Ele carrega as variáveis definidas em um arquivo .env e as disponibiliza no código do projeto. Isso é útil para gerenciar chaves de API, URLs e outras configurações sensíveis que não devem estar diretamente no código-fonte.
Configurações do Plugin react-native-dotenv:

PACKAGE.JSON

moduleName: '@nv': Define o nome do módulo ao qual as variáveis de ambiente serão atribuídas. Isso permite acessar as variáveis com @nv.VARIABLE_NAME.
path: '.env': Indica o caminho do arquivo .env onde as variáveis de ambiente estão definidas.
safe: false: Permite que variáveis não sejam verificadas. Caso você queira forçar a validação das variáveis no .env, defina como true.
allowUndefined: true: Permite que variáveis não definidas no .env sejam acessadas sem gerar erros.

@expo/metro-runtime: Facilita a execução do projeto com o Expo Metro bundler.
@react-native-async-storage/async-storage: Permite o armazenamento persistente de dados no dispositivo.
@react-native-picker/picker: Utilizado para criar seletores de itens em listas (pickers).
expo: Framework principal utilizado para criar aplicativos React Native com suporte de fácil configuração.
expo-status-bar: Componente para controle da barra de status do dispositivo.
firebase: Biblioteca do Firebase para autenticação, banco de dados e outros serviços.
react: Biblioteca principal do React, utilizada para criar interfaces de usuário.
react-dom: Biblioteca para renderizar componentes React em ambientes web.
react-native: Framework React Native para desenvolvimento de aplicativos móveis.
react-native-dotenv: Permite o uso de variáveis de ambiente dentro de um projeto React Native.
react-native-modal-datetime-picker: Componente para selecionar datas e horários via modal.
react-native-web: Permite que o aplicativo funcione também no ambiente web.
react-vector-icons: Biblioteca de ícones vetoriais para uso no projeto.

As telas são exibidas usando o Stack Navigator, permitindo navegação linear entre elas.

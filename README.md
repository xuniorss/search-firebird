# Buscador de dados firebird

Este projeto foi desenvolvido em Node.js com typescript e tem como objetivo, executar uma string específica em todas as tabelas e colunas do banco de dados firebird. Conforme a string desejada for sendo encontrada no banco de dados será exibido no console a tabela e a coluna a qual a mesma faz parte.

### 📋 Pré-requisitos

O banco de dados deve estar como .fdb

## 🚀 Começando

Para executar esta aplicação em seu ambiente local, siga os passos abaixo:

### 🔧 Instalação

#### 1. Clone o repositório:

```shell
git clone https://github.com/xuniorss/search-firebird.git
```

#### 2. Navegue até o diretório do projeto:

```shell
cd search-firebird
```

#### 3. Instale as dependências:

```shell
npm i
# ou
yarn
```

## ⚙️ Configuração para início da aplicação

#### Com sua ide aberta:

1. Navegue até o diretório `src/utils/database-options.ts`, aqui você poderá informar as configurações do seu banco de dados firebird;

-  1.1: O caminho para o database deve usar barra normal "/" como no exemplo `c:/path/to/database/data.fdb`

2. Agora vá até `src/utils/search-query.ts`, aqui você poderá informar a string que deseja encontrar no banco de dados.

### 🏃‍♂️ Iniciando o projeto

```shell
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

## 🛠️ Algumas libs utilizadas

-  [node-firebird](https://www.npmjs.com/package/node-firebird)
-  [typescript](https://www.typescriptlang.org/)

---

por [Gilberto Fortunato](https://github.com/xuniorss)

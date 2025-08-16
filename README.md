# 📋 Task API Backend

Este é o backend para um aplicativo de lista de tarefas (To-Do list), construído com **AdonisJS v6**.  
A API fornece endpoints para gerenciar usuários, tarefas e autenticação baseada em tokens.

---

## ✨ Funcionalidades

- **Autenticação de Usuários** – Registro, login e logout utilizando tokens de acesso.  
- **Gerenciamento de Usuários** – CRUD completo para usuários.  
- **Gerenciamento de Tarefas** – CRUD completo para tarefas de cada usuário.  
- **Relacionamentos** – As tarefas são associadas diretamente aos usuários.  
- **Validação de Dados** – Utiliza **VineJS** para validar dados de entrada.  
- **Estrutura Moderna** – Segue as melhores práticas e arquitetura do AdonisJS v6.

---

## 🚀 Tecnologias Utilizadas

- **AdonisJS v6** – Framework Node.js robusto para backend.  
- **Lucid ORM** – ORM oficial do AdonisJS.  
- **PostgreSQL** – Banco de dados relacional.  
- **TypeScript** – Superset do JavaScript com tipagem estática.  
- **VineJS** – Validador de dados.  
- **Japa** – Framework de testes.  
- **ESLint & Prettier** – Qualidade e padronização do código.

---

## 📂 Estrutura do Projeto

```
.
├── app/
│   ├── controllers/      # Controladores HTTP
│   ├── middleware/       # Middlewares
│   ├── models/           # Modelos do Lucid ORM (User, Task)
│   └── validators/       # Validadores com VineJS
├── config/               # Arquivos de configuração
├── database/
│   └── migrations/       # Migrations do banco de dados
├── start/
│   ├── env.ts            # Validação de variáveis de ambiente
│   ├── kernel.ts         # Registro de middlewares
│   └── routes.ts         # Definição das rotas da API
├── tests/                # Testes automatizados
├── adonisrc.ts           # Configuração da aplicação
└── package.json          # Dependências e scripts
```

---

## 🔗 Endpoints da API

### Sessão
- **POST** `/session` – Login de usuário.  
- **DELETE** `/session` – Logout de usuário.

### Usuários
- **GET** `/users` – Listar todos os usuários.  
- **POST** `/users` – Criar um novo usuário.  
- **GET** `/users/:id` – Obter um usuário específico.  
- **PUT** `/users/:id` – Atualizar um usuário.  
- **DELETE** `/users/:id` – Deletar um usuário.

### Tarefas (Rotas autenticadas)
- **GET** `/tasks` – Listar todas as tarefas do usuário autenticado.  
- **POST** `/tasks` – Criar uma nova tarefa.  
- **GET** `/tasks/:id` – Obter uma tarefa específica.  
- **PUT** `/tasks/:id` – Atualizar uma tarefa.  
- **PATCH** `/tasks/:id/edit` – Marcar como concluída/não concluída.  
- **DELETE** `/tasks/:id` – Deletar uma tarefa.

---

## 🛠️ Instalação e Execução

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Guilhermeprog3/Task-back.git
   cd task-back
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configuração do Ambiente**
   - Renomeie `.env.example` para `.env`.  
   - Gere a chave de aplicação:
     ```bash
     node ace generate:key
     ```
   - Configure as variáveis do banco PostgreSQL (**DB_HOST**, **DB_PORT**, **DB_USER**, **DB_PASSWORD**, **DB_DATABASE**).

4. **Execute as Migrations**
   ```bash
   node ace migration:run
   ```

5. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```
   Servidor disponível em **http://127.0.0.1:3333**.

---

## ✅ Scripts Disponíveis

- `npm run dev` – Inicia o servidor de desenvolvimento com HMR.  
- `npm run start` – Inicia o servidor em produção (requer build prévio).  
- `npm run build` – Compila o código TypeScript para JavaScript.  
- `npm run test` – Executa testes automatizados.  
- `npm run lint` – Verifica a qualidade do código.  
- `npm run format` – Formata o código com Prettier.

---

## 📬 Contato

👤 **Desenvolvedor:** Guilherme Silva Rios  
🌐 [Portfólio](https://guilhermeriosdev.vercel.app)  
💻 [GitHub](https://github.com/Guilhermeprog3)  

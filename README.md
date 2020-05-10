  <h1 align="center">
      <img src="https://ik.imagekit.io/911o9a87sc/node_E0Z8dA8cB.png" width="320" height="205">
  </h1>

  <h2 align="center">
      <tittle>Iniciando o back-end do GoBarber</tittle>
  <h2 >


  ## 💬️ Sobre

  Esse projeto faz parte do back-end da aplição GoBarber que está sendo desenvolvida ao longo do bootcamp "GoStack" da Rocketseat. Com ele estão sendo trabalhados conceitos fundamentais para desenvolvimento de um "clean code" com arquitetura SOLID. Nessa parte foram trabalhados os seguintes tópicos: Banco de dados, cadastro de usuários, autenticação, upload de arquivos e tratamento de exceções.

   ## 👨‍💻️ Implementações e configurações realizadas:
  - Uso do TypeORM para realizar abstração do banco de dados ✔️;
  - Criação de container de um banco de dados PostgreSQL utilizando Docker ✔️;
  - Customização de regras no eslint para evitar erros ✔️;
  - Customização de regras do express para tipagem de variável ✔️;
  - Utilização de método up e down de uma migration ✔️;
  - Criação de tabela no banco de dados para agendamentos ✔️;
  - Criação de model para agendamentos ✔️;
  - Criação de tabela no banco de dados para usuários ✔️;
  - Criação de model para usuários ✔️;
  - Relacionamento entre tabelas com createForeingKey ✔️;
  - Criação de rotas para usuários ✔️;
  - Criação de rota para uma session ✔️;
  - Criação de service para autenticação ✔️;
  - Criação de service para validação de login ✔️;
  - Criação de token com jsonwebtoken ✔️;
  - Criptografia com bcryptjs ✔️;
  - Criação de middleware de autenticação com validação e criptografia ✔️;
  - Validação de token ✔️;
  - Upload de arquivos com multer ✔️;
  - Criação de serviçe para subir e alterar uma imagem de avatar ✔️;
  - Criação de rota para acessar avatar ✔️;
  - Criação de middleware para tratamento global de erros ✔️;
  - Criação de classe para tratamento de erros ✔️;
  - Customização de erros comuns ✔️;

---

  ## 🚀 Tecnologias e lib's

  O projeto foi desenvolvido utilizando as seguintes tecnologias

  - [TypeScript](https://www.typescriptlang.org/)
  - [NodeJS](https://nodejs.org/en/about/)
  - [Express](https://expressjs.com/pt-br/)
  - [Docker](https://www.docker.com/)
  - [TypeORM](https://typeorm.io/)
  - [yarn](https://yarnpkg.com/)
  - [JWT](https://jwt.io/)
  - [Multer](https://www.npmjs.com/package/multer)
  ---

  ## 🔧️ Ferramentas

  Ferramentas utilizadas nesse projeto:

  - [VSCode](https://code.visualstudio.com/)
  - [Insomnia](https://insomnia.rest/download/)
  - [DBeaver](https://dbeaver.io/)
  - [Git-e-Github](https://github.com/)
  ---

  ## 🗂 Como baixar e rodar o projeto ?

  <p>O banco de dados está rodando em um "Docker" para fins de estudo, vamos fazer a instalação e a configuração dessa base de dados com a aplicação.</p>


  <p>
  Rodei o ambiente em um linux com Ubuntu 18.04 LTS mas também é possível realizar a instalação no windows ou mac. Segue abaixo os links para instalação:

  - Ubuntu: https://docs.docker.com/engine/install/ubuntu/
  - Windows ou Mac: https://docs.docker.com/desktop/

  </p>


  <p>Com o Docker instalado podemos seguir os próximos passos:</p>


  ```bash
      # Clone o repositório no github
      $ git clone https://github.com/RenanRPDR/GoStack11-iniciando-back-end.git

      # Entre no diretório "primeiro-projeto-node"
      $ cd GoStack11-iniciando-back-end/

      # Rode um yarn para instalar as dependências do projeto
      $ yarn install

      # Rode um migrate para criar as tabelas no banco de dados
      $ yarn typeorm migrate:run

      # De um start no servidor e "have fun!😁️"
      $ yarn dev:server
  ```
  ---

  <h3 align="center">Feito por Renan Portugal do Rio</h3>

   <h1 align="center">
      <img src="https://ik.imagekit.io/911o9a87sc/logo_ytBUeCmpV.png"  width=100 height=125>
  </h1>

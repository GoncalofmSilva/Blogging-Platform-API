# Blogging-Platform-API
Blogging Platform API (https://roadmap.sh/projects/blogging-platform-api)


📁 controllers/
Responsáveis por receber o pedido HTTP e devolver a resposta.

Não contêm lógica de negócio.

Chamam os services.

Lidam com req e res.

Exemplos:
post.controller.ts → recebe pedidos para criar/listar posts.

user.controller.ts → recebe pedidos relacionados a utilizadores.

📁 services/
Aqui vive a lógica de negócio.

Validações

Regras da aplicação

Processamento de dados

Decisões (ex.: “um post precisa de título”)

Os services não sabem nada sobre Express.

Exemplos:
post.service.ts → valida dados do post, chama o repositório.

user.service.ts → lógica de criação/autenticação de utilizadores.

📁 repositories/
Camada responsável por aceder aos dados.

Como estás a usar JSON em vez de base de dados, aqui ficas com:

Ler ficheiros JSON

Escrever ficheiros JSON

Atualizar e remover dados

Mais tarde, quando mudares para Postgres, só esta camada muda.

Exemplos:
post.repository.ts → lê/escreve no posts.json.

user.repository.ts → lê/escreve no users.json.

📁 models/
Define interfaces TypeScript para os teus dados.

Serve para:

Garantir tipagem

Evitar erros

Documentar a estrutura dos objetos

Exemplos:
Post → id, title, content, authorId, createdAt

User → id, name, email, passwordHash

📁 data/
Onde guardas os ficheiros JSON que funcionam como “base de dados”.

Exemplos:
posts.json

users.json

Mais tarde, esta pasta desaparece quando usares uma DB real.

📁 routes/
Define os endpoints e liga-os aos controllers.

/posts → post.routes.ts

/users → user.routes.ts

Cada ficheiro contém apenas:

Rotas

Métodos HTTP

Referência ao controller

📁 middlewares/
Funções que correm entre o pedido e o controller.

Exemplos:
validate.middleware.ts → valida body, params, etc.

error.middleware.ts → captura erros e devolve resposta formatada.

O middleware de erros é essencial para evitar crashes.

📁 utils/
Funções auxiliares que não pertencem a nenhuma camada específica.

Exemplos:
fileHandler.ts → ler/escrever JSON de forma segura.

ApiError.ts → classe para erros customizados (ex.: 400, 404, 500).

📄 app.ts
Configura a aplicação Express:

Middlewares globais

Rotas

Tratamento de erros

Configuração de JSON, CORS, etc.

É a “montagem” da tua API.

📄 server.ts
Arranca o servidor.

Importa o app

Define a porta

Faz app.listen()

É o ponto de entrada da aplicação.
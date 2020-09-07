<hr>

Olá pessoal, é um prazer fazer este desafio! 

Gostaria de agradecer a oportunidade.

<hr>

Setup (mac/linux):
-   1 - cp .env.example .env - Configure as credenciais no arquivo .env com dados do banco de dados
-   2 - dê permissão no setup.sh com chmod +x setup.sh - Este script vai fazer todo o setup necessário e vai deixar os containers rodando em background.

<hr>

## Tecnologias:

-   NodeJS 12
-   Docker
-   MySQL

# Desafio
Criar uma api com os seguintes endpoints:

Laboratório:

-  [x] cadastrar um novo laborário;
-  [x] obter uma lista de laboratórios ativos;
-  [x] atualizar um laboratório existente;
-  [x] remover logicamente um laboratório ativo.

Exames:

-  [x] cadastrar um novo exame;
-  [x] obter uma lista de exames ativos;
-  [x] atualizar um exame existente;
-  [x] remover logicamente um exame ativo.

Associação:

-  [ ] associar um exame ativo à um laboratório ativo;
-  [ ] desassociar um exame ativo de um laboratório ativo;

Importante:

-  [ ] Um exame pode estar associado a mais de um laboratório;
-  [x] O cadastro de um laboratório/exame é considerado ativo e recebe um id gerado automaticamente.

# Informações de dados

Laboratório

-   nome
-   endereço
-   status [ativo, inativo]

Exame

-   nome
-   tipo [analise clinica, imagem]
-   status [ativo, inativo]

# Funcionalidades extras
-  [ ] Possibilidade de executar cadastro, atualização e remoção em lote (não o fiz por preguiça/falta de tempo);

-  [ ] Endpoint que faz a busca por nome do exame e retorna todos os laboratorios associados a esse exame.


# Diferenciais
-   [x] Publicação do ambiente em um serviço cloud de hospedagens (Heroku, AWS, GCP, etc) - https://dasa-challenge.herokuapp.com/
-   [x] Configurar a aplicação para rodar em um container - docker-compose.yml e Dockerfile configurados
-   [x] Documentação da API - https://documenter.getpostman.com/view/2492835/TVCiUScQ


<hr>

-   Arquitetura utilizada: Clean Architecture ( tentei, não domino )

-   Desafio iniciado em: 06/09/2020 21:00
-   Desafio finalizado em: ainda não finalizado

-   Utilizei token fixo para autorização mas poderia ter utilizado jwt, não usei jwt por preguiça/falta de tempo;
-   sequelize-cli db:migrate - Roda as migrations pra popular o banco
-   yarn start - Inicia o script

-   Link vídeo funcionando: em breve

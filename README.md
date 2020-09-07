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

-  [ ] cadastrar um novo laborário;
-  [ ] obter uma lista de laboratórios ativos;
-  [ ] atualizar um laboratório existente;
-  [ ] remover logicamente um laboratório ativo.

Exames:

-  [ ] cadastrar um novo exame;
-  [ ] obter uma lista de exames ativos;
-  [ ] atualizar um exame existente;
-  [ ] remover logicamente um exame ativo.

Associação:

-  [ ] associar um exame ativo à um laboratório ativo;
-  [ ] desassociar um exame ativo de um laboratório ativo;
Importante:

-  [ ] Um exame pode estar associado a mais de um laboratório;
-  [ ] O cadastro de um laboratório/exame é considerado ativo e recebe um id gerado automaticamente.

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
-  [ ] Possibilidade de executar cadastro, atualização e remoção em lote 
    ps: ( poderia ter usado background jobs para não travar a requisição, mas não o fiz por preguiça/falta de tempo);

-  [ ] Endpoint que faz a busca por nome do exame e retorna todos os laboratorios associados a esse exame.

<hr>

-   Foi publicado no heroku no endpoint: em breve

-   Arquitetura utilizada: Clean Architecture ( tentei, não domino )

-   Desafio iniciado em: 06/09/2020 21:00
-   Desafio finalizado em: ainda não finalizado
-   Utilizei token fixo para autorização mas poderia ter utilizado jwt, não usei jwt por preguiça/falta de tempo;
-   sequelize-cli db:migrate - Roda as migrations pra popular o banco
-   yarn start - Inicia o script
-   Link doc postman: em breve

-   Link vídeo funcionando: em breve


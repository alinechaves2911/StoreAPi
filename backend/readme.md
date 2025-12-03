## API-restful Store

desenvolvimento de uma api DE VENDAS, Com modulos de produtos, usuários clientes pededios de compras, upload de arquivos, sistema de autenticação, sistema de cache.



## Arquitetura
  O projeto foi estruturado seguindo:
  - Clean Code
  - SOLID
  - Clean Architecture (adaptada)

    Separando de forma clara:
   - Domain → Regras de negócio puras
   - Infrastructure → Banco, providers, env, filas, cache
   - HTTP → Controllers, middlewares e rotas
   - Modules → Produtos, usuários, clientes e pedidos

    Esse padrão garante:
    ✔ Manutenção fácil
    ✔ Testabilidade alta
    ✔ Alta escalabilidade
    ✔ Baixo acoplamento entre módulos


## Techs utilizadas
 - Node.js
 - TypeScript
 - Express
 - Jest
 - TypeOrm
 - Autenticação com JWT
 - Redis (cache)
 - PostGreSQL
 - Docker
 -  Swagger (documentação)
 -  Zod (validação de dados)
## Pastas
```
backend/
│
├── src/
│   ├── common/
│   │   ├── domain/               # Entidades, regras de negócio e interfaces de domínio
│   │   ├── infrastructure/        # Implementações externas (DB, providers, env)
│   │   │   └── env/
│   │   │       └── index.ts       # Carregamento de variáveis de ambiente
│   │   └── http/                  # Entrada (controllers, routes, middlewares)
│   │       ├── middlewares/
│   │       ├── app.ts            # Configuração do Express
│   │       ├── routes.ts         # Rotas principais do sistema
│   │       └── server.ts         # Inicialização da aplicação
│   │
│   ├── customers/                # Módulo de Clientes
│   ├── orders/                   # Módulo de Pedidos
│   ├── products/                 # Módulo de Produtos
│   └── users/                    # Módulo de Usuários
│
├── .env                          # Variáveis de ambiente
├── .env.example                  # Exemplo de configuração
├── .editorconfig                 # Padrões de editor
├── .eslintrc.js                  # ESLint Config
├── .prettierrc                   # Prettier Config
├── docker-compose.yml            # Subida dos serviços (DB, Redis, etc)
├── package.json                  # Scripts e dependências
└── tsconfig.json                 # Configuração do TypeScript

```

## techs utilizadas
Node.js
Typescript
Express
Jest
TypeORM
autenticação com JWT
Redis
Postgres
Docker
Swagger

## Configuração

1. Clone o repositório e acesse a pasta do projeto.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Suba o banco de dados:
   ```bash
   docker compose up -d
   ```
4. Crie o arquivo `.env` na raiz de `backend/`:
    ```
    PORT=3333
    NODE_ENV=development
    API_URL=http://localhost:3333


    ```

## Scripts

Executando a aplicação
 ```bash
 npm run dev
 ```
- Porta padrão: http://localhost:3333
- Documentação: http://localhost:3333/docs
## Endpoints

## Test

## Scripts


## Licença
ISC (veja [`backend/package.json`](backend/package.json))

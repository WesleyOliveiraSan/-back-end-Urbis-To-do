# [BACK-END] Urbis-To-do

App de to-do (Lista de tarefas) feita para processo da Urbis.

Como utilizar as variáveis de ambiente e conectar o banco de dados (PostgreSQL):

1. Após o clone do back-end, digite npm install || yarn.
2. Crie na raiz da pasta um arquivo .env e copie as variáveis de ambiente do arquivo .env.example para ele.
3. Preencha os campos DB_HOST,DB_USER,DB_PASS e DB_NAME com os dados do banco PostgreSQL.
4. Digite npm run sequelize db:migrate || yarn sequelize db:migrate.
5. Digite npm run dev || yarn dev para subir o servidor em desenvolvimento.

# Feedback helper v1.0.2

Script em NodeJS para automatizar o processo de baixar repositórios e rodar testes para os feedbacks técnicos.

## Como usar

1. Não é preciso instalar este projeto, somente clonar para o diretório desejado;
2. Preencher o arquivo `repos.txt` com a lista de repositórios no formato que está como exemplo - um link de repositório por linha (não esqueça de apagar os exemplos);
3. Rodar com `npm start`.

Esse script vai automaticamente:
* Clonar os repositórios das alunas dentro de pastas separadas pelos nomes dos perfis delas no gh;
* As pastas serão criadas dentro do diretório a partir de onde for executado o script;
* Criar a pasta `logs` para salvar os logs de teste;
* Executar os testes de cada repositório;
* subir um servidor local com `serve` para cada repositório, com numeração de portas começando em `3000`.

## Roadmap

[] Fazer testes :D

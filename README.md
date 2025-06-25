# Descrição do Projeto

Este projeto foi desenvolvido com o objetivo de simular uma rotina real de trabalho em uma equipe de QA, implementando uma pipeline de integração contínua (CI) com testes automatizados em múltiplas camadas.

A aplicação consiste em um sistema simples de cadastro de contatos, com:

`Backend em Flask com banco de dados simulado`
`Frontend em HTML + JavaScript`
`Testes de API com Postman + Newman`
`Testes de interface com Cypress`
`Pipeline CI com GitHub Actions`

![Demonstração da pipeline](./artefato/pipeline-rodando.gif)

## Objetivos e Aprendizados
- Criar um ambiente completo com backend, frontend e banco simulado
- Automatizar testes de API e interface
- Simular uma rotina de CI/CD para validação antes de merges
- Praticar isolamento de testes sem afetar o banco real
- Lidar com erros reais de ambiente e configuração em pipelines
- Automatizar a instalação, execução e validação de tudo com GitHub Actions

## Tecnologias e Ferramentas
- Backend	Flask, SQLAlchemy
- Frontend	HTML, JS, HTTP Server
- Testes API	Postman, Newman
- Testes UI	Cypress
- CI/CD	GitHub Actions
- Banco (mock)	SQLite (em memória para testes)

## Principais Desafios Enfrentados
- Configurar corretamente o servidor backend para rodar no GitHub Actions
- Resolver conflito de endereços 127.0.0.1 vs localhost em ambientes headless
- Usar wait-on para aguardar servidores, e depois remover por instabilidade
- Fazer o Cypress rodar via CLI no ambiente CI sem interface gráfica
- Garantir que os testes rodassem sem alterar o banco de dados real

## Como Clonar e Rodar o Projeto Localmente
1. Clone o repositório
`git clone https://github.com/Meydex/Cadastro_de_contatos_pipeline.git`

2. Crie e ative o ambiente virtual

`python -m venv venv`
`.\venv\Scripts\activate`     # Windows
### ou

`source venv/bin/activate`   # Linux/Mac

3. Instale as dependências do projeto

`pip install -r requirements.txt`
## Executando Backend Manualmente
Backend (com banco real - para testes locais)

`cd backend`
`python app.py`
Backend (modo teste, banco em memória)

`cd backend`
`pytest test_api.py`

## Executando Frontend Manualmente

`cd frontend`
`python -m http.server 5500`

## Testes
- Testes com Newman
    `newman run ./qa_testes/postman/Contatos.postman_collection.json -e ./qa_testes/postman/contatos_env.json`

- Testes com Cypress
    Modo interativo:
        `npx cypress open`
    Modo headless (CLI):
        `npx cypress run`

## Pipeline CI - GitHub Actions
A pipeline está configurada para rodar automaticamente em:

- Push para a branch principal
- Pull Requests

Ela realiza as seguintes etapas:

- Instala dependências (backend e frontend)
- Sobe os servidores (Flask + HTTP server)
- Roda os testes Newman (API)
- Roda os testes Cypress (UI)
- Finaliza o job e limpa processos

Arquivo de configuração: `.github/workflows/ci.yml`

## Conclusão
Este projeto representa minha primeira entrega real de uma pipeline automatizada de testes, com todas as camadas bem definidas e cobertas, deixei  planos de teste, casos de teste e algumas outras documentações e/ou testes mais elaborados de fora, pois o intuito do projeto é focar na automação e manutenção de uma pipeline em um ambiente de trabalho. Foi um exercício completo de:

- Automação de testes
- Criação de ambiente realista
- Configuração de CI
- Resolução de problemas de ambiente em execução remota




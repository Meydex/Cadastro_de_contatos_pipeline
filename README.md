## - entrar no ambiente 
.\venv\Scripts\activate
## - entrar na pasta backend
cd backend
## - roda servidor local frontend com bd real
python app.py
## - roda teste com banco virtual para testes
pytest test_api.py

## - entrar na pasta frontend
cd frontend
## - roda servidor local frontend
python -m http.server 5500

## - rodar newman com ambiente
newman run ./qa_testes/postman/Contatos.postman_collection.json -e ./qa_testes/postman/contatos_env.json


## - inicar cypress
npx cypress open

## - rodar cypress via cli
npx cypress run
---------
## - rodar projeto depois 
python -m venv venv

.\venv\Scripts\activate

pip install -r requirements.txt
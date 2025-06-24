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
python -m http.server 5000

## - rodar newman com ambiente
newman run Contatos.postman_collection.json -e contatos_env.json


---------
## - rodar projeto depois 
python -m venv venv
.\venv\Scripts\activate
pip install -r requirements.txt
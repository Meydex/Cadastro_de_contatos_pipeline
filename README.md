## - entrar no ambiente 
.\venv\Scripts\activate
## - entrar na pasta backend
cd backend
## - testar api localmente com banco real
python app.py
## - roda teste com banco virtual para testes
pytest test_api.py



---------
## - rodar projeto depois 
python -m venv venv
.\venv\Scripts\activate
pip install -r requirements.txt
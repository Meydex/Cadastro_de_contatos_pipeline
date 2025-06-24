import os
import sys
import pytest

# Seta o ambiente para teste ANTES de importar app
os.environ["APP_ENV"] = "testing"

from app import app, db, Contact

@pytest.fixture
def client():
    with app.test_client() as client:
        with app.app_context():
            db.create_all()
        yield client
        with app.app_context():
            db.session.remove()
            db.drop_all()

def test_get_contacts_empty(client):
    response = client.get("/contacts")
    assert response.status_code == 200
    assert response.get_json() == []

def test_post_contact(client):
    data = {
        "name": "João",
        "email": "joao@example.com",
        "phone": "999999999"
    }
    response = client.post("/contacts", json=data)
    assert response.status_code == 201
    response = client.get("/contacts")
    result = response.get_json()
    assert len(result) == 1
    assert result[0]["name"] == "João"

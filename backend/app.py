
import os
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from config import ProductionConfig, TestingConfig

app = Flask(__name__)
CORS(app)
APP_ENV = os.getenv("APP_ENV", "production")

if APP_ENV == "testing":
    app.config.from_object(TestingConfig)
else:
    app.config.from_object(ProductionConfig)
db = SQLAlchemy(app)

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    email = db.Column(db.String(120))
    phone = db.Column(db.String(20))

@app.route("/contacts", methods=["GET"])
def get_contacts():
    contacts = Contact.query.all()
    return jsonify([{"id": c.id, "name": c.name, "email": c.email, "phone": c.phone} for c in contacts])

@app.route("/contacts", methods=["POST"])
def add_contact():
    data = request.get_json()
    new_contact = Contact(name=data["name"], email=data["email"], phone=data["phone"])
    db.session.add(new_contact)
    db.session.commit()
    return jsonify({"message": "Contact created"}), 201

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)

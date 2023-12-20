
from flask import request, jsonify
from models import db, User

def add_user():
    name = request.form['name']
    profile = request.form['profile']
    new_user = User(name=name, profile=profile)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User added successfully'})

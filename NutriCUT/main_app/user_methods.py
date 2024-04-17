#Api REST Methods
from main import db,User
from flask import Flask, request, session
from flask_restful import Resource

class register(Resource):
    def post(self):
        username = request.get_json().get('username')
        password = request.get_json().get('password')

        if username and password:
            new_user = User(username=username)
            new_user.password_hash = password

            db.session.add(new_user)
            db.session.commit()

            session['user_id'] = new_user.id
            
            return new_user.to_dict(), 201

        return {'error': '422 Unprocessable Entity'}, 422
    
class login(Resource):
    def post(self):
        username = request.get_json()['username']
        password = request.get_json()['password']

        user = User.query.filter(User.username == username).first()
        if user and user.authenticate(password):
            session['user_id'] = user.id
            return user.to_dict(), 200
        else:
            return {'error': '401 Unauthorized'}, 401
        
class CheckSession(Resource):
    def get(self):
        if session.get('user_id'):
            user = User.query.filter(User.id == session['user_id']).first()
            return user.to_dict(), 200
        return {'error': '401 Resource not found'}, 401
    
class logout(Resource):
    def delete(self):
        if session.get('user_id'):
            session['user_id'] = None
            return {}, 204
        else:
            return {'error': '401 Unauthorized'}, 401
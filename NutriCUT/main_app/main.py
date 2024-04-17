from dataclasses import dataclass
from flask import Flask, jsonify, request, session
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required
from flask_sqlalchemy import SQLAlchemy
from flask import render_template
from sqlalchemy.ext.hybrid import hybrid_property
from flask_bcrypt import bcrypt, generate_password_hash, check_password_hash

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config["SQLALCHEMY_DATABASE_URI"] =  'mysql://root:root@db/main'
app.secret_key = '%31!dp2Bs_$$,-k)HCWFyN[sKWQtS$'
app.config["JWT_SECRET_KEY"] = "3GT|<{t'zVPwV%Dg.B:j6/$iid;N'/"

CORS(app)
jwt = JWTManager(app)
db = SQLAlchemy(app)




@dataclass
class Recipe(db.Model):
    id: int
    title: str
    image: str
    description: str
    id = db.Column(db.Integer, primary_key=True, autoincrement = False)
    title = db.Column(db.String(100))
    image = db.Column(db.String(200))
    description = db.Column(db.String(200))

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(30), nullable=False, unique=True)
    email = db.Column(db.String(100), nullable=False, unique=True)
    _password_hash = db.Column(db.String(16))

    @hybrid_property
    def password_hash(self):
        raise AttributeError('Password hashes may not be viewed.')
    
    @password_hash.setter
    def password_hash(self, password):
        password_hash = generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return check_password_hash(
            self._password_hash, password.encode('utf-8'))
    






@app.route('/api/recipes')
def index():
    return jsonify(Recipe.query.all())

@app.route('/api/home', methods=["GET", "POST"])
@jwt_required()
def Home():
    if request.method == 'POST':
        current_identity = get_jwt_identity()
        if current_identity:
            return jsonify(logged_in_as=current_identity)
        else:
            return jsonify(logged_in_as="anonymous user")

@app.route('/api/signup', methods = ['POST', 'GET'])
def Signup():
    if request.method == 'POST':
        username = request.get_json().get('username')
        password = request.get_json().get('password')
        email = request.get_json().get('email')

        if username and password:
            new_user = User(username=username, email = email)
            new_user.password_hash = password

            db.session.add(new_user)
            db.session.commit()

            session['user_id'] = new_user.id
                
            return "Usuario Registrado", 201

        return {'error': '422 Unprocessable Entity'}, 422
    elif request.method == 'GET':
        return "Registro"

@app.route('/api/login', methods = ['POST'])
def Login():
    if request.method == 'POST':
        username = request.get_json()['username']
        password = request.get_json()['password']

        user = User.query.filter(User.username == username).first()
        if user and user.authenticate(password):
            session['user_id'] = user.id
            token = create_access_token(identity = user.id)
            return jsonify(access_token =token), 200
        else:
            return {'error': '401 Unauthorized'}, 401


if __name__ == '__main__':
    app.run(debug = True, host='0.0.0.0')
from dataclasses import dataclass
from flask import Flask, abort, jsonify, request, session
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey, UniqueConstraint
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
    id = db.Column(db.Integer, primary_key=True,  autoincrement = False)
    title = db.Column(db.String(100))
    image = db.Column(db.String(200))
    description = db.Column(db.String(200))



@dataclass
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


class UserRecipe(db.Model):
    id = db.Column(db.Integer, primary_key=True,  autoincrement = True)
    user_id = db.Column(db.Integer)
    recipe_id = db.Column(db.Integer)

    UniqueConstraint('user_id', 'recipe_id', name = 'user_recipe_unique')

class API_User(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement = True)
    user_id = db.Column(db.Integer, ForeignKey("user.id"), autoincrement = False)
    user = db.Column(db.String(100))
    pass_api = db.Column(db.String(100))
    hash = db.Column(db.String(100))

    @hybrid_property
    def password_hash(self):
        raise AttributeError('Password hashes may not be viewed.')
    
    @password_hash.setter
    def password_hash(self, password):
        password_hash = generate_password_hash(
            password.encode('utf-8'))
        self.pass_api = password_hash.decode('utf-8')

    def authenticate(self, password):
        return check_password_hash(
            self.pass_api, password.encode('utf-8'))
    

class User_Plans(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey("user.id"), autoincrement = False)
    name = db.Column(db.String(250))







@app.route('/api/recipes')
def index():
    return jsonify(Recipe.query.all())

@app.route('/api/user_liked', methods=["POST"])
def favorites():
    if request.method == 'POST':
        id = request.get_json()['id']
        fav = UserRecipe.query.filter_by(user_id= id).all()
        if fav:
            fav_list = [item.recipe_id for item in fav]
            print(fav_list)
            return jsonify(fav_list), 200
        else:
            return jsonify({'message': 'User does not exist'}), 404

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
            return jsonify(access_token =token, id = user.id , username = user.username, email = user.email), 200
        else:
            return {'error': '401 Unauthorized'}, 401

@app.route('/api/check_plan', methods = ['POST'])
def Plan_user():
    if request.method == 'POST':
        id = request.get_json()['id']
        user = API_User.query.filter_by(user_id= id).first()
        plan = User_Plans.query.filter_by(user_id = id).all()
        if user and plan:
            plan_list = [item.name for item in plan]
            plan_id = [item.id for item in plan]
            return jsonify(user = user.user , hash = user.hash , plan_list = plan_list, plan_id = plan_id ), 200
        elif user:
            return jsonify(user = user.user , hash = user.hash), 200
        else:
            return jsonify({'message': 'User does not exist'}), 404
        
@app.route('/api/register_userapi', methods = ['POST'])
def register_api():
    if request.method == 'POST':
        user =  request.get_json().get('username')
        pass_api = request.get_json().get('spoonacularPassword')
        hash = request.get_json().get('hash')
        id_user = request.get_json().get('id')

        if user and pass_api and hash and id_user:
            new_user_plan = API_User(pass_api = pass_api, user = user, hash = hash, user_id = id_user)
            new_user_plan.password_hash = pass_api
            db.session.add(new_user_plan)
            db.session.commit()

            session['user_id'] = new_user_plan.id
                
            return "Usuario Registrado En La Api", 201
        

@app.route('/api/userplans', methods=["POST"])
def plan():
    if request.method == 'POST':
        id_plan = request.get_json().get('id_plan')
        id_user = request.get_json().get('id_user')
        plan_name = request.get_json().get('plan_name')
        if id_user and id_user and plan_name:
            user_plan = User_Plans(id = id_plan, user_id = id_user, name = plan_name)
            db.session.add(user_plan)
            db.session.commit()

            return "Plan Registrado", 201
        
@app.route('/api/recipe_like', methods = ['POST'])
def like():
    if request.method == 'POST':
        user_id =  request.get_json().get('user_id')
        recipe_id = request.get_json().get('recipe_id')

        try:
            like = UserRecipe(user_id = user_id, recipe_id = recipe_id)
            db.session.add(like)
            db.session.commit()

        except:
            abort(400, "Already liked it")

        return jsonify({
            'message': 'liked'
        })




if __name__ == '__main__':
    app.run(debug = True, host='0.0.0.0')
from flask import Flask ,jsonify,request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS

app=Flask(__name__)   #creamos el objeto app
CORS(app)     # soluciona el error cuando el frontend accede a los endpoint que genera el backend

app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root:root@localhost/flaskmysql'
#                                          usuario:clave@localhost/nombreBaseDeDAtos

app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
db= SQLAlchemy(app)
ma=Marshmallow(app)



from controladores.producto_controlador import *

from controladores.subtipo_controlador import *


# programa principal
if __name__=='__main__': 
       app.run(debug=True, port=5000) 
       
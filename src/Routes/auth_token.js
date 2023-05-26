const express = require( 'express' );
const authByEmailPwd = require('../helpers/auth-by-email-pwd') ;
const { SignJWT,jwtVerify } =  require('jose');
const User = require('../models/userModel'); 
//import mongoose from 'mongoose'; 

const authTokenRouter = express.Router();

authTokenRouter.post("/login", async(req, res) => {
    const { email, contrasenha } = req.body;

    if(!email || !contrasenha) return res.status(400);

    try {
      const user = await authByEmailPwd(email, contrasenha);
      
			//generar token y devolver token
			const jwtConstructor = new SignJWT({ guid: user._id });
                                     //Parametros de ese objeto cabecera
			const encoder = new TextEncoder()
			const jwt = await jwtConstructor
			.setProtectedHeader({alg: 'HS256', typ: 'JWT'})
			.setIssuedAt()
			.setExpirationTime('1h').sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
			//res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
      return res.send({ jwt })
    } catch (err) {
       return res.sendStatus(401); 
    }
});

//Solicitud autenticada con token para obtener el perfil del usuario
authTokenRouter.get("/profile", async (req, res) => {
    const {authorization} = req.headers

		if(!authorization) return res.status(401);
		//obtener token

		try {
			const encoder = new TextEncoder();
			const {payload} = await jwtVerify(authorization, encoder.encode(process.env.JWT_PRIVATE_KEY));
      
			const user = await User.findOne({ _id: payload.guid });

			if(!user) return res.status(401);

			delete user.contrasenha;

			return res.send(user);
		} catch (err) {
			return res.status(401)
			
		}

    //const user = USERS_BBDD.find((user) => user.guid === payload.guid);
		/*const user = await User.findOne({ guid: payload.guid });

    if (!user) return res.sendStatus(401);
    delete user.contrasenha;

    return res.send(user);
    */
});

module.exports = authTokenRouter;
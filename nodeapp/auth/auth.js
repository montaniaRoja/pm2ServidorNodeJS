const Cliente = require("../models/cliente");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET_KEY = 'ProgramacionMovilIIUTH';

exports.authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization || " ";

    if (!authHeader.toLowerCase().startsWith("bearer")) {
        return res.status(401).send("Falta el token de Autenticación");
    }

    const token = authHeader.replace("Bearer ", "");

    if (!token) {
        return res.status(401).send("Tipo de Token no es válido");
    }
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch {
        return res.status(401).send("Token invalido");
    }
};
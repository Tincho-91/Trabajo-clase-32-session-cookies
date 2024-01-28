const express = require('express');
const router = express.Router();
const {check} = require("express-validator");
const controller = require('../controllers/indexControllers');

const Validations = [
    check("name")
        .notEmpty()
        .withMessage("Debes ingresar un nombre").bail()
        .isLength({ min: 2 })
        .withMessage("El nombre debe tener al menos 2 caracteres"),
    check("color")
        .notEmpty()
        .withMessage("Debes seleccionar un color").bail(),
    check("mail")
        .notEmpty()
        .withMessage("Debes ingresar un mail").bail()
        .isEmail()
        .withMessage("Debes ingresar un mail válido"),
    check("age")
        .isInt({ min: 1, max: 199 })
        .withMessage("Debes ingresar una edad válida"),
];

router.get('/', controller.homePage);
router.post("/form" , Validations , controller.getData);
router.get("/gracias" , controller.gracias);
router.get("/borrar" , controller.borrar);

module.exports = router; 
const { Pago, Detallepago } = require('../models');
require('dotenv').config();

module.exports = {
    create(req, res) {
        const { nombre_pago } = req.body;

        if (!nombre_pago) {
            return res.status(400).send({ message: 'Todos los campos son requeridos' });
        }

        return Pago.create({
            nombre_pago
        })
            .then(pago => res.status(201).send(pago))
            .catch(error => res.status(400).send({ message: error.message }));
    },

    list(_, res) {
        return Pago.findAll({})
            .then(pagos => res.status(200).send(pagos))
            .catch(error => res.status(400).send({ message: error.message }));
    },

    async listPagosDetalles(_, res) {
        try {
            const resultados = await Pago.findAll({
                attributes: ['nombre_pago'],
                include: [{
                    model: Detallepago,
                    attributes: ['clavepago', 'monto', 'status']
                }]
            });
            return res.status(200).send(resultados);
        } catch (error) {
            return res.status(400).send({ message: error.message });
        }
    }
};

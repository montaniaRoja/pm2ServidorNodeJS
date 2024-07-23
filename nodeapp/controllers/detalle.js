const { Pago, Detallepago } = require('../models');
const detallepago = require('../models/detallepago');

module.exports = {
    create(req, res) {
        const { id_pago, monto, status, clavepago } = req.body;

        if (!id_pago || !monto || !status || !clavepago) {
            return res.status(400).send({ message: 'Todos los campos son requeridos' });
        }

        return Detallepago.create({
            id_pago,
            monto,
            status,
            clavepago
        })
            .then(detallepago => res.status(201).send(detallepago))
            .catch(error => res.status(400).send({ message: error.message }));
    },
    find(req, res) {
        const { clavepago, status } = req.params;

        return Detallepago.findOne({
            where: { clavepago: clavepago, status: status }
        })
            .then(detallepago => {
                if (!detallepago) {
                    return res.status(404).send({ message: 'Pago no encontrado' });
                }
                return res.status(200).send(detallepago);
            })
            .catch(error => res.status(400).send({ message: error.message }));
    },
    updateStatus(req, res) {
        const { clavepago } = req.params;

        return Detallepago.findOne({
            where: { clavepago: clavepago }
        })
            .then(detallepago => {
                if (!detallepago) {
                    return res.status(404).send({ message: 'Pago no encontrado' });
                }

                return detallepago.update({ status: 'Pagado' })
                    .then(() => res.status(200).send({ message: 'Estado actualizado a Pagado' }))
                    .catch(error => res.status(400).send({ message: error.message }));
            })
            .catch(error => res.status(400).send({ message: error.message }));
    }
};

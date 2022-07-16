function errorHandler(err, req, res, next) {

    if(typeof err === 'string') return res.status(400).send({ msg: err });
    if(typeof err === 'ValidationError') return res.status(400).send({ msg: err.message });
    if(typeof err === 'UnauthorizedError') return res.status(401).send({ msg: err.message });

    return res.status(500).send({ msg: err.message });

}

module.exports = { errorHandler };
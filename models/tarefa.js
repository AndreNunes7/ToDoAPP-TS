const mongoose = require('mongoose');

const schemaTarefa = new mongoose.Schema({
    descricao: {
        type: String,
        required: true
    },
    statusRealizada: {
        type: Boolean,
        required: true
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('Tarefa', schemaTarefa);

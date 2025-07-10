const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    candidateId: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        
    },
    points: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Candidate', candidateSchema);
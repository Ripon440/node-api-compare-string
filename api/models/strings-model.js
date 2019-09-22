const mongoose = require('mongoose');

const stringSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    strA: { type: String, required: true },
    strB: { type: String, require: false }
});

module.exports = mongoose.model('Str', stringSchema);
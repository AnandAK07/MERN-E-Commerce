const mongoose = require('mongoose');
const addressSchema = mongoose.Schema({
    name: { type: String, required: true },
    flatNo: { type: String, required: true },
    area: { type: String, required: true },
    landmark: { type: String, required: true },
    townCity: { type: String, required: true },
    pincode: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true, default: 'India' },
    mobile: { type: String, required: true },
    user_id: { type: String, required: true }
})

const model = mongoose.model('address', addressSchema);

module.exports = model
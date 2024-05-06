const mongoose = require('mongoose');

const redemSchema = mongoose.Schema({
    campaign_id: String,
    ads_id: String,
    outlet_code: String,
    status:{
        type: String,
        enum: ['success', 'failed']
    }
}, 
{
    timestamps: true
});

redemSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = mongoose.model('City', redemSchema);


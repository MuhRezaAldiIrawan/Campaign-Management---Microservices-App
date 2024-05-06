const RedemLogs = require('../models/redem_logs');

exports.postRedem = async (req, res) => {

    try{

        const redem = new RedemLogs({
            campaign_id: req.body.campaign_id,
            ads_id: req.body.ads_id,
            outlet_code: req.body.outlet_code,
            status: req.body.status
        });

        const redemStatus = await redem.save();
        res.status(201).json(redemStatus);

    }catch (error) {

        res.status(500).json({ messaage: error.messaage })
        
    }
}
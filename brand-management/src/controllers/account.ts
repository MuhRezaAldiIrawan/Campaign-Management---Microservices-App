import express from 'express';
import axios from 'axios';

export const getBrand = async (req: express.Request, res: express.Response) => {
    try {

        const response = await axios.get('https://portal.aptana.co.id/api/v1/Account', {
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': 'd3cc25885aaf352e0c2fc422d3b1e950'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500);
    }
}


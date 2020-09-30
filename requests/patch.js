const axios = require('axios');

exports.patchData = async (req, res) => {
  try {
    const { url } = req.query;
    const { body, headers } = req;

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    const response = await axios.patch(url, body, { headers });
    const { data: responseData } = await response;

    return res.status(200).json(responseData);
  } catch (error) {
    return res.status(500).json(error);
  }
};

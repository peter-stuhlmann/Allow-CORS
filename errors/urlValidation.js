exports.urlValidation = (req, res, next) => {
  const { url } = req.query;
  if (url.startsWith('http://') || url.startsWith('https://')) {
    next();
  } else {
    return res.status(400).json({
      error: {
        message: "The url has to start with 'http://' or 'https://'.",
      },
    });
  }
};

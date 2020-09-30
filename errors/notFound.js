exports.notFound = (req, res) => {
  return res.status(404).json({
    error: {
      message: `The endpoint ${req.path} does not exist.`,
    },
  });
};

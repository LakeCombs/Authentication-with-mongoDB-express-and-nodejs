exports.getPrivateData = (req, res, next) => {
  res
    .status(200)
    .json({
      succes: true,
      data: "you got access to private data in this route",
    });
};

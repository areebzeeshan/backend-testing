const submit = (req, res) => {
  res.status(200).json({
    username: "areeb",
    password: "areeb123",
  });
};

module.exports = { submit };

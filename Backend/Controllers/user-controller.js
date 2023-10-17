const userModel = require("../Models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const userRegister = async (req, res) => {
  userModel
    .findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        //hashing the password
        let hashedPassword = bcrypt.hashSync(req.body.password, 8);
        userModel
          .create({
            id: req.body.id,
            username: req.body.username,
            password: hashedPassword,
          })
          .then((data) => {
            if (data) {
              //Generating jwt token
              let token = jwt.sign(
                { id: data._id },
                process.env.JWT_SECRET_ADMIN,
                {
                  expiresIn: 86400,
                }
              );
              return res
                .status(200)
                .send({ auth: true, token: token, data: data });
            }
          });
      } else {
        return res.status(500).send({ msg: "Already available user!" });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).send({ msg: "Server Error Occured!" });
    });
};

const userLogin = async (req, res) => {
  userModel.findOne({ username: req.body.username }).then((user) => {
    if (user) {
      //Comparing password is correct or not
      let passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({ auth: false, token: null });
      }
      //Generating a jwt
      var token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_ADMIN, {
        expiresIn: 86400,
      });

      return res.status(200).send({ auth: true, token: token });
    }
  });
};

module.exports = {
  userRegister,
  userLogin,
};

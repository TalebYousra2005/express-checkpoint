const moment = require("moment");

const CheckTime = (req, res, next) => {
  const currentDay = moment().day();
  const currentTime = moment().hour();
  try {
    if (
      (currentDay === 0 || currentDay === 6) &&
      (currentTime > 17 || currentTime < 9)
    ) {
      return res.send(false);
    } else {
      return res.status(200).send(true);
    }
    console.log(currentDay, currentTime);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = CheckTime;

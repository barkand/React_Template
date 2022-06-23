let GetActiveCode = () => {
  let active_code = Math.floor(1000 + Math.random() * 9000);
  var now = new Date();

  let expire_code = new Date(now.setMinutes(now.getMinutes() + 10));

  return { active_code, expire_code };
};

module.exports = { GetActiveCode };

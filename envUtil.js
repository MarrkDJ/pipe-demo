module.exports = {
  environment() {
    if (process.env) {
      var env = process.env;

      if (!env.ENV_VAR) {
        env.ENV_VAR = "Local";
        env.ENV_COLOR = "DodgerBlue";
      }

      return env;
    }

    return env = {
      ENV_VAR: "Local",
      ENV_COLOR: "DodgerBlue"
    };
  }
};

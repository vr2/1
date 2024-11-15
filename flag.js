function executeFile(filename) {
  const { execSync } = require('child_process');
  try {
    return execSync(filename).toString();
  } catch (error) {
    return error.message;
  }
}

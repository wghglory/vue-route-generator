// 1. promisify: 如何让异步任务串行化
// 2. module export

module.exports.clone = async function clone(repo, desc) {
  const ora = require('ora');
  const process = ora(`下载项目 ${repo}`);
  process.start();
  const { promisify } = require('util');
  const download = promisify(require('download-git-repo'));
  try {
    await download(repo, desc);
  } catch (error) {
    process.fail();
  }
  process.succeed();
};

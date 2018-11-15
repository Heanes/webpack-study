const path = require('path');
let paths = {};

paths.distDirName = 'dist';
paths.srcRootDirName = 'src';
paths.pagesDirName = 'pages';
paths.staticDirName = 'static';

/**
 * @doc 定义项目目录
 * @type {*|*|string}
 * @author Heanes
 * @time 2018-11-05 16:38:28 周一
 */
paths.rootDir       = path.resolve(__dirname, '../../');                            // 项目根目录
paths.srcRootDir    = path.resolve(paths.rootDir, './' + paths.srcRootDirName);     // 源文件目录，项目业务代码根目录
paths.pagesDir      = path.resolve(paths.srcRootDir, './' + paths.pagesDirName);    // 存放各个页面独有的部分，如入口文件、只有该页面使用到的css、模板文件等
paths.publicDir     = path.resolve(paths.srcRootDir, './public');                   // 存放各个页面使用到的公共资源
paths.componentsDir = path.resolve(paths.srcRootDir, './components');               // 存放组件，可以是纯HTML，也可以包含js/css/image等，看自己需要
paths.layoutDir     = path.resolve(paths.publicDir, './layout');                    // 存放UI布局，组织各个组件拼起来，因应需要可以有不同的布局套路

// 生成文件目录
paths.distDir = path.resolve(paths.rootDir, './' + paths.distDirName);              // 存放编译后生成的所有代码、资源（图片、字体等，虽然只是简单的从源目录迁移过来）

// console.log('----------------------------------------');
// console.log('paths:\n', paths);
// console.log('----------------------------------------');

module.exports = paths;

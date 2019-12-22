const {srs, dest} = require('gulp')
const sass = require('gulp-sass');

sass.compiler = require('node-sass');




function copy(){
  return src('sass/main.scss').pipe(dest('dist'))
}

exports.copy = copy



task("styles", () => {
  retern src("./sass/main.scss")
  .pipe(sass().on('error', sass.logError))
    .pipe("./styles/main.css");
});
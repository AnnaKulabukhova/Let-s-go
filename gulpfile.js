// import gulp from "gulp";
// import dartSass from 'sass';
// import gulpSass from 'gulp-sass';
// import sourcemap from "gulp-sourcemaps";
// import rename from "gulp-rename";
// import cleanCSS from "gulp-clean-css";
// import autoprefixer from "gulp-autoprefixer";
// import htmlmin from "gulp-htmlmin";
// import size from "gulp-size";
// import image from "gulp-imagemin";
// import newer from "gulp-newer";
// import browsersyncFn from "browser-sync";
// import { deleteSync } from "del";

// const sass = gulpSass(dartSass);
// const browsersync = browsersyncFn.create();

// // Styles
// function style() {
// 	return gulp.src("source/scss/style.scss")
// 		.pipe(size({title: "До сжатия" }))
// 		.pipe(sourcemap.init())
// 		.pipe(sass().on("error", sass.logError))
//     .pipe(autoprefixer({
//       cascade: false
//     }))
//     .pipe(cleanCSS({
//       level: 2
//     }))
//     .pipe(rename({
//       basename: "style",
//       suffix: ".min" 
// 		}))
//     .pipe(sourcemap.write("."))
//     .pipe(size({ title: "После сжатия" }))
// 		.pipe(gulp.dest("dist/css"))
// 		.pipe(browsersync.stream())
// } 

// // HTML
// function html() {
// 	return gulp.src("source/**/*.html")
//     .pipe(size({title: "До сжатия" }))
// 		.pipe(htmlmin({ collapseWhitespace: true }))
//     .pipe(size({ title: "После сжатия" }))
// 		.pipe(gulp.dest("dist/pages"))
// 		.pipe(browsersync.stream());
// }

// // Images
//  function img()  {
//   return gulp.src("source/image/**/*.{png,jpg,svg}")
//   .pipe(newer(dist/image))
//   .pipe(size({title: "До сжатия" }))
//   .pipe(imagemin([
//       imagemin.mozjpeg({progressive: true}),
//       imagemin.optipng({optimizationLevel: 3}),
//       imagemin.svgo()
//     ]))
//   .pipe(size({ title: "После сжатия" }))
//   .pipe(gulp.dest("dist/image"));
// }

// //Очистка
// function clean() {
//     return deleteSync(["dist/* !dist/img"])
// }

// //Наблюдатель
// function watch() {
// 	browsersync.init({
// 		server: {
// 			baseDir: "./dist/pages"
// 		}
// 	})
// 	gulp.watch("dist/**/*.html").on("change", browsersync.reload);
//   gulp.watch("source/**/*.html", html);
//   gulp.watch("source/scss/**/*.scss", sass);
// 	gulp.watch("source/image/**/*.{png,jpg,svg}", image);
// }

// const build = gulp.series(clean, html, gulp.parallel(style, image), watch)

// export { clean, img, style, html, watch, build };
// export default build;
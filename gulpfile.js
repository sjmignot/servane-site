const gulp = require("gulp");
const postcss = require("gulp-postcss");
const imagemin = require("gulp-imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");
const rename = require("gulp-rename");
const imageResize = require("gulp-image-resize");

gulp.task("css", function () {
  return gulp
    .src("static/css/*.css")
    .pipe(postcss())
    .pipe(gulp.dest("build/static/css/"));
});

gulp.task("images:thumbexhibits", () => {
  const sizes = [
    { width: 320, quality: 40, suffix: "sm" },
    { width: 640, quality: 60, suffix: "md" },
    { width: 1024, quality: 80, suffix: "lg" },
  ];
  let stream;
  sizes.forEach((size) => {
    stream = gulp
      .src([
        "./static/img/prints/**/thumbnail.jpg",
        "./static/img/projects/**/thumbnail.jpg",
        "./static/img/exhibits/*.jpg",
      ], {base: './static/img/'})
      .pipe(imageResize({ width: 700 }))
      .pipe(
        imagemin(
          [
            imageminMozjpeg({
              quality: 60,
            }),
          ],
          {
            verbose: true,
          }
        )
      )
      .pipe(gulp.dest("./build/static/img/"));
  });
  return stream;
});

gulp.task("images:projectprints", () => {
  const sizes = [
    { width: 320, quality: 40, suffix: "sm" },
    { width: 640, quality: 60, suffix: "md" },
    { width: 1024, quality: 80, suffix: "lg" },
  ];
  let stream;
  sizes.forEach((size) => {
    stream = gulp
      .src([
        "./static/img/projects/**/*.jpg",
        "./static/img/prints/**/*.jpg",
        "!./static/img/prints/**/thumbnail.jpg",
        "!./static/img/projects/**/thumbnail.jpg",
      ], {base: './static/img'})
      .pipe(imageResize({ width: size.width }))
      .pipe(
        rename((path) => {
          path.basename += `-${size.suffix}`;
        })
      )
      .pipe(
        imagemin(
          [
            imageminMozjpeg({
              quality: size.quality,
            }),
          ],
          {
            verbose: true,
          }
        )
      )
      .pipe(gulp.dest("./build/static/img/"));
  });
  return stream;
});

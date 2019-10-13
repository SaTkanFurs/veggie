var gulp = require("gulp"),
    sass = require("gulp-sass"),
    atp = require("gulp-autoprefixer");


function css_style(done){
    gulp.src("sass/main.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(rename("style.css"))
        .pipe(gulp.dest("css/"))
    done()
}

function WatchSass(){
    gulp.watch("sass/*.scss", css_style)
}

gulp.task(WatchSass);
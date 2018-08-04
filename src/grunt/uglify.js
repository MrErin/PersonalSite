module.exports = {
    options: {
        banner: "/*! <%= grunt.template.today('yyyy - mm - dd') %> */"
    },
    build: {
        files: [{
            expand: true,
            cwd: "../dist",
            src: "bundle.js",
            dest: "../dist",
            ext: ".min.js"
        }]
    }
}
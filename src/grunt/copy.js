module.exports = {
    main: {
        files: [
            { expand: true, src: ["index.html"], dest: "../dist/", filter: "isFile" },
            { expand: true, src: ["styles/*.css"], dest: "../dist/", filter: "isFile" },
            { expand: true, src: ["styles/styles.css.map"], dest: "../dist/", filter: "isFile"},
            { expand: true, src: ["assets/img/*.png"], dest: "../dist/", filter: "isFile"},
            { expand: true, src: ["assets/img/*.jpg"], dest: "../dist/", filter: "isFile"}
        ]
    }
}
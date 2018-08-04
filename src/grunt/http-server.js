module.exports = {
    "dev": {
        //server root directory
        root: "../dist",

        //the server port. can also be written as a function, e.g., port: function() { return 8282; }
        port: 8080,

        //the host IP address. If specified to, for example, "127.0.0.1" the server will only be available on that IP. Specify "0.0.0.0" to be available everywhere
        host: "0.0.0.0",

        showDir : false,
        autoIndex: true,

        //server default file extension
        ext: "html",

        //run in paralell with other tasks
        runInBackground: true,

        //specify a logger function. By default, requests are sent to stout.
        logFn: function(req, res, error) { },

        //Proxies all requests which can't be resolved locally to the given url. Note: this will disable "showDir"
        // proxy: "https://www.stevebrownlee.com"

        //use "https: true" for default module SSL configuration. Default state is disabled

        //https: {
        //     cert: "cert.pem",
        //     key: "key.pem"
        // },

        //tell grunt task to open the browser
        openBrowser: true,

        //customize url to serve specific pages
        customPages: {
            "/readme": "../README.md"
        }
    }
}
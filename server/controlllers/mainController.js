/**
 * GET /
 * Homepage
 */
exports.homepage = async(req, res) => {
    const locals = {
        title: "NodeJS - Notes",
        description: "A basic and simple web app for taking and managing notes."
    };

    res.render('index', {
        locals,
        layout: '../views/layouts/front-page'
    });
}

/**
 * GET /
 * About
 */
exports.about = async(req, res) => {
    const locals = {
        title: "Notes - About",
        Developer: "Anant Singh",
        DateStarted: "04-02-2024"
    };

    res.render('about', locals);
}
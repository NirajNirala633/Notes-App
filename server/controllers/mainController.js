/**
 * GET /
 * Homepage
 */

exports.homepage = async (req, res) => {
    const locals = {
                title: "NodeJS Notes",
                descrption: "NodeJS APP"
            }
            res.render('index', {
                locals,
                layout: '../views/layouts/front-page.ejs'
            })
}

/**
 * GET /
 * About page
 */

exports.about = async (req, res) => {
    const locals = {
                title: "NodeJS Notes About ",
                descrption: "NodeJS APP About Page"
            }
            res.render('about', locals)
}
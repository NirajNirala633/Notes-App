/**
 * GET /
 * Dashboard
 */

exports.dasboard = async (req, res) => {
    const locals = {
                title: "Dashboard",
                descrption: "NodeJS APP"
            }
            res.render('dashboard/index', {
                locals,
                layout: '../views/layouts/dashboard.ejs'
            })
}
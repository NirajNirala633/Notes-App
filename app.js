require('dotenv').config();


const express  = require("express")
const expressLayouts = require("express-ejs-layouts")


const app = express()

const port = 5000 || process.env.PORT;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Static Files
app.use(express.static("public"))

// Templating Engine
app.use(expressLayouts)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

// app.get('/', (req, res) => {
//     const locals = {
//         title: "NodeJS Notes",
//         descrption: "NodeJS APP"
//     }
//     res.render('index', locals)
// })

// Routes
app.use('/', require('./server/routes/index'));
app.use('/', require('./server/routes/dashboard'));


// Handle 404
app.get('*', (req, res) => {
    res.status(404).render('404')
})


app.listen(port, () => {
    console.log(`App is listening on PORT ${port}`)
})
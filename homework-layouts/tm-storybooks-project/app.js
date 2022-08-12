const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const connectDB = require('./config/db')



// LOAD CONFIG 
dotenv.config({ path: "./config/config.env" })


// CONNECTING TO DATABASE
connectDB()

// INITIALIZE EXPRESS APP
const app = express()

// LOGGING
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// HANDLEBARS
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main', 
    extname: '.hbs'
    })
)
app.set('view engine', '.hbs')
// app.set('views', './views');

// ROUTES
app.use('/', require('./routes/index'))



const PORT = process.env.PORT || 8000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}! Betta go catch it!`))


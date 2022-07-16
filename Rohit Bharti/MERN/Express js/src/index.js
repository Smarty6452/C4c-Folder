const express = require("express");
const path = require('path')
const requests = require('requests');
const app = express()
const hbs = require('hbs')
//relative aboslute path
// console.log(__dirname)
// console.log(path.join(__dirname, '../public'));

//built in middleware
// const staticPath = path.join(__dirname, '../public')
const templatePath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")
// app.use(express.static(staticPath))

//to se the view engine

app.set('view engine', 'hbs')
app.set('views', templatePath)
hbs.registerPartials(partialsPath)


// template engine route 
app.get("", (req, res) => {
    res.render('index' , {
        name: "Rohit"
    })
})
app.get("/about", (req, res) => {
    // res.render('about' , {
    //     name: "Bharti"
    // })
    requests(`http://api.openweathermap.org/data/2.5/weather?q=Pune&units=metric&appid=08fda657aec35a5ad515d518ee86c82e`)
    .on('data', (chunk) => {
        const objdata = JSON.parse(chunk);
        const arrData = [objdata];
     console.log(`city name is ${arrData[0].name} and the temp is  ${arrData[0].main.temp}` );

     res.write(arrData[0].name);

    })
    .on("end", (err) =>{
        if (err) return console.log("connection closed due to error")
       res.end();
    })
})

app.get('/', (req, res) => {
    res.send('hello from express server')
})

app.get("/about", (req, res) => {
    res.send("Welcome to about page")
})

app.post('/', (req, res) => {
    res.send("Post req to the homepage")
})

app.get('/contact', (req, res) => {
    res.send("This is contact page")
   
});

// app.get('*', (req, res) => {
//     res.render('404', {
//         errorcomment: 'Opps Page could not be found'
//     })
// })

app.listen(8000, ()=> {
    console.log("Listening to port at 8000");
})

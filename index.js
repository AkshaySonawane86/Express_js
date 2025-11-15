
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const akshayMiddleware = (req,res,next) =>{
    console.log(req)
}

app.use(express.static(path.join(__dirname, "public")))
// app.use(akshayMiddleware)

app.get('/hello/:name', (req, res) => {
  res.send('Hello World!' + req.params.name)
})



app.get('/about', (req, res) => {
//   res.send('About page!')
//   res.sendFile(path.join(__dirname,'index.html'))
    //  res.status(200)
    res.json({'akshay': 26})

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

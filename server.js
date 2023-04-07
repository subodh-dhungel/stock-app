const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 2000
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(()=>{
    const server = express()
    
    server.get('*',(req,res)=>{
        return handle(req,res)
    })

    server.get('/',(req,res)=>{
        return app.render(req,res,'/index')
    })

    server.listen(PORT, (err)=>{
        if(err) throw err
    else console.log(`Server running successfully at port ${PORT}`)
    })
}).catch((ex)=>{
    console.log(ex.stack)
    process.exit(1)
})
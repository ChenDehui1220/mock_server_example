const jsonServer = require('json-server')
const db = require('./db.js')
const routes = require('./routes.js')
const proxy = require('http-proxy-middleware')
const port = 3000

const server = jsonServer.create()
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults()
const rewriter = jsonServer.rewriter(routes)

server.use(middlewares)

const filter = (pathname, req) => {
    return (routes[req.url] === undefined && ['/db', '/_rules'].indexOf(pathname) === -1)
}

server.use(proxy(filter, { target: 'http://localhost:8080', changeOrigin: true }), (request, res, next) => {
    if (routes[request.url] !== undefined) {
        console.log('found it')
    } else {
        console.log('not found')
    }

    // request.method = 'GET'
    next()
})

server.use(rewriter)
server.use(router)

server.listen(port, () => {
    console.log('open mock server at localhost:' + port)
})

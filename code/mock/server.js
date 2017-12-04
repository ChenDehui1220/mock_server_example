const jsonServer = require('json-server')
const db = require('./db.js')
const routes = require('./routes.js')
const proxy = require('http-proxy-middleware')
const port = 5000

const server = jsonServer.create()
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults()
const rewriter = jsonServer.rewriter(routes)

server.use(middlewares)

const filter = (pathname, req) => {
    return (routes[req.url] === undefined && !/(db|rules|\/get)/i.test(req.url))
}

let proxyUrl = 'http://localhost:8080'

if (process.env.NODE_ENV !== undefined && process.env.NODE_ENV === 'beta') {
    proxyUrl = 'http://gary-chen.rc.hiiir:4080/'
}

server.use(proxy(filter, { target: proxyUrl, changeOrigin: true }), (request, res, next) => {
    // request.method = 'GET'
    next()
})

server.use(rewriter)
server.use(router)

server.listen(port, () => {
    console.log('open mock server at localhost:' + port)
})

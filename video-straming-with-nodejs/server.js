'use strict';
const {createServer} = require('http');
const url = require('url');
const request = require('request')

let print = console.log

const server = createServer((req, res) => {

    let q = url.parse(req.url, true).query;
    let pathname = url.parse(req.url).pathname;
    print(pathname)
    print(q.stream_url)
    if (pathname==='/nodejs/video') {
        if (q.stream_url != undefined) {

            try {
                req.pipe(request(q.stream_url)).pipe(res)
              }
              catch (e) {
                console.log(e);
                res.end('<h1>Something went wrong with downstream url. Plase try again<h1>');
              }

            // const x = request(q.stream_url)
            // req.pipe(x)
            // x.pipe(res)

        } else {
            res.end('<h1>Please provide query param: /video2?stream_url=??????<h1>');
        }
    }else {
        res.write('<h1>go to /video<h1>'); 
        res.end(); 
    }
    
});

server.listen(8001, () => {
    print("APP started in PORT 8001")
});

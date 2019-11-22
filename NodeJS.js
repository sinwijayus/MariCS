// var http = require("http");
// var url = require('url');
// var routes = require('routes')();
// var view = require('swig');
var express = require('express');
const app =express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
var alert = require('alert-node')

var mysql = require('mysql');
var connection = mysql.createConnection({
    host : "localhost",
    port : 3306,
    database : "nodejs",
    user : "root",
    password : ""
})


// routes.addRoute('/', function(req, res){
//     var html = view.compileFile('./marics/marics-pilihan.html')();
//     res.writeHead(200, {"Content-Type" : "text/html"});
//     res.end(html);
// });

// routes.addRoute('/konfirmasi', function(req, res){
//     var html = view.compileFile('./marics/marics-konfirmasi.html')();
//     res.writeHead(200, {"Content-Type" : "text/html"});
//     res.end(html);
// });

// routes.addRoute('/print', function(req, res){
//     var html = view.compileFile('./marics/marics-print.html')();
//     res.writeHead(200, {"Content-Type" : "text/html"});
//     res.end(html);
// });

// routes.addRoute('/finalize', function(req, res){
//     var html = view.compileFile('./marics/marics-finalize.html')();
//     res.writeHead(200, {"Content-Type" : "text/html"});
//     res.end(html);
// });
app.get('/order', function(req,res){
    connection.query("SELECT * FROM pemesanan", function(err, result){
        res.send(result);
    })
});
app.post('/order',function(req, res){
    const nama_pemesan = req.body.nama;
    var total = 0;
    var data = [];
    if(req.body.pesanan1){
        const paket1 = req.body.pesanan1;
        if (paket1 === "Pilhan A"){
            total+=25000;
        }
        else if(paket1 === "Pilihan B"){
            total+=18000;
        }
        else if(paket1 === "Pilihan C"){
            total+=30000;
        }
        data.push(paket1);
    }
    else{
        data.push(null);
    }
    if(req.body.pesanan2){
        const paket2 = req.body.pesanan2;
        total+=25000;
        data.push(paket2);
    }
    else{
        data.push(null);
    }
    if(req.body.pesanan3){
        const paket3 = req.body.pesanan3;
        total+=50000;
        data.push(paket3);
    }
    else{
        data.push(null);
    }
    var sql = "INSERT INTO pemesanan(nama_customer,Paket1,Paket2,Paket3,total_harga) VALUES('"+nama_pemesan+"','"+data[0]+"','"+data[1]+"','"+data[2]+"','"+total+"')";
    connection.query(sql, function(err, result){
        if(!err){
            res.redirect('/order');
            alert('Pesanan Berhasil Dicatat');
            console.log('Pesanan Berhasil Tercatat');
        }
        else{
            console.log(err);
        }
    })
});

app.listen(8888, function(){
    console.log("Server is running");
});
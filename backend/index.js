const express = require('express');
const app = express();
const router = express.Router();

const mysql = require('mysql');
const cors = require('cors');
const path = require('path');
const bodyParser = require("body-parser");
app.use(cors());
// app.use(express.json());
// // app.use(require('connect').bodyParser());
// app.use(bodyParser.urlencoded({
//     extended: true
//  }));
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// var jsonParser = bodyParser.json();

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "queue"
})

router.get('/userinfo', (req, res) => {
    db.query('select * from users', (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
        // res.end();
    })
})

router.post('/userinfo', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    db.query('select iduser,username,password from users where username = ? and password = ?', [username, password], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
            res.send(result);
        }
    })
})


router.post('/register', (req, res) => {
    // fix req.body is empty
    let fullname = req.body.name;
    let username = req.body.username;
    let password = req.body.password;
    let origin = req.headers.origin;
    let check = false;
    // get all user
    db.query('select * from users', (err, result) => {
        if (err) {
            console.log(err);
        }
        else if (result.length > 0) {
            for (let i = 0; i < result.length; i++) {
                if (username === result[i].username) {
                    check = true;
                    break;
                }
            }
            
        }
        
    })
    if (check == true) {
        res.send(`<script>alert('ชื่อผู้ใช้นี้มีอยู่แล้ว');window.location.href="${origin}/src/register.html";</script>`);
    }
    else{
        db.query('insert into users (name, username, password) values (?,?,?)', [fullname, username, password], (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(`<script>alert('สมัครสมาชิกสำเร็จ');window.location.href="${origin}/src/index.html";</script>`);
            }
        })
    
    }
})



router.post('/queuea', (req, res) => {
    let id = req.body.id;
    let shop = req.body.shopa;
    let origin = req.headers.origin;
    db.query('insert into queuedata (shop,no) values (?,?)', [shop, id], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            // update status by min id
            db.query('update queuedata set status = 1 where id = (select min(id) from queuedata)', (err, result) => {
                if (err) {
                    console.log(err);
                }
            })
            res.send(`<script>alert('จองสำเร็จ');window.location.href="${origin}/src/home.html";</script>`);
        }
    })
})


router.post('/queueb', (req, res) => {
    let id = req.body.id;
    let shop = req.body.shopb;
    let origin = req.headers.origin;
    db.query('insert into queuedatab (shop,no) values (?,?)', [shop, id], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            db.query('update queuedatab set status = 1 where id = (select min(id) from queuedatab)', (err, result) => {
                if (err) {
                    console.log(err);
                }
            })
            res.send(`<script>alert('จองสำเร็จ');window.location.href="${origin}/src/home.html";</script>`);
        }
    })
})

router.post('/queuec', (req, res) => {
    let id = req.body.id;
    let shop = req.body.shopc;
    let origin = req.headers.origin;
    db.query('insert into queuedatac (shop,no) values (?,?)', [shop, id], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            db.query('update queuedatac set status = 1 where id = (select min(id) from queuedatac)', (err, result) => {
                if (err) {
                    console.log(err);
                }
            })
            res.send(`<script>alert('จองสำเร็จ');window.location.href="${origin}/src/home.html";</script>`);
        }
    })
})

router.post('/queued', (req, res) => {
    let id = req.body.id;
    let shop = req.body.shopd;
    let origin = req.headers.origin;
    db.query('insert into queuedatad (shop,no) values (?,?)', [shop, id], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            db.query('update queuedatad set status = 1 where id = (select min(id) from queuedatad)', (err, result) => {
                if (err) {
                    console.log(err);
                }
            })
            res.send(`<script>alert('จองสำเร็จ');window.location.href="${origin}/src/home.html";</script>`);
        }
    })
})

router.post('/queuee', (req, res) => {
    let id = req.body.id;
    let shop = req.body.shope;
    let origin = req.headers.origin;
    db.query('insert into queuedatae (shop,no) values (?,?)', [shop, id], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            db.query('update queuedatae set status = 1 where id = (select min(id) from queuedatae)', (err, result) => {
                if (err) {
                    console.log(err);
                }
            })
            res.send(`<script>alert('จองสำเร็จ');window.location.href="${origin}/src/home.html";</script>`);
        }
    })
})

router.post('/queuef', (req, res) => {
    let id = req.body.id;
    let shop = req.body.shopf;
    let origin = req.headers.origin;
    db.query('insert into queuedataf (shop,no) values (?,?)', [shop, id], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            db.query('update queuedataf set status = 1 where id = (select min(id) from queuedataf)', (err, result) => {
                if (err) {
                    console.log(err);
                }
            })
            res.send(`<script>alert('จองสำเร็จ');window.location.href="${origin}/src/home.html";</script>`);
        }
    })
})

router.get('/queues', (req, res) => {
    // get queue all that have no same users id
    // get id user login  
    const data = [];
    const arr = ['queuedata as q', 'queuedatab as q', 'queuedatac as q', 'queuedatad as q', 'queuedatae as q', 'queuedataf as q'];
    for (let i = 0; i < 6; i++) {
        db.query('select * from ' + arr[i] + " ,users as u where q.no = u.iduser", (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                data.push(result);
                if (data.length === 6) {
                    res.send(data);
                }
            }
        }
        )
    }
})

// delete queue data by id user
router.post('/deletequeue', (req, res) => {
    let id = req.body.id;
    let origin = req.headers.origin;
    const arr = ['queuedata', 'queuedatab', 'queuedatac', 'queuedatad', 'queuedatae', 'queuedataf'];
    for (let i = 0; i < 6; i++) {
        db.query('delete from ' + arr[i] + ' where no = ?', [id], (err, result) => {
            if (err) {
                console.log(err);
            }
        })
    // update status by min id

        db.query('update ' + arr[i] + ' set status = 1 where id = (select min(id) from '+arr[i]+') ', (err, result) => {
            if (err) {
                console.log(err);
            }
        }
        )
    }
   
    res.send(`<script>alert('ยกเลิกสำเร็จ');window.location.href="${origin}/src/home.html";</script>`);

})


// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// } )

// for use import img and css file in html
app.use(express.static(__dirname));
app.engine('html', require('ejs').renderFile);


app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
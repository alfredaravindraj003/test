express = require("express")
mysql = require("mysql2")
app = express()
app.use(express.json())

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Alfred@1022',
    database: 'prac_db'
})

con.connect((err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("connected !!");
    }
})

app.delete('/softdel/:jersey_no', (req, res) => {
    const jersey_no = req.params.jersey_no;

    con.query("UPDATE real_madrid SET status = 'Deleted' WHERE jersey_no = ?",
        [jersey_no], (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send("Deleted");
                // let a = JSON.parse(JSON.stringify(result));
                // console.log(a[0]);
                // console.log(a[1].name);
            }  
        })
})


app.listen(3000, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("on port 3000");
    }
})
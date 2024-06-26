const express = require('express')
const app = express()
const port = 3000

app.get('/multiple', (req, res) => {
  res.json({
    number: 3,
    name: 'Alfred',
    Loc: 'Chennai'
  });
})

/*app.get('/:id', (req, res) => {
    let a = req.params['id'];

    if(a == 2)
      res.send(true);

    if(a < 2)
      res.send(false);

    for(let i=2; i<a && a>2; i++){
        if(a%i == 0)
            res.send(false);
    }

    res.send(true);

})*/

function getMax(arr){
  let max = arr[0];
  for(let i=1; i<arr.length; i++){
    if(max < arr[i]){
      max = arr[i];
    }
  }

  return max.toString();
}

app.get('/items', (req, res) => {
  //let num = parseInt(req.params.x, 10);
  /*const arr = [];
  let count = 0;
  while(num>0){
    arr.push(num%10);
    num =Math.floor(num/10);
    count++;
  }*/


    
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;


const express = require('express');
const request = require('request');

const app = express();

app.use('/app', express.static('src'));
app.use('/modules', express.static('node_modules'));


app.get('/products', function (req, res) {
    request('https://m.lowes.com/CatalogServices/product/nvalue/v1_0?nValue=4294857975&maxResults=6&showURL=1&rollUpVariants=1&showUrl=true&storeNumber=0595&priceFlag=rangeBalance&showMarketingBullets=1', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body)
         }else{
            res.send({error:"Service is down"});
         }
    });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})





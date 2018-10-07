const express = require('express')
const router = express.Router()
const app = express()

const soap = require('soap')

router.use((req,res,next)=>{
    Object.setPrototypeOf(req,app.request)
    Object.setPrototypeOf(res,app.response)
    req.res = res
    res.req = req
    next();
});

router.post('/kimlik-sorgu-api',(req, res) => {
    //console.log('Stored Data!', req.body)
    //res.status(200).json({ message : "success!" })
    const url = 'https://tckimlik.nvi.gov.tr/service/kpspublic.asmx?WSDL';
    const args = req.body;
    soap.createClient(url, function(err, client) {
        client.TCKimlikNoDogrula(args, function(err, result) {
            //console.log(result);
            res.status(200).json({ result })
        });
    });
});

module.exports ={
    path: '/api',
    handler: router
}
const request = require('request');
const cheerio = require ('cheerio');

request('https://targetstudy.com/school/schools-in-hyderabad.html', (err, res, html)=>{
if(!err && res.statusCode ==200){
    const $ = cheerio.load(html);
console.log($)
}
})
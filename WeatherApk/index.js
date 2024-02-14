const http = require('http');
const fs = require('fs')
let requests = require('requests');
const { log } = require('console');

const homeFile = fs.readFileSync('home.html', 'utf-8')

const replaceaVal =(tempVal, orgVal)=>{
    let tempreture = tempVal.replace("{%tempVal%}",(orgVal.main.temp - 273).toPrecision(4))
    tempreture = tempreture.replace("{%tempMin%}",(orgVal.main.temp_min - 273).toPrecision(4))
    tempreture = tempreture.replace("{%tempMax%}",(orgVal.main.temp_max - 273).toPrecision(4))
    tempreture = tempreture.replace("{%location%}",orgVal.name)
    tempreture = tempreture.replace("{%country%}",orgVal.sys.country)

    return tempreture;
}
const server = http.createServer((req, resp) => {
    if (req.url == "/") {
        requests('https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=e01994eecef0ff993923f5969862eab3')  // this is url of the API

            .on('data',  (chunk)=> {
                const objData= JSON.parse(chunk)                // it will convert JSON type data to Object type Data
                const arrData= [objData];               // it will create array of object
                // console.log(arrData)
                // let tempKelv= arrData[0].main.temp;
                // let tempCelc=  tempKelv-273;
                const realTimeData = arrData
                .map((val)=>replaceaVal(homeFile , val))            // it wil
                .join("");
                resp.write(realTimeData)
                console.log(realTimeData);
                
            })
            .on('end', function (err) {
                if (err) return console.log('connection closed due to errors', err);

                resp.end();
            });
    }
});
server.listen(8000, "127.0.0.1")            // this will listen the request of client
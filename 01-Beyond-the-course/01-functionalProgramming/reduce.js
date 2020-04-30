const fs = require("fs");

// text 데이터를 json 으로 생성 (함수형)
let output = fs.readFileSync(__dirname + "/data.txt", "utf8")
    .trim()
    .split("\r\n")
    .map((c) => c.split("    "))
    .reduce((result, c)=> {
        result[c[0]] = result[c[0]] || [];
        result[c[0]].push({
            name: c[1],
            price: c[2],
            quantity: c[3],
        })
        return result
    }, {})


console.log(JSON.stringify(output, null, 2)); 
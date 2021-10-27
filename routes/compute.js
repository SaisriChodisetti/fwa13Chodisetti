var express = require('express');
var router = express.Router();
var storeValue;
/* GET home page. */
router.get('/', function (req, res, next) {
    fake_url = "https://fake.com/path" + req.url
    const url = new URL(fake_url)
    const search_params = url.searchParams
    storeValue = Number(search_params.get("x"))

    if (storeValue == 0)
        storeValue = Math.random()

    res.write("Computes the values for Math.abs and math.acos function." + "\n")

    res.write('Math.hypot applied to ' + storeValue + " is " + Math.hypot(storeValue) + "\n");
    res.write('Math.ceil applied to ' + storeValue + " is " + Math.ceil(storeValue)+"\n");
    res.write('Math.clz32 applied to ' + storeValue + " is " + Math.clz32(storeValue) + "\n");

    res.end();
});

module.exports = router;
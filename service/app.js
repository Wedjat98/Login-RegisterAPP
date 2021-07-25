const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors')
const app = express();

const userApi = require('./api/userApi.js');

//  application/x-www-form-urlencodedの解析
app.use(bodyParser.urlencoded({ extended: false }));
//  application/jsonの解析
app.use(bodyParser.json());

app.use(cors());

//クロスドメインリクエストの設定
app.all('*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

app.use("/api/user",userApi);

app.listen(10520);
console.log("success,アプリケーションが実行しました" );
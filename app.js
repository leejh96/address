const express = require('express');
const indexRouter = require('./routes/index');
const newRouter = require('./routes/new');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

app.set('view engine', 'ejs');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.MONGO_DB);
const db = mongoose.connection;
db.once('open', ()=>{
    console.log('DB connected');
});
db.on('error', (err)=>{
    console.error(err);
});

app.use(express.static(__dirname+ '/public'));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/', indexRouter);
app.use('/new', newRouter);
app.listen(3000, ()=>{
    console.log('서버에 연결되었습니다.');
})
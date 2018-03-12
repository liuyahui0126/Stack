//引入依赖

const temp1 = require('koa');
const app = new temp1();
const temp2 = require('koa-router');
const koa = new temp2();
const json = require('koa-json');
const  logger = require('koa-logger');

app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

app.use(function* (next){
    //未执行
    let start = new Date;
    yield next;
    let ms = new Date - start;
    console.log('%s %s - %s',this.method,this.url,ms) //显示执行的时间
});

app.on('error',function(err,ctx){
    console.log('server error',err);
})

app.listen(8889,()=>{
    console.log('Koa is listening in 8889');
})

module.exports = app;


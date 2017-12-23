var TmcClient = require('../index.js').TmcClient;

var tmcClient = new TmcClient('xxxx','xxxx','default');

var redis = require("redis");
var client = redis.createClient(6397,"192.168.199.140");

var client2 = redis.createClient(6377, "192.168.199.140");

function publish_now(channel,val){

    client.publish(channel, val);//client将member发布到chat这个频道
		// client.lpush(channel+"_list",val);

}

tmcClient.connect('ws://mc.api.taobao.com/',
    function (message) {
        console.log(message);
	    //如果处理失败,不用调用confirmCb
	    //如果处理成功
		publish_now("taobao", JSON.stringify(message));
		client2.lpush("taobao_list",JSON.stringify(message));


    });
//
// for(var i=0;i<10;i++){
// 	publish_now("taobao",i);
// 	client2.lpush("taobao_list",i);
// 	console.log("第"+i+"次");
// }

/**
 * Module dependencies.
 */

ApiClient = require('../index.js').ApiClient;

const client = new ApiClient({
    'appkey':'xxx',
    'appsecret':'xxx',
    'url':'http://xxxx/xpi/api.php'
});

                var arr = {};
                arr['rec_num']='17612345678',
                arr['shop_id'] = 1;//erp系统分配给第三方用的shopid
                arr['status'] = "isok";
                arr['status_description'] = '';
                arr['mtid'] = "1_" ;//第三方交易编号唯一
                arr['exp_receiver'] = "收件人";
                arr['exp_mobile'] = "13677778888";
                arr['exp_province'] = "浙江省";
                arr['exp_state'] = "温州市";
                arr['exp_area'] = "鹿城区";
                arr['exp_zip'] = "邮政编码";
                arr['exp_email'] = "顾客邮箱";
                arr['exp_address'] = "!!!地址详情x324234234234afasdfxxxxxxxxxxxxxxx";
                arr['exp_fee'] = "5";//快递费用
                arr['exp_group'] = "ZTO";//快递公司代码
                arr['buyer_nick'] = "买家第三方平台昵称";//买家第三方平台昵称

                arr['client_msg'] = "客户留言法师打发sdfsdfsdfsdfsdf";
                arr['seller_memo'] = "卖家备注";
                arr['trade_memo'] = "交易备注";
                //第三方的创建 修改 和支付时间
                arr['t_created'] = "2016-10-01 11:00:02";
                arr['t_modified'] = "Y-m-d H:i:s";// "2016-02-08 10:00:02";
                arr['t_paid'] = "Y-m-d H:i:s";

                arr['total_money'] = "30.00";//实际支付金额 一般等同于 total_money
                arr['trade_payment'] = "30.00";//实际支付金额 一般等同于 total_money

                var child ={};
                child['outer_id']="第三方编码";
                child['t_num_iid']="第三方宝贝ID";
                child['t_sku_id']="第三方skuid";
                child['unit']="个";//单位
                child['qty']="2";//数量
                child['total_money']="30";//小计金额
                child['t_trade_from']="taobao";//第三方内部来源（比如淘宝分 手机，淘宝，分销，聚划算等）";//小计金额

                child['t_guige']="第三方规格名称";
                child['t_title']="第三方商品品名";
                child['std_price']="18.01";//标准价格
                child['price']="15.00";//实际单价
                child['t_oid']="34545434434";//第三方明细交易编号
                child['photo']="http://images.csdn.net/20160822/333.jpg";//图片地址

                arr['child']=child;
var b={};
b['qw']='1231';
var a = JSON.stringify(arr);
console.log(a);

client.execute('Order.upload',
    {
        'trade':a,

    },
    function (error,response) {
        if(!error)
            console.log(response);
        else
            console.log(error);
    }
);

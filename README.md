## 使用教程


【拉库】

    ql repo https://ghproxy.com/https://github.com/Yiov/dogeast.git "jd_|jx_|jddj_" "" "^jd[^_]|utils|USER_AGENTS|jdCookie|JDJRValidator_Pure|sign_graphics_validate|sendNotify|ql"












## 特殊脚本使用说明

jd_enen.js

jd_wskey_logout.js


wskey失效脚本

    export JD_WSCK_LOGOUT=pin 退出指定账户

    export JD_WSCK_LOGOUT=ALL 退出所有 CK 有效的账户（必须大写）






## 活动列表


| 名称 | 脚本名 | 常规入口 | 其他说明 |
| :-: | :-: | :-: | :-: |
| **★京东相关工具** |
| 京东多合一签到 | jd_bean_sign.js | - | - |
| 京东资产变动 | jd_bean_change.js | - | - |
| 京东CK检测 | jd_CheckCK.js | - | - |
| 清空购物车 | jd_cleancart.js | - | export JD_CART="true" |
| 电脑配件类活动 | jd_computer.js | - | export computer_activityId="16" |
| 店铺签到 | jd_dpqd.js | - | export DPQDTK="token1&token2" |
| 京豆兑换为喜豆 | jd_exchangejxbeans.js | - | 仅7天内即将过期的京豆 |
| 盲盒任务抽京豆 | jd_mhtask.js | - | export jd_mhurlList="1@2" |
| 超级无线电偶 | jd_sevenDay.js | - | export jd_mhurlList="1@2" |
| 京东签到翻牌 | jd_sign_graphics.js | - | - |
| **★京东** |
| 特物Z签到 | jd_superBrandSign.js | 京东APP首页-下拉 | - |
| 特物Z集卡 | jd_superBrandJK.js | 京东APP首页-下拉 | - |
| 领京豆 | jd_bean_home.js | 京东APP首页-领京豆 | - |
| 种豆得豆 | jd_plantBean.js | 京东APP首页-领京豆-种豆得豆 | - |
| 领金贴 | jd_jin_tie.js | 京东APP首页-领金贴 | - |
| 金榜创造营 | jd_gold_creator.js | 京东APP-排行榜-右侧悬浮 | 任务做了不涨豆 |
| 宠汪汪喂食 | jd_joy_feedPets.js | 京东APP-我的-宠汪汪 | - |
| 东东萌宠 | jd_pet.js | 京东APP-我的-东东萌宠 | - |
| 东东工厂 | jd_jdfactory.js | 京东APP-京东电器-底部中间 | APP首页搜：东东工厂 |
| 东东农场 | jd_fruit.js | 京东APP-免费水果 | - |
| 东东乐园 | jd_ddnc_farmpark.js | 京东APP-免费水果-风车 | - |
| 东东电竞经理 | jd_EsportsManager.js | 京东APP-免费水果-风车-电竞经理 | - |
| 东东超市 | jd_superMarket.js | 京东APP-京东超市-游戏 | 已火爆 |
| 东东健康社区 | jd_health.js | 京东APP-看病购药-健康社区 | - |
| 京东摇钱树 | jd_moneyTree.js | 京东APP-我的-摇钱树 | - |
| 玩一玩成就 | jd_wyw.js | 京东APP-边玩边赚 | http://t.cn/A6XkCs5P |
| 美丽研究院 | jd_beauty.js | 京东APP-美妆馆 底部中间 | - |
| 积分换话费 | jd_dwapp.js | 京东APP-生活·缴费-签到领积分 | - |
| 京东快递 | jd_kd.js | 京东APP-我的-寄件服务-精彩 | - |
| 女装盲盒 | jd_nzmh.js | 京东APP-女装馆 | export jd_nzmhurl="链接" |
| 闪购盲盒 | jd_sgmh.js | 京东APP-闪购-右下惊喜盒子 | - |
| 京东保价 | jd_price.js | 京东APP-我的-客户服务-价格保护 | - |
| 众筹许愿池 | jd_wish.js | 京东APP-京东众筹-众筹许愿池 | 类似的活动也可 |
| **★京东金融** |
| 金融养猪 | jd_pigPet.js | 京东金融-养猪猪 | - |
| **★京东小程序** |
| 京东赚赚 | jd_jdzz.js | 小程序-赚好礼-金币提现 | - |
| **★京东极速版** |
| 京东极速版赚金币 | jd_speed_sign.js | 京东极速版APP-百元生活费 | - |
| 我是大老板 | jd_speed_wsdlb.js | 京东极速版APP-百元生活费-赚金币-水果免费领 | - |
| 京东极速签到免单 | jd_speed_signfree.js | 京东极速版APP-签到免单 | - |
|  |
| **★京喜** |
| 京喜财富岛 | jx_cfd.js | 京喜APP-财富小岛 | - |
| 京喜工厂 | jx_dreamFactory.js | 京喜APP-我的-京喜工厂 | - |
| 京喜工厂商品列表详情 | jx_gckc.js | - | - |
| 京喜牧场 | jx_mc.js | 京喜APP-我的-京喜牧场 | - |
| 京喜签到 | jx_sign.js | 京喜APP-签到领红包 | - |
| |

| **★依赖文件** |
| :- |
| USER_AGENTS.js、sign_graphics_validate.js、jdCookie.js、jdDreamFactoryShareCodes.js、jdFactoryShareCodes.js、jdFruitShareCodes.js、JDJRValidator_Pure.js、jdPetShareCodes.js、jdPlantBeanShareCodes.js、JDSignValidator.js、JS_USER_AGENTS.js、ql.js、sendNotify.js |
| |




## 一对一推送使用

使用的是【@ccwav】大佬的脚本，必备ql.js和sendNotify.js


配合CK_WxPusherUid.json的推送模板即可

（*如果使用了Nvjdc则无用自己新建模板，对接好就可以了）


### 1.创建应用获取apptoken


Wxpusher官网，按照文档创建应用，Uid获取

    https://wxpusher.zjiecode.com/docs/#/


应用名字/联系方式/推送内容说明，随便写，后面可以改的，先测试

创建成功后复制apptoken！！！很重要！！！只显示1次！！！在青龙添加环境变量

    export WP_APP_TOKEN_ONE="这里填apptoken"

注：要是忘了apptoken，只能应用管理-apptoken重置


### 2.获取UID

在应用管理-关注应用，获取动态关注链接，发给好友扫码关注

关注成功后在用户管理-用户列表查看用户的UID



### 3.创建/修改模板

在Scripts/Yiov_dogeast文件夹里新建一个文件CK_WxPusherUid.json

复制下面代码（或者直接在repo文件夹里复制过来）

    [
      {
        "pt_pin": "jd_******",
        "Uid": "UID_**********"
      },
      {
        "pt_pin": "jd_******",
        "Uid": "UID_**********"
      }
    ]


注：JD账号和Uid账号一一对应，一个花括号{},为一个账号的结尾，多账号的自己挨个复制

修改好后保存即可






### 京东资产推送 jd_bean_change.js 

使用的是【@ccwav】大佬的脚本，挑的自己喜欢的变量

     export BEANCHANGE_ALLNOTIFY="ccwav 虽然头发块掉光了&可是还是很帅啊...&&不说了，我去哭会...."

说明：设置推送置顶公告，&表示换行，公告会出现在资产通知中(包括一对一)

    显示:
    	
    【✨✨✨✨公告✨✨✨✨】
    ccwav 虽然头发块掉光了
    可是还是很帅啊...
    	 
    不说了，我去哭会.... 




### 推送通知 sendNotify.js

使用的是【@ccwav】大佬的脚本，挑的自己喜欢的变量

指定通知底部显示 本通知 By 后面显示的字符,默认是ccwav Mod

    export NOTIFY_AUTHOR="***"

屏蔽任务脚本的ck失效通知

    export NOTIFY_NOCKFALSE="true"

当接收到发送CK失效通知和Ninja，运行通知时候执行子线程任务

    export NOTIFY_CKTASK="jd_CheckCK.js"






## 特别鸣谢:

* [@whyour](https://github.com/whyour/qinglong)「青龙」
* [@lkyero](https://github.com/lkyero/GitHubDesktop_zh)「Github汉化」
* [@NobyDa](https://github.com/NobyDa)「野比大佬」
* @lxk0301
* [@oevery](https://github.com/oevery/ninja)「Ninja」
* [@shufflewzc](https://github.com/shufflewzc/faker2)「Faker」
* [@smiek2221](https://github.com/smiek2121/scripts)「呱佬」
* [@Aaron-lv](https://github.com/Aaron-lv/sync)「小小」
* [@JDHelloWorld](https://github.com/JDHelloWorld/jd_scripts)「JDHelloWorld」
* [@passerby-b](https://github.com/passerby-b/JDDJ)「京东到家」
* [@ccwav](https://github.com/ccwav/QLScript2)「cccwav」
* [@hyzaw](https://github.com/hyzaw/AllJDScripts)「DDO」
* [@KingRan](https://github.com/KingRan/KR)「KR」

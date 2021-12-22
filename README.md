## 使用教程


【拉库】

    ql repo https://ghproxy.com/https://github.com/Yiov/dogeast.git "jd_|jx_|jddj_" "" "^jd[^_]|utils|USER_AGENTS|jdCookie|JDJRValidator_Pure|sign_graphics_validate|sendNotify|ql"



## 新版青龙推送说明

拉库后通知sendNotify.js并未像以前一样替换，依旧是官方的。


目前sendNotify.js有三个位置：deps文件夹、Scripts文件夹、以及拉库的作者Yiov_dogeast文件夹

可以从拉库的repo文件夹内，复制了粘贴覆盖到deps文件夹即可，如果还是不行，就把这3处都覆盖



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

（*如果使用了Nvjdc则无用自己新建模板，对接好就可以了）



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
* [@NobyDa](https://github.com/NobyDa)「野比大佬」
* [@lxk0301]「lxk大佬」
* [@MoonBegonia](https://github.com/MoonBegonia/ninja)「Ninja」
* [@Nolanhzy](https://github.com/NolanHzy)「Nvjdc」
* [@shufflewzc](https://github.com/shufflewzc/faker2)「Faker2」
* [@shufflewzc](https://github.com/shufflewzc/faker3)「Faker3纯净版」
* [@smiek2221](https://github.com/smiek2221/scripts)「青蛙」
* [@Aaron-lv](https://github.com/Aaron-lv/sync)「小小」
* [@JDHelloWorld](https://github.com/JDHelloWorld/jd_scripts)「JDHelloWorld」
* [@passerby-b](https://github.com/passerby-b/JDDJ)「京东到家」
* [@ccwav](https://github.com/ccwav/QLScript2)「京东资产变动」
* [@Ariszy](https://github.com/Ariszy/Private-Script)
* [@mmnvnmm](https://github.com/mmnvnmm/omo)「冲鸭」
* [@chianPLA](https://github.com/chianPLA/xiaoshou)「小手冰凉」
* [@msechen](https://gitee.com/msewb/update)「红包雨系列」
* [@lkyero](https://github.com/lkyero/GitHubDesktop_zh)「Github汉化」



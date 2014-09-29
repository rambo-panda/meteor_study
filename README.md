meteor_study
============
meteor 自学 每一个branch 代表一个阶段

├── README.md
├── client             ----  client端
├── lib                ----  存放自己的library
├── public             ----  存放上传文件 啥的 图片
├── server             ----  存放服务器端的文件

ps:
	因为meteor准确的来说属于数据/事件驱动框架， 因此他没有明确的mvc概念。在meteor中 Collection属于Model层，
	view : 就是html模板， 模板中的template负责逻辑方便的操作既Template对象就是Collection;

1: mrt  meteor 的关系
	首先你可以把mrt 想象成meteor的超集。
	其次你可以把他想象成 meteor插件管理器。相当于node的npm
	TODO  small.lock small.json 关系

2: 数据库在哪？
	meteor 把数据库放在自己的.meteor/local 下，以方便自己可以随时调用。启动shell查看必须先启动 meteor服务 然后 meteor mongo

3: 常用包介绍：
	autopublish是一个用来自动发布服务器端collection到客户端的库。
	insecure是一个允许客户端对服务器端publish出来的数据有全部read/write权限的库。
	preserve-inputs比较难解释一些，它指在meteor自动更新dom时，对于form中的各种输入组件，不重新生成。
	具体见：http://http://docs.meteor.com/。

4: route 包
	1： 安装 meteor add iron:route@1.0.0-pre
	2:  必须放在根目录  还未找到什么原因。  将route.js放到server里就不行
	3:  如果路由中指定了 template 那么就不需要在模板中进行调用了


待学习：
	1：http://www.chorusjs.com/docs/

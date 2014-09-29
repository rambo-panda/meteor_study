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


待学习：
	1：http://www.chorusjs.com/docs/

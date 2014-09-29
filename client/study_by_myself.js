  // Session 可以把它想象成一个全局变量
  Session.setDefault("counter", 0);

  // 定义一个名称为hellp的Template  里面包含counter字段  helpers 可以想象成一个对象 里面的东西  都是可以直接在
  // 模板中使用
  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  //  定义事件
  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });

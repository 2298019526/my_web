(function(){
    var proverbTextArr = [
        "Talk is cheap，show me the code.",
        "IF（BOOL 学习= =FALSE）BOOL 落后=TRUE；不断的学习，我们才能不断的前进。",
        "它在我的机器上可以很好运行！——大部分程序员4. 九个人不能让一个孩子在一个月内出生。",
        "栈和队列的区别是啥？ 吃多了拉就是队列，吃多了吐就是栈。",
        "世界上最遥远的距离不是生与死，而是你亲手制造的BUG就在你眼前，你却怎么都找不到她。",
        "《c++程序设计语言》比《c程序设计语言》厚了几倍。果然有了对象就麻烦很多。",
        "怎么使用面向对象的方式变得富有？继承。",
        "为什么程序员总是分不清万圣节和圣诞节？因为 Oct 31 == Dec 25。",
        "Keyboard not found ... press F1 to continue",
        "杀一个程序员不需要用枪，改三次需求就可以了。",
        "服务器按功能可以分为：数据库服务器，web服务器，cache服务器，下片儿服务器等等。",
        "一同学问我，软件外包是什么。解释了几句还没明白，遂想了一下：包工头知道吧？顿悟！",
        "一个程序猿在肉店买了1公斤肉，回家一称，他不高兴的跑回肉店对老板说：少了24克……",
        "网络聊天的时候，想表达对方是猪，一般人会打“xxx你这个猪。”，程序员会打 xxx.isPig = TRUE。",
        "宝宝数学很好，2岁就可以从1数到10了。后来，我告诉他0比1还小。<br/>今天吃饺子。<br/>我说：“宝宝，你数数你想吃几个饺子？”<br/>“0，1，2，3。”<br/>一边说着一边拿起一个饺子，“这是第0个。”<br/>老婆怒吼：“下一代还是做程序员的命！”",
        "程序员找不到对象，一般有三种情况：<br/>C#、JAVA都有对象，但是经常找不到对象。<br/>ASM C直接没有对象。<br/>javascript都是伪对象，最多算暧昧。<br/>但C++日子一直都好过，因为C++是多继承，富二代呀！！！",
        "一个人静静坐在电脑面前写代码的感觉，那是什么感觉？是武林高手闭关修炼的感觉。",
        "用代码行数来测评软件开发进度，就相对于用重量来计算飞机建造进度。",
        "程序员爱情观：<br/>爱情就是死循环，一旦执行就陷进去了；<br/>爱上一个人，就是内存泄漏–你永远释放不了；<br/>真正爱上一个人的时候，那就是常量限定，永远不会改变；<br/>女朋友就是私有变量，只有我这个类才能调用；<br/>情人就是指针用的时候一定要注意，要不然就带来巨大的灾难。",
    ];

    setProverbText();

    $("#proverbText").click(function(){
        setProverbText();
    })

    function setProverbText(){
        var index = Math.floor(Math.random()*proverbTextArr.length);

        $("#proverbText").html(proverbTextArr[index]);
    }
})()
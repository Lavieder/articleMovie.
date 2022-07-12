//按住alt + shift + F 可以格式化代码样式
const articleList = [
  {
    date: "2016.8.14",
    title: "正是虾肥蟹壮时",
    imgSrc: "/images/article/crab.png",
    avatar: "/images/avatar/1.jpg",
    content: "菊黄蟹正肥，品尝秋之味。徐志摩把,“看初花的荻芦”和“到楼外楼吃蟹”,并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“螯封嫩玉双双满，",
    reading: "112",
    collection: "96",
    headImgSrc: "/images/article/crab.png",
    author: "林白衣",
    dateTime: "24小时前",
    detail: "菊黄蟹正肥，品尝秋之味。徐志摩把“看初花的荻芦”和“到楼外楼吃蟹”并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“螯封嫩玉双双满，壳凸红脂块块香”；在《世说新语》里，晋毕卓更是感叹“右手持酒杯，左手持蟹螯，拍浮酒船中，便足了一生矣。”漫漫人生长路，美食与爱岂可辜负？于是作为一个吃货，突然也很想回味一下属于我的味蕾记忆。记忆中的秋蟹，是家人的味道，弥漫着浓浓的亲情。\n\n是谁来自山川湖海，却囿于昼夜，厨房与爱？ 是母亲，深思熟虑，聪明耐心。吃蟹前，总会拿出几件工具，煞有介事而乐此不疲。告诉我们螃蟹至寒，需要佐以姜茶以祛寒，在配备的米醋小碟里，亦添入姜丝与紫苏，前者驱寒后者增香。泡好菊花茶，岁月静好，我们静等。",
    postId: 1537285,
    music: {
      url: "https://dl.stream.qqmusic.qq.com/C400000yHDrB47ZFHY.m4a?guid=5363240684&vkey=CC6B2680D41A612F60D4F58093FA156FFCEBC70B8E416A97914A92CD11711B5218170753E66D7CDF60D66C2FE0F7953B5188358590E21EFA&uin=1940275173&fromtag=120032",
      title: "Promise (原曲:Past Lives)",
      singer: "sapientdream",
      epname: "promise",
      coverImg: "https://y.qq.com/music/photo_new/T002R300x300M000000OlFub2KZNo7_1.jpg?max_age=2592000"
    }
  },
  {
    date: "2016.11.20",
    title: "比利·林恩的中场故事",
    content: "一 “李安是一位绝不会重复自己的导演，本片将极富原创性李安众所瞩目的新片《比利林恩漫长的中场休息》，正式更名《半场无战事》。",
    imgSrc: "/images/article/bl.png",
    reading: 456,
    detail: "一 “李安是一位绝不会重复自己的导演，本片将极富原创性”李安众所瞩目的新片《比利林恩漫长的中场休息》，正式更名《半场无战事》。预告片首次曝光后，被视作是明年奥斯卡种子选手。该片根据同名畅销书改编。原著小说荣获美国国家图书奖。也被BBC评为21世纪最伟大的12本英文小说之一。影片讲述一位19岁德州男孩的比利·林恩入伍参加伊战，在一次交火中他大难不死，意外与战友成为大众的关注焦点，并被塑造成英雄。之后他们返回国内，在橄榄球赛中场休息时授勋。这名战争英雄却面临前所未有的心灵煎熬……李安为什么选中这部电影来拍？因为李安想要挑战前所未有的技术难题：以120帧每秒的速度、4K、3D技术全面结合，来掀起一场电影视觉革命。什么意思？所谓“电影是24格每秒的谎言”，其中的24格，就是帧数。",
    collection: 247,
    dateTime: "24小时前",
    headImgSrc: "/images/article/bl.png",
    author: "迷的城",
    avatar: "/images/avatar/5.jpg",
    postId: 1539725,
    music: {
      url: "https://dl.stream.qqmusic.qq.com/C400004cc3OU0GLJHb.m4a?guid=2248591062&vkey=0D17C0341269BB32E6CEEECA4B5AFEDB2F8D28F498D74DAB84B8CBC65A7AC06BFCAFEF435F45A798B97671168C933D557817FCDEC2C319AD&uin=1940275173&fromtag=120032",
      title: "不要说话",
      singer: "陈奕迅",
      epname: "不想放手",
      coverImg: "https://y.qq.com/music/photo_new/T002R300x300M000000J1pJ50cDCVE.jpg?max_age=2592000"
    }
  },
  {
    title: "当我们在谈论经济学时，我们在谈论什么?",
    content: "引言在我跟学生课后交流时，以及我在知乎上阅读有关“经济”问题的论题时，经常会遇到这样的情况：...",
    detail: "1 引言\n\n在我跟学生课后交流时，以及我在知乎上阅读有关“经济”问题的论题时，经常会遇到这样的情况：有些人套用“经济理论“的知识去解释现实中发生的经济事件，结果发现很多事情讲不通，或者发现”理论告诉我们的“与现实发生的是相反的。也有学生经常跟我说：经济学有什么用？为了说明这个，我经常从两个方面来进行解释，尝试用我个人所擅长的解决问题的视角和他们能够听懂的方法来说明经济学是什么，它的作用边界在哪里：\r\n\n2 ”简笔素描“与”油画肖像“我们给人画肖像画，可以用简笔素描，也可以用油画肖像。油画肖像可以在最大程度上保存了人物的各方面的细节和特点，而简笔素描则忽略了很多细节。尽管简笔素描忽略了人物的许多细节，但我们仍旧能够很容易的认出画中的人物是谁。为什么？因为这种方法保留了人物最显著的特征，以至于我们可以忽略其次要特征而对人物做出判定。\n\n2.1 ”简笔素描“对于绝大多数的非经济学专业大众而言（经济学相关专业硕士学历以上），人们所接触到的经济学都是初级微观经济学。所谓的初级微观经济学，对于经济问题的”画法“就是一种”简笔素描“。比如初级微观经济学教材中广为使用的这种一元一次需求函数：y=bx+a，需求量的唯一变量是产品价格。但仅凭直觉我们就可以断言，现实中影响需求量的因素绝不止价格这一种，因此我们可以认为这个模型对经济问题的描述是失真的。然而但这种失真却是必要的和有意义的，其意义在与它利于揭示价格对于需求的影响，而不在于否定影响需求的其他因素。",
    imgSrc: "/images/article/sls.jpg",
    headImgSrc: "/images/article/sls.jpg",
    reading: 86,
    collection: 71,
    author: "知乎",
    date: "2016.12.11",
    dateTime: "三天前",
    avatar: "/images/avatar/3.jpg",
    postId: 2794518,
    music: {
      url: "https://dl.stream.qqmusic.qq.com/C400002QhULf16tWw1.m4a?guid=626861524&vkey=4A04FD5A0CBDD6BADC3EE2270B721142EC6B6815D5810CA2DF3C90CDEBFA17D2D85C050CBE2321C086D4DC95E6B2000AC95F6435FB7AFD70&uin=1940275173&fromtag=120032",
      title: "无名的人",
      singer: "毛不易",
      epname: "无名的人",
      coverImg: "https://y.qq.com/music/photo_new/T002R300x300M000002mPgSG01LLtu.jpg?max_age=2592000"
    }
  },
  {
    title: "微信·小程序开发工具安装指南",
    content: "这两天闲来无事，也安装了 “微信折叠”的开发工具来玩一下。以下是一些小道消息及使用体验，过两天我会写一篇文章以开发者的角度来详细评价微信小程序",
    imgSrc: "/images/article/xiaolong.jpg",
    reading: 102,
    detail: "这两天闲来无事，也安装了 “微信折叠”的开发工具来玩一下。以下是一些小道消息及使用体验，过两天我会写一篇文章以开发者的角度来详细评价微信小程序:微信小程序不能开发游戏类、直播类功能，小程序每个人关注的上限是20个（还不确定，不过我相信这是真的，这次公布的API里并没有视频组件。微信太大，苹果要有所顾忌，但是微信也要做出相应的让步)微信目前有没有同苹果商谈好，还是个未知数，毕竟会对AppStore有一定的冲击。抛弃了大量的javascript组件后，这个生态体系变得相当的封闭，微信解释肯定是：为了更好的性能提升。那么我们拭目以待。小程序的入口是微信里的三级菜单，就是在“Tab栏发现里的游戏下面加入一个“小程序”。反正，这一栏里的购物和游戏我是从来没点进去过的。以腾讯的尿性，小程序同服务号一样，其关系链及重要功能的开放程度会因“人”而异。对，优质的接口只会开放给腾讯的儿子们（滴滴呀、京东呀）",
    collection: 92,
    dateTime: "24小时前",
    headImgSrc: "/images/article/xiaolong.jpg",
    author: "猫是猫的猫",
    date: "2017.1.2",
    avatar: "/images/avatar/4.jpg",
    postId: 3145221,
    music: {
      url: "https://dl.stream.qqmusic.qq.com/C400001nLrvS0yuGVd.m4a?guid=2389901838&vkey=4F2ED0A7E2FC7D072FB6D54F0E7F09F3FB54BA323DFC518A93CE5F760F847B715C8AFBD719EDCDEACE8275111E05B04B9D2767BE791B4D47&uin=1940275173&fromtag=120032",
      title: "关不上的窗",
      singer: "周传雄",
      epname: "恋人创世纪",
      coverImg: "https://y.qq.com/music/photo_new/T002R300x300M000002dDK2v1LkvKq.jpg?max_age=2592000",
    }
  },
  {
    title: "从视觉到触觉 这款VR手套能给你真实触感",
    content: "8月29日消息，据国外媒体VentureBeat报道，一家名为Dexta Robotics的公司最近发布了一款有望变革虚拟现实手部追踪与交互方式的新产品",
    imgSrc: "/images/article/vr.png",
    reading: 1759,
    detail: "消息，据国外媒体VentureBeat报道，一家名为Dexta Robotics的公司最近发布了一款有望变革虚拟现实手部追踪与交互方式的新产品。该产品名为“Dexmo”，它是一款像手套那样戴在手上使用的未来主义外骨骼。它内置大量的元件，能够与VR体验进行交互，可帮助你感觉握在你的双手的虚拟物体。Dexmo据Dexta称，“Dexmo是一款针对你的双手的机械外骨骼。它能够捕捉你的手部运动，以及提供即时的力反馈。有了Dexmo，你可以感受到虚拟物体的大小、形状和坚硬度。你可以接触数字世界。”市面上已经有数款产品旨在处理虚拟现实中的手部交互，也有相关的产品即将要进入市场。例如，颇受欢迎的HTC Vive头盔配有一副控制器，其控制器能够使得追踪系统看到你的双手，让你可以用它们来在特定体验中与物体进行交互。今年晚些时候，Oculus将开始出货类似的手部控制产品Oculus Touch。10月，索尼也将开始出货配备两个PlayStation Move手部控制器的PS VR。Leap Motion甚至更进一步：利用传感器来追踪手指和手部的运动。",
    collection: 898,
    dateTime: "24小时前",
    headImgSrc: "/images/article/vr.png",
    author: "深白色",
    date: "2016.8.22",
    avatar: "/images/avatar/2.jpg",
    postId: 1397484,
    music: {
      url: "https://dl.stream.qqmusic.qq.com/C4000045PCml3FrHHe.m4a?guid=1093480752&vkey=FCAB2ADA40288B8EEFD24DFA775734E8C97D4DA66B078ACB7CEC24D426FC1FC6DBA71103636BCA5AC744D185A07F3B2372FC271AF8EABEFA&uin=1940275173&fromtag=120032",
      title: "一千个伤心的理由",
      singer: "张学友",
      epname: "真爱 新曲 + 真正精选",
      coverImg: "https://y.qq.com/music/photo_new/T002R300x300M000002nHrYA4KRGJM.jpg?max_age=2592000"
    }
  },
  {
    title: "爱奇艺创维开展战略合作，合力布局开放娱乐生态",
    content: "爱奇艺和创维分别作为国内领先的在线视频品牌",
    imgSrc: "/images/article/iqiyi.png",
    reading: 483,
    detail: "爱奇艺和创维分别作为国内领先的在线视频品牌和家电品牌。双方一直锐意创新，为用户提供优质的服务体验和产品体验。据悉，爱奇艺与创维将展开从资本到VIP会员服务等各方面的深入合作。籍由此次合作，爱奇艺将战略投资创维旗下拥有高端互联网电视品牌的酷开公司。从下一财年开始，创维旗下互联网电视将通过银河互联网电视集成播控平台，预置VIP会员服务及相关内容。这种捆绑终端与VIP内容的全新销售模式，将大幅提升互联网电视终端用户的体验，给予用户更多优质内容的选择。",
    collection: 295,
    dateTime: "21小时前",
    headImgSrc: "/images/article/iqiyi.png",
    author: "深白色",
    date: "2016.7.16",
    avatar: "/images/avatar/5.jpg",
    postId: 2178436,
    music: {
      url: "https://dl.stream.qqmusic.qq.com/C4000045eeMJ0BUAKT.m4a?guid=6696212954&vkey=B51E65D42FC21A3BD079940E2110C44E0DC30FA32D76A16C085D21ABF9E9A7C36CBDBB0CCE7CF33404E2D57BEA8110E2B02D84AD810303E1&uin=1940275173&fromtag=120032",
      title: "贝加尔湖畔",
      singer: "李健",
      epname: "依然",
      coverImg: "https://y.qq.com/music/photo_new/T002R300x300M000002g0JpA4aQ6bZ.jpg?max_age=2592000"
    }
  }
];
const bannerList = [
  {
    bid: 0,
    imgSrc: "/images/article/bestplayers.png"
  },
  {
    bid: 1,
    imgSrc: "/images/article/lpl.png"
  },
  {
    bid: 2,
    imgSrc: "/images/article/jumpfly.png"
  }
]

// 导出的2种方式
// ES5
// module.exports = {
//   postList: local_database
// }

// 新版（推荐） ES6
export {
  articleList,
  bannerList
}
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}


/**
 * news新闻列表
 */
const news =[
      {id:'356412',
        title:'特写：2019，天安门城楼前的中国',
        poster:'http://image1.chinanews.com.cn/cnsupload/big/2019/10-01/4-426/a7e426b0dd6c43d2bc710fafe810a0d5.jpg',
        add_date:'2019-10-01',
        content:'中新网北京10月5日电(郭超凯 赵金龙)北京时间10月5日2时51分，中国在太原卫星发射中心用长征四号丙运载火箭，成功将高分十号卫星发射升空，卫星顺利进入预定轨道，任务获得圆满成功。'
        },
        {id:'546734',
          title:'中国成功发射高分十号卫星 主要用于国土普查、防灾减灾等领域',
          poster:'http://i2.chinanews.com/simg/cmshd/2019/10/05/998e12aa71f248d4a797761b18e48418.jpg',
          add_date:'2019-10-05',
          content:'中新网北京10月5日电(郭超凯 赵金龙)北京时间10月5日2时51分，中国在太原卫星发射中心用长征四号丙运载火箭，成功将高分十号卫星发射升空，卫星顺利进入预定轨道，任务获得圆满成功。'
          },
          {id:'239875',
            title:'记者手记：国家庆典，每个人都是记录者',
            poster:'http://i2.chinanews.com/simg/cmshd/2019/10/01/c5391220f28d49bdbd14c58a4300bde0.jpg',
            add_date:'2019-10-01',
            content:'中新网北京10月5日电(郭超凯 赵金龙)北京时间10月5日2时51分，中国在太原卫星发射中心用长征四号丙运载火箭，成功将高分十号卫星发射升空，卫星顺利进入预定轨道，任务获得圆满成功。'
            }

    ]


/**
 * 获取新闻列表
 */
function getNewsList(){
  let list = [];
  for(var i = 0;i < news.length; i++){
    let obj = {};
    obj.id = news[i].id;
    obj.poster = news[i].poster;
    obj.add_date = news[i].add_date;
    obj.content = news[i].content;
    obj.title=news[i].title;
    list.push(obj)
  }
  return list;
}

/**
 * 获取到新闻的内容
 */
function getNewsContent(newsID){
  let message = {
    code:"404",
    news:{}
  };
  for(var i = 0; i<news.length; i++){
    if(newsID == news[i].id){
      message.code = "200";
      message.news = news[i];
      console.log("输出了news的id")
      console.log(message.news.id);
      break;
    }
  }
return message;
}
/**
 * 将接口暴露给外部调用
 */
module.exports = {
  getNewsList:getNewsList,
  getNewsContent:getNewsContent
}
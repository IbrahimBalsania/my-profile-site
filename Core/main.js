new Vue({
  el: '#skill',
  data: {
      msg:'My first VueJS Task'
      ,flg:true
      ,backEndTechs:[{"techname":"JavaScript","skilllevel":"80"},{"techname":"NodeJs","skilllevel":"80"},{"techname":"ExpressJS","skilllevel":"80"}]
      ,frontEndTechs:[{"techname":"HTML/CSS","skilllevel":"80"},{"techname":"Bootstrap","skilllevel":"80"},{"techname":"VueJS","skilllevel":"80"}]
      ,DBTechs:[{"techname":"Oracle","skilllevel":"80"},{"techname":"MySQL","skilllevel":"80"},{"techname":"MongoDB","skilllevel":"80"},{"techname":"Redis","skilllevel":"80"}]
     }
});
new Vue({
  el: '#follow',
  data: {
      followMe:[{"url":"https://twitter.com/ibrahimbalsania","class_name":"px-2 socicon-twitter socicon mbr-iconfont mbr-iconfont-social"},{"url":"https://www.facebook.com/ibrahim.balsania","class_name":"px-2 socicon-facebook socicon mbr-iconfont mbr-iconfont-social"},{"url":"https://www.instagram.com/ibrahimbalsania/","class_name":"px-2 socicon-instagram socicon mbr-iconfont mbr-iconfont-social"}]
    }
});
new Vue({
  el: '#award_details',
  data: {
      awards:[{"year":"2018","desc":"Got sparc award nomination for good work in first quarter from company Credence Analytics."},{"year":"2018","desc":"Won second price in the annual hackathon event organised by the company Credence Analytics."}]
    }
});
new Vue({
  el: '#mywork',
  data: {
      works:[{"img_src":"assets/images/RateTicker.jpg","img_alt":"RateTicker","project_name":"Rate Ticker","project_desc":"This was a research project which aimed to be used in our product (MercuryFX) to stream online rates."},{"img_src":"assets/images/YB.jpg","img_alt":"YB Perfumes","project_name":"YB Perfumes","project_desc":"Project developed to manage perfume trading business, this project covered entire life cycle of the business."}]
    }
});
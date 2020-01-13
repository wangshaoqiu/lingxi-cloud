
<style style="scss" scoped>
.content {
  width: 100%;
  min-height: 300px;
  position: absolute;
  top: 90px;
  padding: 0 40px;
}
.searchArea {
  position: absolute;
  z-index: 999;
  top: 14px;
  right: 252px;
}
.title {
  width: 100%;
  text-align: center;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  font-size: 30px;
}
.subTitle {
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  width: 100%;
  text-align: center;
  margin-top: 30px;
}
.main {
  width: 100%;
  margin-top: 50px;
  height: 650px;
}
.mainLabel {
  width: 19.24%;
  min-width: 135px;
  /* height: 580px; */
  height: 53.7vh;
  min-height: 450px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 11px 6px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  margin-right: 10px;
  position: relative;
  overflow: hidden;
}
.mainLabel:hover {
  /* height: 650px; */
  height: 60.18vh;
  min-height: 500px;
  width: 21.53%;
  margin-top: -35px;
  margin-right: -1px;
  margin-left:-10px;
      z-index: 999;
  /* box-shadow: 0px 0px 11px 6px rgba(0, 0, 0, 0.06); */

}
.mainLabel:hover .labelBg{
  /* height: 515px; */
  height: 42vh;
  /* height: calc(35.19vh+70px); */

}
.mainLabel:hover +.mainLabel{
  box-shadow: none;
}
.logo {
  width: 135px;
  height: 135px;
  margin: 0 auto;
  /* margin-top: 64px; */
  /* margin-top:11.03%; */
}
.logo img {
  width: 100%;
  height: 100%;
}
.labelName {
  font-size: 25px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #fff;
  width: 100%;
  text-align: center;
  /* margin-top: 40px; */
  margin-top:6.89%;
}
.tags {
  width: 90%;
  /* margin-top: 25px; */
  margin-top:4.31%;
  flex-wrap: nowrap;
  margin-left:5%;
  overflow: hidden;

}
.tags img {
  width: 14px;
  height: 14px;
}
.tags div {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #fff;
  max-width:70%;
  overflow: hidden;

}
.tags div p{
  text-overflow: ellipsis;
  overflow: hidden;
  color: #fff;

}
.FGX {
  width: 86.88%;
  height: 1px;
  background: rgba(235, 238, 245, 1);
  margin: 0 auto;
  /* margin-top: 60px; */
   margin-top:10.34%;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.files {
  margin-top: 15px;
  width: 100%;
  padding: 0 18px;
  height: 90px;
}
.file {
  margin-top: 15px;
  width: 100%;
  cursor: pointer;
}
.fileTitle{
  max-width:calc(100% - 95px);
}
.round {
  width: 6px;
  height: 6px;
  background: rgba(83, 180, 179, 1);
  border-radius: 50%;
  margin-right: 10px;
  flex-shrink: 0;
}
.fileName {
  width:100%;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}
p{
  width:100%;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
      line-height: 20px;
    margin: 0;
    overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
}

.fileTime {
  width:78px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  white-space: nowrap;
  margin-left: 10px;
}
.arrow {
  width: 28px;
  height: 19px;
  position: absolute;
  right: 20px;
  bottom: 30px;
  cursor: pointer;
}
.arrow img {
  width: 28px;
  height: 19px;
}
.labelBg0{
  background:linear-gradient(137deg,rgba(255,76,76,1) 0%,rgba(248,151,127,1) 100%);
}
.labelBg1{
  background:linear-gradient(134deg,rgba(162,73,239,1) 0%,rgba(169,136,242,1) 100%);
}
.labelBg2{
  background:linear-gradient(134deg,rgba(47,209,218,1) 0%,rgba(56,213,209,1) 100%);
}
.labelBg3{
  background:linear-gradient(134deg,rgba(15,119,239,1) 0%,rgba(19,196,239,1) 100%);
}
.labelBg4{
  background:linear-gradient(134deg,rgba(251,107,63,1) 0%,rgba(251,173,64,1) 100%);
}
.labelBg{
  padding-top:11.03%;
  /* padding-top:64px; */
  cursor: pointer;
  /* height: 380px; */
  height: 35.19vh;
  min-height: 272px;
}
.nofile{
  font-size:14px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(153,153,153,1);
margin-top:61px;
width:100%;
text-align: center;
}
 /*分辨率高于1680，采用下面的样式*/
    @media screen and (min-device-width: 1680px){
      .mainLabel{
        height: 580px;
      }
      .mainLabel:hover{
        height: 650px;
      }
      .mainLabel:hover .labelBg{
        height: 415px;
      }
      .labelName{
        margin-top:40px;
      }
      .tags{
        margin-top:25px;
      }
      .labelBg{
  padding-top:64px;
  height: 380px;
}
    }
</style>

<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-9"></base-header>
    <!-- <img src="../assets/images/chicken.png" class="icon-warning" alt=""> -->
    <div class="searchArea">
      <form class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
        <div class="form-group mb-0">
          <base-input
            placeholder="搜索文件"
            class="input-group-alternative"
            alternative
            v-model="keyword"
            @keyup.enter.native="search"
            addon-right-icon
          ></base-input>
          <!-- 这个input阻止回车事件刷新页面 也就是去掉了默认的submit -->
          <input type="text" style="opacity:0;width:0;height:0">
        </div>
      </form>
    </div>

    <div class="content">
      <div class="title">发现你感兴趣的资料</div>
      <div class="subTitle">
        将知识库中的文件资料按照 {{nameStr}} 进行归纳整理
        <br />各类包含各子类标签文件，帮助你找到最想要的资料
      </div>

      <div class="main flex">
        <div class="mainLabel" v-for="(item,index) in allCards" :key="index">
          <div :class="`labelBg${index}`" class="labelBg"  @click="gotoDetail(item.id,item.name)">
          <div class="logo">
            <img :src="item.iconUrl" alt />
          </div>
          <div class="labelName">{{item.name}}</div>
          <div class="tags flex justify-center align-center" >
            <img src="../assets/images/tag2.png" style="width:14px;height:14px" />
            <div class="ml10"><p>{{item.lables}}</p></div>
          </div>
          <!-- <div class="FGX"></div> -->
          </div>
          <div class="files">
            <div
              class="file flex justify-between"
              v-for="(sub,subindex) in item.latestFiles"
              :key="subindex"
              @click="open(sub.fileExt,sub.fileUrl)"
            >
              <div class="fileTitle flex align-center">
                <div class="round"></div>
                <div class="fileName"><p style="">{{sub.name}}</p></div>
              </div>
              <div class="fileTime">{{sub.createTime}}</div>
            </div>
            <div class="nofile" v-if="item.latestFiles.length==0">暂无文件</div>
          </div>
          <div class="arrow" @click="gotoDetail(item.id,item.name)">
            <img src="../assets/images/分类箭头.png" alt />
          </div>
        </div>
       
      </div>
    </div>
  </div>
</template>

<script>
import { getCards } from "../api/tag";
export default {
  data() {
    return {
      keyword: "",
      allCards: [],
      nameArr: [],
      nameStr: ''
    };
  },
  watch: {},
  created() {
    this.getCards();
  },
  methods: {
    open(fileExt,url) {
      if(fileExt=='.xlsx'||fileExt=='.pptx'||fileExt=='.xls'||fileExt=='.ppt'||fileExt=='.docx'||fileExt=='.doc'){
         window.open('https://view.officeapps.live.com/op/view.aspx?src='+url)
      } else {
        window.open(url)
      }
    },
    getCards() {
      getCards().then(res => {
        for (let i = 0; i < res.length; i++) {
          this.nameArr.push('「' + res[i].name + '」')
          // this.nameStr = this.nameArr.split('')


          for (let x = 0; x < res[i].latestFiles.length; x++) {
            res[i].latestFiles[x].createTime = res[i].latestFiles[
              x
            ].createTimeStr.substring(0, 10);
          }

          const arr = [];
          for (let x = 0; x < res[i].childLabels.length; x++) {
            arr.push(res[i].childLabels[x].name);
          }
          const xx = arr.join("、");
          res[i].lables = xx;
        }
        this.nameStr = this.nameArr.join('、')

        this.allCards = res;
      });
    },
    gotoDetail(id,name) {
      this.$router.push({
        path: "/classifyItem",
        query: {
          id: id,
          name:name
        }
      });
    },
    search() {
      if (this.keyword == "") {
        this.$notify({
          title: "失败",
          message: "请输入搜索内容",
          type: "warning"
        });
        return;
      }
      this.$router.push({
        path: "/department",
        query: {
          keyword: this.keyword
        }
      });
    }
  }
};
</script>



<style style="scss" scoped>
.content {
  width: 100%;
  min-height: 300px;
  position: absolute;
  top: 90px;
  padding: 0 40px;
}
.main {
  width: 100%;
  min-height: 900px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 11px 6px rgba(0, 0, 0, 0.03);
  padding-top: 25px;
}
.count{
font-size:14px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(153,153,153,1);
}
.searchArea {
  position: absolute;
  z-index: 999;
  top: 14px;
  right: 252px;
}
.tagSelected{
    color:#53B4B3 !important;
}
.tagTitle{
font-size:14px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(83,180,179,1);
cursor: pointer;
  }
.noTagSelected{
    color:#bbb;
}
.tagChecks{
      width:335px;
height:240px;
border-radius:4px;
border:1px solid rgba(235,238,245,1);
margin-top:15px;
margin-bottom: 20px;
  }
  .selectTag_tag{
      width:100%;
      flex-wrap: wrap;
       margin-top:10px;
       padding: 0 10px;
  }
  .selectTag{
height:30px;
background:rgba(246,249,252,1);
border-radius:4px;
font-size:14px;
color:rgba(102,102,102,1);
padding:0 25px;
text-align: center;
line-height: 30px;
margin-right: 15px;
margin-bottom: 15px;
cursor: pointer;
display: inline-block;
  }
  .selectTag2{
      height:30px;
background:rgba(83,180,179,1);
border-radius:4px;
font-size:14px;
color:rgba(255,255,255,1);
padding:0 25px;
text-align: center;
line-height: 30px;
margin-bottom: 15px;
margin-right: 15px;
cursor: pointer;
display: inline-block;
  }
  .editTag{
      width:100%;
      height: 200px;
      padding:0 30px;
      margin-top:5px;
     
  }
  
    .tagBtns{
      margin-top:20px;
  }
  .noFile{
        width:100%;
        height: 100%;
        position: relative;

    }
    .noFile img{
        width: 300px;
        height: 195px;
        position: absolute;
        left:50%;
        margin-left:-150px;
        top:150px;

    }
    .noFile_text{
        width:100%;
        font-size:21px;
font-family:PingFangSC-Regular,PingFangSC;
font-weight:400;
color:rgba(153,153,153,1);
text-align: center;
position: absolute;
top:350px;
    }
</style>

<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-9"></base-header>
    <!-- <i class="ni ni-air-baloon text-white icon-warning"></i> -->
    <img src="../assets/images/chicken.png" class="icon-warning" alt="">
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
      <div class="main">
        <div class="flex justify-between" style="margin-left:25px;">
                    <div class="count">最新文件</div>
                </div>


          <div v-if="total==0" class="noFile">
                    <img src="../assets/images/noFile.png" alt="">
                    <div class="noFile_text">暂无文件，赶快去新建吧~</div>
                </div>  
                    <div class="table-responsive mt25">
                        <base-table class="table align-items-center table-flush" :class="type === 'dark' ? 'table-dark': ''" :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'" tbody-classes="list" :data="allFiles">
                            <template slot="columns">
                            
                          <th style="padding-left:26px;">文件名</th>
                        <th>
                            <div class="flex align-center">
                              <div style="margin-right:7px;" :class="selectedTag3.length>0?'tagSelected':''">标签</div>
                              <el-popover
                                    placement="bottom-start"
                                    width="400"
                                    popper-class="checkPopover2"
                                    v-model= "showPopover"
                                    :visible-arrow="false"
                                    trigger="click">
                                    
                                    <img slot="reference" style="cursor:pointer" v-if="selectedTag3.length==0" src="../assets/images/filter.png" alt="" @click="tagFilter">
                                    <img slot="reference" style="cursor:pointer" v-if="selectedTag3.length>0" src="../assets/images/filter2.png" alt="" @click="tagFilter">
                                    <div class="tagsArea">
                                        <div class="tagTitle" :class="selectedTag3.length==0?'noTagSelected':''" @click="clearTags">清除选项</div>
                                        <div class="tagChecks">
                                            <div class="selectTag_tag">
                <div :class="selectedTag3.indexOf(item.name)>-1?'selectTag2':'selectTag'" v-for="(item,index) in canSelectTags" :key="index" @click="selectTag3(item.name)">{{item.name}}</div>
                
            </div>

                                        </div>
                                        <div slot="tagBtns" class="dialog-footer flex justify-center">

                                        <el-button  type="secondary" @click="cancelTag" style="background: rgba(238,238,238,1);color:#666">取消</el-button>
                                        <el-button  type="primary" @click="sureTag" style="margin-left:55px;background:#53B4B3;border:1px solid #53B4B3">确认</el-button>
                                        </div>
                                    </div>
                                </el-popover>
                            </div>
                        </th>
                          <th>上传人</th>
                          <th>上传时间</th>
</template>

<template slot-scope="{row}">
    <td scope="row">
        <div class="media align-items-center" @click="getChildList(row.fileExt,row.fileUrl,row.fileSize)">
            <a href="#" class="rounded-circle mr-3">
                <img alt="Image placeholder" :src="row.iconUrl">
            </a>
            
                <span class="font13 color666" style="cursor:pointer">{{row.name}}</span>
        </div>
    </td>
    <td>
        <div class="flex">
            <div class="labelWrap" v-for="(sub,subIndex) in row.labels" :key="subIndex">
                {{sub}}
            </div>
        </div>
    </td>
    <td class="budget">
        {{row.creatorName}}
    </td>
    <td>
        {{row.createTimeStr}}
    </td>
    
</template>

      </base-table>
    </div>

    <div v-if="total!==0" class="card-footer d-flex justify-content-end"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <el-pagination
        :current-page.sync="getListParam.pageNo"
        :page-sizes="[10,20,30,50]"
        :page-size="getListParam.pageSize"
        :total="total"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>





      </div>
    </div>
    </div>

</template>

<script>
import { latestFile } from "../api/knowledge";
 import {
        getTagArr
    } from '../api/knowledge'
export default {
  data() {
    return {
      keyword: "",
      getListParam:{
        labels: [],
          pageNo:1,
          pageSize:10
      },
      total: 0,
      allFiles: [],
      type: '',
      selectedTag3: [],
      canSelectTags: [],
      showPopover: false
    };
  },
  watch: {
  },
  created() {
      this.getList()
  },
  methods: {
    getChildList(fileExt,fileUrl,fileSize) {
      if(fileSize==0){
                     this.$notify({
                            title: '提示',
                            message: '该文档为空文档',
                            type: 'warning'
                        });
                        return
                }
      if((fileExt=='.pptx'||fileExt=='.ppt'||fileExt=='.docx'||fileExt=='.doc')&&fileSize<10480000){
                        window.open('https://view.officeapps.live.com/op/view.aspx?src='+fileUrl)
                    }else if((fileExt=='.xlsx'||fileExt=='.xls')&&fileSize<5120000){
                        window.open('https://view.officeapps.live.com/op/view.aspx?src='+fileUrl)
                    }else if((fileExt=='.pptx'||fileExt=='.ppt'||fileExt=='.docx'||fileExt=='.doc')&&fileSize>10480000){
                        
                        this.$notify({
                            title: '提示',
                            message: '文档体积过大无法预览，即将开始下载',
                            type: 'warning'
                        });
                        setTimeout(()=>{
                            window.open(fileUrl)
                        },1500)
                    }else if((fileExt=='.xlsx'||fileExt=='.xls')&&fileSize>5120000){
                        this.$notify({
                            title: '提示',
                            message: '文档体积过大无法预览，即将开始下载',
                            type: 'warning'
                        });
                        setTimeout(()=>{
                            window.open(fileUrl)
                        },1500)
                    } else {
                        window.open(fileUrl)
                    }


     
    },
      // 取消筛选标签
            cancelTag() {
                this.showPopover = false
                this.selectedTag3 = []
                 this.getListParam.labels = []
            },
            // 确定筛选标签
            sureTag() {
                this.getListParam.labels = this.selectedTag3
                this.getListParam.pageNo = 1
                this.getListParam.pageSize = 10
                this.getList()
                this.showPopover = false
            },
      // 清除选项
            clearTags() {
                this.selectedTag3 = []
                this.getListParam.labels = []
            },
            // 筛选标签
            selectTag3(name) {
                const length = this.selectedTag3.length;
               for(let i=0;i<length;i++){
                   if(this.selectedTag3[i]==name){
                       this.selectedTag3.splice(i,1)
                       return
                   }
               }
               this.selectedTag3.push(name)
            },
            tagFilter() {
                const param = {
                    type: 2,
                    iot:''
                }
                getTagArr(param).then(res=>{
                    this.canSelectTags = res
                })
            },
       // 获取文件列表
            getList() {
                latestFile(this.getListParam).then(res => {
                    this.total = res.total
                    for(let i=0;i<res.list.length;i++){
                        if(res.list[i].labels!==null){
                            res.list[i].labels2 = res.list[i].labels.join(' ')
                        }
                    }
                    this.allFiles = res.list
                })
            },
    search() {
      // if (this.keyword == "") {
      //   this.$notify({
      //     title: "失败",
      //     message: "请输入搜索内容",
      //     type: "warning"
      //   });
      //   return;
      // }
      console.log('search')
      this.$router.push({
        path: "/department",
        query: { keyword: this.keyword }
      });
    },
    // 分页
            handleSizeChange(val) {
                this.getListParam.pageSize = val
                this.getList()
            },
            // 分页
            handleCurrentChange(val) {
                this.getListParam.pageNo = val
                this.getList()
            }
  }
};
</script>


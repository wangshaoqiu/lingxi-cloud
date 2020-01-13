
<style scoped>
    .allFiles {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        position: absolute;
        z-index: 999;
        top: 173px;
        left: 40px;
    }
    .content {
        width: 100%;
        /* background:rgba(245,245,245,1); */
        min-height: 300px;
        position: absolute;
        top: 170px;
        /* left:5%; */
        padding: 0 40px;
    }
    .main {
        width: 100%;
        z-index: 999;
        background: #fff;
        min-height: 500px;
        box-shadow: 0px 0px 11px 6px rgba(0, 0, 0, 0.03);
        border-radius: 4px;
    }
    @media (min-width: 768px) {
        .pt-md-8,
        .py-md-8 {
            padding-top: 7rem !important;
        }
    }
    .button2 {
        color: #fff;
    }
    .button2:hover {
        color: #53B4B3
    }
    .count {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
    }
    .departItem {
        /* width: 360px; */
        height: 125px;
        background: rgba(247, 249, 252, 1);
        box-shadow: 0px 0px 8px 7px rgba(0, 0, 0, 0.04);
        border-radius: 4px;
        position: relative;
        /* margin-right: 30px; */
        margin-bottom: 30px;
    }
    .departItem-left {
        width: 140px;
        height: 125px;
    }
    .departItem-left img {
        width: 140px;
        height: 125px;
    }
    .departName {
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFangSC;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        margin-top: 38px;
        margin-left: 20px;
    }
    .departFiles {
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        margin-top: 10px;
        margin-left: 20px;
    }
    .departSelect {
        position: absolute;
        top: 10px;
        right: -13px;
    }
    .el-dialog__header {
        border: none !important;
    }
    .dialog_head_box2 {
        width: 100%;
        height: 9.4vh;
        border-bottom: 1px solid #eee;
        min-height: 60px;
        padding: 0 30px;
    }
    .dialog_head {
        color: rgba(51, 51, 51, 1);
        height: 9.4vh;
        /* line-height: 9.4vh; */
        font-size: 16px;
        position: relative;
        min-height: 60px;
        display: flex;
        align-items: center;
    }
    .uploadFile_box {
        padding: 30px;
        
    }
    .uploadFile {
       /* width: 100%; */
        height: 140px;
        /* margin-left:10%; */
        border: 2px solid rgba(235, 238, 245, 1); 
        border-radius: 4px;
        
        /* border: 2px solid rgba(235, 238, 245, 1); */
    }
    .uploadFile_icon {
        width: 100%;
        text-align: center;
        margin-top: 34px;
    }
    .upload_txt {
        font-size: 16px;
        text-align: center;
    }
    .canSee {
        padding: 0 30px;
        margin-top:10px;
    }
    .haha {
        width: 100px;
        height: 20px;
        margin-left: 30px;
        margin-top: -29px;
        line-height: 20px;
        font-weight: 400;
    }
    .drawer_footer_box {
        width: 100%;
        height: 9.2vh;
        position: absolute;
        bottom: 0;
        min-height: 60px;
        border-top: 1px solid rgba(238, 238, 238, 1);
        background: #fff;
    }
    .drawer_footer {
        position: relative;
        width: 100%;
        height: 100%;
    }
    @media (min-width: 768px) {
        .pt-md-8,
        .py-md-8 {
            padding-top: 100px !important;
        }
    }
    .el-radio-wrap {
        margin-left: 44px;
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
    .media-body:hover{
        cursor: pointer;
    }
     .searchArea{
    position: absolute;
    z-index:999;
    top:14px;
    right: 252px;
  }
  .toolbtn{
    cursor: pointer;
    opacity: 0.8;
  }
  .toolbtn:hover{
    opacity: 1;
  }
  .hover1{
    cursor: pointer;
    
  }
 
  .tagsArea{
      width:100%;
height:100%;
/* background:rgba(255,255,255,1);
box-shadow:0px 0px 8px 7px rgba(0,0,0,0.04);
border-radius:4px;
padding:25px 25px 30px 25px; */
  }
  .tagTitle{
font-size:14px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(83,180,179,1);
cursor: pointer;
  }
  .tagChecks{
      width:335px;
height:240px;
border-radius:4px;
border:1px solid rgba(235,238,245,1);
margin-top:15px;
margin-bottom: 20px;
  }
  .tagBtns{
      margin-top:20px;
  }
  .selectTag_area{
      margin-top:40px;
      padding:0 30px;
      width:100%;
  }
  .selectTag_tit{
      font-size:16px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(51,51,51,1);
margin-bottom: 25px;
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
  .editTag_wrap{
       width:100%;
      height: 200px;
 border:1px solid #eee;
 overflow: auto;
     padding: 15px;
  }
  .tagBox {
  width: 100%;
}
.tag_title img {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.tag_title div {
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  margin-left: 15px;
}
.tags {
  width: 100%;
  flex-wrap: wrap;
  margin-top: 10px;
}
.fileNameX{
    width:150px;
    line-height:20px;
    overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
margin:0;
font-size: 13px;
font-weight: 400;
cursor: pointer;
}
.tagSelected{
    color:#53B4B3 !important;
}
.noTagSelected{
    color:#bbb;
}

</style>

<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <base-button v-waves v-if="showBtns" type="secondary" style="color:#53B4B3" @click="showDialog">上传文件</base-button>
            <base-button v-if="showBtns&&(admin==1||admin2==1)" type="secondary" style="color:#53B4B3" @click="createDir">新建文件夹</base-button>
            <base-button v-if="showDelBtn&&showBtns&&total!==0&&(admin==1||admin2==1)" outline type="secondary" class="button2" @click="muchDel">删除</base-button>
        </base-header>
        <img src="../assets/images/chicken.png" class="icon-warning" alt="">

        <div class="searchArea">
                  <form class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
                    <div class="form-group mb-0">
                            <base-input placeholder="搜索文件"
                                    class="input-group-alternative"
                                    alternative=""
                                    v-model="searchParam.keyword"
                                    @keyup.enter.native="search"
                                    addon-right-icon="">
                            </base-input>
                            <!-- 这个input阻止回车事件刷新页面 也就是去掉了默认的submit -->
          <input type="text" style="opacity:0;width:0;height:0">
                            </div>
                </form>
                </div>

        <div class="content">
            <div class="main">
                <div class="flex justify-between" style="padding:25px;">
                    <!-- <div class="count">全部文件夹 - {{topDirName}}</div> -->
                    <el-breadcrumb separator="/" v-if="showBtns">
  <el-breadcrumb-item :to="{ path: '/resource' }"><span style="color:#999">全部文件夹</span></el-breadcrumb-item>
  <el-breadcrumb-item ><a @click="backTopFile"><span style="color:#999">{{topDirName}}</span></a></el-breadcrumb-item>
  <el-breadcrumb-item v-for="(item,index) in breadArr" :key="index"><a @click="goto(item.dofId)"><span style="color:#999">{{item.name}}</span></a></el-breadcrumb-item>
</el-breadcrumb>
                    <div class="count">共{{total}}个文件</div>
                </div>
                <div v-if="total==0" class="noFile">
                    <img src="../assets/images/noFile.png" alt="">
                    <div class="noFile_text">暂无文件，赶快去新建吧~</div>
                </div>
                    <div class="table-responsive" v-if="total>0">
                        <base-table class="table align-items-center table-flush" :class="type === 'dark' ? 'table-dark': ''" :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'" tbody-classes="list" :data="allFiles">
                            <template slot="columns">
                            <th  style="padding:0 0 0 25px; width:65px;" v-if="admin==1||admin2==1">
                                <!-- <base-checkbox v-model="checkboxes">
                                </base-checkbox> -->
                                 <el-checkbox  v-model="checkboxes"></el-checkbox>
                            </th>
                            
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
                                    <img slot="reference" style="cursor:pointer" v-if="showBtns&&selectedTag3.length==0" src="../assets/images/filter.png" alt="" @click="tagFilter">
                                    <img slot="reference" style="cursor:pointer" v-if="showBtns&&selectedTag3.length>0" src="../assets/images/filter2.png" alt="" @click="tagFilter">
                                    <div class="tagsArea">
                                        <div class="tagTitle" :class="selectedTag3.length==0?'noTagSelected':''" @click="clearTags">清除选项</div>
                                        <div class="tagChecks">
                                            <div class="selectTag_tag">
                <div :class="selectedTag3.indexOf(item.name)>-1?'selectTag2':'selectTag'" v-for="(item,index) in canSelectTags" :key="index" @click="selectTag3(item.name)">{{item.name}}</div>
                
            </div>
                                        </div>
                                        <div slot="tagBtns" class="dialog-footer flex justify-center">

                                        <el-button  @click="cancelTag" style="background: rgba(238,238,238,1);color:#666">取消</el-button>
                                        <el-button  type="primary" @click="sureTag" style="margin-left:55px;background:#53B4B3;border:1px solid #53B4B3">确认</el-button>
                                        </div>
                                    </div>
                                </el-popover>
                            </div>
                        </th>
                          <th>上传人</th>
                          <th>上传时间</th>
                          <th>查看状态</th>
                          <th>操作</th>
                          <th></th>
</template>

<template slot-scope="{row}">
    <th scope="row" style="padding:0 0 0 25px;" v-if="admin==1||admin2==1">
        <!-- <base-checkbox v-model="row.checked">
        </base-checkbox> -->
        <el-checkbox   v-model="row.checked"  ></el-checkbox>
    </th>
    <td scope="row">
        <div class="media align-items-center" @click="getChildList(row.fileExt,row.dofId,row.fileUrl,row.name,row.fileSize)">
            <a href="#" class="rounded-circle mr-3">
                <img alt="Image placeholder" :src="row.iconUrl">
            </a>
            
                <p class="fileNameX font13 color666">{{row.name}}</p>
        </div>
    </td>
    <td>
        <div class="flex">
            <div class="labelWrap" v-for="(sub,subIndex) in row.labels" :key="subIndex">
                {{sub}}
            </div>
        </div>
        <!-- {{row.labels2}} -->
    </td>
    <td class="budget">
        {{row.creatorName}}
    </td>
    <td>
        {{row.createTimeStr}}
    </td>
    <td>
        {{row.fileVizTypeStr}}
    </td>
    <td>
         <div class="flex">
        <div v-if="row.type==1&&row.canOp" class="toolbtn flex justify-center align-center"  @click="showEditDialog(row.dofId,1)" >
        <img class="hover1"  src="../assets/images/edit2.png" style="width:14px;height:14px;" alt="">
        <div class="font14 ml10" style="color:#999">编辑</div>
        </div>
        <div v-if="row.type==2&&row.canOp" class="toolbtn flex justify-center align-center"  @click="showEditDialog(row.dofId,2)" >
        <img class="hover1"  src="../assets/images/key2.png" style="width:14px;height:14px;" alt="">
        <div class="font14 ml10" style="color:#999">权限</div>
        </div>
        <div v-if="row.type==2&&row.canOp" class="toolbtn flex justify-center align-center"  style="margin-left:50px" @click="showTag(row.dofId)" >
        <img class="hover1"  src="../assets/images/tag.png" style="width:14px;height:14px;" alt="">
        <div class="font14 ml10" style="color:#999">标签</div>
        </div>
        <div v-if="row.canOp" class="toolbtn flex justify-center align-center" style="margin-left:50px" @click="showDelDialog(row.dofId,row.type)">
        <img class="hover1" src="../assets/images/delete2.png" style="width:14px;height:14px;" alt="">
        <div class="font14 ml10" style="color:#999">删除</div>
        </div>
        
</div>
    </td>
    <td>
        

    </td>
</template>

      </base-table>
    </div>

    <div v-if="showBtns&&total!==0" class="card-footer d-flex justify-content-end"
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


    <!-- ==start==编辑文件夹dialog -->
 <el-dialog title="编辑文件夹 " :visible.sync="dialogFormVisible" width="27%" :show-close="show_close">
      <el-form :model="editFile">
        <el-form-item label="文件名：" label-width="120px">
          <el-input v-model="editFile.name" autocomplete="off" style="width:80%;"></el-input>
        </el-form-item>
        
      </el-form>
      <div slot="footer" class="dialog-footer flex justify-center">

        <el-button  @click="dialogFormVisible = false" style="background: rgba(238,238,238,1);color:#666">取消</el-button>
     <el-button  type="primary"  @click="sureEditDir" style="margin-left:55px;">确认</el-button>
      </div>
    </el-dialog>
<!-- ==end==编辑文件夹dialog -->



   <!-- ==start==编辑文件dialog -->
 <el-dialog title="可见范围 " :visible.sync="dialogFormVisible2" width="358px" :show-close="show_close">
     <div class="el-radio-wrap">
      <el-radio-group v-model="radio2">
            <div>
              <el-radio :label="1"><div class="haha color999"><span class="color333">互联网可见</span><br>知识库对互联网所有人可见</div></el-radio>
            </div>
            <div class="mt30">
              <el-radio :label="2"><div class="haha color999"><span class="color333">公司内部成员可见</span><br>仅对公司内部成员可见</div></el-radio>
            </div>
            <div class="mt30">
              <el-radio :label="3"><div class="haha color999"><span class="color333">查看专属文件成员可见</span><br>仅对该文件夹相关成员可见</div></el-radio>
            </div>
            <div class="mt30">
              <el-radio :label="4"><div class="haha color999"><span class="color333">查看保密文件成员可见</span><br>仅对拥有该保密文件权限成员可见</div></el-radio>
            </div>
  </el-radio-group>
  </div>
      <div slot="footer" class="dialog-footer flex justify-center">

        <el-button  @click="dialogFormVisible2 = false" style="background: rgba(238,238,238,1);color:#666">取消</el-button>
     <el-button type="primary"  @click="sureEditFile" style="margin-left:55px;">确认</el-button>
      </div>
    </el-dialog>
<!-- ==end==编辑文件dialog -->



   <!-- ==start==新建文件夹dialog -->
 <el-dialog title="新建文件夹 " :visible.sync="dialogFormVisible3" width="27%" :show-close="show_close">
      <el-form :model="addDir">
        <el-form-item label="文件名：" label-width="120px">
          <el-input v-model="addDir.name" autocomplete="off" style="width:80%;"></el-input>
        </el-form-item>
        
      </el-form>
      <div slot="footer" class="dialog-footer flex justify-center">

        <el-button v-waves  @click="dialogFormVisible3 = false" style="background: rgba(238,238,238,1);color:#666">取消</el-button>
     <el-button v-waves type="primary"  @click="sureAddDir" style="margin-left:55px;">确认</el-button>
      </div>
    </el-dialog>
<!-- ==end==新建文件夹dialog -->



<!-- ==start==删除文件夹dialog -->
<div class="noFGX">
<el-dialog
  title="确认删除该文件夹吗？"
  :visible.sync="centerDialogVisible"
  width="30%"
  :show-close="show_close"
  center class="text-center">
  <div class="text-center"><span>删除后，将无法还原文件</span></div>
  
  <span slot="footer" class="dialog-footer">

 <el-button  @click="centerDialogVisible = false" style="background: rgba(238,238,238,1);color:#666">取消</el-button>
     <el-button type="primary"  @click="sureDelDir" style="margin-left:55px;">确认</el-button>

  </span>
</el-dialog>
</div>
<!-- ==end==删除文件夹dialog -->



<!-- ==start==删除文件dialog -->
<div class="noFGX">
<el-dialog
  title="确认删除该文件吗？"
  :visible.sync="centerDialogVisible2"
  width="30%"
  :show-close="show_close"
  center class="text-center">
  <div class="text-center"><span>删除后，将无法还原文件</span></div>
  
  <span slot="footer" class="dialog-footer">

 <el-button  @click="centerDialogVisible2 = false" style="background: rgba(238,238,238,1);color:#666">取消</el-button>
     <el-button  type="primary"  @click="sureDelFile" style="margin-left:55px;">确认</el-button>

  </span>
</el-dialog>
</div>
<!-- ==end==删除文件dialog -->




<!-- ==start==批量删除文件dialog -->
<div class="noFGX">
<el-dialog
  title="确认批量删除选择的文件吗？"
  :visible.sync="showMuchDel"
  width="30%"
  :show-close="show_close"
  center class="text-center">
  <div class="text-center"><span>删除后，将无法还原文件</span></div>
  
  <span slot="footer" class="dialog-footer">

 <el-button   @click="showMuchDel = false" style="background: rgba(238,238,238,1);color:#666">取消</el-button>
     <el-button  type="primary"  @click="sureMuchDel" style="margin-left:55px;">确认</el-button>

  </span>
</el-dialog>
</div>
<!-- ==end==批量删除文件dialog -->





<!-- ==start==抽屉 上传文件 -->
    <el-drawer
      :before-close="handleClose"
      :visible.sync="dialog"
      :direction="direction"
      custom-class="demo-drawer"
      :show-close="showClose"
      ref="drawer"
      style="overflow-y:auto;"
    >
      <div class="demo-drawer__content" style="padding-bottom:90px;overflow-y:auto;overflow-x:hidden">
        <div class="dialog_head_box2 flex justify-between align-center">
          <div class="dialog_head">上传文件</div>
          <i class="el-icon-close" @click="dialog=false" style="cursor:pointer"></i>
        </div>
        <div class="uploadFile_box">




<!-- <el-upload
  class="upload-demo"
  drag
  ref="upload"
  action="https://upload.qiniup.com"
  :data= "qiniuData"
  :on-change = "handleChange"
  :on-success = "handleSuccess"
  :before-upload = "beforeUpload"
  :on-remove = "handleRemove"
  :show-file-list = "showFileList"
  :auto-upload="false"
  :limit= "limit"
  :on-exceed = "exceed"
  :http-request="uploadRequest"
  multiple>

        <div class="uploadFile" slot="trigger">
          <div class="uploadFile_icon">
          <img src="../assets/images/上传.png" class="up-load" alt="">
          </div>
          <div class="upload_txt color999 mt10">点击此处上传文件</div>
        </div>

    </el-upload> -->

    <div class="uploadFile" id="pickfiles1">
          <div class="uploadFile_icon">
          <img src="../assets/images/上传.png" class="up-load" alt="">
          </div>
          <div class="upload_txt color999 mt10">点击此处上传文件</div>
        </div>

<!-- <button id="pickfiles1">上传视频1</button> -->
    <upload ref="mychild" :browse_button='browse_button1'
            @getChidC="getChid"
            :uptoken='uptoken1'
            :domain='domain1'
            :bucket_name='bucket_name1'
            :visibility="radio"
            :dirId = "topDirId"
            :selectedTag = "selectedTag"
            >
    </upload>


        </div>

        <div class="canSee">
          <!-- <div class="canSeeRange color333 font16"><span style="color:#F44568">*</span>可见范围</div> -->
          <el-form>
           <div class="selectTag_tit"><span style="color:#F44568">*</span>可见范围</div>
          </el-form>
             <el-radio-group v-model="radio">
            <div style="margin-top:5px;">
              <el-radio :label="1"><div class="haha color999"><span class="color333">互联网可见</span><br>知识库对互联网所有人可见</div></el-radio>
            </div>
            <div class="mt30">
              <el-radio :label="2"><div class="haha color999"><span class="color333">公司内部成员可见</span><br>仅对公司内部成员可见</div></el-radio>
            </div>
            <div class="mt30">
              <el-radio :label="3"><div class="haha color999"><span class="color333">查看专属文件成员可见</span><br>仅对该文件夹相关成员可见</div></el-radio>
            </div>
            <div class="mt30">
              <el-radio :label="4"><div class="haha color999"><span class="color333">查看保密文件成员可见</span><br>仅对拥有该保密文件权限成员可见</div></el-radio>
            </div>
  </el-radio-group>
        </div>

        <div class="selectTag_area" id="contone">
            <div class="selectTag_tit">标签</div>
            <!-- <div class="selectTag_tag flex">
                <div :class="selectedTag.indexOf(item.id)>-1?'selectTag2':'selectTag'" v-for="(item,index) in all2Tag" :key="index" @click="selectTag(item.id)">{{item.name}}</div>
            </div> -->





             <div class="tagBox" v-for="(item,index) in allStructures" :key="index">
          <div class="tag_title flex align-center" v-if="item.children.length>0" style="margin-top:15px;margin-bottom:20px;">
            <img :src="item.iconUrl" alt />
            <div>{{item.name}}</div>
          </div>
          <div class="tags flex" v-if="item.children.length>0">
            <div
              class="flex align-center justify-between"
              v-for="(sub,subIndex) in item.children"
              :key="subIndex"
            >
              <div :class="selectedTag.indexOf(sub.id)>-1?'selectTag2':'selectTag'" @click="selectTag(sub.id)">{{sub.name}}</div>
            </div>
          </div>
        </div>










        </div>


        <div class="drawer_footer_box">
          <div class="drawer_footer flex align-center justify-center">

            <el-button v-waves size="medium" type="primary" @click="submitUpload">保存</el-button>
          </div>
        </div>
      </div>
    </el-drawer>
<!-- ==end==抽屉 上传 -->




   <!-- ==start==编辑标签dialog -->
   <div class="noFGX bodyPd0">
 <el-dialog title="编辑标签 " :visible.sync="showTagDialog" width="30%" :show-close="show_close">
    <div class="editTag">
        <div class="editTag_wrap">
            <!-- <div class="selectTag_tag">
                <div :class="selectedTag2.indexOf(item.name)>-1?'selectTag2':'selectTag'" v-for="(item,index) in all2Tag" :key="index" @click="selectTag2(item.name,item.id)">{{item.name}}</div>
                
            </div> -->








            <div class="tagBox" v-for="(item,index) in allStructures" :key="index">
          <div class="tag_title flex align-center" v-if="item.children.length>0">
            <img :src="item.iconUrl" alt />
            <div>{{item.name}}</div>
          </div>
          <div class="tags flex" v-if="item.children.length>0">
            <div
              class="flex align-center justify-between"
              v-for="(sub,subIndex) in item.children"
              :key="subIndex"
            >
              <div :class="selectedTag2.indexOf(sub.name)>-1?'selectTag2':'selectTag'" @click="selectTag2(sub.name,sub.id)">{{sub.name}}</div>
            </div>
          </div>
        </div>















        </div>

    </div>

      <div slot="footer" class="dialog-footer flex justify-center" style=" margin-top: 30px;">

        <el-button  @click="showTagDialog = false" style="background: rgba(238,238,238,1);color:#666">取消</el-button>
     <el-button  type="primary"  @click="sureEditTag" style="margin-left:55px;">确认</el-button>
      </div>
    </el-dialog>
    </div>
<!-- ==end==编辑标签dialog -->









  </div>
</template>

<script>
import waves from '@/directives/waves'
    import {
        uploadFile,
        updateDir,
        delDir,
        updateFile,
        getChildDir,
        delFile,
        muchDel,
        addChildDir,
        search,
        updateTag,
        getTagArr,
        getStrategy2
    } from '../api/knowledge'
    import { all2Tag,structures } from '../api/tag'
    import { getStorage } from '../utils/auth'
    // import  Qiniu from 'qiniu-js'
    import Upload from '../components/Upload'
    export default {
        directives: {
            waves
        },
        data() {
            return {
                browse_button1: 'pickfiles1',
            uptoken1: '',
             domain1: '',
            bucket_name1: 'testvideo2',
                show_close: false,
                centerDialogVisible: false,
                centerDialogVisible2: false,
                dialogFormVisible: false,
                dialogFormVisible2: false,
                dialogFormVisible3: false,
                addDir:{
                    name: ''
                },
                total: 0,
                editFile: {
                    name: ''
                },
                type: '',
                selectAll: '',
                dialog: false,
                direction: "rtl",
                showClose: false,
                radio: 1,
                radio2: 0,
                fileList: [],
                fileNames: [],
                uploadStrategy: {},
                qiniuData: {
                    token: '',
                    key: '',
                    max_retries: 999,
                    chunk_size: '40mb',
                    config:{
  useCdnDomain: true,
  retryCount: 6,
  concurrentRequestLimit:6

}
                },
                showFileList: true,
                getListParam: {
                    pageNo: 1,
                    pageSize: 10,
                    labels: []
                },
                searchParam:{
                    keyword: '',
                    pageNo: 1,
                    pageSize: 1000
                },
                topDirId: '',
                // 2用来存储顶级文件夹id，不做改变
                topDirId2: '',
                allFiles: [],
                editDirId: '',
                delId: '',
                noUpload: null,
                limit: 10,
                topDirName: '',
                // 2用来存储顶级文件夹名称，不做改变
                topDirName2: '',
                checkboxes: false,
                delIdArr: [],
                showMuchDel: false,
                showBtns: true,
                fromResource: false,
                breadArr: [],
                admin: '',
                admin2: '',
                showPopover: false,
                all2Tag: [],
                selectedTag: [],
                showTagDialog: false,
                selectedTag2: [],
                selectedId: '',
                selectedTag2_id: [],
                allStructures: [],
                canSelectTags: [],
                selectedTag3: [],
                showDelBtn: false,
                uniqueNum: 0
            };
        },
        components: {
        Upload
    },
        watch: {
            noUpload: 'handleUploadAll',
            checkboxes: 'checkboxChange',
            allFiles: {
                handler:function() {   //特别注意，不能用箭头函数，箭头函数，this指向全局
                for(let i=0;i<this.allFiles.length;i++){
                    if(this.allFiles[i].checked){
                        this.showDelBtn = true
                        return
                    }
                    }
                    this.showDelBtn = false
            
                    },

                deep: true    //深度监听
            },
        },
        created() {
            getStrategy2().then(res=>{
               this.uptoken1 =  res.uploadToken
               this.domain1 =  res.fsDomain
            })
            
            this.admin = JSON.parse(getStorage("ents")).superAdminFlag
            this.admin2 = JSON.parse(getStorage("ents")).adminFlag
            this.topDirId = this.$route.query.id
            this.topDirId2 = this.$route.query.id
            this.topDirName = this.$route.query.name
            this.topDirName2 = this.$route.query.name
            this.searchParam.keyword = this.$route.query.keyword
            if(this.searchParam.keyword!==''&&this.searchParam.keyword!==undefined&&this.searchParam.keyword!==null){
               
                search(this.searchParam).then(res=>{
                    this.total = res.total
                    for(let i=0;i<res.list.length;i++){
                        res.list[i].checked = false
                        if(res.list[i].labels!==null){
                            res.list[i].labels2 = res.list[i].labels.join(' ')
                        }
                    }
                    this.allFiles = res.list
                })
                this.showBtns = false
                this.fromResource = true
            } else {
                this.getList()
                 this.showBtns = true
            }
            this.getAll2Tag()
            this.getStructures();
            
        },
        methods: {
            // 获取子组件传来的数据
            getChid(e) {
                if(!e){
                    // 说明上传全部结束
                    this.dialog = false
                    this.getList()
                }
            },

            showDialog() {
                this.dialog = true
                this.selectedTag = []
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
                    type: 1,
                    iot:this.topDirId
                }
                getTagArr(param).then(res=>{
                    this.canSelectTags = res
                })
            },
            // 获取全部标签结构
            getStructures() {
      structures().then(res => {
        this.allStructures = res;
      });
    },
            // 编辑处选择标签
            selectTag2(name) {
                const length = this.selectedTag2.length;
               for(let i=0;i<length;i++){
                   if(this.selectedTag2[i]==name){
                       this.selectedTag2.splice(i,1)
                       return
                   }
               }
               this.selectedTag2.push(name)
            },
            // 更新文件标签
            sureEditTag() {
                 for(let i=0;i< this.selectedTag2.length;i++){
                    for(let x=0;x<this.all2Tag.length;x++){
                        if(this.selectedTag2[i]==this.all2Tag[x].name){
                             this.selectedTag2_id.push(this.all2Tag[x].id)
                        }
                    }
                }
                this.showTagDialog = false
                const param = {
                    labelIds: this.selectedTag2_id
                }
                updateTag(this.selectedId,param).then(()=>{
                    this.$notify({
                            title: '成功',
                            message: '更新成功',
                            type: 'success'
                        })
                        this.getList()
                        this.selectedTag2_id = []
                })
            },
            // 打开标签dialog
            showTag(id) {
                this.selectedId = id
                this.showTagDialog = true
                for(let i=0;i<this.allFiles.length;i++){
                    if(this.allFiles[i].dofId ==id){
                        this.selectedTag2 = this.allFiles[i].labels
                        if(this.selectedTag2==null){
                            this.selectedTag2=[]
                        }
                    }
                }
            },
            // 选择标签
            selectTag(id) {
               const length = this.selectedTag.length;
               for(let i=0;i<length;i++){
                   if(this.selectedTag[i]==id){
                       this.selectedTag.splice(i,1)
                       return
                   } 
               }
               this.selectedTag.push(id)
            },
            // 获取全部二级标签
            getAll2Tag() {
                all2Tag().then(res=>{
                    this.all2Tag = res
                })
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
            // 面包屑点击跳转
            goto(dofId) {
                if(this.topDirId == dofId){
                    // 点击了最后一片面包
                    return
                }
                this.getListParam={
                    pageNo: 1,
                    pageSize: 10
                }
                this.topDirId = dofId
                this.getList()

                for(let i = 0;i<this.breadArr.length;i++){
                    if(this.breadArr[i].dofId == dofId){
                        this.breadArr.splice(i+1)
                    }
                }
            },
            // 回到顶级目录
            backTopFile() {
                this.breadArr = []
                this.getListParam={
                    pageNo: 1,
                    pageSize: 10
                }
                this.topDirId = this.topDirId2
                this.getList()

            },
            search() {
                if(this.searchParam.keyword!==''){
                    search(this.searchParam).then(res=>{
                    this.total = res.total
                    for(let i=0;i<res.list.length;i++){
                        res.list[i].checked = false
                        if(res.list[i].labels!==null){
                            res.list[i].labels2 = res.list[i].labels.join(' ')
                        }
                    }
                    this.allFiles = res.list
                })
                this.showBtns = false
                this.checkboxes = false
                } else {
                    // 输入为空的时候
                    if(this.fromResource){
                        this.$notify({
                        title: '失败',
                        message: '请输入搜索内容',
                        type: 'warning'
                    });
                    return
                    } else {
                        this.getList()
                 this.showBtns = true
                 this.checkboxes = false
                    }
                    
                }
                
            },
            // 确认批量删除
            sureMuchDel() {
                this.showMuchDel = false
                const param = {
                items: this.delIdArr
            }
                muchDel(param).then(()=>{
                    this.$notify({
                            title: '成功',
                            message: '删除成功',
                            type: 'success'
                        })
                        this.getList()
                })
                this.checkboxes = false
            },
            // 展示批量删除dialog
      muchDel() {
          this.delIdArr = []
        for(let i=0;i<this.allFiles.length;i++){
          if(this.allFiles[i].checked){
              const obj = {
                  dofId: this.allFiles[i].dofId,
                  type:this.allFiles[i].type
              }
            this.delIdArr.push(obj)
          }
        }
        if(this.delIdArr.length==0){
          this.$notify({
          title: '失败',
          message: '请先勾选需要删除的文件！',
          type: 'warning'
        });
        return
        }
        this.showMuchDel = true
        // this.getStructures()
      },
            // 监听全选box的改变
      checkboxChange() {
        if(this.checkboxes){
          for(let i=0;i<this.allFiles.length;i++){
          this.allFiles[i].checked = true
          }
        } else {
          for(let i=0;i<this.allFiles.length;i++){
          this.allFiles[i].checked = false
          }
        }
        
      },
            createDir() {
                this.addDir={
                    name: ''
                }
                this.dialogFormVisible3 = true
            },
            // 确认新建文件夹
            sureAddDir(){
                if(this.addDir.name==''){
                    this.$notify({
                        title: '失败',
                        message: '请先输入文件名',
                        type: 'warning'
                    });
                    return
                }
                this.dialogFormVisible3 = false
                addChildDir(this.topDirId,this.addDir).then(()=>{
                    this.$notify({
                            title: '成功',
                            message: '新建成功',
                            type: 'success'
                        })
                        this.getList()
                })

            },
            // 文件全部上传完毕的事件
            handleUploadAll() {
                this.uniqueNum = 0
                if (this.noUpload == 0) {
                    this.noUpload = null
                    const param = {
                        dirId: this.topDirId,
                        files: this.uploadStrategy.files,
                        visibilityType: this.radio,
                        labelIds: this.selectedTag
                    }
                    // 清空已上传的文件列表
                    this.$refs.upload.clearFiles()
                    uploadFile(param).then(() => {
                        this.$notify({
                            title: '成功',
                            message: '上传成功',
                            type: 'success'
                        })
                        this.dialog = false
                        // this.showFileList = true
                    })

                    setTimeout(() => {
                        this.getList()
                    }, 2500);
                    
                }
            },
            // 确认编辑文件
            sureEditFile() {
                this.dialogFormVisible2 = false
                const param = {
                    visibilityType: this.radio2
                }
                updateFile(this.editDirId, param).then(() => {
                    this.$notify({
                        title: '成功',
                        message: '编辑成功！',
                        type: 'success'
                    });
                    this.getList()
                })
            },
            // 确认删除文件夹
            sureDelDir() {
                this.centerDialogVisible = false
                delDir(this.delId).then(() => {
                    this.$notify({
                        title: '成功',
                        message: '删除成功！',
                        type: 'success'
                    });
                    this.getList()
                })
            },
            // 确认删除文件
            sureDelFile() {
                this.centerDialogVisible2 = false
                delFile(this.delId).then(() => {
                    this.$notify({
                        title: '成功',
                        message: '删除成功！',
                        type: 'success'
                    });
                    this.getList()
                })
            },
            // 展开删除dialog
            showDelDialog(id, type) {
                this.delId = id
                if (type == 1) {
                    this.centerDialogVisible = true
                } else {
                    this.centerDialogVisible2 = true
                }
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
            },
            // 确认编辑文件夹
            sureEditDir() {
                updateDir(this.editDirId, this.editFile).then(() => {
                    if (this.editDirId.name == '') {
                        this.$notify({
                            title: '失败',
                            message: '请输入文件名称',
                            type: 'warning'
                        });
                        return
                    }
                    this.$notify({
                        title: '成功',
                        message: '编辑文件夹成功！',
                        type: 'success'
                    });
                    this.dialogFormVisible = false
                    this.getList()
                })
            },
            // 展开编辑文件
            showEditDialog(dofId, index) {
                this.editDirId = dofId
                for (let i = 0; i < this.allFiles.length; i++) {
                    if (this.allFiles[i].dofId == dofId) {
                        if (index == 1) {
                            this.dialogFormVisible = true
                            this.editFile.name = this.allFiles[i].name
                        } else {
                            this.dialogFormVisible2 = true
                            this.radio2 = this.allFiles[i].fileVizType
                        }
                    }
                }
            },
            // 获取文件列表
            getList() {
                getChildDir(this.topDirId, this.getListParam).then(res => {
                    this.total = res.total
                    for(let i=0;i<res.list.length;i++){
                        res.list[i].checked = false
                        if(res.list[i].labels!==null){
                            res.list[i].labels2 = res.list[i].labels.join(' ')
                        }
                        
                    }
                    this.allFiles = res.list
                })
            },
            // 获取子文件夹目录
            getChildList(fileExt,dofId,fileUrl,name,fileSize) {
                if(fileUrl==null){
                 
                this.topDirId = dofId
                this.getListParam={
                     pageNo: 1,
                    pageSize: 10
                }
                this.getList()


                // 面包屑
                const obj = {
                    dofId: dofId,
                    fileUrl: fileUrl,
                    name: name
                }
                this.breadArr.push(obj)
                   
                } else {
                    // if(fileExt=='.xlsx'||fileExt=='.pptx'||fileExt=='.xls'||fileExt=='.ppt'||fileExt=='.docx'||fileExt=='.doc'){
                    //     window.open('https://view.officeapps.live.com/op/view.aspx?src='+fileUrl)
                    // } else {
                    //     window.open(fileUrl)
                    // }

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



                }
            },
            handleClose() {
                this.dialog = false
            },
            // 上传文件
            async submitUpload() {
                this.$refs.mychild.continueUpload()
                // console.log(this.$refs.mychild.dialog)
                // if (this.fileNames.length == 0) {
                //     this.$notify({
                //         title: '失败',
                //         message: '请选择需要上传的文件！',
                //         type: 'warning'
                //     });
                //     return
                // }
                // if (this.fileNames.length > 10) {
                //     this.$notify({
                //         title: '失败',
                //         message: '单次上传文件数量不能超过10个！',
                //         type: 'warning'
                //     });
                //     return
                // }
                // const param = {
                //     fileNames: this.fileNames
                // }
                // this.noUpload = this.fileNames.length
                // getStrategy(param).then(res => {
                //     for (let i = 0; i < res.files.length; i++) {
                //         // res.files[i].url = res.fsDomain + res.files[i].key
                //         // this.qiniuData.key = res.files[i].key
                //         delete res.files[i].key
                //     }

                //     this.uploadStrategy = res
                //     this.qiniuData.token = res.uploadToken
                //     this.$refs.upload.submit();


                // })
            },
            handleRemove(file) {
                for (let i = 0; i < this.fileNames.length; i++) {
                    if (this.fileNames[i] == file.name) {
                        this.fileNames.splice(i, 1)
                    }
                }
            },
            handleChange(file) {
                if (file.status == 'ready') {
                    this.fileNames.push(file.name)
                }
            },
            beforeUpload(file) {
                // console.log(file)

                // let entId = JSON.parse(getStorage("ents")).entId
                let lastId = this.topDirId
                this.uniqueNum ++
                // uniqueNum用来保证key的唯一性
                let timestamp = (new Date()).getTime();
                // console.log(this.uniqueNum)

                // let index = file.name.lastIndexOf('.')
                // let suffix = file.name.slice(index)
                // let key = encodeURI(`${this.uniqueNum}/${lastId}/${timestamp}${suffix}`)
                let key = `${this.uniqueNum}/${lastId}/${timestamp}/${file.name}`
                this.qiniuData.key = key
                
            },
            handleSuccess(res, file) {
                for (let i = 0; i < this.uploadStrategy.files.length; i++) {
                    if (this.uploadStrategy.files[i].name == file.name) {
                        this.uploadStrategy.files[i].hash = file.response.hash
                        this.uploadStrategy.files[i].url = this.uploadStrategy.fsDomain + file.response.key
                        this.uploadStrategy.files[i].size = file.size
                    }
                }
                // 上传成功后清空文件名
                this.fileNames = []
                // this.showFileList = false
                this.noUpload--
            },
            exceed() {
                this.$notify({
                    title: '注意',
                    message: '单次上传文件数量不能超过10个！',
                    type: 'warning'
                });
            }
        }
    };
</script>


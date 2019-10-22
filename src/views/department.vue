
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
        padding: 25px;
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
        width: 100%;
        height: 220px;
        border-radius: 4px;
        /* border: 2px solid rgba(235, 238, 245, 1); */
    }
    .uploadFile_icon {
        width: 100%;
        text-align: center;
        margin-top: 60px;
    }
    .upload_txt {
        font-size: 16px;
        text-align: center;
    }
    .canSee {
        padding: 0 30px;
        margin-top: 10px;
    }
    .haha {
        width: 100px;
        height: 20px;
        margin-left: 30px;
        margin-top: -29px;
        line-height: 20px;
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
    right: 140px;
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
</style>

<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <base-button v-if="showBtns" type="secondary" style="color:#53B4B3" @click="dialog=true">上传文件</base-button>
            <base-button v-if="showBtns&&admin==1" type="secondary" style="color:#53B4B3" @click="createDir">新建文件夹</base-button>
            <base-button v-if="showBtns&&total!==0&&admin==1" outline type="secondary" class="button2" @click="muchDel">删除</base-button>
        </base-header>

        <div class="searchArea">
                  <form class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
                    <div class="form-group mb-0">
                            <base-input placeholder="搜索文件"
                                    class="input-group-alternative"
                                    alternative=""
                                    v-model="searchParam.keyword"
                                    @keyup.enter="search"
                                    addon-right-icon="">
                            </base-input>
                            </div>
                </form>
                </div>

        <div class="content">
            <div class="main">
                <div class="flex justify-between">
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
                    <div class="noFile_text">暂无文件夹，赶快去新建吧~</div>
                </div>
                <div v-if="total!==0" class="card shadow mt25" :class="type === 'dark' ? 'bg-default': ''">
                    <div class="table-responsive">
                        <base-table class="table align-items-center table-flush" :class="type === 'dark' ? 'table-dark': ''" :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'" tbody-classes="list" :data="allFiles">
                            <template slot="columns">
                            <th>
                                <base-checkbox v-model="checkboxes">
                                </base-checkbox>
                            </th>
                            
                          <th>文件名</th>
                          <th>上传人</th>
                          <th>上传时间</th>
                          <th>查看状态</th>
                          <th>操作</th>
                          <th></th>
</template>

<template slot-scope="{row}">
    <th scope="row">
        <base-checkbox v-model="row.checked">
        </base-checkbox>
    </th>
    <td scope="row">
        <div class="media align-items-center" @click="getChildList(row.dofId,row.fileUrl,row.name)">
            <a href="#" class="rounded-circle mr-3">
                <img alt="Image placeholder" :src="row.iconUrl">
            </a>
            
                <span class="font13 color666">{{row.name}}</span>
        </div>
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
        <div class="font14 ml10" style="color:#999">编辑</div>
        </div>
        <div v-if="row.canOp" class="toolbtn flex justify-center align-center" style="margin-left:50px" @click="showDelDialog(row.dofId,row.type)">
        <img class="hover1" src="../assets/images/delete2.png" style="width:14px;height:14px;" alt="">
        <div class="font14 ml10" style="color:#999">删除</div>
        </div>
</div>
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
    </div>


    <!-- ==start==编辑文件夹dialog -->
 <el-dialog title="编辑文件夹 " :visible.sync="dialogFormVisible" width="27%" :show-close="show_close">
      <el-form :model="editFile">
        <el-form-item label="文件名：" label-width="120px">
          <el-input v-model="editFile.name" autocomplete="off" style="width:200px;"></el-input>
        </el-form-item>
        
      </el-form>
      <div slot="footer" class="dialog-footer flex justify-center">

        <base-button  type="secondary" @click="dialogFormVisible = false" style="color:#666">取消</base-button>
     <base-button  type="primary"  @click="sureEditDir" style="margin-left:55px;">确认</base-button>
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

        <base-button  type="secondary" @click="dialogFormVisible2 = false" style="color:#666">取消</base-button>
     <base-button  type="primary"  @click="sureEditFile" style="margin-left:55px;">确认</base-button>
      </div>
    </el-dialog>
<!-- ==end==编辑文件dialog -->



   <!-- ==start==新建文件夹dialog -->
 <el-dialog title="新建文件夹 " :visible.sync="dialogFormVisible3" width="27%" :show-close="show_close">
      <el-form :model="addDir">
        <el-form-item label="文件名：" label-width="120px">
          <el-input v-model="addDir.name" autocomplete="off" style="width:200px;"></el-input>
        </el-form-item>
        
      </el-form>
      <div slot="footer" class="dialog-footer flex justify-center">

        <base-button  type="secondary" @click="dialogFormVisible3 = false" style="color:#666">取消</base-button>
     <base-button  type="primary"  @click="sureAddDir" style="margin-left:55px;">确认</base-button>
      </div>
    </el-dialog>
<!-- ==end==新建文件夹dialog -->



<!-- ==start==删除文件夹dialog -->
<el-dialog
  title="确认删除该文件夹吗？"
  :visible.sync="centerDialogVisible"
  width="30%"
  :show-close="show_close"
  center class="text-center">
  <div class="text-center"><span>删除后，将无法还原文件</span></div>
  
  <span slot="footer" class="dialog-footer">

 <base-button  type="secondary" @click="centerDialogVisible = false" style="color:#666">取消</base-button>
     <base-button  type="primary"  @click="sureDelDir" style="margin-left:55px;">确认</base-button>

  </span>
</el-dialog>
<!-- ==end==删除文件夹dialog -->



<!-- ==start==删除文件dialog -->
<el-dialog
  title="确认删除该文件吗？"
  :visible.sync="centerDialogVisible2"
  width="30%"
  :show-close="show_close"
  center class="text-center">
  <div class="text-center"><span>删除后，将无法还原文件</span></div>
  
  <span slot="footer" class="dialog-footer">

 <base-button  type="secondary" @click="centerDialogVisible2 = false" style="color:#666">取消</base-button>
     <base-button  type="primary"  @click="sureDelFile" style="margin-left:55px;">确认</base-button>

  </span>
</el-dialog>
<!-- ==end==删除文件dialog -->




<!-- ==start==批量删除文件dialog -->
<el-dialog
  title="确认批量删除选择的文件吗？"
  :visible.sync="showMuchDel"
  width="30%"
  :show-close="show_close"
  center class="text-center">
  <div class="text-center"><span>删除后，将无法还原文件</span></div>
  
  <span slot="footer" class="dialog-footer">

 <base-button  type="secondary" @click="showMuchDel = false" style="color:#666">取消</base-button>
     <base-button  type="primary"  @click="sureMuchDel" style="margin-left:55px;">确认</base-button>

  </span>
</el-dialog>
<!-- ==end==批量删除文件dialog -->





<!-- ==start==抽屉 上传文件 -->
    <el-drawer
      :before-close="handleClose"
      :visible.sync="dialog"
      :direction="direction"
      custom-class="demo-drawer"
      :show-close="showClose"
      ref="drawer"
    >
      <div class="demo-drawer__content">
        <div class="dialog_head_box2 flex justify-between align-center">
          <div class="dialog_head">上传文件</div>
          <i class="el-icon-close" @click="dialog=false" style="cursor:pointer"></i>
        </div>
        <div class="uploadFile_box">




<el-upload
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
  multiple>

        <div class="uploadFile" slot="trigger">
          <div class="uploadFile_icon">
            <!-- <i class="el-icon-upload"></i> -->
          <img src="../assets/images/up-load.png" class="up-load" alt="">
          </div>
          <div class="upload_txt color999 mt10">将文件拖放到此处进行上传</div>
        </div>

    </el-upload>



        </div>

        <div class="canSee">
          <!-- <div class="canSeeRange color333 font16"><span style="color:#F44568">*</span>可见范围</div> -->
          <el-form>
            <el-form-item label="可见范围" required style="margin-bottom:10px;">
            </el-form-item>
          </el-form>
             <el-radio-group v-model="radio">
            <div>
              <el-radio :label="1"><div class="haha color999"><span class="color333">互联网可见</span><br>知识库对互联网所有人可见</div></el-radio>
            </div>
            <div class="mt20">
              <el-radio :label="2"><div class="haha color999"><span class="color333">公司内部成员可见</span><br>仅对公司内部成员可见</div></el-radio>
            </div>
            <div class="mt20">
              <el-radio :label="3"><div class="haha color999"><span class="color333">查看专属文件成员可见</span><br>仅对该文件夹相关成员可见</div></el-radio>
            </div>
            <div class="mt20">
              <el-radio :label="4"><div class="haha color999"><span class="color333">查看保密文件成员可见</span><br>仅对拥有该保密文件权限成员可见</div></el-radio>
            </div>
  </el-radio-group>
        </div>
        <div class="drawer_footer_box">
          <div class="drawer_footer flex align-center justify-center">

            <el-button size="medium" type="primary" @click="submitUpload">保存</el-button>
          </div>
        </div>
      </div>
    </el-drawer>
<!-- ==end==抽屉 上传 -->
  </div>
</template>

<script>
    import {
        getStrategy,
        uploadFile,
        updateDir,
        delDir,
        updateFile,
        getChildDir,
        delFile,
        muchDel,
        addChildDir,
        search
    } from '../api/knowledge'
    import { getStorage } from '../utils/auth'
    export default {
        data() {
            return {
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
                    key: ''
                },
                showFileList: true,
                getListParam: {
                    pageNo: 1,
                    pageSize: 10
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
                admin: ''
            };
        },
        watch: {
            noUpload: 'handleUploadAll',
            checkboxes: 'checkboxChange'
        },
        created() {
            this.admin = JSON.parse(getStorage("ents")).superAdminFlag
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
                    }
                    this.allFiles = res.list
                })
                this.showBtns = false
                this.fromResource = true
            } else {
                this.getList()
                 this.showBtns = true
            }
            
            
        },
        methods: {
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
                }).catch(() => {
                    this.$notify({
                        title: '失败',
                        message: '删除失败',
                        type: 'warning'
                    });
                })
            },
            // 展示批量删除dialog
      muchDel() {
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
                }).catch(() => {
                    this.$notify({
                        title: '失败',
                        message: '新建失败',
                        type: 'warning'
                    });
                })

            },
            // 文件全部上传完毕的事件
            handleUploadAll() {
                if (this.noUpload == 0) {
                    this.noUpload = null
                    const param = {
                        dirId: this.topDirId,
                        files: this.uploadStrategy.files,
                        visibilityType: this.radio
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
                }).catch(() => {
                    this.$notify({
                        title: '失败',
                        message: '编辑失败',
                        type: 'warning'
                    });
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
                }).catch(() => {
                    this.$notify({
                        title: '失败',
                        message: '删除失败',
                        type: 'warning'
                    });
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
                }).catch(() => {
                    this.$notify({
                        title: '失败',
                        message: '删除失败',
                        type: 'warning'
                    });
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
                }).catch(() => {
                    this.$notify({
                        title: '失败',
                        message: '编辑文件夹失败',
                        type: 'warning'
                    });
                    this.dialogFormVisible = false
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
                    }
                    this.allFiles = res.list
                })
            },
            // 获取子文件夹目录
            getChildList(dofId,fileUrl,name) {
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
                    window.open(fileUrl)
                }
            },
            handleClose() {
                this.dialog = false
            },
            // 上传文件
            async submitUpload() {
                if (this.fileNames.length == 0) {
                    this.$notify({
                        title: '失败',
                        message: '请选择需要上传的文件！',
                        type: 'warning'
                    });
                    return
                }
                if (this.fileNames.length > 10) {
                    this.$notify({
                        title: '失败',
                        message: '单次上传文件数量不能超过10个！',
                        type: 'warning'
                    });
                    return
                }
                const param = {
                    fileNames: this.fileNames
                }
                this.noUpload = this.fileNames.length
                getStrategy(param).then(res => {
                    for (let i = 0; i < res.files.length; i++) {
                        // res.files[i].url = res.fsDomain + res.files[i].key
                        // this.qiniuData.key = res.files[i].key
                        delete res.files[i].key
                    }
                    this.uploadStrategy = res
                    this.qiniuData.token = res.uploadToken
                    this.$refs.upload.submit();
                }).catch(() => {
                    this.$notify({
                        title: '失败',
                        message: '上传失败',
                        type: 'warning'
                    });
                })
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
                

                let entId = JSON.parse(getStorage("ents")).entId
                let timestamp = (new Date()).getTime();
                let index = file.name.lastIndexOf('.')
                let suffix = file.name.slice(index)
                let key = encodeURI(`${entId}/${timestamp}${suffix}`)
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



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
  padding: 50px;
}
.searchArea {
  position: absolute;
  z-index: 999;
  top: 14px;
  right: 252px;
}
.tagBox {
  width: 100%;
  margin-bottom: 60px;
}
.tag_title img {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.tag_title div {
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  margin-left: 15px;
}
.tags {
  width: 100%;
  flex-wrap: wrap;
  margin-top: 20px;
}
.tag {
  height: 30px;
  background: rgba(83, 180, 179, 1);
  border-radius: 4px;
  padding: 0 10px 0 15px;
  margin-right: 15px;
  margin-bottom: 15px;
}
.tag div {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.tag img {
  width: 10px;
  height: 10px;
  margin-left: 10px;
}
.addTag {
  height: 30px;
  border-radius: 4px;
  border: 1px solid rgba(83, 180, 179, 1);
  background: #fff;
  padding: 0 15px 0 10px;
  cursor: pointer;
}
.addTag div {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(83, 180, 179, 1);
  margin-left: 10px;
}
.addTag img {
  width: 10px;
  height: 10px;
}
</style>

<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-9"></base-header>
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
        <div class="tagBox" v-for="(item,index) in allStructures" :key="index">
          <div class="tag_title flex align-center">
            <img :src="item.iconUrl" alt />
            <div>{{item.name}}</div>
          </div>
          <div class="tags flex">
            <div
              class="tag flex align-center justify-between"
              v-for="(sub,subIndex) in item.children"
              :key="subIndex"
            >
              <div>{{sub.name}}</div>
              <img src="../assets/images/tag_close.png" alt @click="delTag(sub.id)" />
            </div>
            <div class="addTag flex align-center justify-between" @click="showAddTag(item.id)">
              <img src="../assets/images/tag_add.png" alt  />
              <div>添加新的标签</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ==start==新建标签dialog -->
    <el-dialog title="新建标签 " :visible.sync="showDialog" width="27%" :show-close="show_close">
      <el-form :model="addTag">
        <el-form-item label="标签名：" label-width="120px">
          <el-input v-model="addTag.name" autocomplete="off" style="width:80%;"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer flex justify-center">
        <el-button type="secondary" @click="showDialog = false" style="background: rgba(238,238,238,1);color:#666">取消</el-button>
        <el-button type="primary" @click="sureAddTag" style="margin-left:55px;">确认</el-button>
      </div>
    </el-dialog>
    <!-- ==end==新建标签dialog -->
  </div>
</template>

<script>
import { structures, add2Tag, del2Tag } from "../api/tag";
export default {
  data() {
    return {
      keyword: "",
      allCards: [],
      allStructures: [],
      showDialog: false,
      addTag: {
        name: ""
      },
      show_close: false,
      selectedId: ''
    };
  },
  watch: {},
  created() {
    this.getStructures();
  },
  methods: {
    sureAddTag() {
        // this.addTag.name = ''
      this.showDialog = false;
      add2Tag(this.selectedId, this.addTag)
        .then(() => {
          this.$notify({
            title: "成功",
            message: "添加成功",
            type: "success"
          });
          this.getStructures();
          this.addTag.name = ''
        })
    },
    showAddTag(id) {
      this.selectedId = id;
      this.showDialog = true;
    },
  delTag(id) {
      del2Tag(id)
        .then(() => {
          this.$notify({
            title: "成功",
            message: "删除成功",
            type: "success"
          });
          this.getStructures();
        })
    },
    getStructures() {
      structures().then(res => {
        this.allStructures = res;
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


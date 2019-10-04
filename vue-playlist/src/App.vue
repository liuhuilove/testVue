
<template>
  <div id="app">

    <router-link to="/add">add</router-link>
    <router-view></router-view>
    <!--<el-row>
    <el-col :span="3" class="grid">
      <el-input v-model="input" placeholder="请输入内容" size="mini"></el-input>
    </el-col>
    <el-col :span="1" class="grid">
      <el-button type="success" icon="el-icon-search" size="mini">搜索</el-button>
    </el-col>
  </el-row>
    <br>
    &lt;!&ndash;表格数据及操作&ndash;&gt;
    <el-table :data="tableData" border style="width: 100%" stripe ref="multipleTable" tooltip-effect="dark">
      &lt;!&ndash;勾选框&ndash;&gt;
      <el-table-column type="selection" width="55">
      </el-table-column>
      &lt;!&ndash;索引&ndash;&gt;
      <el-table-column type="index" :index="indexMethod">
      </el-table-column>
      <el-table-column prop="date" label="日期" width="180" sortable>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <el-table-column label="编辑" width="100">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" size="mini" v-on:click="openEdit()">编辑</el-button>
        </template>
      </el-table-column>
      <el-table-column label="删除" width="100">
        <template slot-scope="scope">
          <el-button type="danger" icon="el-icon-delete" size="mini" v-on:click="openDel()">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <br>
    <el-col :span="1" class="grid">
      <router-link to="/add">
        <el-button type="success" icon="el-icon-circle-plus-outline" size="mini">新增</el-button>
      </router-link>
    </el-col>
    <el-col :span="1" class="grid">
      <el-button type="danger" icon="el-icon-delete" size="mini" round>全删</el-button>
    </el-col>
    <br>
    <el-pagination background layout="prev, pager, next" :total="100">
    </el-pagination>-->
  </div>
</template>
<script>
  import add from './components/add';
  import HelloWorld from "./components/HelloWorld";
  export default {
    components: {
      HelloWorld,
      add
    },
    data() {
      return {
        dialogVisible : false,
        //表格数据
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        //查询输入框数据
        input: '',
        //导航条默认选项
        activeIndex: '1',
        activeIndex2: '1',
        queryVal: 'test add'
      }
    },
    methods: {
      /*handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },*/
      indexMethod(index) {
        return index;
      },
      openAdd(){
        this.$alert('', '添加', {
          dangerouslyUseHTMLString: true
        });
      },
      openEdit(){

      },
      openDel(){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>
<style>
  #app {
    font-family: Helvetica, sans-serif;
    text-align: center;
  }
</style>

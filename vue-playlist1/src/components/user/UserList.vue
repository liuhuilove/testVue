<template>
    <div id="userList">
      <el-row>
        <el-col :span="3" class="grid">
          <el-input v-model="input" placeholder="请输入内容" size="mini"></el-input>
        </el-col>
        <el-col :span="1" class="grid">
          <el-button type="success" icon="el-icon-search" size="mini" v-on:click="search()">搜索</el-button>
        </el-col>
        <el-col :span="2" class="grid">
            <el-button type="success" icon="el-icon-circle-plus-outline" size="mini" v-on:click="hanldeAdd()">新增</el-button>
        </el-col>
      </el-row>
      <br>
      <!--表格数据及操作-->
      <el-table :data="tableData" border style="width: 100%" stripe ref="multipleTable" tooltip-effect="dark">
        <!--&lt;!&ndash;勾选框&ndash;&gt;-->
        <el-table-column type="selection" width="55">
        </el-table-column>
        <!--&lt;!&ndash;索引&ndash;&gt;-->
        <el-table-column type="index" prop="id">
        </el-table-column>
        <el-table-column prop="name" label="姓名" sortable>
        </el-table-column>
        <el-table-column prop="email" label="邮箱" >
        </el-table-column>
        <el-table-column prop="address.city" label="地址">
        </el-table-column>
        <el-table-column prop="address.city" label="地址1">
        </el-table-column>
        <el-table-column prop="address.city" label="地址2">
        </el-table-column>
        <el-table-column label="编辑" width="100">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="mini" v-on:click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          </template>
        </el-table-column>
        <el-table-column label="删除" width="100">
          <template slot-scope="scope">
            <el-button type="danger" icon="el-icon-delete" size="mini" v-on:click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <br>
      <el-pagination background layout="prev, pager, next" v-bind:total="total">
      </el-pagination>
      <userAdd v-bind:dialogAdd="dialogAdd" v-on:update="getUserList()" v-on:close="closeeDialogAdd()"></userAdd>
      <userEdit v-bind:dialogEdit="dialogEdit" v-bind:form="form" v-on:updateEdit="getUserList" v-on:close="closeeDialogEdit()"></userEdit>
    </div>
</template>

<script>
    import userAdd from './UserAdd';
    import userEdit from './UserEdit';
    //添加axios请求
    //import axios from 'axios';
    export default {
      name: "UserList",
      components:{
        userAdd,
        userEdit
      },
      data() {
        return {
          dialogAdd : false,
          dialogEdit : false,
          dialogVisible : false,
          //表格数据
          tableData: [],
          //总数
          total: 0,
          //查询输入框数据
          input: '',
          form:{
            id: '',
            name: '',
            email: '',
            address : ''
          }
        }
      },
      methods: {
        //搜索
        search(){
          alert(this.input);
        },
        //关闭更改弹框
        closeeDialogAdd(){
          this.dialogAdd = false;
        },
        //关闭添加弹框
        closeeDialogEdit(){
          this.dialogEdit = false;
        },
        //删除
        handleDelete(index,row){
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true
          }).then(() => {
            alert(row.id);
            /**
             * 删除操作
             * */
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
        },
        //更改
        handleEdit(index,row){
          this.dialogEdit = true;
          this.form.id = row.id;
          this.form.name = row.name;
          this.form.email = row.name;
          this.form.address = row.address.city;
          console.log(this.form);
        },
        //添加
        hanldeAdd(){
          this.dialogAdd = true;
        },
        indexMethod(index) {
          return index;
        },
        //查询列表
        getUserList(){
          this.axios({
            url: '/testRest/helloWord?str=123&str1='+this.dialogAdd,
            methods: 'post',
            data: {},
          }).then(res=>{
            console.log(res);
             this.tableData = res.data;
             console.log(this.tableData);
             this.total = res.data.length;
          }).catch(res=>{
            console.log(res);
          })
        },
      },
      //钩子函数 创建时调用
      created() {
        this.getUserList();
      }
    }
</script>

<style scoped>

</style>

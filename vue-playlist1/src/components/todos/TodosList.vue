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
        <el-table-column prop="id" label="id" sortable>
        </el-table-column>
        <el-table-column prop="userId" label="userId" >
        </el-table-column>
        <el-table-column prop="title" label="标题">
        </el-table-column>
        <el-table-column prop="completed" label="completed">
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
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20,30, 50]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
      <todosAdd v-bind:dialogAdd="dialogAdd" v-on:update="getUserList()" v-on:close="closeeDialogAdd()"></todosAdd>
      <todosEdit v-bind:dialogEdit="dialogEdit" :form="form" v-on:updateEdit="getUserList()" v-on:close="closeeDialogEdit()"></todosEdit>
    </div>
</template>

<script>
    import todosAdd from './TodosAdd';
    import todosEdit from './TodosEdit';
    //添加axios请求
    import axios from 'axios';
    export default {
      name: "UserList",
      components:{
        todosAdd,
        todosEdit
      },
      data() {
        return {
          //表格数据
          tableData: [],
          //当前页
          currentPage: 1,
          //每页数量
          pageSize: 10,
          //总数
          total: 0,
          //查询输入框数据
          input: '',
          //更改数据
          form:{
            id: '',
            userId: '',
            title: '',
            computed : ''
          },
          //添加 编辑框隐藏
          dialogAdd : false,
          dialogEdit : false,
        }
      },
      methods: {
        //每页条数
        handleSizeChange(val) {
          this.pageSize = val;
          console.log(`每页 ${val} 条`);
        },
        //当前页
        handleCurrentChange(val) {
          alert(val);
          this.currentPage = val;
          console.log(`当前页: ${val}`);
        },
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
          this.form.userId = row.userId;
          this.form.title = row.title;
          this.form.computed = row.computed;
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
          axios({
            methods: 'GET',
            url: 'http://jsonplaceholder.typicode.com/todos',
            data:{'currentPage':this.currentPage,'pageSize':this.pageSize},
            headers:{'X-Requested-With': 'XMLHttpRequest'},
            emulateJSON:true
          }).then(res=>{
            console.log(res);
             this.tableData = res.data;
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

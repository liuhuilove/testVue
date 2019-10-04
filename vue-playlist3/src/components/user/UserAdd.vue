<template>
    <div id="userAdd">
      <el-dialog title="添加用户信息" :visible.async="dialogAdd" v-on:close="closeAdd()">
          <el-form :model="formDate" ref="formdong" label-width="100px" :rules="formrules">
            <el-form-item label="日期" prop="date">
              <el-date-picker
                v-model="formDate.date"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="活动时间">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="formDate.date1" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker placeholder="选择时间" v-model="formDate.date2" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="姓名" prop="name">
              <el-input v-model="formDate.name"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="formDate.email"></el-input>
            </el-form-item>
            <el-form-item label="标题" prop="title">
              <el-input v-model="formDate.title"></el-input>
            </el-form-item>
            <el-form-item label="评价" prop="evaluate">
              <el-input v-model="formDate.evaluate"></el-input>
            </el-form-item>
            <el-form-item label="状态" prop="state">
            <el-input v-model="formDate.state"></el-input>
            </el-form-item>
            <el-form-item label="状态" prop="state">
              <el-input v-model="formDate.state"></el-input>
            </el-form-item>
            <el-form-item label="状态" prop="state">
              <el-input v-model="formDate.state"></el-input>
            </el-form-item>
            <el-form-item label="状态" prop="state">
              <el-input v-model="formDate.state"></el-input>
            </el-form-item>

          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button v-on:click="closeAdd()">取 消</el-button>
            <el-button type="primary" @click="dialogFormAdd('formdong')">确 定</el-button>
          </div>
      </el-dialog>
    </div>
</template>

<script>
  import axios from 'axios';
    export default {
      name: "userAdd",
      props:{
        dialogAdd:{
          type: Boolean
        }
      },
      data () {
        return {
          formDate:{
            date:'',
            name:'',
            email:'',
            title:'',
            evaluate:'',
            state:''
          },
          formrules:{
            date:[{required:true,message:"日期不能为空",trigger:"blur"}],
            name:[{required:true,message:"用户名不能为空",trigger:"blur"}],
            email:[{required:true,message:"邮箱不能为空",trigger:"blur"}],
          }
        }
      },
      methods:{
        closeAdd(){
          this.$emit('close');
        },
        dialogFormAdd(formdong) {
          console.log("formdong:" + formdong);
          this.$refs[formdong].validate((valid) => {
            console.log(valid);
            if (valid) {
              console.log(this.formDate);
              axios.post('http://localhost:3000/data',this.formDate).then(res => {
                console.log(res);
                this.$message({
                  type:"success",
                  message:"添加信息成功"
                });
                this.dialogAdd = false;
                this.$emit('update');

              });
              this.formDate  = ""
            } else {
              console.log('error submit!!');
              return false;
            }
          })
        }
      }
    }
</script>

<style scoped>

</style>

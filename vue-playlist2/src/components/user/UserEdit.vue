<template>
  <div class="userUpdate">
    <el-dialog title="编辑用户信息" :visible.async="dialogEdit" v-on:close="closeEdit()">
      <el-form :model="form" ref="formEdit" label-width="100px" :rules="formrules">
        <el-form-item label="日期" prop="date">
          <!--<el-date-picker
            v-model="form.date"
            type="date"
            placeholder="选择日期">
          </el-date-picker>-->
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="标题" prop="title">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button v-on:click="closeEdit()">取 消</el-button>
        <el-button type="primary" v-on:click="dialogFormEdit('formEdit')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'userUpdate',
    props:{
      dialogEdit:{
        type: Boolean,
        default: false
      },
      form:{
        type:Object
      }
    },
    data () {
      return {
        formrules:{
          /*date:[{required:true,message:"日期不能为空",trigger:"blur"}],*/
          name:[{required:true,message:"用户名不能为空",trigger:"blur"}],
          email:[{required:true,message:"邮箱不能为空",trigger:"blur"}],
        }
      }
    },
    methods:{
        closeEdit(){
           this.$emit('close');
        },
        dialogFormEdit(formEdit) {
        this.$refs[formEdit].validate((valid) => {
          console.log(valid);
          if (valid) {
            console.log(this.form);
              axios.put(`http://localhost:3000/data/${this.form.id}`,this.form).then(res => {
              console.log(this.form);
              alert(this.form.name);
              this.$message({
                type:"success",
                message:"编辑信息成功"
              });
              console.log(res);
              this.dialogEdit.show = false;
              this.$emit('updateEdit')
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

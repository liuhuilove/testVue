<template>
  <div>
    <el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-active="activeIndex"
      router
      style="min-height:100vh;width:230px;float:left"
    >
      <NavMenu :navMenus="menuData"></NavMenu>
    </el-menu>
    <router-view style="margin-left:250px"></router-view>
  </div>
</template>

<script>
  import NavMenu from "./components/nav/NavMenu.vue";
  export default {
    components: {
      NavMenu: NavMenu
    },
    data() {
      return {
        activeIndex: 'index',
        menuData: [
          {
            //一级
            entity: {
              id: 0,
              name: "index",
              icon: "el-icon-message",
              alias: "首页"
            }
          },
          {
            //一级
            entity: {
              id: 1,
              name: "systemManage",
              icon: "el-icon-message",
              alias: "两级菜单"
            },
            //二级
            childs: [
              {
                entity: {
                  id: 3,
                  name: "authManage",
                  icon: "el-icon-loading",
                  alias: "空菜单",
                }
              },
              {
                entity: {
                  id: 4,
                  name: "roleManage",
                  icon: "el-icon-bell",
                  alias: "空菜单1",
                }
              },
              {
                entity: {
                  id: 2,
                  name: "todosList",
                  icon: "el-icon-edit",
                  alias: "todos",
                }
              },
              {
                entity: {
                  id: 5,
                  name: "userList",
                  icon: "el-icon-mobile-phone\r\n",
                  alias: "用户",
                  value: "",
                }
              }
            ]
          },
          {
            //一级
            entity: {
              id: 6,
              name: "userManage",
              icon: "el-icon-news",
              alias: "三级菜单"
            },
            //二级
            childs: [
              {
                entity: {
                  id: 7,
                  name: "accountManage",
                  icon: "el-icon-phone-outline\r\n",
                  alias: "帐号管理",
                  value: ""
                },
                //三级
                childs: [
                  {
                    entity: {
                      id: 14,
                      name: "emailManage",
                      icon: "el-icon-sold-out\r\n",
                      alias: "邮箱管理",
                      value: "/content/email"
                    }
                  },
                  {
                    entity: {
                      id: 13,
                      name: "passManage",
                      icon: "el-icon-service\r\n",
                      alias: "密码管理",
                      value: "/content/pass"
                    }
                  }
                ]
              },
              {
                entity: {
                  id: 8,
                  name: "integralManage",
                  icon: "el-icon-picture",
                  alias: "积分管理",

                  value: "/user/integral"
                }
              }
            ]
          },
          {
            //一级
            entity: {
              id: 40,

              name: "contentManage",
              icon: "el-icon-rank",
              alias: "四级菜单"
            },
            //er级
            childs: [
              {
                entity: {
                  id: 41,
                  name: "classifyManage2",
                  icon: "el-icon-printer",
                  alias: "分类管理"
                },
                //三级
                childs: [
                  {
                    entity: {
                      id: 42,
                      name: "classifyManage3",
                      icon: "el-icon-printer",
                      alias: "分类管理"
                    },
                    //四级
                    childs: [
                      {
                        entity: {
                          id: 43,
                          name: "classifyManage4",
                          icon: "el-icon-printer",
                          alias: "分类管理",
                          value: "/content/classify"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],

      };
    },
    mounted(){
      console.log(window.location.href)
      let start = window.location.href.lastIndexOf('/');
      let path = window.location.href.slice(start+1);
      this.activeIndex = path;
    }

  };
</script>

<style>
</style>

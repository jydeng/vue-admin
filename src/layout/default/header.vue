<template>
  <div class="layoutHeader">
    <a class="logo" @click="logoAnimate" title="点"></a>
    <a class="toggle" @click="asideCollapse" title="侧边栏">
      <i class="fa fa-th-list"></i>
    </a>
    <a
      class="fullScreen"
      @click="toggleFullScreen"
      :title="fullScreen ? '退出全屏' : '全屏'"
    >
      <i class="fa fa-compress" v-if="fullScreen"></i>
      <i class="fa fa-arrows-alt" v-else></i>
    </a>
    <i-theme
      :themeColor="themeColor"
      @changeThemeColor="changeThemeColor"
    ></i-theme>
    <i-breadcrumb :menu="menu"></i-breadcrumb>
    <a class="space"></a>
    <el-dropdown class="userinfo" trigger="click" @command="userDropdown">
      <span>
        <img src="@/assets/profile.png" alt="profile" />
        {{ user.username }}
        <i class="fa fa-sort-down"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="user">
          <i class="fa fa-fw fa-user"></i> 资料
        </el-dropdown-item>
        <el-dropdown-item command="logout">
          <i class="fa fa-fw fa-power-off"></i> 注销
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "layoutHeader",
  computed: {
    ...mapGetters("common", ["themeColor", "fullScreen"]),
    ...mapGetters("user", ["user", "menu"])
  },
  methods: {
    ...mapActions("common", [
      "asideCollapse",
      "changeThemeColor",
      "toggleFullScreen"
    ]),
    ...mapActions("user", ["logout"]),
    userDropdown(command) {
      switch (command) {
        case "logout":
          this.logout();
          break;
      }
    },
    logoAnimate() {
      this.$util.animateCSS(".logo", "tada");
    }
  }
};
</script>
<style lang="scss" scoped>
.layoutHeader {
  display: flex;
  align-items: center;
  height: 100%;

  .logo {
    height: 100%;
    width: 80px;
    cursor: pointer;
    background-image: url(../../assets/logo.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50px;
  }

  .toggle,
  .fullScreen {
    color: #222;
    margin-right: 15px;
    cursor: pointer;
  }

  .space {
    flex-grow: 1;
  }

  .userinfo {
    font-size: 13px;
    color: #666;
    span {
      line-height: 30px;
      img {
        width: 30px;
        border-radius: 50%;
        vertical-align: bottom;
      }
      .fa-sort-down {
        vertical-align: 2px;
      }
    }
  }
}
</style>

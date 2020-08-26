<template>
    <el-container class="home-container">
        <!-- 头部区域 -->
        <el-header>
            <nav-bar class="home-navbar">
                <div slot="left">
                    <img src="@/assets/img/home/logo.jpg" alt="" />
                </div>
                <div slot="center">
                    <span>充电桩后台管理系统</span>
                </div>
                <div slot="right">
                    <el-button type="info" @click="LoginOut">退出</el-button>
                </div>
            </nav-bar>
        </el-header>
        <!-- 页面主体区域 -->
        <el-container>
            <!-- 左侧边栏 -->
            <el-aside width="200px"><menu-item /></el-aside>
            <!-- 右侧主体内容 -->
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
import NavBar from "@/components/common/navbar/ManageNavBar";
import MenuItem from "@/components/contnet/menu/MenuItem";
export default {
    name: "Home",
    components: {
        NavBar,
        MenuItem
    },
    methods: {
        LoginOut() {
            window.sessionStorage.clear();
            this.$router.push("/login");
        }
    }
};
</script>

<style scoped>
.home-container {
    height: 100%;
}
.el-header {
    background-color: #a3adb9;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
}
.home-navbar img {
    width: 60%;
    height: 60%;
    padding-top: 5px;
}
.home-navbar span {
    font-size: 35px;
}
</style>

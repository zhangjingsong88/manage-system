<template>
    <el-menu
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
    >
        <!-- 1 账户管理 -->
        <el-submenu index="1">
            <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-location"></i>
                <!-- 文本 -->
                <span>账户管理</span>
            </template>
            <el-menu-item>
                <!-- 1.1 首页统计 -->
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>首页统计</span>
                </template>
            </el-menu-item>
            <!-- 1.2 用户列表 -->
            <el-menu-item>
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>用户列表</span>
                </template>
            </el-menu-item>
        </el-submenu>
        <!-- 2 充电桩管理 -->
        <el-submenu index="2">
            <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-location"></i>
                <!-- 文本 -->
                <span>充电桩管理</span>
            </template>
            <el-menu-item>
                <!-- 2.1 充电桩列表 -->
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>充电桩列表</span>
                </template>
            </el-menu-item>
            <!-- 2.2 消费记录 -->
            <el-menu-item>
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>消费记录</span>
                </template>
            </el-menu-item>
            <el-menu-item>
                <!-- 2.3 报警信息列表 -->
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>报警信息列表</span>
                </template>
            </el-menu-item>
        </el-submenu>
        <!-- 3 资金管理 -->
        <el-submenu index="3">
            <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-location"></i>
                <!-- 文本 -->
                <span>资金管理</span>
            </template>
            <el-menu-item>
                <!-- 3.1 充值管理 -->
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>充值管理</span>
                </template>
            </el-menu-item>
            <!-- 3.2 分润统计 -->
            <el-menu-item>
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>分润统计</span>
                </template>
            </el-menu-item>
            <el-menu-item>
                <!-- 3.3 提现记录 -->
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>提现记录</span>
                </template>
            </el-menu-item>
        </el-submenu>
        <!-- 4 消息管理 -->
        <el-submenu index="4">
            <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-location"></i>
                <!-- 文本 -->
                <span>消息管理</span>
            </template>
            <el-menu-item>
                <!-- 4.1 反馈和建议管理 -->
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>反馈和建议管理</span>
                </template>
            </el-menu-item>
            <!-- 4.2 消息列表 -->
            <el-menu-item>
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>消息列表</span>
                </template>
            </el-menu-item>
        </el-submenu>
        <!-- 6 代理商管理 -->
        <el-submenu index="5">
            <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-location"></i>
                <!-- 文本 -->
                <span>代理商管理</span>
            </template>
            <el-menu-item>
                <!-- 6.1 代理商列表 -->
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>代理商列表</span>
                </template>
            </el-menu-item>
            <!--6.2 物业管理 -->
            <el-menu-item>
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>物业管理</span>
                </template>
            </el-menu-item>
            <el-menu-item>
                <!-- 6.3 小区列表 -->
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>小区列表</span>
                </template>
            </el-menu-item>
        </el-submenu>
        <!-- 6 系统管理 -->
        <el-submenu index="6">
            <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-location"></i>
                <!-- 文本 -->
                <span>代理商管理</span>
            </template>
            <el-menu-item>
                <!-- 6.1 菜单 -->
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>代理商列表</span>
                </template>
            </el-menu-item>
            <!--6.2 管理员列表 -->
            <el-menu-item>
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>管理员列表</span>
                </template>
            </el-menu-item>
            <el-menu-item>
                <!-- 6.3 后台信息设置 -->
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>后台信息设置</span>
                </template>
            </el-menu-item>
            <el-menu-item>
                <!-- 6.3 操作日志 -->
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>操作日志</span>
                </template>
            </el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
export default {};
</script>

<style scoped>
.el-menu {
    text-align: left;
}
</style>

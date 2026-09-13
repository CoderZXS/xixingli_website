<template>
  <footer class="app-footer">
    <!-- Main Footer -->
    <div class="footer-main">
      <div class="container">
        <div class="footer-grid">
          <!-- Company Info -->
          <div class="footer-col footer-brand">
            <div class="logo">
              <div class="logo-icon">
                <el-icon :size="24"><Monitor /></el-icon>
              </div>
              <span class="logo-text">西兴里科技</span>
            </div>
            <p class="brand-desc">
              西兴里科技是一家专业的IT外包服务提供商，致力于为企业提供全方位的数字化转型解决方案，包括软件开发、系统集成、IT运维、云计算等服务。
            </p>
            <div class="social-links">
              <div class="social-item" v-for="s in socials" :key="s.name">
                <el-icon :size="18"><component :is="s.icon" /></el-icon>
              </div>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="footer-col">
            <h4>快速链接</h4>
            <ul>
              <li v-for="link in quickLinks" :key="link.path">
                <router-link :to="link.path">{{ link.label }}</router-link>
              </li>
            </ul>
          </div>

          <!-- Services -->
          <div class="footer-col">
            <h4>服务领域</h4>
            <ul>
              <li v-for="s in services" :key="s">{{ s }}</li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div class="footer-col">
            <h4>联系方式</h4>
            <ul class="contact-list">
              <li>
                <el-icon><Location /></el-icon>
                <span>深圳市南山区后海中心路2888号云智科技大厦23层</span>
              </li>
              <li>
                <el-icon><Phone /></el-icon>
                <span>13714151040</span>
              </li>
              <li>
                <el-icon><Message /></el-icon>
                <span>coderzxs@foxmail.com</span>
              </li>
              <li>
                <el-icon><Clock /></el-icon>
                <span>周一至周日 24小时服务</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright Bar -->
    <div class="footer-bottom">
      <div class="container">
        <div class="copyright">
          <p>© 2026 西兴里科技有限公司 版权所有</p>
          <div class="bottom-links">
            <a href="#">隐私政策</a>
            <span class="divider">|</span>
            <a href="#">服务条款</a>
            <span class="divider">|</span>
            <a href="#">网站地图</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { shallowRef } from "vue";
import {
  Location,
  Phone,
  Message,
  Clock,
  Monitor,
  ChatDotRound,
  Share,
  Briefcase,
} from "@element-plus/icons-vue";

const socials = shallowRef([
  { name: "wechat", icon: ChatDotRound },
  { name: "weibo", icon: Share },
  { name: "linkedin", icon: Briefcase },
]);

const quickLinks = [
  { path: "/", label: "首页" },
  { path: "/services", label: "服务领域" },
  { path: "/cases", label: "成功案例" },
  { path: "/about", label: "关于我们" },
  { path: "/contact", label: "联系我们" },
];

const services = [
  "软件开发外包",
  "系统集成服务",
  "IT运维管理",
  "云计算解决方案",
  "数据分析服务",
  "网络安全服务",
];
</script>

<style scoped>
.app-footer {
  background: #1a1a2e;
  color: #b8b8d0;
}

.footer-main {
  padding: 60px 0 40px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 40px;
}

.footer-brand .logo {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}

.footer-brand .logo-icon {
  width: 36px;
  height: 36px;
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--primary-light)
  );
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.footer-brand .logo-text {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
}

.brand-desc {
  font-size: 14px;
  line-height: 1.8;
  margin-bottom: 20px;
  color: #8888a8;
}

.social-links {
  display: flex;
  gap: 12px;
}

.social-item {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  color: #b8b8d0;
}

.social-item:hover {
  background: var(--primary-color);
  color: #fff;
  transform: translateY(-2px);
}

.footer-col h4 {
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
}

.footer-col ul li {
  margin-bottom: 12px;
  font-size: 14px;
}

.footer-col ul li a {
  color: #8888a8;
  transition: color 0.2s;
}

.footer-col ul li a:hover {
  color: var(--primary-light);
}

.contact-list li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.contact-list li .el-icon {
  margin-top: 3px;
  color: var(--primary-light);
  flex-shrink: 0;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 20px 0;
}

.copyright {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #666680;
}

.bottom-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.bottom-links a {
  color: #666680;
  transition: color 0.2s;
}

.bottom-links a:hover {
  color: var(--primary-light);
}

.divider {
  color: #444460;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .copyright {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
}
</style>

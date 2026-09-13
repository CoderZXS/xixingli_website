<template>
  <header class="app-header" :class="{ scrolled: isScrolled }">
    <div class="container header-inner">
      <!-- Logo -->
      <div class="logo" @click="router.push('/')">
        <div class="logo-icon">
          <el-icon :size="28"><Monitor /></el-icon>
        </div>
        <span class="logo-text">西兴里科技</span>
      </div>

      <!-- Desktop Nav -->
      <nav class="nav-menu">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-item"
          :class="{ active: isActive(item.path) }"
        >
          {{ item.label }}
        </router-link>
      </nav>

      <!-- CTA Button -->
      <div class="header-cta">
        <el-button type="primary" round @click="router.push('/contact')">
          <el-icon style="margin-right: 4px"><Phone /></el-icon>
          免费咨询
        </el-button>
      </div>

      <!-- Mobile Menu Toggle -->
      <div class="mobile-toggle" @click="mobileMenuOpen = !mobileMenuOpen">
        <el-icon :size="24"
          ><Fold v-if="mobileMenuOpen" /><Expand v-else
        /></el-icon>
      </div>
    </div>

    <!-- Mobile Menu Drawer -->
    <transition name="slide-down">
      <div v-show="mobileMenuOpen" class="mobile-menu">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="mobile-nav-item"
          @click="mobileMenuOpen = false"
        >
          {{ item.label }}
        </router-link>
        <el-button
          type="primary"
          round
          style="width: 100%; margin-top: 12px"
          @click="goContact"
        >
          免费咨询
        </el-button>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const isScrolled = ref(false);
const mobileMenuOpen = ref(false);

const navItems = [
  { path: "/", label: "首页" },
  { path: "/services", label: "服务领域" },
  { path: "/cases", label: "成功案例" },
  { path: "/about", label: "关于我们" },
  { path: "/contact", label: "联系我们" },
];

const isActive = (path: string) => {
  return route.path === path;
};

const goContact = () => {
  mobileMenuOpen.value = false;
  router.push("/contact");
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 60;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 70px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
}

.app-header.scrolled {
  box-shadow: var(--shadow-light);
  border-bottom-color: var(--border-color);
}

.header-inner {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.logo-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--primary-light)
  );
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.logo-text {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-primary);
}

.nav-menu {
  display: flex;
  gap: 8px;
}

.nav-item {
  padding: 8px 18px;
  font-size: 15px;
  font-weight: 500;
  color: var(--text-regular);
  border-radius: 8px;
  transition: all 0.25s ease;
  position: relative;
}

.nav-item:hover {
  color: var(--primary-color);
  background: var(--primary-bg);
}

.nav-item.active {
  color: var(--primary-color);
}

.nav-item.active::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 3px;
  background: var(--primary-color);
  border-radius: 2px;
}

.mobile-toggle {
  display: none;
  cursor: pointer;
  color: var(--text-primary);
}

.mobile-menu {
  display: none;
  flex-direction: column;
  padding: 16px 20px 24px;
  background: #fff;
  box-shadow: var(--shadow-medium);
  border-top: 1px solid var(--border-color);
}

.mobile-nav-item {
  padding: 14px 16px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-regular);
  border-radius: 8px;
  transition: all 0.2s;
}

.mobile-nav-item:hover,
.mobile-nav-item.active {
  color: var(--primary-color);
  background: var(--primary-bg);
}

/* Transitions */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Responsive */
@media (max-width: 768px) {
  .nav-menu,
  .header-cta {
    display: none;
  }

  .mobile-toggle {
    display: flex;
  }

  .mobile-menu {
    display: flex;
  }
}
</style>

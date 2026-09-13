<template>
  <transition name="fade-scale">
    <div v-show="visible" class="back-to-top" @click="scrollToTop">
      <el-icon :size="20"><ArrowUp /></el-icon>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

const handleScroll = () => {
  visible.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 48px;
  height: 48px;
  background: var(--primary-color);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(64, 96, 255, 0.4);
  transition: all 0.3s ease;
  z-index: 999;
}

.back-to-top:hover {
  background: var(--primary-dark);
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(64, 96, 255, 0.5);
}

.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.3s ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.5);
}

@media (max-width: 768px) {
  .back-to-top {
    bottom: 20px;
    right: 20px;
  }
}
</style>

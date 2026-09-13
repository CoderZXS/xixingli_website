<template>
  <div class="home-page">
    <!-- ===== Hero Section ===== -->
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-shape shape-1"></div>
        <div class="hero-shape shape-2"></div>
        <div class="hero-shape shape-3"></div>
      </div>
      <div class="container hero-content">
        <div class="hero-text">
          <div class="hero-badge">
            <el-icon><Star /></el-icon>
            <span>值得信赖的IT外包服务提供商</span>
          </div>
          <h1 class="hero-title">
            专业<span class="highlight">IT外包</span>服务<br />
            助力企业<span class="highlight">数字化转型</span>
          </h1>
          <p class="hero-desc">
            西兴里科技提供软件开发、系统集成、IT运维、云计算等全方位IT外包解决方案，
            帮助企业降低成本、提升效率、聚焦核心业务。
          </p>
          <div class="hero-actions">
            <el-button
              type="primary"
              size="large"
              round
              @click="$router.push('/services')"
            >
              了解服务
              <el-icon class="el-icon--right"><ArrowRight /></el-icon>
            </el-button>
            <el-button size="large" round @click="$router.push('/contact')">
              <el-icon class="el-icon--right"><Phone /></el-icon>
              免费咨询
            </el-button>
          </div>
          <div class="hero-trust">
            <div class="trust-item" v-for="t in trustItems" :key="t.label">
              <span class="trust-num">{{ t.num }}</span>
              <span class="trust-label">{{ t.label }}</span>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="visual-card card-1">
            <div class="card-icon">
              <el-icon :size="28"><Monitor /></el-icon>
            </div>
            <div class="card-info">
              <div class="card-title">项目管理</div>
              <div class="card-status">运行中 · 12个项目</div>
            </div>
            <div class="card-dot green"></div>
          </div>
          <div class="visual-card card-2">
            <div class="card-icon orange">
              <el-icon :size="28"><DataLine /></el-icon>
            </div>
            <div class="card-info">
              <div class="card-title">数据分析</div>
              <div class="card-status">实时监控</div>
            </div>
            <div class="card-dot green"></div>
          </div>
          <div class="visual-card card-3">
            <div class="card-icon green">
              <el-icon :size="28"><Cloudy /></el-icon>
            </div>
            <div class="card-info">
              <div class="card-title">云服务</div>
              <div class="card-status">99.9% 可用性</div>
            </div>
            <div class="card-dot green"></div>
          </div>
          <div class="visual-orbit">
            <div class="orbit-center">
              <el-icon :size="40" color="#fff"><Cpu /></el-icon>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== Services Overview ===== -->
    <section class="section section-white">
      <div class="container">
        <div class="section-title">
          <div class="accent-line"></div>
          <h2>核心服务领域</h2>
          <p>我们提供全方位的IT外包服务，覆盖企业数字化转型的各个环节</p>
        </div>
        <div class="services-grid">
          <div
            class="service-card"
            v-for="(s, i) in services"
            :key="s.title"
            :style="{ animationDelay: `${i * 0.1}s` }"
            @click="$router.push('/services')"
          >
            <div class="service-icon" :style="{ background: s.bg }">
              <el-icon :size="28"><component :is="s.icon" /></el-icon>
            </div>
            <h3>{{ s.title }}</h3>
            <p>{{ s.desc }}</p>
            <div class="service-tags">
              <span v-for="tag in s.tags" :key="tag" class="tag">{{
                tag
              }}</span>
            </div>
            <div class="service-arrow">
              <el-icon><ArrowRight /></el-icon>
              <span>了解更多</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== Why Choose Us ===== -->
    <section class="section section-gray">
      <div class="container">
        <div class="section-title">
          <div class="accent-line"></div>
          <h2>为什么选择西兴里科技</h2>
          <p>十余年行业经验，专业团队，值得信赖的IT外包合作伙伴</p>
        </div>
        <div class="advantages-grid">
          <div class="advantage-item" v-for="a in advantages" :key="a.title">
            <div class="adv-icon">
              <el-icon :size="32"><component :is="a.icon" /></el-icon>
            </div>
            <h3>{{ a.title }}</h3>
            <p>{{ a.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== Stats Section ===== -->
    <section class="stats-section">
      <div class="stats-overlay"></div>
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item" v-for="s in stats" :key="s.label">
            <div class="stat-num">
              <span class="num">{{ s.num }}</span>
              <span class="suffix">{{ s.suffix }}</span>
            </div>
            <div class="stat-label">{{ s.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== Process Section ===== -->
    <section class="section section-white">
      <div class="container">
        <div class="section-title">
          <div class="accent-line"></div>
          <h2>服务流程</h2>
          <p>清晰高效的项目交付流程，确保每个项目按时按质完成</p>
        </div>
        <div class="process-timeline">
          <div class="process-line"></div>
          <div class="process-step" v-for="(p, i) in processes" :key="p.title">
            <div class="step-num">{{ i + 1 }}</div>
            <div class="step-content">
              <h3>{{ p.title }}</h3>
              <p>{{ p.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CTA Section ===== -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-box">
          <div class="cta-text">
            <h2>准备好开始您的数字化转型了吗？</h2>
            <p>联系我们，获取免费的IT外包方案咨询和项目报价</p>
          </div>
          <div class="cta-actions">
            <el-button
              type="primary"
              size="large"
              round
              @click="$router.push('/contact')"
            >
              <el-icon class="el-icon--right"><Phone /></el-icon>
              立即咨询
            </el-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { shallowRef } from "vue";
import {
  Star,
  ArrowRight,
  Phone,
  Monitor,
  DataLine,
  Cloudy,
  Cpu,
  Connection,
  Setting,
  DataAnalysis,
  Lock,
  TrendCharts,
  Medal,
  UserFilled,
  Timer,
  CircleCheck,
} from "@element-plus/icons-vue";

const trustItems = [
  { num: "500+", label: "服务客户" },
  { num: "10+", label: "年行业经验" },
  { num: "200+", label: "技术团队" },
];

const services = shallowRef([
  {
    title: "软件开发外包",
    desc: "提供Web应用、移动端App、小程序、企业管理系统等定制开发服务",
    icon: Monitor,
    bg: "linear-gradient(135deg, #4060ff, #6e88ff)",
    tags: ["Web开发", "App开发", "小程序"],
  },
  {
    title: "系统集成服务",
    desc: "企业级系统集成方案，打通各业务系统数据孤岛，实现信息流互通",
    icon: Connection,
    bg: "linear-gradient(135deg, #ff6b35, #ff9a5a)",
    tags: ["API集成", "数据中台", "ERP对接"],
  },
  {
    title: "IT运维管理",
    desc: "7×24小时IT基础设施运维，保障系统稳定运行，降低运维成本",
    icon: Setting,
    bg: "linear-gradient(135deg, #00b894, #55efc4)",
    tags: ["系统监控", "故障处理", "性能优化"],
  },
  {
    title: "云计算解决方案",
    desc: "AWS、阿里云、腾讯云等主流云平台架构设计与迁移服务",
    icon: Cloudy,
    bg: "linear-gradient(135deg, #6c5ce7, #a29bfe)",
    tags: ["云迁移", "云架构", "混合云"],
  },
  {
    title: "数据分析服务",
    desc: "大数据采集、清洗、分析、可视化，助力企业数据驱动决策",
    icon: DataAnalysis,
    bg: "linear-gradient(135deg, #fdcb6e, #ffeaa7)",
    tags: ["BI报表", "数据挖掘", "AI分析"],
  },
  {
    title: "网络安全服务",
    desc: "全面的网络安全评估、渗透测试、安全加固及合规咨询服务",
    icon: Lock,
    bg: "linear-gradient(135deg, #e84393, #fd79a8)",
    tags: ["安全评估", "渗透测试", "合规咨询"],
  },
]);

const advantages = shallowRef([
  {
    title: "专业团队",
    desc: "200+资深工程师，覆盖全栈技术领域，平均经验8年以上",
    icon: UserFilled,
  },
  {
    title: "高效交付",
    desc: "敏捷开发流程，快速迭代，平均项目交付周期缩短40%",
    icon: Timer,
  },
  {
    title: "品质保障",
    desc: "严格的质量管控体系，ISO27001认证，CMMI3级标准",
    icon: Medal,
  },
  {
    title: "数据安全",
    desc: "完善的保密协议与数据安全体系，确保客户信息绝对安全",
    icon: Lock,
  },
  {
    title: "灵活合作",
    desc: "支持驻场、远程、混合等多种合作模式，按需灵活配置",
    icon: CircleCheck,
  },
  {
    title: "持续优化",
    desc: "提供长期技术支持与运维服务，持续优化系统性能",
    icon: TrendCharts,
  },
]);

const stats = [
  { num: "500", suffix: "+", label: "服务客户" },
  { num: "1200", suffix: "+", label: "交付项目" },
  { num: "98", suffix: "%", label: "客户满意度" },
  { num: "10", suffix: "+", label: "年行业经验" },
];

const processes = [
  { title: "需求沟通", desc: "深入了解客户需求，明确项目目标与范围" },
  { title: "方案设计", desc: "制定技术方案与项目计划，评估工期与成本" },
  { title: "开发实施", desc: "敏捷开发，定期交付，全程透明可视" },
  { title: "测试验收", desc: "严格质量测试，确保系统稳定可靠" },
  { title: "上线运维", desc: "部署上线，提供长期运维与技术支持" },
];
</script>

<style scoped>
/* ===== Hero ===== */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 70px;
  overflow: hidden;
  background: linear-gradient(135deg, #f0f4ff 0%, #e8eeff 50%, #f5f7fa 100%);
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.hero-shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.3;
}

.shape-1 {
  width: 400px;
  height: 400px;
  background: var(--primary-color);
  top: -100px;
  right: -50px;
}

.shape-2 {
  width: 300px;
  height: 300px;
  background: #6c5ce7;
  bottom: -50px;
  left: -80px;
}

.shape-3 {
  width: 200px;
  height: 200px;
  background: #00b894;
  top: 40%;
  right: 30%;
}

.hero-content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
  align-items: center;
  padding: 40px 20px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  background: rgba(64, 96, 255, 0.08);
  border: 1px solid rgba(64, 96, 255, 0.2);
  border-radius: 20px;
  font-size: 14px;
  color: var(--primary-color);
  margin-bottom: 24px;
}

.hero-title {
  font-size: 48px;
  font-weight: 800;
  line-height: 1.3;
  color: var(--text-primary);
  margin-bottom: 24px;
}

.hero-title .highlight {
  color: var(--primary-color);
  position: relative;
}

.hero-desc {
  font-size: 17px;
  line-height: 1.8;
  color: var(--text-regular);
  margin-bottom: 32px;
  max-width: 560px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  margin-bottom: 48px;
}

.hero-trust {
  display: flex;
  gap: 40px;
}

.trust-item {
  display: flex;
  flex-direction: column;
}

.trust-num {
  font-size: 32px;
  font-weight: 800;
  color: var(--primary-color);
}

.trust-label {
  font-size: 14px;
  color: var(--text-secondary);
  margin-top: 4px;
}

/* Hero Visual */
.hero-visual {
  position: relative;
  height: 480px;
}

.visual-orbit {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--primary-light)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 60px rgba(64, 96, 255, 0.4);
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.05);
  }
}

.visual-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  background: #fff;
  border-radius: 14px;
  box-shadow: var(--shadow-medium);
  animation: float 4s ease-in-out infinite;
}

.card-1 {
  top: 10%;
  left: 0;
  animation-delay: 0s;
}
.card-2 {
  top: 45%;
  right: 0;
  animation-delay: 1s;
}
.card-3 {
  bottom: 10%;
  left: 10%;
  animation-delay: 2s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}

.card-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, #4060ff, #6e88ff);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.card-icon.orange {
  background: linear-gradient(135deg, #ff6b35, #ff9a5a);
}
.card-icon.green {
  background: linear-gradient(135deg, #00b894, #55efc4);
}

.card-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
}
.card-status {
  font-size: 12px;
  color: var(--text-secondary);
  margin-top: 2px;
}

.card-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-left: 4px;
}

.card-dot.green {
  background: #00b894;
  box-shadow: 0 0 8px #00b894;
}

/* ===== Services Grid ===== */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.service-card {
  background: #fff;
  border-radius: var(--radius-lg);
  padding: 36px 28px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  cursor: pointer;
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
}

.service-card:hover {
  border-color: transparent;
  box-shadow: var(--shadow-hover);
  transform: translateY(-8px);
}

.service-icon {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-bottom: 20px;
}

.service-card h3 {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.service-card p {
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-regular);
  margin-bottom: 16px;
}

.service-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tag {
  padding: 4px 12px;
  background: var(--primary-bg);
  color: var(--primary-color);
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
}

.service-arrow {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  color: var(--primary-color);
  transition: gap 0.3s;
}

.service-card:hover .service-arrow {
  gap: 12px;
}

/* ===== Advantages ===== */
.advantages-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.advantage-item {
  text-align: center;
  padding: 36px 24px;
  background: #fff;
  border-radius: var(--radius-lg);
  transition: all 0.3s ease;
}

.advantage-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-medium);
}

.adv-icon {
  width: 72px;
  height: 72px;
  margin: 0 auto 20px;
  border-radius: 50%;
  background: var(--primary-bg);
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

.advantage-item h3 {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.advantage-item p {
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-regular);
}

/* ===== Stats ===== */
.stats-section {
  position: relative;
  padding: 60px 0;
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--primary-dark)
  );
  overflow: hidden;
}

.stats-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.stats-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  text-align: center;
}

.stat-num {
  margin-bottom: 8px;
}

.stat-num .num {
  font-size: 48px;
  font-weight: 800;
  color: #fff;
}

.stat-num .suffix {
  font-size: 28px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.8);
}

.stat-label {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.85);
}

/* ===== Process Timeline ===== */
.process-timeline {
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

.process-line {
  position: absolute;
  top: 24px;
  left: 10%;
  right: 10%;
  height: 3px;
  background: linear-gradient(
    90deg,
    var(--primary-color),
    var(--primary-light)
  );
  border-radius: 2px;
}

.process-step {
  text-align: center;
  position: relative;
}

.step-num {
  width: 48px;
  height: 48px;
  margin: 0 auto 16px;
  border-radius: 50%;
  background: #fff;
  border: 3px solid var(--primary-color);
  color: var(--primary-color);
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  transition: all 0.3s;
}

.process-step:hover .step-num {
  background: var(--primary-color);
  color: #fff;
  transform: scale(1.1);
}

.step-content h3 {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.step-content p {
  font-size: 13px;
  line-height: 1.6;
  color: var(--text-secondary);
  padding: 0 8px;
}

/* ===== CTA ===== */
.cta-section {
  padding: 60px 0;
}

.cta-box {
  background: linear-gradient(135deg, #1a1a2e, #2d2d52);
  border-radius: var(--radius-lg);
  padding: 60px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  position: relative;
  overflow: hidden;
}

.cta-box::before {
  content: "";
  position: absolute;
  top: -50%;
  right: -10%;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: rgba(64, 96, 255, 0.15);
  filter: blur(40px);
}

.cta-text {
  position: relative;
  z-index: 1;
}

.cta-text h2 {
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 12px;
}

.cta-text p {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
}

.cta-actions {
  position: relative;
  z-index: 1;
  flex-shrink: 0;
}

/* ===== Responsive ===== */
@media (max-width: 992px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-title {
    font-size: 36px;
  }
  .hero-visual {
    display: none;
  }
  .hero-actions,
  .hero-trust {
    justify-content: center;
  }
  .services-grid,
  .advantages-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
  .process-timeline {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .process-line {
    display: none;
  }
  .cta-box {
    flex-direction: column;
    text-align: center;
    padding: 40px 24px;
  }
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 28px;
  }
  .hero-actions {
    flex-direction: column;
  }
  .services-grid,
  .advantages-grid {
    grid-template-columns: 1fr;
  }
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>

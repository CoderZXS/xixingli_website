<template>
  <div class="services-page">
    <!-- ===== Page Banner / Hero ===== -->
    <section class="page-banner">
      <div class="banner-bg">
        <div class="banner-shape shape-1"></div>
        <div class="banner-shape shape-2"></div>
        <div class="banner-shape shape-3"></div>
      </div>
      <div class="container banner-content">
        <div class="banner-badge">
          <el-icon><Star /></el-icon>
          <span>全方位IT外包解决方案</span>
        </div>
        <h1 class="banner-title">服务领域</h1>
        <p class="banner-subtitle">
          西兴里科技提供软件开发、系统集成、IT运维、云计算、数据分析、网络安全等
          全方位IT外包服务，助力企业数字化转型，降低运营成本，提升核心竞争力
        </p>
        <div class="banner-actions">
          <el-button
            type="primary"
            size="large"
            round
            @click="scrollToServices"
          >
            浏览服务
            <el-icon class="el-icon--right"><ArrowDown /></el-icon>
          </el-button>
          <el-button size="large" round @click="$router.push('/contact')">
            <el-icon class="el-icon--right"><Phone /></el-icon>
            免费咨询
          </el-button>
        </div>
      </div>
    </section>

    <!-- ===== Detailed Services ===== -->
    <section
      class="section service-detail-section"
      :class="index % 2 === 0 ? 'section-white' : 'section-gray'"
      v-for="(service, index) in services"
      :key="service.title"
      :id="`service-${index + 1}`"
    >
      <div class="container">
        <div class="service-detail" :class="{ reverse: index % 2 === 1 }">
          <!-- Left: Visual / Icon Card -->
          <div class="service-visual">
            <div class="visual-wrapper" :style="{ background: service.bg }">
              <el-icon :size="64" color="#fff"
                ><component :is="service.icon"
              /></el-icon>
              <div class="visual-deco deco-1"></div>
              <div class="visual-deco deco-2"></div>
            </div>
            <div class="visual-tags">
              <el-tag
                v-for="tag in service.tags"
                :key="tag"
                effect="plain"
                round
              >
                {{ tag }}
              </el-tag>
            </div>
          </div>

          <!-- Right: Content -->
          <div class="service-info">
            <div class="service-number">0{{ index + 1 }}</div>
            <h2 class="service-title">{{ service.title }}</h2>
            <p class="service-desc">{{ service.desc }}</p>
            <div class="service-features">
              <div
                class="feature-item"
                v-for="feature in service.features"
                :key="feature"
              >
                <el-icon class="feature-check"><CircleCheckFilled /></el-icon>
                <span>{{ feature }}</span>
              </div>
            </div>
            <el-button type="primary" round @click="$router.push('/contact')">
              咨询此服务
              <el-icon class="el-icon--right"><ArrowRight /></el-icon>
            </el-button>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== Tech Stack Section ===== -->
    <section class="section section-white tech-section">
      <div class="container">
        <div class="section-title">
          <div class="accent-line"></div>
          <h2>技术栈</h2>
          <p>我们掌握主流技术栈，以技术驱动业务，为客户提供最优解决方案</p>
        </div>
        <div class="tech-grid">
          <div class="tech-card" v-for="tech in techStack" :key="tech.name">
            <div
              class="tech-icon"
              :style="{ background: tech.bg, color: tech.color }"
            >
              <span class="tech-abbr">{{ tech.abbr }}</span>
            </div>
            <div class="tech-name">{{ tech.name }}</div>
            <div class="tech-category">{{ tech.category }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CTA Section ===== -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-box">
          <div class="cta-text">
            <h2>找到您需要的服务了吗？</h2>
            <p>
              无论您有何种IT需求，西兴里科技的专业团队都能为您量身定制解决方案，立即联系我们获取免费咨询与项目报价
            </p>
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
            <el-button size="large" round @click="$router.push('/cases')">
              查看案例
              <el-icon class="el-icon--right"><ArrowRight /></el-icon>
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
  ArrowDown,
  ArrowRight,
  Phone,
  Monitor,
  Connection,
  Setting,
  Cloudy,
  DataAnalysis,
  Lock,
  CircleCheckFilled,
} from "@element-plus/icons-vue";

const scrollToServices = () => {
  const el = document.getElementById("service-1");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const services = shallowRef([
  {
    title: "软件开发外包",
    desc: "西兴里科技提供专业的软件开发外包服务，覆盖Web应用、移动端App、小程序、企业管理系统及电商平台等全场景定制开发。我们拥有200+资深工程师团队，采用敏捷开发流程，确保项目按时按质交付，帮助企业快速构建高质量软件产品。",
    icon: Monitor,
    bg: "linear-gradient(135deg, #4060ff, #6e88ff)",
    features: [
      "Web应用开发",
      "移动端App开发",
      "小程序开发",
      "企业管理系统",
      "电商平台搭建",
    ],
    tags: ["Vue", "React", "Java", "Spring Boot", "Flutter"],
  },
  {
    title: "系统集成服务",
    desc: "提供企业级系统集成解决方案，打通各业务系统数据孤岛，实现信息流互通。我们擅长API集成、数据中台建设、ERP/CRM系统对接及消息中间件部署，帮助企业构建统一的数据与业务协同平台。",
    icon: Connection,
    bg: "linear-gradient(135deg, #ff6b35, #ff9a5a)",
    features: ["API集成开发", "数据中台建设", "ERP/CRM对接", "消息中间件部署"],
    tags: ["Kafka", "RabbitMQ", "Spring Cloud", "GraphQL", "Nginx"],
  },
  {
    title: "IT运维管理",
    desc: "7×24小时IT基础设施运维服务，保障系统稳定运行。我们提供全面的系统监控、故障处理、性能优化及安全巡检服务，建立完善的运维体系与应急预案，大幅降低企业运维成本，提升系统可用性至99.9%以上。",
    icon: Setting,
    bg: "linear-gradient(135deg, #00b894, #55efc4)",
    features: ["系统监控告警", "故障处理响应", "性能优化调优", "安全巡检审计"],
    tags: ["Prometheus", "Grafana", "Zabbix", "ELK", "Ansible"],
  },
  {
    title: "云计算解决方案",
    desc: "提供专业的云计算解决方案，涵盖云迁移、云架构设计、混合云部署及容器化改造。我们支持AWS、阿里云、腾讯云等主流云平台，帮助企业实现云上架构优化，降低IT基础设施成本，提升系统弹性与可扩展性。",
    icon: Cloudy,
    bg: "linear-gradient(135deg, #6c5ce7, #a29bfe)",
    features: ["云迁移服务", "云架构设计", "混合云部署", "容器化改造"],
    tags: ["AWS", "阿里云", "Docker", "Kubernetes", "Terraform"],
  },
  {
    title: "数据分析服务",
    desc: "提供端到端的数据分析服务，从数据采集、清洗、分析到可视化展示。我们擅长BI报表搭建、数据挖掘、AI智能分析及数据可视化大屏开发，帮助企业实现数据驱动决策，挖掘数据背后的商业价值。",
    icon: DataAnalysis,
    bg: "linear-gradient(135deg, #fdcb6e, #ffeaa7)",
    features: ["BI报表搭建", "数据挖掘分析", "AI智能分析", "数据可视化"],
    tags: ["Python", "TensorFlow", "Tableau", "ECharts", "Spark"],
  },
  {
    title: "网络安全服务",
    desc: "提供全面的网络安全服务，包括安全评估、渗透测试、合规咨询及安全加固。我们的安全专家团队帮助企业发现系统漏洞，构建多层次安全防护体系，满足等保合规要求，保障企业数据与业务安全。",
    icon: Lock,
    bg: "linear-gradient(135deg, #e84393, #fd79a8)",
    features: ["安全评估审计", "渗透测试服务", "合规咨询服务", "安全加固防护"],
    tags: ["Burp Suite", "Nessus", "Wireshark", "Nmap", "Metasploit"],
  },
]);

const techStack = shallowRef([
  {
    name: "Vue",
    abbr: "V",
    category: "前端框架",
    bg: "linear-gradient(135deg, #42b883, #354954)",
    color: "#fff",
  },
  {
    name: "React",
    abbr: "R",
    category: "前端框架",
    bg: "linear-gradient(135deg, #61dafb, #282c34)",
    color: "#fff",
  },
  {
    name: "Java",
    abbr: "J",
    category: "后端语言",
    bg: "linear-gradient(135deg, #f89820, #ed8b00)",
    color: "#fff",
  },
  {
    name: "Python",
    abbr: "P",
    category: "后端语言",
    bg: "linear-gradient(135deg, #3776ab, #ffd43b)",
    color: "#fff",
  },
  {
    name: "Go",
    abbr: "G",
    category: "后端语言",
    bg: "linear-gradient(135deg, #00add8, #5dc9e2)",
    color: "#fff",
  },
  {
    name: "Node.js",
    abbr: "N",
    category: "后端运行时",
    bg: "linear-gradient(135deg, #68a063, #3c8d50)",
    color: "#fff",
  },
  {
    name: "Docker",
    abbr: "D",
    category: "容器技术",
    bg: "linear-gradient(135deg, #2496ed, #0db7ed)",
    color: "#fff",
  },
  {
    name: "K8s",
    abbr: "K",
    category: "容器编排",
    bg: "linear-gradient(135deg, #326ce5, #4f74e8)",
    color: "#fff",
  },
  {
    name: "AWS",
    abbr: "A",
    category: "云平台",
    bg: "linear-gradient(135deg, #ff9900, #ec7211)",
    color: "#fff",
  },
  {
    name: "阿里云",
    abbr: "阿",
    category: "云平台",
    bg: "linear-gradient(135deg, #ff6a00, #ff9a3c)",
    color: "#fff",
  },
  {
    name: "MySQL",
    abbr: "M",
    category: "数据库",
    bg: "linear-gradient(135deg, #00758f, #4479a1)",
    color: "#fff",
  },
  {
    name: "Redis",
    abbr: "Re",
    category: "缓存数据库",
    bg: "linear-gradient(135deg, #dc382d, #ff4438)",
    color: "#fff",
  },
  {
    name: "Spring",
    abbr: "S",
    category: "后端框架",
    bg: "linear-gradient(135deg, #6db33f, #5a9e2c)",
    color: "#fff",
  },
  {
    name: "Flutter",
    abbr: "F",
    category: "移动开发",
    bg: "linear-gradient(135deg, #02569b, #54c5f8)",
    color: "#fff",
  },
  {
    name: "Kafka",
    abbr: "Ka",
    category: "消息队列",
    bg: "linear-gradient(135deg, #231f20, #444)",
    color: "#fff",
  },
  {
    name: "Nginx",
    abbr: "Ng",
    category: "Web服务器",
    bg: "linear-gradient(135deg, #009639, #00b34a)",
    color: "#fff",
  },
]);
</script>

<style scoped>
/* ===== Page Banner ===== */
.page-banner {
  position: relative;
  min-height: 480px;
  display: flex;
  align-items: center;
  padding-top: 70px;
  overflow: hidden;
  background: linear-gradient(135deg, #f0f4ff 0%, #e8eeff 50%, #f5f7fa 100%);
}

.banner-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.banner-shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.25;
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
  bottom: -80px;
  left: -80px;
}

.shape-3 {
  width: 200px;
  height: 200px;
  background: #00b894;
  top: 40%;
  right: 35%;
}

.banner-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 60px 20px;
}

.banner-badge {
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

.banner-title {
  font-size: 52px;
  font-weight: 800;
  line-height: 1.3;
  color: var(--text-primary);
  margin-bottom: 20px;
}

.banner-subtitle {
  font-size: 17px;
  line-height: 1.8;
  color: var(--text-regular);
  max-width: 720px;
  margin: 0 auto 32px;
}

.banner-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
}

/* ===== Service Detail Section ===== */
.service-detail-section {
  padding: 80px 0;
}

.service-detail {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 60px;
  align-items: center;
}

.service-detail.reverse {
  grid-template-columns: 1.3fr 1fr;
}

.service-detail.reverse .service-visual {
  order: 2;
}

.service-detail.reverse .service-info {
  order: 1;
}

/* Service Visual */
.service-visual {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.visual-wrapper {
  position: relative;
  width: 240px;
  height: 240px;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-hover);
  overflow: hidden;
}

.visual-deco {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
}

.deco-1 {
  width: 120px;
  height: 120px;
  top: -40px;
  right: -40px;
}

.deco-2 {
  width: 80px;
  height: 80px;
  bottom: -20px;
  left: -20px;
}

.visual-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  max-width: 320px;
}

/* Service Info */
.service-info {
  padding: 0 10px;
}

.service-number {
  font-size: 64px;
  font-weight: 800;
  color: var(--primary-bg);
  line-height: 1;
  margin-bottom: 8px;
}

.service-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.service-desc {
  font-size: 15px;
  line-height: 1.9;
  color: var(--text-regular);
  margin-bottom: 28px;
}

.service-features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  margin-bottom: 32px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  color: var(--text-primary);
  font-weight: 500;
}

.feature-check {
  color: var(--primary-color);
  font-size: 18px;
  flex-shrink: 0;
}

/* ===== Tech Stack ===== */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 20px;
}

.tech-card {
  text-align: center;
  padding: 24px 12px;
  background: #fff;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  cursor: default;
}

.tech-card:hover {
  border-color: transparent;
  box-shadow: var(--shadow-hover);
  transform: translateY(-6px);
}

.tech-icon {
  width: 56px;
  height: 56px;
  margin: 0 auto 12px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 22px;
}

.tech-abbr {
  line-height: 1;
}

.tech-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.tech-category {
  font-size: 12px;
  color: var(--text-secondary);
}

/* ===== CTA Section ===== */
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

.cta-box::after {
  content: "";
  position: absolute;
  bottom: -40%;
  left: -5%;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background: rgba(108, 92, 231, 0.12);
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
  max-width: 560px;
  line-height: 1.7;
}

.cta-actions {
  position: relative;
  z-index: 1;
  flex-shrink: 0;
  display: flex;
  gap: 16px;
}

/* ===== Responsive ===== */
@media (max-width: 992px) {
  .banner-title {
    font-size: 40px;
  }

  .banner-subtitle {
    font-size: 15px;
  }

  .service-detail,
  .service-detail.reverse {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .service-detail.reverse .service-visual,
  .service-detail.reverse .service-info {
    order: unset;
  }

  .service-visual {
    order: -1;
  }

  .service-info {
    padding: 0;
  }

  .service-number {
    font-size: 48px;
  }

  .service-title {
    font-size: 26px;
  }

  .service-features {
    grid-template-columns: repeat(2, 1fr);
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
  }

  .feature-item {
    justify-content: center;
  }

  .tech-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .cta-box {
    flex-direction: column;
    text-align: center;
    padding: 40px 24px;
  }

  .cta-actions {
    flex-direction: column;
    width: 100%;
  }
}

@media (max-width: 600px) {
  .banner-title {
    font-size: 30px;
  }

  .banner-subtitle {
    font-size: 14px;
  }

  .banner-actions {
    flex-direction: column;
    align-items: center;
  }

  .visual-wrapper {
    width: 180px;
    height: 180px;
    border-radius: 24px;
  }

  .service-features {
    grid-template-columns: 1fr;
  }

  .service-title {
    font-size: 22px;
  }

  .service-desc {
    font-size: 14px;
  }

  .tech-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  .tech-card {
    padding: 16px 8px;
  }

  .tech-icon {
    width: 44px;
    height: 44px;
    font-size: 18px;
  }

  .tech-name {
    font-size: 13px;
  }

  .tech-category {
    font-size: 11px;
  }

  .cta-text h2 {
    font-size: 22px;
  }

  .cta-text p {
    font-size: 14px;
  }
}
</style>

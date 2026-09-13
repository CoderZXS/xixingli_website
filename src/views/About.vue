<template>
  <div class="about-page">
    <!-- Page Banner -->
    <div class="page-banner">
      <div class="container">
        <h1 class="banner-title">关于我们</h1>
        <p class="banner-subtitle">专注IT外包服务，助力企业数字化转型</p>
      </div>
    </div>

    <!-- Company Intro Section -->
    <section class="section section-white">
      <div class="container">
        <div class="intro-wrapper">
          <div class="intro-left">
            <h2 class="intro-heading">
              西兴里科技 — 您值得信赖的IT外包合作伙伴
            </h2>
            <p class="intro-text">
              西兴里科技成立于2014年，是一家专注于企业级IT外包服务的科技公司。我们致力于为客户提供从软件开发、系统集成到IT运维的全栈式技术服务，帮助企业降低IT运营成本，提升核心竞争力。
            </p>
            <p class="intro-text">
              经过多年的发展，西兴里科技已建立起一支200余人的专业技术团队，服务客户超过500家，累计交付项目1200余个。我们以"技术驱动创新，服务创造价值"为核心理念，深耕金融、制造、零售、医疗等多个行业领域，赢得了广大客户的信赖与好评。
            </p>
            <p class="intro-text">
              总部位于深圳南山区，全国布局分公司，可为客户提供全域技术支持与交付落地服务。
            </p>
          </div>
          <div class="intro-right">
            <div class="stats-grid">
              <div v-for="item in stats" :key="item.label" class="stat-card">
                <div class="stat-value">{{ item.value }}</div>
                <div class="stat-label">{{ item.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission / Vision / Values Section -->
    <section class="section section-gray">
      <div class="container">
        <div class="section-title">
          <h2>使命 · 愿景 · 价值观</h2>
          <span class="accent-line"></span>
          <p>我们坚守的核心理念，指引着前行的方向</p>
        </div>
        <div class="mvv-grid">
          <div v-for="item in mvvList" :key="item.title" class="mvv-card">
            <div class="mvv-icon">
              <el-icon :size="40">
                <component :is="item.icon" />
              </el-icon>
            </div>
            <h3 class="mvv-title">{{ item.title }}</h3>
            <p class="mvv-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Development Timeline Section -->
    <section class="section section-white">
      <div class="container">
        <div class="section-title">
          <h2>发展历程</h2>
          <span class="accent-line"></span>
          <p>十年深耕，砥砺前行，每一步都铸就成长</p>
        </div>
        <div class="timeline">
          <div class="timeline-line"></div>
          <div
            v-for="(item, index) in timeline"
            :key="item.year"
            class="timeline-item"
            :class="{
              'timeline-item-left': index % 2 === 0,
              'timeline-item-right': index % 2 !== 0,
            }"
          >
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-year">{{ item.year }}</div>
              <div class="timeline-milestone">{{ item.milestone }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="section section-gray">
      <div class="container">
        <div class="section-title">
          <h2>核心团队</h2>
          <span class="accent-line"></span>
          <p>经验丰富的管理团队，引领公司持续发展</p>
        </div>
        <div class="team-grid">
          <div
            v-for="member in teamMembers"
            :key="member.name"
            class="team-card"
          >
            <el-avatar :size="100" class="team-avatar">
              <el-icon :size="48"><User /></el-icon>
            </el-avatar>
            <h3 class="team-name">{{ member.name }}</h3>
            <div class="team-title">{{ member.title }}</div>
            <p class="team-bio">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Qualifications / Certifications Section -->
    <section class="section section-white">
      <div class="container">
        <div class="section-title">
          <h2>资质认证</h2>
          <span class="accent-line"></span>
          <p>权威认证，品质保障，专业能力获行业认可</p>
        </div>
        <div class="cert-grid">
          <div
            v-for="cert in certifications"
            :key="cert.name"
            class="cert-card"
          >
            <div class="cert-badge">
              <el-icon :size="48">
                <component :is="cert.icon" />
              </el-icon>
            </div>
            <div class="cert-name">{{ cert.name }}</div>
            <div class="cert-desc">{{ cert.desc }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-wrapper">
          <div class="cta-text">
            <h2 class="cta-title">让西兴里科技成为您的技术合伙人</h2>
            <p class="cta-desc">
              无论您处于哪个行业、哪个阶段，我们都能为您提供专业的IT外包解决方案。立即联系我们，开启合作之旅。
            </p>
          </div>
          <el-button
            type="primary"
            size="large"
            class="cta-btn"
            @click="goToContact"
            >联系我们</el-button
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { shallowRef } from "vue";
import { useRouter } from "vue-router";
import {
  Aim,
  View,
  Medal,
  User,
  Document,
  TrendCharts,
  Lock,
} from "@element-plus/icons-vue";

const router = useRouter();

const goToContact = () => {
  router.push("/contact");
};

const stats = shallowRef([
  { value: "2014", label: "成立年份" },
  { value: "200+", label: "团队规模" },
  { value: "500+", label: "服务客户" },
  { value: "1200+", label: "交付项目" },
]);

const mvvList = shallowRef([
  {
    title: "企业使命",
    desc: "以技术创新驱动企业数字化转型，帮助客户聚焦核心业务，降低IT运营成本，实现业务持续增长。",
    icon: Aim,
  },
  {
    title: "企业愿景",
    desc: "成为中国领先的IT外包服务提供商，以专业的技术能力和卓越的服务品质赢得市场尊重与客户信赖。",
    icon: View,
  },
  {
    title: "核心价值观",
    desc: "客户至上、诚信务实、追求卓越、合作共赢。我们坚持以客户需求为导向，以技术创新为驱动，与客户共同成长。",
    icon: Medal,
  },
]);

const timeline = shallowRef([
  {
    year: "2014",
    milestone:
      "西兴里科技在深圳市南山区正式成立，初创团队15人，专注于软件定制开发服务。",
  },
  {
    year: "2015",
    milestone:
      "获得首批企业客户认可，业务拓展至系统集成领域，团队规模扩大至40人。",
  },
  {
    year: "2016",
    milestone:
      "通过ISO9001质量管理体系认证，建立标准化交付流程，客户数量突破50家。",
  },
  {
    year: "2017",
    milestone: "设立北京分公司，业务覆盖华北区域，推出IT运维外包服务线。",
  },
  {
    year: "2018",
    milestone:
      "通过ISO27001信息安全管理体系认证，团队规模突破100人，累计交付项目超300个。",
  },
  {
    year: "2019",
    milestone:
      '获评"高新技术企业"称号，布局云计算与大数据服务，设立深圳分支机构。',
  },
  {
    year: "2020",
    milestone:
      "通过CMMI3级认证，研发管理体系成熟度获国际认可，服务客户超300家。",
  },
  {
    year: "2021",
    milestone:
      "设立成都研发中心，团队规模突破150人，业务拓展至网络安全与数据分析领域。",
  },
  {
    year: "2022",
    milestone:
      "累计交付项目突破800个，客户行业覆盖金融、制造、零售、医疗等核心领域。",
  },
  {
    year: "2023",
    milestone: "团队规模突破200人，服务客户超500家，获多项行业奖项与技术专利。",
  },
  {
    year: "2026",
    milestone:
      "累计交付项目超1200个，持续深化AI与云原生技术能力，迈入高质量发展新阶段。",
  },
]);

const teamMembers = shallowRef([
  {
    name: "陈景峰",
    title: "CEO / 首席执行官",
    bio: "拥有20年IT行业经验，曾任职于多家知名科技企业高管，擅长企业战略规划与商业模式创新，带领西兴里科技从初创走向成熟。",
  },
  {
    name: "周宇恒",
    title: "CTO / 首席技术官",
    bio: "清华大学计算机硕士，15年技术研发与管理经验，深耕云计算、大数据与AI领域，主导公司技术架构与研发体系建设。",
  },
  {
    name: "吴嘉诚",
    title: "技术总监",
    bio: "资深技术专家，12年软件架构与系统设计经验，精通微服务架构与云原生技术，负责公司核心技术方案的设计与评审。",
  },
  {
    name: "苏静雯",
    title: "运营总监",
    bio: "拥有丰富的大型项目管理与运营经验，擅长流程优化与团队效能提升，负责公司交付质量与客户服务体系的建设与运营。",
  },
]);

const certifications = shallowRef([
  { name: "ISO27001", desc: "信息安全管理体系认证", icon: Lock },
  { name: "CMMI3", desc: "软件能力成熟度集成模型三级认证", icon: TrendCharts },
  { name: "高新技术企业", desc: "国家高新技术企业认定", icon: Medal },
  { name: "ISO9001", desc: "质量管理体系认证", icon: Document },
]);
</script>

<style scoped>
/* Page Banner */
.page-banner {
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--primary-dark) 100%
  );
  padding-top: 100px;
  padding-bottom: 60px;
  color: #fff;
  text-align: center;
}

.banner-title {
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 12px;
}

.banner-subtitle {
  font-size: 18px;
  opacity: 0.9;
  margin: 0;
}

/* Company Intro */
.intro-wrapper {
  display: flex;
  align-items: center;
  gap: 48px;
}

.intro-left {
  flex: 1;
}

.intro-heading {
  font-size: 28px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 24px;
  line-height: 1.4;
}

.intro-text {
  font-size: 16px;
  line-height: 1.8;
  color: var(--text-regular);
  margin: 0 0 16px;
}

.intro-right {
  flex: 0 0 360px;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.stat-card {
  background: var(--bg-white);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 28px 20px;
  text-align: center;
  box-shadow: var(--shadow-light);
  transition: all 0.3s ease;
}

.stat-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-4px);
  border-color: var(--primary-light);
}

.stat-value {
  font-size: 36px;
  font-weight: 700;
  color: var(--primary-color);
  line-height: 1.2;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 14px;
  color: var(--text-secondary);
}

/* Mission / Vision / Values */
.mvv-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.mvv-card {
  background: var(--bg-white);
  border-radius: var(--radius-lg);
  padding: 40px 30px;
  text-align: center;
  box-shadow: var(--shadow-light);
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
}

.mvv-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-6px);
}

.mvv-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-bg);
  border-radius: 50%;
  color: var(--primary-color);
}

.mvv-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 16px;
}

.mvv-desc {
  font-size: 15px;
  line-height: 1.8;
  color: var(--text-regular);
  margin: 0;
}

/* Timeline */
.timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 0;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--primary-light);
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  width: 50%;
  padding: 0 40px 40px;
  box-sizing: border-box;
}

.timeline-item-left {
  left: 0;
  text-align: right;
}

.timeline-item-right {
  left: 50%;
  text-align: left;
}

.timeline-dot {
  position: absolute;
  top: 6px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--primary-color);
  border: 3px solid var(--bg-white);
  box-shadow: 0 0 0 3px var(--primary-light);
}

.timeline-item-left .timeline-dot {
  right: -8px;
}

.timeline-item-right .timeline-dot {
  left: -8px;
}

.timeline-content {
  background: var(--bg-white);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 20px 24px;
  box-shadow: var(--shadow-light);
  transition: all 0.3s ease;
}

.timeline-content:hover {
  box-shadow: var(--shadow-hover);
  border-color: var(--primary-light);
}

.timeline-year {
  font-size: 24px;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 8px;
}

.timeline-milestone {
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-regular);
}

/* Team */
.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.team-card {
  background: var(--bg-white);
  border-radius: var(--radius-lg);
  padding: 36px 24px;
  text-align: center;
  box-shadow: var(--shadow-light);
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
}

.team-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-6px);
}

.team-avatar {
  background: var(--primary-bg);
  color: var(--primary-color);
  margin-bottom: 20px;
}

.team-name {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 6px;
}

.team-title {
  font-size: 14px;
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 14px;
}

.team-bio {
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-regular);
  margin: 0;
}

/* Certifications */
.cert-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.cert-card {
  background: var(--bg-white);
  border-radius: var(--radius-lg);
  padding: 36px 24px;
  text-align: center;
  box-shadow: var(--shadow-light);
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
}

.cert-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-4px);
  border-color: var(--primary-light);
}

.cert-badge {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-bg);
  border-radius: 50%;
  color: var(--primary-color);
}

.cert-name {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.cert-desc {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--primary-dark) 100%
  );
  padding: 60px 0;
}

.cta-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.cta-title {
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 12px;
}

.cta-desc {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  line-height: 1.6;
}

.cta-btn {
  flex-shrink: 0;
  font-size: 16px;
  padding: 12px 36px;
}

/* Responsive */
@media (max-width: 992px) {
  .intro-wrapper {
    flex-direction: column;
    gap: 32px;
  }

  .intro-right {
    flex: 0 0 auto;
    width: 100%;
  }

  .mvv-grid {
    grid-template-columns: 1fr;
  }

  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .cert-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .cta-wrapper {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .banner-title {
    font-size: 28px;
  }

  .banner-subtitle {
    font-size: 15px;
  }

  .intro-heading {
    font-size: 22px;
  }

  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }

  .stat-value {
    font-size: 28px;
  }

  .timeline-line {
    left: 20px;
  }

  .timeline-item {
    width: 100%;
    left: 0 !important;
    text-align: left !important;
    padding: 0 0 30px 50px;
  }

  .timeline-item .timeline-dot {
    left: 12px !important;
    right: auto !important;
  }

  .team-grid {
    grid-template-columns: 1fr;
  }

  .cert-grid {
    grid-template-columns: 1fr;
  }

  .cta-title {
    font-size: 22px;
  }

  .cta-desc {
    font-size: 14px;
  }
}
</style>

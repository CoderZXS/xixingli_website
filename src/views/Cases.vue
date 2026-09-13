<template>
  <div class="cases-page">
    <!-- ===== Page Banner / Hero ===== -->
    <section class="page-banner">
      <div class="banner-bg">
        <div class="banner-shape shape-1"></div>
        <div class="banner-shape shape-2"></div>
        <div class="banner-shape shape-3"></div>
      </div>
      <div class="container banner-content">
        <div class="banner-badge">
          <el-icon><Trophy /></el-icon>
          <span>500+企业客户的信赖之选</span>
        </div>
        <h1 class="banner-title">成功案例</h1>
        <p class="banner-subtitle">
          西兴里科技十余年来深耕IT外包领域，累计交付1200+项目，覆盖金融、制造、零售、
          医疗、教育等多个行业，以专业技术和优质服务赢得客户广泛认可
        </p>
        <div class="banner-actions">
          <el-button type="primary" size="large" round @click="scrollToCases">
            浏览案例
            <el-icon class="el-icon--right"><ArrowDown /></el-icon>
          </el-button>
          <el-button size="large" round @click="$router.push('/contact')">
            <el-icon class="el-icon--right"><Phone /></el-icon>
            免费咨询
          </el-button>
        </div>
      </div>
    </section>

    <!-- ===== Cases Section ===== -->
    <section class="section section-white cases-section" id="cases-list">
      <div class="container">
        <div class="section-title">
          <div class="accent-line"></div>
          <h2>精选客户案例</h2>
          <p>每一个案例都是我们对专业与品质的承诺，用技术创造真实价值</p>
        </div>

        <!-- Filter Tabs -->
        <div class="filter-tabs">
          <button
            v-for="cat in categories"
            :key="cat"
            class="filter-tab"
            :class="{ active: activeCategory === cat }"
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Cases Grid -->
        <div class="cases-grid">
          <div
            class="case-card"
            v-for="caseItem in filteredCases"
            :key="caseItem.title"
          >
            <!-- Gradient Header -->
            <div class="case-header" :style="{ background: caseItem.bg }">
              <el-icon :size="40" color="#fff"
                ><component :is="caseItem.icon"
              /></el-icon>
              <div class="header-deco deco-1"></div>
              <div class="header-deco deco-2"></div>
              <span class="case-category-tag">{{ caseItem.category }}</span>
            </div>

            <!-- Card Body -->
            <div class="case-body">
              <h3 class="case-title">{{ caseItem.title }}</h3>
              <div class="case-client">
                <el-icon><OfficeBuilding /></el-icon>
                <span>{{ caseItem.client }}</span>
              </div>
              <p class="case-desc">{{ caseItem.desc }}</p>

              <!-- Key Metrics -->
              <div class="case-metrics">
                <div
                  class="metric-item"
                  v-for="metric in caseItem.metrics"
                  :key="metric.label"
                >
                  <span class="metric-value">{{ metric.value }}</span>
                  <span class="metric-label">{{ metric.label }}</span>
                </div>
              </div>

              <!-- View Detail Link -->
              <div class="case-footer">
                <span class="view-detail" @click="openDialog(caseItem)">
                  查看详情
                  <el-icon class="detail-arrow"><ArrowRight /></el-icon>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== Case Detail Dialog ===== -->
    <el-dialog
      v-model="dialogVisible"
      :title="currentCase?.title || '案例详情'"
      width="720px"
      class="case-dialog"
      align-center
    >
      <template v-if="currentCase">
        <div class="dialog-header" :style="{ background: currentCase.bg }">
          <el-icon :size="48" color="#fff"
            ><component :is="currentCase.icon"
          /></el-icon>
          <div class="dialog-header-deco deco-1"></div>
          <div class="dialog-header-deco deco-2"></div>
        </div>
        <div class="dialog-content">
          <div class="dialog-meta">
            <div class="meta-item">
              <el-icon><OfficeBuilding /></el-icon>
              <div>
                <span class="meta-label">客户名称</span>
                <span class="meta-value">{{ currentCase.client }}</span>
              </div>
            </div>
            <div class="meta-item">
              <el-icon><Collection /></el-icon>
              <div>
                <span class="meta-label">服务类别</span>
                <span class="meta-value">{{ currentCase.category }}</span>
              </div>
            </div>
            <div class="meta-item">
              <el-icon><Calendar /></el-icon>
              <div>
                <span class="meta-label">项目周期</span>
                <span class="meta-value">{{ currentCase.duration }}</span>
              </div>
            </div>
          </div>

          <div class="dialog-section">
            <h4>项目背景</h4>
            <p>{{ currentCase.background }}</p>
          </div>

          <div class="dialog-section">
            <h4>解决方案</h4>
            <p>{{ currentCase.solution }}</p>
          </div>

          <div class="dialog-section">
            <h4>关键技术</h4>
            <div class="dialog-tags">
              <el-tag
                v-for="tech in currentCase.techStack"
                :key="tech"
                effect="plain"
                round
              >
                {{ tech }}
              </el-tag>
            </div>
          </div>

          <div class="dialog-section">
            <h4>项目成果</h4>
            <div class="dialog-metrics">
              <div
                class="dialog-metric"
                v-for="metric in currentCase.metrics"
                :key="metric.label"
              >
                <span class="dialog-metric-value">{{ metric.value }}</span>
                <span class="dialog-metric-label">{{ metric.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <el-button @click="dialogVisible = false">关闭</el-button>
        <el-button type="primary" @click="goContact">
          咨询类似方案
          <el-icon class="el-icon--right"><ArrowRight /></el-icon>
        </el-button>
      </template>
    </el-dialog>

    <!-- ===== CTA Section ===== -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-box">
          <div class="cta-text">
            <h2>想成为下一个成功案例吗？</h2>
            <p>
              无论您身处哪个行业，西兴里科技的专业团队都能为您量身定制IT外包解决方案，立即联系我们获取免费咨询与项目报价
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
            <el-button size="large" round @click="$router.push('/services')">
              浏览服务
              <el-icon class="el-icon--right"><ArrowRight /></el-icon>
            </el-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef, computed } from "vue";
import { useRouter } from "vue-router";
import {
  Trophy,
  ArrowDown,
  ArrowRight,
  Phone,
  Monitor,
  Connection,
  Cloudy,
  DataAnalysis,
  Lock,
  OfficeBuilding,
  Collection,
  Calendar,
} from "@element-plus/icons-vue";

const router = useRouter();

const categories = [
  "全部",
  "软件开发",
  "系统集成",
  "云计算",
  "数据分析",
  "网络安全",
];

const activeCategory = ref("全部");

const dialogVisible = ref(false);

interface CaseMetric {
  value: string;
  label: string;
}

interface CaseItem {
  title: string;
  client: string;
  category: string;
  desc: string;
  icon: any;
  bg: string;
  metrics: CaseMetric[];
  duration: string;
  background: string;
  solution: string;
  techStack: string[];
}

const cases = shallowRef<CaseItem[]>([
  {
    title: "大型电商平台定制开发",
    client: "环球商贸集团",
    category: "软件开发",
    desc: "为环球商贸集团打造全渠道电商平台，支持日均百万级订单处理，涵盖PC端、移动端及小程序多终端，实现商品、订单、库存、营销一体化管理。",
    icon: Monitor,
    bg: "linear-gradient(135deg, #4060ff, #6e88ff)",
    metrics: [
      { value: "40%", label: "效率提升" },
      { value: "30%", label: "成本降低" },
      { value: "99.9%", label: "系统可用性" },
    ],
    duration: "8个月",
    background:
      "环球商贸集团原有电商系统架构老旧，无法支撑业务快速增长带来的高并发流量，订单处理效率低下，库存数据滞后，严重影响用户体验和运营效率。客户急需一套高性能、可扩展的电商平台来支撑业务持续发展。",
    solution:
      "西兴里科技组建20人专项团队，采用微服务架构重构整体系统。后端基于Spring Cloud构建服务集群，前端使用Vue3开发多端统一界面，引入Redis集群与Elasticsearch提升搜索与缓存性能，通过Kubernetes实现弹性伸缩，保障大促期间流量洪峰平稳渡过。",
    techStack: [
      "Vue3",
      "Spring Cloud",
      "Redis",
      "Elasticsearch",
      "Kubernetes",
      "MySQL",
    ],
  },
  {
    title: "智能制造ERP系统开发",
    client: "精工制造股份有限公司",
    category: "软件开发",
    desc: "为精工制造定制开发智能制造ERP系统，打通生产计划、物料管理、质量追溯全流程，实现工厂数字化转型与精益生产管理。",
    icon: Monitor,
    bg: "linear-gradient(135deg, #00b894, #55efc4)",
    metrics: [
      { value: "50%", label: "产能提升" },
      { value: "35%", label: "库存减少" },
      { value: "60%", label: "排产提速" },
    ],
    duration: "10个月",
    background:
      "精工制造原有生产管理依赖人工台账与分散的独立系统，数据无法互通，生产计划排程耗时长，物料浪费严重，质量追溯困难，难以满足日益增长的订单交付需求。",
    solution:
      "西兴里科技团队深入生产现场调研，设计开发了一体化智能制造ERP系统。系统覆盖销售订单、生产计划、物料需求、采购管理、车间执行、质量检验全链路，集成MES系统实现车间实时数据采集，并通过数据看板为管理层提供决策支持。",
    techStack: [
      "Java",
      "Vue3",
      "Spring Boot",
      "MyBatis",
      "PostgreSQL",
      "WebSocket",
    ],
  },
  {
    title: "智慧医疗App开发",
    client: "仁济医疗集团",
    category: "软件开发",
    desc: "为仁济医疗集团开发智慧医疗移动应用，提供在线问诊、预约挂号、报告查询、健康档案管理等功能，改善患者就医体验。",
    icon: Monitor,
    bg: "linear-gradient(135deg, #e84393, #fd79a8)",
    metrics: [
      { value: "45%", label: "候诊缩短" },
      { value: "80%", label: "线上挂号率" },
      { value: "4.8分", label: "用户评分" },
    ],
    duration: "6个月",
    background:
      "仁济医疗集团旗下多家医院门诊量大，患者排队挂号时间长、取报告需多次往返，就医体验较差。集团希望借助移动互联网技术，为患者提供便捷的线上医疗服务。",
    solution:
      "西兴里科技采用Flutter跨平台技术栈开发iOS与Android双端应用，对接医院HIS系统实现实时数据同步。提供图文问诊、视频问诊、智能导诊、电子处方等功能，并建立完善的用户隐私保护机制，通过等保三级安全认证。",
    techStack: ["Flutter", "Dart", "Spring Boot", "MongoDB", "WebRTC", "Nginx"],
  },
  {
    title: "企业数据中台集成",
    client: "中诚金融科技",
    category: "系统集成",
    desc: "为中诚金融科技构建企业数据中台，整合风控、营销、运营等多套业务系统数据，实现统一数据治理与实时分析能力。",
    icon: Connection,
    bg: "linear-gradient(135deg, #ff6b35, #ff9a5a)",
    metrics: [
      { value: "70%", label: "数据互通率" },
      { value: "50%", label: "分析提速" },
      { value: "3倍", label: "决策效率" },
    ],
    duration: "9个月",
    background:
      "中诚金融科技旗下拥有风控系统、营销平台、客服系统等十余套独立业务系统，数据分散存储，格式不统一，难以进行跨系统数据分析，严重制约了数据驱动决策能力。",
    solution:
      "西兴里科技设计了完整的数据中台架构，通过Kafka消息队列实现各业务系统数据实时采集，利用Flink进行流式数据处理，构建统一数据仓库与数据服务API层，为上层应用提供标准化数据接口，实现数据资产的统一管理与复用。",
    techStack: ["Kafka", "Flink", "Spring Cloud", "Hadoop", "Hive", "GraphQL"],
  },
  {
    title: "ERP与CRM系统集成",
    client: "恒达零售连锁",
    category: "系统集成",
    desc: "为恒达零售连锁打通ERP与CRM系统，实现会员数据、库存数据、销售数据实时同步，构建全渠道会员营销体系。",
    icon: Connection,
    bg: "linear-gradient(135deg, #6c5ce7, #a29bfe)",
    metrics: [
      { value: "55%", label: "同步效率提升" },
      { value: "40%", label: "营销转化率" },
      { value: "100%", label: "数据一致性" },
    ],
    duration: "5个月",
    background:
      "恒达零售连锁拥有300+门店，ERP系统管理库存与供应链，CRM系统管理会员与营销，两套系统数据割裂，导致会员权益与库存信息不同步，营销活动精准度低，客户体验不佳。",
    solution:
      "西兴里科技通过API网关与消息中间件实现ERP与CRM系统的深度集成，建立统一会员数据中心，打通商品、库存、订单、会员全链路数据。开发智能营销引擎，基于会员画像与消费行为实现精准推荐与个性化营销。",
    techStack: [
      "RabbitMQ",
      "Spring Cloud",
      "Redis",
      "MySQL",
      "Nginx",
      "Elasticsearch",
    ],
  },
  {
    title: "混合云架构迁移",
    client: "创新科技集团",
    category: "云计算",
    desc: "为创新科技集团实施混合云架构迁移，将核心系统部署至阿里云，保留敏感数据在私有云，实现弹性扩展与数据安全兼顾。",
    icon: Cloudy,
    bg: "linear-gradient(135deg, #0984e3, #74b9ff)",
    metrics: [
      { value: "45%", label: "成本降低" },
      { value: "3倍", label: "弹性扩容" },
      { value: "99.95%", label: "SLA保障" },
    ],
    duration: "7个月",
    background:
      "创新科技集团原有IT基础设施全部部署在自建机房，硬件老化严重，维护成本高昂，业务高峰期资源不足、低谷期资源闲置，无法满足业务弹性需求，亟需进行云化改造。",
    solution:
      "西兴里科技制定了分阶段混合云迁移策略，将非敏感业务系统迁移至阿里云公有云，核心数据与敏感系统保留在私有云，通过专线与VPN打通混合云网络。采用Kubernetes容器编排实现应用弹性伸缩，配合Terraform实现基础设施即代码管理。",
    techStack: [
      "阿里云",
      "Kubernetes",
      "Docker",
      "Terraform",
      "Jenkins",
      "Prometheus",
    ],
  },
  {
    title: "容器化DevOps改造",
    client: "速联网络科技有限公司",
    category: "云计算",
    desc: "为速联网络实施全面容器化与DevOps改造，建立CI/CD流水线，实现自动化构建、测试、部署，大幅提升研发交付效率。",
    icon: Cloudy,
    bg: "linear-gradient(135deg, #00cec9, #81ecec)",
    metrics: [
      { value: "60%", label: "交付提速" },
      { value: "80%", label: "部署自动化" },
      { value: "50%", label: "故障减少" },
    ],
    duration: "4个月",
    background:
      '速联网络原有开发流程依赖手动构建与部署，环境不一致导致频繁出现"开发环境正常、生产环境报错"的问题，版本发布周期长达两周，严重影响产品迭代速度与线上稳定性。',
    solution:
      "西兴里科技为速联网络搭建了完整的DevOps体系。将所有应用容器化，基于GitLab CI与Jenkins构建自动化流水线，实现代码提交后自动构建、单元测试、镜像打包、自动化部署。引入ArgoCD实现GitOps持续交付，配合Prometheus与Grafana实现全链路监控。",
    techStack: [
      "Docker",
      "Kubernetes",
      "GitLab CI",
      "Jenkins",
      "ArgoCD",
      "Grafana",
    ],
  },
  {
    title: "BI数据可视化大屏",
    client: "城市智慧交通中心",
    category: "数据分析",
    desc: "为城市智慧交通中心开发实时数据可视化大屏，整合全市交通流量、信号灯、事件告警等数据，辅助交通指挥决策。",
    icon: DataAnalysis,
    bg: "linear-gradient(135deg, #fdcb6e, #ffeaa7)",
    metrics: [
      { value: "90%", label: "实时覆盖率" },
      { value: "50%", label: "响应提速" },
      { value: "35%", label: "拥堵缓解" },
    ],
    duration: "6个月",
    background:
      "城市智慧交通中心原有数据分散在多个子系统，缺乏统一的可视化展示平台，交通指挥人员无法实时掌握全市交通态势，事件响应滞后，拥堵疏导效率低。",
    solution:
      "西兴里科技开发了基于Web的实时数据可视化大屏系统，通过WebSocket接入全市2000+路口实时流量数据、信号灯状态与交通事件告警。采用ECharts与Three.js构建3D城市地图与实时数据图表，支持多屏联动展示，为交通指挥提供全局态势感知。",
    techStack: [
      "Vue3",
      "ECharts",
      "Three.js",
      "WebSocket",
      "Python",
      "ClickHouse",
    ],
  },
  {
    title: "企业安全加固与合规",
    client: "安信保险集团",
    category: "网络安全",
    desc: "为安信保险集团提供全面网络安全加固服务，包括渗透测试、漏洞修复、等保合规，构建多层次安全防护体系。",
    icon: Lock,
    bg: "linear-gradient(135deg, #d63031, #ff7675)",
    metrics: [
      { value: "100%", label: "漏洞修复" },
      { value: "等保三级", label: "合规达标" },
      { value: "0", label: "安全事件" },
    ],
    duration: "5个月",
    background:
      "安信保险集团作为金融机构，面临严峻的网络安全威胁，原有安全防护体系薄弱，未通过等保三级测评，存在多处高危漏洞，监管要求限期整改，安全合规压力巨大。",
    solution:
      "西兴里科技安全团队对客户全部业务系统进行了全面渗透测试与安全评估，发现并修复高危漏洞60余处。部署WAF防火墙、入侵检测系统与日志审计平台，建立安全运营中心(SOC)，完善安全管理制度与应急响应预案，顺利通过等保三级测评。",
    techStack: ["Burp Suite", "Nessus", "WAF", "SIEM", "Nmap", "Metasploit"],
  },
]);

const filteredCases = computed(() => {
  if (activeCategory.value === "全部") {
    return cases.value;
  }
  return cases.value.filter((c) => c.category === activeCategory.value);
});

const currentCase = ref<CaseItem | null>(null);

const openDialog = (caseItem: CaseItem) => {
  currentCase.value = caseItem;
  dialogVisible.value = true;
};

const scrollToCases = () => {
  const el = document.getElementById("cases-list");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const goContact = () => {
  dialogVisible.value = false;
  router.push("/contact");
};
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
  max-width: 760px;
  margin: 0 auto 32px;
}

.banner-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
}

/* ===== Filter Tabs ===== */
.filter-tabs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 48px;
}

.filter-tab {
  padding: 10px 28px;
  border: 1px solid var(--border-color);
  border-radius: 24px;
  background: var(--bg-white);
  color: var(--text-regular);
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
}

.filter-tab:hover {
  color: var(--primary-color);
  border-color: var(--primary-light);
}

.filter-tab.active {
  background: var(--primary-color);
  border-color: var(--primary-color);
  color: #fff;
  box-shadow: 0 4px 16px rgba(64, 96, 255, 0.3);
}

/* ===== Cases Grid ===== */
.cases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.case-card {
  background: var(--bg-white);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.case-card:hover {
  border-color: transparent;
  box-shadow: var(--shadow-hover);
  transform: translateY(-8px);
}

/* Card Header */
.case-header {
  position: relative;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.header-deco {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
}

.deco-1 {
  width: 120px;
  height: 120px;
  top: -40px;
  right: -30px;
}

.deco-2 {
  width: 70px;
  height: 70px;
  bottom: -20px;
  left: -15px;
}

.case-category-tag {
  position: absolute;
  bottom: 12px;
  right: 12px;
  padding: 4px 12px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
}

/* Card Body */
.case-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.case-title {
  font-size: 19px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 10px;
  line-height: 1.4;
}

.case-client {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 14px;
}

.case-desc {
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-regular);
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Metrics */
.case-metrics {
  display: flex;
  gap: 12px;
  padding: 16px 0;
  border-top: 1px solid var(--border-color);
  margin-bottom: 16px;
}

.metric-item {
  flex: 1;
  text-align: center;
}

.metric-value {
  display: block;
  font-size: 20px;
  font-weight: 800;
  color: var(--primary-color);
  line-height: 1.2;
}

.metric-label {
  display: block;
  font-size: 12px;
  color: var(--text-secondary);
  margin-top: 4px;
}

/* Footer */
.case-footer {
  margin-top: auto;
}

.view-detail {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  color: var(--primary-color);
  cursor: pointer;
  transition: gap 0.3s ease;
}

.view-detail:hover {
  gap: 12px;
}

.detail-arrow {
  font-size: 14px;
}

/* ===== Case Dialog ===== */
.case-dialog :deep(.el-dialog__body) {
  padding: 0;
}

.dialog-header {
  position: relative;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.dialog-header-deco {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
}

.dialog-header .deco-1 {
  width: 140px;
  height: 140px;
  top: -50px;
  right: -40px;
}

.dialog-header .deco-2 {
  width: 90px;
  height: 90px;
  bottom: -30px;
  left: -20px;
}

.dialog-content {
  padding: 28px 32px;
}

.dialog-meta {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 28px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border-color);
}

.meta-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.meta-item .el-icon {
  font-size: 20px;
  color: var(--primary-color);
  margin-top: 2px;
  flex-shrink: 0;
}

.meta-label {
  display: block;
  font-size: 12px;
  color: var(--text-secondary);
  margin-bottom: 4px;
}

.meta-value {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}

.dialog-section {
  margin-bottom: 24px;
}

.dialog-section:last-child {
  margin-bottom: 0;
}

.dialog-section h4 {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
  padding-left: 12px;
  border-left: 3px solid var(--primary-color);
  line-height: 1.4;
}

.dialog-section p {
  font-size: 14px;
  line-height: 1.8;
  color: var(--text-regular);
}

.dialog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.dialog-metrics {
  display: flex;
  gap: 16px;
}

.dialog-metric {
  flex: 1;
  text-align: center;
  padding: 16px 12px;
  background: var(--primary-bg);
  border-radius: var(--radius-md);
}

.dialog-metric-value {
  display: block;
  font-size: 22px;
  font-weight: 800;
  color: var(--primary-color);
  line-height: 1.2;
}

.dialog-metric-label {
  display: block;
  font-size: 12px;
  color: var(--text-secondary);
  margin-top: 6px;
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

  .cases-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .dialog-meta {
    grid-template-columns: repeat(2, 1fr);
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

  .filter-tabs {
    gap: 8px;
  }

  .filter-tab {
    padding: 8px 18px;
    font-size: 13px;
  }

  .cases-grid {
    grid-template-columns: 1fr;
  }

  .case-metrics {
    flex-wrap: wrap;
    gap: 8px;
  }

  .metric-item {
    min-width: 80px;
  }

  .dialog-content {
    padding: 20px;
  }

  .dialog-meta {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .dialog-metrics {
    flex-direction: column;
    gap: 12px;
  }

  .cta-text h2 {
    font-size: 22px;
  }

  .cta-text p {
    font-size: 14px;
  }
}
</style>

<template>
  <div class="contact-page">
    <!-- Page Banner -->
    <div class="page-banner">
      <div class="container">
        <h1 class="banner-title">联系我们</h1>
        <p class="banner-subtitle">
          期待与您沟通，我们将为您提供专业的IT外包解决方案
        </p>
      </div>
    </div>

    <!-- Contact Info Cards Section -->
    <section class="section section-white">
      <div class="container">
        <div class="section-title">
          <h2>联系方式</h2>
          <span class="accent-line"></span>
          <p>您可以通过以下任意方式与我们取得联系</p>
        </div>
        <div class="info-grid">
          <div v-for="item in contactInfo" :key="item.label" class="info-card">
            <div class="info-icon">
              <el-icon :size="32">
                <component :is="item.icon" />
              </el-icon>
            </div>
            <div class="info-label">{{ item.label }}</div>
            <div class="info-value">{{ item.value }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section section-gray">
      <div class="container">
        <div class="section-title">
          <h2>常见问题</h2>
          <span class="accent-line"></span>
          <p>以下是客户经常咨询的问题，希望能为您答疑解惑</p>
        </div>
        <div class="faq-wrapper">
          <el-collapse v-model="activeNames" accordion>
            <el-collapse-item
              v-for="(faq, index) in faqList"
              :key="index"
              :title="faq.question"
              :name="String(index)"
            >
              <div class="faq-answer">{{ faq.answer }}</div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { shallowRef, reactive } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { ElMessage } from "element-plus";
import {
  Phone,
  Message,
  Location,
  ChatDotRound,
  VideoPlay,
} from "@element-plus/icons-vue";

const formRef = shallowRef<FormInstance>();

const contactInfo = shallowRef([
  { label: "联系电话", value: "13714151040", icon: Phone },
  { label: "电子邮箱", value: "coderzxs@foxmail.com", icon: Message },
  {
    label: "微信",
    value: "CoderZXS",
    icon: ChatDotRound,
  },
  { label: "抖音", value: "CoderZXS", icon: VideoPlay },
]);

const serviceOptions = shallowRef([
  "软件开发",
  "系统集成",
  "IT运维",
  "云计算",
  "数据分析",
  "网络安全",
]);

const formData = reactive({
  name: "",
  company: "",
  phone: "",
  email: "",
  serviceType: "",
  description: "",
});

const formRules: FormRules = {
  name: [{ required: true, message: "请输入您的姓名", trigger: "blur" }],
  phone: [{ required: true, message: "请输入您的联系电话", trigger: "blur" }],
  email: [
    { required: false, message: "请输入您的电子邮箱", trigger: "blur" },
    {
      type: "email",
      message: "请输入正确的邮箱格式",
      trigger: ["blur", "change"],
    },
  ],
};

const activeNames = shallowRef("0");

const faqList = shallowRef([
  {
    question: "西兴里科技主要提供哪些IT外包服务？",
    answer:
      "我们提供软件开发、系统集成、IT运维、云计算、数据分析及网络安全等全方位IT外包服务，可根据企业实际需求提供定制化解决方案，帮助企业降低IT运营成本，聚焦核心业务。",
  },
  {
    question: "合作流程是怎样的？从接触到签约一般需要多长时间？",
    answer:
      "一般流程为：初步沟通了解需求 -> 需求分析与方案设计 -> 方案评审与报价 -> 合同签订与项目启动。从首次接触到签约通常需要1-3周，具体时间取决于项目复杂度和沟通效率。我们会在收到您的咨询后1个工作日内主动与您联系。",
  },
  {
    question: "项目交付后是否提供后续技术支持和维护服务？",
    answer:
      "是的，我们为所有交付项目提供持续的技术支持与维护服务。根据合同约定，我们提供不同等级的SLA服务保障，包括日常运维、故障响应、系统升级、功能迭代等，确保系统稳定运行并持续满足业务发展需求。",
  },
  {
    question: "如何保障客户的数据安全和信息保密？",
    answer:
      "我们已通过ISO27001信息安全管理体系认证，建立了完善的数据安全管理制度。所有项目均签署保密协议（NDA），开发过程实行权限分级管理，交付后按约定销毁或归还相关数据，全方位保障客户信息安全。",
  },
  {
    question: "可以根据我们的需求定制开发吗？支持哪些技术栈？",
    answer:
      "完全可以。我们支持根据客户业务需求进行定制化开发，技术栈涵盖Java、Python、Go、Node.js等后端技术，Vue、React等前端框架，以及移动端开发、云原生、AI/大数据等前沿技术领域。我们的技术团队会根据项目特点推荐最合适的技术方案。",
  },
]);

const handleSubmit = async () => {
  if (!formRef.value) return;
  try {
    await formRef.value.validate();
    ElMessage.success(
      "提交成功！我们的专业顾问将在1个工作日内与您联系，请保持电话畅通。",
    );
    formRef.value.resetFields();
  } catch {
    ElMessage.warning("请完整填写必填项后再提交");
  }
};
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

/* Contact Info Cards */
.info-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.info-card {
  background: var(--bg-white);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 36px 24px;
  text-align: center;
  box-shadow: var(--shadow-light);
  transition: all 0.3s ease;
}

.info-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-6px);
  border-color: var(--primary-light);
}

.info-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-bg);
  border-radius: 50%;
  color: var(--primary-color);
}

.info-label {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 8px;
}

.info-value {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.5;
  word-break: break-all;
}

/* Contact Form */
.form-wrapper {
  max-width: 800px;
  margin: 0 auto;
  background: var(--bg-white);
  border-radius: var(--radius-lg);
  padding: 40px;
  box-shadow: var(--shadow-medium);
}

.contact-form :deep(.el-form-item__label) {
  font-weight: 600;
  color: var(--text-primary);
}

.submit-btn {
  width: 100%;
  font-size: 16px;
  padding: 12px 0;
}

/* Map Placeholder */
.map-placeholder {
  background: var(--primary-bg);
  border: 2px dashed var(--primary-light);
  border-radius: var(--radius-lg);
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.map-icon {
  color: var(--primary-color);
}

.map-text {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
}

.map-hint {
  font-size: 14px;
  color: var(--text-secondary);
}

/* FAQ */
.faq-wrapper {
  max-width: 800px;
  margin: 0 auto;
  background: var(--bg-white);
  border-radius: var(--radius-lg);
  padding: 8px 32px;
  box-shadow: var(--shadow-light);
}

.faq-wrapper :deep(.el-collapse-item__header) {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  height: 64px;
}

.faq-wrapper :deep(.el-collapse-item__content) {
  padding-bottom: 20px;
}

.faq-answer {
  font-size: 15px;
  line-height: 1.8;
  color: var(--text-regular);
}

/* Responsive */
@media (max-width: 992px) {
  .info-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .form-wrapper {
    padding: 30px 24px;
  }

  .form-wrapper :deep(.el-row) {
    --el-col-spacing: 0;
  }

  .form-wrapper :deep(.el-col-12) {
    max-width: 100%;
    flex: 0 0 100%;
  }
}

@media (max-width: 768px) {
  .banner-title {
    font-size: 28px;
  }

  .banner-subtitle {
    font-size: 15px;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }

  .form-wrapper {
    padding: 24px 16px;
  }

  .form-wrapper :deep(.el-form-item__label) {
    font-size: 14px;
  }

  .map-placeholder {
    height: 280px;
    padding: 20px;
  }

  .map-text {
    font-size: 15px;
    text-align: center;
  }

  .faq-wrapper {
    padding: 8px 16px;
  }

  .faq-wrapper :deep(.el-collapse-item__header) {
    font-size: 14px;
    height: 56px;
    line-height: 1.5;
  }
}
</style>

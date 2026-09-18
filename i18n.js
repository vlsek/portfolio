const translations = {
    en: {
        p_name: "Vladimir Korolev",
        p_hero_h1: "Hi, I'm Vladimir 👋",
        p_tagline: "DevOps & Infrastructure Engineer · Team Lead",
        p_tagline2: "Vibe coder & AI enthusiast",
        p_cta: "Personal Dashboard →",
        p_link_linkedin: "LinkedIn",
        p_link_habr: "Habr Career",
        p_link_telegram: "Telegram — @vsekorolev",
        p_about_h2: "About me",
        p_about_p1: "Results-driven DevOps and Infrastructure Engineer with 5+ years of experience in virtualization platforms, infrastructure monitoring, and system administration. I lead a technical support team, build knowledge bases from scratch, and run large-scale platform migrations. Comfortable with Linux, Docker, Python and automated troubleshooting to keep systems highly available.",
        p_about_p2: "Comfortable reading technical documentation and communicating in English (B2–C1). Outside of work I'm into computer graphics — advanced user of Adobe Photoshop / Illustrator, and lately a fair bit of \"vibe coding\" with AI tools. Open to relocation.",
        p_skills_h2: "Skills",
        p_experience_h2: "Experience",
        p_job1_title: "Support Team Lead",
        p_job1_meta: "RTC-DC · Full-time · Jul 2022 — Present · Moscow, Remote",
        p_job1_li1: "Lead and mentor a 6-person infrastructure support team — onboarding, training, technical interviews",
        p_job1_li2: "Orchestrated large-scale bare-metal and infrastructure migrations from oVirt and VMware to enterprise cloud virtualization platforms",
        p_job1_li3: "Run deep infrastructure diagnostics, build end-to-end bug-reporting workflows with dev teams",
        p_job1_li4: "Administer virtual networking and routing (VINS, ExtNet, VLAN)",
        p_job2_title: "Systems & Monitoring Specialist",
        p_job2_meta: "Space Operations Center · Full-time · Oct 2020 — Jul 2022 · Korolyov, Moscow · On-site",
        p_job2_li1: "Developed short- and long-term command-sequence telemetry planning for the Spektr-RG orbital astrophysics observatory",
        p_job2_li2: "Ran real-time spacecraft control sessions, managing high-load data streams",
        p_job2_li3: "Administered infrastructure monitoring (Zabbix/Grafana), built technical documentation from scratch, used LLM scripts for log parsing",
        p_education_h2: "Education",
        p_edu_school: "Moscow Aviation Institute (National Research University)",
        p_edu_meta: "Specialist Degree · Special Organizational & Technical Systems · 2015 — 2020",
        p_projects_h2: "Projects",
        p_project1_title: "Personal Life Dashboard",
        p_project1_desc: "A habit, goals and skills tracker with a points system — the thing behind the button above. Configurable daily metrics, long-term goals with stages, progress charts, and a rewards shop.",
        p_project1_tech: "Stack: Supabase (Postgres + Auth), vanilla JS, HTML/CSS",
        p_footer: "Built with HTML/CSS/JS + Supabase. Preferred contact: <a href=\"https://t.me/vsekorolev\" target=\"_blank\" rel=\"noopener\">Telegram</a>",
    },
    ru: {
        p_name: "Владимир Королев",
        p_hero_h1: "Привет, я Владимир 👋",
        p_tagline: "DevOps & Infrastructure Engineer · Team Lead",
        p_tagline2: "Vibe coder и AI-энтузиаст",
        p_cta: "Личный дашборд →",
        p_link_linkedin: "LinkedIn",
        p_link_habr: "Хабр Карьера",
        p_link_telegram: "Telegram — @vsekorolev",
        p_about_h2: "Обо мне",
        p_about_p1: "Результативный DevOps- и Infrastructure Engineer с опытом 5+ лет в платформах виртуализации, мониторинге инфраструктуры и системном администрировании. Работаю Team Lead технической поддержки — руковожу многофункциональной командой, строю базы знаний и провожу крупномасштабные миграции платформ. Уверенно работаю с Linux, Docker, Python и автоматизированным поиском неисправностей для поддержания высокой доступности систем.",
        p_about_p2: "Свободно читаю техническую документацию и общаюсь на английском (B2–C1). В качестве хобби занимаюсь компьютерной графикой — продвинутый пользователь Adobe Photoshop / Illustrator, а в последнее время ещё и вайбкодингом с AI-инструментами. Открыт к релокации.",
        p_skills_h2: "Навыки",
        p_experience_h2: "Опыт работы",
        p_job1_title: "Support Team Lead",
        p_job1_meta: "RTC-DC · Full-time · Июль 2022 — настоящее время · Москва, удалённо",
        p_job1_li1: "Руковожу и обучаю команду инфраструктурной поддержки из 6 человек — онбординг, обучение, технические собеседования",
        p_job1_li2: "Организовал крупномасштабные миграции bare-metal и инфраструктуры с oVirt и VMware на корпоративные облачные платформы виртуализации",
        p_job1_li3: "Провожу глубокую диагностику инфраструктуры, выстраиваю сквозные процессы баг-репортинга с командами разработки",
        p_job1_li4: "Администрирую виртуальные сети и маршрутизацию (VINS, ExtNet, VLAN)",
        p_job2_title: "Systems & Monitoring Specialist",
        p_job2_meta: "Space Operations Center · Full-time · Октябрь 2020 — Июль 2022 · Королев, Москва, офис",
        p_job2_li1: "Разрабатывал кратко- и долгосрочное планирование командно-телеметрических последовательностей для орбитальной астрофизической обсерватории «Спектр-РГ»",
        p_job2_li2: "Проводил сеансы управления космическим аппаратом в реальном времени, обрабатывал высоконагруженные потоки данных",
        p_job2_li3: "Администрировал мониторинг инфраструктуры (Zabbix/Grafana), с нуля выстраивал техническую документацию, использовал LLM-скрипты для разбора логов",
        p_education_h2: "Образование",
        p_edu_school: "Московский авиационный институт (национальный исследовательский университет)",
        p_edu_meta: "Диплом специалиста · Специальные организационно-технические системы · 2015 — 2020",
        p_projects_h2: "Проекты",
        p_project1_title: "Личный дашборд жизни",
        p_project1_desc: "Трекер привычек, целей и навыков с системой баллов — то, чем ты пользуешься за кнопкой выше. Настраиваемые метрики дня, долгосрочные цели с этапами, графики прогресса, магазин наград.",
        p_project1_tech: "Стек: Supabase (Postgres + Auth), vanilla JS, HTML/CSS",
        p_footer: "Собрано на HTML/CSS/JS + Supabase. Предпочтительный способ связи — <a href=\"https://t.me/vsekorolev\" target=\"_blank\" rel=\"noopener\">Telegram</a>",
    },
};

function getLang() {
    return localStorage.getItem("site_lang") || "en";
}

function setLang(lang) {
    localStorage.setItem("site_lang", lang);
    location.reload();
}

function t(key) {
    const lang = getLang();
    return (translations[lang] && translations[lang][key]) ?? translations.en[key] ?? key;
}

function applyI18n() {
    const lang = getLang();
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
        el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-html]").forEach(el => {
        el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });
}

function renderLangSwitcher(parent) {
    const wrap = document.createElement("div");
    wrap.className = "lang-switch";
    ["en", "ru"].forEach(l => {
        const btn = document.createElement("button");
        btn.className = "lang-btn" + (getLang() === l ? " active" : "");
        btn.textContent = l.toUpperCase();
        btn.dataset.lang = l;
        btn.onclick = () => setLang(l);
        wrap.appendChild(btn);
    });
    parent.appendChild(wrap);
    return wrap;
}

document.addEventListener("DOMContentLoaded", applyI18n);

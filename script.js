const storyData = [
  {
    title: 'Closing loops on hardware',
    detail: 'Designed and tuned LQR/PID controllers for motor and actuator platforms; shipped stable firmware on RTOS.',
    tags: ['Control', 'Firmware'],
  },
  {
    title: 'Sensing and estimation',
    detail: 'Built EKF/UKF pipelines for inertial + vision fusion to keep robots localized in dynamic environments.',
    tags: ['Estimation', 'Systems'],
  },
  {
    title: 'Learning for robustness',
    detail: 'Used ML models to detect anomalies and adapt gains; mixed classical control with data-driven policies.',
    tags: ['ML', 'Control'],
  },
  {
    title: 'Integration and validation',
    detail: 'Owned system bring-up, HIL, and deployment; automated tests for drivers, estimators, and control stacks.',
    tags: ['Systems', 'Firmware'],
  },
];

const projects = [
  {
    title: 'Adaptive Gimbal Controller',
    summary: 'Reduced jitter 38% by blending LQR with online disturbance estimation.',
    tags: ['Control', 'Estimation'],
    visual: 'LQR → EKF → Smooth video',
    github: 'https://github.com/yourhandle/gimbal-controller',
    more: 'https://github.com/yourhandle/gimbal-controller',
  },
  {
    title: 'Embedded Sensor Hub',
    summary: 'RTOS firmware with deterministic drivers and OTA updates for multi-sensor fusion.',
    tags: ['Firmware', 'Systems'],
    visual: 'RTOS + drivers',
    github: 'https://github.com/yourhandle/sensor-hub',
    more: 'https://github.com/yourhandle/sensor-hub',
  },
  {
    title: 'Anomaly Detection for Drives',
    summary: 'Hybrid ML model caught early bearing failures; reduced downtime by 22%.',
    tags: ['ML', 'Systems'],
    visual: 'ML · Drives',
    github: 'https://github.com/yourhandle/drive-anomaly',
    more: 'https://github.com/yourhandle/drive-anomaly',
  },
  {
    title: 'Autonomy Estimator Suite',
    summary: 'EKF/UKF toolkit with simulation hooks and deployment scripts for edge devices.',
    tags: ['Estimation', 'Control'],
    visual: 'EKF / UKF',
    github: 'https://github.com/yourhandle/estimator-suite',
    more: 'https://github.com/yourhandle/estimator-suite',
  },
];

const interests = [
  {
    title: 'Learning-based MPC',
    note: 'Blend differentiable models with classical constraints for aggressive maneuvers.',
    next: 'Prototype in simulation → deploy to embedded GPU.',
    stack: ['MPC', 'PyTorch', 'CUDA'],
  },
  {
    title: 'Self-calibrating sensor stacks',
    note: 'Automate calibration drifts with online estimators and validation routines.',
    next: 'Bench tests + field data replay.',
    stack: ['Calibration', 'Estimation', 'Testing'],
  },
  {
    title: 'Reliable OTA for robotics',
    note: 'Design safe rollouts with health checks and feature flags for fleets.',
    next: 'Experiment with A/B deployments on dev kits.',
    stack: ['Firmware', 'Systems'],
  },
  {
    title: 'On-device perception',
    note: 'Slim models for edge vision fused with inertials for robustness.',
    next: 'Quantize and profile on microcontrollers.',
    stack: ['ML', 'Vision', 'Firmware'],
  },
];

const filtersEl = document.getElementById('filters');
const projectGrid = document.getElementById('project-grid');
const timelineEl = document.getElementById('timeline');
const interestGrid = document.getElementById('interest-grid');

function renderStory() {
  storyData.forEach(({ title, detail, tags }) => {
    const item = document.createElement('div');
    item.className = 'milestone';
    item.innerHTML = `
      <div class="title">${title}</div>
      <p>${detail}</p>
      <div class="tags">${tags.map((t) => `<span class="tag">${t}</span>`).join('')}</div>
    `;
    timelineEl.appendChild(item);
  });
}

function renderProjects(activeTag = 'All') {
  projectGrid.innerHTML = '';
  const filtered = activeTag === 'All' ? projects : projects.filter((p) => p.tags.includes(activeTag));

  filtered.forEach(({ title, summary, tags, visual, github, more }) => {
    const card = document.createElement('article');
    card.className = 'card-tile';
    card.innerHTML = `
      <div class="tile-visual">${visual}</div>
      <div class="tile-body">
        <div class="tile-title">${title}</div>
        <p>${summary}</p>
        <div class="tags">${tags.map((t) => `<span class="tag">${t}</span>`).join('')}</div>
        <div class="tile-links">
          <a href="${github}" target="_blank" rel="noreferrer">GitHub</a>
          <a href="${more}" target="_blank" rel="noreferrer">More</a>
        </div>
      </div>
    `;
    projectGrid.appendChild(card);
  });
}

function renderFilters() {
  const uniqueTags = Array.from(new Set(projects.flatMap((p) => p.tags)));
  const tags = ['All', ...uniqueTags];

  tags.forEach((tag, index) => {
    const btn = document.createElement('button');
    btn.className = `filter-btn ${index === 0 ? 'active' : ''}`;
    btn.textContent = tag;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach((el) => el.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(tag);
    });
    filtersEl.appendChild(btn);
  });
}

function renderInterests() {
  interests.forEach(({ title, note, next, stack }) => {
    const card = document.createElement('article');
    card.className = 'card-tile';
    card.innerHTML = `
      <div class="tile-visual">Exploration</div>
      <div class="tile-body">
        <div class="tile-title">${title}</div>
        <p>${note}</p>
        <p class="hint">Next experiment: ${next}</p>
        <div class="tags">${stack.map((t) => `<span class="tag">${t}</span>`).join('')}</div>
      </div>
    `;
    interestGrid.appendChild(card);
  });
}

renderStory();
renderFilters();
renderProjects();
renderInterests();

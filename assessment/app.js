/* ==========================================================================
   MATH ASSESSMENT & RULED NOTEBOOK TEACHING SUITE
   Educator: Mr Ahmed Abd El-Motaal (Math Teacher & Content Creator)
   Platform: Desktop 3 • Self-Contained Educational Engine
   ========================================================================== */

// --- AUDIO SYNTHESIZER (Web Audio API) ---
window.AudioEngine = window.AudioEngine || {
  ctx: null,
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  },
  playTone(freq, type, duration, gainVal = 0.1) {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  },
  click() { this.playTone(600, 'sine', 0.08, 0.05); },
  success() {
    this.playTone(523.25, 'triangle', 0.12, 0.12);
    setTimeout(() => this.playTone(659.25, 'triangle', 0.18, 0.12), 100);
    setTimeout(() => this.playTone(783.99, 'triangle', 0.28, 0.14), 220);
  },
  wrong() {
    this.playTone(220, 'sawtooth', 0.18, 0.1);
    setTimeout(() => this.playTone(180, 'sawtooth', 0.25, 0.1), 120);
  }
};

/* ==========================================================================
   ASSESSMENT APP CONTROLLER
   ========================================================================== */
const AssessmentApp = {
  currentStage: 'prep3',      // 'prep3', 'prep1', 'grade5'
  currentSection: 'assessments', // 'assessments', 'reviews', 'lessons'
  currentWeek: 'prep3_week4', // default to Prep 3 Week 4 (Quadratic Functions)
  currentGroup: 'groupA',
  currentQuestionIndex: 0,
  userSelectedOptions: {}, // { questionId: 'key' }
  canvasBuffers: {},       // { questionId: dataUrl }
  canvasHistory: {},       // { questionId: [snapshots] }
  canvasRedoStack: {},     // { questionId: [snapshots] }

  // Canvas Drawing State
  canvasEl: null,
  ctx: null,
  isDrawing: false,
  currentColor: '#182038',
  currentStrokeWidth: 4,
  currentTool: 'pen',
  isEraser: false,
  prevX: 0,
  prevY: 0,
  lastMidX: 0,
  lastMidY: 0,
  hasMoved: false,
  canvasHeight: 290,

  // Timer State
  timerDuration: 60,
  timerRemaining: 60,
  timerInterval: null,
  isTimerRunning: false,

  init() {
    // Parse URL parameter for week (?week=prep3_week4, ?week=prep3_week3, ?week=prep3_week2, ?week=4, ?week=3, etc.)
    const urlParams = new URLSearchParams(window.location.search);
    const weekParam = urlParams.get('week');
    const stageParam = urlParams.get('stage');
    const sectionParam = urlParams.get('section');

    if (sectionParam === 'reviews' || weekParam === 'october' || weekParam === 'october_revision' || weekParam === 'prep3_october' || weekParam === 'prep3_october_revision') {
      this.currentSection = 'reviews';
      this.currentWeek = 'prep3_october_revision';
      this.currentStage = 'prep3';
    } else if (weekParam) {
      this.currentSection = 'assessments';
      if (WEEKS_DATA[weekParam]) {
        this.currentWeek = weekParam;
      } else if (weekParam === '1' || weekParam === 'prep3_1' || weekParam === '2' || weekParam === 'prep3_2') {
        this.currentWeek = 'prep3_week2'; // Prep 3 assessments officially start from Week 2
      } else if (weekParam === '3' || weekParam === 'prep3_3') {
        this.currentWeek = 'prep3_week3';
      } else if (weekParam === '4' || weekParam === 'prep3_4' || weekParam === 'prep3_week4') {
        this.currentWeek = 'prep3_week4';
      } else if (weekParam === '5' || weekParam === 'prep3_5' || weekParam === 'prep3_week5') {
        this.currentWeek = 'prep3_week5';
      } else if (weekParam === '6' || weekParam === 'prep3_6' || weekParam === 'prep3_week6') {
        this.currentWeek = 'prep3_week6';
      } else if (weekParam === 'prep1_2' || weekParam === 'prep1_week2') {
        this.currentWeek = 'week2';
      } else if (weekParam === 'prep1_3' || weekParam === 'prep1_week3') {
        this.currentWeek = 'week3';
      } else if (weekParam === 'prep1_4' || weekParam === 'prep1_week4') {
        this.currentWeek = 'week4';
      } else if (weekParam === 'prep1_5' || weekParam === 'prep1_week5') {
        this.currentWeek = 'week5';
      } else {
        const normalized = weekParam.startsWith('week') ? weekParam : 'week' + weekParam;
        this.currentWeek = WEEKS_DATA[normalized] ? normalized : 'prep3_week4';
      }
      this.currentStage = this.currentWeek.startsWith('prep3_') ? 'prep3' : 'prep1';
    } else {
      this.currentSection = 'assessments';
      this.currentWeek = 'prep3_week4';
      this.currentStage = 'prep3';
    }

    if (stageParam && ['prep3', 'prep1', 'grade5'].includes(stageParam)) {
      this.currentStage = stageParam;
    }
    if (sectionParam && ['assessments', 'reviews', 'lessons'].includes(sectionParam)) {
      this.currentSection = sectionParam;
    }

    const groupParam = urlParams.get('group');
    if (groupParam && ['groupA', 'groupB', 'groupC'].includes(groupParam)) {
      this.currentGroup = groupParam;
    }

    const qParam = urlParams.get('q');
    if (qParam !== null && !isNaN(parseInt(qParam))) {
      this.currentQuestionIndex = Math.max(0, parseInt(qParam) - 1);
    }

    this.canvasEl = document.getElementById('notebook-canvas');
    if (this.canvasEl) {
      this.ctx = this.canvasEl.getContext('2d', { willReadFrequently: true });
      this.initCanvasEvents();
      this.resizeCanvas();
    }

    document.querySelectorAll('.group-tab-btn').forEach(btn => btn.classList.remove('active'));
    const activeGroupBtn = document.getElementById(`tab${this.currentGroup.charAt(0).toUpperCase() + this.currentGroup.slice(1)}`);
    if (activeGroupBtn) activeGroupBtn.classList.add('active');

    this.updateWeekButtons();
    this.renderQuestion();

    const solParam = urlParams.get('sol');
    if (solParam === '1' || solParam === 'true') {
      this.toggleModelSolution();
    }

    // Parse Studio Mode & Pure Isolation Parameters
    const studioParam = urlParams.get('studio');
    const modeParam = urlParams.get('mode');
    const pureParam = urlParams.get('pure');
    const onlyParam = urlParams.get('only');
    const lockParam = urlParams.get('locked');
    const studentParam = urlParams.get('student');

    const isStudioRequested = studioParam === '1' || studioParam === 'true' || modeParam === 'studio';
    // When studio=true is provided, or pure=true / only=true, isolate the assessment completely
    const isPureRequested = isStudioRequested || pureParam === '1' || pureParam === 'true' || onlyParam === '1' || onlyParam === 'true' || lockParam === '1' || lockParam === 'true' || studentParam === '1' || studentParam === 'true';

    if (isStudioRequested) {
      document.body.classList.add('studio-recording-mode');
      const fab = document.getElementById('floatingStudioModeFab');
      if (fab) fab.classList.add('active');
      const btn = document.getElementById('studioModeBtn');
      if (btn) {
        btn.classList.add('active');
        const span = btn.querySelector('span');
        if (span) span.innerText = 'Exit Studio';
      }

      if (isPureRequested) {
        document.body.classList.add('pure-assessment-mode');
        const exitBtn = document.getElementById('exitStudioBtn');
        if (exitBtn) exitBtn.style.setProperty('display', 'none', 'important');
      } else {
        const exitBtn = document.getElementById('exitStudioBtn');
        if (exitBtn) exitBtn.style.display = 'inline-flex';
      }

      setTimeout(() => {
        this.resizeCanvas(true);
      }, 100);
    }

    // Listen to window resize
    window.addEventListener('resize', () => {
      this.resizeCanvas(true);
    });

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (window.InfiniteWhiteboard && InfiniteWhiteboard.isOpen) return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        this.nextQuestion();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        this.prevQuestion();
      } else if (e.key.toLowerCase() === 's' && !e.altKey && !e.ctrlKey) {
        this.toggleModelSolution();
      } else if (e.key.toLowerCase() === 't' && !e.altKey && !e.ctrlKey) {
        this.toggleTimer();
      }
    });

    // Close Jump Menu Popover on click outside
    document.addEventListener('click', (e) => {
      const container = document.querySelector('.jump-menu-container');
      if (container && !container.contains(e.target)) {
        this.closeJumpMenu();
      }
    });

    console.log('✅ Math Assessment Suite Initialized for Mr Ahmed Abd El-Motaal');
  },

  getActiveGroup() {
    const weekObj = WEEKS_DATA[this.currentWeek] || WEEKS_DATA.prep3_week1 || WEEKS_DATA.week2;
    return weekObj[this.currentGroup] || weekObj.groupA;
  },

  getCurrentQuestion() {
    const group = this.getActiveGroup();
    return group.questions[this.currentQuestionIndex];
  },

  switchWeek(weekKey) {
    if (this.currentWeek === weekKey) return;
    this.saveCurrentCanvas();
    this.currentWeek = weekKey;
    this.currentQuestionIndex = 0;
    this.updateWeekButtons();
    if (window.AudioEngine) AudioEngine.click();
    this.renderQuestion();
  },

  handleStageSelect(stage, weekKey) {
    if (!weekKey) return;
    this.currentSection = 'assessments';
    this.switchWeek(weekKey);
  },

  setStage(stageKey) {
    if (!stageKey) return;
    this.currentStage = stageKey;
    AudioEngine.click();

    if (stageKey === 'grade5') {
      window.location.href = '../index.html?stage=grade5&lesson=place_value';
      return;
    }

    const stageSelect = document.getElementById('masterStageSelect');
    if (stageSelect && stageSelect.value !== stageKey) stageSelect.value = stageKey;

    if (this.currentSection === 'assessments') {
      if (stageKey === 'prep3' && !this.currentWeek.startsWith('prep3_')) {
        this.switchWeek('prep3_week4');
      } else if (stageKey === 'prep1' && this.currentWeek.startsWith('prep3_')) {
        this.switchWeek('week2');
      }
    }

    this.updateWeekButtons();
    this.updateHubVisibility();
  },

  setSection(sectionKey) {
    if (!sectionKey) return;
    this.currentSection = sectionKey;
    AudioEngine.click();

    if (sectionKey === 'lessons') {
      window.location.href = `../index.html?stage=${this.currentStage}`;
      return;
    }

    const sectionSelect = document.getElementById('masterSectionSelect');
    if (sectionSelect && sectionSelect.value !== sectionKey) sectionSelect.value = sectionKey;

    if (sectionKey === 'assessments') {
      if (this.currentWeek === 'prep3_october_revision') {
        this.switchWeek(this.currentStage === 'prep3' ? 'prep3_week4' : 'week2');
      }
    }

    this.updateWeekButtons();
    this.updateHubVisibility();
  },

  openOctoberNotebook() {
    AudioEngine.click();
    this.currentSection = 'reviews';
    this.currentStage = 'prep3';
    this.switchWeek('prep3_october_revision');
    this.updateHubVisibility();

    const navBar = document.querySelector('.assessment-nav-bar');
    if (navBar) {
      navBar.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  },

  updateHubVisibility() {
    const weeklyHub = document.getElementById('weeklyAssessmentsHub');
    const reviewsSec = document.getElementById('monthlyReviewsSection');
    const stageSelect = document.getElementById('masterStageSelect');
    const sectionSelect = document.getElementById('masterSectionSelect');
    const statusText = document.getElementById('masterHubStatusText');

    if (stageSelect) stageSelect.value = this.currentStage;
    if (sectionSelect) sectionSelect.value = this.currentSection;

    if (this.currentSection === 'reviews') {
      if (weeklyHub) weeklyHub.style.display = 'none';
      if (reviewsSec) reviewsSec.style.display = 'block';
      if (statusText) statusText.innerText = `${this.currentStage === 'prep3' ? 'Prep 3' : 'Prep 1'} • مراجعات الشهور والنهائية`;
    } else {
      if (weeklyHub) weeklyHub.style.display = 'block';
      if (reviewsSec) reviewsSec.style.display = 'none';
      if (statusText) statusText.innerText = `${this.currentStage === 'prep3' ? 'Prep 3 • 5 أسابيع' : 'Prep 1 • 4 أسابيع'} (التقييمات الأسبوعية)`;
    }
  },

  updateWeekButtons() {
    const isPrep3 = this.currentWeek.startsWith('prep3_');
    const isPrep1 = !isPrep3;
    this.currentStage = isPrep3 ? 'prep3' : 'prep1';

    const isReview = (this.currentWeek === 'prep3_october_revision');
    if (isReview) {
      this.currentSection = 'reviews';
    }

    const selectPrep3 = document.getElementById('selectPrep3Weeks');
    const selectPrep1 = document.getElementById('selectPrep1Weeks');
    const cardPrep3 = document.getElementById('cardStagePrep3');
    const cardPrep1 = document.getElementById('cardStagePrep1');
    const badgePrep3 = document.getElementById('prep3ActiveBadge');
    const badgePrep1 = document.getElementById('prep1ActiveBadge');

    if (isPrep3) {
      if (cardPrep3) cardPrep3.classList.add('active');
      if (cardPrep1) cardPrep1.classList.remove('active');
      if (badgePrep3) badgePrep3.style.display = 'inline-flex';
      if (badgePrep1) badgePrep1.style.display = 'none';
      if (selectPrep3 && !isReview) selectPrep3.value = this.currentWeek;
      if (selectPrep1) selectPrep1.value = "";
    } else {
      if (cardPrep1) cardPrep1.classList.add('active');
      if (cardPrep3) cardPrep3.classList.remove('active');
      if (badgePrep1) badgePrep1.style.display = 'inline-flex';
      if (badgePrep3) badgePrep3.style.display = 'none';
      if (selectPrep1) selectPrep1.value = this.currentWeek;
      if (selectPrep3) selectPrep3.value = "";
    }

    this.updateHubVisibility();

    const stageBadge = document.getElementById('headerStageBadge');
    if (WEEKS_DATA[this.currentWeek]) {
      document.title = `${WEEKS_DATA[this.currentWeek].title} • Mr Ahmed Abd El-Motaal`;
      if (stageBadge) {
        stageBadge.innerHTML = `<i class="fa-solid fa-graduation-cap"></i> ${WEEKS_DATA[this.currentWeek].stageName}`;
      }
    }
  },

  switchGroup(groupId) {
    if (this.currentGroup === groupId) return;
    this.saveCurrentCanvas();
    this.currentGroup = groupId;
    this.currentQuestionIndex = 0;
    this.closeJumpMenu();

    document.querySelectorAll('.group-tab-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`tab${groupId.charAt(0).toUpperCase() + groupId.slice(1)}`);
    if (activeBtn) activeBtn.classList.add('active');

    if (window.AudioEngine) AudioEngine.click();
    this.renderQuestion();
  },

  cycleGroup() {
    const groups = ['groupA', 'groupB', 'groupC'];
    const nextIdx = (groups.indexOf(this.currentGroup) + 1) % groups.length;
    this.switchGroup(groups[nextIdx]);
  },

  goToQuestion(index) {
    if (this.currentQuestionIndex === index) {
      this.closeJumpMenu();
      return;
    }
    this.saveCurrentCanvas();
    this.currentQuestionIndex = index;
    this.closeJumpMenu();
    if (window.AudioEngine) AudioEngine.click();
    this.renderQuestion();
  },

  nextQuestion() {
    const group = this.getActiveGroup();
    if (this.currentQuestionIndex < group.questions.length - 1) {
      this.goToQuestion(this.currentQuestionIndex + 1);
    } else {
      this.cycleGroup();
    }
  },

  prevQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.goToQuestion(this.currentQuestionIndex - 1);
    }
  },

  setQuestionFilter(filterType) {
    const group = this.getActiveGroup();
    if (!group || !group.questions) return;

    if (filterType === 'mcq') {
      this.goToQuestion(0);
    } else if (filterType === 'problem') {
      const firstProbIdx = group.questions.findIndex(q => q.type !== 'mcq');
      if (firstProbIdx !== -1) {
        this.goToQuestion(firstProbIdx);
      }
    } else {
      this.renderQuestion();
    }
  },

  toggleJumpMenu(e) {
    if (e) e.stopPropagation();
    const flyout = document.getElementById('jumpPopoverFlyout');
    const trigger = document.getElementById('jumpMenuTriggerBtn');
    if (!flyout) return;

    const isOpen = flyout.style.display !== 'none';
    if (isOpen) {
      flyout.style.display = 'none';
      if (trigger) trigger.classList.remove('active');
    } else {
      this.renderJumpMenu();
      flyout.style.display = 'block';
      if (trigger) trigger.classList.add('active');
    }
  },

  closeJumpMenu() {
    const flyout = document.getElementById('jumpPopoverFlyout');
    const trigger = document.getElementById('jumpMenuTriggerBtn');
    if (flyout) flyout.style.display = 'none';
    if (trigger) trigger.classList.remove('active');
  },

  renderJumpMenu() {
    const flyoutBody = document.getElementById('jumpPopoverBody');
    const statsEl = document.getElementById('jumpPopoverStats');
    const group = this.getActiveGroup();
    if (!flyoutBody || !group || !group.questions) return;

    const total = group.questions.length;
    if (statsEl) statsEl.innerText = `${total} Questions`;

    const mcqs = [];
    const problems = [];

    group.questions.forEach((q, idx) => {
      if (q.type === 'mcq') {
        mcqs.push({ q, idx });
      } else {
        problems.push({ q, idx });
      }
    });

    let html = '';

    if (mcqs.length > 0) {
      html += `
        <div class="jump-section-block">
          <div class="jump-section-title">
            <i class="fa-solid fa-list-check" style="color:#6c5ce7;"></i>
            <span>Multiple Choice Questions (${mcqs.length})</span>
          </div>
          <div class="jump-pill-grid">
            ${mcqs.map(item => {
              const isActive = item.idx === this.currentQuestionIndex ? 'active' : '';
              const hasDraw = !!(this.canvasBuffers[item.q.id]);
              return `<button class="jump-pill-btn ${isActive} ${hasDraw ? 'has-draw' : ''}" onclick="AssessmentApp.goToQuestion(${item.idx})" title="Question ${item.q.questionNum}">Q${item.q.questionNum}</button>`;
            }).join('')}
          </div>
        </div>
      `;
    }

    if (problems.length > 0) {
      html += `
        <div class="jump-section-block">
          <div class="jump-section-title">
            <i class="fa-solid fa-pen-ruler" style="color:#00b894;"></i>
            <span>Essay & Word Problems (${problems.length})</span>
          </div>
          <div class="jump-pill-grid">
            ${problems.map(item => {
              const isActive = item.idx === this.currentQuestionIndex ? 'active' : '';
              const hasDraw = !!(this.canvasBuffers[item.q.id]);
              return `<button class="jump-pill-btn ${isActive} ${hasDraw ? 'has-draw' : ''}" onclick="AssessmentApp.goToQuestion(${item.idx})" title="Question ${item.q.questionNum}">Q${item.q.questionNum}</button>`;
            }).join('')}
          </div>
        </div>
      `;
    }

    flyoutBody.innerHTML = html;
  },

  renderQuestion() {
    const q = this.getCurrentQuestion();
    const group = this.getActiveGroup();
    const total = group && group.questions ? group.questions.length : 0;
    const curr = this.currentQuestionIndex;

    // 1. Update Pill Tag
    const pillText = document.getElementById('cardPillText');
    if (pillText) {
      pillText.innerText = `${group.title} • Q${q.questionNum}: ${q.title}`;
    }

    // 1b. Update Card Navigation & Counter Controls
    const cardCurrent = document.getElementById('cardCurrentQNum');
    const cardTotal = document.getElementById('cardTotalQNum');
    if (cardCurrent) cardCurrent.innerText = curr + 1;
    if (cardTotal) cardTotal.innerText = total;

    const prevBtn = document.getElementById('cardPrevQBtn');
    const nextBtn = document.getElementById('cardNextQBtn');
    if (prevBtn) prevBtn.disabled = (curr === 0);
    if (nextBtn) nextBtn.disabled = (curr === total - 1);

    // 1c. Update Stepper Progress Bar & Val
    const pct = total > 0 ? Math.round(((curr + 1) / total) * 100) : 0;
    const pBar = document.getElementById('stepperProgressBar');
    if (pBar) pBar.style.width = pct + '%';
    const pVal = document.getElementById('stepperProgressVal');
    if (pVal) pVal.innerText = `${curr + 1}/${total}`;

    // 1d. Update Sub-Filter Pills (visible only when questions > 15, e.g. October Revision)
    const filterPills = document.getElementById('stepperFilterPills');
    if (filterPills) {
      filterPills.style.display = total > 15 ? 'inline-flex' : 'none';
      const allCount = document.getElementById('filterCountAll');
      if (allCount) allCount.innerText = total;

      filterPills.querySelectorAll('.stepper-filter-btn').forEach(btn => {
        const type = btn.getAttribute('data-filter');
        if (type === 'all') {
          btn.classList.toggle('active', false);
        } else if (type === 'mcq') {
          btn.classList.toggle('active', curr < 18);
        } else if (type === 'problem') {
          btn.classList.toggle('active', curr >= 18);
        }
      });
    }

    // 2. Update Question Stepper (Dynamic Focus Flow Ribbon)
    const stepperContainer = document.getElementById('questionStepperRow');
    if (stepperContainer && group.questions) {
      if (total <= 7) {
        stepperContainer.innerHTML = group.questions.map((qItem, idx) => {
          const typeLabel = qItem.type === 'mcq' ? 'Choose' : 'Problem';
          const isActive = idx === curr ? 'active' : '';
          const hasDraw = !!(this.canvasBuffers[qItem.id]);
          return `<button class="q-step-btn ${isActive} ${hasDraw ? 'has-draw' : ''}" onclick="AssessmentApp.goToQuestion(${idx})" title="Question ${qItem.questionNum} (${typeLabel})">${qItem.questionNum}</button>`;
        }).join('');
      } else {
        // Sliding window around curr (5 to 7 buttons)
        let itemsHtml = '';
        let startIdx = Math.max(0, curr - 2);
        let endIdx = Math.min(total - 1, curr + 2);

        if (curr <= 2) {
          startIdx = 0;
          endIdx = Math.min(total - 1, 4);
        } else if (curr >= total - 3) {
          startIdx = Math.max(0, total - 5);
          endIdx = total - 1;
        }

        // First button
        if (startIdx > 0) {
          const q0 = group.questions[0];
          const hasDraw0 = !!(this.canvasBuffers[q0.id]);
          itemsHtml += `<button class="q-step-btn ${curr === 0 ? 'active' : ''} ${hasDraw0 ? 'has-draw' : ''}" onclick="AssessmentApp.goToQuestion(0)" title="Question 1">1</button>`;
          if (startIdx > 1) {
            itemsHtml += `<span class="q-step-ellipsis">•••</span>`;
          }
        }

        // Neighborhood buttons
        for (let i = startIdx; i <= endIdx; i++) {
          const qItem = group.questions[i];
          const isActive = i === curr ? 'active' : '';
          const hasDraw = !!(this.canvasBuffers[qItem.id]);
          const typeLabel = qItem.type === 'mcq' ? 'Choose' : 'Problem';
          itemsHtml += `<button class="q-step-btn ${isActive} ${hasDraw ? 'has-draw' : ''}" onclick="AssessmentApp.goToQuestion(${i})" title="Question ${qItem.questionNum} (${typeLabel})">${qItem.questionNum}</button>`;
        }

        // Last button
        if (endIdx < total - 1) {
          if (endIdx < total - 2) {
            itemsHtml += `<span class="q-step-ellipsis">•••</span>`;
          }
          const qLast = group.questions[total - 1];
          const hasDrawLast = !!(this.canvasBuffers[qLast.id]);
          itemsHtml += `<button class="q-step-btn ${curr === total - 1 ? 'active' : ''} ${hasDrawLast ? 'has-draw' : ''}" onclick="AssessmentApp.goToQuestion(${total - 1})" title="Question ${qLast.questionNum}">${qLast.questionNum}</button>`;
        }

        stepperContainer.innerHTML = itemsHtml;
      }
    }

    // 3. Update Category & Statement
    const catLabel = document.getElementById('questionCategoryLabel');
    if (catLabel) catLabel.innerText = q.category;

    const statementEl = document.getElementById('questionStatementText');
    if (statementEl) {
      statementEl.innerHTML = q.prompt;
    }

    // 4. Render MCQ Options (or hide if word problem)
    const mcqWrapper = document.getElementById('mcqOptionsWrapper');
    if (mcqWrapper) {
      if (q.type === 'mcq' && q.options) {
        mcqWrapper.style.display = 'grid';
        mcqWrapper.innerHTML = q.options.map(opt => {
          const isSelected = this.userSelectedOptions[q.id] === opt.key;
          let extraClass = '';
          if (isSelected) {
            extraClass = opt.isCorrect ? 'correct' : 'incorrect';
          }
          return `
            <div class="mcq-option-card ${extraClass}" onclick="AssessmentApp.selectOption('${q.id}', '${opt.key}')">
              <span class="mcq-option-letter">${opt.key.toUpperCase()}</span>
              <span class="mcq-option-text">${opt.text}</span>
            </div>
          `;
        }).join('');
      } else {
        mcqWrapper.style.display = 'none';
        mcqWrapper.innerHTML = '';
      }
    }

    // 5. Render Model Solution (keep closed by default)
    const solDrawer = document.getElementById('modelSolutionContent');
    const solBtn = document.getElementById('btnToggleModelSolution');
    if (solDrawer) {
      solDrawer.classList.remove('open');
      solDrawer.innerHTML = q.modelSolution;
    }
    if (solBtn) {
      solBtn.innerHTML = '<i class="fa-solid fa-eye"></i> <span>Show Model Solution</span>';
    }

    // 6. Restore Canvas Drawing for this Question
    this.restoreCanvasForQuestion(q.id);

    // 7. Render KaTeX Math
    this.renderMath();

    // 8. Reset timer for current question
    this.resetTimerDisplay();
  },

  renderMath() {
    if (window.renderMathInElement) {
      const card = document.getElementById('activeQuestionCard');
      if (card) {
        try {
          renderMathInElement(card, {
            delimiters: [
              { left: '$$', right: '$$', display: true },
              { left: '\\[', right: '\\]', display: true },
              { left: '\\(', right: '\\)', display: false },
              { left: '$', right: '$', display: false }
            ],
            throwOnError: false
          });
        } catch (e) {
          console.warn('KaTeX render error:', e);
        }
      }
    }
  },

  selectOption(questionId, optionKey) {
    const q = this.getCurrentQuestion();
    if (q.id !== questionId || q.type !== 'mcq') return;

    this.userSelectedOptions[questionId] = optionKey;
    const selectedOpt = q.options.find(o => o.key === optionKey);

    if (window.AudioEngine) {
      if (selectedOpt && selectedOpt.isCorrect) {
        AudioEngine.success();
      } else {
        AudioEngine.wrong();
      }
    }

    const mcqWrapper = document.getElementById('mcqOptionsWrapper');
    if (mcqWrapper) {
      mcqWrapper.querySelectorAll('.mcq-option-card').forEach((card, idx) => {
        const opt = q.options[idx];
        card.classList.remove('correct', 'incorrect');
        if (opt.key === optionKey) {
          card.classList.add(opt.isCorrect ? 'correct' : 'incorrect');
        }
      });
    }
  },

  toggleModelSolution() {
    const solDrawer = document.getElementById('modelSolutionContent');
    const solBtn = document.getElementById('btnToggleModelSolution');
    if (!solDrawer || !solBtn) return;

    const isOpen = solDrawer.classList.contains('open');
    if (isOpen) {
      solDrawer.classList.remove('open');
      solBtn.innerHTML = '<i class="fa-solid fa-eye"></i> <span>Show Model Solution</span>';
    } else {
      solDrawer.classList.add('open');
      solBtn.innerHTML = '<i class="fa-solid fa-eye-slash"></i> <span>Hide Model Solution</span>';
      this.renderMath();
    }
    if (window.AudioEngine) AudioEngine.click();
  },

  resetCurrentQuestion() {
    const q = this.getCurrentQuestion();
    delete this.userSelectedOptions[q.id];
    this.clearCurrentScratchpad();
    this.resetTimerDisplay();
    this.renderQuestion();
    if (window.AudioEngine) AudioEngine.click();
  },

  /* ==========================================================================
     NOTEBOOK CANVAS ENGINE (STYLUS / PALM REJECTION / DRAWING)
     ========================================================================== */
  initCanvasEvents() {
    const c = this.canvasEl;
    if (!c) return;

    c.setAttribute('draggable', 'false');
    c.addEventListener('contextmenu', (e) => e.preventDefault());
    c.addEventListener('selectstart', (e) => e.preventDefault());

    c.addEventListener('pointerdown', (e) => this.startDraw(e));
    c.addEventListener('pointermove', (e) => this.draw(e));
    c.addEventListener('pointerup', (e) => this.stopDraw(e));
    c.addEventListener('pointercancel', (e) => this.stopDraw(e));

    c.addEventListener('touchstart', (e) => e.preventDefault(), { passive: false });
    c.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
  },

  resizeCanvas(restore = false) {
    if (!this.canvasEl || !this.ctx) return;
    const wrap = document.getElementById('notebookPaperWrapper');
    if (!wrap) return;

    const dpr = window.devicePixelRatio || 1;
    const width = wrap.clientWidth || 800;
    const height = this.canvasHeight;

    let memCanvas = null;
    let prevLogicalW = width;
    let prevLogicalH = height;

    if (restore && this.canvasEl.width > 0 && this.canvasEl.height > 0) {
      prevLogicalW = this.canvasEl.width / dpr;
      prevLogicalH = this.canvasEl.height / dpr;
      memCanvas = document.createElement('canvas');
      memCanvas.width = this.canvasEl.width;
      memCanvas.height = this.canvasEl.height;
      const memCtx = memCanvas.getContext('2d');
      memCtx.drawImage(this.canvasEl, 0, 0);
    }

    wrap.style.height = height + 'px';

    this.canvasEl.width = width * dpr;
    this.canvasEl.height = height * dpr;
    this.canvasEl.style.width = width + 'px';
    this.canvasEl.style.height = height + 'px';

    this.ctx.scale(dpr, dpr);
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';

    if (memCanvas) {
      this.ctx.drawImage(memCanvas, 0, 0, prevLogicalW, prevLogicalH);
    }
  },

  adjustCanvasHeight(delta) {
    if (!this.canvasEl || !this.ctx) return;
    const wrap = document.getElementById('notebookPaperWrapper');
    if (!wrap) return;

    const currentHeight = this.canvasHeight;
    const newHeight = Math.max(200, Math.min(1200, currentHeight + delta));
    if (newHeight === currentHeight) return;

    const dpr = window.devicePixelRatio || 1;
    const width = wrap.clientWidth || 800;

    // Snapshot existing drawing before canvas dimensions change
    const memCanvas = document.createElement('canvas');
    memCanvas.width = this.canvasEl.width;
    memCanvas.height = this.canvasEl.height;
    const memCtx = memCanvas.getContext('2d');
    memCtx.drawImage(this.canvasEl, 0, 0);

    this.canvasHeight = newHeight;
    wrap.style.height = newHeight + 'px';

    this.canvasEl.width = width * dpr;
    this.canvasEl.height = newHeight * dpr;
    this.canvasEl.style.width = width + 'px';
    this.canvasEl.style.height = newHeight + 'px';

    this.ctx.scale(dpr, dpr);
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';

    // Draw the previous drawing at exact 1:1 scale (width x currentHeight) — NO STRETCHING!
    this.ctx.drawImage(memCanvas, 0, 0, width, currentHeight);

    // Save updated buffer so changes persist
    this.saveCurrentCanvas();

    if (window.AudioEngine) AudioEngine.click();
  },

  startDraw(e) {
    // 1. REJECT FINGER TOUCH (Apple Pencil / Stylus & Mouse ONLY)
    // Prevents accidental finger writing and acts as True Palm Rejection
    if (e.pointerType === 'touch') {
      e.preventDefault();
      return;
    }

    if (window.getSelection) {
      try { window.getSelection().removeAllRanges(); } catch (err) {}
    }

    e.preventDefault();
    if (!this.ctx || !this.canvasEl) return;

    this.isDrawing = true;
    try {
      this.canvasEl.setPointerCapture(e.pointerId);
    } catch (err) {}

    const q = this.getCurrentQuestion();
    if (!this.canvasHistory[q.id]) this.canvasHistory[q.id] = [];
    if (!this.canvasRedoStack[q.id]) this.canvasRedoStack[q.id] = [];

    const snapshot = this.ctx.getImageData(0, 0, this.canvasEl.width, this.canvasEl.height);
    this.canvasHistory[q.id].push(snapshot);
    if (this.canvasHistory[q.id].length > 25) this.canvasHistory[q.id].shift();
    this.canvasRedoStack[q.id] = [];

    const rect = this.canvasEl.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    this.prevX = x;
    this.prevY = y;
    this.lastMidX = x;
    this.lastMidY = y;
    this.hasMoved = false;

    let strokeW = this.currentStrokeWidth;
    if (e.pointerType === 'pen' && typeof e.pressure === 'number' && e.pressure > 0) {
      strokeW = Math.max(1, strokeW * (0.4 + 1.2 * e.pressure));
    }

    this.ctx.save();
    if (this.isEraser) {
      this.ctx.globalCompositeOperation = 'destination-out';
      this.ctx.lineWidth = this.currentStrokeWidth * 4;
    } else {
      this.ctx.globalCompositeOperation = 'source-over';
      this.ctx.strokeStyle = this.currentColor;
      this.ctx.fillStyle = this.currentColor;
      this.ctx.lineWidth = strokeW;
    }

    this.ctx.beginPath();
    this.ctx.arc(x, y, this.isEraser ? strokeW * 2 : strokeW / 2, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.restore();
  },

  draw(e) {
    // 1. REJECT FINGER TOUCH (Apple Pencil / Stylus & Mouse ONLY)
    if (e.pointerType === 'touch') {
      e.preventDefault();
      return;
    }

    if (!this.isDrawing) return;
    e.preventDefault();

    const rect = this.canvasEl.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = (this.prevX + x) / 2;
    const midY = (this.prevY + y) / 2;

    let strokeW = this.currentStrokeWidth;
    if (e.pointerType === 'pen' && typeof e.pressure === 'number' && e.pressure > 0) {
      strokeW = Math.max(1, strokeW * (0.4 + 1.2 * e.pressure));
    }

    this.ctx.save();
    if (this.isEraser) {
      this.ctx.globalCompositeOperation = 'destination-out';
      this.ctx.lineWidth = this.currentStrokeWidth * 4;
    } else {
      this.ctx.globalCompositeOperation = 'source-over';
      this.ctx.strokeStyle = this.currentColor;
      this.ctx.lineWidth = strokeW;
    }

    this.ctx.beginPath();
    if (!this.hasMoved) {
      this.ctx.moveTo(this.prevX, this.prevY);
      this.ctx.lineTo(midX, midY);
    } else {
      this.ctx.moveTo(this.lastMidX, this.lastMidY);
      this.ctx.quadraticCurveTo(this.prevX, this.prevY, midX, midY);
    }
    this.ctx.stroke();
    this.ctx.restore();

    this.lastMidX = midX;
    this.lastMidY = midY;
    this.prevX = x;
    this.prevY = y;
    this.hasMoved = true;
  },

  stopDraw(e) {
    if (e && e.pointerType === 'touch') {
      if (e.preventDefault) e.preventDefault();
      return;
    }

    if (!this.isDrawing) return;
    if (e) e.preventDefault();
    this.isDrawing = false;
    if (e && e.pointerId) {
      try {
        if (this.canvasEl.hasPointerCapture(e.pointerId)) {
          this.canvasEl.releasePointerCapture(e.pointerId);
        }
      } catch (err) {}
    }

    this.saveCurrentCanvas();

    const stepperContainer = document.getElementById('questionStepperRow');
    if (stepperContainer) {
      const activeStepBtn = stepperContainer.children[this.currentQuestionIndex];
      if (activeStepBtn) activeStepBtn.classList.add('has-draw');
    }
  },

  saveCurrentCanvas() {
    if (!this.canvasEl) return;
    const q = this.getCurrentQuestion();
    if (!q) return;
    try {
      this.canvasBuffers[q.id] = this.canvasEl.toDataURL();
    } catch (err) {
      console.warn('Canvas save error:', err);
    }
  },

  restoreCanvasForQuestion(questionId) {
    if (!this.ctx || !this.canvasEl) return;
    const wrap = document.getElementById('notebookPaperWrapper');
    const width = wrap ? wrap.clientWidth : 800;
    const height = this.canvasHeight;

    this.ctx.clearRect(0, 0, width, height);

    const savedData = this.canvasBuffers[questionId];
    if (savedData) {
      const img = new Image();
      img.onload = () => {
        const dpr = window.devicePixelRatio || 1;
        const imgLogicalW = img.naturalWidth ? (img.naturalWidth / dpr) : width;
        const imgLogicalH = img.naturalHeight ? (img.naturalHeight / dpr) : height;
        this.ctx.drawImage(img, 0, 0, imgLogicalW, imgLogicalH);
      };
      img.src = savedData;
    }
  },

  undoCurrentCanvas() {
    const q = this.getCurrentQuestion();
    const history = this.canvasHistory[q.id];
    if (!history || history.length === 0) return;

    if (!this.canvasRedoStack[q.id]) this.canvasRedoStack[q.id] = [];
    const curSnap = this.ctx.getImageData(0, 0, this.canvasEl.width, this.canvasEl.height);
    this.canvasRedoStack[q.id].push(curSnap);

    const prevState = history.pop();
    this.ctx.save();
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
    this.ctx.restore();
    this.ctx.putImageData(prevState, 0, 0);
    this.saveCurrentCanvas();
    if (window.AudioEngine) AudioEngine.click();
  },

  redoCurrentCanvas() {
    const q = this.getCurrentQuestion();
    const redoStack = this.canvasRedoStack[q.id];
    if (!redoStack || redoStack.length === 0) return;

    if (!this.canvasHistory[q.id]) this.canvasHistory[q.id] = [];
    const curSnap = this.ctx.getImageData(0, 0, this.canvasEl.width, this.canvasEl.height);
    this.canvasHistory[q.id].push(curSnap);

    const nextState = redoStack.pop();
    this.ctx.save();
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
    this.ctx.restore();
    this.ctx.putImageData(nextState, 0, 0);
    this.saveCurrentCanvas();
    if (window.AudioEngine) AudioEngine.click();
  },

  clearCurrentScratchpad() {
    if (!this.ctx || !this.canvasEl) return;
    const wrap = document.getElementById('notebookPaperWrapper');
    const width = wrap ? wrap.clientWidth : 800;
    const height = this.canvasHeight;

    const q = this.getCurrentQuestion();
    if (!this.canvasHistory[q.id]) this.canvasHistory[q.id] = [];
    this.canvasHistory[q.id].push(this.ctx.getImageData(0, 0, this.canvasEl.width, this.canvasEl.height));

    this.ctx.clearRect(0, 0, width, height);
    delete this.canvasBuffers[q.id];

    const stepperContainer = document.getElementById('questionStepperRow');
    if (stepperContainer) {
      const activeStepBtn = stepperContainer.children[this.currentQuestionIndex];
      if (activeStepBtn) activeStepBtn.classList.remove('has-draw');
    }

    if (window.AudioEngine) AudioEngine.click();
  },

  setPenColor(color, el) {
    this.currentColor = color;
    this.isEraser = false;
    document.querySelectorAll('.nb-color-dot').forEach(d => d.classList.remove('active'));
    if (el) el.classList.add('active');

    const penBtn = document.getElementById('nbToolPenBtn');
    const eraserBtn = document.getElementById('nbToolEraserBtn');
    if (penBtn) penBtn.classList.add('active');
    if (eraserBtn) eraserBtn.classList.remove('active');

    if (window.AudioEngine) AudioEngine.click();
  },

  setPenWidth(width) {
    this.currentStrokeWidth = parseFloat(width) || 4;
  },

  setTool(tool, el) {
    this.currentTool = tool;
    this.isEraser = (tool === 'eraser');

    const penBtn = document.getElementById('nbToolPenBtn');
    const eraserBtn = document.getElementById('nbToolEraserBtn');
    if (penBtn) penBtn.classList.toggle('active', !this.isEraser);
    if (eraserBtn) eraserBtn.classList.toggle('active', this.isEraser);

    if (window.AudioEngine) AudioEngine.click();
  },

  toggleEraser(el) {
    this.isEraser = !this.isEraser;
    const penBtn = document.getElementById('nbToolPenBtn');
    const eraserBtn = document.getElementById('nbToolEraserBtn');
    if (penBtn) penBtn.classList.toggle('active', !this.isEraser);
    if (eraserBtn) eraserBtn.classList.toggle('active', this.isEraser);
    if (window.AudioEngine) AudioEngine.click();
  },

  /* ==========================================================================
     TIMER ENGINE (60s COUNTDOWN)
     ========================================================================== */
  toggleTimer() {
    if (this.isTimerRunning) {
      this.stopTimer();
    } else {
      this.startTimer();
    }
  },

  startTimer() {
    if (this.isTimerRunning) return;
    this.isTimerRunning = true;
    if (window.AudioEngine) AudioEngine.click();

    this.timerInterval = setInterval(() => {
      this.timerRemaining--;
      this.updateTimerDisplay();

      if (this.timerRemaining <= 0) {
        this.stopTimer();
        if (window.AudioEngine) AudioEngine.success();
      }
    }, 1000);
  },

  stopTimer() {
    this.isTimerRunning = false;
    clearInterval(this.timerInterval);
    this.timerInterval = null;
  },

  resetTimerDisplay() {
    this.stopTimer();
    this.timerRemaining = this.timerDuration;
    this.updateTimerDisplay();
  },

  updateTimerDisplay() {
    const display = document.getElementById('timerDisplay');
    if (!display) return;
    const mins = Math.floor(this.timerRemaining / 60);
    const secs = this.timerRemaining % 60;
    display.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  },

  /* ==========================================================================
     EXPORT SNAPSHOT IMAGE (CAMERA BUTTON)
     ========================================================================== */
  exportCurrentCardImage() {
    const q = this.getCurrentQuestion();
    const card = document.getElementById('activeQuestionCard');
    if (!card) return;

    if (window.AudioEngine) AudioEngine.click();

    const tempCanvas = document.createElement('canvas');
    const rect = card.getBoundingClientRect();
    tempCanvas.width = rect.width * 2;
    tempCanvas.height = rect.height * 2;
    const ctx = tempCanvas.getContext('2d');
    ctx.scale(2, 2);

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, rect.width, rect.height);

    ctx.fillStyle = '#182038';
    ctx.font = 'bold 20px Outfit, sans-serif';
    ctx.fillText(`Mr Ahmed Abd El-Motaal • ${q.title}`, 24, 38);

    if (this.canvasEl) {
      ctx.drawImage(this.canvasEl, 24, 60, rect.width - 48, this.canvasHeight);
    }

    const a = document.createElement('a');
    a.download = `Math_${this.currentWeek}_${this.currentGroup}_Q${q.questionNum}.png`;
    a.href = tempCanvas.toDataURL('image/png');
    a.click();
  },

  /* ==========================================================================
     DIRECT STUDIO LINK SHARING SUITE (FOR TEACHER PUBLISHING)
     ========================================================================== */
  openShareModal(targetWeekKey) {
    if (window.AudioEngine) AudioEngine.click();
    const modal = document.getElementById('shareAssessmentModal');
    if (!modal) return;

    if (targetWeekKey && WEEKS_DATA[targetWeekKey]) {
      this.currentWeek = targetWeekKey;
      this.currentStage = targetWeekKey.startsWith('prep3_') ? 'prep3' : 'prep1';
      this.renderQuestion();
      this.updateWeekButtons();
    }

    this.renderSharePills();
    this.renderShareQuickLinks();
    this.updateShareLink();

    modal.classList.add('active');
  },

  closeShareModal() {
    if (window.AudioEngine) AudioEngine.click();
    const modal = document.getElementById('shareAssessmentModal');
    if (modal) modal.classList.remove('active');
  },

  renderSharePills() {
    const container = document.getElementById('shareAssessmentPills');
    if (!container) return;

    const stageLabel = document.getElementById('shareCurrentStageLabel');
    if (stageLabel) {
      stageLabel.innerText = this.currentStage === 'prep3' ? 'Prep 3' : (this.currentStage === 'prep1' ? 'Prep 1' : 'Grade 5');
    }

    const assessmentList = [
      // Prep 3
      { key: 'prep3_week6', stage: 'prep3', title: 'Week 6: Rational Functions' },
      { key: 'prep3_week5', stage: 'prep3', title: 'Week 5: Zeros of Polynomial' },
      { key: 'prep3_week4', stage: 'prep3', title: 'Week 4: Quadratic Functions' },
      { key: 'prep3_week3', stage: 'prep3', title: 'Week 3: Exponential Eq.' },
      { key: 'prep3_week2', stage: 'prep3', title: 'Week 2: Powers of Powers' },
      { key: 'prep3_october_revision', stage: 'prep3', title: 'October Revision (48Q)' },
      // Prep 1
      { key: 'week2', stage: 'prep1', title: 'Prep 1 • Week 2: Proportion' },
      { key: 'week3', stage: 'prep1', title: 'Prep 1 • Week 3: Sets' },
      { key: 'week4', stage: 'prep1', title: 'Prep 1 • Week 4: Integers' },
      { key: 'week5', stage: 'prep1', title: 'Prep 1 • Week 5: Rational No.' }
    ];

    container.innerHTML = assessmentList.map(item => {
      const isActive = item.key === this.currentWeek;
      return `<button type="button" class="share-pill-btn ${isActive ? 'active' : ''}" onclick="AssessmentApp.selectShareWeek('${item.key}')">
        <i class="fa-solid fa-clipboard-check"></i>
        <span>${item.title}</span>
      </button>`;
    }).join('');
  },

  selectShareWeek(weekKey) {
    if (window.AudioEngine) AudioEngine.click();
    this.currentWeek = weekKey;
    this.currentStage = weekKey.startsWith('prep3_') ? 'prep3' : 'prep1';
    this.currentQuestionIndex = 0;
    this.updateWeekButtons();
    this.renderQuestion();
    this.renderSharePills();
    this.updateShareLink();
  },

  getAssessmentDisplayTitle(weekKey) {
    const titles = {
      'prep3_week6': 'الصف الثالث الإعدادي • الأسبوع 6 (دوال الكسور الجبرية)',
      'prep3_week5': 'الصف الثالث الإعدادي • الأسبوع 5 (أصفار الدالة كثيرة الحدود)',
      'prep3_week4': 'الصف الثالث الإعدادي • الأسبوع 4 (الدالة التربيعية)',
      'prep3_week3': 'الصف الثالث الإعدادي • الأسبوع 3 (المعادلات الأسية)',
      'prep3_week2': 'الصف الثالث الإعدادي • الأسبوع 2 (قوى القوى)',
      'prep3_october_revision': 'الصف الثالث الإعدادي • مراجعة شهر أكتوبر الشاملة (48 سؤالاً)',
      'week2': 'الصف الأول الإعدادي • الأسبوع 2 (التناسب ومقياس الرسم)',
      'week3': 'الصف الأول الإعدادي • الأسبوع 3 (المجموعات ومخطط فن)',
      'week4': 'الصف الأول الإعدادي • الأسبوع 4 (العمليات في ص والقيمة المطلقة)',
      'week5': 'الصف الأول الإعدادي • الأسبوع 5 (العمليات في ن والمعكوسات)'
    };
    return titles[weekKey] || (WEEKS_DATA[weekKey] ? WEEKS_DATA[weekKey].title : weekKey);
  },

  generateStudioShareUrl(weekKey, group, qNum, studioOnly) {
    const targetWeek = weekKey || this.currentWeek || 'prep3_week4';
    const loc = window.location;
    
    // Clean URL construction
    let basePath = loc.pathname;
    if (!basePath.endsWith('index.html') && !basePath.endsWith('/')) {
      basePath += '/index.html';
    } else if (basePath.endsWith('/')) {
      basePath += 'index.html';
    }

    const params = new URLSearchParams();
    params.set('week', targetWeek);

    if (group && group !== 'all') {
      params.set('group', group);
    }
    if (qNum && qNum > 1) {
      params.set('q', qNum);
    }

    // Studio & Pure isolation params
    if (studioOnly) {
      params.set('studio', 'true');
      params.set('only', 'true');
    }

    return `${loc.origin}${basePath}?${params.toString()}`;
  },

  updateShareLink() {
    const groupSelect = document.getElementById('shareGroupSelect');
    const qSelect = document.getElementById('shareQuestionSelect');
    const chkStudio = document.getElementById('shareStudioOnlyCheckbox');
    const linkInput = document.getElementById('shareDirectLinkInput');
    const badge = document.getElementById('shareActiveAssessmentBadge');

    const selectedGroup = groupSelect ? groupSelect.value : 'all';
    const isCurrentQ = qSelect && qSelect.value === 'current';
    const qNum = isCurrentQ ? (this.currentQuestionIndex + 1) : 1;
    const isStudioOnly = chkStudio ? chkStudio.checked : true;

    const directUrl = this.generateStudioShareUrl(this.currentWeek, selectedGroup, qNum, isStudioOnly);

    if (linkInput) {
      linkInput.value = directUrl;
    }

    const displayTitle = this.getAssessmentDisplayTitle(this.currentWeek);
    if (badge) {
      badge.innerText = displayTitle;
    }

    // Update QR Code
    const qrImg = document.getElementById('shareQrImage');
    if (qrImg) {
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(directUrl)}`;
    }

    // Update WhatsApp link
    const waBtn = document.getElementById('shareWhatsappBtn');
    if (waBtn) {
      const msg = `📐 *تقييم تفاعلي مباشر - مستر أحمد عبد المتعال*\n📚 *${displayTitle}*\n✨ تفضل بالدخول لحل التقييم في وضع الاستوديو بدون أي تشتيت:\n🔗 ${directUrl}`;
      waBtn.href = `https://wa.me/?text=${encodeURIComponent(msg)}`;
    }
  },

  copyShareLink() {
    if (window.AudioEngine) AudioEngine.click();
    const linkInput = document.getElementById('shareDirectLinkInput');
    if (!linkInput) return;

    linkInput.select();
    linkInput.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(linkInput.value).then(() => {
      const btn = document.getElementById('btnCopyAssessmentShareLink');
      if (btn) {
        const origHtml = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i> <span>تم النسخ بنجاح!</span>';
        btn.style.background = '#00b894';
        setTimeout(() => {
          btn.innerHTML = origHtml;
          btn.style.background = '';
        }, 2200);
      }
      if (window.AudioEngine) AudioEngine.success();
    }).catch(err => {
      console.warn('Clipboard write failed:', err);
    });
  },

  testShareLink() {
    const linkInput = document.getElementById('shareDirectLinkInput');
    if (linkInput && linkInput.value) {
      window.open(linkInput.value, '_blank');
    }
  },

  toggleShareQr() {
    if (window.AudioEngine) AudioEngine.click();
    const card = document.getElementById('shareQrCard');
    const txt = document.getElementById('qrToggleText');
    if (!card) return;
    const isHidden = card.style.display === 'none';
    card.style.display = isHidden ? 'flex' : 'none';
    if (txt) {
      txt.innerText = isHidden ? 'إخفاء باركود QR' : 'عرض باركود QR';
    }
  },

  renderShareQuickLinks() {
    const table = document.getElementById('shareQuickLinksTable');
    if (!table) return;

    const quickList = [
      { key: 'prep3_week6', label: 'Prep 3 • Week 6 (Rational Functions)' },
      { key: 'prep3_week5', label: 'Prep 3 • Week 5 (Zeros of Polynomial)' },
      { key: 'prep3_week4', label: 'Prep 3 • Week 4 (Quadratic Functions)' },
      { key: 'prep3_week3', label: 'Prep 3 • Week 3 (Exponential Equations)' },
      { key: 'prep3_week2', label: 'Prep 3 • Week 2 (Powers of Powers)' },
      { key: 'prep3_october_revision', label: 'Prep 3 • مراجعة أكتوبر الشاملة (48Q)' },
      { key: 'week2', label: 'Prep 1 • Week 2 (Proportion & Scale)' },
      { key: 'week3', label: 'Prep 1 • Week 3 (Sets & Venn)' },
      { key: 'week4', label: 'Prep 1 • Week 4 (Integers)' },
      { key: 'week5', label: 'Prep 1 • Week 5 (Rational Numbers)' }
    ];

    table.innerHTML = quickList.map(item => {
      const url = this.generateStudioShareUrl(item.key, 'all', 1, true);
      return `
        <div class="quick-link-item">
          <span class="quick-link-name"><i class="fa-solid fa-file-signature" style="color:#6c5ce7;"></i> ${item.label}</span>
          <div class="quick-link-actions">
            <button type="button" class="quick-link-btn" onclick="navigator.clipboard.writeText('${url}').then(()=>{ this.innerHTML='<i class=\\\'fa-solid fa-check\\\'></i> تم النسخ!'; setTimeout(()=>this.innerHTML='<i class=\\\'fa-solid fa-copy\\\'></i> نسخ الرابط', 1800); })">
              <i class="fa-solid fa-copy"></i> نسخ الرابط
            </button>
            <a href="${url}" target="_blank" class="quick-link-btn" style="text-decoration:none;">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> فتح
            </a>
          </div>
        </div>
      `;
    }).join('');
  }
};

/* ==========================================================================
   GLOBAL HELPERS & APP INITIALIZATION
   ========================================================================== */
function toggleAppTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('math_theme', next);
  updateThemeIcon(next);
  if (window.AudioEngine) AudioEngine.click();
}

function updateThemeIcon(theme) {
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (!toggleBtn) return;
  toggleBtn.innerHTML = theme === 'dark'
    ? '<i class="fa-solid fa-sun" style="color:#fdcb6e;"></i>'
    : '<i class="fa-solid fa-moon"></i>';
}

function toggleStudioMode() {
  const isStudio = document.body.classList.toggle('studio-recording-mode');
  if (!isStudio) {
    document.body.classList.remove('pure-assessment-mode');
  }
  const fab = document.getElementById('floatingStudioModeFab');
  if (fab) fab.classList.toggle('active', isStudio);
  const exitBtn = document.getElementById('exitStudioBtn');
  if (exitBtn) {
    const isPure = document.body.classList.contains('pure-assessment-mode');
    exitBtn.style.display = (isStudio && !isPure) ? 'inline-flex' : 'none';
  }
  const btn = document.getElementById('studioModeBtn');
  if (btn) {
    btn.classList.toggle('active', isStudio);
    const span = btn.querySelector('span');
    if (span) span.innerText = isStudio ? 'Exit Studio' : 'Studio Mode';
  }
  if (window.AudioEngine) AudioEngine.click();

  // Smoothly trigger canvas resize to fit new width
  if (window.AssessmentApp && typeof AssessmentApp.resizeCanvas === 'function') {
    setTimeout(() => {
      AssessmentApp.resizeCanvas(true);
    }, 60);
  }
}

// Bootstrap
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('math_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  AssessmentApp.init();

  if (typeof FullScreenPen !== 'undefined' && typeof FullScreenPen.init === 'function') {
    try { FullScreenPen.init(); } catch (e) { console.warn('FullScreenPen init error:', e); }
  }
  if (typeof InfiniteWhiteboard !== 'undefined' && typeof InfiniteWhiteboard.init === 'function') {
    try { InfiniteWhiteboard.init(); } catch (e) { console.warn('InfiniteWhiteboard init error:', e); }
  }
});


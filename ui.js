/**
 * RPG Quest Todo (갓생 모험가 투두리스트)
 * UI Controller & Interactions (Updated with 16-Bit Engine & Flow)
 */

(function initRPGApp() {
  // Sound & Screen FX
  const soundToggleBtn = document.getElementById('soundToggleBtn');
  const soundIcon = document.getElementById('soundIcon');
  const screenShakeWrapper = document.getElementById('screenShakeWrapper');
  const critImpactOverlay = document.getElementById('critImpactOverlay');

  // Navigation
  const navTabs = document.querySelectorAll('.nav-tab');
  const navTabsMobile = document.querySelectorAll('.nav-tab-mobile');
  const appViews = document.querySelectorAll('.app-view');
  const navLogoBtn = document.getElementById('navLogoBtn');
  const navOpenClassBtn = document.getElementById('navOpenClassBtn');
  const jumpInventoryBtn = document.getElementById('jumpInventoryBtn');
  const openChestTabDirectBtn = document.getElementById('openChestTabDirectBtn');
  const miniAccSlot = document.getElementById('miniAccSlot');

  // Header Elements (Gold/Diamond removed)
  const headerHeroLevel = document.getElementById('headerHeroLevel');
  const headerHeroTitle = document.getElementById('headerHeroTitle');

  // Hero Status Dashboard
  const heroAvatarContainer = document.getElementById('heroAvatarContainer');
  const heroStageBadge = document.getElementById('heroStageBadge');
  const heroLevelBadge = document.getElementById('heroLevelBadge');
  const heroTitleBadge = document.getElementById('heroTitleBadge');
  const heroDisplayName = document.getElementById('heroDisplayName');
  const heroClassBadge = document.getElementById('heroClassBadge');
  const heroExpNumbers = document.getElementById('heroExpNumbers');
  const heroExpBarFill = document.getElementById('heroExpBarFill');
  const heroCompletedCount = document.getElementById('heroCompletedCount');
  const heroStreakCount = document.getElementById('heroStreakCount');
  const heroEquippedName = document.getElementById('heroEquippedName');

  // Hero Name Editor
  const editHeroNameBtn = document.getElementById('editHeroNameBtn');
  const heroNameInputGroup = document.getElementById('heroNameInputGroup');
  const heroNameInput = document.getElementById('heroNameInput');
  const saveHeroNameBtn = document.getElementById('saveHeroNameBtn');
  const cancelHeroNameBtn = document.getElementById('cancelHeroNameBtn');

  // 7-Day Attendance Ribbon
  const attendanceRatioText = document.getElementById('attendanceRatioText');
  const attendanceGridTiles = document.getElementById('attendanceGridTiles');
  const chestStatusBadge = document.getElementById('chestStatusBadge');

  // Quest Creation & List
  const questInput = document.getElementById('questInput');
  const addQuestBtn = document.getElementById('addQuestBtn');
  const priorityNormalBtn = document.getElementById('priorityNormalBtn');
  const priorityCriticalBtn = document.getElementById('priorityCriticalBtn');
  const questContainer = document.getElementById('questContainer');
  const activeQuestCount = document.getElementById('activeQuestCount');
  const completedQuestCount = document.getElementById('completedQuestCount');
  const classPerkTag = document.getElementById('classPerkTag');

  // Loadout slots
  const loadoutWeaponIcon = document.getElementById('loadoutWeaponIcon');
  const loadoutWeaponName = document.getElementById('loadoutWeaponName');
  const loadoutAccIcon = document.getElementById('loadoutAccIcon');
  const loadoutAccName = document.getElementById('loadoutAccName');

  // Calendar Elements
  const calPrevMonthBtn = document.getElementById('calPrevMonthBtn');
  const calNextMonthBtn = document.getElementById('calNextMonthBtn');
  const calTodayBtn = document.getElementById('calTodayBtn');
  const calCurrentMonthLabel = document.getElementById('calCurrentMonthLabel');
  const calBannerDate = document.getElementById('calBannerDate');
  const calStreakDisplay = document.getElementById('calStreakDisplay');
  const calMonthDaysGrid = document.getElementById('calMonthDaysGrid');
  const calSelectedDateLabel = document.getElementById('calSelectedDateLabel');
  const calDayStats = document.getElementById('calDayStats');
  const calDayTodoList = document.getElementById('calDayTodoList');
  const calFilterBtns = document.querySelectorAll('.cal-filter-btn');

  // Inventory & Chest Elements
  const chestBoxContainer = document.getElementById('chestBoxContainer');
  const chestSpriteSvg = document.getElementById('chestSpriteSvg');
  const openChestActionBtn = document.getElementById('openChestActionBtn');
  const inventoryFittingAvatar = document.getElementById('inventoryFittingAvatar');
  const fittingAccName = document.getElementById('fittingAccName');
  const fittingAccDesc = document.getElementById('fittingAccDesc');
  const inventoryCountText = document.getElementById('inventoryCountText');
  const inventoryGridSlots = document.getElementById('inventoryGridSlots');
  const chestBannerWeekTag = document.getElementById('chestBannerWeekTag');

  // Modals
  const classSelectModal = document.getElementById('classSelectModal');
  const closeClassModalBtn = document.getElementById('closeClassModalBtn');
  const confirmClassBtn = document.getElementById('confirmClassBtn');
  const initHeroNameInput = document.getElementById('initHeroNameInput');

  const openCodexModalBtn = document.getElementById('openCodexModalBtn');
  const openCodexFromNavBtn = document.getElementById('openCodexFromNavBtn');
  const openCodexMobileBtn = document.getElementById('openCodexMobileBtn');
  const codexModal = document.getElementById('codexModal');
  const closeCodexModalBtn = document.getElementById('closeCodexModalBtn');
  const codexCloseBtn = document.getElementById('codexCloseBtn');
  const codexStagesList = document.getElementById('codexStagesList');
  const codexClassTabs = document.getElementById('codexClassTabs');

  const levelUpModal = document.getElementById('levelUpModal');
  const levelUpTitleText = document.getElementById('levelUpTitleText');
  const levelUpNewTitleBadge = document.getElementById('levelUpNewTitleBadge');
  const levelUpConfirmBtn = document.getElementById('levelUpConfirmBtn');

  const gachaModal = document.getElementById('gachaModal');
  const gachaIconDisplay = document.getElementById('gachaIconDisplay');
  const gachaRarityTag = document.getElementById('gachaRarityTag');
  const gachaAccTitle = document.getElementById('gachaAccTitle');
  const gachaAccDesc = document.getElementById('gachaAccDesc');
  const gachaStatTag = document.getElementById('gachaStatTag');
  const gachaEquipNowBtn = document.getElementById('gachaEquipNowBtn');
  const gachaCloseBtn = document.getElementById('gachaCloseBtn');

  // Evolution Comparison Modal Elements
  const openEvolutionCompareBtn = document.getElementById('openEvolutionCompareBtn');
  const evolutionModal = document.getElementById('evolutionModal');
  const closeEvolutionModalBtn = document.getElementById('closeEvolutionModalBtn');
  const evolutionConfirmBtn = document.getElementById('evolutionConfirmBtn');
  const evolutionBeforeStageTag = document.getElementById('evolutionBeforeStageTag');
  const evolutionBeforeAvatar = document.getElementById('evolutionBeforeAvatar');
  const evolutionBeforeTitle = document.getElementById('evolutionBeforeTitle');
  const evolutionBeforeDesc = document.getElementById('evolutionBeforeDesc');
  const evolutionBeforePerk = document.getElementById('evolutionBeforePerk');
  const evolutionAfterStageTag = document.getElementById('evolutionAfterStageTag');
  const evolutionAfterAvatar = document.getElementById('evolutionAfterAvatar');
  const evolutionAfterTitle = document.getElementById('evolutionAfterTitle');
  const evolutionAfterDesc = document.getElementById('evolutionAfterDesc');
  const evolutionAfterPerk = document.getElementById('evolutionAfterPerk');
  const evoCompareClassTabs = document.getElementById('evoCompareClassTabs');
  const evoPrevStageBtn = document.getElementById('evoPrevStageBtn');
  const evoNextStageBtn = document.getElementById('evoNextStageBtn');
  const evoStageIndicator = document.getElementById('evoStageIndicator');

  const settingsModal = document.getElementById('settingsModal');
  const openSettingsBtn = document.getElementById('openSettingsBtn');
  const closeSettingsModalBtn = document.getElementById('closeSettingsModalBtn');
  const closeSettingsOkBtn = document.getElementById('closeSettingsOkBtn');
  const cheatExpBtn = document.getElementById('cheatExpBtn');
  const cheatLevelBtn = document.getElementById('cheatLevelBtn');
  const cheatAttendBtn = document.getElementById('cheatAttendBtn');
  const cheatOpenClassModalBtn = document.getElementById('cheatOpenClassModalBtn');
  const resetDataBtn = document.getElementById('resetDataBtn');

  // Local State
  let currentPriority = 'normal';
  let currentActiveTab = 'view-quests';
  let calendarDate = new Date();
  let selectedCalDay = new Date().toISOString().slice(0, 10);
  let calFilter = 'all';
  let codexViewingClass = 'warrior';
  let latestGachaResult = null;
  let tempSelectedClass = store.state.hero.classId || 'warrior';

  // -------------------------------------------------------------
  // Navigation Controller
  // -------------------------------------------------------------
  function switchTab(targetId) {
    sounds.playClick();
    currentActiveTab = targetId;

    appViews.forEach((view) => {
      if (view.id === targetId) {
        view.classList.remove('hidden');
        view.classList.add('flex');
      } else {
        view.classList.add('hidden');
        view.classList.remove('flex');
      }
    });

    navTabs.forEach((tab) => {
      const isTarget = tab.dataset.target === targetId;
      if (isTarget) {
        tab.className = 'nav-tab px-space-md py-space-sm transition-all flex items-center gap-space-xs bg-primary-container text-on-primary-container shadow-[2px_2px_0_0_#090D16] font-bold whitespace-nowrap';
      } else {
        tab.className = 'nav-tab px-space-md py-space-sm transition-all flex items-center gap-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container whitespace-nowrap';
      }
    });

    navTabsMobile.forEach((tab) => {
      const isTarget = tab.dataset.target === targetId;
      if (isTarget) {
        tab.className = 'nav-tab-mobile flex-1 py-1 text-center font-label-sm text-[11px] text-primary-container font-bold';
      } else {
        tab.className = 'nav-tab-mobile flex-1 py-1 text-center font-label-sm text-[11px] text-on-surface-variant';
      }
    });

    if (targetId === 'view-calendar') renderCalendar();
    if (targetId === 'view-inventory') renderInventoryView();
  }

  navTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.target;
      if (target) switchTab(target);
    });
  });

  navTabsMobile.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.target;
      if (target) switchTab(target);
    });
  });

  navLogoBtn.addEventListener('click', () => switchTab('view-quests'));
  if (navOpenClassBtn) navOpenClassBtn.addEventListener('click', openClassModal);
  if (jumpInventoryBtn) jumpInventoryBtn.addEventListener('click', () => switchTab('view-inventory'));
  if (openChestTabDirectBtn) openChestTabDirectBtn.addEventListener('click', () => switchTab('view-inventory'));
  if (miniAccSlot) miniAccSlot.addEventListener('click', () => switchTab('view-inventory'));

  // -------------------------------------------------------------
  // Sound Toggle
  // -------------------------------------------------------------
  soundToggleBtn.addEventListener('click', () => {
    const isMuted = sounds.toggleMute();
    soundIcon.textContent = isMuted ? 'volume_off' : 'volume_up';
    soundToggleBtn.classList.toggle('text-crimson-critical', isMuted);
    soundToggleBtn.classList.toggle('text-primary-container', !isMuted);
    if (!isMuted) sounds.playClick();
  });

  // -------------------------------------------------------------
  // Priority Toggle (Normal / Critical)
  // -------------------------------------------------------------
  priorityNormalBtn.addEventListener('click', () => {
    currentPriority = 'normal';
    priorityNormalBtn.className = 'px-space-sm py-1 font-label-sm text-label-sm bg-surface-container text-on-surface shadow-[2px_2px_0_0_#090D16] transition-all font-bold';
    priorityCriticalBtn.className = 'px-space-sm py-1 font-label-sm text-label-sm text-crimson-critical hover:text-on-surface transition-all flex items-center gap-1 font-bold';
    sounds.playClick();
  });

  priorityCriticalBtn.addEventListener('click', () => {
    currentPriority = 'critical';
    priorityCriticalBtn.className = 'px-space-sm py-1 font-label-sm text-label-sm bg-crimson-critical text-pixel-white shadow-[2px_2px_0_0_#090D16] transition-all flex items-center gap-1 font-bold';
    priorityNormalBtn.className = 'px-space-sm py-1 font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-all font-bold';
    sounds.playClick();
  });

  // -------------------------------------------------------------
  // Hero Name Editor
  // -------------------------------------------------------------
  editHeroNameBtn.addEventListener('click', () => {
    sounds.playClick();
    heroNameInputGroup.classList.remove('hidden');
    heroNameInputGroup.classList.add('flex');
    heroNameInput.value = store.state.hero.name;
    heroNameInput.focus();
    heroNameInput.select();
  });

  cancelHeroNameBtn.addEventListener('click', () => {
    sounds.playClick();
    heroNameInputGroup.classList.add('hidden');
    heroNameInputGroup.classList.remove('flex');
  });

  function saveName() {
    const val = heroNameInput.value.trim();
    if (val) {
      store.setHeroName(val);
      sounds.playDone();
    }
    heroNameInputGroup.classList.add('hidden');
    heroNameInputGroup.classList.remove('flex');
  }

  saveHeroNameBtn.addEventListener('click', saveName);
  heroNameInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') saveName();
    if (e.key === 'Escape') cancelHeroNameBtn.click();
  });

  // -------------------------------------------------------------
  // Quest Submission (Create Todo & Auto Stamp Today Attendance!)
  // -------------------------------------------------------------
  function handleAddQuest() {
    const text = questInput.value.trim();
    if (!text) {
      questInput.focus();
      return;
    }

    const priority = currentPriority;
    const category = priority === 'critical' ? '주간 보스' : '일일 모험';

    // Store addTodo automatically marks today's attendance!
    store.addTodo(text, priority, category);
    questInput.value = '';
    sounds.playDone();

    // Trigger sparkle on attendance ribbon
    const dayOfWeek = (new Date().getDay() + 6) % 7;
    const tile = attendanceGridTiles.children[dayOfWeek];
    if (tile) {
      tile.classList.add('scale-110');
      setTimeout(() => tile.classList.remove('scale-110'), 300);
    }
  }

  addQuestBtn.addEventListener('click', handleAddQuest);
  questInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleAddQuest();
  });

  // -------------------------------------------------------------
  // Level Up Ceremony
  // -------------------------------------------------------------
  // -------------------------------------------------------------
  // Evolution Comparison Modal (Before vs After + Class/Stage Switcher)
  // -------------------------------------------------------------
  let evoViewingClass = store.state.hero.classId || 'warrior';
  let evoViewingBeforeIdx = 1;
  let evoViewingAfterIdx = 2;

  function renderEvolutionComparisonContent() {
    const stages = EVOLUTION_CODEX[evoViewingClass] || EVOLUTION_CODEX.warrior;
    const beforeStage = stages.find((s) => s.stage === evoViewingBeforeIdx) || stages[0];
    const afterStage = stages.find((s) => s.stage === evoViewingAfterIdx) || stages[Math.min(stages.length - 1, 1)];
    const acc = evoViewingClass === store.state.hero.classId ? store.state.hero.equippedAccessory : null;

    if (evoCompareClassTabs) {
      evoCompareClassTabs.querySelectorAll('button').forEach((btn) => {
        const isCur = btn.dataset.evoClass === evoViewingClass;
        btn.className = isCur
          ? 'evo-class-btn px-2.5 py-1 font-label-sm text-[11px] bg-primary text-on-primary font-bold shadow-sm cursor-pointer'
          : 'evo-class-btn px-2.5 py-1 font-label-sm text-[11px] text-on-surface-variant hover:text-on-surface cursor-pointer';
      });
    }

    if (evoStageIndicator) {
      evoStageIndicator.textContent = `STAGE ${String(beforeStage.stage).padStart(2, '0')} ➔ ${String(afterStage.stage).padStart(2, '0')}`;
    }

    if (evolutionBeforeStageTag) {
      evolutionBeforeStageTag.textContent = `STAGE ${String(beforeStage.stage).padStart(2, '0')} (Lv.${beforeStage.minLv}~${beforeStage.maxLv})`;
      evolutionBeforeAvatar.innerHTML = render16BitHeroHTML(evoViewingClass, beforeStage.stage, acc, 165);
      evolutionBeforeTitle.textContent = `[${beforeStage.title}]`;
      evolutionBeforeDesc.textContent = beforeStage.desc;
      evolutionBeforePerk.textContent = `특성: ${beforeStage.perk || '기본 능력'}`;

      evolutionAfterStageTag.textContent = `STAGE ${String(afterStage.stage).padStart(2, '0')} (Lv.${afterStage.minLv}~${afterStage.maxLv})`;
      evolutionAfterAvatar.innerHTML = render16BitHeroHTML(evoViewingClass, afterStage.stage, acc, 165);
      evolutionAfterTitle.textContent = `[${afterStage.title}]`;
      evolutionAfterDesc.textContent = afterStage.desc;
      evolutionAfterPerk.textContent = `각성 특성: ${afterStage.perk || '능력 대폭 상승'}`;
    }
  }

  function showEvolutionComparisonModal(beforeStage, afterStage, customClassId) {
    if (!beforeStage || !afterStage) return;
    sounds.playEvolution();

    if (window.confetti) {
      window.confetti({ particleCount: 160, spread: 90, origin: { y: 0.5 } });
      setTimeout(() => {
        window.confetti({ particleCount: 80, angle: 60, spread: 55, origin: { x: 0 } });
        window.confetti({ particleCount: 80, angle: 120, spread: 55, origin: { x: 1 } });
      }, 250);
    }

    evoViewingClass = customClassId || store.state.hero.classId || 'warrior';
    evoViewingBeforeIdx = beforeStage.stage;
    evoViewingAfterIdx = afterStage.stage;
    renderEvolutionComparisonContent();

    if (evolutionModal) {
      evolutionModal.classList.remove('hidden');
      evolutionModal.classList.add('flex');
    }
  }

  if (evoCompareClassTabs) {
    evoCompareClassTabs.querySelectorAll('button').forEach((btn) => {
      btn.addEventListener('click', () => {
        sounds.playClick();
        evoViewingClass = btn.dataset.evoClass || 'warrior';
        renderEvolutionComparisonContent();
      });
    });
  }

  if (evoPrevStageBtn) {
    evoPrevStageBtn.addEventListener('click', () => {
      sounds.playClick();
      if (evoViewingBeforeIdx > 1) {
        evoViewingBeforeIdx -= 1;
        evoViewingAfterIdx = Math.max(2, evoViewingBeforeIdx + 1);
      } else {
        evoViewingBeforeIdx = 19;
        evoViewingAfterIdx = 20;
      }
      renderEvolutionComparisonContent();
    });
  }

  if (evoNextStageBtn) {
    evoNextStageBtn.addEventListener('click', () => {
      sounds.playClick();
      if (evoViewingAfterIdx < 20) {
        evoViewingBeforeIdx = evoViewingAfterIdx;
        evoViewingAfterIdx += 1;
      } else {
        evoViewingBeforeIdx = 1;
        evoViewingAfterIdx = 2;
      }
      renderEvolutionComparisonContent();
    });
  }

  if (openEvolutionCompareBtn) {
    openEvolutionCompareBtn.addEventListener('click', () => {
      sounds.playClick();
      const curStage = store.getCurrentStage();
      const nextStageIndex = Math.min(20, curStage.stage + 1);
      const nextStage = store.getStageByIndex(nextStageIndex);
      showEvolutionComparisonModal(curStage, nextStage);
    });
  }

  if (evolutionConfirmBtn) {
    evolutionConfirmBtn.addEventListener('click', () => {
      sounds.playDone();
      evolutionModal.classList.add('hidden');
      evolutionModal.classList.remove('flex');
    });
  }

  if (closeEvolutionModalBtn) {
    closeEvolutionModalBtn.addEventListener('click', () => {
      sounds.playClick();
      evolutionModal.classList.add('hidden');
      evolutionModal.classList.remove('flex');
    });
  }

  function triggerLevelUpCelebration(oldLv, newLv) {
    sounds.playLevelUp();

    if (window.confetti) {
      window.confetti({ particleCount: 140, spread: 85, origin: { y: 0.6 } });
      setTimeout(() => {
        window.confetti({ particleCount: 70, angle: 60, spread: 55, origin: { x: 0 } });
        window.confetti({ particleCount: 70, angle: 120, spread: 55, origin: { x: 1 } });
      }, 250);
    }

    const currentStage = store.getCurrentStage();
    levelUpTitleText.textContent = `Lv.${oldLv} ➔ Lv.${newLv} 달성!`;
    levelUpNewTitleBadge.textContent = `[${currentStage.title}]`;
    levelUpModal.classList.remove('hidden');
    levelUpModal.classList.add('flex');
  }

  levelUpConfirmBtn.addEventListener('click', () => {
    sounds.playClick();
    levelUpModal.classList.add('hidden');
    levelUpModal.classList.remove('flex');
  });

  // -------------------------------------------------------------
  // Critical Strike Screen Shake & Impact Animation
  // -------------------------------------------------------------
  function triggerCriticalStrikeEffect() {
    sounds.playCritical();

    screenShakeWrapper.classList.remove('shake-screen');
    void screenShakeWrapper.offsetWidth;
    screenShakeWrapper.classList.add('shake-screen');

    critImpactOverlay.classList.remove('hidden', 'crit-impact-overlay');
    void critImpactOverlay.offsetWidth;
    critImpactOverlay.classList.add('crit-impact-overlay');

    setTimeout(() => {
      critImpactOverlay.classList.add('hidden');
      critImpactOverlay.classList.remove('crit-impact-overlay');
      screenShakeWrapper.classList.remove('shake-screen');
    }, 500);
  }

  // -------------------------------------------------------------
  // Render Full Application UI from Store
  // -------------------------------------------------------------
  function renderApp(state) {
    const hero = state.hero;
    const stage = store.getCurrentStage();
    const expNeeded = store.getExpNeeded(hero.level);
    const expPercent = Math.min(100, Math.floor((hero.exp / expNeeded) * 100));

    // 1. Header Updates (Spacious, No Gold/Diamond)
    headerHeroLevel.textContent = `[LV.${hero.level}]`;
    headerHeroTitle.textContent = stage.title;

    // 2. 16-Bit Hero Profile Card Updates
    heroAvatarContainer.innerHTML = render16BitHeroHTML(hero.classId, stage.stage, hero.equippedAccessory, 180);
    heroStageBadge.textContent = `★ STAGE ${String(stage.stage).padStart(2, '0')} HERO ★`;
    heroLevelBadge.innerHTML = `<span class="material-symbols-outlined text-[16px]">military_tech</span> LV.${hero.level}`;
    heroTitleBadge.textContent = `[칭호: ${stage.title}]`;
    heroDisplayName.textContent = hero.name || "모험가";

    const classNames = { warrior: '16비트 전사', archer: '16비트 궁수', mage: '16비트 마법사', beast: '16비트 비스트' };
    heroClassBadge.innerHTML = `<span class="w-2 h-2 bg-mana-cyan inline-block animate-ping"></span> CLASS: ${classNames[hero.classId] || '전사'}`;

    heroExpNumbers.textContent = `${hero.exp} / ${expNeeded} EXP (${expPercent}%)`;
    heroExpBarFill.style.width = `${expPercent}%`;

    const completedTodos = state.todos.filter((t) => t.completed).length;
    heroCompletedCount.textContent = `${completedTodos}개`;
    heroStreakCount.textContent = `${hero.streak}일차`;

    const equippedAccObj = ACCESSORY_CODEX[hero.equippedAccessory];
    heroEquippedName.textContent = equippedAccObj ? `[${equippedAccObj.name}]` : '[미장착]';

    // 3. Mini Loadout Slots
    const weaponMap = {
      warrior: { icon: 'swords', name: '용사의 검' },
      archer: { icon: 'adjust', name: '질풍의 활' },
      mage: { icon: 'auto_fix_high', name: '별빛 지팡이' },
      beast: { icon: 'pets', name: '신비의 클로버' }
    };
    loadoutWeaponIcon.innerHTML = `<span class="material-symbols-outlined text-[26px]">${weaponMap[hero.classId]?.icon || 'swords'}</span>`;
    loadoutWeaponName.textContent = weaponMap[hero.classId]?.name || '기본 무기';

    if (equippedAccObj) {
      loadoutAccIcon.textContent = equippedAccObj.icon;
      loadoutAccName.textContent = equippedAccObj.name;
    } else {
      loadoutAccIcon.textContent = '🔒';
      loadoutAccName.textContent = '미장착';
    }

    // 4. Weekly 7-Day Attendance Ribbon
    renderAttendanceRibbon(state.attendance);

    // 5. Quest List Board (with Individual Completion Buttons)
    renderQuestList(state.todos);

    // 6. Pre-render Sub-views (Calendar, Inventory, Codex)
    renderCalendar();
    renderInventoryView();
    renderCodexList();

    // 7. Check First-Time Class Select Flow
    checkFirstTimeFlow(state);
  }

  // -------------------------------------------------------------
  // First-Time Class Select Modal Logic
  // -------------------------------------------------------------
  function checkFirstTimeFlow(state) {
    if (!state.hero.classSelected) {
      // User has not picked a class yet! Open modal and force pick.
      openClassModal(true);
    }
  }

  function renderClassSelectPreviews() {
    const previewMap = [
      { id: 'classPreviewWarrior', cls: 'warrior' },
      { id: 'classPreviewArcher', cls: 'archer' },
      { id: 'classPreviewMage', cls: 'mage' },
      { id: 'classPreviewBeast', cls: 'beast' }
    ];
    previewMap.forEach(({ id, cls }) => {
      const el = document.getElementById(id);
      if (!el || typeof window.generate16BitSpriteSVG !== 'function') return;
      const svgStart = window.generate16BitSpriteSVG(cls, 1, null);
      const svgMid = window.generate16BitSpriteSVG(cls, 10, null);
      const svgFinal = window.generate16BitSpriteSVG(cls, 20, null);
      el.innerHTML = `
        <div class="w-full h-full flex items-center justify-between px-1 py-1 relative bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 overflow-hidden">
          <div class="flex flex-col items-center flex-1 min-w-0">
            <div class="w-14 h-14 flex items-center justify-center">${svgStart}</div>
            <span class="text-[9px] text-on-surface-variant font-pixel whitespace-nowrap">Lv.1 초급</span>
          </div>
          <span class="text-primary-container text-[10px] font-bold shrink-0">➔</span>
          <div class="flex flex-col items-center flex-1 min-w-0">
            <div class="w-14 h-14 flex items-center justify-center">${svgMid}</div>
            <span class="text-[9px] text-secondary font-pixel whitespace-nowrap">Lv.45 중기</span>
          </div>
          <span class="text-primary-container text-[10px] font-bold shrink-0">➔</span>
          <div class="flex flex-col items-center flex-1 min-w-0 bg-primary-container/10 border border-primary-container/40 py-0.5">
            <div class="w-16 h-16 flex items-center justify-center">${svgFinal}</div>
            <span class="text-[9px] text-primary font-bold font-pixel whitespace-nowrap">Lv.100 신화</span>
          </div>
        </div>
      `;
    });
  }

  function openClassModal(isFirstTime = false) {
    sounds.playClick();
    tempSelectedClass = store.state.hero.classId || 'warrior';

    renderClassSelectPreviews();
    highlightSelectedClassCard(tempSelectedClass);

    if (isFirstTime) {
      closeClassModalBtn.classList.add('hidden');
      confirmClassBtn.innerHTML = '<span class="material-symbols-outlined text-[24px]">swords</span> <span>갓생 모험 시작하기!</span>';
    } else {
      closeClassModalBtn.classList.remove('hidden');
      confirmClassBtn.innerHTML = '<span>직업 변경 완료</span>';
    }

    initHeroNameInput.value = store.state.hero.name || "퐁이";

    classSelectModal.classList.remove('hidden');
    classSelectModal.classList.add('flex');
  }

  function highlightSelectedClassCard(classId) {
    const cards = document.querySelectorAll('.class-card-item');
    cards.forEach((card) => {
      const isCur = card.dataset.class === classId;
      if (isCur) {
        card.className = 'class-card-item relative bg-slate-surface p-space-md flex flex-col justify-between cursor-pointer transition-all border-2 border-primary-container shadow-[0_0_16px_2px_rgba(251,191,36,0.45)] ring-2 ring-primary-container scale-[1.02]';
      } else {
        card.className = 'class-card-item relative bg-slate-surface p-space-md flex flex-col justify-between cursor-pointer transition-all border border-slate-border shadow-[4px_4px_0_0_#090D16] hover:bg-surface-container-high opacity-85';
      }
    });
  }

  document.querySelectorAll('.class-card-item').forEach((card) => {
    card.addEventListener('click', () => {
      tempSelectedClass = card.dataset.class;
      sounds.playDone();
      highlightSelectedClassCard(tempSelectedClass);
    });
  });

  confirmClassBtn.addEventListener('click', () => {
    sounds.playLevelUp();
    const heroName = initHeroNameInput.value.trim() || "모험가";
    store.setHeroClass(tempSelectedClass, heroName);

    if (window.confetti) {
      window.confetti({ particleCount: 120, spread: 80, origin: { y: 0.5 } });
    }

    classSelectModal.classList.add('hidden');
    classSelectModal.classList.remove('flex');
  });

  closeClassModalBtn.addEventListener('click', () => {
    sounds.playClick();
    classSelectModal.classList.add('hidden');
    classSelectModal.classList.remove('flex');
  });

  // -------------------------------------------------------------
  // Render Weekly 7-Day Attendance Ribbon
  // -------------------------------------------------------------
  function renderAttendanceRibbon(attendance) {
    const daysName = ['월', '화', '수', '목', '금', '토', '일'];
    const activeCount = attendance.days.filter(Boolean).length;
    attendanceRatioText.textContent = `${activeCount}/7 CLEAR`;

    const isAllClear = attendance.days.every(Boolean);
    if (isAllClear) {
      chestStatusBadge.textContent = attendance.chestClaimed ? '개봉 완료 ✓' : '🎉 개봉 가능!';
      chestStatusBadge.className = attendance.chestClaimed
        ? 'text-xs text-on-surface-variant font-bold'
        : 'text-xs text-primary-container font-bold animate-pulse';
    } else {
      chestStatusBadge.textContent = activeCount > 0 ? `진행 중 (${activeCount}/7)` : '도전 대기 중';
      chestStatusBadge.className = 'text-xs text-secondary font-bold';
    }

    const todayIndex = (new Date().getDay() + 6) % 7;

    attendanceGridTiles.innerHTML = '';
    attendance.days.forEach((isStamped, idx) => {
      const tile = document.createElement('div');
      tile.className = 'flex flex-col items-center gap-1 transition-transform';

      const isToday = idx === todayIndex;
      const isSun = idx === 6;

      let tileBg = 'bg-surface-container-lowest text-on-surface-variant';
      let borderStyle = 'border border-slate-border/50';
      let icon = '<span class="material-symbols-outlined text-[18px] opacity-20">check_box_outline_blank</span>';

      if (isStamped) {
        tileBg = 'bg-surface-container text-secondary';
        borderStyle = 'border border-secondary shadow-[0_0_6px_rgba(52,211,153,0.4)]';
        icon = '<span class="material-symbols-outlined text-[18px]">check_box</span>';
      }

      if (isSun) {
        if (isAllClear) {
          tileBg = 'bg-gold-dark/40 text-primary-container animate-pulse shadow-[0_0_10px_#FBBF24] border border-primary-container';
          icon = '<span class="material-symbols-outlined text-[20px]">featured_seasonal_and_gifts</span>';
        } else {
          icon = '<span class="material-symbols-outlined text-[18px]">lock</span>';
        }
      }

      tile.innerHTML = `
        <span class="font-label-sm text-[11px] ${isToday ? 'text-secondary font-bold' : isSun ? 'text-primary-container font-bold' : 'text-on-surface-variant'}">${daysName[idx]}</span>
        <div class="w-full aspect-square ${tileBg} ${borderStyle} shadow-[inset_2px_2px_0_0_#090D16] flex items-center justify-center">
          ${icon}
        </div>
      `;
      attendanceGridTiles.appendChild(tile);
    });
  }

  // -------------------------------------------------------------
  // Render Quest List Board (With INDIVIDUAL COMPLETE BUTTONS!)
  // -------------------------------------------------------------
  function renderQuestList(todos) {
    questContainer.innerHTML = '';

    let activeCount = 0;
    let doneCount = 0;

    if (!todos || todos.length === 0) {
      questContainer.innerHTML = `
        <div class="bg-surface-container-lowest p-space-xl text-center border-2 border-dashed border-slate-border text-on-surface-variant flex flex-col items-center gap-space-sm">
          <span class="material-symbols-outlined text-[36px] text-primary-container animate-bounce">swords</span>
          <p class="font-headline-sm text-headline-sm text-primary font-bold">아직 등록된 퀘스트가 없습니다!</p>
          <span class="font-body-sm text-body-sm max-w-md text-on-surface-variant">
            상단 입력란에 오늘 달성하고 싶은 첫 모험 과제를 입력해보세요. 퀘스트를 등록하는 순간 오늘 출석 도장이 즉시 찍힙니다! 🎯
          </span>
        </div>
      `;
      activeQuestCount.textContent = '0';
      completedQuestCount.textContent = '0';
      return;
    }

    todos.forEach((todo) => {
      if (todo.completed) doneCount++;
      else activeCount++;

      const isCrit = todo.priority === 'critical';
      const isDone = todo.completed;

      const card = document.createElement('div');
      
      let baseClass = 'quest-item group p-space-md shadow-[4px_4px_0_0_#090D16] border flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md transition-all relative overflow-hidden';
      
      if (isDone) {
        baseClass += ' bg-surface-container-lowest/60 border-slate-border/40 opacity-70';
      } else if (isCrit) {
        baseClass += ' bg-surface-container-high border-crimson-critical/60 flame-border-critical';
      } else {
        baseClass += ' bg-surface-container-lowest border-slate-border';
      }

      card.className = baseClass;

      const critIndicator = isCrit
        ? `<div class="absolute left-0 top-0 bottom-0 w-1.5 bg-crimson-critical ${isDone ? '' : 'animate-pulse'}"></div>`
        : '';

      const priorityBadge = isCrit
        ? `<span class="font-label-sm text-label-sm bg-crimson-critical text-pixel-white px-space-xs py-0.5 shadow-[1px_1px_0_0_#090D16] font-bold">🔥 중요</span>`
        : `<span class="font-label-sm text-label-sm bg-surface-container text-on-surface-variant px-space-xs py-0.5 shadow-[1px_1px_0_0_#090D16]">일반 모험</span>`;

      // Individual Action Button (Complete / Completed)
      const completeBtnHtml = isDone
        ? `<button class="quest-action-btn bg-surface-container hover:bg-surface-bright text-secondary border border-secondary/40 font-label-md text-label-md px-3 py-1.5 shadow-[2px_2px_0_0_#090D16] flex items-center gap-1 font-bold active:translate-x-0.5 active:translate-y-0.5 cursor-pointer" title="완료 취소">
            <span class="material-symbols-outlined text-[18px]">check_circle</span>
            <span>완료됨 ✓</span>
          </button>`
        : isCrit
        ? `<button class="quest-action-btn bg-primary-container hover:bg-gold-light text-on-primary-container border border-gold-dark font-label-md text-label-md px-4 py-1.5 shadow-[3px_3px_0_0_#090D16] flex items-center gap-1 font-bold animate-pulse active:translate-x-1 active:translate-y-1 cursor-pointer" title="중요 퀘스트 완료하기">
            <span class="material-symbols-outlined text-[18px]">swords</span>
            <span>💥 퀘스트 완료!</span>
          </button>`
        : `<button class="quest-action-btn bg-secondary hover:brightness-110 text-on-secondary border border-emerald-dark font-label-md text-label-md px-4 py-1.5 shadow-[3px_3px_0_0_#090D16] flex items-center gap-1 font-bold active:translate-x-1 active:translate-y-1 cursor-pointer" title="퀘스트 완료하기">
            <span class="material-symbols-outlined text-[18px]">check</span>
            <span>완료하기 ⚔️</span>
          </button>`;

      const rewardBadge = isDone
        ? `<span class="font-label-sm text-label-sm text-secondary font-bold flex items-center gap-0.5">
            +${todo.expReward} EXP 완료
          </span>`
        : isCrit
        ? `<span class="font-label-sm text-label-sm text-crimson-critical font-bold flex items-center gap-0.5">
            +30 EXP [CRITICAL]
          </span>`
        : `<span class="font-label-sm text-label-sm text-primary font-bold flex items-center gap-0.5">
            +10 EXP
          </span>`;

      card.innerHTML = `
        ${critIndicator}
        <div class="flex items-start md:items-center gap-space-md min-w-0 ${isCrit ? 'pl-1.5' : ''} flex-grow">
          <!-- Retro Checkbox Icon -->
          <button class="quest-check-toggle w-7 h-7 flex-shrink-0 bg-surface-container-lowest shadow-[inset_2px_2px_0_0_#090D16,2px_2px_0_0_#090D16] border border-slate-border flex items-center justify-center transition-all cursor-pointer">
            <span class="material-symbols-outlined text-[20px] ${isDone ? 'text-secondary' : 'text-primary-container opacity-40 group-hover:opacity-100'}">
              ${isDone ? 'check_box' : 'check_box_outline_blank'}
            </span>
          </button>
          <div class="flex flex-col min-w-0">
            <div class="flex items-center gap-space-xs flex-wrap">
              ${priorityBadge}
              <span class="font-label-sm text-label-sm bg-surface-container text-on-surface-variant px-space-xs py-0.5 shadow-[1px_1px_0_0_#090D16]">
                ${todo.category || '퀘스트'}
              </span>
              <span class="text-outline text-label-sm">•</span>
              ${rewardBadge}
            </div>
            <span class="quest-title font-body-lg text-body-lg ${isDone ? 'line-through text-on-surface-variant' : isCrit ? 'text-pixel-white font-bold' : 'text-on-surface'} truncate mt-1">
              ${todo.title}
            </span>
          </div>
        </div>

        <!-- Action Buttons Area: Dedicated Complete Button + Delete Button -->
        <div class="flex items-center gap-space-sm flex-shrink-0 self-end md:self-center">
          ${completeBtnHtml}
          <button class="quest-delete-btn text-outline hover:text-crimson-critical p-1 transition-colors cursor-pointer" title="퀘스트 삭제">
            <span class="material-symbols-outlined text-[20px]">delete</span>
          </button>
        </div>
      `;

      // Helper function to handle toggle
      function handleToggle() {
        const result = store.toggleTodo(todo.id);
        if (!result) return;

        if (result.item.completed) {
          if (todo.priority === 'critical') {
            triggerCriticalStrikeEffect();
          } else {
            sounds.playDone();
          }

          if (result.leveledUp) {
            if (result.stageEvolved) {
              showEvolutionComparisonModal(result.oldStage, result.newStage);
            } else {
              triggerLevelUpCelebration(result.oldLevel, result.newLevel);
            }
          }
        } else {
          sounds.playClick();
        }
      }

      // Checkbox Toggle Event
      const checkBtn = card.querySelector('.quest-check-toggle');
      if (checkBtn) checkBtn.addEventListener('click', handleToggle);

      // Dedicated Action Button Event
      const actionBtn = card.querySelector('.quest-action-btn');
      if (actionBtn) actionBtn.addEventListener('click', handleToggle);

      // Delete Event
      const deleteBtn = card.querySelector('.quest-delete-btn');
      if (deleteBtn) {
        deleteBtn.addEventListener('click', () => {
          sounds.playClick();
          store.deleteTodo(todo.id);
        });
      }

      questContainer.appendChild(card);
    });

    activeQuestCount.textContent = activeCount;
    completedQuestCount.textContent = doneCount;
  }

  // -------------------------------------------------------------
  // Calendar View Controller
  // -------------------------------------------------------------
  function renderCalendar() {
    const year = calendarDate.getFullYear();
    const month = calendarDate.getMonth();

    calBannerDate.textContent = `${year}. ${String(month + 1).padStart(2, '0')}`;
    calCurrentMonthLabel.textContent = `${year}년 ${month + 1}월`;
    calStreakDisplay.textContent = `${store.state.hero.streak}일 연속`;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = new Date(year, month, 0).getDate();

    calMonthDaysGrid.innerHTML = '';

    // Leading days
    for (let i = firstDay - 1; i >= 0; i--) {
      const dayNum = prevMonthDays - i;
      const cell = document.createElement('div');
      cell.className = 'min-h-[70px] bg-surface-container-lowest/40 border border-slate-border/30 p-1 opacity-30 font-label-sm text-[11px]';
      cell.textContent = dayNum;
      calMonthDaysGrid.appendChild(cell);
    }

    const todayStr = new Date().toISOString().slice(0, 10);

    for (let d = 1; d <= daysInMonth; d++) {
      const dStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const isToday = dStr === todayStr;
      const isSelected = dStr === selectedCalDay;

      const dayTodos = store.state.todos.filter((t) => (t.createdAt || '').slice(0, 10) === dStr);
      const hasCompleted = dayTodos.some((t) => t.completed);
      const hasCritical = dayTodos.some((t) => t.priority === 'critical');

      const cell = document.createElement('div');
      let cellClass = 'min-h-[70px] bg-surface-container-lowest border p-1 font-label-sm text-[11px] flex flex-col justify-between cursor-pointer transition-all hover:bg-surface-container';

      if (isSelected) {
        cellClass += ' ring-2 ring-primary-container border-primary-container shadow-[2px_2px_0_0_#090D16]';
      } else if (isToday) {
        cellClass += ' border-secondary bg-surface-container-low';
      } else {
        cellClass += ' border-slate-border/50';
      }

      cell.className = cellClass;

      let markers = '';
      if (dayTodos.length > 0) {
        markers = `
          <div class="flex items-center gap-1 mt-1 flex-wrap">
            ${hasCompleted ? '<span class="w-2 h-2 bg-secondary inline-block" title="완료한 퀘스트"></span>' : ''}
            ${hasCritical ? '<span class="w-2 h-2 bg-crimson-critical inline-block" title="중요 퀘스트"></span>' : ''}
            <span class="text-[10px] text-on-surface-variant">(${dayTodos.length})</span>
          </div>
        `;
      }

      cell.innerHTML = `
        <div class="flex items-center justify-between">
          <span class="${isToday ? 'text-secondary font-bold' : 'text-on-surface'}">${d}</span>
          ${isToday ? '<span class="text-[9px] bg-secondary text-on-secondary px-1 font-bold">TODAY</span>' : ''}
        </div>
        ${markers}
      `;

      cell.addEventListener('click', () => {
        sounds.playClick();
        selectedCalDay = dStr;
        renderCalendar();
      });

      calMonthDaysGrid.appendChild(cell);
    }

    renderCalendarDayDetails(selectedCalDay);
  }

  function renderCalendarDayDetails(dateStr) {
    calSelectedDateLabel.textContent = `${dateStr} 퀘스트 목록`;

    let list = store.state.todos.filter((t) => (t.createdAt || '').slice(0, 10) === dateStr);

    if (calFilter === 'completed') list = list.filter((t) => t.completed);
    else if (calFilter === 'pending') list = list.filter((t) => !t.completed);
    else if (calFilter === 'critical') list = list.filter((t) => t.priority === 'critical');

    calDayStats.textContent = `총 ${list.length}개`;
    calDayTodoList.innerHTML = '';

    if (list.length === 0) {
      calDayTodoList.innerHTML = `
        <div class="p-space-md text-center text-on-surface-variant font-body-sm bg-surface-container-lowest border border-slate-border">
          해당 날짜에 등록된 퀘스트가 없습니다.
        </div>
      `;
      return;
    }

    list.forEach((todo) => {
      const item = document.createElement('div');
      item.className = 'bg-surface-container-lowest p-space-xs border border-slate-border flex items-center justify-between gap-space-sm';
      item.innerHTML = `
        <div class="flex items-center gap-space-xs min-w-0">
          <span class="material-symbols-outlined text-[16px] ${todo.completed ? 'text-secondary' : 'text-primary-container'}">
            ${todo.completed ? 'check_circle' : 'circle'}
          </span>
          <span class="font-body-sm text-[12px] truncate ${todo.completed ? 'line-through text-on-surface-variant' : 'text-on-surface'}">
            ${todo.title}
          </span>
        </div>
        <span class="font-label-sm text-[10px] ${todo.priority === 'critical' ? 'text-crimson-critical font-bold' : 'text-primary'}">
          +${todo.expReward} EXP
        </span>
      `;
      calDayTodoList.appendChild(item);
    });
  }

  calPrevMonthBtn.addEventListener('click', () => {
    sounds.playClick();
    calendarDate.setMonth(calendarDate.getMonth() - 1);
    renderCalendar();
  });

  calNextMonthBtn.addEventListener('click', () => {
    sounds.playClick();
    calendarDate.setMonth(calendarDate.getMonth() + 1);
    renderCalendar();
  });

  calTodayBtn.addEventListener('click', () => {
    sounds.playClick();
    calendarDate = new Date();
    selectedCalDay = new Date().toISOString().slice(0, 10);
    renderCalendar();
  });

  calFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      sounds.playClick();
      calFilterBtns.forEach((b) => {
        b.className = 'cal-filter-btn px-space-sm py-space-xs font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface';
      });
      btn.className = 'cal-filter-btn px-space-sm py-space-xs font-label-sm text-label-sm bg-primary text-on-primary shadow-sm font-bold';
      calFilter = btn.dataset.filter || 'all';
      renderCalendarDayDetails(selectedCalDay);
    });
  });

  // -------------------------------------------------------------
  // Inventory & Chest View Controller
  // -------------------------------------------------------------
  function renderInventoryView() {
    const hero = store.state.hero;
    const stage = store.getCurrentStage();

    // Live 16-Bit Fitting Avatar
    inventoryFittingAvatar.innerHTML = render16BitHeroHTML(hero.classId, stage.stage, hero.equippedAccessory, 160);

    const equippedAccObj = ACCESSORY_CODEX[hero.equippedAccessory];
    if (equippedAccObj) {
      fittingAccName.textContent = `${equippedAccObj.icon} ${equippedAccObj.name} (${equippedAccObj.rarity})`;
      fittingAccDesc.textContent = `${equippedAccObj.desc} [효과: ${equippedAccObj.stat}]`;
    } else {
      fittingAccName.textContent = '[미장착]';
      fittingAccDesc.textContent = '현재 장착된 악세서리가 없습니다. 인벤토리에서 원하는 아이템을 클릭해 장착하세요.';
    }

    const allAccKeys = Object.keys(ACCESSORY_CODEX);
    inventoryCountText.textContent = `${store.state.inventory.length} / ${allAccKeys.length} 수집`;

    inventoryGridSlots.innerHTML = '';
    allAccKeys.forEach((key) => {
      const acc = ACCESSORY_CODEX[key];
      const isOwned = store.state.inventory.includes(key);
      const isEquipped = hero.equippedAccessory === key;

      const slot = document.createElement('div');
      let slotClass = 'bg-surface-container-lowest p-space-sm shadow-[inset_2px_2px_0_0_#090D16] border flex flex-col items-center text-center gap-1 cursor-pointer transition-all';

      if (isEquipped) {
        slotClass += ' border-secondary ring-2 ring-secondary bg-surface-container-low shadow-[0_0_8px_#34D399]';
      } else if (isOwned) {
        slotClass += ' border-slate-border hover:border-primary-container hover:bg-surface-container';
      } else {
        slotClass += ' border-slate-border/30 opacity-40 hover:opacity-60';
      }

      slot.className = slotClass;
      slot.innerHTML = `
        <div class="relative w-12 h-12 bg-surface-container flex items-center justify-center text-2xl shadow-[2px_2px_0_0_#090D16]">
          ${isOwned ? acc.icon : '🔒'}
          ${isEquipped ? '<div class="absolute -top-1 -right-1 bg-secondary text-on-secondary text-[8px] font-bold px-1">착용중</div>' : ''}
        </div>
        <span class="font-label-sm text-[11px] font-bold truncate w-full ${isEquipped ? 'text-secondary' : isOwned ? 'text-on-surface' : 'text-outline'}">
          ${acc.name}
        </span>
        <span class="font-label-sm text-[9px] text-primary-container truncate w-full">
          ${acc.rarity.split(' ')[0]}
        </span>
      `;

      slot.addEventListener('click', () => {
        if (!isOwned) {
          sounds.playClick();
          alert(`[${acc.name}] 아직 획득하지 못한 아이템입니다. 7일 출석 완료 후 전설 보물상자를 개봉해 획득하세요!`);
          return;
        }

        sounds.playClick();
        store.toggleAccessory(key);
      });

      inventoryGridSlots.appendChild(slot);
    });

    const isAttendanceFull = store.state.attendance.days.every(Boolean);
    const isClaimed = store.state.attendance.chestClaimed;

    if (isClaimed) {
      openChestActionBtn.disabled = true;
      openChestActionBtn.className = 'mt-space-md w-64 bg-surface-variant text-on-surface font-headline-sm text-headline-sm py-space-sm shadow-none border border-slate-border font-bold opacity-60 cursor-not-allowed';
      openChestActionBtn.innerHTML = '<span>이미 개봉 완료됨 ✓</span>';
    } else if (isAttendanceFull) {
      openChestActionBtn.disabled = false;
      openChestActionBtn.className = 'mt-space-md w-64 bg-primary-container hover:bg-gold-light text-on-primary-container font-headline-sm text-headline-sm py-space-sm shadow-[4px_4px_0_0_#090D16] border border-gold-dark font-bold active:translate-x-1 active:translate-y-1 transition-all flex items-center justify-center gap-space-xs animate-bounce cursor-pointer';
      openChestActionBtn.innerHTML = '<span class="material-symbols-outlined text-[24px]">key</span> <span>보물상자 열기!</span>';
    } else {
      openChestActionBtn.disabled = false;
      openChestActionBtn.className = 'mt-space-md w-64 bg-surface-container hover:bg-surface-bright text-primary font-headline-sm text-headline-sm py-space-sm shadow-[2px_2px_0_0_#090D16] border border-slate-border font-bold active:translate-x-0.5 active:translate-y-0.5 cursor-pointer';
      openChestActionBtn.innerHTML = '<span>출석 7일 미완료 (체험하기)</span>';
    }
  }

  function handleOpenChest() {
    const isAttendanceFull = store.state.attendance.days.every(Boolean);

    if (!isAttendanceFull) {
      const confirmTest = confirm("아직 7일 출석이 완료되지 않았습니다! 시연용 치트를 활성화하여 7일 출석을 완료하고 보물상자를 개봉하시겠습니까?");
      if (confirmTest) {
        store.cheatCompleteAttendance();
      } else {
        return;
      }
    }

    sounds.playClick();
    chestSpriteSvg.classList.add('animate-bounce');
    openChestActionBtn.disabled = true;
    openChestActionBtn.innerText = '개봉 중... ⏳';

    setTimeout(() => {
      chestSpriteSvg.classList.remove('animate-bounce');
      const result = store.claimWeeklyChest();

      if (result.success) {
        sounds.playChestOpen();

        if (window.confetti) {
          window.confetti({ particleCount: 150, spread: 90, origin: { y: 0.5 } });
        }

        latestGachaResult = result.accessory;
        gachaIconDisplay.textContent = result.accessory.icon;
        gachaRarityTag.textContent = result.accessory.rarity;
        gachaAccTitle.textContent = result.accessory.name;
        gachaAccDesc.textContent = result.accessory.desc;
        gachaStatTag.textContent = `부여 효과: ${result.accessory.stat}` + (result.isNew ? ' [NEW 획득!]' : ' [중복 보관]');

        gachaModal.classList.remove('hidden');
        gachaModal.classList.add('flex');
      }

      renderInventoryView();
    }, 800);
  }

  openChestActionBtn.addEventListener('click', handleOpenChest);
  chestBoxContainer.addEventListener('click', handleOpenChest);

  gachaEquipNowBtn.addEventListener('click', () => {
    sounds.playDone();
    if (latestGachaResult) {
      store.toggleAccessory(latestGachaResult.id);
    }
    gachaModal.classList.add('hidden');
    gachaModal.classList.remove('flex');
  });

  gachaCloseBtn.addEventListener('click', () => {
    sounds.playClick();
    gachaModal.classList.add('hidden');
    gachaModal.classList.remove('flex');
  });

  // -------------------------------------------------------------
  // Title & Evolution Codex Modal
  // -------------------------------------------------------------
  function openCodexModal() {
    sounds.playClick();
    codexViewingClass = store.state.hero.classId;
    renderCodexList();
    codexModal.classList.remove('hidden');
    codexModal.classList.add('flex');
  }

  function renderCodexList() {
    codexClassTabs.querySelectorAll('button').forEach((b) => {
      const isCur = b.dataset.tabClass === codexViewingClass;
      b.className = isCur
        ? 'flex-1 py-1 font-label-sm text-[12px] bg-primary text-on-primary font-bold shadow-sm'
        : 'flex-1 py-1 font-label-sm text-[12px] text-on-surface-variant hover:text-on-surface';
    });

    const stages = EVOLUTION_CODEX[codexViewingClass] || [];
    const currentHeroLevel = store.state.hero.level;
    const isSameClass = store.state.hero.classId === codexViewingClass;

    codexStagesList.innerHTML = '';
    stages.forEach((st) => {
      const isAchieved = isSameClass && currentHeroLevel >= st.minLv;
      const isCurrent = isSameClass && currentHeroLevel >= st.minLv && currentHeroLevel <= st.maxLv;

      const item = document.createElement('div');
      let itemClass = 'bg-surface-container-lowest p-space-sm border flex items-center justify-between gap-space-sm transition-all';

      if (isCurrent) {
        itemClass += ' border-primary-container bg-surface-container-high shadow-[2px_2px_0_0_#090D16] ring-1 ring-primary-container';
      } else if (isAchieved) {
        itemClass += ' border-secondary/50 bg-surface-container/60';
      } else {
        itemClass += ' border-slate-border/40 opacity-50';
      }

      const miniSpriteHtml = typeof window.generate16BitSpriteSVG === 'function'
        ? window.generate16BitSpriteSVG(codexViewingClass, st.stage, null)
        : '';

      item.className = itemClass;
      item.innerHTML = `
        <div class="flex items-center gap-space-sm min-w-0">
          <div class="w-14 h-14 bg-slate-900/95 flex items-center justify-center shadow-[inset_1px_1px_0_0_#090D16] border ${isCurrent ? 'border-primary-container' : 'border-slate-border'} shrink-0 p-0.5 relative overflow-hidden">
            ${miniSpriteHtml}
          </div>
          <div class="flex flex-col min-w-0">
            <div class="flex items-center gap-space-xs flex-wrap">
              <span class="font-label-sm text-[10px] text-primary-container font-bold">STAGE ${String(st.stage).padStart(2, '0')}</span>
              <span class="font-label-sm text-[10px] text-on-surface-variant">(Lv.${st.minLv} ~ ${st.maxLv})</span>
              ${st.formName ? `<span class="bg-surface-container-high text-secondary text-[9px] px-1 border border-slate-border/60 font-pixel">${st.formName}</span>` : ''}
              ${isCurrent ? '<span class="bg-primary-container text-on-primary-container text-[8px] font-bold px-1">현재 단계</span>' : ''}
            </div>
            <span class="font-title-md text-title-md ${isAchieved ? 'text-primary font-bold' : 'text-on-surface'} truncate">
              [칭호: ${st.title}]
            </span>
            <span class="font-body-sm text-[11px] text-on-surface-variant truncate">
              ${st.desc} • [특성: ${st.perk || '능력 강화'}]
            </span>
          </div>
        </div>
        <div class="flex items-center gap-space-xs shrink-0">
          <button type="button" class="codex-compare-stage-btn bg-surface-container hover:bg-surface-bright text-secondary border border-secondary/40 text-[10px] px-2 py-1 font-bold shadow-sm flex items-center gap-0.5 cursor-pointer active:translate-x-0.5 active:translate-y-0.5" title="이전 단계와 이 단계 외형 비교하기">
            <span class="material-symbols-outlined text-[13px]">compare</span>
            <span>외형 비교</span>
          </button>
          <span class="font-label-sm text-[11px] ${isAchieved ? 'text-secondary font-bold' : 'text-outline'} min-w-[68px] text-right">
            ${isAchieved ? '해금 완료 ✓' : '🔒 Lv.' + st.minLv}
          </span>
        </div>
      `;
      const cmpBtn = item.querySelector('.codex-compare-stage-btn');
      if (cmpBtn) {
        cmpBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          sounds.playClick();
          const classStages = EVOLUTION_CODEX[codexViewingClass] || [];
          const curHeroStage = store.getCurrentStage();
          let prevStage;
          if (isSameClass && curHeroStage.stage !== st.stage) {
            prevStage = curHeroStage;
          } else {
            const prevIdx = st.stage > 1 ? st.stage - 1 : 1;
            prevStage = classStages.find((s) => s.stage === prevIdx) || classStages[0];
          }
          const targetAfter = (prevStage.stage === st.stage && st.stage < 20)
            ? (classStages.find((s) => s.stage === st.stage + 1) || st)
            : st;
          showEvolutionComparisonModal(prevStage, targetAfter, codexViewingClass);
        });
      }
      codexStagesList.appendChild(item);
    });
  }

  codexClassTabs.querySelectorAll('button').forEach((b) => {
    b.addEventListener('click', () => {
      sounds.playClick();
      codexViewingClass = b.dataset.tabClass;
      renderCodexList();
    });
  });

  openCodexModalBtn.addEventListener('click', openCodexModal);
  openCodexFromNavBtn.addEventListener('click', openCodexModal);
  if (openCodexMobileBtn) openCodexMobileBtn.addEventListener('click', openCodexModal);
  closeCodexModalBtn.addEventListener('click', () => {
    sounds.playClick();
    codexModal.classList.add('hidden');
    codexModal.classList.remove('flex');
  });
  codexCloseBtn.addEventListener('click', () => {
    sounds.playClick();
    codexModal.classList.add('hidden');
    codexModal.classList.remove('flex');
  });

  // -------------------------------------------------------------
  // Settings & Dev Cheats Modal
  // -------------------------------------------------------------
  openSettingsBtn.addEventListener('click', () => {
    sounds.playClick();
    settingsModal.classList.remove('hidden');
    settingsModal.classList.add('flex');
  });

  closeSettingsModalBtn.addEventListener('click', () => {
    sounds.playClick();
    settingsModal.classList.add('hidden');
    settingsModal.classList.remove('flex');
  });

  closeSettingsOkBtn.addEventListener('click', () => {
    sounds.playClick();
    settingsModal.classList.add('hidden');
    settingsModal.classList.remove('flex');
  });

  // Cheats
  cheatExpBtn.addEventListener('click', () => {
    sounds.playDone();
    store.cheatGainExp(50);
  });

  cheatLevelBtn.addEventListener('click', () => {
    sounds.playLevelUp();
    const oldLv = store.state.hero.level;
    const oldStage = store.getCurrentStage();
    const res = store.cheatLevelUp(5);
    const newLv = store.state.hero.level;
    const newStage = store.getCurrentStage();
    if (newStage.stage > oldStage.stage) {
      showEvolutionComparisonModal(oldStage, newStage);
    } else {
      triggerLevelUpCelebration(oldLv, newLv);
    }
  });

  cheatAttendBtn.addEventListener('click', () => {
    sounds.playChestOpen();
    store.cheatCompleteAttendance();
    alert("7일 출석 도장이 모두 완료되었습니다! 이제 주간 보물상자를 개봉할 수 있습니다.");
  });

  cheatOpenClassModalBtn.addEventListener('click', () => {
    settingsModal.classList.add('hidden');
    settingsModal.classList.remove('flex');
    openClassModal(false);
  });

  resetDataBtn.addEventListener('click', () => {
    if (confirm("정말로 모든 데이터를 초기화하시겠습니까? (새로고침됩니다)")) {
      store.resetAllData();
      location.reload();
    }
  });

  // Global ESC Key Handler
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      [codexModal, levelUpModal, gachaModal, settingsModal].forEach((m) => {
        m.classList.add('hidden');
        m.classList.remove('flex');
      });
      // Only close classSelectModal if class is already selected
      if (store.state.hero.classSelected) {
        classSelectModal.classList.add('hidden');
        classSelectModal.classList.remove('flex');
      }
    }
  });

  // -------------------------------------------------------------
  // Initial Store Subscription & App Boot
  // -------------------------------------------------------------
  store.subscribe(renderApp);
  renderApp(store.state);

  console.log("🎮 RPG Quest Todo Engine (16-Bit Upgraded) Booted.");
})();

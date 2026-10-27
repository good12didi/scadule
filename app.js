/**
 * RPG Quest Todo (갓생 모험가 투두리스트)
 * Engine, State Manager & 16-Bit Pixel Evolution Renderer
 */

// ==========================================
// 1. 8-Bit Retro Web Audio Synthesizer
// ==========================================
class RetroSoundEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    return this.muted;
  }

  playClick() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  playDone() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();
    osc1.type = 'square';
    osc1.frequency.setValueAtTime(587.33, now);
    gain1.gain.setValueAtTime(0.1, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
    osc1.connect(gain1);
    gain1.connect(this.ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.1);

    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();
    osc2.type = 'square';
    osc2.frequency.setValueAtTime(880, now + 0.08);
    gain2.gain.setValueAtTime(0.12, now + 0.08);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
    osc2.connect(gain2);
    gain2.connect(this.ctx.destination);
    osc2.start(now + 0.08);
    osc2.stop(now + 0.25);
  }

  playCritical() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(140, now);
    osc1.frequency.exponentialRampToValueAtTime(40, now + 0.3);
    gain1.gain.setValueAtTime(0.25, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
    osc1.connect(gain1);
    gain1.connect(this.ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.3);

    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();
    osc2.type = 'square';
    osc2.frequency.setValueAtTime(520, now + 0.05);
    osc2.frequency.exponentialRampToValueAtTime(1200, now + 0.25);
    gain2.gain.setValueAtTime(0.18, now + 0.05);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
    osc2.connect(gain2);
    gain2.connect(this.ctx.destination);
    osc2.start(now + 0.05);
    osc2.stop(now + 0.35);
  }

  playLevelUp() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const notes = [
      { f: 523.25, d: 0.12 },
      { f: 659.25, d: 0.12 },
      { f: 783.99, d: 0.12 },
      { f: 1046.50, d: 0.35 }
    ];
    let start = this.ctx.currentTime;
    notes.forEach((note) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(note.f, start);
      gain.gain.setValueAtTime(0.12, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + note.d);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(start);
      osc.stop(start + note.d);
      start += note.d * 0.85;
    });
  }

  playEvolution() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const notes = [
      { f: 440.00, d: 0.10 },
      { f: 554.37, d: 0.10 },
      { f: 659.25, d: 0.10 },
      { f: 880.00, d: 0.15 },
      { f: 1108.73, d: 0.15 },
      { f: 1318.51, d: 0.45 }
    ];
    let start = this.ctx.currentTime;
    notes.forEach((note) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(note.f, start);
      gain.gain.setValueAtTime(0.18, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + note.d);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(start);
      osc.stop(start + note.d);
      start += note.d * 0.75;
    });
  }

  playChestOpen() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const notes = [330, 392, 493.88, 587.33, 659.25, 783.99, 987.77, 1318.51];
    let start = this.ctx.currentTime;
    notes.forEach((freq) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, start);
      gain.gain.setValueAtTime(0.15, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.18);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(start);
      osc.stop(start + 0.18);
      start += 0.07;
    });
  }
}

const sounds = new RetroSoundEngine();

// ============================================================================
// 2. 20-Stage Evolution Codex (All 4 Classes: 7 Distinct Tiers x 초급/중급/고급/신화)
// ============================================================================
const EVOLUTION_CODEX = {
  // ⚔️ 전사 (Warrior): 견습 검사 ➔ 강철 기사 ➔ 흑철 중장기병 ➔ 룬 소드맨 ➔ 성기사 ➔ 드래곤 나이트 ➔ 투신
  warrior: [
    // Tier 1: 견습 검사 (Lv.1~9)
    { stage: 1, minLv: 1, maxLv: 4, title: "초급 견습 검사", desc: "붉은 머리띠와 가죽 조끼, 수련용 목검을 쥔 초심자 검사", formName: "견습 검사 (목검)", tier: "초급", perk: "+10% 체력 루틴 EXP" },
    { stage: 2, minLv: 5, maxLv: 9, title: "중급 견습 검사", desc: "철제 브로드소드와 둥근 나무 방패, 철제 견장으로 무장한 수련 검사", formName: "견습 검사 (철검&방패)", tier: "중급", perk: "+15% 기초 근력" },
    // Tier 2: 강철 기사 (Lv.10~19)
    { stage: 3, minLv: 10, maxLv: 14, title: "초급 강철 기사", desc: "은빛 강철 흉갑과 푸른 기사 망토, 문장 방패를 수여받은 정식 기사", formName: "강철 기사 (은빛 흉갑)", tier: "초급", perk: "+15% 방어력 및 끈기" },
    { stage: 4, minLv: 15, maxLv: 19, title: "고급 강철 기사", desc: "푸른 깃털 장식 강철 투구와 빛나는 롱소드로 무장한 정예 기사", formName: "강철 기사 (깃털 투구)", tier: "고급", perk: "+20% 돌파 추진력" },
    // Tier 3: 흑철 중장기병 (Lv.20~34)
    { stage: 5, minLv: 20, maxLv: 24, title: "초급 흑철 중장기병", desc: "칠흑빛 흑철 풀플레이트 중갑과 양손 대검(츠바이핸더)을 든 중장기병", formName: "흑철 기병 (흑철 중갑)", tier: "초급", perk: "+20% 불굴의 투지" },
    { stage: 6, minLv: 25, maxLv: 29, title: "중급 흑철 중장기병", desc: "거대한 황소 뿔 투구와 가시 어깨 갑주, 흑철 타워실드를 장착한 파괴자", formName: "흑철 기병 (뿔 투구&중갑)", tier: "중급", perk: "+25% 철벽 방어" },
    { stage: 7, minLv: 30, maxLv: 34, title: "고급 흑철 중장기병", desc: "투구 속 붉은 안광을 번뜩이며 검신에 흑염이 타오르는 흑철의 지배자", formName: "흑철 기병 (흑염 각성)", tier: "고급", perk: "+30% 일격 분쇄력" },
    // Tier 4: 룬 소드맨 (Lv.35~49)
    { stage: 8, minLv: 35, maxLv: 39, title: "초급 룬 소드맨", desc: "청록빛 고대 마법 룬이 새겨진 미스릴 갑주와 마나 블레이드를 든 마검사", formName: "룬 소드맨 (미스릴 갑주)", tier: "초급", perk: "+25% 마나 검기" },
    { stage: 9, minLv: 40, maxLv: 44, title: "중급 룬 소드맨", desc: "등 뒤의 마법진과 공명하며 홀로그램 룬 방패를 전개하는 상급 마검사", formName: "룬 소드맨 (룬 마법진)", tier: "중급", perk: "+30% 룬 공명 가속" },
    { stage: 10, minLv: 45, maxLv: 49, title: "고급 룬 소드맨", desc: "양손에 쌍검의 푸른 룬 블레이드를 쥐고 비전 검기를 폭주시키는 대마검사", formName: "룬 소드맨 (비전 쌍검)", tier: "고급", perk: "+35% 비전 이도류" },
    // Tier 5: 성기사 (Lv.50~64)
    { stage: 11, minLv: 50, maxLv: 54, title: "초급 성기사", desc: "순백과 황금의 성전사 갑주와 날개 투구, 십자 성검을 든 팔라딘", formName: "성기사 (황금 성갑)", tier: "초급", perk: "+35% 신성 가호" },
    { stage: 12, minLv: 55, maxLv: 59, title: "중급 성기사", desc: "거대한 황금 이지스 방패와 순백의 천사 날개를 펼친 수호 성기사", formName: "성기사 (천사 날개)", tier: "중급", perk: "+40% 성역의 방패" },
    { stage: 13, minLv: 60, maxLv: 64, title: "고급 성기사", desc: "4장의 찬란한 세라핌 빛의 날개와 성광의 엑스칼리버를 치켜든 대성기사", formName: "성기사 (4익 대성기사)", tier: "고급", perk: "+45% 심판의 성광" },
    // Tier 6: 드래곤 나이트 (Lv.65~79)
    { stage: 14, minLv: 65, maxLv: 69, title: "초급 드래곤 나이트", desc: "고룡의 진홍빛 비늘 갑주와 용각 투구, 용아(龍牙) 화염 대검을 쥔 용기사", formName: "드래곤 나이트 (용린 갑주)", tier: "초급", perk: "+40% 용의 투기" },
    { stage: 15, minLv: 70, maxLv: 74, title: "중급 드래곤 나이트", desc: "등 뒤에 거대한 화염 드래곤 날개를 펼치고 브레스 검기를 뿜는 상위 용기사", formName: "드래곤 나이트 (화룡 날개)", tier: "중급", perk: "+45% 드래곤 브레스" },
    { stage: 16, minLv: 75, maxLv: 79, title: "고급 드래곤 나이트", desc: "고대 신룡의 이중 화염 날개와 태양빛 용제를 거느린 드래곤 로드", formName: "드래곤 나이트 (신룡제)", tier: "고급", perk: "+50% 용제의 지배력" },
    // Tier 7: 투신 (Lv.80~100)
    { stage: 17, minLv: 80, maxLv: 84, title: "강림한 투신", desc: "천상의 황금 신갑과 신성 광륜, 부유하는 2자루의 신검과 함께 강림한 투신", formName: "투신 (강림 2신검)", tier: "강림", perk: "+55% 투신의 권능" },
    { stage: 18, minLv: 85, maxLv: 89, title: "불멸의 투신", desc: "황금 신익(날개)과 등 뒤의 4자루 부유 신검이 호위하는 불멸 등급 투신", formName: "투신 (불멸 4신검)", tier: "불멸", perk: "+65% 불멸의 무력" },
    { stage: 19, minLv: 90, maxLv: 94, title: "태초의 투신", desc: "6자루의 창세 신검 판넬과 태초의 황금 세라핌 날개를 펼친 태초 등급 투신", formName: "투신 (태초 6신검)", tier: "태초", perk: "+80% 태초의 검제" },
    { stage: 20, minLv: 95, maxLv: 100, title: "창세의 절대 투신", desc: "우주의 모든 무예를 통솔하며 삼라만상을 일격에 베는 신화 등급 갓생 절대 투신", formName: "투신 (창세 절대 신검제)", tier: "창세/절대", perk: "+100% 갓생 절대 패왕" }
  ],

  // 🏹 궁수 (Archer): 사냥꾼 ➔ 레인저 ➔ 명사수 ➔ 엘프 아처 ➔ 뇌전 신궁 ➔ 차원 저격수 ➔ 성좌 신궁
  archer: [
    // Tier 1: 사냥꾼 (Lv.1~9)
    { stage: 1, minLv: 1, maxLv: 4, title: "초급 사냥꾼", desc: "붉은 깃털이 꽂힌 녹색 사냥 모자와 나무 단궁을 든 초보 사냥꾼", formName: "사냥꾼 (나무 단궁)", tier: "초급", perk: "+10% 집중력 EXP" },
    { stage: 2, minLv: 5, maxLv: 9, title: "중급 사냥꾼", desc: "가죽 흉갑과 강화 리커브 보우, 강철 화살을 갖춘 숙련 사냥꾼", formName: "사냥꾼 (강화 단궁)", tier: "중급", perk: "+15% 정밀 조준" },
    // Tier 2: 레인저 (Lv.10~19)
    { stage: 3, minLv: 10, maxLv: 14, title: "초급 레인저", desc: "깊은 숲의 위장 후드 망토와 대형 장궁(롱보우)으로 무장한 정식 레인저", formName: "레인저 (숲의 장궁)", tier: "초급", perk: "+15% 기동성" },
    { stage: 4, minLv: 15, maxLv: 19, title: "고급 레인저", desc: "황금빛 사냥매 동료와 함께 바람을 가르는 관통 화살을 쏘는 베테랑 레인저", formName: "레인저 (황금 사냥매)", tier: "고급", perk: "+20% 매의 눈 포착" },
    // Tier 3: 명사수 (Lv.20~34)
    { stage: 5, minLv: 20, maxLv: 24, title: "초급 명사수", desc: "에메랄드 질풍 경갑과 휘날리는 스카프, 이중 시위 활을 든 명사수", formName: "명사수 (질풍의 활)", tier: "초급", perk: "+20% 속사 능력" },
    { stage: 6, minLv: 25, maxLv: 29, title: "중급 명사수", desc: "회오리 바람이 감기는 폭풍의 대궁으로 백발백중 저격하는 상급 명사수", formName: "명사수 (폭풍 회오리)", tier: "중급", perk: "+25% 치명타 저격" },
    { stage: 7, minLv: 30, maxLv: 34, title: "고급 명사수", desc: "초록빛 바람 정령 날개를 펼치고 3연속 멀티샷 폭풍 화살을 날리는 지배자", formName: "명사수 (질풍 날개&멀티샷)", tier: "고급", perk: "+30% 폭풍 3연사" },
    // Tier 4: 엘프 아처 (Lv.35~49)
    { stage: 8, minLv: 35, maxLv: 39, title: "초급 엘프 아처", desc: "은빛 긴 머리와 달빛 서클릿, 반달 모양의 실버 문보우를 각성한 엘프 궁수", formName: "엘프 아처 (실버 문보우)", tier: "초급", perk: "+25% 달빛 마력화살" },
    { stage: 9, minLv: 40, maxLv: 44, title: "중급 엘프 아처", desc: "반투명한 푸른 달빛 요정 날개를 펼치고 별빛 화살을 당기는 상급 엘프 궁수", formName: "엘프 아처 (달빛 요정날개)", tier: "중급", perk: "+30% 요정의 가호" },
    { stage: 10, minLv: 45, maxLv: 49, title: "고급 엘프 아처", desc: "4장의 찬란한 루나 페어리 윙과 만월의 성궁으로 밤하늘을 수놓는 하이엘프", formName: "엘프 아처 (만월 하이엘프)", tier: "고급", perk: "+35% 별빛 유성우" },
    // Tier 5: 뇌전 신궁 (Lv.50~64)
    { stage: 11, minLv: 50, maxLv: 54, title: "초급 뇌전 신궁", desc: "황금과 푸른 번개가 흐르는 발키리 갑주와 번개 대궁을 쥔 뇌전 신궁", formName: "뇌전 신궁 (번개 대궁)", tier: "초급", perk: "+35% 뇌전 관통" },
    { stage: 12, minLv: 55, maxLv: 59, title: "중급 뇌전 신궁", desc: "등 뒤에 황금 전격 날개를 펼치고 벼락 창 화살을 쏘는 상위 뇌전 신궁", formName: "뇌전 신궁 (황금 뇌전익)", tier: "중급", perk: "+40% 천벌의 벼락" },
    { stage: 13, minLv: 60, maxLv: 64, title: "고급 뇌전 신궁", desc: "4장의 폭풍 발키리 날개와 뇌신의 전격 멀티샷으로 적을 섬멸하는 뇌제", formName: "뇌전 신궁 (뇌신 발키리)", tier: "고급", perk: "+45% 광속 천벌" },
    // Tier 6: 차원 저격수 (Lv.65~79)
    { stage: 14, minLv: 65, maxLv: 69, title: "초급 차원 저격수", desc: "보랏빛 아스트랄 코트와 홀로그램 조준 바이저, 차원 대궁을 든 스나이퍼", formName: "차원 저격수 (아스트랄 보우)", tier: "초급", perk: "+40% 공간 왜곡 사격" },
    { stage: 15, minLv: 70, maxLv: 74, title: "중급 차원 저격수", desc: "등 뒤에 다중 차원 균열 포털을 열어 시공간 너머의 표적을 꿰뚫는 저격수", formName: "차원 저격수 (다중 차원포털)", tier: "중급", perk: "+45% 차원 균열" },
    { stage: 16, minLv: 75, maxLv: 79, title: "고급 차원 저격수", desc: "블랙홀 코어 대궁에서 3갈래 보이드 혜성 화살을 폭격하는 차원의 지배자", formName: "차원 저격수 (보이드 마스터)", tier: "고급", perk: "+50% 블랙홀 저격" },
    // Tier 7: 성좌 신궁 (Lv.80~100)
    { stage: 17, minLv: 80, maxLv: 84, title: "강림한 성좌 신궁", desc: "천상의 황금 성좌 갑주와 세라핌 날개, 은하수 대궁을 들고 강림한 신궁", formName: "성좌 신궁 (강림 세라핌)", tier: "강림", perk: "+55% 성좌의 인도" },
    { stage: 18, minLv: 85, maxLv: 89, title: "불멸의 성좌 신궁", desc: "황도 12궁 성좌륜과 불멸의 별빛 화살로 영원히 빗나가지 않는 불멸 등급 신궁", formName: "성좌 신궁 (불멸 성좌륜)", tier: "불멸", perk: "+65% 불멸의 필중" },
    { stage: 19, minLv: 90, maxLv: 94, title: "태초의 성좌 신궁", desc: "6장의 천상 황금 날개와 태초의 태양풍 화살을 당기는 태초 등급 신궁", formName: "성좌 신궁 (태초의 태양궁)", tier: "태초", perk: "+80% 태초의 빛화살" },
    { stage: 20, minLv: 95, maxLv: 100, title: "창세의 절대 신궁", desc: "우주의 모든 은하를 활시위 삼아 갓생의 목표를 즉시 관통하는 창세 절대 신궁", formName: "성좌 신궁 (창세 갤럭시보우)", tier: "창세/절대", perk: "+100% 갓생 절대 명궁" }
  ],

  // 🧙 마법사 (Mage): 견습 마법사 ➔ 원소 마도사 ➔ 아크메이지 ➔ 빙뢰 현자 ➔ 홍련 대마도사 ➔ 시공 마도황 ➔ 마도신
  mage: [
    // Tier 1: 견습 마법사 (Lv.1~9)
    { stage: 1, minLv: 1, maxLv: 4, title: "초급 견습 마법사", desc: "커다란 남색 고깔모자와 수습생 로브, 작은 나무 완드를 든 초보 마법사", formName: "견습 마법사 (나무 완드)", tier: "초급", perk: "+10% 지혜/학습 EXP" },
    { stage: 2, minLv: 5, maxLv: 9, title: "중급 견습 마법사", desc: "푸른 마나 수정 지팡이와 마력 구체를 띄운 상급 견습 마법사", formName: "견습 마법사 (마나 수정장)", tier: "중급", perk: "+15% 마나 집중" },
    // Tier 2: 원소 마도사 (Lv.10~19)
    { stage: 3, minLv: 10, maxLv: 14, title: "초급 원소 마도사", desc: "황금 별 자수 로브와 루비 보석 스태프를 장비한 정식 원소 마도사", formName: "원소 마도사 (루비 스태프)", tier: "초급", perk: "+15% 원소 친화" },
    { stage: 4, minLv: 15, maxLv: 19, title: "고급 원소 마도사", desc: "화염·물·바람 3대 원소 구체가 주위를 공전하는 숙련 원소 마도사", formName: "원소 마도사 (3원소 오브)", tier: "고급", perk: "+20% 삼원소 증폭" },
    // Tier 3: 아크메이지 (Lv.20~34)
    { stage: 5, minLv: 20, maxLv: 24, title: "초급 아크메이지", desc: "화려한 보랏빛 대마법사 예복과 공중에 펼쳐진 고대 마도서를 부리는 아크메이지", formName: "아크메이지 (고대 마도서)", tier: "초급", perk: "+20% 비전 마도학" },
    { stage: 6, minLv: 25, maxLv: 29, title: "중급 아크메이지", desc: "등 뒤에 보랏빛 비전 마법진을 전개하고 자수정 대지팡이를 든 상급 아크메이지", formName: "아크메이지 (비전 마법진)", tier: "중급", perk: "+25% 비전 각성" },
    { stage: 7, minLv: 30, maxLv: 34, title: "고급 아크메이지", desc: "대마법사의 권능으로 고대 룬 문장들과 거대 비전 수정을 지배하는 대아크메이지", formName: "아크메이지 (비전 지배자)", tier: "고급", perk: "+30% 대마법 영창" },
    // Tier 4: 빙뢰 현자 (Lv.35~49)
    { stage: 8, minLv: 35, maxLv: 39, title: "초급 빙뢰 현자", desc: "만년설 얼음 왕관과 은백색 로브, 빙결 창 지팡이를 든 빙뢰의 현자", formName: "빙뢰 현자 (빙결 창지팡이)", tier: "초급", perk: "+25% 냉철한 이성" },
    { stage: 9, minLv: 40, maxLv: 44, title: "중급 빙뢰 현자", desc: "등 뒤에 찬란한 얼음 결정 날개와 청색 뇌전 고리를 두른 상위 현자", formName: "빙뢰 현자 (빙결정 날개)", tier: "중급", perk: "+30% 빙뢰 융합" },
    { stage: 10, minLv: 45, maxLv: 49, title: "고급 빙뢰 현자", desc: "4장의 다이아몬드 빙결 날개와 절대영도의 눈보라를 다스리는 대현자", formName: "빙뢰 현자 (절대영도 대현자)", tier: "고급", perk: "+35% 시간 동결 집중" },
    // Tier 5: 홍련 대마도사 (Lv.50~64)
    { stage: 11, minLv: 50, maxLv: 54, title: "초급 홍련 대마도사", desc: "진홍과 황금의 태양 마도 제복과 타오르는 태양륜 스태프를 쥔 대마도사", formName: "홍련 대마도사 (태양륜 지팡이)", tier: "초급", perk: "+35% 홍련의 열정" },
    { stage: 12, minLv: 55, maxLv: 59, title: "중급 홍련 대마도사", desc: "등 뒤에 불타는 이중 화염 마법진이 회전하며 고열의 마력을 뿜는 대마도사", formName: "홍련 대마도사 (이중 화염륜)", tier: "중급", perk: "+40% 태양화염 폭발" },
    { stage: 13, minLv: 60, maxLv: 64, title: "고급 홍련 대마도사", desc: "하늘에서 거대한 메테오(운석)를 소환하여 나태함을 소멸시키는 홍련의 지배자", formName: "홍련 대마도사 (메테오 소환)", tier: "고급", perk: "+45% 메테오 스트라이크" },
    // Tier 6: 시공 마도황 (Lv.65~79)
    { stage: 14, minLv: 65, maxLv: 69, title: "초급 시공 마도황", desc: "별이 수놓아진 밤하늘 성운 망토와 블랙홀 크로노스 스태프를 든 시공 마도황", formName: "시공 마도황 (블랙홀 스태프)", tier: "초급", perk: "+40% 시공간 제어" },
    { stage: 15, minLv: 70, maxLv: 74, title: "중급 시공 마도황", desc: "황금 시공간 기어 광륜을 돌리며 중력을 초월해 부유하는 상위 마도황", formName: "시공 마도황 (크로노스 기어)", tier: "중급", perk: "+45% 시간 가속" },
    { stage: 16, minLv: 75, maxLv: 79, title: "고급 시공 마도황", desc: "차원의 균열과 블랙홀 특이점을 자유자재로 다루는 시공간 대마도황", formName: "시공 마도황 (차원 지배자)", tier: "고급", perk: "+50% 특이점 해방" },
    // Tier 7: 마도신 (Lv.80~100)
    { stage: 17, minLv: 80, maxLv: 84, title: "강림한 마도신", desc: "천상의 황금 마도 신복과 4대 원소 행성을 거느리고 강림한 마도신", formName: "마도신 (강림 원소행성)", tier: "강림", perk: "+55% 마도신의 권능" },
    { stage: 18, minLv: 85, maxLv: 89, title: "불멸의 마도신", desc: "찬란한 천상의 마도 날개와 아카식 만다라가 영원히 회전하는 불멸 등급 마도신", formName: "마도신 (불멸 만다라)", tier: "불멸", perk: "+65% 불멸의 전지" },
    { stage: 19, minLv: 90, maxLv: 94, title: "태초의 마도신", desc: "태초의 창세 지팡이와 우주 행성 궤도를 지휘하는 태초 등급 마도신", formName: "마도신 (태초의 창세장)", tier: "태초", perk: "+80% 태초의 법칙" },
    { stage: 20, minLv: 95, maxLv: 100, title: "창세의 절대 마도신", desc: "삼라만상의 모든 지식과 우주의 진리를 창조하는 신화 등급 갓생 절대 마도신", formName: "마도신 (창세 절대현자)", tier: "창세/절대", perk: "+100% 갓생 전지전능" }
  ],

  // 🐾 비스트 (Beast): 아기 맹수 ➔ 성체 맹수 ➔ 백호 ➔ 펜리르 ➔ 정령 ➔ 불사조 ➔ 신수
  beast: [
    // Tier 1: 아기 맹수 (Lv.1~9)
    { stage: 1, minLv: 1, maxLv: 4, title: "초급 아기 맹수", desc: "복슬복슬한 주황빛 털과 초롱초롱한 눈망울을 가진 작은 아기 맹수", formName: "아기 맹수 (초급)", tier: "초급", perk: "+10% 힐링/회복 EXP" },
    { stage: 2, minLv: 5, maxLv: 9, title: "중급 아기 맹수", desc: "이마에 푸른 영기 보석이 깨어나고 두 갈래 꼬리로 성장한 꼬마 맹수", formName: "아기 맹수 (이미호 각성)", tier: "중급", perk: "+15% 영기 각성" },
    // Tier 2: 성체 맹수 (Lv.10~19)
    { stage: 3, minLv: 10, maxLv: 14, title: "초급 성체 맹수", desc: "늠름한 체구와 풍성한 황금 갈기, 날카로운 은빛 발톱을 갖춘 성체 맹수", formName: "성체 맹수 (야성 갈기)", tier: "초급", perk: "+15% 야성의 질주" },
    { stage: 4, minLv: 15, maxLv: 19, title: "고급 성체 맹수", desc: "어깨에 황금 전투 견갑을 두르고 맹렬한 야수의 투기를 뿜는 우두머리 맹수", formName: "성체 맹수 (전투 견갑)", tier: "고급", perk: "+20% 맹수의 포효" },
    // Tier 3: 백호 (Lv.20~34)
    { stage: 5, minLv: 20, maxLv: 24, title: "초급 백호", desc: "설산을 호령하는 순백의 호랑이로 진화하여 검은 줄무늬와 왕(王)자 문양을 지닌 백호", formName: "백호 (설산의 백호)", tier: "초급", perk: "+20% 백호의 기상" },
    { stage: 6, minLv: 25, maxLv: 29, title: "중급 백호", desc: "어깨에 푸른 뇌전 갈기와 번개 발톱을 두르고 나태를 찢는 상급 백호", formName: "백호 (뇌전 갈기)", tier: "중급", perk: "+25% 질풍뢰" },
    { stage: 7, minLv: 30, maxLv: 34, title: "고급 백호", desc: "하늘에서 내리치는 청색 벼락과 뇌전 폭풍을 두른 전설의 영수 뇌호(雷虎)", formName: "백호 (천벌의 뇌호)", tier: "고급", perk: "+30% 뇌호의 일격" },
    // Tier 4: 펜리르 (Lv.35~49)
    { stage: 8, minLv: 35, maxLv: 39, title: "초급 펜리르", desc: "북유럽 신화 속 거대한 암흑·빙결 마랑(늑대)의 모습으로 진화한 펜리르", formName: "펜리르 (빙결 마랑)", tier: "초급", perk: "+25% 혹한의 송곳니" },
    { stage: 9, minLv: 40, maxLv: 44, title: "중급 펜리르", desc: "등 뒤에 거대한 만년설 얼음 결정 가시가 솟아오르고 신들의 황금 사슬을 끊어낸 펜리르", formName: "펜리르 (글레이프니르 해방)", tier: "중급", perk: "+30% 사슬 분쇄" },
    { stage: 10, minLv: 45, maxLv: 49, title: "고급 펜리르", desc: "극한의 블리자드 폭풍과 빙하 가시 갑주를 완성한 종말의 마랑왕 펜리르", formName: "펜리르 (블리자드 마랑왕)", tier: "고급", perk: "+35% 라그나로크 포효" },
    // Tier 5: 정령 (Lv.50~64)
    { stage: 11, minLv: 50, maxLv: 54, title: "초급 정령", desc: "황금 세계수 사슴뿔 왕관과 반투명한 크리스탈 요정 날개를 지닌 숲의 정령", formName: "정령 (세계수 영수)", tier: "초급", perk: "+35% 자연의 축복" },
    { stage: 12, minLv: 55, maxLv: 59, title: "중급 정령", desc: "4장의 영롱한 페어리 날개와 다섯 갈래 오로라 꼬리, 정령 구슬을 거느린 상위 정령", formName: "정령 (오로라 오미호)", tier: "중급", perk: "+40% 성역의 정화" },
    { stage: 13, minLv: 60, maxLv: 64, title: "고급 정령", desc: "여섯 갈래의 찬란한 영체 꼬리와 대자연의 마나를 통솔하는 성역의 정령왕", formName: "정령 (성역의 정령왕)", tier: "고급", perk: "+45% 정령왕의 권능" },
    // Tier 6: 불사조 (Lv.65~79)
    { stage: 14, minLv: 65, maxLv: 69, title: "초급 불사조", desc: "황금 부리와 불꽃 벼슬, 활짝 펼쳐진 거대한 진홍빛 화염 날개로 비상한 불사조", formName: "불사조 (진홍의 화조)", tier: "초급", perk: "+40% 영생의 불꽃" },
    { stage: 15, minLv: 70, maxLv: 74, title: "중급 불사조", desc: "등 뒤의 태양 광륜과 다섯 갈래의 긴 불꽃 꼬리 깃털을 휘날리는 홍염 불사조", formName: "불사조 (태양륜 불사조)", tier: "중급", perk: "+45% 홍염의 비상" },
    { stage: 16, minLv: 75, maxLv: 79, title: "고급 불사조", desc: "화면을 압도하는 황금 태양풍 날개로 모든 시련을 재로 만들고 부활하는 태고의 불사조", formName: "불사조 (태양신조 피닉스)", tier: "고급", perk: "+50% 불멸의 윤회" },
    // Tier 7: 신수 (Lv.80~100)
    { stage: 17, minLv: 80, maxLv: 84, title: "강림한 신수", desc: "순백과 황금의 신성한 몸체, 신룡의 황금 뿔과 천상 날개를 펼치고 강림한 신수", formName: "신수 (강림 천상신수)", tier: "강림", perk: "+55% 천계의 상서로움" },
    { stage: 18, minLv: 85, maxLv: 89, title: "불멸의 신수", desc: "일곱 갈래의 성운 꼬리와 영원한 창세 광륜을 두른 불멸(Immortal) 등급 신수", formName: "신수 (불멸 칠미신수)", tier: "불멸", perk: "+65% 불멸의 신성" },
    { stage: 19, minLv: 90, maxLv: 94, title: "태초의 신수", desc: "아홉 갈래의 우주 은하수 꼬리(구미)와 세라핌 황금 날개를 지닌 태초(Primordial) 등급 신수", formName: "신수 (태초 구미신룡)", tier: "태초", perk: "+80% 태초의 조화" },
    { stage: 20, minLv: 95, maxLv: 100, title: "창세의 절대 신수", desc: "온 우주의 별빛과 삼라만상의 신성을 한 몸에 품은 최정점 신화 등급 갓생 절대 신수", formName: "신수 (창세 절대신수)", tier: "창세/절대", perk: "+100% 갓생 절대 축복" }
  ]
};

// Accessory Codex Definition (Anatomically Worn Directly ON the 16-Bit Character!)
const ACCESSORY_CODEX = {
  crown: {
    id: "crown",
    name: "황금 왕관",
    icon: "👑",
    rarity: "전설 (Legendary)",
    rate: "5%",
    color: "#fbbf24",
    stat: "+25% 올스탯 버프",
    desc: "캐릭터의 머리 위에 직접 착용되는 16비트 보석 황금 왕관"
  },
  wings: {
    id: "wings",
    name: "천사 날개",
    icon: "🪽",
    rarity: "영웅 (Epic)",
    rate: "10%",
    color: "#b3eeff",
    stat: "+15% 이동속도 & 빠른 완료",
    desc: "캐릭터 등 뒤 어깨에서 돋아나 펄럭이는 16비트 순백의 날개"
  },
  halo: {
    id: "halo",
    name: "마법 후광",
    icon: "💫",
    rarity: "영웅 (Epic)",
    rate: "20%",
    color: "#22d3ee",
    stat: "+15% 마나 및 집중력",
    desc: "캐릭터 머리 바로 위에서 빛나는 16비트 신성 홀리 링"
  },
  sunglasses: {
    id: "sunglasses",
    name: "픽셀 선글라스",
    icon: "🕶️",
    rarity: "희귀 (Rare)",
    rate: "25%",
    color: "#4edea3",
    stat: "+10% 크리티컬 확률",
    desc: "캐릭터의 양 눈에 정확히 맞춰 착용되는 16비트 블랙 선글라스"
  },
  charm: {
    id: "charm",
    name: "황금 행운 목걸이",
    icon: "🧿",
    rarity: "희귀 (Rare)",
    rate: "40%",
    color: "#ffe1a7",
    stat: "+20% 추가 EXP 획득",
    desc: "캐릭터의 목에 걸려 가슴 위에서 빛나는 16비트 루비 펜던트 목걸이"
  },
  cat_ears: {
    id: "cat_ears",
    name: "분홍 고양이 귀",
    icon: "🐱",
    rarity: "스페셜 (Special)",
    rate: "보너스",
    color: "#f472b6",
    stat: "+10% 스트레스 감소",
    desc: "머리 위에 헤어밴드처럼 직접 착용하는 16비트 쫑긋 고양이 귀"
  },
  cape: {
    id: "cape",
    name: "영웅의 붉은 망토",
    icon: "🧣",
    rarity: "스페셜 (Special)",
    rate: "보너스",
    color: "#ef4444",
    stat: "+10 방어력",
    desc: "어깨에 황금 브로치로 고정되어 등 뒤로 나부끼는 16비트 영웅의 망토"
  },
  excalibur: {
    id: "excalibur",
    name: "황금 엑스칼리버",
    icon: "⚔️",
    rarity: "신화 (Mythic)",
    rate: "특수 달성",
    color: "#fbbf24",
    stat: "+50% 투두 즉각 격파 파워",
    desc: "캐릭터의 손과 무장 부위에 직접 장착되어 빛나는 16비트 성검"
  }
};

// ==========================================
// 3. Reactive State Store with LocalStorage
// ==========================================
const STORAGE_KEY = "rpg_quest_todo_save_v5";

const defaultState = {
  hero: {
    name: "초보 모험가",
    classId: "warrior",
    classSelected: false,
    level: 1,
    exp: 0,
    streak: 0,
    equippedAccessory: null
  },
  inventory: [],
  attendance: {
    weekNumber: 1,
    chestClaimed: false,
    days: [false, false, false, false, false, false, false]
  },
  todos: [],
  historyLogs: []
};

class StateStore {
  constructor() {
    this.state = this.load();
    this.listeners = [];
  }

  load() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...defaultState,
          ...parsed,
          hero: { ...defaultState.hero, ...(parsed.hero || {}) },
          attendance: { ...defaultState.attendance, ...(parsed.attendance || {}) }
        };
      }
    } catch (e) {
      console.warn("Storage load error:", e);
    }
    return JSON.parse(JSON.stringify(defaultState));
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error("Storage save error:", e);
    }
    this.notify();
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  notify() {
    this.listeners.forEach((fn) => fn(this.state));
  }

  getExpNeeded(level) {
    return level * 20 + 80;
  }

  getCurrentStage() {
    const list = EVOLUTION_CODEX[this.state.hero.classId] || EVOLUTION_CODEX.warrior;
    const lv = this.state.hero.level;
    const stage = list.find((s) => lv >= s.minLv && lv <= s.maxLv);
    return stage || list[list.length - 1];
  }

  getStageForLevel(level, classId = null) {
    const cid = classId || this.state.hero.classId || "warrior";
    const list = EVOLUTION_CODEX[cid] || EVOLUTION_CODEX.warrior;
    const stage = list.find((s) => level >= s.minLv && level <= s.maxLv);
    return stage || list[list.length - 1];
  }

  getStageByIndex(stageIndex, classId = null) {
    const cid = classId || this.state.hero.classId || "warrior";
    const list = EVOLUTION_CODEX[cid] || EVOLUTION_CODEX.warrior;
    return list.find((s) => s.stage === stageIndex) || list[0];
  }

  addTodo(title, priority = "normal", category = "일일 모험") {
    const expReward = priority === "critical" ? 30 : 10;
    const newTodo = {
      id: "todo-" + Date.now() + "-" + Math.random().toString(36).substr(2, 4),
      title: title.trim(),
      priority,
      completed: false,
      expReward,
      createdAt: new Date().toISOString(),
      category
    };

    this.state.todos.unshift(newTodo);

    const dayOfWeek = (new Date().getDay() + 6) % 7;
    if (!this.state.attendance.days[dayOfWeek]) {
      this.state.attendance.days[dayOfWeek] = true;
      const activeDays = this.state.attendance.days.filter(Boolean).length;
      this.state.hero.streak = Math.max(this.state.hero.streak, activeDays);
    }

    this.save();
    return newTodo;
  }

  toggleTodo(id) {
    const item = this.state.todos.find((t) => t.id === id);
    if (!item) return null;

    item.completed = !item.completed;
    let leveledUp = false;
    let oldLevel = this.state.hero.level;
    let oldStage = this.getCurrentStage();

    if (item.completed) {
      const gainExp = item.expReward;
      leveledUp = this.gainExp(gainExp);
    } else {
      this.state.hero.exp = Math.max(0, this.state.hero.exp - item.expReward);
    }

    const newStage = this.getCurrentStage();
    const stageEvolved = newStage.stage > oldStage.stage;

    this.save();
    return {
      item,
      leveledUp,
      oldLevel,
      newLevel: this.state.hero.level,
      oldStage,
      newStage,
      stageEvolved
    };
  }

  deleteTodo(id) {
    this.state.todos = this.state.todos.filter((t) => t.id !== id);
    this.save();
  }

  gainExp(amount) {
    this.state.hero.exp += amount;
    let leveledUp = false;

    while (this.state.hero.exp >= this.getExpNeeded(this.state.hero.level)) {
      if (this.state.hero.level >= 100) {
        this.state.hero.level = 100;
        this.state.hero.exp = this.getExpNeeded(100);
        break;
      }
      this.state.hero.exp -= this.getExpNeeded(this.state.hero.level);
      this.state.hero.level += 1;
      leveledUp = true;
    }
    return leveledUp;
  }

  setHeroClass(classId, customName = null) {
    if (EVOLUTION_CODEX[classId]) {
      this.state.hero.classId = classId;
      this.state.hero.classSelected = true;
      if (customName && customName.trim()) {
        this.state.hero.name = customName.trim().slice(0, 12);
      } else if (!this.state.hero.name || this.state.hero.name === "초보 모험가") {
        const defaultNames = { warrior: "아서", archer: "로빈", mage: "멀린", beast: "퐁이" };
        this.state.hero.name = defaultNames[classId] || "모험가";
      }
      this.save();
    }
  }

  setHeroName(name) {
    if (name && name.trim()) {
      this.state.hero.name = name.trim().slice(0, 12);
      this.save();
    }
  }

  toggleAccessory(accId) {
    if (this.state.hero.equippedAccessory === accId) {
      this.state.hero.equippedAccessory = null;
    } else {
      this.state.hero.equippedAccessory = accId;
    }
    this.save();
  }

  claimWeeklyChest() {
    const isFull = this.state.attendance.days.every(Boolean);
    if (!isFull && !this.state.attendance.forceAvailable) {
      return { success: false, reason: "7일 출석을 모두 완수해야 합니다!" };
    }

    const rand = Math.random() * 100;
    let chosenId = "charm";

    if (rand < 5) chosenId = "crown";
    else if (rand < 15) chosenId = "wings";
    else if (rand < 35) chosenId = "halo";
    else if (rand < 60) chosenId = "sunglasses";
    else chosenId = "charm";

    const isNew = !this.state.inventory.includes(chosenId);
    if (isNew) {
      this.state.inventory.push(chosenId);
    }

    this.state.attendance.chestClaimed = true;
    this.save();

    return {
      success: true,
      accessory: ACCESSORY_CODEX[chosenId],
      isNew
    };
  }

  cheatLevelUp(amount = 5) {
    const oldStage = this.getCurrentStage();
    this.state.hero.level = Math.min(100, this.state.hero.level + amount);
    const newStage = this.getCurrentStage();
    this.save();
    return { oldStage, newStage, stageEvolved: newStage.stage > oldStage.stage };
  }

  cheatGainExp(amount = 50) {
    this.gainExp(amount);
    this.save();
  }

  cheatCompleteAttendance() {
    this.state.attendance.days = [true, true, true, true, true, true, true];
    this.state.attendance.chestClaimed = false;
    this.state.hero.streak = 7;
    this.save();
  }

  resetAllData() {
    localStorage.removeItem(STORAGE_KEY);
    this.state = JSON.parse(JSON.stringify(defaultState));
    this.save();
  }
}

const store = new StateStore();

// ============================================================================
// 4. 16-Bit Pixel Evolution Avatar Renderer
// ============================================================================
function render16BitHeroHTML(classId, stageIndex = 1, equippedAcc = null, size = 180) {
  const cid = ["warrior", "archer", "mage", "beast"].includes(classId) ? classId : "warrior";
  const stageNum = Math.max(1, Math.min(20, Number(stageIndex) || 1));
  const list = EVOLUTION_CODEX[cid] || EVOLUTION_CODEX.warrior;
  const stageInfo = list.find((s) => s.stage === stageNum) || list[0];

  // Generate genuine 64x64 16-bit pixel art SVG for this exact class, stage, and worn accessory
  const pixelSvg = window.generate16BitSpriteSVG
    ? window.generate16BitSpriteSVG(cid, stageNum, equippedAcc)
    : "";

  // Ambient Dungeon Pedestal & Tier Frame Styling
  let frameBorderClass = "border-2 border-slate-700";
  let bgGradient = "from-slate-900 via-slate-900 to-slate-950";
  let tierBadgeColor = "bg-slate-800 text-slate-300 border-slate-600";

  if (stageNum >= 17) {
    frameBorderClass = "border-2 border-primary-container shadow-[0_0_20px_rgba(251,191,36,0.85)]";
    bgGradient = "from-amber-950/60 via-slate-900 to-indigo-950/80";
    tierBadgeColor = "bg-amber-950/90 text-primary-container border-primary-container";
  } else if (stageNum >= 14) {
    frameBorderClass = "border-2 border-crimson-critical shadow-[0_0_15px_rgba(239,68,68,0.7)]";
    bgGradient = "from-red-950/50 via-slate-900 to-slate-950";
    tierBadgeColor = "bg-red-950/90 text-red-300 border-red-500";
  } else if (stageNum >= 11) {
    frameBorderClass = "border-2 border-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.55)]";
    bgGradient = "from-amber-950/35 via-slate-900 to-slate-950";
    tierBadgeColor = "bg-amber-950/90 text-amber-300 border-amber-400";
  } else if (stageNum >= 8) {
    frameBorderClass = "border-2 border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]";
    bgGradient = "from-cyan-950/40 via-slate-900 to-slate-950";
    tierBadgeColor = "bg-cyan-950/90 text-cyan-300 border-cyan-400";
  } else if (stageNum >= 5) {
    frameBorderClass = "border-2 border-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.45)]";
    bgGradient = "from-emerald-950/35 via-slate-900 to-slate-950";
    tierBadgeColor = "bg-emerald-950/90 text-emerald-300 border-emerald-400";
  } else if (stageNum >= 3) {
    frameBorderClass = "border-2 border-blue-400/70";
    bgGradient = "from-blue-950/25 via-slate-900 to-slate-950";
    tierBadgeColor = "bg-blue-950/90 text-blue-300 border-blue-400";
  }

  return `
    <div class="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b ${bgGradient} ${frameBorderClass} transition-all select-none">
      <!-- Retro Stone Pedestal Under Character -->
      <div class="absolute bottom-2 w-3/4 h-3 bg-slate-800/90 border border-slate-600 shadow-[0_2px_0_0_#090d16] pointer-events-none"></div>
      <!-- 64x64 16-Bit Pixel Character & Worn Accessories -->
      <div class="relative z-20 w-[92%] h-[92%] flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
        ${pixelSvg}
      </div>
      <!-- Form Name Tag at Top-Left -->
      <div class="absolute top-1.5 left-1.5 z-30 ${tierBadgeColor} border text-[10px] px-1.5 py-0.5 font-bold font-pixel leading-none shadow-sm pointer-events-none">
        ${stageInfo.title}
      </div>
    </div>
  `;
}

// Export modules to window
window.sounds = sounds;
window.store = store;
window.EVOLUTION_CODEX = EVOLUTION_CODEX;
window.ACCESSORY_CODEX = ACCESSORY_CODEX;
window.render16BitHeroHTML = render16BitHeroHTML;

const roundConfig = [
  {
    label: '1라운드 쉬움',
    points: 1,
    pool: ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'],
    deckSize: 15
  },
  {
    label: '2라운드 보통',
    points: 2,
    pool: ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ', 'ㄲ', 'ㄸ', 'ㅃ', 'ㅆ', 'ㅉ'],
    deckSize: 10
  },
  {
    label: '3라운드 어려움',
    points: 3,
    pool: ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ', 'ㄲ', 'ㄸ', 'ㅃ', 'ㅆ', 'ㅉ'],
    deckSize: 7
  }
];

const initialConsonants = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ', 'ㄲ', 'ㄸ', 'ㅃ', 'ㅆ', 'ㅉ'];

const wordChallenges = [
  {
    word: '노트북',
    examples: ['접이식 글판', '누리 공책', '다리 책상 컴퓨터']
  },
  {
    word: '아이스 아메리카노',
    examples: ['차가운 쓴물', '얼음 검은차', '시원한 쓴다진차']
  },
  {
    word: '리모컨',
    examples: ['멀리 누름쇠', '원격 조종기', '손안 누름판']
  },
  {
    word: '스마트폰',
    examples: ['손안의 똑똑이', '요술 손전화', '지혜 단짝 전화']
  },
  {
    word: '엘리베이터',
    examples: ['오르내림 상자', '승강 오두막', '수직 이동방']
  },
  {
    word: '와이파이(Wi-Fi)',
    examples: ['공중 글길', '무선 신호물', '잇는 바람']
  },
  {
    word: '셀카(셀프 카메라)',
    examples: ['제 얼굴 담기', '나 찍기', '자가 사진']
  },
  {
    word: '타이머',
    examples: ['시각 알림이', '시간 줄제기', '때 맞춤이']
  },
  {
    word: '전자책',
    examples: ['빛으로 읽는 책', '화면 책', '디지털 글장']
  },
  {
    word: '비행기',
    examples: ['하늘을 나는 큰 새', '구름 타는 기차', '하늘 여행선']
  }
];

const part3QuizData = [
  {
    sentence: '오랜만에 만난 김철수씨는 찌개를 맛있게 먹었다.',
    answer: '오랜만에 만난 김철수 씨는 찌개를 맛있게 먹었다.',
    points: ['김철수씨 → 김철수 씨', '찌게 → 찌개', '오랜만에 → 오랜만에']
  },
  {
    sentence: '일이 잘 안돼서 걱정했지만 할 수 있다고 생각했다.',
    answer: '일이 잘 안돼서 걱정했지만 할 수 있다고 생각했다.',
    points: ['맞는 표현', '맞는 표현', '맞는 표현']
  },
  {
    sentence: '사과뿐만 아니라 배도 맛있다고 전해 들었대.',
    answer: '사과뿐만 아니라 배도 맛있다고 전해 들었다.',
    points: ['들었대 → 들었다', '사과뿐만 → 사과뿐만', '배도 → 배도']
  },
  {
    sentence: '어느날 시나브로 다가온 기쁨을 어찌할바 몰랐다.',
    answer: '어느 날 시나브로 다가온 기쁨을 어찌할 바 몰랐다.',
    points: ['어느날 → 어느 날', '어찌할바 → 어찌할 바', '시나브로 → 시나브로']
  },
  {
    sentence: '몇일 동안 고민했지만 아무리 생각해도 아니었다.',
    answer: '며칠 동안 고민했지만 아무리 생각해도 아니었다.',
    points: ['몇일 → 며칠', '아니였다 → 아니었다', '고민했지만 → 고민했지만']
  },
  {
    sentence: '다음주 월요일에 학교 발표준비를 해야 한다.',
    answer: '다음 주 월요일에 학교 발표 준비를 해야 한다.',
    points: ['다음주 → 다음 주', '발표준비 → 발표 준비', '해야한다 → 해야 한다']
  },
  {
    sentence: '그 사람은 늘 공손하게 말하는편이다.',
    answer: '그 사람은 늘 공손하게 말하는 편이다.',
    points: ['말하는편 → 말하는 편', '공손하게 → 공손하게', '그 사람은 → 그 사람은']
  },
  {
    sentence: '떡볶이는 매콤한 맛이 일품이야.',
    answer: '떡볶이는 매콤한 맛이 일품이다.',
    points: ['일품이야 → 일품이다', '매콤한 → 매콤한', '떡볶이는 → 떡볶이는']
  },
  {
    sentence: '우리 가족은 매주 한번씩 산책을 한다.',
    answer: '우리 가족은 매주 한 번씩 산책을 한다.',
    points: ['한번씩 → 한 번씩', '산책을한다 → 산책을 한다', '우리 가족은 → 우리 가족은']
  },
  {
    sentence: '지하철을 타고 시장에 가는 길이 멀었대.',
    answer: '지하철을 타고 시장에 가는 길이 멀었다.',
    points: ['멀었대 → 멀었다', '시장에 가는 → 시장에 가는', '지하철을 → 지하철을']
  }
];

const part4QuizData = [
  {
    label: '야단법석 vs 야단시끌',
    answerIndex: 0,
    cards: [
      { word: '야단법석', reason: '불교에서 야외(野)에 단(壇)을 쌓고 법회(法席)를 열었을 때, 수많은 사람이 몰려들어 시끌벅적하고 혼잡했던 모습에서 유래한 한자어입니다.' },
      { word: '야단시끌', reason: '야단법석의 비표준 형태로, 실제로는 정식 표기와 뜻이 다릅니다.' }
    ]
  },
  {
    label: '도루묵 vs 도로묵',
    answerIndex: 0,
    cards: [
      { word: '도루묵', reason: '조선시대 임금이 피란길에 맛나게 먹은 생선(목어)을 “은어”로 바꿨다가, 전쟁 후 다시 먹으니 맛이 없어 “도로 ‘목어’라 불러라” 해서 ‘도루묵’이 되었습니다.' },
      { word: '도로묵', reason: '‘도로 묵다’처럼 보이지만, 실제로는 “도루묵”이 표준적 표현입니다.' }
    ]
  },
  {
    label: '어처구니 vs 맷돌손',
    answerIndex: 0,
    cards: [
      { word: '어처구니', reason: '맷돌을 돌리는 “나무 손잡이”의 이름이 어처구니입니다. 손잡이가 없으면 곡식을 갈 수 없어 황당하듯 “어처구니가 없다”라고 표현합니다.' },
      { word: '맷돌손', reason: '맷돌과 손을 붙인 표현처럼 보이지만, 실제 표준어는 어처구니입니다.' }
    ]
  },
  {
    label: '시나브로 vs 모름지기',
    answerIndex: 0,
    cards: [
      { word: '시나브로', reason: '“모르는 사이에 조금씩 조금씩”을 뜻하는 예쁜 순우리말입니다. (“모름지기”는 “마땅히 ~해야 한다”라는 뜻입니다.)' },
      { word: '모름지기', reason: '“마땅히 그렇게 해야 한다”는 뜻으로 쓰이는 표현으로, “시나브로”와는 다른 의미입니다.' }
    ]
  },
  {
    label: '주전부리 vs 입심심이',
    answerIndex: 0,
    cards: [
      { word: '주전부리', reason: '때를 가리지 않고 맛있는 음식을 자꾸 먹는 일, 또는 그 음식을 뜻하는 순우리말 표현입니다.' },
      { word: '입심심이', reason: '입에 달라붙는 음식이나 식욕을 뜻하는 표현이지만, 표준 표현은 주전부리입니다.' }
    ]
  },
  {
    label: '오지랖 vs 앞지랖',
    answerIndex: 0,
    cards: [
      { word: '오지랖', reason: '옷(한복)의 앞자락을 뜻하며, 옷자락이 넓으면 앞을 지나치게 다 가리듯 남의 일에 쓸데없이 참견하는 것을 “오지랖이 넓다”라고 합니다.' },
      { word: '앞지랖', reason: '표준어가 아니며, 오지랖이 실제로 사용되는 표현입니다.' }
    ]
  },
  {
    label: '덤터기 vs 덤태기',
    answerIndex: 0,
    cards: [
      { word: '덤터기', reason: '남에게 억울하게 넘겨씌우는 허물이나 바가지를 뜻하며, “덤태기”가 아닌 “덤터기”가 올바른 표준어 표기입니다.' },
      { word: '덤태기', reason: '“덤터기”와 혼동되지만, 표준어 표기는 “덤터기”입니다.' }
    ]
  },
  {
    label: '산더미 vs 산더기',
    answerIndex: 0,
    cards: [
      { word: '산더미', reason: '물건이나 일이 산처럼 수북하게 쌓여 있는 큰 더미를 뜻하는 올바른 순우리말 표기입니다.' },
      { word: '산더기', reason: '표준어가 아니며, “산더미”가 올바른 표현입니다.' }
    ]
  },
  {
    label: '감쪽같다 vs 신쪽같다',
    answerIndex: 0,
    cards: [
      { word: '감쪽같다', reason: '곶감을 만들 때 쪼개어 말린 감 쪽이 너무 달고 맛있어서 남 모르게 홀딱 먹어치우는 모습에서 유래했습니다.' },
      { word: '신쪽같다', reason: '실제 표준 표현은 감쪽같다이며, 신쪽같다는 잘못된 표기입니다.' }
    ]
  },
  {
    label: '주야장천 vs 주구장창',
    answerIndex: 0,
    cards: [
      { word: '주야장천', reason: '밤(晝)과 낮(夜)으로 쉬지 않고 길게(長) 흐르는 시냇물(川)처럼 “쉬지 않고 계속”이라는 뜻의 올바른 한자어는 주야장천입니다. (“주구장창”은 틀린 표현입니다.)' },
      { word: '주구장창', reason: '오래 계속되는 뜻을 비유적으로 표현하는 말이지만, 올바른 한자어는 주야장천입니다.' }
    ]
  }
];

const storedTeamKey = 'hangul-day-team-scores';
const storedCountKey = 'hangul-day-team-count';
const storedRoundKey = 'hangul-day-selected-round';

const phaseTabs = document.querySelectorAll('.phase-tab');
const part1Layout = document.getElementById('part1Layout');
const part2Layout = document.getElementById('part2Layout');
const part3Layout = document.getElementById('part3Layout');
const part4Layout = document.getElementById('part4Layout');
const roundButtons = document.querySelectorAll('.round-btn');
const teamButtonsWrap = document.getElementById('teamButtons');
const teamList = document.getElementById('teamList');
const teamCountInput = document.getElementById('teamCountInput');
const syllableDisplay = document.getElementById('syllableDisplay');
const remainingCardsValue = document.getElementById('remainingCards');
const applyTeamCountBtn = document.getElementById('applyTeamCountBtn');
const resetScoresBtn = document.getElementById('resetScoresBtn');
const restartGameBtn = document.getElementById('restartGameBtn');
const nextSyllableBtn = document.getElementById('nextSyllableBtn');
const correctBtn = document.getElementById('correctBtn');
const teamPicker = document.getElementById('teamPicker');
const startRankingBtn = document.getElementById('startRankingBtn');
const rankingStage = document.getElementById('rankingStage');
const rankingAnnouncement = document.getElementById('rankingAnnouncement');
const rankingRevealList = document.getElementById('rankingRevealList');
const nextRankingBtn = document.getElementById('nextRankingBtn');
const closeRankingBtn = document.getElementById('closeRankingBtn');
const confettiCanvas = document.getElementById('confettiCanvas');

const foreignWordEl = document.getElementById('foreignWord');
const exampleList = document.getElementById('exampleList');
const answerPanel = document.getElementById('answerPanel');
const prevWordBtn = document.getElementById('prevWordBtn');
const nextWordBtn = document.getElementById('nextWordBtn');
const showAnswerBtn = document.getElementById('showAnswerBtn');
const wordProgress = document.getElementById('wordProgress');
const wordTotal = document.getElementById('wordTotal');
const participantButtons = document.getElementById('participantButtons');
const part2TeamList = document.getElementById('part2TeamList');
const part3TeamList = document.getElementById('part3TeamList');
const part4TeamList = document.getElementById('part4TeamList');
const part3ParticipantButtons = document.getElementById('part3ParticipantButtons');
const part4ParticipantButtons = document.getElementById('part4ParticipantButtons');
const part4Sidebar = document.getElementById('part4Sidebar');
const togglePart4BoardBtn = document.getElementById('togglePart4BoardBtn');
const scoreToast = document.getElementById('scoreToast');
const part3ScoreToast = document.getElementById('part3ScoreToast');
const part4ScoreToast = document.getElementById('part4ScoreToast');

let teams = [];
let selectedRoundIndex = 0;
let currentSyllable = '';
let currentRoundDeck = [];
let activePart = 1;
let currentWordIndex = 0;
let answerVisible = false;
let selectedTeamIndex = 0;
let currentPart3Index = 0;
let part3AnswerVisible = false;
let part3TimerSeconds = 30;
let part3TimeLeft = 30;
let part3TimerId = null;
let part3TimerRunning = false;
let currentPart4Index = 0;
let part4Revealed = false;
let rankingSnapshot = [];
let revealedRankingCount = 0;
let confettiFrameId = null;
let confettiTimeoutId = null;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function selectPart(partNumber) {
  activePart = partNumber;
  part1Layout.classList.toggle('hidden', partNumber !== 1);
  part2Layout.classList.toggle('hidden', partNumber !== 2);
  part3Layout.classList.toggle('hidden', partNumber !== 3);
  part4Layout.classList.toggle('hidden', partNumber !== 4);

  phaseTabs.forEach((button) => {
    const isActive = Number(button.dataset.part) === partNumber;
    button.classList.toggle('active', isActive);
  });
}

function loadSavedState() {
  const savedTeams = JSON.parse(localStorage.getItem(storedTeamKey) || 'null');
  const savedCount = Number(localStorage.getItem(storedCountKey) || '4');
  const savedRound = Number(localStorage.getItem(storedRoundKey) || '0');

  const fallbackCount = clamp(savedCount || 4, 2, 10);
  if (Array.isArray(savedTeams) && savedTeams.length === fallbackCount) {
    teams = savedTeams.map((team, index) => ({
      id: team.id ?? index + 1,
      name: team.name || `팀 ${index + 1}`,
      score: Number(team.score || 0)
    }));
  } else {
    teams = Array.from({ length: fallbackCount }, (_, index) => ({
      id: index + 1,
      name: `팀 ${index + 1}`,
      score: 0
    }));
  }

  selectedRoundIndex = clamp(savedRound, 0, roundConfig.length - 1);
  teamCountInput.value = teams.length;
}

function saveState() {
  localStorage.setItem(storedTeamKey, JSON.stringify(teams));
  localStorage.setItem(storedCountKey, String(teams.length));
  localStorage.setItem(storedRoundKey, String(selectedRoundIndex));
}

function buildRoundDeck(pool, deckSize) {
  const cards = [];
  const candidatePool = [];

  pool.forEach((first) => {
    pool.forEach((second) => {
      candidatePool.push(`${first} ${second}`);
    });
  });

  for (let i = candidatePool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [candidatePool[i], candidatePool[j]] = [candidatePool[j], candidatePool[i]];
  }

  for (let i = 0; i < deckSize; i += 1) {
    cards.push(candidatePool[i]);
  }

  return cards;
}

function updateRemainingCardsDisplay() {
  remainingCardsValue.textContent = String(currentRoundDeck.length);
}

function prepareRoundDeck() {
  const round = roundConfig[selectedRoundIndex];
  currentRoundDeck = buildRoundDeck(round.pool, round.deckSize);
  updateRemainingCardsDisplay();
}

function generateSyllable() {
  if (currentRoundDeck.length === 0) {
    prepareRoundDeck();
  }

  currentSyllable = currentRoundDeck.pop();
  renderSyllable();
  updateRemainingCardsDisplay();
}

function renderSyllable() {
  syllableDisplay.innerHTML = '';

  currentSyllable.split(' ').forEach((char) => {
    const span = document.createElement('span');
    span.className = 'syllable-char';
    span.textContent = char;
    syllableDisplay.appendChild(span);
  });
}

function renderRoundButtons() {
  roundButtons.forEach((button, index) => {
    button.classList.toggle('active', index === selectedRoundIndex);
  });
}

function renderTeamList() {
  teamList.innerHTML = '';
  part2TeamList.innerHTML = '';
  if (part3TeamList) part3TeamList.innerHTML = '';
  if (part4TeamList) part4TeamList.innerHTML = '';

  teams.forEach((team, index) => {
    const item = document.createElement('div');
    item.className = 'team-item';
    if (index === selectedTeamIndex) {
      item.classList.add('team-item-selected');
    }

    item.innerHTML = `
      <div class="team-meta">
        <span class="team-badge">${index + 1}</span>
        <span>${team.name}</span>
      </div>
      <span class="team-score">${team.score}</span>
    `;

    item.addEventListener('click', () => {
      selectedTeamIndex = index;
      renderTeamList();
    });

    const cloneMain = item.cloneNode(true);
    const clonePart2 = item.cloneNode(true);
    const clonePart3 = item.cloneNode(true);
    const clonePart4 = item.cloneNode(true);

    teamList.appendChild(cloneMain);
    part2TeamList.appendChild(clonePart2);
    if (part3TeamList) part3TeamList.appendChild(clonePart3);
    if (part4TeamList) part4TeamList.appendChild(clonePart4);
  });
}

function resetRankingReveal() {
  rankingSnapshot = [];
  revealedRankingCount = 0;
}

function renderRankingReveal() {
  const firstVisibleIndex = rankingSnapshot.length - revealedRankingCount;
  const newlyRevealedRank = firstVisibleIndex + 1;
  const winnerIsRevealed = newlyRevealedRank === 1;

  rankingAnnouncement.textContent = winnerIsRevealed
    ? '대망의 1위, 한글날 우승자를 발표합니다!'
    : `${newlyRevealedRank}위 발표`;
  rankingRevealList.innerHTML = '';

  rankingSnapshot.slice(firstVisibleIndex).reverse().forEach((team, index) => {
    const rank = team.sortedIndex + 1;
    const item = document.createElement('li');
    item.className = 'ranking-card';
    item.style.setProperty('--reveal-order', String(index));

    if (rank === 1) item.classList.add('is-winner');

    const rankLabel = document.createElement('span');
    rankLabel.className = 'ranking-place';
    rankLabel.textContent = `${rank}위`;

    const name = document.createElement('strong');
    name.className = 'ranking-team-name';
    name.textContent = team.name;

    const score = document.createElement('span');
    score.className = 'ranking-team-score';
    score.textContent = `${team.score}점`;

    item.append(rankLabel, name, score);

    if (rank === 1) {
      const winnerTitle = document.createElement('span');
      winnerTitle.className = 'winner-title';
      winnerTitle.textContent = '🏆 한글날 우승자';
      item.appendChild(winnerTitle);
    }

    rankingRevealList.appendChild(item);
  });

  const announcementComplete = revealedRankingCount >= rankingSnapshot.length;
  nextRankingBtn.textContent = announcementComplete ? '발표 마치기' : '다음 순위 공개';

  if (winnerIsRevealed) launchConfetti();
}

function startRankingReveal() {
  rankingSnapshot = teams
    .map((team, sortedIndex) => ({ ...team, sortedIndex }))
    .sort((teamA, teamB) => teamB.score - teamA.score || teamA.sortedIndex - teamB.sortedIndex)
    .map((team, sortedIndex) => ({ ...team, sortedIndex }));
  revealedRankingCount = 1;
  rankingRevealList.innerHTML = '';
  rankingStage.classList.remove('hidden');
  document.body.classList.add('ranking-open');
  renderRankingReveal();
  closeRankingBtn.focus();
}

function closeRankingReveal() {
  rankingStage.classList.add('hidden');
  document.body.classList.remove('ranking-open');
  stopConfetti();
  startRankingBtn.focus();
}

function revealNextRank() {
  if (revealedRankingCount >= rankingSnapshot.length) {
    closeRankingReveal();
    return;
  }

  revealedRankingCount += 1;
  renderRankingReveal();
}

function stopConfetti() {
  if (confettiFrameId !== null) cancelAnimationFrame(confettiFrameId);
  if (confettiTimeoutId !== null) clearTimeout(confettiTimeoutId);
  confettiFrameId = null;
  confettiTimeoutId = null;
  const context = confettiCanvas.getContext('2d');
  context.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
}

function launchConfetti() {
  stopConfetti();

  const context = confettiCanvas.getContext('2d');
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  const width = window.innerWidth;
  const height = window.innerHeight;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const duration = reducedMotion ? 1400 : 4200;

  confettiCanvas.width = width * pixelRatio;
  confettiCanvas.height = height * pixelRatio;
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

  const colors = ['#f3c969', '#e56b52', '#f7efe0', '#72a58b', '#83c5be'];
  const particles = Array.from({ length: reducedMotion ? 70 : 150 }, () => ({
    x: Math.random() * width,
    y: -Math.random() * height * 0.8,
    width: 5 + Math.random() * 7,
    height: 7 + Math.random() * 9,
    speedX: (Math.random() - 0.5) * 5,
    speedY: 2 + Math.random() * 5,
    rotation: Math.random() * Math.PI,
    rotationSpeed: (Math.random() - 0.5) * 0.18,
    color: colors[Math.floor(Math.random() * colors.length)]
  }));

  const startedAt = performance.now();
  const drawFrame = (timestamp) => {
    context.clearRect(0, 0, width, height);
    const progress = (timestamp - startedAt) / duration;

    particles.forEach((particle) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      particle.speedY += 0.035;
      particle.rotation += particle.rotationSpeed;
      context.save();
      context.translate(particle.x, particle.y);
      context.rotate(particle.rotation);
      context.fillStyle = particle.color;
      context.fillRect(-particle.width / 2, -particle.height / 2, particle.width, particle.height);
      context.restore();
    });

    if (progress < 1) {
      confettiFrameId = requestAnimationFrame(drawFrame);
    } else {
      stopConfetti();
    }
  };

  confettiFrameId = requestAnimationFrame(drawFrame);
  confettiTimeoutId = setTimeout(stopConfetti, duration + 100);
}

function renderTeamButtons() {
  teamButtonsWrap.innerHTML = '';

  teams.forEach((team, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'team-button';
    button.textContent = `${team.name}`;
    button.dataset.teamIndex = String(index);
    teamButtonsWrap.appendChild(button);
  });
}

function hideTeamPicker() {
  teamPicker.classList.add('hidden');
}

function showTeamPicker() {
  teamPicker.classList.remove('hidden');
}

function applyRoundSelection(index) {
  selectedRoundIndex = index;
  hideTeamPicker();
  prepareRoundDeck();
  generateSyllable();
  renderRoundButtons();
  saveState();
}

function addScoreForTeam(teamIndex) {
  const round = roundConfig[selectedRoundIndex];
  teams[teamIndex].score += round.points;
  resetRankingReveal();
  hideTeamPicker();
  renderTeamList();
  saveState();

  generateSyllable();
}

function applyTeamCount() {
  const requestedCount = clamp(Number(teamCountInput.value) || 4, 2, 10);
  teamCountInput.value = requestedCount;

  const nextTeams = Array.from({ length: requestedCount }, (_, index) => {
    const existing = teams[index];
    return {
      id: index + 1,
      name: existing ? existing.name : `팀 ${index + 1}`,
      score: existing ? Number(existing.score || 0) : 0
    };
  });

  teams = nextTeams;
  resetRankingReveal();
  renderTeamList();
  renderTeamButtons();
  renderPart3Participants();
  saveState();
}

function resetGameScores() {
  teams = teams.map((team, index) => ({ ...team, score: 0, name: team.name || `팀 ${index + 1}` }));
  resetRankingReveal();
  renderTeamList();
  renderTeamButtons();
  renderPart3Participants();
  saveState();
}

function restartGame() {
  hideTeamPicker();
  prepareRoundDeck();
  generateSyllable();
  renderTeamList();
}

function renderWordCard() {
  const currentWord = wordChallenges[currentWordIndex];
  foreignWordEl.textContent = currentWord.word;
  wordProgress.textContent = String(currentWordIndex + 1);
  wordTotal.textContent = String(wordChallenges.length);

  exampleList.innerHTML = '';
  currentWord.examples.forEach((example) => {
    const item = document.createElement('li');
    item.textContent = example;
    exampleList.appendChild(item);
  });

  answerPanel.classList.toggle('hidden', !answerVisible);
  showAnswerBtn.textContent = answerVisible ? '예시 정답 숨기기' : '예시 정답 보기';
}

function goToWord(direction) {
  currentWordIndex = (currentWordIndex + direction + wordChallenges.length) % wordChallenges.length;
  answerVisible = false;
  renderWordCard();
}

function toggleAnswerPanel() {
  answerVisible = !answerVisible;
  renderWordCard();
}

function showToast(message) {
  const activeToast = scoreToast || part3ScoreToast;
  const fallbackToast = part3ScoreToast || scoreToast;
  const toastToUse = activeToast && !activeToast.classList.contains('hidden') ? activeToast : fallbackToast;

  if (!toastToUse) return;

  toastToUse.textContent = message;
  toastToUse.classList.remove('hidden');
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => {
    toastToUse.classList.add('hidden');
  }, 1200);
}

function renderParticipants() {
  participantButtons.innerHTML = '';

  teams.forEach((team, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'participant-button';
    button.textContent = team.name;
    button.addEventListener('click', () => {
      const existing = document.querySelector('.score-popover');
      if (existing) existing.remove();

      const popover = document.createElement('div');
      popover.className = 'score-popover';
      popover.innerHTML = `
        <button type="button" data-team-index="${index}" data-points="1">+1점</button>
        <button type="button" data-team-index="${index}" data-points="2">+2점</button>
      `;

      popover.querySelectorAll('button').forEach((scoreButton) => {
        scoreButton.addEventListener('click', () => {
          const points = Number(scoreButton.dataset.points);
          const teamIndex = Number(scoreButton.dataset.teamIndex);
          const targetTeam = teams[teamIndex];

          if (targetTeam) {
            targetTeam.score += points;
            resetRankingReveal();
            showToast(`${targetTeam.name}에게 ${points}점!`);
            renderTeamList();
            saveState();
          }

          popover.remove();
        });
      });

      button.parentElement.appendChild(popover);
    });

    participantButtons.appendChild(button);
  });
}

function renderPart3Participants() {
  if (!part3ParticipantButtons) return;

  part3ParticipantButtons.innerHTML = '';

  teams.forEach((team, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'participant-button';
    button.textContent = team.name;
    button.addEventListener('click', () => {
      const existing = document.querySelector('.score-popover');
      if (existing) existing.remove();

      const popover = document.createElement('div');
      popover.className = 'score-popover';
      popover.innerHTML = `
        <button type="button" data-team-index="${index}" data-points="1">+1점</button>
        <button type="button" data-team-index="${index}" data-points="2">+2점</button>
      `;

      popover.querySelectorAll('button').forEach((scoreButton) => {
        scoreButton.addEventListener('click', () => {
          const points = Number(scoreButton.dataset.points);
          const teamIndex = Number(scoreButton.dataset.teamIndex);
          const targetTeam = teams[teamIndex];

          if (targetTeam) {
            targetTeam.score += points;
            resetRankingReveal();
            showToast(`${targetTeam.name}에게 ${points}점!`);
            renderTeamList();
            saveState();
          }

          popover.remove();
        });
      });

      button.parentElement.appendChild(popover);
    });

    part3ParticipantButtons.appendChild(button);
  });
}

function renderPart4Participants() {
  if (!part4ParticipantButtons) return;

  part4ParticipantButtons.innerHTML = '';

  teams.forEach((team, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'participant-button';
    button.textContent = team.name;
    button.addEventListener('click', () => {
      const existing = document.querySelector('.score-popover');
      if (existing) existing.remove();

      const popover = document.createElement('div');
      popover.className = 'score-popover';
      popover.innerHTML = `
        <button type="button" data-team-index="${index}" data-points="1">+1점</button>
        <button type="button" data-team-index="${index}" data-points="3">+3점</button>
        <button type="button" data-team-index="${index}" data-points="-1">-1점</button>
      `;

      popover.querySelectorAll('button').forEach((scoreButton) => {
        scoreButton.addEventListener('click', () => {
          const points = Number(scoreButton.dataset.points);
          const teamIndex = Number(scoreButton.dataset.teamIndex);
          const targetTeam = teams[teamIndex];

          if (targetTeam) {
            targetTeam.score += points;
            resetRankingReveal();
            const sign = points >= 0 ? '+' : '';
            showToast(`${targetTeam.name}에게 ${sign}${points}점!`);
            renderTeamList();
            saveState();
          }

          popover.remove();
        });
      });

      button.parentElement.appendChild(popover);
    });

    part4ParticipantButtons.appendChild(button);
  });
}

function togglePart4BoardVisibility() {
  if (!part4Sidebar || !togglePart4BoardBtn) return;

  part4Sidebar.classList.toggle('hidden');
  togglePart4BoardBtn.textContent = part4Sidebar.classList.contains('hidden') ? '순위판 보이기' : '순위판 숨기기';
}

function readAloudText(text) {
  if (!('speechSynthesis' in window)) {
    showToast('이 브라우저는 음성 재생을 지원하지 않습니다.');
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ko-KR';
  utterance.rate = 0.9;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function renderPart3Question() {
  const part3SentenceEl = document.getElementById('part3Sentence');
  const part3ProgressEl = document.getElementById('part3Progress');
  const part3TotalEl = document.getElementById('part3Total');
  const part3AnswerEl = document.getElementById('part3AnswerText');
  const part3PointsList = document.getElementById('part3PointsList');
  const part3SentenceBtn = document.getElementById('part3ListenSentenceBtn');
  const part3AnswerBtn = document.getElementById('part3ListenAnswerBtn');
  const part3AnswerPanel = document.getElementById('part3AnswerPanel');
  const currentQuiz = part3QuizData[currentPart3Index];

  if (!currentQuiz) return;

  part3ProgressEl.textContent = String(currentPart3Index + 1);
  part3TotalEl.textContent = String(part3QuizData.length);
  part3SentenceEl.textContent = '문장이 숨겨져 있습니다. 🔊 음성 듣기를 눌러 확인하세요.';
  part3SentenceBtn.dataset.speechText = currentQuiz.sentence;
  part3AnswerEl.textContent = currentQuiz.answer;
  part3AnswerBtn.dataset.speechText = currentQuiz.answer;
  part3PointsList.innerHTML = '';
  currentQuiz.points.forEach((point) => {
    const li = document.createElement('li');
    li.textContent = point;
    part3PointsList.appendChild(li);
  });
  part3AnswerPanel.classList.toggle('hidden', !part3AnswerVisible);
  const showAnswerBtn = document.getElementById('showPart3AnswerBtn');
  showAnswerBtn.textContent = part3AnswerVisible ? '정답 숨기기' : '정답 보기';
}

function renderPart4Question() {
  const quiz = part4QuizData[currentPart4Index];
  const progressEl = document.getElementById('part4Progress');
  const totalEl = document.getElementById('part4Total');
  const labelEl = document.getElementById('part4QuestionLabel');
  const cardGrid = document.getElementById('part4CardGrid');
  const answerBox = document.getElementById('part4AnswerBox');
  const revealBtn = document.getElementById('revealPart4Btn');

  if (!quiz) return;

  progressEl.textContent = String(currentPart4Index + 1);
  totalEl.textContent = String(part4QuizData.length);
  labelEl.textContent = quiz.label;
  cardGrid.innerHTML = '';

  quiz.cards.forEach((card, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'part4-card';
    button.dataset.cardIndex = String(index);
    button.innerHTML = `
      <div class="part4-card-inner">
        <div class="part4-card-face part4-card-front">
          <div class="part4-card-word">${card.word}</div>
        </div>
        <div class="part4-card-face part4-card-back">
          <div class="part4-card-word">${card.word}</div>
          <p class="part4-card-meaning">${card.reason}</p>
        </div>
      </div>
    `;

    button.addEventListener('click', () => {
      button.classList.add('is-selected');
      document.querySelectorAll('.part4-card').forEach((cardEl) => {
        if (cardEl !== button) cardEl.classList.remove('is-selected');
      });

      button.classList.remove('is-flipped');
      const sibling = cardGrid.querySelectorAll('.part4-card')[index === 0 ? 1 : 0];
      if (sibling) sibling.classList.remove('is-flipped');
      answerBox.classList.add('hidden');
      revealBtn.textContent = '정답 확인';
    });

    cardGrid.appendChild(button);
  });

  answerBox.classList.add('hidden');
  revealBtn.textContent = '정답 확인';
}

function revealPart4Answer() {
  const cards = document.querySelectorAll('.part4-card');
  part4Revealed = !part4Revealed;
  cards.forEach((card) => {
    card.classList.toggle('is-flipped', part4Revealed);
  });

  const answerBox = document.getElementById('part4AnswerBox');
  const currentQuiz = part4QuizData[currentPart4Index];
  const correctWord = currentQuiz.cards[currentQuiz.answerIndex].word;
  const correctReason = currentQuiz.cards[currentQuiz.answerIndex].reason;

  answerBox.classList.remove('hidden');
  answerBox.innerHTML = `
    <div class="part4-answer-title">정답 &amp; 3점 보너스 이유</div>
    <div class="part4-answer-text">${correctWord}</div>
    <div class="part4-answer-meaning">${correctReason}</div>
  `;

  const revealBtn = document.getElementById('revealPart4Btn');
  revealBtn.textContent = part4Revealed ? '정답 숨기기' : '정답 확인';
}

function goToPart4Question(direction) {
  currentPart4Index = (currentPart4Index + direction + part4QuizData.length) % part4QuizData.length;
  part4Revealed = false;
  renderPart4Question();
}

function togglePart3Answer() {
  part3AnswerVisible = !part3AnswerVisible;
  renderPart3Question();
}

function goToPart3Question(direction) {
  currentPart3Index = (currentPart3Index + direction + part3QuizData.length) % part3QuizData.length;
  part3AnswerVisible = false;
  renderPart3Question();
  resetPart3Timer();
}

function updatePart3TimerDisplay() {
  const timerValueEl = document.getElementById('part3TimerValue');
  if (timerValueEl) {
    timerValueEl.textContent = String(part3TimeLeft);
  }
}

function resetPart3Timer() {
  clearInterval(part3TimerId);
  part3TimerId = null;
  part3TimerRunning = false;
  part3TimeLeft = part3TimerSeconds;
  updatePart3TimerDisplay();
}

function startPart3Timer() {
  if (part3TimerRunning) return;

  part3TimerRunning = true;
  clearInterval(part3TimerId);
  part3TimerId = setInterval(() => {
    part3TimeLeft -= 1;
    updatePart3TimerDisplay();

    if (part3TimeLeft <= 0) {
      clearInterval(part3TimerId);
      part3TimerRunning = false;
      showToast('시간 종료! 정답을 확인해 주세요.');
      part3AnswerVisible = true;
      renderPart3Question();
    }
  }, 1000);
}

function applyPart3TimerSelection(seconds) {
  part3TimerSeconds = seconds;
  part3TimeLeft = seconds;
  clearInterval(part3TimerId);
  part3TimerId = null;
  part3TimerRunning = false;
  updatePart3TimerDisplay();
  document.querySelectorAll('[data-part3-seconds]').forEach((button) => {
    button.classList.toggle('active', Number(button.dataset.part3Seconds) === seconds);
  });
}

roundButtons.forEach((button) => {
  button.addEventListener('click', () => {
    applyRoundSelection(Number(button.dataset.round));
  });
});

nextSyllableBtn.addEventListener('click', () => {
  generateSyllable();
  hideTeamPicker();
});
correctBtn.addEventListener('click', showTeamPicker);

teamButtonsWrap.addEventListener('click', (event) => {
  const target = event.target.closest('.team-button');
  if (!target) return;

  const teamIndex = Number(target.dataset.teamIndex);
  addScoreForTeam(teamIndex);
});

applyTeamCountBtn.addEventListener('click', applyTeamCount);
resetScoresBtn.addEventListener('click', resetGameScores);
restartGameBtn.addEventListener('click', restartGame);
startRankingBtn.addEventListener('click', startRankingReveal);
nextRankingBtn.addEventListener('click', revealNextRank);
closeRankingBtn.addEventListener('click', closeRankingReveal);
rankingStage.addEventListener('click', (event) => {
  if (event.target === rankingStage) closeRankingReveal();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !rankingStage.classList.contains('hidden')) {
    closeRankingReveal();
  }
});

phaseTabs.forEach((button) => {
  button.addEventListener('click', () => {
    const targetPart = Number(button.dataset.part);
    if (button.disabled) return;
    selectPart(targetPart);
  });
});

prevWordBtn.addEventListener('click', () => goToWord(-1));
nextWordBtn.addEventListener('click', () => goToWord(1));
showAnswerBtn.addEventListener('click', toggleAnswerPanel);

document.addEventListener('click', (event) => {
  const speechButton = event.target.closest('[data-speech-text]');
  if (speechButton && speechButton.dataset.speechText) {
    readAloudText(speechButton.dataset.speechText);
  }

  const part3TimerButton = event.target.closest('[data-part3-seconds]');
  if (part3TimerButton) {
    applyPart3TimerSelection(Number(part3TimerButton.dataset.part3Seconds));
  }
});

document.getElementById('showPart3AnswerBtn').addEventListener('click', togglePart3Answer);
document.getElementById('prevPart3Btn').addEventListener('click', () => goToPart3Question(-1));
document.getElementById('nextPart3Btn').addEventListener('click', () => goToPart3Question(1));
document.getElementById('startPart3TimerBtn').addEventListener('click', startPart3Timer);
document.getElementById('revealPart4Btn').addEventListener('click', revealPart4Answer);
document.getElementById('prevPart4Btn').addEventListener('click', () => goToPart4Question(-1));
document.getElementById('nextPart4Btn').addEventListener('click', () => goToPart4Question(1));
if (togglePart4BoardBtn) {
  togglePart4BoardBtn.addEventListener('click', togglePart4BoardVisibility);
}

loadSavedState();
renderRoundButtons();
renderTeamList();
renderTeamButtons();
prepareRoundDeck();
generateSyllable();
renderWordCard();
renderParticipants();
renderPart3Participants();
renderPart4Participants();
renderPart3Question();
renderPart4Question();
applyPart3TimerSelection(part3TimerSeconds);
selectPart(1);

const STORAGE_KEY = "game-night-demo-v1";
const DEFAULT_PLAYERS = ["Aden", "YIBO", "Zhangyang", "Hujing", "Yangli", "Brain"];

const DEFAULT_TRUTHS = [
  "最近一次撒的小谎是什么？", "你偷偷喜欢过的人，是什么类型？", "手机里最舍不得删的一张照片是什么？",
  "做过最尴尬的一件事是什么？", "如果能和现场一个人交换一天生活，你会选谁？",
  "你最想改掉的一个小习惯是什么？", "最近一次心动是什么时候？", "说出你最害怕的一件小事。",
  "你做过最冲动的一次决定是什么？", "有没有假装看懂，其实完全没懂的时候？",
  "你最想收到什么样的礼物？", "在场的人里，谁最了解你？", "你最近搜索过最奇怪的东西是什么？",
  "如果能瞬间学会一项技能，你会选什么？", "你曾经最糗的穿搭是什么？", "最近一次笑到停不下来是因为什么？",
  "说一件别人不知道的小秘密。", "你愿意为了什么事情早起？", "描述一下你的理想周末。",
  "你做过最幼稚但开心的事是什么？", "如果明天放假，你最想和谁去哪里？",
  "你最常用的口头禅是什么？", "你相信一见钟情吗？为什么？", "点名夸夸左手边的人一件事。",
  "如果可以重来一次，你最想回到哪个时刻？",
];

const DEFAULT_DARES = [
  "用播音腔介绍一下你今天的穿搭。", "对右手边的人说一句真诚的夸奖。",
  "模仿一位你熟悉的动画角色 10 秒钟。", "用三个表情描述你今天的心情。",
  "给大家展示一个无伤大雅的才艺。", "用唱歌的方式说出自己的名字。",
  "即兴给这群朋友起一个组合名。", "做一个夸张的胜利姿势并保持五秒。",
  "用慢动作表演你早上起床的样子。", "用三个词夸夸坐在你对面的人。",
  "说一句你喜欢的电影台词。", "闭眼摸出一个随身物品，让大家猜是什么。",
  "模仿一种动物，让大家来猜。", "说出在场每个人的一个优点。",
  "用主持人的语气宣布下一轮游戏开始。", "摆一个杂志封面姿势，让大家欣赏三秒。",
  "用方言说一句“今晚玩得真开心”。", "和大家一起拍一张搞怪合照。",
  "邀请一位朋友和你击掌并碰拳。", "给未来的自己录一句十秒祝福。",
  "做一个你最拿手的表情包表情。", "用一句话给今天的聚会起个标题。",
  "轻轻哼一段歌，让大家猜歌名。", "给左手边的人设计一个友善的昵称。",
  "像颁奖典礼一样感谢今天在场的大家。",
];

const UNDERCOVER_WORD_PAIRS = [
  ["奶茶", "咖啡"], ["月亮", "太阳"], ["火车", "地铁"], ["饺子", "包子"], ["沙滩", "泳池"],
  ["猫", "狗"], ["汉堡", "三明治"], ["羽毛球", "网球"], ["图书馆", "书店"], ["冬天", "夏天"],
  ["电影", "电视剧"], ["冰箱", "空调"], ["蛋糕", "面包"], ["公交车", "出租车"], ["老师", "教练"],
  ["雨伞", "雨衣"], ["苹果", "梨"], ["吉他", "钢琴"], ["早餐", "宵夜"], ["枕头", "被子"],
];

const CHARADES_PROMPTS = [
  "手忙脚乱", "打草惊蛇", "画蛇添足", "守株待兔", "掩耳盗铃", "鸡飞狗跳", "火冒三丈", "眉开眼笑",
  "大摇大摆", "走马观花", "坐井观天", "一箭双雕", "亡羊补牢", "井底之蛙", "晴天霹雳", "手舞足蹈",
  "打哈欠", "放风筝", "骑自行车", "捉迷藏", "钓鱼", "打喷嚏", "照镜子", "打篮球",
  "猫捉老鼠", "机器人跳舞", "赶末班车", "做早餐", "拍照打卡", "追公交车", "拆礼物", "看恐怖片",
  "雨中漫步", "第一次滑冰", "找不到手机", "偷偷吃零食", "明星走红毯", "考试前复习", "睡过头了", "上台领奖",
  "大象", "长颈鹿", "熊猫", "企鹅", "袋鼠", "海豚", "螃蟹", "蝴蝶",
  "西瓜", "菠萝", "草莓", "香蕉", "冰淇淋", "披萨", "寿司", "火锅",
  "雨伞", "眼镜", "牙刷", "闹钟", "相机", "耳机", "台灯", "背包",
  "飞机", "轮船", "热气球", "摩天轮", "滑板", "帐篷", "灯塔", "城堡",
  "彩虹", "雪人", "火山", "流星", "仙人掌", "向日葵", "蘑菇", "圣诞树",
  "刷牙", "游泳", "踢足球", "弹吉他", "放烟花", "吹泡泡", "堆雪人", "坐过山车",
  "画龙点睛", "对牛弹琴", "狐假虎威", "杯弓蛇影", "一石二鸟", "盲人摸象", "刻舟求剑", "自相矛盾",
  "生日蛋糕", "快递员", "宇航员", "魔术师", "超级英雄", "海盗", "稻草人", "木乃伊",
  "猫头鹰", "斑马", "考拉", "章鱼", "滑雪", "跳绳", "跳伞", "拔河",
  "洗衣机", "电风扇", "吹风机", "望远镜", "电话亭", "自动售货机", "红绿灯", "旋转木马",
];

const TEAM_MISSIONS = [
  "全队无声配合，按大家起床时间早晚排队，不能报时间数字。",
  "全队从 1 数到 18，一人说一个数；抢话就从头重来，不能提前约定顺序。",
  "轮流说出 9 种零食，每个人至少贡献一种，不能重复。",
  "轮流接龙说出 10 个影视剧角色名字，不能重复。",
  "全队一起设计一个专属搞怪 pose，连续同步做两次。",
  "全队按手掌大小排队，全程不能用手互相比对。",
  "全队定格一个“超级英雄集体出击”造型，保持 5 秒不动。",
  "所有人同时比出同一个搞怪手势，连续两次全员一致才算完成。",
  "轮流说一句以“假如”开头的脑洞短句，不能重复。",
  "用 8 个词编一小段脑洞故事，每人只可以说一个词。",
  "全队编排一段 6 秒同步魔性小动作，整齐完成。",
  "找到 3 件柔软的物品，分别说说可以拿来怎么玩。",
  "轮流说出 7 个网红景点，不能重复。",
  "全队无声合作，摆出交通工具的造型，让其他队伍猜是什么。",
  "一起想一句搞笑的队伍口号，全员大声整齐喊出来。",
  "全队一起模仿同一种表情包的样子，定格 4 秒。",
];

const RHYTHM_PADS = [
  { icon: "●", name: "鼓点", color: "coral", frequency: 262 },
  { icon: "◆", name: "拍手", color: "gold", frequency: 330 },
  { icon: "▲", name: "铃声", color: "mint", frequency: 392 },
  { icon: "■", name: "低音", color: "violet", frequency: 523 },
];

const ACHIEVEMENTS = [
  { id: "first-night", icon: "🌟", title: "第一步", description: "完成你的第一轮小游戏。", progress: (value) => `${Math.min(value.rounds, 1)} / 1`, unlocked: (value) => value.rounds >= 1 },
  { id: "ten-rounds", icon: "🎉", title: "气氛升温", description: "累计完成 10 轮小游戏。", progress: (value) => `${Math.min(value.rounds, 10)} / 10`, unlocked: (value) => value.rounds >= 10 },
  { id: "fifty-rounds", icon: "🎊", title: "派对常驻嘉宾", description: "累计完成 50 轮小游戏。", progress: (value) => `${Math.min(value.rounds, 50)} / 50`, unlocked: (value) => value.rounds >= 50 },
  { id: "five-modes", icon: "🧩", title: "玩法探索家", description: "体验任意 5 种不同玩法。", progress: (value) => `${Math.min(activeModeCount(value), 5)} / 5`, unlocked: (value) => activeModeCount(value) >= 5 },
  { id: "all-modes", icon: "👑", title: "全能派对王", description: "体验全部 7 种保留玩法。", progress: (value) => `${activeModeCount(value)} / 7`, unlocked: (value) => activeModeCount(value) >= 7 },
  { id: "charades", icon: "🎨", title: "灵魂画手", description: "在「你画我猜」中成功猜中。", progress: (value) => `${Math.min(value.charadesWins, 1)} / 1`, unlocked: (value) => value.charadesWins >= 1 },
  { id: "mission", icon: "⚡", title: "最佳队友", description: "成功完成一项限时团队任务。", progress: (value) => `${Math.min(value.missionWins, 1)} / 1`, unlocked: (value) => value.missionWins >= 1 },
];

const HISTORY_GAME_MODES = {
  truth: "draw",
  dare: "draw",
  "转盘": "wheel",
  "命运转盘": "wheel",
  "幸运指尖": "finger",
  "摇骰子": "dice",
  "戳气球": "bomb",
  "戳气球 · 炸弹": "bomb",
  "谁是卧底": "undercover",
  "你画我猜": "charades",
  "你演我猜": "charades",
  "限时团队任务": "mission",
};

function activeModeCount(progress) {
  const activeModes = ["wheel", "finger", "dice", "bomb", "draw", "charades", "mission"];
  return activeModes.filter((mode) => progress.modes.includes(mode)).length;
}

function defaultAchievementProgress() {
  return { rounds: 0, modes: [], charadesWins: 0, missionWins: 0, rhythmWins: 0, expeditionWins: 0, unlocked: [] };
}

function normalizeAchievementProgress(value, history = []) {
  const base = defaultAchievementProgress();
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    const derived = { ...base };
    history.forEach((entry) => addHistoryToAchievementProgress(derived, entry));
    derived.unlocked = ACHIEVEMENTS.filter((item) => item.unlocked(derived)).map((item) => item.id);
    return derived;
  }
  const progress = {
    rounds: Number.isSafeInteger(value.rounds) ? Math.min(Number.MAX_SAFE_INTEGER, Math.max(0, value.rounds)) : base.rounds,
    modes: Array.isArray(value.modes)
      ? [...new Set(value.modes.filter((mode) => typeof mode === "string"))]
      : base.modes,
    charadesWins: Number.isSafeInteger(value.charadesWins) ? Math.max(0, value.charadesWins) : base.charadesWins,
    missionWins: Number.isSafeInteger(value.missionWins) ? Math.max(0, value.missionWins) : base.missionWins,
    rhythmWins: Number.isSafeInteger(value.rhythmWins) ? Math.max(0, value.rhythmWins) : base.rhythmWins,
    expeditionWins: Number.isSafeInteger(value.expeditionWins) ? Math.max(0, value.expeditionWins) : base.expeditionWins,
    unlocked: Array.isArray(value.unlocked)
      ? [...new Set(value.unlocked.filter((id) => typeof id === "string"))]
      : base.unlocked,
  };
  ACHIEVEMENTS.forEach((item) => {
    if (item.unlocked(progress) && !progress.unlocked.includes(item.id)) progress.unlocked.push(item.id);
  });
  return progress;
}

function addHistoryToAchievementProgress(progress, entry) {
  if (!entry || typeof entry !== "object") return;
  const mode = HISTORY_GAME_MODES[entry.type];
  if (mode && !progress.modes.includes(mode)) progress.modes.push(mode);
  if (progress.rounds < Number.MAX_SAFE_INTEGER) progress.rounds += 1;
  const text = typeof entry.text === "string" ? entry.text : "";
  if ((entry.type === "你画我猜" || entry.type === "你演我猜") && text.startsWith("全队猜中")) progress.charadesWins += 1;
  if (entry.type === "限时团队任务" && text.startsWith("完成 ·")) progress.missionWins += 1;
}

const EXPEDITION_STAGES = [
  { id: "gather", title: "集结营地", icon: "☝️", game: "finger", description: "全员选出今晚的幸运队长，完成第一项团队默契挑战。", reward: "shield" },
  { id: "warmup", title: "篝火热身", icon: "💬", game: "draw", description: "用真心话或大冒险让队伍热起来，勇敢但不勉强。", reward: "boost" },
  { id: "fork", title: "命运岔路", icon: "🧭", game: "", description: "队伍要选一条路线：稳妥补给，或冒险夺取星星。" },
  { id: "trap", title: "气球陷阱", icon: "🎈", game: "bomb", description: "戳开气球完成挑战；若踩中炸弹，团队可以消耗护盾。", reward: "shield" },
  { id: "treasure", title: "骰子宝箱", icon: "🎲", game: "dice", description: "摇骰子决定宝箱挑战，完成后赢得远征星与冲刺卡。", reward: "boost" },
  { id: "relay", title: "勇气接力", icon: "🎡", game: "wheel", description: "转盘选出接力代表，全队一起完成压轴前的试炼。", reward: "boost" },
  { id: "boss", title: "派对守关者", icon: "👑", game: "", description: "连续完成三段组合挑战，带着收集的星星拿下最终胜利。" },
];

const EXPEDITION_BOSS_PHASES = [
  { title: "第一阶段 · 勇气试炼", icon: "💬", game: "draw", description: "抽一张真心话或大冒险，团队一起完成这一轮。" },
  { title: "第二阶段 · 命运试炼", icon: "🎡", game: "wheel", description: "转动命运转盘，由被选中的玩家代表全队迎战。" },
  { title: "第三阶段 · 好运试炼", icon: "🎲", game: "dice", description: "掷出好运，为整支队伍赢下最后一颗星。" },
];

const EXPEDITION_DIFFICULTIES = {
  chill: { name: "轻松远征", lives: 5, targetStars: 3, description: "容错更多，适合热身和新朋友。" },
  standard: { name: "标准远征", lives: 3, targetStars: 5, description: "需要合作积累星星，推荐首次闯关。" },
  legend: { name: "传奇远征", lives: 2, targetStars: 6, description: "生命更少，必须争取冒险路线奖励。" },
};

function defaultExpeditionState() {
  return {
    status: "idle",
    difficulty: "standard",
    stageIndex: 0,
    bossPhase: 0,
    lives: 3,
    maxLives: 3,
    stars: 0,
    targetStars: 5,
    route: "",
    inventory: [],
    playedCurrentStage: false,
    bossComplete: false,
    lastStandUsed: false,
    events: [],
  };
}

function normalizeExpedition(value) {
  const base = defaultExpeditionState();
  if (!value || typeof value !== "object" || Array.isArray(value)) return base;
  const difficulty = Object.prototype.hasOwnProperty.call(EXPEDITION_DIFFICULTIES, value.difficulty)
    ? value.difficulty
    : base.difficulty;
  const allowedStatuses = ["idle", "active", "comeback", "won", "lost"];
  return {
    status: allowedStatuses.includes(value.status) ? value.status : base.status,
    difficulty,
    stageIndex: Number.isInteger(value.stageIndex) ? Math.min(6, Math.max(0, value.stageIndex)) : base.stageIndex,
    bossPhase: Number.isInteger(value.bossPhase) ? Math.min(3, Math.max(0, value.bossPhase)) : base.bossPhase,
    lives: Number.isInteger(value.lives) ? Math.min(20, Math.max(0, value.lives)) : base.lives,
    maxLives: Number.isInteger(value.maxLives) ? Math.min(20, Math.max(1, value.maxLives)) : base.maxLives,
    stars: Number.isInteger(value.stars) ? Math.min(99, Math.max(0, value.stars)) : base.stars,
    targetStars: Number.isInteger(value.targetStars) ? Math.min(99, Math.max(1, value.targetStars)) : base.targetStars,
    route: value.route === "safe" || value.route === "risk" ? value.route : "",
    inventory: Array.isArray(value.inventory)
      ? value.inventory.filter((item) => item === "shield" || item === "boost").slice(0, 20)
      : [],
    playedCurrentStage: value.playedCurrentStage === true,
    bossComplete: value.bossComplete === true,
    lastStandUsed: value.lastStandUsed === true,
    events: Array.isArray(value.events)
      ? value.events.filter((item) => typeof item === "string").slice(-30)
      : [],
  };
}

function defaultState() {
  return {
    players: DEFAULT_PLAYERS,
    truthBank: [...DEFAULT_TRUTHS],
    dareBank: [...DEFAULT_DARES],
    questionBags: { truth: [], dare: [] },
    history: [],
    diceHistory: [],
    soundEnabled: true,
    wheelMusicEnabled: false,
    expedition: defaultExpeditionState(),
    achievementProgress: defaultAchievementProgress(),
  };
}

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!stored || !Array.isArray(stored.players)) return defaultState();
    const base = defaultState();
    const history = Array.isArray(stored.history) ? stored.history.slice(0, 100) : [];
    return {
      players: stored.players.filter((name) => typeof name === "string").slice(0, 40),
      truthBank: Array.isArray(stored.truthBank) ? stored.truthBank.filter((item) => typeof item === "string") : base.truthBank,
      dareBank: Array.isArray(stored.dareBank) ? stored.dareBank.filter((item) => typeof item === "string") : base.dareBank,
      questionBags: stored.questionBags && typeof stored.questionBags === "object"
        ? {
          truth: Array.isArray(stored.questionBags.truth) ? stored.questionBags.truth.filter((item) => typeof item === "string") : [],
          dare: Array.isArray(stored.questionBags.dare) ? stored.questionBags.dare.filter((item) => typeof item === "string") : [],
        }
        : { truth: [], dare: [] },
      history,
      diceHistory: Array.isArray(stored.diceHistory) ? stored.diceHistory.slice(0, 20) : [],
      soundEnabled: typeof stored.soundEnabled === "boolean" ? stored.soundEnabled : true,
      wheelMusicEnabled: stored.wheelMusicEnabled === true,
      expedition: normalizeExpedition(stored.expedition),
      achievementProgress: normalizeAchievementProgress(stored.achievementProgress, history),
    };
  } catch {
    return defaultState();
  }
}

let state = loadState();
let activeGame = "";
let toastTimer;
let wheelTimer;
let wheelRotation = 0;
let wheelRunId = 0;
let wheelIsSpinning = false;
let backgroundAudio;
let backgroundMusicTimer;
let backgroundScene = 0;
let backgroundStep = 0;
let motionListener;
let fingerTimer;
let balloonRound = 1;
let balloonsRemaining = 9;
let bombIndex = randomInt(9);
let previousBalloonPlayer = "";
let miniGameInterval = null;
let miniGameTimeouts = [];
let undercoverSession = null;
let charadesSession = null;
let missionSession = null;
let rhythmSession = null;
let stickerTimer;
const $ = (selector, root = document) => root.querySelector(selector);
const screens = ["home", "game", "settings", "achievements"];

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    updateHeader();
  } catch {
    showToast("浏览器存储不可用；本次数据仅保留在当前页面。");
  }
}

function randomInt(max) {
  return Math.floor(Math.random() * max);
}

function pick(items) {
  if (!items.length) return "";
  return items[randomInt(items.length)];
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 3200);
}

function updateHeader() {
  $("#player-count").textContent = `👥 ${state.players.length} 位玩家`;
  $("#round-count").textContent = String(state.history.length);
  const soundToggle = $("#sound-toggle");
  soundToggle.setAttribute("aria-pressed", String(state.soundEnabled));
  soundToggle.setAttribute("aria-label", state.soundEnabled ? "关闭声音" : "开启声音");
  soundToggle.textContent = state.soundEnabled ? "🔊" : "🔇";
}

function playFeedback(kind = "tap") {
  if ("vibrate" in navigator) navigator.vibrate(kind === "win" ? [25, 30, 45] : 16);
  if (!state.soundEnabled) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  try {
    const shared = backgroundAudio && backgroundAudio.context.state !== "closed";
    const context = shared ? backgroundAudio.context : new AudioContext();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const now = context.currentTime;
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(kind === "win" ? 660 : 440, now);
    if (kind === "win") oscillator.frequency.setValueAtTime(880, now + 0.1);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.09, now + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(now);
    oscillator.stop(now + 0.19);
    if (!shared) oscillator.addEventListener("ended", () => context.close(), { once: true });
  } catch {
    showToast("设备暂不支持音效，游戏仍可正常进行。");
  }
}

function setBackgroundScene(scene) {
  const sceneMap = {
    home: 0, wheel: 1, finger: 2, dice: 3, bomb: 4, draw: 5,
    charades: 6, mission: 7, settings: 8, achievements: 9,
  };
  if (sceneMap[scene] === undefined) return;
  backgroundScene = sceneMap[scene];
  if (backgroundAudio) backgroundStep = 0;
  startBackgroundMusic();
}

function startBackgroundMusic() {
  if (!state.soundEnabled) return;
  if (backgroundAudio) {
    const context = backgroundAudio.context;
    if (context.state === "suspended") {
      context.resume().catch((error) => {
        if (backgroundAudio && backgroundAudio.context === context) {
          console.error("背景音乐无法恢复", error);
          showToast("背景音乐未能恢复，请点击声音按钮重试。");
        }
      });
    }
    return;
  }
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  try {
    const context = new AudioContext();
    const master = context.createGain();
    master.gain.value = 0.12;
    master.connect(context.destination);
    const motifs = [
      [0, 4, 7, 9, 7, 4, 2, 4],
      [0, 3, 7, 10, 7, 5, 3, 2],
      [0, 5, 7, 12, 9, 7, 5, 4],
      [0, 7, 10, 7, 3, 7, 12, 10],
      [0, 4, 5, 9, 5, 4, 2, 7],
      [0, 3, 5, 8, 7, 5, 3, 0],
      [0, 2, 7, 9, 11, 9, 7, 4],
      [0, 5, 9, 7, 4, 7, 10, 9],
      [0, 4, 9, 7, 11, 7, 4, 2],
      [0, 7, 9, 12, 11, 9, 7, 4],
    ];
    const roots = [48, 52, 55, 45, 50, 53, 47, 43, 46, 57];
    const playNote = (semitone, voice, octave) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = voice === 0 ? "sine" : "triangle";
      oscillator.frequency.value = 440 * (2 ** ((roots[backgroundScene] + semitone + octave * 12 - 69) / 12));
      gain.gain.setValueAtTime(0.0001, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(voice === 0 ? 0.22 : 0.08, context.currentTime + 0.025);
      gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.38);
      oscillator.connect(gain);
      gain.connect(master);
      oscillator.start();
      oscillator.stop(context.currentTime + 0.4);
    };
    backgroundAudio = { context, master };
    context.resume().then(() => {
      if (!backgroundAudio || backgroundAudio.context !== context || !state.soundEnabled) return;
      clearInterval(backgroundMusicTimer);
      backgroundMusicTimer = setInterval(() => {
        const motif = motifs[(backgroundScene + (Math.floor(backgroundStep / 16) % 2) * 3) % motifs.length];
        const step = backgroundStep % 16;
        const phrase = step < 8 ? motif : [...motif.slice(2), ...motif.slice(0, 2)];
        playNote(phrase[step % 8], 0, 1);
        if (step % 2 === 0) playNote(phrase[(step + 3) % 8], 1, 0);
        backgroundStep += 1;
      }, 420);
    }).catch((error) => {
      if (backgroundAudio && backgroundAudio.context === context) {
        stopBackgroundMusic();
        console.error("背景音乐无法播放", error);
        showToast("背景音乐未能播放，请检查设备音量并点击声音按钮重试。");
      }
    });
  } catch {
    backgroundAudio = undefined;
    showToast("背景音乐暂不可用，游戏仍可继续。");
  }
}

function stopBackgroundMusic() {
  clearInterval(backgroundMusicTimer);
  backgroundMusicTimer = undefined;
  const audio = backgroundAudio;
  backgroundAudio = undefined;
  if (audio) audio.context.close();
}

function cancelWheelSpin() {
  wheelRunId += 1;
  clearTimeout(wheelTimer);
  wheelTimer = undefined;
  wheelIsSpinning = false;
  if ("vibrate" in navigator) navigator.vibrate(0);
}

function drawFromBag(kind) {
  const bank = kind === "truth" ? state.truthBank : state.dareBank;
  const bag = state.questionBags[kind];
  if (!bank.length) return "";
  const available = new Set(bank);
  state.questionBags[kind] = bag.filter((question) => available.has(question));
  if (!state.questionBags[kind].length) {
    state.questionBags[kind] = [...bank];
    for (let index = state.questionBags[kind].length - 1; index > 0; index -= 1) {
      const swap = randomInt(index + 1);
      [state.questionBags[kind][index], state.questionBags[kind][swap]] =
        [state.questionBags[kind][swap], state.questionBags[kind][index]];
    }
  }
  return state.questionBags[kind].shift();
}

function pickDifferentPlayer(previous = "") {
  const choices = state.players.filter((player) => player !== previous);
  return pick(choices.length ? choices : state.players);
}

function showScreen(name) {
  if (!screens.includes(name)) return;
  if (name !== "game" && $("#game-screen").classList.contains("active")) {
    stopMotionSensor();
    cancelWheelSpin();
    clearInterval(fingerTimer);
    clearMiniGameTimers();
    undercoverSession = null;
    charadesSession = null;
    missionSession = null;
    rhythmSession = null;
  }
  screens.forEach((screen) => $(`#${screen}-screen`).classList.toggle("active", screen === name));
  if (name === "settings") renderSettings();
  if (name === "achievements") renderAchievements();
  setBackgroundScene(name);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function addHistory(type, player, text) {
  const entry = { type, player, text, time: new Date().toISOString() };
  state.history.unshift(entry);
  state.history = state.history.slice(0, 100);
  addHistoryToAchievementProgress(state.achievementProgress, entry);
  const newlyUnlocked = [];
  ACHIEVEMENTS.forEach((achievement) => {
    if (achievement.unlocked(state.achievementProgress) &&
      !state.achievementProgress.unlocked.includes(achievement.id)) {
      state.achievementProgress.unlocked.push(achievement.id);
      newlyUnlocked.push(achievement.title);
    }
  });
  saveState();
  if (newlyUnlocked.length) showToast(`成就解锁：${newlyUnlocked.join("、")}`);
}

function setGame(name) {
  activeGame = name;
  if (name === "bomb") {
    balloonRound = 1;
    balloonsRemaining = 9;
    bombIndex = randomInt(9);
    previousBalloonPlayer = "";
  }
  stopMotionSensor();
  cancelWheelSpin();
  clearInterval(fingerTimer);
  clearMiniGameTimers();
  undercoverSession = null;
  charadesSession = null;
  missionSession = null;
  rhythmSession = null;
  showScreen("game");
  renderGame();
}

function renderGame() {
  const content = $("#game-content");
  const renderers = {
    draw: renderDraw, wheel: renderWheel, finger: renderFinger, dice: renderDice, bomb: renderBomb,
    charades: renderCharades, mission: renderMission,
  };
  const titles = {
    draw: "真心话和大冒险", wheel: "命运转盘", finger: "幸运指尖", dice: "摇骰子", bomb: "戳气球",
    charades: "你画我猜", mission: "限时团队任务",
  };
  $("#game-title").textContent = titles[activeGame] || "小游戏";
  content.className = `play-panel panel play-${activeGame}`;
  content.onclick = null;
  setBackgroundScene(activeGame);
  $("#sticker-dock").hidden = !renderers[activeGame];
  if (!renderers[activeGame]) return;
  renderers[activeGame](content);
}

function clearMiniGameTimers() {
  clearInterval(miniGameInterval);
  miniGameInterval = null;
  miniGameTimeouts.forEach(clearTimeout);
  miniGameTimeouts = [];
}

function stopMotionSensor() {
  if (!motionListener) return;
  window.removeEventListener("devicemotion", motionListener);
  motionListener = undefined;
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);
}

function renderDraw(root) {
  root.innerHTML = `
    <div class="play-intro"><span class="play-emoji">💬</span><span class="play-kicker">SAY IT OR DO IT</span><h3>真心话，还是大冒险？</h3><p>玩家自动轮换，题目不会连续重复。也可以点开下方名单手动指定。</p></div>
    <div class="draw-controls"><label class="control-label" for="player-select">本轮玩家</label><select id="player-select" class="player-select"><option value="random">🎲 随机选择玩家</option>${state.players.map((name, index) => `<option value="${index}">${escapeHtml(name)}</option>`).join("")}</select><label class="control-label" for="draw-type">选择卡牌</label><select id="draw-type" class="player-select"><option value="mix">真心话 / 大冒险 随机</option><option value="truth">真心话</option><option value="dare">大冒险</option></select></div>
    <div id="draw-result" class="draw-result" role="status" aria-live="polite"><span>✨</span><strong>准备好了吗？</strong><p>抽到的题目会计入本机成就进度。</p></div>
    <div class="draw-actions"><button id="draw-button" class="button button-primary button-large" type="button" ${state.players.length ? "" : "disabled"}>抽一张卡 <span>✦</span></button><button id="draw-next-player" class="button button-outline" type="button" ${state.players.length < 2 ? "disabled" : ""}>换个人 ↻</button></div><p class="round-hint">本晚已完成 <b id="game-round-count">${state.history.length}</b> 轮 · 不想回答？点「下一题」跳过即可</p>`;
  const button = $("#draw-button", root);
  if (!button || !state.players.length) return;
  button.addEventListener("click", () => {
    const kind = $("#draw-type", root).value === "mix" ? (Math.random() < 0.5 ? "truth" : "dare") : $("#draw-type", root).value;
    const question = drawFromBag(kind);
    const playerValue = $("#player-select", root).value;
    const previousPlayer = $("#draw-result", root).dataset.player || "";
    const player = playerValue === "random" ? pickDifferentPlayer(previousPlayer) : state.players[Number(playerValue)];
    const result = $("#draw-result", root);
    result.classList.add("revealed");
    result.innerHTML = `<span>${kind === "truth" ? "💜 真心话" : "💗 大冒险"}</span><strong>${escapeHtml(question || "题库还没有题目，请先添加题目。")}</strong><p>本轮玩家：${escapeHtml(player)}</p>`;
    result.dataset.player = player;
    if (question) {
      button.innerHTML = '下一题 <span>↻</span>';
      playFeedback("win");
      addHistory(kind, player, question);
      $("#game-round-count", root).textContent = String(state.history.length);
    }
  });
  $("#draw-next-player", root).addEventListener("click", () => {
    const select = $("#player-select", root);
    const current = select.value === "random" ? $("#draw-result", root).dataset.player : state.players[Number(select.value)];
    const next = pickDifferentPlayer(current);
    select.value = String(state.players.indexOf(next));
    playFeedback();
    showToast(`下一位玩家：${next}`);
  });
}

function renderWheel(root) {
  const names = state.players.length ? state.players : ["先去设置添加玩家"];
  const spinDuration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 5600;
  const fullTurns = 8;
  wheelRotation = 0;
  wheelIsSpinning = false;
  root.innerHTML = `
    <div class="play-intro"><span class="play-emoji">✦</span><span class="play-kicker">THE MOMENT OF FATE</span><h3>让命运，为今晚揭晓答案</h3><p>每次转动时长一致，停下后揭晓本轮幸运玩家。</p></div>
    <div class="wheel-wrap" id="wheel-wrap">
      <span class="wheel-pointer" aria-hidden="true">▼</span>
      <canvas id="wheel-canvas" width="420" height="420" aria-label="玩家命运转盘"></canvas>
      <span class="wheel-orbit-light orbit-light-one" aria-hidden="true"></span>
      <span class="wheel-orbit-light orbit-light-two" aria-hidden="true"></span>
    </div>
    <div class="wheel-result" id="wheel-result" role="status" aria-live="polite">准备好了吗？命运正在等待你。</div>
    <div class="wheel-actions">
      <button id="spin-button" class="button button-primary button-large" type="button" ${state.players.length ? "" : "disabled"}>转动命运 <span>✦</span></button>
    </div>`;
  drawWheel($("#wheel-canvas", root), names);
  const canvas = $("#wheel-canvas", root);
  const spinButton = $("#spin-button", root);
  const result = $("#wheel-result", root);
  spinButton.addEventListener("click", (event) => {
    if (!state.players.length || wheelIsSpinning) return;
    const button = event.currentTarget;
    const runId = ++wheelRunId;
    wheelIsSpinning = true;
    button.disabled = true;
    const winnerIndex = randomInt(state.players.length);
    result.textContent = "命运转动中…";
    result.classList.remove("winner");
    $("#wheel-wrap", root).classList.add("is-spinning");
    const slice = 360 / state.players.length;
    const targetAngle = (360 - (winnerIndex + 0.5) * slice) % 360;
    const currentAngle = ((wheelRotation % 360) + 360) % 360;
    const alignment = (targetAngle - currentAngle + 360) % 360;
    wheelRotation += fullTurns * 360 + alignment;
    canvas.style.setProperty("--wheel-spin-duration", `${spinDuration}ms`);
    canvas.style.transform = `rotate(${wheelRotation}deg)`;
    playFeedback();
    const finishSpin = () => {
      if (runId !== wheelRunId || !wheelIsSpinning) return;
      clearTimeout(wheelTimer);
      wheelTimer = undefined;
      wheelIsSpinning = false;
      $("#wheel-wrap", root).classList.remove("is-spinning");
      const winner = state.players[winnerIndex];
      result.textContent = `🎉 这次轮到：${winner}`;
      result.classList.add("winner");
      addHistory("转盘", winner, "命运转盘选中了这位玩家");
      playFeedback("win");
      button.disabled = false;
    };
    if (spinDuration === 0) {
      wheelTimer = setTimeout(finishSpin, 0);
    } else {
      canvas.addEventListener("transitionend", (transitionEvent) => {
        if (transitionEvent.target === canvas && transitionEvent.propertyName === "transform") finishSpin();
      }, { once: true });
      wheelTimer = setTimeout(finishSpin, spinDuration * 2);
    }
  });
}

function drawWheel(canvas, names) {
  const context = canvas.getContext("2d");
  if (!context) {
    showToast("当前浏览器无法显示转盘，请换用较新的浏览器。");
    return;
  }
  const radius = canvas.width / 2;
  const colors = [
    ["#46d8e8", "#1766bd"], ["#ff88a8", "#d62f70"], ["#a99cff", "#6343c9"], ["#ffd27d", "#d87732"],
    ["#7be0bd", "#168c86"], ["#8cb9ff", "#4b55c8"], ["#ffc17d", "#df5f47"], ["#b2a1ff", "#7849bd"],
  ];
  names.forEach((name, index) => {
    const start = (index * Math.PI * 2) / names.length - Math.PI / 2;
    const end = ((index + 1) * Math.PI * 2) / names.length - Math.PI / 2;
    const gradient = context.createLinearGradient(radius, 12, radius, canvas.height - 12);
    gradient.addColorStop(0, colors[index % colors.length][0]);
    gradient.addColorStop(1, colors[index % colors.length][1]);
    context.beginPath();
    context.moveTo(radius, radius);
    context.arc(radius, radius, radius - 13, start, end);
    context.closePath();
    context.fillStyle = gradient;
    context.fill();
    context.strokeStyle = "rgba(255,255,255,.58)";
    context.lineWidth = 2;
    context.stroke();
    context.save();
    context.translate(radius, radius);
    context.rotate((start + end) / 2);
    context.textAlign = "right";
    context.textBaseline = "middle";
    context.fillStyle = "#fff";
    context.shadowColor = "rgba(10,18,40,.35)";
    context.shadowBlur = 5;
    const fontSize = names.length > 24 ? 10 : names.length > 15 ? 12 : 15;
    context.font = `700 ${fontSize}px system-ui, sans-serif`;
    const maxLength = names.length > 24 ? 5 : names.length > 15 ? 7 : 10;
    context.fillText(name.length > maxLength ? `${name.slice(0, maxLength - 1)}…` : name, radius - 40, 0, radius - 83);
    context.restore();
  });
  context.beginPath();
  context.arc(radius, radius, 39, 0, Math.PI * 2);
  const hub = context.createRadialGradient(radius - 12, radius - 14, 2, radius, radius, 40);
  hub.addColorStop(0, "#ffffff");
  hub.addColorStop(0.55, "#e8f2ff");
  hub.addColorStop(1, "#9cbce2");
  context.fillStyle = hub;
  context.fill();
  context.strokeStyle = "rgba(255,255,255,.9)";
  context.lineWidth = 3;
  context.stroke();
  context.fillStyle = "#243a64";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.font = "800 10px system-ui, sans-serif";
  context.fillText("FATE", radius, radius);
}

function renderFinger(root) {
  root.innerHTML = `
    <div class="play-intro"><span class="play-emoji">☝️</span><span class="play-kicker">FINGERS CROSSED</span><h3>多人同时触屏</h3><p>先选择人数，大家同时按住触摸区，人数到齐后保持 3 秒揭晓。每根手指按加入顺序对应名单中的玩家。</p></div>
    ${state.players.length < 2 ? '<p class="round-hint">先在设置中添加至少两位玩家。</p>' : ""}
    <label class="control-label" for="finger-count">本轮参加人数</label>
    <select id="finger-count" class="player-select finger-count" ${state.players.length < 2 ? "disabled" : ""}>${Array.from({ length: Math.max(0, Math.min(6, state.players.length) - 1) }, (_, index) => `<option value="${index + 2}">${index + 2} 人</option>`).join("")}</select>
    <div id="finger-touch-zone" class="finger-touch-zone" role="region" aria-label="多人同时按住这里抽选玩家">大家同时按住这里</div>
    <div id="finger-players" class="finger-players" aria-label="已参与玩家"></div>
    <div id="finger-result" class="result-line" role="status" aria-live="polite">${state.players.length < 2 ? "等待添加玩家" : "等待大家同时按下"}</div>
    <p class="round-hint">实际可识别的手指数取决于设备和系统；若无法到齐，请改用支持更多触点的设备。</p>
    <button id="finger-reset" class="button button-outline" type="button">重新开始 ↻</button>`;
  const zone = $("#finger-touch-zone", root);
  const participants = $("#finger-players", root);
  const result = $("#finger-result", root);
  const count = $("#finger-count", root);
  const activePointers = new Map();
  let locked = false;
  let deadline = 0;
  const updateParticipants = () => {
    participants.innerHTML = [...activePointers.values()].map((name, index) =>
      `<span class="finger-chip selected"><span>${index + 1}.</span>${escapeHtml(name)}</span>`).join("");
    zone.textContent = `已按下 ${activePointers.size} / ${count.value || 0} 人`;
  };
  const stopCountdown = () => {
    clearInterval(fingerTimer);
    fingerTimer = undefined;
    deadline = 0;
  };
  const reset = () => {
    stopCountdown();
    activePointers.clear();
    locked = false;
    count.disabled = state.players.length < 2;
    participants.innerHTML = "";
    zone.textContent = "大家同时按住这里";
    result.textContent = state.players.length < 2 ? "先在设置中添加至少两位玩家" : "等待大家同时按下";
  };
  const tick = () => {
    const remaining = Math.ceil((deadline - Date.now()) / 1000);
    if (remaining > 0) {
      result.textContent = `人数已到齐，保持按住 ${remaining} 秒…`;
      return;
    }
    stopCountdown();
    locked = true;
    const players = [...activePointers.values()];
    const winner = players[randomInt(players.length)];
    result.textContent = `🎉 幸运玩家是：${winner}`;
    zone.textContent = "已揭晓，松开手指";
    addHistory("幸运指尖", winner, `${players.length} 位玩家同时触屏，随机抽选出幸运玩家`);
    playFeedback("win");
  };
  zone.addEventListener("pointerdown", (event) => {
    if (locked || state.players.length < 2 || activePointers.has(event.pointerId)) return;
    if (activePointers.size >= Number(count.value)) return;
    event.preventDefault();
    zone.setPointerCapture(event.pointerId);
    const name = state.players.find((player) => ![...activePointers.values()].includes(player));
    activePointers.set(event.pointerId, name);
    count.disabled = true;
    updateParticipants();
    if (activePointers.size === Number(count.value)) {
      deadline = Date.now() + 3000;
      tick();
      fingerTimer = setInterval(tick, 100);
    } else {
      result.textContent = `还需要 ${Number(count.value) - activePointers.size} 位玩家按住`;
    }
  });
  const release = (event) => {
    if (!activePointers.has(event.pointerId)) return;
    activePointers.delete(event.pointerId);
    if (locked) return;
    stopCountdown();
    updateParticipants();
    count.disabled = activePointers.size > 0 || state.players.length < 2;
    result.textContent = "触点松开或被系统中断，请重新按住；到齐后才会揭晓。";
  };
  zone.addEventListener("pointerup", release);
  zone.addEventListener("pointercancel", release);
  zone.addEventListener("lostpointercapture", release);
  $("#finger-reset", root).addEventListener("click", reset);
  count.addEventListener("change", reset);
}

function renderDice(root) {
  root.innerHTML = `
    <div class="play-intro"><span class="play-emoji">🎲</span><span class="play-kicker">ROLL THE DICE</span><h3>摇出你的好运气</h3><p>授权后摇动手机，或点击骰盅掷骰。点数先盖住，按住偷看；揭盅后可重摇或抽惩罚。</p></div>
    <div class="dice-setting"><label class="control-label" for="dice-count">骰子数量</label><select id="dice-count" class="player-select"><option value="1">1 颗</option><option value="2">2 颗</option><option value="3">3 颗</option><option value="4">4 颗</option><option value="5">5 颗</option></select></div>
    <button id="dice-stage" class="dice-stage dice-cup" type="button" aria-label="点击骰盅掷骰"><span class="dice">🎲</span></button>
    <div id="dice-result" class="dice-result" role="status" aria-live="polite">摇动手机或点击骰盅开始</div>
    <div class="dice-actions"><button id="reveal-dice" class="button button-outline" type="button" disabled>掀开亮盅</button></div>
    <div class="dice-actions"><button id="reroll-dice" class="button button-outline" type="button" hidden>盖回去重摇</button><button id="dice-punishment" class="button button-quiet" type="button" hidden>输了，抽个惩罚</button></div>
    <button id="enable-motion" class="button button-outline" type="button">开启摇动感应</button>
    <div class="dice-history"><div><strong>最近记录</strong><button class="text-button" id="clear-dice" type="button">清除</button></div><div id="dice-history-list"></div></div>`;
  const stage = $("#dice-stage", root);
  const result = $("#dice-result", root);
  const revealButton = $("#reveal-dice", root);
  const rerollButton = $("#reroll-dice", root);
  const punishmentButton = $("#dice-punishment", root);
  let diceValues = [];
  let isRolling = false;
  let peekTimer;
  let rollTimer;
  const roll = () => {
    if (isRolling) return;
    isRolling = true;
    clearTimeout(peekTimer);
    const amount = Number($("#dice-count", root).value);
    diceValues = Array.from({ length: amount }, () => randomInt(6) + 1);
    stage.classList.add("rolling");
    stage.dataset.revealed = "false";
    stage.innerHTML = '<span class="dice">🎲</span>';
    stage.setAttribute("aria-label", "按住偷看骰子点数");
    result.textContent = "骰盅正在摇动……";
    if ("vibrate" in navigator) navigator.vibrate([35, 40, 35, 40, 60]);
    revealButton.disabled = true;
    rerollButton.hidden = true;
    punishmentButton.hidden = true;
    clearTimeout(rollTimer);
    rollTimer = setTimeout(() => {
      stage.classList.remove("rolling");
      result.textContent = "骰子已盖住。按住偷看，或掀开亮盅。";
      revealButton.disabled = false;
      isRolling = false;
    }, 750);
  };
  const reveal = (final = false) => {
    if (!diceValues.length) return;
    if (final && stage.dataset.revealed === "true") return;
    const total = diceValues.reduce((sum, value) => sum + value, 0);
    const symbols = ["", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    stage.innerHTML = diceValues.map((value) => `<span class="dice">${symbols[value]}</span>`).join("");
    stage.setAttribute("aria-label", `骰子点数 ${diceValues.join("、")}`);
    result.textContent = `${final ? "亮盅 · " : "偷看 · "}${diceValues.join("、")} · 总计 ${total}`;
    if (!final) return;
    stage.dataset.revealed = "true";
    revealButton.disabled = true;
    state.diceHistory.unshift({ dice: [...diceValues], total, time: new Date().toISOString() });
    state.diceHistory = state.diceHistory.slice(0, 20);
    saveState();
    renderDiceHistory(root);
    addHistory("摇骰子", "大家", `${diceValues.join("、")}，总点数 ${total}`);
    rerollButton.hidden = false;
    punishmentButton.hidden = false;
    playFeedback("win");
  };
  stage.addEventListener("click", () => {
    if (!diceValues.length && !isRolling) roll();
  });
  stage.addEventListener("pointerdown", (event) => {
    if (!diceValues.length || isRolling || stage.dataset.revealed === "true") return;
    event.preventDefault();
    peekTimer = setTimeout(() => reveal(false), 350);
  });
  ["pointerup", "pointercancel", "pointerleave"].forEach((eventName) =>
    stage.addEventListener(eventName, () => {
      clearTimeout(peekTimer);
      if (stage.dataset.revealed === "true" || isRolling || !diceValues.length) return;
      stage.innerHTML = '<span class="dice">🎲</span>';
      stage.setAttribute("aria-label", "按住偷看骰子点数");
      result.textContent = "骰子已盖住。按住偷看，或掀开亮盅。";
    }));
  revealButton.addEventListener("click", () => {
    clearTimeout(peekTimer);
    reveal(true);
  });
  rerollButton.addEventListener("click", roll);
  punishmentButton.addEventListener("click", () => {
    const kind = Math.random() < 0.5 ? "truth" : "dare";
    const prompt = drawFromBag(kind);
    result.textContent = `惩罚卡 · ${kind === "truth" ? "真心话" : "大冒险"}：${prompt || "题库还没有内容，请到设置添加。"}`;
    playFeedback("win");
  });
  $("#enable-motion", root).addEventListener("click", async (event) => {
    const button = event.currentTarget;
    button.disabled = true;
    try {
      const motionEvent = window.DeviceMotionEvent;
      if (!motionEvent) throw new Error("此设备不支持摇动感应，请点击骰盅掷骰。");
      if (typeof motionEvent.requestPermission === "function" &&
          await motionEvent.requestPermission() !== "granted") {
        throw new Error("未获得摇动感应权限，可稍后重试或点击骰盅掷骰。");
      }
      if (activeGame !== "dice" || !$("#game-screen").classList.contains("active") || !root.contains(button)) return;
      let lastShake = 0;
      motionListener = (motion) => {
        const acceleration = motion.accelerationIncludingGravity;
        if (!acceleration) return;
        const magnitude = Math.hypot(acceleration.x || 0, acceleration.y || 0, acceleration.z || 0);
        const now = Date.now();
        if (magnitude > 24 && now - lastShake > 1100 && !isRolling) {
          lastShake = now;
          roll();
        }
      };
      window.addEventListener("devicemotion", motionListener);
      button.textContent = "已开启感应";
    } catch (error) {
      button.disabled = false;
      showToast(error instanceof Error ? error.message : "无法开启摇动感应。");
    }
  });
  $("#clear-dice", root).addEventListener("click", () => {
    state.diceHistory = [];
    saveState();
    renderDiceHistory(root);
  });
  renderDiceHistory(root);
}

function renderDiceHistory(root) {
  const list = $("#dice-history-list", root);
  if (!list) return;
  list.innerHTML = state.diceHistory.length
    ? state.diceHistory.slice(0, 5).map((item) => `<span class="dice-history-item">${item.dice.map((value) => ["", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"][value]).join(" ")} <b>${item.total}</b></span>`).join("")
    : '<span class="empty-note">还没有掷骰记录</span>';
}

function renderBomb(root) {
  const labels = Array.from({ length: 9 }, (_, index) => `<button class="balloon" type="button" data-balloon="${index}" aria-label="戳第 ${index + 1} 个气球" ${state.players.length ? "" : "disabled"}><span>🎈</span></button>`).join("");
  root.innerHTML = `
    <div class="play-intro"><span class="play-emoji">🎈</span><span class="play-kicker">POP OR BOOM</span><h3>小心，气球里有惊喜</h3><p>挑一个戳破它。完成挑战，或者不小心踩到炸弹！</p></div>
    <div class="bomb-meta"><span>第 <b id="bomb-round">${balloonRound}</b> 轮</span><span>还剩 <b id="balloon-count">${balloonsRemaining}</b> 个气球</span></div>
    <div class="balloon-turn">
      <div class="balloon-turn-select"><label class="control-label" for="balloon-player">这次由谁戳？</label><select id="balloon-player" class="player-select" ${state.players.length ? "" : "disabled"}><option value="random">🎲 每次随机轮换</option>${state.players.map((name, index) => `<option value="${index}">${escapeHtml(name)}</option>`).join("")}</select></div>
      <div class="balloon-turn-indicator"><span>☝️</span><span>本轮玩家</span><strong id="balloon-current"></strong></div>
    </div>
    <div class="balloon-grid">${labels}</div>
    <div id="bomb-result" class="result-line" role="status" aria-live="polite">${state.players.length ? "先选好戳球玩家，再挑一个气球试试手气。" : "请先到设置添加玩家。"}</div>
    <button id="bomb-reset" class="button button-outline" type="button" hidden>再开一轮 <span>↻</span></button>`;
  const buttons = $$(".balloon", root);
  const playerSelect = $("#balloon-player", root);
  const currentPlayer = $("#balloon-current", root);
  let nextPlayer = "";
  const chooseNextPlayer = () => {
    nextPlayer = playerSelect.value === "random"
      ? (pickDifferentPlayer(previousBalloonPlayer) || "请先添加玩家")
      : (state.players[Number(playerSelect.value)] || "请先添加玩家");
    currentPlayer.textContent = nextPlayer;
  };
  chooseNextPlayer();
  playerSelect.addEventListener("change", chooseNextPlayer);
  buttons.forEach((button) => button.addEventListener("click", () => {
    if (button.disabled) return;
    const index = Number(button.dataset.balloon);
    const player = nextPlayer;
    previousBalloonPlayer = player;
    currentPlayer.textContent = player;
    button.disabled = true;
    balloonsRemaining -= 1;
    $("#balloon-count", root).textContent = balloonsRemaining;
    if (index === bombIndex) {
      button.classList.add("exploded");
      button.innerHTML = "<span>💥</span>";
      const dare = drawFromBag("dare") || "给大家讲一个笑话。";
      $("#bomb-result", root).textContent = `砰！${player} 踩到炸弹：${dare}`;
      addHistory("戳气球 · 炸弹", player, dare);
      playFeedback("win");
      $("#bomb-reset", root).hidden = false;
      $$(".balloon", root).forEach((balloon) => { balloon.disabled = true; });
      return;
    }
    button.classList.add("popped");
    button.innerHTML = "<span>✨</span>";
    const type = Math.random() < 0.5 ? "truth" : "dare";
    const challenge = drawFromBag(type);
    $("#bomb-result", root).textContent = challenge
      ? `${player} 的${type === "truth" ? "真心话" : "小挑战"}：${challenge}`
      : `${player} 戳到一份好运，继续戳下一个吧！`;
    addHistory("戳气球", player, challenge || "戳中一个好运气球");
    chooseNextPlayer();
    playFeedback();
  }));
  $("#bomb-reset", root).addEventListener("click", () => {
    balloonRound += 1;
    balloonsRemaining = 9;
    bombIndex = randomInt(9);
    previousBalloonPlayer = "";
    renderGame();
  });
}

function $$(selector, root = document) {
  return [...root.querySelectorAll(selector)];
}

function shuffled(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swap = randomInt(index + 1);
    [result[index], result[swap]] = [result[swap], result[index]];
  }
  return result;
}

function renderUndercover(root) {
  if (!undercoverSession) undercoverSession = { phase: "setup" };
  const game = undercoverSession;
  const maxUndercover = state.players.length >= 8 ? 2 : 1;
  let content = "";

  if (game.phase === "setup") {
    content = `
      <div class="play-intro"><span class="play-emoji">🕵️</span><span class="play-kicker">HIDDEN WORDS</span><h3>谁拿到了不一样的词？</h3><p>至少 3 人参加。轮流偷看自己的词语，再描述、讨论、秘密投票找出卧底。</p></div>
      <div class="mini-game-panel">
        <p>把手机依次传给每位玩家。只有当前玩家查看屏幕上的身份；描述时不能直接说出词语。</p>
        <label class="control-label" for="undercover-count">卧底人数</label>
        <select id="undercover-count" class="player-select">
          <option value="1">1 名卧底</option>
          ${maxUndercover === 2 ? '<option value="2">2 名卧底</option>' : ""}
        </select>
        <button class="button button-primary button-large" type="button" data-undercover-action="start" ${state.players.length < 3 ? "disabled" : ""}>分配秘密词语 <span>✦</span></button>
        ${state.players.length < 3 ? '<p class="round-hint">至少需要 3 位玩家，请先在设置中添加玩家。</p>' : ""}
      </div>`;
  } else if (game.phase === "reveal") {
    const playerId = game.revealOrder[game.revealIndex];
    const player = game.roster[playerId];
    content = `
      <div class="play-intro"><span class="play-emoji">🔒</span><span class="play-kicker">PRIVATE ROLE</span><h3>请把手机交给这位玩家</h3><p>确保其他人看不到屏幕，再查看自己的词语。记住后按“隐藏并传给下一位”。</p></div>
      <div class="mini-game-panel undercover-reveal">
        <span class="round-hint">身份查看 ${game.revealIndex + 1} / ${game.revealOrder.length}</span>
        <strong class="undercover-player">${escapeHtml(player.name)}</strong>
        ${game.roleVisible
          ? `<div class="secret-word"><span>${player.role === "undercover" ? "🕵️ 你是卧底" : "🙂 你是平民"}</span><strong>${escapeHtml(player.role === "undercover" ? game.words.undercover : game.words.civilian)}</strong></div>
            <button class="button button-outline" type="button" data-undercover-action="hide">隐藏词语并传给下一位</button>`
          : '<p>请确认只有自己能看到屏幕。</p><button class="button button-primary button-large" type="button" data-undercover-action="reveal">查看我的词语</button>'}
      </div>`;
  } else if (game.phase === "discuss") {
    const alive = game.roster.filter((player) => player.alive);
    content = `
      <div class="play-intro"><span class="play-emoji">💬</span><span class="play-kicker">DISCUSS & DESCRIBE</span><h3>第 ${game.round} 轮：轮流描述</h3><p>按顺序描述自己的词语，不要直接说词；听完后讨论谁最可疑。</p></div>
      <div class="mini-game-panel"><div class="undercover-roster">${alive.map((player) => `<span>${escapeHtml(player.name)}</span>`).join("")}</div>
        <p>${alive.length} 位玩家仍在场；卧底人数保持秘密。</p>
        <button class="button button-primary button-large" type="button" data-undercover-action="vote-start">开始秘密投票 <span>→</span></button>
      </div>`;
  } else if (game.phase === "vote") {
    const voters = game.roster.filter((player) => player.alive);
    const voter = voters[game.voteIndex];
    const candidates = voters.filter((player) => player.id !== voter.id);
    content = `
      <div class="play-intro"><span class="play-emoji">🗳️</span><span class="play-kicker">SECRET VOTE</span><h3>把手机交给 ${escapeHtml(voter.name)}</h3><p>每位玩家依次投给一位其他玩家。已记录的票数不会提前显示。</p></div>
      <div class="mini-game-panel">
        <span class="round-hint">投票 ${game.voteIndex + 1} / ${voters.length}</span>
        <label class="control-label" for="undercover-target">你认为谁是卧底？</label>
        <select id="undercover-target" class="player-select">${candidates.map((player) => `<option value="${player.id}">${escapeHtml(player.name)}</option>`).join("")}</select>
        <button class="button button-primary button-large" type="button" data-undercover-action="vote">确认投票</button>
      </div>`;
  } else if (game.phase === "tie" || game.phase === "expelled") {
    const last = game.lastVote;
    const eliminated = last.eliminatedId === null ? null : game.roster[last.eliminatedId];
    content = `
      <div class="play-intro"><span class="play-emoji">${game.phase === "tie" ? "⚖️" : "🔎"}</span><span class="play-kicker">VOTE RESULT · ROUND ${game.round}</span><h3>${game.phase === "tie" ? "最高票平票，无人出局" : `${escapeHtml(eliminated.name)} 被票选出局`}</h3>
        <p>${game.phase === "tie" ? `平票玩家：${last.tiedIds.map((id) => escapeHtml(game.roster[id].name)).join("、")}。再讨论一轮后重新投票。` : `TA 的身份是：${eliminated.role === "undercover" ? "🕵️ 卧底" : "🙂 平民"}`}</p></div>
      <div class="mini-game-panel"><div class="vote-results">${last.counts.map(({ id, count }) => `<span>${escapeHtml(game.roster[id].name)}<b>${count} 票</b></span>`).join("")}</div>
        <button class="button button-primary button-large" type="button" data-undercover-action="continue">继续讨论并投票 <span>→</span></button>
      </div>`;
  } else if (game.phase === "finished") {
    const villagersWon = game.winner === "villagers";
    content = `
      <div class="mini-game-finale panel ${villagersWon ? "is-victory" : "is-defeat"}">
        <span class="expedition-finale-icon">${villagersWon ? "🏆" : "🕵️"}</span><span class="expedition-kicker">UNDERCOVER REVEALED</span>
        <h3>${villagersWon ? "平民阵营获胜！" : "卧底阵营获胜！"}</h3>
        <p>${villagersWon ? "所有卧底都被成功找出。" : "卧底人数已不少于平民，成功混入人群。"}</p>
        <div class="undercover-roster">${game.roster.map((player) => `<span>${escapeHtml(player.name)} · ${player.role === "undercover" ? "卧底" : "平民"}${player.alive ? "" : " · 出局"}</span>`).join("")}</div>
        <button class="button button-primary" type="button" data-undercover-action="restart">再玩一局 ↻</button>
      </div>`;
  }

  root.innerHTML = content;
  root.onclick = (event) => {
    const button = event.target.closest("[data-undercover-action]");
    if (!button) return;
    const action = button.dataset.undercoverAction;
    if (action === "start") {
      const count = Number($("#undercover-count", root).value);
      if (state.players.length < 3 || !Number.isInteger(count) || count < 1 || count > maxUndercover) return;
      const undercoverIds = new Set(shuffled(state.players.map((_, index) => index)).slice(0, count));
      const words = pick(UNDERCOVER_WORD_PAIRS);
      undercoverSession = {
        phase: "reveal",
        roster: state.players.map((name, id) => ({ id, name, alive: true, role: undercoverIds.has(id) ? "undercover" : "villager" })),
        revealOrder: shuffled(state.players.map((_, index) => index)),
        revealIndex: 0,
        roleVisible: false,
        words: { civilian: words[0], undercover: words[1] },
        round: 1,
        voteIndex: 0,
        votes: [],
        lastVote: null,
        winner: "",
      };
    } else if (action === "reveal") {
      undercoverSession.roleVisible = true;
    } else if (action === "hide") {
      undercoverSession.revealIndex += 1;
      undercoverSession.roleVisible = false;
      if (undercoverSession.revealIndex >= undercoverSession.revealOrder.length) undercoverSession.phase = "discuss";
    } else if (action === "vote-start") {
      undercoverSession.phase = "vote";
      undercoverSession.voteIndex = 0;
      undercoverSession.votes = [];
    } else if (action === "vote") {
      const targetId = Number($("#undercover-target", root).value);
      const voters = undercoverSession.roster.filter((player) => player.alive);
      if (!Number.isInteger(targetId) || !voters.some((player) => player.id === targetId) || voters[undercoverSession.voteIndex].id === targetId) return;
      undercoverSession.votes.push(targetId);
      undercoverSession.voteIndex += 1;
      if (undercoverSession.voteIndex >= voters.length) resolveUndercoverVote();
    } else if (action === "continue") {
      undercoverSession.round += 1;
      undercoverSession.phase = "discuss";
      undercoverSession.lastVote = null;
    } else if (action === "restart") {
      undercoverSession = { phase: "setup" };
    }
    renderUndercover(root);
    playFeedback(action === "vote" || action === "continue" ? "win" : "tap");
  };
}

function resolveUndercoverVote() {
  const game = undercoverSession;
  const voters = game.roster.filter((player) => player.alive);
  const tally = new Map(voters.map((player) => [player.id, 0]));
  game.votes.forEach((id) => tally.set(id, tally.get(id) + 1));
  const topVotes = Math.max(...tally.values());
  const tiedIds = [...tally.entries()].filter(([, count]) => count === topVotes).map(([id]) => id);
  const counts = [...tally.entries()].map(([id, count]) => ({ id, count })).sort((a, b) => b.count - a.count);
  if (tiedIds.length !== 1) {
    game.lastVote = { counts, tiedIds, eliminatedId: null };
    game.phase = "tie";
    return;
  }
  const eliminatedId = tiedIds[0];
  game.roster[eliminatedId].alive = false;
  game.lastVote = { counts, tiedIds, eliminatedId };
  const undercoverAlive = game.roster.filter((player) => player.alive && player.role === "undercover").length;
  const villagersAlive = game.roster.filter((player) => player.alive && player.role === "villager").length;
  if (undercoverAlive === 0 || undercoverAlive >= villagersAlive) {
    game.winner = undercoverAlive === 0 ? "villagers" : "undercover";
    game.phase = "finished";
    const finalRoles = game.roster.filter((player) => player.role === "undercover").map((player) => player.name).join("、");
    addHistory("谁是卧底", "全队", `${game.winner === "villagers" ? "平民获胜" : "卧底获胜"} · 卧底：${finalRoles}`);
  } else {
    game.phase = "expelled";
  }
}

function renderCharades(root) {
  if (!charadesSession) charadesSession = { phase: "setup", mode: "draw", duration: 60, used: new Set(), lastActor: "" };
  const game = charadesSession;
  let content = "";
  if (game.phase === "setup") {
    content = `
      <div class="play-intro"><span class="play-emoji">🎭</span><span class="play-kicker">ACT OR DRAW</span><h3>表演或画图，让队友猜</h3><p>每轮随机选择一位提示者，自选时间；只用动作或画图，不能说出答案。</p></div>
      <div class="mini-game-panel">
        <label class="control-label" for="charades-mode">提示方式</label>
        <select id="charades-mode" class="player-select"><option value="draw" ${game.mode === "draw" ? "selected" : ""}>✏️ 在画板上画图</option><option value="act" ${game.mode === "act" ? "selected" : ""}>🎭 只用动作表演</option></select>
        <label class="control-label" for="charades-duration">每轮时间</label>
        <select id="charades-duration" class="player-select">${[30, 60, 90, 120].map((seconds) => `<option value="${seconds}" ${game.duration === seconds ? "selected" : ""}>${seconds} 秒</option>`).join("")}</select>
        <button class="button button-primary button-large" type="button" data-charades-action="start" ${state.players.length < 2 ? "disabled" : ""}>抽取本轮词语 <span>✦</span></button>
        ${state.players.length < 2 ? '<p class="round-hint">至少需要 2 位玩家，请先在设置中添加玩家。</p>' : ""}
      </div>`;
  } else if (game.phase === "ready") {
    content = `
      <div class="play-intro"><span class="play-emoji">${game.mode === "draw" ? "✏️" : "🎭"}</span><span class="play-kicker">ONLY THE CLUE-GIVER LOOKS</span><h3>请把手机交给提示者</h3><p>让 ${escapeHtml(game.actor)} 单独查看词语并记住；准备好后开始计时，屏幕会隐藏答案。</p></div>
      <div class="mini-game-panel charades-prompt"><span>本轮提示者 · ${escapeHtml(game.actor)}</span><strong>${escapeHtml(game.prompt)}</strong>
        <button class="button button-primary button-large" type="button" data-charades-action="begin">我记住了，开始计时 <span>→</span></button>
      </div>`;
  } else if (game.phase === "play" || game.phase === "done") {
    const finished = game.phase === "done";
    content = `
      <div class="play-intro"><span class="play-emoji">${game.mode === "draw" ? "✏️" : "🎭"}</span><span class="play-kicker">${game.duration} SECOND CHALLENGE</span><h3>${finished ? (game.solved ? "全队猜中！" : game.timedOut ? "时间到！" : "本轮已跳过") : "开始提示，大家来猜"}</h3>
        <p>${finished ? `答案是「${escapeHtml(game.prompt)}」${game.solved ? "，配合得真棒。" : "。再来一轮试试。"}` : `提示者：${escapeHtml(game.actor)} · 只用${game.mode === "draw" ? "画图" : "动作"}，不能说话、写字或拼出答案。`}</p></div>
      ${game.mode === "draw" ? `<div class="drawing-board-wrap"><canvas id="charades-canvas" class="charades-canvas" width="800" height="420" aria-label="你画我猜画板"></canvas><div class="drawing-tools"><span>✏️ 提示者画图，队友猜词</span><button class="button button-quiet" type="button" data-charades-action="clear">清除画板</button></div></div>` : `<div class="charades-stage" aria-hidden="true">🎬</div>`}
      <div class="charades-clock" role="timer" aria-live="polite">⏱ <strong id="charades-time">${game.secondsLeft}</strong> 秒</div>
      <div class="expedition-actions">
        ${!finished ? '<button class="button button-primary" type="button" data-charades-action="solved">队友猜中了 ✓</button><button class="button button-quiet" type="button" data-charades-action="pass">跳过本题 ↻</button>' : '<button class="button button-primary" type="button" data-charades-action="next">下一轮 ↻</button>'}
      </div>`;
  }
  root.innerHTML = content;
  if (game.mode === "draw" && (game.phase === "play" || game.phase === "done")) bindDrawingCanvas($("#charades-canvas", root));
  root.onclick = (event) => {
    const button = event.target.closest("[data-charades-action]");
    if (!button) return;
    const action = button.dataset.charadesAction;
    if (action === "start") {
      if (state.players.length < 2) return;
      charadesSession.mode = $("#charades-mode", root).value;
      charadesSession.duration = Number($("#charades-duration", root).value);
      startCharadesRound();
    } else if (action === "begin") {
      charadesSession.phase = "play";
      charadesSession.secondsLeft = charadesSession.duration;
      renderCharades(root);
      miniGameInterval = setInterval(() => {
        charadesSession.secondsLeft -= 1;
        const timer = $("#charades-time", root);
        if (timer) timer.textContent = String(charadesSession.secondsLeft);
        if (charadesSession.secondsLeft <= 0) finishCharadesRound(false, true, root);
      }, 1000);
    } else if (action === "clear") {
      const canvas = $("#charades-canvas", root);
      if (canvas) canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    } else if (action === "solved") {
      finishCharadesRound(true, false, root);
    } else if (action === "pass") {
      finishCharadesRound(false, false, root);
    } else if (action === "next") {
      charadesSession.phase = "setup";
      renderCharades(root);
    }
    playFeedback(action === "solved" ? "win" : "tap");
  };
}

function startCharadesRound() {
  const game = charadesSession;
  const available = CHARADES_PROMPTS.filter((prompt) => !game.used.has(prompt));
  if (!available.length) game.used.clear();
  game.prompt = pick(CHARADES_PROMPTS.filter((prompt) => !game.used.has(prompt))) || pick(CHARADES_PROMPTS);
  game.used.add(game.prompt);
  game.actor = pickDifferentPlayer(game.lastActor);
  game.lastActor = game.actor;
  game.phase = "ready";
  game.secondsLeft = game.duration;
  renderCharades($("#game-content"));
}

function finishCharadesRound(solved, timedOut, root) {
  if (!charadesSession || charadesSession.phase !== "play") return;
  clearInterval(miniGameInterval);
  miniGameInterval = null;
  charadesSession.phase = "done";
  charadesSession.solved = solved;
  charadesSession.timedOut = timedOut;
  addHistory("你画我猜", charadesSession.actor, `${solved ? "全队猜中" : timedOut ? "时间到" : "跳过"} · ${charadesSession.prompt}`);
  renderCharades(root);
}

function bindDrawingCanvas(canvas) {
  if (!canvas) return;
  const context = canvas.getContext("2d");
  context.lineWidth = 7;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.strokeStyle = "#e8d9b8";
  canvas.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    context.beginPath();
    context.moveTo((event.clientX - rect.left) * scaleX, (event.clientY - rect.top) * scaleY);
    canvas.setPointerCapture(event.pointerId);
    canvas.dataset.drawing = "true";
  });
  canvas.addEventListener("pointermove", (event) => {
    if (canvas.dataset.drawing !== "true") return;
    const rect = canvas.getBoundingClientRect();
    context.lineTo((event.clientX - rect.left) * canvas.width / rect.width, (event.clientY - rect.top) * canvas.height / rect.height);
    context.stroke();
  });
  canvas.addEventListener("pointerup", () => { canvas.dataset.drawing = "false"; });
  canvas.addEventListener("pointercancel", () => { canvas.dataset.drawing = "false"; });
}

function renderMission(root) {
  if (!missionSession) missionSession = { phase: "setup", used: new Set(), duration: 45 };
  const game = missionSession;
  let content = "";
  if (game.phase === "setup") {
    content = `
      <div class="play-intro"><span class="play-emoji">⚡</span><span class="play-kicker">TEAM AGAINST TIME</span><h3>全队一起完成限时任务</h3><p>抽取一张友善、低风险的团队任务卡。全队合作，在倒计时结束前尽力完成。</p></div>
      <div class="mini-game-panel">
        <label class="control-label" for="mission-duration">倒计时长度</label>
        <select id="mission-duration" class="player-select"><option value="60">60 秒 · 轻松局</option><option value="45" selected>45 秒 · 标准局</option><option value="30">30 秒 · 闪电局</option></select>
        <button class="button button-primary button-large" type="button" data-mission-action="draw">抽一张任务卡 <span>✦</span></button>
      </div>`;
  } else if (game.phase === "ready") {
    content = `
      <div class="play-intro"><span class="play-emoji">🧩</span><span class="play-kicker">TEAM MISSION</span><h3>全队准备好了吗？</h3><p>先一起读完任务内容，确认大家都愿意参与，再开始倒计时。</p></div>
      <div class="mission-card"><span>本轮团队任务</span><strong>${escapeHtml(game.task)}</strong><button class="button button-primary button-large" type="button" data-mission-action="begin">开始倒计时 · ${game.duration} 秒 <span>→</span></button></div>`;
  } else {
    const finished = game.phase === "done";
    content = `
      <div class="play-intro"><span class="play-emoji">${finished ? (game.completed ? "🎉" : "⏱️") : "⚡"}</span><span class="play-kicker">TEAM MISSION · ${finished ? "RESULT" : "TIME IS RUNNING"}</span>
        <h3>${finished ? (game.completed ? "团队任务完成！" : game.timedOut ? "倒计时结束" : "本轮已跳过") : "全队，开始行动！"}</h3>
        <p>${finished ? "要不要再抽一张，试试不同的团队挑战？" : "大家可以分工合作；不想参与的队员可以旁观。任务安全、友善最重要。"}</p></div>
      <div class="mission-card ${finished ? "is-finished" : ""}"><span>任务内容</span><strong>${escapeHtml(game.task)}</strong></div>
      <div class="charades-clock" role="timer" aria-live="polite">⏱ <strong id="mission-time">${game.secondsLeft}</strong> 秒</div>
      <div class="expedition-actions">
        ${!finished ? '<button class="button button-primary" type="button" data-mission-action="complete">我们完成了 ✓</button><button class="button button-quiet" type="button" data-mission-action="skip">放弃本轮</button>' : '<button class="button button-primary" type="button" data-mission-action="draw">再抽一张 ↻</button>'}
      </div>`;
  }
  root.innerHTML = content;
  root.onclick = (event) => {
    const button = event.target.closest("[data-mission-action]");
    if (!button) return;
    const action = button.dataset.missionAction;
    if (action === "draw") {
      game.duration = Number($("#mission-duration", root)?.value) || game.duration;
      const available = TEAM_MISSIONS.filter((task) => !game.used.has(task));
      if (!available.length) game.used.clear();
      game.task = pick(TEAM_MISSIONS.filter((task) => !game.used.has(task))) || pick(TEAM_MISSIONS);
      game.used.add(game.task);
      game.phase = "ready";
    } else if (action === "begin") {
      game.phase = "play";
      game.secondsLeft = game.duration;
      renderMission(root);
      miniGameInterval = setInterval(() => {
        game.secondsLeft -= 1;
        const timer = $("#mission-time", root);
        if (timer) timer.textContent = String(game.secondsLeft);
        if (game.secondsLeft <= 0) finishMission(false, true, root);
      }, 1000);
      return;
    } else if (action === "complete") {
      finishMission(true, false, root);
    } else if (action === "skip") {
      finishMission(false, false, root);
    }
    renderMission(root);
    playFeedback(action === "complete" ? "win" : "tap");
  };
}

function finishMission(completed, timedOut, root) {
  if (!missionSession || missionSession.phase !== "play") return;
  clearInterval(miniGameInterval);
  miniGameInterval = null;
  missionSession.phase = "done";
  missionSession.completed = completed;
  missionSession.timedOut = timedOut;
  addHistory("限时团队任务", "全队", `${completed ? "完成" : timedOut ? "时间到" : "跳过"} · ${missionSession.task}`);
  renderMission(root);
}

function renderRhythm(root) {
  if (!rhythmSession) rhythmSession = { phase: "setup", sequence: [], inputIndex: 0, round: 1 };
  const game = rhythmSession;
  const padMarkup = RHYTHM_PADS.map((pad, index) => `<button class="rhythm-pad ${pad.color}" type="button" data-rhythm-pad="${index}" aria-label="${pad.name}" ${game.phase === "input" ? "" : "disabled"}><span>${pad.icon}</span><small>${pad.name}</small></button>`).join("");
  let heading = "听节奏，记顺序，再按出来";
  let status = "四种声音会组成一段节奏；每成功一轮，序列就会变长。";
  if (game.phase === "ready") {
    heading = `第 ${game.round} 轮 · ${game.sequence.length} 拍`;
    status = "准备好后播放节奏，先听完，再按相同顺序复现。";
  } else if (game.phase === "playback") {
    heading = "仔细听，记住顺序";
    status = "序列播放中…";
  } else if (game.phase === "input") {
    heading = `第 ${game.round} 轮 · ${game.inputIndex} / ${game.sequence.length}`;
    status = "轮到全队跟着节奏依次点击。";
  } else if (game.phase === "failed") {
    heading = "节奏断了，再试一次？";
    status = `本次成功复现 ${game.round - 1} 轮；序列长到 ${game.sequence.length} 拍时出错。`;
  } else if (game.phase === "won") {
    heading = "全队记忆力满分！";
    status = "你们成功复现了 5 段逐渐变长的节奏。";
  }
  root.innerHTML = `
    <div class="play-intro"><span class="play-emoji">🎵</span><span class="play-kicker">LISTEN · REMEMBER · REPEAT</span><h3>${heading}</h3><p id="rhythm-status" role="status" aria-live="polite">${status}</p></div>
    <div class="rhythm-board">${padMarkup}</div>
    <div class="rhythm-actions">
      ${game.phase === "setup" ? '<button class="button button-primary button-large" type="button" data-rhythm-action="start">开始挑战 <span>✦</span></button>' : ""}
      ${game.phase === "ready" ? '<button class="button button-primary button-large" type="button" data-rhythm-action="play">播放节奏 <span>♫</span></button>' : ""}
      ${game.phase === "failed" || game.phase === "won" ? '<button class="button button-primary button-large" type="button" data-rhythm-action="restart">再来一局 ↻</button>' : ""}
    </div>
    <p class="round-hint">全队轮流或一起操作均可；每段最多 7 拍，失误后可以立即重新开始。</p>`;
  root.onclick = (event) => {
    const actionButton = event.target.closest("[data-rhythm-action]");
    if (actionButton) {
      if (actionButton.dataset.rhythmAction === "start" || actionButton.dataset.rhythmAction === "restart") {
        rhythmSession = { phase: "ready", sequence: Array.from({ length: 3 }, () => randomInt(RHYTHM_PADS.length)), inputIndex: 0, round: 1 };
      } else if (actionButton.dataset.rhythmAction === "play") {
        playRhythmSequence(root);
        return;
      }
      renderRhythm(root);
      playFeedback();
      return;
    }
    const pad = event.target.closest("[data-rhythm-pad]");
    if (!pad || game.phase !== "input") return;
    const index = Number(pad.dataset.rhythmPad);
    playRhythmTone(index);
    pad.classList.add("is-lit");
    miniGameTimeouts.push(setTimeout(() => pad.classList.remove("is-lit"), 180));
    if (index !== game.sequence[game.inputIndex]) {
      game.phase = "failed";
      addHistory("节奏记忆", "全队", `成功复现 ${game.round - 1} 轮，序列长度 ${game.sequence.length} 时出错`);
      renderRhythm(root);
      playFeedback();
      return;
    }
    game.inputIndex += 1;
    if (game.inputIndex === game.sequence.length) {
      if (game.sequence.length >= 7) {
        game.phase = "won";
        addHistory("节奏记忆", "全队", "成功复现 5 段逐渐变长的节奏");
        playFeedback("win");
      } else {
        game.round += 1;
        game.sequence.push(randomInt(RHYTHM_PADS.length));
        game.inputIndex = 0;
        game.phase = "ready";
        playFeedback("win");
      }
      renderRhythm(root);
      return;
    }
    $("#rhythm-status", root).textContent = `正确 ${game.inputIndex} / ${game.sequence.length} 拍，继续。`;
    const heading = $(".play-intro h3", root);
    if (heading) heading.textContent = `第 ${game.round} 轮 · ${game.inputIndex} / ${game.sequence.length}`;
  };
}

function playRhythmSequence(root) {
  const game = rhythmSession;
  clearMiniGameTimers();
  game.phase = "playback";
  game.inputIndex = 0;
  renderRhythm(root);
  game.sequence.forEach((padIndex, step) => {
    const start = step * 520;
    miniGameTimeouts.push(setTimeout(() => {
      const pad = $(`[data-rhythm-pad="${padIndex}"]`, root);
      if (pad) pad.classList.add("is-lit");
      playRhythmTone(padIndex);
    }, start));
    miniGameTimeouts.push(setTimeout(() => {
      const pad = $(`[data-rhythm-pad="${padIndex}"]`, root);
      if (pad) pad.classList.remove("is-lit");
    }, start + 220));
  });
  miniGameTimeouts.push(setTimeout(() => {
    game.phase = "input";
    renderRhythm(root);
  }, game.sequence.length * 520 + 120));
}

function playRhythmTone(index) {
  playFeedback();
  if (!state.soundEnabled) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  try {
    const context = new AudioContext();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = RHYTHM_PADS[index].frequency;
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.12, context.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.22);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.23);
    oscillator.addEventListener("ended", () => context.close(), { once: true });
  } catch {
    showToast("当前设备无法播放节奏音效，可跟随按钮的闪烁记忆顺序。");
  }
}

function expeditionIsRunning() {
  return state.expedition.status === "active" || state.expedition.status === "comeback";
}

function recordExpeditionEvent(message) {
  state.expedition.events.push(message);
  state.expedition.events = state.expedition.events.slice(-30);
}

function renderExpedition() {
  const root = $("#expedition-content");
  const expedition = state.expedition;
  const itemNames = { shield: "护盾", boost: "冲刺卡" };

  if (expedition.status === "idle") {
    root.innerHTML = `
      <section class="expedition-intro panel">
        <span class="expedition-kicker">A TEAM ADVENTURE</span>
        <h3>把今晚，玩成一场远征。</h3>
        <p>全队一起穿过六个路线节点，在岔路做选择、收集星星与道具，最后迎战三阶段守关者。闯关过程可随时跳过；团队生命耗尽时还有翻盘机会。</p>
        <div class="expedition-rules">
          <span>✦ 挑战成功：获得远征星与道具</span>
          <span>♡ 挑战失败：消耗团队生命，可用护盾抵挡</span>
          <span>↗ 每关可跳过，不强迫任何人参与</span>
        </div>
      </section>
      <div class="section-title expedition-select-title">
        <div><span class="section-index">DIFFICULTY</span><h2>选择远征难度</h2></div>
        <span class="section-hint">${state.players.length} 位玩家 · 一部手机轮流游玩</span>
      </div>
      ${state.players.length < 2 ? '<p class="expedition-notice" role="status">远征至少需要 2 位玩家，请先到设置中添加玩家。</p>' : ""}
      <div class="expedition-difficulty-grid">
        ${Object.entries(EXPEDITION_DIFFICULTIES).map(([key, mode]) => `
          <button class="expedition-difficulty ${key === "standard" ? "recommended" : ""}" type="button" data-expedition-action="start" data-difficulty="${key}" ${state.players.length < 2 ? "disabled" : ""}>
            <span>${key === "chill" ? "🌿" : key === "standard" ? "🧭" : "🔥"}</span>
            <strong>${mode.name}</strong>
            <small>团队生命 ${mode.lives} · 目标 ${mode.targetStars} 星</small>
            <small>${mode.description}</small>
            ${key === "standard" ? '<em>推荐首次体验</em>' : ""}
          </button>`).join("")}
      </div>`;
    return;
  }

  const difficulty = EXPEDITION_DIFFICULTIES[expedition.difficulty];
  if (expedition.status === "won" || expedition.status === "lost") {
    const won = expedition.status === "won";
    root.innerHTML = `
      <section class="expedition-finale panel ${won ? "is-victory" : "is-defeat"}">
        <span class="expedition-finale-icon">${won ? "🏆" : "🌙"}</span>
        <span class="expedition-kicker">EXPEDITION ${won ? "COMPLETE" : "ENDED"}</span>
        <h3>${won ? "远征成功，全队通关！" : "本次远征暂告一段落"}</h3>
        <p>${won ? "守关者被成功击败，今晚的胜利属于全队。" : "星星没有达到目标，但每一关的回忆都已留下。准备好时可以重新出发。"}</p>
        <div class="expedition-stats">
          <span><b>✦ ${expedition.stars}</b> / ${expedition.targetStars} 星</span>
          <span><b>♡ ${expedition.lives}</b> 团队生命</span>
          <span><b>${expedition.events.length}</b> 条远征事件</span>
        </div>
        <button class="button button-primary" type="button" data-expedition-action="restart">再开一场远征 <span>↻</span></button>
      </section>`;
    return;
  }

  if (expedition.status === "comeback") {
    root.innerHTML = `
      <section class="expedition-comeback panel">
        <span class="expedition-finale-icon">✨</span>
        <span class="expedition-kicker">ONE MORE CHANCE</span>
        <h3>团队能量见底，触发绝地翻盘！</h3>
        <p>没有人会被淘汰。大家可以一起说一句鼓励队友的话，或完成一个轻松的小挑战，再恢复 1 点团队生命继续闯关。</p>
        <div class="expedition-actions">
          <button class="button button-primary" type="button" data-expedition-action="comeback">全队完成翻盘 · 恢复 1 生命</button>
          <button class="button button-quiet" type="button" data-expedition-action="give-up">结束本次远征</button>
        </div>
      </section>`;
    return;
  }

  const stage = EXPEDITION_STAGES[expedition.stageIndex];
  if (!stage) {
    finishExpedition(expedition.stars >= expedition.targetStars);
    return;
  }

  const isBoss = stage.id === "boss";
  const bossPhase = isBoss ? EXPEDITION_BOSS_PHASES[expedition.bossPhase] : null;
  const challenge = bossPhase || stage;
  const inventory = expedition.inventory.length
    ? expedition.inventory.map((item) => `<span class="expedition-item">${item === "shield" ? "◈" : "✦"} ${itemNames[item] || item}</span>`).join("")
    : '<span class="expedition-item empty">暂无道具</span>';
  const routeStage = stage.id === "fork";
  const bossFinished = isBoss && expedition.bossComplete;
  const map = EXPEDITION_STAGES.map((item, index) => {
    const current = index === expedition.stageIndex;
    const complete = index < expedition.stageIndex;
    return `<div class="expedition-map-node ${current ? "current" : ""} ${complete ? "complete" : ""}" ${current ? 'aria-current="step"' : ""}>
      <span>${complete ? "✓" : item.icon}</span><small>${item.title}</small>
    </div>`;
  }).join("");
  const eventFeed = expedition.events.length
    ? `<div class="expedition-event-feed" aria-label="远征记录">${expedition.events.slice(-3).reverse().map((entry) => `<span>${escapeHtml(entry)}</span>`).join("")}</div>`
    : "";

  let challengeActions = "";
  if (routeStage) {
    challengeActions = `
      <div class="expedition-route-grid">
        <button class="expedition-route" type="button" data-expedition-action="route-safe">
          <span>🌿 安全路线</span><strong>团队补给 +1 生命</strong><small>稳稳前进，保存队伍状态</small>
        </button>
        <button class="expedition-route risk" type="button" data-expedition-action="route-risk">
          <span>🔥 冒险路线</span><strong>立刻获得 +2 星与冲刺卡</strong><small>高风险选择，为最终守关建立优势</small>
        </button>
      </div>
      <button class="button button-quiet expedition-route-skip" type="button" data-expedition-action="skip">跳过岔路事件，不扣生命</button>`;
  } else if (bossFinished) {
    const canRush = expedition.lives > 0 && !expedition.lastStandUsed;
    challengeActions = `
      <div class="expedition-boss-result">
        <strong>${expedition.stars >= expedition.targetStars ? "星星达标，守关者已被击败！" : `还差 ${expedition.targetStars - expedition.stars} 星达到通关目标。`}</strong>
        <p>远征星：${expedition.stars} / ${expedition.targetStars} · 团队生命：${expedition.lives}</p>
        <div class="expedition-actions">
          ${expedition.stars >= expedition.targetStars
            ? '<button class="button button-primary" type="button" data-expedition-action="finish-win">领取全队胜利</button>'
            : canRush
              ? '<button class="button button-primary" type="button" data-expedition-action="last-stand">消耗 1 生命发动最后冲刺 · +1 星</button>'
              : '<button class="button button-outline" type="button" data-expedition-action="finish-loss">接受本次结局</button>'}
          ${expedition.stars >= expedition.targetStars
            ? ""
            : '<button class="button button-quiet" type="button" data-expedition-action="finish-loss">前往结算</button>'}
        </div>
      </div>`;
  } else {
    challengeActions = `
      <div class="expedition-actions">
        <button class="button button-primary" type="button" data-expedition-action="${isBoss ? "boss-success" : "success"}" ${expedition.playedCurrentStage ? "" : "disabled"}>挑战成功 · 获得 1 星</button>
        ${expedition.inventory.includes("boost") && isBoss
          ? '<button class="button button-outline" type="button" data-expedition-action="boss-boost" ' + (expedition.playedCurrentStage ? "" : "disabled") + '>使用冲刺卡 · 本阶段额外 +1 星</button>'
          : ""}
        <button class="button button-outline" type="button" data-expedition-action="${isBoss ? "boss-failure" : "failure"}" ${expedition.playedCurrentStage ? "" : "disabled"}>挑战失利 · 消耗 1 生命</button>
        ${expedition.inventory.includes("shield")
          ? `<button class="button button-quiet" type="button" data-expedition-action="${isBoss ? "boss-shield" : "shield-failure"}" ${expedition.playedCurrentStage ? "" : "disabled"}>使用护盾承受失利 · 不扣生命</button>`
          : ""}
        <button class="button button-quiet" type="button" data-expedition-action="${isBoss ? "boss-skip" : "skip"}">跳过本关，不扣生命</button>
      </div>`;
  }

  const bossSubheading = isBoss && !bossFinished
    ? `<span class="expedition-boss-progress">守关阶段 ${expedition.bossPhase + 1} / ${EXPEDITION_BOSS_PHASES.length}</span>`
    : "";
  const routeLabel = expedition.route === "safe" ? "安全路线" : expedition.route === "risk" ? "冒险路线" : "";

  root.innerHTML = `
    <section class="expedition-dashboard">
      <div class="expedition-scorebar panel">
        <div class="expedition-score"><strong>♡ ${expedition.lives}<small> / ${expedition.maxLives}</small></strong><span>团队生命</span></div>
        <div class="expedition-score"><strong>✦ ${expedition.stars}<small> / ${expedition.targetStars}</small></strong><span>远征星</span></div>
        <div class="expedition-score"><strong>${expedition.stageIndex + 1}<small> / ${EXPEDITION_STAGES.length}</small></strong><span>当前关卡</span></div>
        <div class="expedition-score expedition-difficulty"><strong>${difficulty.name}</strong><span>${routeLabel || "全员同行"}</span></div>
      </div>
      <div class="expedition-map panel" aria-label="远征路线">${map}</div>
      <div class="expedition-layout">
        <section class="expedition-challenge panel">
          <div class="expedition-challenge-heading">
            <span class="expedition-challenge-icon">${bossFinished ? "🏆" : challenge.icon}</span>
            <div><span class="expedition-kicker">${isBoss ? "FINAL BOSS" : `STAGE ${expedition.stageIndex + 1}`}</span><h3>${bossFinished ? "守关结算" : challenge.title}</h3></div>
          </div>
          ${bossSubheading}
          <p>${bossFinished ? "三阶段试炼已经结束，查看团队星数并决定如何结算。" : challenge.description}</p>
          ${!routeStage && !bossFinished ? `
            <div class="expedition-linked-game">
              <span>本关关联玩法：<strong>${challenge.icon} ${challenge.game === "draw" ? "真心话和大冒险" : challenge.game === "finger" ? "幸运指尖" : challenge.game === "wheel" ? "命运转盘" : challenge.game === "dice" ? "摇骰子" : "戳气球"}</strong></span>
              <button class="button button-outline" type="button" data-expedition-game="${challenge.game}">${expedition.playedCurrentStage ? "再玩一次" : "进入玩法"} <span>↗</span></button>
            </div>
            ${!expedition.playedCurrentStage ? '<small class="expedition-hint">先游玩关联玩法，再由全队确认挑战结果。你也可以直接跳过本关。</small>' : '<small class="expedition-hint is-ready">已完成关联玩法，队伍可以结算本关。</small>'}
          ` : ""}
          ${challengeActions}
        </section>
        <aside class="expedition-sidebar">
          <section class="expedition-inventory panel"><div class="expedition-side-title"><strong>远征背包</strong><span>道具会在本场远征中保存</span></div><div class="expedition-items">${inventory}</div></section>
          <section class="expedition-roster panel"><div class="expedition-side-title"><strong>同行队员</strong><span>${state.players.length} 人 · 无人淘汰</span></div><div class="expedition-player-list">${state.players.map((name) => `<span>${escapeHtml(name)}</span>`).join("")}</div></section>
        </aside>
      </div>
      ${eventFeed}
    </section>`;
}

function startExpedition(difficultyName) {
  const difficulty = EXPEDITION_DIFFICULTIES[difficultyName];
  if (!difficulty) return;
  if (state.players.length < 2) {
    showToast("派对远征至少需要两位玩家。");
    return;
  }
  state.expedition = {
    ...defaultExpeditionState(),
    status: "active",
    difficulty: difficultyName,
    lives: difficulty.lives,
    maxLives: difficulty.lives,
    targetStars: difficulty.targetStars,
  };
  recordExpeditionEvent(`${difficulty.name}启程，${state.players.length} 位队员加入远征。`);
  saveState();
  renderExpedition();
  playFeedback();
}

function advanceExpeditionStage() {
  state.expedition.stageIndex += 1;
  state.expedition.bossPhase = 0;
  state.expedition.playedCurrentStage = false;
  state.expedition.bossComplete = false;
  saveState();
  renderExpedition();
}

function completeBossPhase() {
  const expedition = state.expedition;
  expedition.bossPhase += 1;
  expedition.playedCurrentStage = false;
  if (expedition.bossPhase >= EXPEDITION_BOSS_PHASES.length) {
    expedition.bossComplete = true;
    recordExpeditionEvent("三阶段守关挑战完成，队伍开始最终结算。");
    if (expedition.stars >= expedition.targetStars) {
      finishExpedition(true);
      return;
    }
  }
  saveState();
  renderExpedition();
}

function resolveExpeditionChallenge(outcome, useShield = false, useBoost = false) {
  const expedition = state.expedition;
  if (!expeditionIsRunning()) return;
  const stage = EXPEDITION_STAGES[expedition.stageIndex];
  if (!stage) return;
  const isBoss = stage.id === "boss";
  if (outcome !== "skip" && !expedition.playedCurrentStage) {
    showToast("请先完成本关关联玩法，或选择跳过。");
    return;
  }
  if (useShield) {
    const shieldIndex = expedition.inventory.indexOf("shield");
    if (shieldIndex < 0) return;
    expedition.inventory.splice(shieldIndex, 1);
  }
  if (useBoost) {
    const boostIndex = expedition.inventory.indexOf("boost");
    if (boostIndex < 0) return;
    expedition.inventory.splice(boostIndex, 1);
  }

  if (outcome === "success") {
    expedition.stars += 1;
    if (useBoost) expedition.stars += 1;
    if (!isBoss && stage.reward) expedition.inventory.push(stage.reward);
    recordExpeditionEvent(`${stage.title}${isBoss ? `·阶段 ${expedition.bossPhase + 1}` : ""}挑战成功，获得${useBoost ? " 2" : " 1"} 星${!isBoss && stage.reward ? `和${stage.reward === "shield" ? "护盾" : "冲刺卡"}` : ""}。`);
    playFeedback("win");
    if (isBoss) completeBossPhase();
    else advanceExpeditionStage();
    return;
  }

  if (outcome === "failure") {
    if (!useShield) expedition.lives = Math.max(0, expedition.lives - 1);
    recordExpeditionEvent(`${stage.title}挑战失利${useShield ? "，使用护盾挡下损失" : "，团队生命 -1"}。`);
    playFeedback();
    if (expedition.lives === 0) {
      expedition.status = "comeback";
      saveState();
      renderExpedition();
      return;
    }
    if (isBoss) completeBossPhase();
    else advanceExpeditionStage();
    return;
  }

  if (outcome === "skip") {
    recordExpeditionEvent(`${stage.title}被跳过，队伍保留生命继续前进。`);
    if (isBoss) completeBossPhase();
    else advanceExpeditionStage();
  }
}

function finishExpedition(won) {
  const expedition = state.expedition;
  if (expedition.status === "won" || expedition.status === "lost") return;
  expedition.status = won ? "won" : "lost";
  const summary = `${expedition.stars}/${expedition.targetStars} 星，剩余团队生命 ${expedition.lives}，难度：${EXPEDITION_DIFFICULTIES[expedition.difficulty].name}`;
  recordExpeditionEvent(won ? "全队成功击败守关者，远征通关！" : "队伍结束了本次远征，新的旅程随时可以开始。");
  addHistory("派对远征", "全队", `${won ? "远征通关" : "远征结束"} · ${summary}`);
  saveState();
  renderExpedition();
}

function launchExpeditionGame(game) {
  const expedition = state.expedition;
  if (!expeditionIsRunning()) return;
  const stage = EXPEDITION_STAGES[expedition.stageIndex];
  const phase = stage && stage.id === "boss" ? EXPEDITION_BOSS_PHASES[expedition.bossPhase] : stage;
  if (!phase || phase.game !== game) return;
  expedition.playedCurrentStage = true;
  recordExpeditionEvent(`进入${phase.title}关联玩法。`);
  saveState();
  setGame(game);
}

function handleExpeditionAction(event) {
  const button = event.target.closest("[data-expedition-action]");
  if (!button) return false;
  const action = button.dataset.expeditionAction;
  if (action === "start") {
    startExpedition(button.dataset.difficulty);
    showScreen("expedition");
    return true;
  }
  if (action === "restart") {
    state.expedition = defaultExpeditionState();
    saveState();
    renderExpedition();
    return true;
  }
  if (action === "route-safe" || action === "route-risk") {
    const expedition = state.expedition;
    if (!expeditionIsRunning() || EXPEDITION_STAGES[expedition.stageIndex].id !== "fork") return true;
    if (action === "route-safe") {
      expedition.route = "safe";
      expedition.lives = Math.min(expedition.maxLives, expedition.lives + 1);
      recordExpeditionEvent("选择安全路线，团队补给 +1 生命。");
    } else {
      expedition.route = "risk";
      expedition.stars += 2;
      expedition.inventory.push("boost");
      recordExpeditionEvent("选择冒险路线，获得 2 星和一张冲刺卡。");
    }
    playFeedback("win");
    advanceExpeditionStage();
    return true;
  }
  if (action === "comeback") {
    state.expedition.lives = 1;
    state.expedition.status = "active";
    state.expedition.playedCurrentStage = false;
    recordExpeditionEvent("全队完成翻盘挑战，恢复 1 点团队生命。");
    saveState();
    renderExpedition();
    playFeedback("win");
    return true;
  }
  if (action === "give-up" || action === "finish-loss") {
    finishExpedition(false);
    return true;
  }
  if (action === "finish-win") {
    finishExpedition(state.expedition.stars >= state.expedition.targetStars);
    return true;
  }
  if (action === "last-stand") {
    const expedition = state.expedition;
    if (!expedition.bossComplete || expedition.lives < 1 || expedition.lastStandUsed) return true;
    expedition.lastStandUsed = true;
    expedition.lives -= 1;
    expedition.stars += 1;
    recordExpeditionEvent("消耗 1 点团队生命发动最后冲刺，获得 1 星。");
    if (expedition.stars >= expedition.targetStars) finishExpedition(true);
    else {
      saveState();
      renderExpedition();
    }
    return true;
  }
  if (action === "success" || action === "boss-success") {
    resolveExpeditionChallenge("success");
    return true;
  }
  if (action === "boss-boost") {
    resolveExpeditionChallenge("success", false, true);
    return true;
  }
  if (action === "failure" || action === "boss-failure") {
    resolveExpeditionChallenge("failure");
    return true;
  }
  if (action === "shield-failure" || action === "boss-shield") {
    resolveExpeditionChallenge("failure", true);
    return true;
  }
  if (action === "skip" || action === "boss-skip") {
    resolveExpeditionChallenge("skip");
    return true;
  }
  return false;
}

function renderSettings() {
  $("#player-list").innerHTML = state.players.length
    ? state.players.map((name, index) => `<span class="player-tag">${escapeHtml(name)}<button type="button" data-remove-player="${index}" aria-label="移除 ${escapeHtml(name)}">×</button></span>`).join("")
    : '<span class="empty-note">还没有玩家，先添加一位吧。</span>';
  $("#player-list").onclick = (event) => {
    const button = event.target.closest("[data-remove-player]");
    if (!button) return;
    state.players.splice(Number(button.dataset.removePlayer), 1);
    saveState();
    renderSettings();
  };
  const customQuestions = [
    ...state.truthBank.map((text, index) => ({ type: "truth", text, index })).slice(DEFAULT_TRUTHS.length),
    ...state.dareBank.map((text, index) => ({ type: "dare", text, index })).slice(DEFAULT_DARES.length),
  ].reverse();
  $("#question-counts").innerHTML = `
    <span>💜 真心话 <b>${state.truthBank.length}</b> 题</span>
    <span>💗 大冒险 <b>${state.dareBank.length}</b> 题</span>
    <div class="custom-question-list">${customQuestions.length
      ? customQuestions.map((item) => `<div class="custom-question"><span>${item.type === "truth" ? "真心话" : "大冒险"}</span><p>${escapeHtml(item.text)}</p><button type="button" data-remove-question="${item.type}:${item.index}" aria-label="删除题目：${escapeHtml(item.text)}">删除</button></div>`).join("")
      : '<p class="empty-note">还没有自定义题目，添加后可以在这里管理。</p>'}</div>`;
  $("#question-counts").onclick = (event) => {
    const button = event.target.closest("[data-remove-question]");
    if (!button) return;
    const [type, index] = button.dataset.removeQuestion.split(":");
    const bank = type === "truth" ? state.truthBank : state.dareBank;
    bank.splice(Number(index), 1);
    state.questionBags[type] = state.questionBags[type].filter((question) => question !== button.parentElement.querySelector("p").textContent);
    saveState();
    renderSettings();
    showToast("自定义题目已删除。");
  };
}

function renderHistory() {
  const list = $("#history-list");
  list.innerHTML = state.history.length
    ? state.history.map((item) => {
      const date = new Date(item.time);
      const time = Number.isNaN(date.getTime()) ? "" : date.toLocaleString("zh-CN", { month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit" });
      return `<article class="history-item"><span class="history-kind">${escapeHtml(item.type || "游戏")}</span><div><strong>${escapeHtml(item.player || "大家")}</strong><p>${escapeHtml(item.text || "")}</p></div><time>${time}</time></article>`;
    }).join("")
    : '<div class="history-empty"><span>📖</span><strong>还没有游戏记录</strong><p>玩完第一轮之后，回忆就会保存在这里。</p></div>';
}

function renderAchievements() {
  const progress = state.achievementProgress;
  const unlockedCount = ACHIEVEMENTS.filter((item) => progress.unlocked.includes(item.id)).length;
  const collectionPercent = Math.round((unlockedCount / ACHIEVEMENTS.length) * 100);
  $("#achievements-content").innerHTML = `
    <section class="achievement-hero panel" aria-labelledby="achievement-hero-title">
      <div class="achievement-sky" aria-hidden="true">
        <span class="achievement-sun"></span><span class="achievement-mountain"></span>
        <span class="achievement-forest"></span><span class="achievement-ground"></span>
      </div>
      <div class="achievement-hero-copy">
        <span class="achievement-kicker">ADVENTURER'S LOG <i></i> TROPHY ROOM</span>
        <h3 id="achievement-hero-title">派对冒险者图鉴</h3>
        <p>把每一次欢笑与胜利，收藏成今晚的战利品。</p>
        <div class="achievement-collection">
          <div class="achievement-collection-count"><strong>${unlockedCount}</strong><span>/ ${ACHIEVEMENTS.length} 枚徽章</span></div>
          <div class="achievement-meter" role="progressbar" aria-label="成就收集进度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${collectionPercent}">
            <span style="width: ${collectionPercent}%"></span>
          </div>
          <small>${collectionPercent}% COMPLETE <span>· 进度保存在本机</span></small>
        </div>
      </div>
      <div class="achievement-hero-emblem" aria-hidden="true">🏆</div>
    </section>
    <div class="achievement-section-heading">
      <div><span class="achievement-section-mark">✦</span><h3>旅途中的成就</h3></div>
      <span>${ACHIEVEMENTS.length - unlockedCount} 枚尚待发现</span>
    </div>
    <div class="achievement-grid">
      ${ACHIEVEMENTS.map((item, index) => {
    const unlocked = progress.unlocked.includes(item.id);
    const progressText = item.progress(progress);
    const [current, target] = progressText.split("/").map((value) => Number(value.trim()));
    const percent = unlocked ? 100 : (target > 0 ? Math.min(100, Math.round((current / target) * 100)) : 0);
    return `<article class="achievement-card${unlocked ? " is-unlocked" : " is-locked"}" aria-label="${escapeHtml(item.title)}，${unlocked ? "已解锁" : `进度 ${progressText}`}">
          <div class="achievement-card-top"><span class="achievement-index">TROPHY ${String(index + 1).padStart(2, "0")}</span>
            <span class="achievement-state">${unlocked ? "✦ 已获得" : "未获得"}</span></div>
          <div class="achievement-card-main">
            <span class="achievement-icon" aria-hidden="true">${unlocked ? item.icon : "?"}</span>
            <div class="achievement-copy"><h4>${escapeHtml(item.title)}</h4><p>${escapeHtml(item.description)}</p></div>
          </div>
          <div class="achievement-card-bottom">
            <div class="achievement-progress-track" role="progressbar" aria-label="${escapeHtml(item.title)}进度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${percent}">
              <span style="width: ${percent}%"></span>
            </div>
            <span class="achievement-progress">${unlocked ? "COMPLETE" : progressText}</span>
          </div>
        </article>`;
  }).join("")}
    </div>`;
}

function showSticker(button) {
  const dock = $("#sticker-dock");
  if (dock.hidden) return;
  const burst = $("#sticker-burst");
  const sticker = button.dataset.sticker;
  const label = button.dataset.label;
  if (!sticker || !label) return;
  clearTimeout(stickerTimer);
  burst.classList.remove("is-visible");
  burst.textContent = "";
  window.requestAnimationFrame(() => {
    burst.textContent = `${sticker} ${label}！`;
    burst.classList.add("is-visible");
  });
  stickerTimer = setTimeout(() => {
    burst.classList.remove("is-visible");
    burst.textContent = "";
  }, 1600);
  const activeEffects = $$(".sticker-float");
  if (activeEffects.length >= 10) activeEffects[0].remove();
  const effect = document.createElement("span");
  effect.className = "sticker-float";
  effect.textContent = sticker;
  effect.setAttribute("aria-hidden", "true");
  const rect = button.getBoundingClientRect();
  effect.style.left = `${rect.left + rect.width / 2}px`;
  effect.style.top = `${rect.top + rect.height / 2}px`;
  effect.style.setProperty("--drift", `${Math.round(Math.random() * 120 - 60)}px`);
  effect.style.setProperty("--spin", `${Math.round(Math.random() * 55 - 27)}deg`);
  document.body.append(effect);
  effect.addEventListener("animationend", () => effect.remove(), { once: true });
  playFeedback();
}

$("#player-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = $("#player-name");
  const name = input.value.trim();
  if (!name) return;
  if (state.players.length >= 40) {
    showToast("最多添加 40 位玩家。");
    return;
  }
  if (state.players.some((player) => player.toLowerCase() === name.toLowerCase())) {
    showToast("这个名字已经在玩家名单里了。");
    return;
  }
  state.players.push(name);
  input.value = "";
  saveState();
  renderSettings();
});

$("#question-form").addEventListener("submit", (event) => {
  event.preventDefault();
  event.stopPropagation();
  const input = $("#question-text");
  const text = input.value.trim();
  if (!text) return;
  const bank = $("#question-type").value === "truth" ? state.truthBank : state.dareBank;
  if (bank.length >= 300) {
    showToast("每类题目最多保存 300 条。");
    return;
  }
  if (bank.some((question) => question.toLowerCase() === text.toLowerCase())) {
    showToast("这道题已经在题库中了。");
    return;
  }
  bank.push(text);
  input.value = "";
  saveState();
  renderSettings();
  showToast("题目已加入题库。");
});

$("#sound-toggle").addEventListener("click", () => {
  state.soundEnabled = !state.soundEnabled;
  saveState();
  showToast(state.soundEnabled ? "声音已开启。" : "声音已关闭。");
  if (state.soundEnabled) {
    playFeedback();
    startBackgroundMusic();
  } else {
    stopBackgroundMusic();
  }
});

$("#quick-start").addEventListener("click", () => {
  const games = ["wheel", "finger", "dice", "bomb", "draw", "charades", "mission"];
  const choices = games.filter((game) => game !== activeGame);
  setGame(pick(choices));
});

document.addEventListener("pointerdown", () => {
  if (state.soundEnabled) startBackgroundMusic();
}, { capture: true });
document.addEventListener("keydown", () => {
  if (state.soundEnabled) startBackgroundMusic();
}, { capture: true });

document.addEventListener("click", (event) => {
  const stickerButton = event.target.closest("[data-sticker]");
  if (stickerButton) {
    showSticker(stickerButton);
    return;
  }
  const gameButton = event.target.closest("[data-game]");
  if (gameButton) {
    setGame(gameButton.dataset.game);
    return;
  }
  const screenButton = event.target.closest("[data-screen]");
  if (screenButton) {
    showScreen(screenButton.dataset.screen);
  }
});

$("#back-home").addEventListener("click", () => showScreen("home"));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && $("#game-screen").classList.contains("active")) {
    showScreen("home");
  }
});
$("#question-form").addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.target.tagName === "SELECT") event.preventDefault();
});

function renderQuestionCountsOnLoad() {
  updateHeader();
}

renderQuestionCountsOnLoad();

const offlineIndicator = $("#offline-indicator");
let offlineReady = false;

function updateNetworkIndicator() {
  const online = navigator.onLine;
  offlineIndicator.dataset.state = online ? "online" : "offline";
  offlineIndicator.textContent = online
    ? (offlineReady ? "离线已就绪" : "离线版 PWA")
    : (offlineReady ? "已离线 · 可继续玩" : "离线缓存准备中");
}

window.addEventListener("online", updateNetworkIndicator);
window.addEventListener("offline", updateNetworkIndicator);
updateNetworkIndicator();

if ("serviceWorker" in navigator) {
  const expectedCacheName = "game-night-pwa-v31";

  function getWorkerCacheName(worker) {
    return new Promise((resolve) => {
      const channel = new MessageChannel();
      let completed = false;
      const finish = (cacheName = "") => {
        if (completed) return;
        completed = true;
        clearTimeout(timeout);
        channel.port1.close();
        resolve(cacheName);
      };
      const timeout = setTimeout(() => finish(), 3000);
      channel.port1.onmessage = (event) => {
        const cacheName = typeof event.data?.cacheName === "string" ? event.data.cacheName : "";
        finish(cacheName);
      };
      try {
        worker.postMessage({ type: "GET_CACHE_NAME" }, [channel.port2]);
      } catch {
        finish();
      }
    });
  }

  function waitForCurrentWorker(registration) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error("Service Worker 更新超时，请刷新页面重试。")), 15000);
      let settled = false;
      const finish = (error) => {
        if (settled) return;
        settled = true;
        clearTimeout(timeout);
        registration.removeEventListener("updatefound", inspect);
        if (error) reject(error);
        else resolve();
      };
      const inspectWorker = async (worker) => {
        if (!worker || settled) return;
        if (worker.state === "redundant") {
          if (registration.active &&
              await getWorkerCacheName(registration.active) === expectedCacheName) {
            finish();
          } else {
            finish(new Error("新版离线缓存未能启用。"));
          }
          return;
        }
        if (worker.state === "activated") {
          if (await getWorkerCacheName(worker) === expectedCacheName) finish();
          return;
        }
        worker.addEventListener("statechange", () => inspectWorker(worker), { once: true });
      };
      const inspect = () => {
        inspectWorker(registration.installing || registration.waiting || registration.active);
      };
      registration.addEventListener("updatefound", inspect);
      inspect();
      registration.update().catch(finish);
    });
  }

  navigator.serviceWorker.register("./service-worker.js", { updateViaCache: "none" })
    .then(async (registration) => {
      const activeCacheName = registration.active
        ? await getWorkerCacheName(registration.active)
        : "";
      if (activeCacheName !== expectedCacheName) await waitForCurrentWorker(registration);
      return navigator.serviceWorker.ready;
    })
    .then(() => {
      offlineReady = true;
      updateNetworkIndicator();
      offlineIndicator.textContent = "离线可玩";
    })
    .catch((error) => {
      showToast(`离线缓存未能启用：${error.message}`);
    });
} else {
  offlineIndicator.textContent = "本机游玩";
}

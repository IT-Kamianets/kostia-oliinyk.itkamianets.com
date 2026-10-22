/**
 * ===================================================================
 * PORTFOLIO & RESUME INTERACTIVE SCRIPT
 * Author: Kostiantyn Oliinyk (Костянтин Олійник)
 * Features:
 *   - Bilingual i18n Engine (EN / UK) with instant reactive updates
 *   - Dark / Light Theme Engine with localStorage & OS sync
 *   - Interactive Playable Minesweeper Mini-Game (Flood Fill & Safe First Click)
 *   - Print-ready CV trigger
 *   - Copy to Clipboard & Toast feedback
 *   - Responsive Mobile Navigation
 * ===================================================================
 */

// --- BILINGUAL TRANSLATION DICTIONARY ---
const translations = {
  uk: {
    // Meta & Nav
    siteTitle: "Костянтин Олійник | Резюме & Портфоліо",
    navAbout: "Про мене",
    navPhilosophy: "Філософія",
    navSkills: "Навички",
    navProjects: "Проєкти",
    navEducation: "Освіта",
    navContact: "Контакти",
    langToggleText: "УКР",
    themeToggleText: "Тема",

    // Hero Section
    heroStatus: "Відкритий до проєктів та кар'єрних можливостей",
    heroGreeting: "Привіт, я",
    heroName: "Костянтин Олійник",
    heroRole: "Студент комп'ютерних наук • Junior Software Developer",
    heroDesc: "Розробник, якого драйвить запуск складних алгоритмів з першого разу та створення охайних, інтуїтивно зрозумілих інтерфейсів. Проєктую чистий та надійний код зі старту.",
    heroBadge1: "🎓 КПНУ ім. Івана Огієнка",
    heroBadge2: "💻 Python, C++, SQL",
    heroBadge3: "🛠️ Clean Code & Architecture",
    heroBadge4: "🎣 Спортивна риболовля",
    btnProjects: "Переглянути проєкти",
    btnDownloadCV: "Завантажити CV (PDF)",
    btnContact: "Зв'язатися зі мною",
    codeComment1: "// Інженерні пріоритети",
    codeComment2: "// Перевірка готовності системи",
    statsHighlightValue: "Чистий код & UX",
    statsHighlightLabel: "Ключовий фокус розробки",

    // Philosophy Section
    philosophyBadge: "Підхід & Принципи",
    philosophyTitle: "Як я мислю та створюю рішення",
    philosophySubtitle: "Мої відповіді на виклики програмування: від структури коду до реального користувацького досвіду.",
    
    philDriveTitle: "Драйв від алгоритмів та результату",
    philDriveDesc: "Найбільше задоволення я отримую, коли з першого разу запускається складний алгоритм, і коли бачу готовий, працюючий та естетичний інтерфейс.",
    philDriveQuote: "«Баланс між потужною внутрішньою логікою та бездоганним фасадом.»",

    philLearnTitle: "Дослідження та документація",
    philLearnDesc: "Мій шлях у нових технологіях: спочатку читаю офіційну документацію, розбираю туторіали і лише потім переходжу до усвідомленого написання коду.",
    philLearnQuote: "«Розуміння архітектури інструменту перед його використанням.»",

    philArchTitle: "Чиста структура з самого старту",
    philArchDesc: "Прагну одразу проєктувати правильну структуру та чистий код, а при появі нових нюансів — системно та гнучко його вдосконалювати.",
    philArchQuote: "«Краще спроєктувати надійно з першого дня, ніж постійно гасити пожежі.»",

    philUxTitle: "Зручність та охайність для людей",
    philUxDesc: "Для мене надзвичайно важлива зручність і охайність продукту: адже одне з головних завдань розробника — зробити досвід користувача комфортним.",
    philUxQuote: "«Корисна програма має бути простою, охайною та приємною у взаємодії.»",

    philHobbyTitle: "Риболовля: перезавантаження & терпіння",
    philHobbyDesc: "Моє хобі поза кодом — риболовля. Вона допомагає перезавантажити думки, виховує витримку, концентрацію та дарує заряд позитивних емоцій.",
    philHobbyQuote: "«Вміння спостерігати, чекати слушного моменту та миттєво реагувати.»",

    // Skills Section
    skillsBadge: "Технічний стек",
    skillsTitle: "Мови, інструменти та середовища",
    skillsSubtitle: "Стек технологій, з якими я працюю під час навчання в університеті та розробки власних рішень.",
    
    skillCatLanguages: "Мови програмування",
    skillCatTools: "Середовища розробки & БД",
    skillCatConcepts: "Інженерні концепції",

    skillPythonDesc: "Алгоритми, структури даних, скрипти автоматизації",
    skillCppDesc: "Об'єктно-орієнтоване програмування, робота з пам'яттю",
    skillSqlDesc: "Реляційні БД, запити, проєктування схем, нормалізація",
    
    skillVsCodeDesc: "Основний редактор для щоденної розробки та скриптів",
    skillRiderDesc: "Потужна IDE для проєктування надійної архітектури",
    skillClionDesc: "Професійне середовище для розробки на C/C++",
    skillPhpMyAdminDesc: "Адміністрування баз даних, тестування запитів",

    skillCleanCodeDesc: "Читабельність, модульність, SOLID принципи",
    skillAlgoDesc: "Рекурсія, оптимізація складності, Flood Fill",
    skillHybridDesc: "Кросплатформний підхід, реактивні інтерфейси",

    // Projects Section
    projectsBadge: "Портфоліо робіт",
    projectsTitle: "Вибрані проєкти",
    projectsSubtitle: "Курсові та практичні роботи, де реалізовано алгоритмічну логіку та системний дизайн.",
    
    proj1Badge: "Найкраща курсова робота",
    proj1Title: "Гра «Сапер» (Classic Minesweeper)",
    proj1Desc: "Повна реалізація класичної логічної гри «Сапер». Особлива увага приділена чистоті коду та алгоритмічній надійності.",
    proj1Feat1: "Рекурсивний алгоритм відкриття пустих суміжних клітинок (Flood Fill)",
    proj1Feat2: "Генерація мінного поля із гарантією безпечного першого кліку",
    proj1Feat3: "Підрахунок сусідніх мін, система прапорців 🚩 та таймер",
    btnPlayDemo: "Зіграти в Сапера",

    proj2Badge: "Гібридні мобільні додатки",
    proj2Title: "Мобільний додаток для змагань з риболовного спорту",
    proj2Desc: "Спеціалізована платформа для організації та суддівства турнірів зі спортивної риболовлі, що поєднує моє хобі та мобільну розробку.",
    proj2Feat1: "Створення окремих кімнат змагань та жива таблиця лідерів",
    proj2Feat2: "Фотопідтвердження улову на фоні лінійки (довжина) або ваг (вага)",
    proj2Feat3: "Суддівська перевірка спірних моментів та система дискваліфікації за порушення",
    proj2Feat4: "Розподіл ролей у системі: Організатор, Суддя, Учасник",
    btnViewDetails: "Деталі архітектури",

    proj3Badge: "Бази даних & SQL",
    proj3Title: "Система управління базою даних (phpMyAdmin / SQL)",
    proj3Desc: "Проєктування та розгортання реляційної структури бази даних для обліку з нормалізацією до 3НФ.",
    proj3Feat1: "Проєктування схеми даних, зв'язки один-до-багатьох та багато-до-багатьох",
    proj3Feat2: "Складні аналітичні SQL-запити з об'єднаннями (JOIN, GROUP BY, HAVING)",
    proj3Feat3: "Індексація для оптимізації швидкодії та адміністрування через phpMyAdmin",

    // Education Section
    educationBadge: "Академічний шлях",
    educationTitle: "Освіта & Кваліфікація",
    educationSubtitle: "Фундаментальна підготовка в галузі комп'ютерних наук.",
    eduPeriod: "2024 — теперішній час",
    eduUni: "Кам'янець-Подільський національний університет імені Івана Огієнка (КПНУ)",
    eduDegree: "Бакалавр, спеціальність 122 «Комп'ютерні науки»",
    eduDesc: "Поглиблене вивчення алгоритмів, структур даних, об'єктно-орієнтованого програмування, гібридних мобільних додатків, реляційних баз даних та системного проєктування програмного забезпечення.",

    // Contact Section
    contactBadge: "Контакти",
    contactTitle: "Давайте створимо щось чудове разом",
    contactSubtitle: "Завжди відкритий до обговорення цікавих ідей, співпраці та навчальних проєктів.",
    contactEmailLabel: "Університетська пошта:",
    contactLocationLabel: "Місто & Локація:",
    contactLocationVal: "Кам'янець-Подільський, Україна",
    contactInstLabel: "Навчальний заклад:",
    contactInstVal: "КПНУ ім. Івана Огієнка (Комп'ютерні науки)",
    formNameLabel: "Ваше ім'я",
    formNamePlaceholder: "Олександр / Анна",
    formEmailLabel: "Ваш Email",
    formEmailPlaceholder: "name@example.com",
    formMsgLabel: "Ваше повідомлення",
    formMsgPlaceholder: "Привіт! Зацікавив твій проєкт...",
    btnSendMsg: "Надіслати повідомлення",
    toastCopied: "Email скопійовано в буфер обміну!",
    toastSent: "Дякую за повідомлення! Незабаром відповім.",

    // Footer
    footerRights: "Всі права захищено.",
    footerBackToTop: "Вгору ↑",

    // 404 Page
    pageNotFoundBadge: "Помилка 404",
    pageNotFoundTitle: "Сторінку не знайдено",
    pageNotFoundDesc: "Схоже, цей маршрут закинув вудку не туди. Сторінки не існує, або вона була переміщена. Перевірте адресу або поверніться на головну.",
    btnBackHome: "← Повернутися на головну",

    // Minesweeper Modal
    msModalTitle: "Гра «Сапер» (Інтерактивне демо)",
    msRemainingMines: "Міни:",
    msTimer: "Час:",
    msRestart: "Нова гра",
    msWin: "🎉 Вітаємо! Ви перемогли!",
    msLose: "💥 Бум! Спробуйте ще раз."
  },

  en: {
    // Meta & Nav
    siteTitle: "Kostiantyn Oliinyk | Resume & Portfolio",
    navAbout: "About",
    navPhilosophy: "Philosophy",
    navSkills: "Skills",
    navProjects: "Projects",
    navEducation: "Education",
    navContact: "Contact",
    langToggleText: "ENG",
    themeToggleText: "Theme",

    // Hero Section
    heroStatus: "Open to new projects & career opportunities",
    heroGreeting: "Hi, I am",
    heroName: "Kostiantyn Oliinyk",
    heroRole: "Computer Science Student • Junior Software Developer",
    heroDesc: "A developer driven by getting complex algorithms running flawlessly on the first try and building clean, user-friendly interfaces. Passionate about solid architecture and readable code.",
    heroBadge1: "🎓 KPNU (Ivan Ohiienko Nat. Univ.)",
    heroBadge2: "💻 Python, C++, SQL",
    heroBadge3: "🛠️ Clean Code & Architecture",
    heroBadge4: "🎣 Sport Fishing Enthusiast",
    btnProjects: "View Projects",
    btnDownloadCV: "Download CV (PDF)",
    btnContact: "Get In Touch",
    codeComment1: "// Engineering Priorities",
    codeComment2: "// Verify system reliability",
    statsHighlightValue: "Clean Code & UX",
    statsHighlightLabel: "Core Engineering Focus",

    // Philosophy Section
    philosophyBadge: "Mindset & Principles",
    philosophyTitle: "How I Think & Build Solutions",
    philosophySubtitle: "My authentic answers to core programming challenges: from structure to real user experience.",
    
    philDriveTitle: "Thrilled by Algorithms & Polished UI",
    philDriveDesc: "My greatest satisfaction comes when a complex algorithm runs successfully on the very first try, and when seeing a fully operational, beautiful interface.",
    philDriveQuote: "«Balancing robust internal mechanics with an elegant external interface.»",

    philLearnTitle: "Documentation-First Learning",
    philLearnDesc: "When mastering a new technology, I study the official documentation, analyze video tutorials, and only then write structured, purposeful code.",
    philLearnQuote: "«Understand the core concepts thoroughly before typing the first line.»",

    philArchTitle: "Clean Architecture from Day One",
    philArchDesc: "I aim to architect an optimal structure and clean code right at the start, refining and evolving it methodically as practical nuances surface.",
    philArchQuote: "«Architecting thoughtfully on day one beats firefighting tomorrow.»",

    philUxTitle: "Neatness & User-Centric Design",
    philUxDesc: "Neatness and ease of use are critical for me: a software system's ultimate job is to deliver comfort and frictionless utility to the user.",
    philUxQuote: "«Useful software must be intuitive, neat, and enjoyable to interact with.»",

    philHobbyTitle: "Fishing: Reboot, Patience & Focus",
    philHobbyDesc: "Outside of code, my passion is fishing. It helps me clear the mind, develops patience, sharpens focus, and brings a surge of positive energy.",
    philHobbyQuote: "«The ability to observe calmly, wait for the right moment, and act decisively.»",

    // Skills Section
    skillsBadge: "Tech Stack",
    skillsTitle: "Languages, Tools & Environments",
    skillsSubtitle: "Technologies I actively use in university coursework and personal software projects.",
    
    skillCatLanguages: "Programming Languages",
    skillCatTools: "IDEs & Database Tools",
    skillCatConcepts: "Engineering Practices",

    skillPythonDesc: "Algorithms, data structures, automation scripting",
    skillCppDesc: "Object-oriented programming, memory management, efficiency",
    skillSqlDesc: "Relational DBs, complex queries, schema normalization",
    
    skillVsCodeDesc: "Primary code editor for fast scripting and full projects",
    skillRiderDesc: "JetBrains IDE for structured, robust development",
    skillClionDesc: "Professional C/C++ development environment",
    skillPhpMyAdminDesc: "Database administration, querying, schema design",

    skillCleanCodeDesc: "Readability, modular design, SOLID principles",
    skillAlgoDesc: "Recursion, algorithmic complexity, Flood Fill",
    skillHybridDesc: "Cross-platform mobile thinking, reactive UI",

    // Projects Section
    projectsBadge: "Featured Work",
    projectsTitle: "Showcase Projects",
    projectsSubtitle: "Selected coursework and practical projects highlighting algorithmic design and system thinking.",
    
    proj1Badge: "Top Coursework Project",
    proj1Title: "Classic 'Minesweeper' Game",
    proj1Desc: "A complete implementation of the classic Minesweeper puzzle game with a strong emphasis on clean code and robust algorithmic structure.",
    proj1Feat1: "Recursive Flood-Fill algorithm for uncovering empty contiguous areas",
    proj1Feat2: "Guaranteed safe first-click mine distribution logic",
    proj1Feat3: "Neighbor mine counter, flag placement system 🚩, and timer",
    btnPlayDemo: "Play Minesweeper",

    proj2Badge: "Hybrid Mobile Applications",
    proj2Title: "Sport Fishing Tournament Mobile App",
    proj2Desc: "A dedicated mobile platform for organizing and refereeing competitive sport angling events, combining personal passion with mobile development.",
    proj2Feat1: "Dedicated competition rooms with real-time scoreboards",
    proj2Feat2: "Catch photo verification against a measuring ruler (length) or scale (weight)",
    proj2Feat3: "Referee validation workflows & automated disqualification rules",
    proj2Feat4: "Role-Based Access Control: Tournament Organizer, Judge, Competitor",
    btnViewDetails: "View Architecture",

    proj3Badge: "Databases & SQL",
    proj3Title: "Relational Database Management System",
    proj3Desc: "Schema design, relational normalization up to 3NF, and complex query engineering tested in phpMyAdmin.",
    proj3Feat1: "Normalized relational schema with primary and foreign key constraints",
    proj3Feat2: "Complex analytical queries utilizing multi-table JOINs and aggregations",
    proj3Feat3: "Index optimization and visual database administration via phpMyAdmin",

    // Education Section
    educationBadge: "Academic Journey",
    educationTitle: "Education & Qualifications",
    educationSubtitle: "Foundational higher education in Computer Science.",
    eduPeriod: "2024 — Present",
    eduUni: "Kamianets-Podilskyi Ivan Ohiienko National University (KPNU)",
    eduDegree: "Bachelor's Degree in Computer Science (Specialty 122)",
    eduDesc: "Intensive coursework in algorithms, data structures, object-oriented programming, hybrid mobile applications, relational databases, and software engineering principles.",

    // Contact Section
    contactBadge: "Get In Touch",
    contactTitle: "Let's Build Something Great",
    contactSubtitle: "Open to internships, junior developer roles, and collaborative software projects.",
    contactEmailLabel: "University Email:",
    contactLocationLabel: "Location:",
    contactLocationVal: "Kamianets-Podilskyi, Ukraine",
    contactInstLabel: "Academic Institution:",
    contactInstVal: "KPNU (Computer Science Dept.)",
    formNameLabel: "Your Name",
    formNamePlaceholder: "Jane Doe",
    formEmailLabel: "Your Email",
    formEmailPlaceholder: "name@example.com",
    formMsgLabel: "Your Message",
    formMsgPlaceholder: "Hello Kostiantyn, I saw your portfolio...",
    btnSendMsg: "Send Message",
    toastCopied: "Email copied to clipboard!",
    toastSent: "Thank you for reaching out! I will reply shortly.",

    // Footer
    footerRights: "All rights reserved.",
    footerBackToTop: "Back to top ↑",

    // 404 Page
    pageNotFoundBadge: "Error 404",
    pageNotFoundTitle: "Page Not Found",
    pageNotFoundDesc: "Looks like this route cast its line into empty waters. The page may have been moved or never existed. Check the URL or head back home.",
    btnBackHome: "← Back to Home",

    // Minesweeper Modal
    msModalTitle: "Classic Minesweeper (Interactive Demo)",
    msRemainingMines: "Mines:",
    msTimer: "Time:",
    msRestart: "New Game",
    msWin: "🎉 Congratulations! You won!",
    msLose: "💥 Boom! Game Over. Try again."
  }
};

// --- STATE MANAGEMENT ---
let currentLang = localStorage.getItem('user_lang') || 'uk';
let currentTheme = localStorage.getItem('user_theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

// --- I18N UPDATER FUNCTION ---
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('user_lang', lang);
  document.documentElement.lang = lang;

  // Update text for all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // Update Page Title
  document.title = translations[lang].siteTitle;

  // Update Language Button Indicator
  const langLabel = document.getElementById('lang-label');
  const langFlag = document.getElementById('lang-flag');
  if (langLabel && langFlag) {
    if (lang === 'uk') {
      langLabel.textContent = 'УКР';
      langFlag.textContent = '🇺🇦';
    } else {
      langLabel.textContent = 'ENG';
      langFlag.textContent = '🇬🇧';
    }
  }

  // Update active status in modal game if present
  updateGameStatusText();
}

// --- THEME ENGINE ---
function setTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('user_theme', theme);
  document.documentElement.setAttribute('data-theme', theme);

  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
  }
}

// --- TOAST NOTIFICATION ---
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// --- COPY TO CLIPBOARD ---
function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(translations[currentLang].toastCopied);
    }).catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const input = document.createElement('input');
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
  showToast(translations[currentLang].toastCopied);
}

// --- MINESWEEPER LOGIC (Playable Interactive Demo) ---
const MS_ROWS = 8;
const MS_COLS = 8;
const MS_MINES = 10;

let msGrid = [];
let msRevealedCount = 0;
let msFlagsCount = 0;
let msGameOver = false;
let msGameWon = false;
let msFirstClick = true;
let msTimerInterval = null;
let msSeconds = 0;

function initMinesweeper() {
  clearInterval(msTimerInterval);
  msSeconds = 0;
  msRevealedCount = 0;
  msFlagsCount = 0;
  msGameOver = false;
  msGameWon = false;
  msFirstClick = true;

  const timerEl = document.getElementById('ms-timer');
  const minesEl = document.getElementById('ms-mines-count');
  const msgEl = document.getElementById('ms-message');
  const faceEl = document.getElementById('ms-reset-face');

  if (timerEl) timerEl.textContent = '000';
  if (minesEl) minesEl.textContent = String(MS_MINES).padStart(2, '0');
  if (msgEl) msgEl.textContent = '';
  if (faceEl) faceEl.textContent = '😊';

  // Build internal 2D grid
  msGrid = [];
  for (let r = 0; r < MS_ROWS; r++) {
    const row = [];
    for (let c = 0; c < MS_COLS; c++) {
      row.push({
        r,
        c,
        isMine: false,
        isRevealed: false,
        isFlagged: false,
        neighborCount: 0
      });
    }
    msGrid.push(row);
  }

  renderMinesweeperBoard();
}

function renderMinesweeperBoard() {
  const board = document.getElementById('ms-board');
  if (!board) return;
  board.innerHTML = '';

  for (let r = 0; r < MS_ROWS; r++) {
    for (let c = 0; c < MS_COLS; c++) {
      const cellData = msGrid[r][c];
      const cellBtn = document.createElement('div');
      cellBtn.className = 'ms-cell';
      cellBtn.dataset.row = r;
      cellBtn.dataset.col = c;

      if (cellData.isRevealed) {
        cellBtn.classList.add('revealed');
        if (cellData.isMine) {
          cellBtn.classList.add('mine');
          cellBtn.textContent = '💣';
        } else if (cellData.neighborCount > 0) {
          cellBtn.textContent = cellData.neighborCount;
          cellBtn.dataset.count = cellData.neighborCount;
        }
      } else if (cellData.isFlagged) {
        cellBtn.textContent = '🚩';
      }

      // Event handlers
      cellBtn.addEventListener('click', () => handleCellClick(r, c));
      cellBtn.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        handleCellRightClick(r, c);
      });

      board.appendChild(cellBtn);
    }
  }
}

function startTimer() {
  msTimerInterval = setInterval(() => {
    msSeconds++;
    const timerEl = document.getElementById('ms-timer');
    if (timerEl) timerEl.textContent = String(msSeconds).padStart(3, '0');
  }, 1000);
}

function placeMines(safeRow, safeCol) {
  let placed = 0;
  while (placed < MS_MINES) {
    const r = Math.floor(Math.random() * MS_ROWS);
    const c = Math.floor(Math.random() * MS_COLS);

    // Keep initial click and immediate neighbors safe for clean UX
    const isAdjacentToSafe = Math.abs(r - safeRow) <= 1 && Math.abs(c - safeCol) <= 1;

    if (!msGrid[r][c].isMine && !isAdjacentToSafe) {
      msGrid[r][c].isMine = true;
      placed++;
    }
  }

  // Calculate neighbor counts
  for (let r = 0; r < MS_ROWS; r++) {
    for (let c = 0; c < MS_COLS; c++) {
      if (!msGrid[r][c].isMine) {
        let count = 0;
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr >= 0 && nr < MS_ROWS && nc >= 0 && nc < MS_COLS) {
              if (msGrid[nr][nc].isMine) count++;
            }
          }
        }
        msGrid[r][c].neighborCount = count;
      }
    }
  }
}

function handleCellClick(r, c) {
  if (msGameOver || msGameWon) return;
  const cell = msGrid[r][c];
  if (cell.isRevealed || cell.isFlagged) return;

  if (msFirstClick) {
    msFirstClick = false;
    placeMines(r, c);
    startTimer();
  }

  if (cell.isMine) {
    // Mine clicked! Game Over
    endMinesweeper(false);
    return;
  }

  revealCell(r, c);
  checkWinCondition();
  renderMinesweeperBoard();
}

function handleCellRightClick(r, c) {
  if (msGameOver || msGameWon || msFirstClick) return;
  const cell = msGrid[r][c];
  if (cell.isRevealed) return;

  cell.isFlagged = !cell.isFlagged;
  msFlagsCount += cell.isFlagged ? 1 : -1;

  const minesEl = document.getElementById('ms-mines-count');
  if (minesEl) {
    const remaining = Math.max(0, MS_MINES - msFlagsCount);
    minesEl.textContent = String(remaining).padStart(2, '0');
  }

  renderMinesweeperBoard();
}

// Algorithmic Flood-Fill for zero-neighbor cells (demonstrating CS concepts)
function revealCell(r, c) {
  if (r < 0 || r >= MS_ROWS || c < 0 || c >= MS_COLS) return;
  const cell = msGrid[r][c];
  if (cell.isRevealed || cell.isFlagged || cell.isMine) return;

  cell.isRevealed = true;
  msRevealedCount++;

  if (cell.neighborCount === 0) {
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (dr !== 0 || dc !== 0) {
          revealCell(r + dr, c + dc);
        }
      }
    }
  }
}

function checkWinCondition() {
  const nonMineTotal = (MS_ROWS * MS_COLS) - MS_MINES;
  if (msRevealedCount >= nonMineTotal) {
    endMinesweeper(true);
  }
}

function endMinesweeper(won) {
  clearInterval(msTimerInterval);
  msGameOver = !won;
  msGameWon = won;

  const faceEl = document.getElementById('ms-reset-face');
  const msgEl = document.getElementById('ms-message');

  // Reveal all mines
  for (let r = 0; r < MS_ROWS; r++) {
    for (let c = 0; c < MS_COLS; c++) {
      if (msGrid[r][c].isMine) {
        msGrid[r][c].isRevealed = true;
      }
    }
  }

  if (won) {
    if (faceEl) faceEl.textContent = '😎';
    if (msgEl) {
      msgEl.textContent = translations[currentLang].msWin;
      msgEl.style.color = 'var(--accent-tertiary)';
    }
  } else {
    if (faceEl) faceEl.textContent = '😵';
    if (msgEl) {
      msgEl.textContent = translations[currentLang].msLose;
      msgEl.style.color = '#ef4444';
    }
  }
  renderMinesweeperBoard();
}

function updateGameStatusText() {
  const msgEl = document.getElementById('ms-message');
  if (!msgEl) return;
  if (msGameWon) {
    msgEl.textContent = translations[currentLang].msWin;
  } else if (msGameOver) {
    msgEl.textContent = translations[currentLang].msLose;
  }
}

// --- DOM INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  // Apply saved theme & language
  setTheme(currentTheme);
  setLanguage(currentLang);

  // Setup Language Switcher Button
  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'uk' ? 'en' : 'uk';
      setLanguage(nextLang);
    });
  }

  // Setup Theme Switcher Button
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
      setTheme(nextTheme);
    });
  }

  // Mobile menu drawer
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      mobileToggle.textContent = mobileNav.classList.contains('open') ? '✕' : '☰';
    });

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        mobileToggle.textContent = '☰';
      });
    });
  }

  // Email Copy button
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      copyToClipboard('kn1b24.oliinyk@kpnu.edu.ua');
    });
  }

  // Print CV button
  const printBtns = document.querySelectorAll('.trigger-print-cv');
  printBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.print();
    });
  });

  // Modal Minesweeper Open / Close
  const modal = document.getElementById('minesweeper-modal');
  const openModalBtn = document.getElementById('btn-open-minesweeper');
  const closeModalBtn = document.getElementById('btn-close-ms-modal');
  const resetGameBtn = document.getElementById('ms-reset-btn');

  if (openModalBtn && modal) {
    openModalBtn.addEventListener('click', () => {
      modal.classList.add('active');
      initMinesweeper();
    });
  }

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      clearInterval(msTimerInterval);
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        clearInterval(msTimerInterval);
      }
    });
  }

  if (resetGameBtn) {
    resetGameBtn.addEventListener('click', () => {
      initMinesweeper();
    });
  }

  // Contact form submission mockup
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast(translations[currentLang].toastSent);
      contactForm.reset();
    });
  }

  // Active navigation highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);
      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });
  });
});

/* ============================================================
   Портфолио — работы, фильтр, лента превью и просмотр страницы.

   Чтобы добавить работу:
     1. положите три картинки в assets/shots/
        <id>-hero.jpg  (первый экран, 1200×750)
        <id>-full.jpg  (вся страница одной картинкой, ширина 1000)
        <id>-phone.jpg (телефонный вид, 390×844)
     2. допишите объект в массив WORKS ниже.
   Порядок в массиве = порядок на странице и номера кадров.
   ============================================================ */

const WORKS = [
  {
    id: 'talay-dao',
    name: 'Талé Дао',
    field: 'База отдыха на побережье Краби, Таиланд',
    kind: 'landing',
    accent: '#0B4A7A',
    idea: 'Море занимает весь экран, бронь — в два касания',
    desc: 'Лендинг для базы отдыха: 26 вилл на закрытом пляже, цены, галерея и форма брони. Фотографии во весь экран, спокойное появление блоков при прокрутке, отдельная вёрстка под телефон — с него приходит большая часть гостей.',
    bullets: ['Форма брони с выбором дат', 'Галерея вилл и цены сезона', 'Английская и русская версия текстов'],
    tags: ['HTML', 'CSS', 'JavaScript', 'адаптив'],
    live: 'https://talay-dao.onrender.com',
  },
  {
    id: 'kinotseh',
    name: 'Киноцех личности',
    field: 'Детская школа кино, Краснодар',
    kind: 'landing',
    accent: '#6F9A05',
    idea: 'Страница собрана как монтажный стол',
    desc: 'Редизайн сайта киношколы. Вместо обычной шапки — хлопушка с данными о дубле, вместо карточек — кадровые окна, по краям страницы идёт перфорация плёнки. Метафора работает на навигацию, а не просто украшает.',
    bullets: ['Программы, наставники, отзывы', 'Заявка на пробное занятие уходит на почту', 'Неоновая палитра выведена из прежнего фирменного стиля'],
    tags: ['HTML', 'CSS', 'JavaScript', 'анимация'],
    live: 'https://kinotseh-lichnosti.onrender.com',
  },
  {
    id: 'sova',
    name: 'СОВА',
    field: 'Салон сантехники: душевые кабины и ограждения',
    kind: 'shop',
    accent: '#2E7D6B',
    idea: 'Чертёж вместо фотографии товара',
    desc: 'Каталог на 2200 позиций четырёх поставщиков. Товар показан техническим чертежом с размерами — покупатель сразу примеряет кабину к своей нише, а не разглядывает похожие фотографии стекла.',
    bullets: ['Пять страниц: каталог, товар, сервис, о компании, политика', 'Подбор по размерам ниши и типу двери', 'Прайсы поставщиков загружаются прямо в браузере, без админки'],
    tags: ['HTML', 'CSS', 'JavaScript', 'разбор прайсов'],
  },
  {
    id: 'tirazh',
    name: 'ТИРАЖ',
    field: 'SMM-студия полного цикла',
    kind: 'card',
    accent: '#1B24B8',
    idea: 'Свёрстано как печать в две краски',
    desc: 'Визитка студии в эстетике ризографа: вся палитра — два цвета и их наложение, слои чуть смещены, бумага зернистая. Появление блоков привязано к прокрутке, так что страница «печатается» по мере чтения.',
    bullets: ['Услуги, тарифы и кейсы с цифрами', 'Дуотон собран на CSS, без картинок-подложек', 'Форма заявки с выбором услуги'],
    tags: ['HTML', 'CSS', 'JavaScript', 'анимация'],
    live: 'https://tirazh-smm.onrender.com',
  },
  {
    id: 'puls',
    name: 'ПУЛЬС',
    field: 'Круглосуточная ветклиника, Краснодар',
    kind: 'card',
    accent: '#C4523C',
    idea: 'Через всю страницу идёт линия кардиограммы',
    desc: 'Сайт ветклиники, где метафора сердцебиения держит всю страницу: живая линия ЭКГ нарисована на canvas и разделяет разделы. Тон спокойный — владелец больного животного не должен продираться через украшения.',
    bullets: ['Приём, хирургия, УЗИ, стационар и вызов врача на дом', 'Цены и врачи с фотографиями', 'Телефон дежурной смены виден на любом экране'],
    tags: ['HTML', 'CSS', 'JavaScript', 'canvas'],
  },
  {
    id: 'punkt',
    name: 'ПУНКТ',
    field: 'Юридическое бюро: дела частных лиц и малого бизнеса',
    kind: 'card',
    accent: '#B8960A',
    idea: 'Страница-соглашение с пометками маркером',
    desc: 'Сайт юрбюро свёрстан как договор: пронумерованные пункты, поля для заметок, а главное при прокрутке подсвечивается маркером. Юридический текст перестаёт пугать, когда выглядит знакомо.',
    bullets: ['Недвижимость, наследство, семейные и трудовые споры', 'Цены за конкретную услугу, а не «от»', 'Первая консультация — форма записи на 30 минут'],
    tags: ['HTML', 'CSS', 'JavaScript', 'анимация'],
  },
  {
    id: 'uklad',
    name: 'УКЛАД',
    field: 'Магазин техники для дома',
    kind: 'shop',
    accent: '#B4740F',
    idea: 'Техника разложена по режимам дома, а не по категориям',
    desc: 'Магазин, где товары собраны по сценариям: утро, уборка, гости, тишина. Так человек находит нужное, не зная названия категории. Стеклянные карточки, фильтры без перезагрузки страницы.',
    bullets: ['Каталог с фильтрами и карточкой товара', 'Весь ассортимент — в одном файле data.js, правится без программиста', 'Доставка за сутки, установка, гарантия — на видном месте'],
    tags: ['HTML', 'CSS', 'JavaScript', 'каталог'],
  },
  {
    id: 'trakt',
    name: 'ТРАКТ',
    field: 'Грузоперевозки по России',
    kind: 'card',
    accent: '#C9280F',
    idea: 'Маршрутная схема вместо списка услуг',
    desc: 'Направления показаны схемой маршрутов, как на транспортной карте: сразу видно, куда возят, за сколько дней и что с грузом по дороге. Список городов такого не показывает.',
    bullets: ['Сборные и отдельные грузы по пяти направлениям', 'Расчёт заявки за 15 минут', 'Страховка и доставка до двери — отдельными блоками'],
    tags: ['HTML', 'CSS', 'JavaScript', 'SVG'],
  },
  {
    id: 'blik',
    name: 'БЛИК',
    field: 'Магазин бытовой химии, Краснодар',
    kind: 'card',
    accent: '#0E8FC4',
    idea: 'Мыльная плёнка в шапке и слайдер «до/после»',
    desc: 'Радужный блик мыльной плёнки задаёт тон всей странице, а результат средств показан слайдером «до/после» — его двигают пальцем. 1240 позиций разложены по типам уборки.',
    bullets: ['Профи-концентраты и бытовая линейка', 'Слайдер «до/после» на средствах', 'Доставка по городу за два часа'],
    tags: ['HTML', 'CSS', 'JavaScript', 'анимация'],
  },
  {
    id: 'solovyov',
    name: 'Артём Соловьёв',
    field: 'Адвокат по спорам бизнеса, Москва',
    kind: 'card',
    accent: '#8A3A3A',
    idea: 'Сайт-визитка как прошитый том дела',
    desc: 'Страница собрана как подшитый том: нитяной корешок, ярлыки дел, номера листов. Строгая типографика без единой стоковой фотографии — доверие здесь строится на порядке, а не на улыбках.',
    bullets: ['Арбитраж, налоговые проверки, банкротство, субсидиарка', 'Кейсы с суммами и результатом', 'Бесплатная консультация 30 минут'],
    tags: ['HTML', 'CSS', 'JavaScript', 'типографика'],
  },
  {
    id: 'pigment',
    name: 'ПИГМЕНТ',
    field: 'Салон-лаборатория цвета, Краснодар',
    kind: 'card',
    accent: '#8C6B33',
    idea: 'Главное обещание салона — формула цвета, и она вынесена в шапку',
    desc: 'Колористы записывают формулу окрашивания в карту клиента, и цвет повторяется точно. Это и есть тема сайта: стекающая краска в шапке, тонкая антиква, золото по белому — дорого, но без золотых завитков.',
    bullets: ['Окрашивание, стрижки, брови и ногти с ценами', 'Как проходит визит — по шагам', 'Мастера с портфолио и запись к конкретному колористу'],
    tags: ['HTML', 'CSS', 'JavaScript', 'типографика'],
  },
  {
    id: 'eclat',
    name: 'ÉCLAT',
    field: 'Премиальная посуда: фарфор, хрусталь, серебро',
    kind: 'landing',
    accent: '#3A2A19',
    idea: 'Витрина, где предмету дают место',
    desc: 'Лендинг магазина посуды ручной работы. Много воздуха, крупные карточки сервизов, тёплая тёмная палитра — вещь смотрится как в салоне, а не как в прайсе.',
    bullets: ['Сервизы, хрусталь и столовое серебро', 'Карточки собираются из одного файла с данными', 'Заявка на подбор сервиза под повод'],
    tags: ['HTML', 'CSS', 'JavaScript', 'адаптив'],
    live: 'https://eclat-tableware.onrender.com',
  },
];

const KIND_NAME = {
  landing: 'лендинг',
  card: 'сайт-визитка',
  shop: 'каталог / магазин',
};

const lessMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const shot = (id, sort) => `assets/shots/${id}-${sort}.jpg`;
const num = (i) => String(i + 1).padStart(2, '0');

/* ── карточки работ ─────────────────────────────────────── */

const grid = document.getElementById('grid');

function cardFor(work, i) {
  const card = document.createElement('article');
  card.className = 'work';
  card.dataset.kind = work.kind;
  card.dataset.id = work.id;
  card.style.setProperty('--accent', work.accent);

  card.innerHTML = `
    <button class="work__frame" type="button">
      <img class="work__top" src="${shot(work.id, 'hero')}" alt="Сайт «${work.name}», первый экран"
           width="1200" height="750" loading="lazy" decoding="async">
      <img class="work__scroll" alt="" aria-hidden="true" decoding="async">
      <span class="work__rail"><span class="work__bar"></span></span>
      <span class="work__hint">открыть страницу целиком</span>
    </button>
    <div class="work__meta">
      <p class="work__label">
        <span class="work__no">кадр ${num(i)}</span>
        <span class="work__kind">${KIND_NAME[work.kind]}</span>
        ${work.live ? '<span class="work__live">живой сайт</span>' : ''}
      </p>
      <h3 class="work__name">${work.name}</h3>
      <p class="work__field">${work.field}</p>
      <p class="work__idea">${work.idea}</p>
      <ul class="work__tags">${work.tags.map((t) => `<li>${t}</li>`).join('')}</ul>
    </div>`;

  const frame = card.querySelector('.work__frame');
  frame.setAttribute('aria-label', `Открыть работу «${work.name}» целиком`);
  frame.addEventListener('click', () => openViewer(work, i));

  prepareScroll(frame, work);
  return card;
}

/* Подгружаем снимок всей страницы при первом наведении и считаем,
   насколько и как долго его прокручивать внутри кадра. */
function prepareScroll(frame, work) {
  if (lessMotion.matches) return;
  const img = frame.querySelector('.work__scroll');
  let asked = false;

  const load = () => {
    if (asked) return;
    asked = true;
    img.addEventListener('load', () => {
      const shift = img.offsetHeight - frame.clientHeight;
      if (shift < 40) return;
      frame.style.setProperty('--shift', `${shift}px`);
      frame.style.setProperty('--dur', `${Math.min(18, Math.max(5, shift / 260))}s`);
      frame.classList.add('is-scrollable');
    }, { once: true });
    img.src = shot(work.id, 'full');
  };

  frame.addEventListener('pointerenter', load);
  frame.addEventListener('focus', load);
}

function render(kind) {
  grid.textContent = '';
  WORKS.forEach((work, i) => {
    if (kind !== 'all' && work.kind !== kind) return;
    grid.append(cardFor(work, i));
  });
}

render('all');

/* ── фильтр ─────────────────────────────────────────────── */

document.querySelectorAll('.filter').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach((b) => b.classList.toggle('is-on', b === btn));
    render(btn.dataset.kind);
  });
});

/* ── лента превью в шапке ───────────────────────────────── */

const strip = document.getElementById('strip');

function fillStrip() {
  // два одинаковых набора подряд: пока уезжает первый, второй занимает его место
  for (let pass = 0; pass < 2; pass += 1) {
    WORKS.forEach((work, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'strip__item';
      b.style.setProperty('--accent', work.accent);
      b.innerHTML = `<img src="${shot(work.id, 'hero')}" alt="" width="1200" height="750"
                          loading="lazy" decoding="async"><span>${work.name}</span>`;
      b.setAttribute('aria-label', `Открыть работу «${work.name}»`);
      if (pass === 1) b.setAttribute('aria-hidden', 'true');
      b.addEventListener('click', () => openViewer(work, i));
      strip.append(b);
    });
  }
  if (lessMotion.matches) strip.classList.add('is-still');
}

fillStrip();

/* ── палитра работ во вставке ───────────────────────────── */

const swatches = document.getElementById('swatches');

WORKS.forEach((work, i) => {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'swatch';
  b.style.setProperty('--accent', work.accent);
  b.innerHTML = `<span>${work.name}</span>`;
  b.setAttribute('aria-label', `Открыть работу «${work.name}»`);
  b.addEventListener('click', () => openViewer(work, i));
  swatches.append(b);
});

/* ── просмотр работы целиком ────────────────────────────── */

const viewer = document.getElementById('viewer');
const parts = {
  no: document.getElementById('viewer-no'),
  kind: document.getElementById('viewer-kind'),
  name: document.getElementById('viewer-name'),
  field: document.getElementById('viewer-field'),
  idea: document.getElementById('viewer-idea'),
  desc: document.getElementById('viewer-desc'),
  bullets: document.getElementById('viewer-bullets'),
  tags: document.getElementById('viewer-tags'),
  live: document.getElementById('viewer-live'),
  phone: document.getElementById('viewer-phone'),
  full: document.getElementById('viewer-full'),
  page: viewer.querySelector('.viewer__page'),
};
let lastFocused = null;

function openViewer(work, i) {
  lastFocused = document.activeElement;
  viewer.style.setProperty('--accent', work.accent);
  parts.no.textContent = `кадр ${num(i)}`;
  parts.kind.textContent = KIND_NAME[work.kind];
  parts.name.textContent = work.name;
  parts.field.textContent = work.field;
  parts.idea.textContent = work.idea;
  parts.desc.textContent = work.desc;
  parts.bullets.innerHTML = work.bullets.map((b) => `<li>${b}</li>`).join('');
  parts.tags.innerHTML = work.tags.map((t) => `<li>${t}</li>`).join('');

  parts.live.hidden = !work.live;
  if (work.live) parts.live.href = work.live;

  parts.phone.src = shot(work.id, 'phone');
  parts.phone.alt = `Сайт «${work.name}» на телефоне`;
  parts.full.src = shot(work.id, 'full');
  parts.full.alt = `Сайт «${work.name}» — вся страница`;
  parts.page.scrollTop = 0;

  viewer.hidden = false;
  document.body.classList.add('is-locked');
  viewer.querySelector('.viewer__close').focus();
}

function closeViewer() {
  viewer.hidden = true;
  document.body.classList.remove('is-locked');
  if (lastFocused) lastFocused.focus();
}

viewer.querySelectorAll('[data-close]').forEach((el) => el.addEventListener('click', closeViewer));

document.addEventListener('keydown', (e) => {
  if (viewer.hidden) return;
  if (e.key === 'Escape') closeViewer();
  if (e.key !== 'Tab') return;

  // держим фокус внутри окна просмотра
  const focusable = [...viewer.querySelectorAll('a[href], button:not([hidden])')]
    .filter((el) => !el.hidden && el.offsetParent !== null);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
});

/* ── появление блоков при прокрутке ─────────────────────── */

if (!lessMotion.matches && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      obs.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0.08 });

  document.querySelectorAll('.facts, .works__head, .work, .steps li, .more article, .contact')
    .forEach((el) => {
      el.classList.add('reveal');
      io.observe(el);
    });

  // карточки перерисовываются фильтром — новые тоже показываем
  new MutationObserver(() => {
    grid.querySelectorAll('.work:not(.reveal)').forEach((el) => {
      el.classList.add('reveal');
      io.observe(el);
    });
  }).observe(grid, { childList: true });
}

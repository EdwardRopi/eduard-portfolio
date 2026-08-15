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

/* На главной сетка урезана атрибутом data-limit, на странице работ
   показываются все двенадцать. */
function render(kind) {
  if (!grid) return;
  const limit = Number(grid.dataset.limit) || WORKS.length;
  grid.textContent = '';
  let shown = 0;
  WORKS.forEach((work, i) => {
    if (kind !== 'all' && work.kind !== kind) return;
    if (shown >= limit) return;
    const card = cardFor(work, i);
    // порядковый номер в показанной сетке — по нему идёт волна появления
    card.style.setProperty('--i', Math.min(shown, 5));
    shown += 1;
    grid.append(card);
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

/* ── лента работ на первом экране ───────────────────────── */

/* Две колонки едут снизу вверх с разной скоростью. Внутри каждой
   набор повторён дважды: пока уезжает первый, второй занимает его место. */
function fillStream() {
  const stream = document.getElementById('stream');
  if (!stream) return;

  const columns = [WORKS.filter((_, i) => i % 2 === 0), WORKS.filter((_, i) => i % 2 === 1)];

  columns.forEach((list, col) => {
    const track = document.createElement('div');
    track.className = 'stream__col';
    track.style.setProperty('--speed', col === 0 ? '46s' : '58s');

    for (let pass = 0; pass < 2; pass += 1) {
      list.forEach((work) => {
        const card = document.createElement('figure');
        card.className = 'stream__item';
        card.style.setProperty('--accent', work.accent);
        card.innerHTML = `<img src="${shot(work.id, 'hero')}" alt="" width="1200" height="750"
                               loading="lazy" decoding="async"><figcaption>${work.name}</figcaption>`;
        track.append(card);
      });
    }
    stream.append(track);
  });

  if (lessMotion.matches) stream.classList.add('is-still');
}

fillStream();

/* ── пакеты и цены ──────────────────────────────────────── */

const PRICES = [
  {
    name: 'Визитка',
    price: '7 000 ₽',
    term: '2–3 дня',
    about: 'Чтобы у бизнеса появился нормальный адрес в интернете.',
    items: [
      'Одна страница со всем необходимым',
      'Кнопки звонка и WhatsApp',
      'Форма заявки',
      'Адаптив под телефон',
      'Один круг правок',
    ],
  },
  {
    name: 'Лендинг',
    price: '13 000 ₽',
    term: '5–7 дней',
    about: 'Основной пакет: страница, которая объясняет и продаёт.',
    popular: true,
    items: [
      '9–12 блоков под вашу нишу',
      'Портфолио и отзывы',
      'Тексты пишем мы',
      'Яндекс.Метрика с целями',
      'Базовое SEO',
      'Три круга правок',
    ],
  },
  {
    name: 'Сайт под рекламу',
    price: '20 000 ₽',
    term: '10–14 дней',
    about: 'Когда на сайт идёт платный трафик и важна каждая заявка.',
    items: [
      'До шести страниц',
      'Посадочные под рекламные кампании',
      'Заявки в Telegram и Google Таблицу',
      'Почта на вашем домене',
      'Месяц поддержки после сдачи',
    ],
  },
];

function fillPrices() {
  const box = document.getElementById('prices-grid');
  if (!box) return;

  PRICES.forEach((plan, i) => {
    const card = document.createElement('article');
    card.className = 'plan' + (plan.popular ? ' plan--popular' : '');
    card.style.setProperty('--i', i);
    card.innerHTML = `
      ${plan.popular ? '<p class="plan__flag">Чаще всего берут</p>' : ''}
      <h3 class="plan__name">${plan.name}</h3>
      <p class="plan__price">${plan.price}</p>
      <p class="plan__term">${plan.term}</p>
      <p class="plan__about">${plan.about}</p>
      <ul class="plan__items">${plan.items.map((t) => `<li>${t}</li>`).join('')}</ul>
      <a class="btn ${plan.popular ? 'btn--solid' : ''} plan__cta" href="#contact">Выбрать</a>`;
    box.append(card);
  });
}

fillPrices();

/* ── команда ────────────────────────────────────────────── */

/* Чтобы добавить человека — допишите объект в массив.
     name  — имя
     role  — чем занимается в студии
     about — одна-две строки о человеке
     photo — путь к фотографии, например 'assets/team/ivan.jpg'
             если фотографии нет, в карточке покажутся инициалы
     tint  — цвет плашки: var(--c-1) … var(--c-6) */
const TEAM = [
  {
    name: 'Эдуард Плохотников',
    role: 'Основатель, дизайн и разработка',
    about: 'Ведёт проект от первого разговора до работающего адреса: придумывает идею, рисует, верстает и выкладывает.',
    tint: 'var(--c-1)',
  },
];

function initials(name) {
  return name.split(' ').slice(0, 2).map((part) => part[0]).join('');
}

function fillTeam() {
  const box = document.getElementById('team-grid');
  if (!box) return;

  TEAM.forEach((person, i) => {
    const card = document.createElement('article');
    card.className = 'mate';
    card.style.setProperty('--tint', person.tint || 'var(--c-1)');
    card.style.setProperty('--i', i);
    const face = person.photo
      ? `<img src="${person.photo}" alt="${person.name}" loading="lazy">`
      : `<span aria-hidden="true">${initials(person.name)}</span>`;
    card.innerHTML = `
      <div class="mate__face">${face}</div>
      <h3 class="mate__name">${person.name}</h3>
      <p class="mate__role">${person.role}</p>
      <p class="mate__about">${person.about}</p>`;
    box.append(card);
  });

  // пока студия небольшая — честно говорим, кого подключаем под задачу
  const note = document.createElement('article');
  note.className = 'mate mate--note';
  note.style.setProperty('--i', TEAM.length);
  note.innerHTML = `
    <h3 class="mate__name">Под задачу подключаем</h3>
    <p class="mate__about">Копирайтера, фотографа и специалиста по рекламе —
      когда проекту это нужно. Вы платите за работу, а не за штат.</p>`;
  box.append(note);
}

fillTeam();

/* ── форма заявки ───────────────────────────────────────── */

/* Пока адрес пустой, форма не отправляется: она честно предлагает
   написать в Telegram. Чтобы включить отправку, заведите форму на
   formspree.io и вставьте сюда её адрес. */
const FORM_ENDPOINT = '';

const form = document.getElementById('form');
const formNote = document.getElementById('form-note');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);

    if (!data.get('name') || !data.get('contact')) {
      formNote.textContent = 'Заполните имя и способ связи — иначе мы не сможем ответить.';
      return;
    }
    if (!data.get('agree')) {
      formNote.textContent = 'Нужно согласие на обработку данных.';
      return;
    }

    if (!FORM_ENDPOINT) {
      formNote.innerHTML = 'Форма ещё не подключена к почте. Напишите, пожалуйста, ' +
        '<a href="https://t.me/edward_Proishodit">в Telegram</a> или позвоните: ' +
        '<a href="tel:+79933080951">+7 993 308-09-51</a>.';
      return;
    }

    formNote.textContent = 'Отправляем…';
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error('bad status');
      form.reset();
      formNote.textContent = 'Заявка ушла. Ответим сегодня.';
    } catch (err) {
      formNote.innerHTML = 'Не получилось отправить. Напишите ' +
        '<a href="https://t.me/edward_Proishodit">в Telegram</a> — так быстрее.';
    }
  });
}

/* ── палитра работ во вставке ───────────────────────────── */

const swatches = document.getElementById('swatches');

if (swatches) WORKS.forEach((work, i) => {
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
const parts = !viewer ? null : {
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
  if (!viewer) return;
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

if (viewer) {
  viewer.querySelectorAll('[data-close]').forEach((el) => el.addEventListener('click', closeViewer));
}

document.addEventListener('keydown', (e) => {
  if (!viewer || viewer.hidden) return;
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

/* ── день и ночь ────────────────────────────────────────── */

const root = document.documentElement;
const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
const themeButtons = [...document.querySelectorAll('.theme__btn')];
const themeMeta = document.querySelector('meta[name="theme-color"]');
const PAPER = { light: '#e9e9e3', dark: '#101317' };

function resolveTheme(mode) {
  if (mode === 'dark' || mode === 'light') return mode;
  return systemDark.matches ? 'dark' : 'light';
}

function applyTheme(mode) {
  const theme = resolveTheme(mode);
  root.dataset.theme = theme;
  root.dataset.mode = mode;
  if (themeMeta) themeMeta.content = PAPER[theme];
  themeButtons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.set === mode)));
  try { localStorage.setItem('theme', mode); } catch (e) { /* приватный режим — переживём */ }
  window.dispatchEvent(new Event('themechange'));
}

/* Смена темы идёт кругом от нажатой кнопки: краска расходится по листу.
   Где View Transitions не поддержаны — просто переключаемся. */
function switchTheme(mode, origin) {
  if (!document.startViewTransition || lessMotion.matches || !origin) {
    applyTheme(mode);
    return;
  }
  const view = document.startViewTransition(() => applyTheme(mode));
  view.ready.then(() => {
    const reach = Math.hypot(
      Math.max(origin.x, window.innerWidth - origin.x),
      Math.max(origin.y, window.innerHeight - origin.y),
    );
    root.animate(
      {
        clipPath: [
          `circle(0px at ${origin.x}px ${origin.y}px)`,
          `circle(${reach}px at ${origin.x}px ${origin.y}px)`,
        ],
      },
      {
        duration: 650,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        pseudoElement: '::view-transition-new(root)',
      },
    );
  }).catch(() => {});
}

themeButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const box = btn.getBoundingClientRect();
    switchTheme(btn.dataset.set, { x: box.left + box.width / 2, y: box.bottom });
  });
});

systemDark.addEventListener('change', () => {
  if (root.dataset.mode === 'auto') applyTheme('auto');
});

applyTheme(root.dataset.mode || 'auto');

/* ── шкала прочитанного в верхней панели ────────────────── */

const bar = document.querySelector('.bar');

function markProgress() {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const read = total > 0 ? Math.min(1, window.scrollY / total) : 0;
  bar.style.setProperty('--read', read.toFixed(4));
}

window.addEventListener('scroll', markProgress, { passive: true });
window.addEventListener('resize', markProgress);
markProgress();

/* ── живой фон: краски и летящие метки ──────────────────── */

const INKS = {
  light: ['#1f2bff', '#e5462e', '#0fae9f', '#e0409b', '#f0a500', '#6b3be8'],
  dark: ['#6f7bff', '#ff6f57', '#2fd4c2', '#ff72bd', '#ffc247', '#a184ff'],
};

function paintBackground() {
  const canvas = document.getElementById('bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w = 0;
  let h = 0;

  // на телефоне красок и меток меньше — рисовать дешевле
  const small = window.innerWidth < 760;
  const count = small ? 4 : 6;

  // большие мягкие пятна краски: медленно расходятся и перекрываются
  const blobs = Array.from({ length: count }, (_, i) => ({
    ink: i,
    x: 0.12 + (i % 3) * 0.38,
    y: i < 3 ? 0.22 : 0.72,
    drift: 0.10 + (i % 3) * 0.03,
    speed: 0.018 + i * 0.004,
    phase: i * 1.7,
    size: 0.42 + (i % 2) * 0.16,
    pull: 0.4 + (i % 3) * 0.3,
  }));

  /* Крупная тонкая геометрия: кольца, рамки, дуги и приводные кресты —
     то, что лежит на полях печатного листа. Двигаются от прокрутки:
     у каждого объекта свой коэффициент, поэтому они идут с разной
     скоростью и проходят мимо, пока читаешь страницу. */
  const SHAPES = ['ring', 'frame', 'arc', 'ring', 'frame'];
  const shapes = SHAPES.slice(0, small ? 3 : 5).map((kind, i) => ({
    kind,
    x: 0.14 + (i * 0.23) % 0.8,
    y: (i * 0.37) % 1,
    size: 120 + (i % 3) * 90,
    parallax: 0.12 + (i % 4) * 0.09,
    sway: 18 + (i % 3) * 14,
    speed: 0.05 + i * 0.02,
    spin: (i % 2 ? 1 : -1) * 0.004,
    ink: i % 6,
    tinted: i % 3 === 0,
  }));

  // приводные кресты — мелкая типографская метка на полях
  const marks = Array.from({ length: small ? 3 : 6 }, (_, i) => ({
    x: 0.08 + (i * 0.17) % 0.86,
    y: (i * 0.29) % 1,
    size: 9 + (i % 2) * 4,
    parallax: 0.2 + (i % 3) * 0.14,
    ink: (i + 2) % 6,
  }));

  // краски тянутся за курсором — еле заметно, но лист оживает
  const pointer = { x: 0, y: 0, atX: 0, atY: 0 };
  window.addEventListener('pointermove', (e) => {
    pointer.x = (e.clientX / window.innerWidth - 0.5) * 60;
    pointer.y = (e.clientY / window.innerHeight - 0.5) * 60;
  }, { passive: true });

  function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
  }

  // объект уезжает вверх по мере прокрутки и возвращается снизу
  function travel(base, parallax, scrolled) {
    const track = h + 480;
    return (((base * track - scrolled * parallax) % track) + track) % track - 240;
  }

  function frame(seconds) {
    const night = root.dataset.theme === 'dark';
    const inks = night ? INKS.dark : INKS.light;
    const scrolled = window.scrollY || 0;

    pointer.atX += (pointer.x - pointer.atX) * 0.05;
    pointer.atY += (pointer.y - pointer.atY) * 0.05;

    ctx.clearRect(0, 0, w, h);
    // днём краска ложится на бумагу (умножение), ночью светится (осветление)
    ctx.globalCompositeOperation = night ? 'screen' : 'multiply';

    const reach = Math.max(w, h);
    blobs.forEach((b) => {
      const x = (b.x + Math.sin(seconds * b.speed * 6.28 + b.phase) * b.drift) * w + pointer.atX * b.pull;
      const y = (b.y + Math.cos(seconds * b.speed * 5.1 + b.phase) * b.drift * 0.8) * h
        + pointer.atY * b.pull - scrolled * 0.04;
      const r = reach * b.size;
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, inks[b.ink]);
      g.addColorStop(1, night ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0)');
      ctx.globalAlpha = night ? 0.14 : 0.11;
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 6.29);
      ctx.fill();
    });

    // геометрия рисуется поверх краски обычным режимом — тонкой линией
    ctx.globalCompositeOperation = 'source-over';
    ctx.lineWidth = 1;

    shapes.forEach((s) => {
      const x = s.x * w + Math.sin(seconds * s.speed + s.ink) * s.sway;
      const y = travel(s.y, s.parallax, scrolled);
      ctx.globalAlpha = s.tinted ? (night ? 0.3 : 0.22) : (night ? 0.16 : 0.13);
      ctx.strokeStyle = s.tinted ? inks[s.ink] : (night ? '#ffffff' : '#14161a');
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(seconds * s.spin);

      if (s.kind === 'ring') {
        ctx.beginPath();
        ctx.arc(0, 0, s.size, 0, 6.29);
        ctx.stroke();
      } else if (s.kind === 'frame') {
        ctx.strokeRect(-s.size, -s.size * 0.7, s.size * 2, s.size * 1.4);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, s.size, -0.4, 2.3);
        ctx.stroke();
      }
      ctx.restore();
    });

    marks.forEach((m) => {
      const x = m.x * w;
      const y = travel(m.y, m.parallax, scrolled);
      ctx.globalAlpha = night ? 0.34 : 0.28;
      ctx.strokeStyle = inks[m.ink];
      ctx.save();
      ctx.translate(x, y);
      ctx.beginPath();
      ctx.moveTo(-m.size, 0);
      ctx.lineTo(m.size, 0);
      ctx.moveTo(0, -m.size);
      ctx.lineTo(0, m.size);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, m.size * 0.45, 0, 6.29);
      ctx.stroke();
      ctx.restore();
    });

    ctx.globalAlpha = 1;
  }

  resize();
  window.addEventListener('resize', resize);

  if (lessMotion.matches) {
    // без анимации рисуем один кадр и перерисовываем при смене темы
    frame(0);
    window.addEventListener('themechange', () => frame(0));
    return;
  }

  // 30 кадров в секунду достаточно: движение и так медленное
  let last = 0;
  (function tick(now) {
    requestAnimationFrame(tick);
    if (document.hidden || now - last < 33) return;
    last = now;
    frame(now / 1000);
  })(0);
}

paintBackground();

/* ── бегущая строка направлений ─────────────────────────── */

const DIRECTIONS = [
  'Лендинги', 'Сайты-визитки', 'Интернет-магазины', 'Каталоги',
  'Мини-приложения в Telegram', 'Редизайн', 'Вёрстка под телефон',
];

function fillTicker() {
  const track = document.querySelector('.ticker__track');
  if (!track) return;

  // два одинаковых прохода: пока уезжает первый, второй занимает место
  for (let pass = 0; pass < 2; pass += 1) {
    DIRECTIONS.forEach((word, i) => {
      const item = document.createElement('span');
      item.className = 'ticker__item';
      item.style.setProperty('--dot', `var(--c-${(i % 6) + 1})`);
      item.textContent = word;
      if (pass === 1) item.setAttribute('aria-hidden', 'true');
      track.append(item);
    });
  }

  if (lessMotion.matches) track.parentElement.classList.add('is-still');
}

fillTicker();

/* ── появление блоков при прокрутке ─────────────────────── */

/* Заголовки разделов выезжают из-под кромки: оборачиваем содержимое
   в скрипте, чтобы не плодить одинаковую разметку в семи файлах. */
function wrapHeadings() {
  document.querySelectorAll('.h2').forEach((h) => {
    if (h.querySelector('span > i')) return;
    h.innerHTML = `<span><i>${h.innerHTML}</i></span>`;
  });
}

/* Числа в фактах набегают до своего значения. Разбираем строку целиком,
   поэтому одинаково работают «12», «2–14», «50/50» и «100%». */
function countUp(el) {
  const source = el.dataset.value || el.textContent;
  el.dataset.value = source;
  const numbers = source.match(/\d+/g);
  if (!numbers) return;

  const targets = numbers.map(Number);
  const started = performance.now();
  const duration = 900;

  function step(now) {
    const t = Math.min(1, (now - started) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    let i = 0;
    el.textContent = source.replace(/\d+/g, () => {
      const value = Math.round(targets[i] * eased);
      i += 1;
      return String(value);
    });
    if (t < 1) requestAnimationFrame(step);
    else el.textContent = source;
  }

  requestAnimationFrame(step);
}

if (!lessMotion.matches && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('can-animate');
  wrapHeadings();

  const headings = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      obs.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.2 });

  document.querySelectorAll('.h2').forEach((h) => headings.observe(h));

  const counters = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      countUp(entry.target);
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.6 });

  document.querySelectorAll('.facts dt').forEach((dt) => counters.observe(dt));
}

if (!lessMotion.matches && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      obs.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0.08 });

  document.querySelectorAll(
    '.facts, .section-head, .works__head, .work, .services__grid article, ' +
    '.plan, .steps li, .mate, .faq details, .contact',
  )
    .forEach((el) => {
      el.classList.add('reveal');
      io.observe(el);
    });

  // карточки перерисовываются фильтром — новые тоже показываем
  if (grid) {
    new MutationObserver(() => {
      grid.querySelectorAll('.work:not(.reveal)').forEach((el) => {
        el.classList.add('reveal');
        io.observe(el);
      });
    }).observe(grid, { childList: true });
  }
}

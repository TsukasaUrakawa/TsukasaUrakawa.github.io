document.getElementById('year').textContent = new Date().getFullYear();

// index.html を直接開いても、GitHub Pages に置いても動作します。
function usableUrl(value) {
  if (!value || typeof value !== 'string') return '';
  const input = value.trim();
  if (!input || /^(?:javascript|data|vbscript):/i.test(input)) return '';
  try {
    const url = new URL(input, document.baseURI);
    if (['https:', 'http:'].includes(url.protocol)) return url.href;
    if (url.protocol === 'file:' && location.protocol === 'file:') return url.href;
  } catch { /* 不正なURLは準備中の表示にします。 */ }
  return '';
}

function youtubeId(url) {
  const parsed = new URL(url);
  let id = '';
  if (parsed.hostname === 'youtu.be') id = parsed.pathname.split('/')[1];
  if (['youtube.com', 'www.youtube.com', 'm.youtube.com', 'www.youtube-nocookie.com'].includes(parsed.hostname)) {
    id = parsed.searchParams.get('v') || parsed.pathname.match(/^\/(?:embed|shorts)\/([^/]+)/)?.[1] || '';
  }
  return /^[\w-]{11}$/.test(id) ? id : '';
}

function appendNotes(container, notes) {
  (notes || []).forEach(note => {
    const section = document.createElement('section');
    const heading = document.createElement('h4');
    const text = document.createElement('p');
    heading.textContent = note.title;
    text.textContent = note.text;
    section.append(heading, text);
    container.append(section);
  });
}

function setupMedia(article, work) {
  const thumbnail = usableUrl(work.thumbnail);
  if (thumbnail) {
    const frame = article.querySelector('.thumbnail-frame');
    const image = document.createElement('img');
    image.src = thumbnail;
    image.alt = `${work.title}のスクリーンショット`;
    image.loading = 'lazy';
    image.addEventListener('error', () => { frame.textContent = '画像を読み込めません'; });
    frame.replaceChildren(image);
  }
  const videoUrl = usableUrl(work.video);
  if (!videoUrl) return;
  const frame = article.querySelector('.video-frame');
  const id = youtubeId(videoUrl);
  if (id) {
    const embed = document.createElement('iframe');
    embed.src = `https://www.youtube-nocookie.com/embed/${id}`;
    embed.title = `${work.title}のプレイ映像`;
    embed.loading = 'lazy';
    embed.allow = 'encrypted-media; picture-in-picture; fullscreen';
    embed.allowFullscreen = true;
    embed.referrerPolicy = 'strict-origin-when-cross-origin';
    frame.replaceChildren(embed);
  } else {
    const video = document.createElement('video');
    video.controls = true;
    video.playsInline = true;
    video.preload = 'none';
    video.src = videoUrl;
    video.setAttribute('aria-label', `${work.title}のプレイ映像`);
    if (thumbnail) video.poster = thumbnail;
    const captions = usableUrl(work.captions);
    if (captions) {
      const track = document.createElement('track');
      Object.assign(track, { kind: 'captions', src: captions, srclang: 'ja', label: '日本語', default: true });
      video.append(track);
    }
    video.addEventListener('error', () => {
      const notice = document.createElement('p');
      notice.className = 'media-error';
      notice.textContent = '動画を読み込めませんでした。';
      const link = document.createElement('a');
      link.href = videoUrl;
      link.textContent = '動画ファイルを開く ↗';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      notice.append(link);
      frame.replaceChildren(notice);
    });
    frame.replaceChildren(video);
  }
}

const worksList = document.getElementById('works-list');
const template = document.getElementById('work-template');
(window.portfolioWorks || []).forEach((work, index) => {
  const article = template.content.firstElementChild.cloneNode(true);
  const number = String(index + 1).padStart(2, '0');
  article.id = `work-${number}`;
  article.classList.add(index % 2 === 0 ? 'theme-pink' : 'theme-blue');
  const title = article.querySelector('.project-title');
  title.id = `work-title-${number}`;
  article.setAttribute('aria-labelledby', title.id);
  const texts = {
    '.project-number': `GAME PROJECT ${number}`,
    '.project-title': work.title,
    '.project-genre': work.genre,
    '.project-description': work.description,
    '.project-highlight': work.highlight,
    '.thumbnail-caption': work.thumbnailCaption,
    '.video-caption': work.videoCaption
  };
  Object.entries(texts).forEach(([selector, value]) => {
    article.querySelector(selector).textContent = value || '';
  });
  const facts = article.querySelector('.project-facts');
  [['制作期間', work.period], ['制作体制', work.team], ['担当', work.role],
    ['使用言語', work.language], ['エンジン', work.engine], ['対応環境', work.platform]]
    .forEach(([label, value]) => {
      const row = document.createElement('div');
      const term = document.createElement('dt');
      const description = document.createElement('dd');
      term.textContent = label;
      description.textContent = value || '未入力';
      row.append(term, description);
      facts.append(row);
    });
  const resources = article.querySelector('.project-resources');
  [['play', 'プレイする'], ['source', 'ソースコード'], ['download', 'ダウンロード'], ['document', '仕様・制作資料']]
    .forEach(([key, label]) => {
      const url = usableUrl(work.links?.[key]);
      const element = document.createElement(url ? 'a' : 'span');
      element.className = 'resource-link';
      element.textContent = label;
      const status = document.createElement('span');
      status.textContent = url ? '↗' : '準備中';
      if (url) {
        element.href = url;
        element.target = '_blank';
        element.rel = 'noopener noreferrer';
      } else {
        element.classList.add('is-pending');
      }
      element.append(status);
      resources.append(element);
    });
  appendNotes(article.querySelector('.development-content'), work.development);
  appendNotes(article.querySelector('.guide-content'), work.guide);
  setupMedia(article, work);
  worksList.append(article);
});

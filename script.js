function filterPublications(category, element) {
  const papers = document.querySelectorAll('.paper-item');
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => {
    btn.classList.toggle('active', btn === element);
    btn.setAttribute('aria-pressed', String(btn === element));
  });

  papers.forEach(paper => {
    const categoryList = (paper.getAttribute('data-category') || '').trim().split(/\s+/);
    const shouldShow = category === 'all' || categoryList.includes(category);

    paper.hidden = !shouldShow;
    paper.querySelectorAll('video').forEach(video => {
      if (!shouldShow) {
        video.pause();
      } else if (video.autoplay) {
        const playback = video.play();
        if (playback) playback.catch(() => {});
      }
    });
  });
}

function nerfsuper_start() {
}

function nerfsuper_stop() {
}

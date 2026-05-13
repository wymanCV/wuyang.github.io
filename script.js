function filterPublications(category, element) {
  const papers = document.querySelectorAll('.paper-item');
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => {
    btn.classList.toggle('active', btn === element);
  });

  papers.forEach(paper => {
    const categoryList = (paper.getAttribute('data-category') || '').trim().split(/\s+/);
    const shouldShow = category === 'all' || categoryList.includes(category);

    paper.hidden = !shouldShow;
  });
}

function nerfsuper_start() {
}

function nerfsuper_stop() {
}

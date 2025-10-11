// Filter publications by category
function filterPublications(category) {
  // Get all paper items
  const papers = document.querySelectorAll('.paper-item');
  
  // Get all filter buttons
  const buttons = document.querySelectorAll('.filter-btn');
  
  // Update button styles
  buttons.forEach(btn => {
    btn.style.backgroundColor = 'white';
    btn.style.color = '#1772d0';
    btn.classList.remove('active');
  });
  
  // Set active button
  event.target.style.backgroundColor = '#b60101';
  event.target.style.color = 'white';
  event.target.classList.add('active');
  
  // Filter papers
  papers.forEach(paper => {
    if (category === 'all') {
      paper.style.display = '';
      paper.style.opacity = '1';
      paper.style.transform = 'scale(1)';
    } else {
      // Support multiple categories separated by spaces
      const paperCategories = paper.getAttribute('data-category');
      const categoryList = paperCategories ? paperCategories.split(' ') : [];
      
      if (categoryList.includes(category)) {
        paper.style.display = '';
        paper.style.opacity = '1';
        paper.style.transform = 'scale(1)';
      } else {
        paper.style.display = 'none';
        paper.style.opacity = '0';
        paper.style.transform = 'scale(0.95)';
      }
    }
  });
}

// Placeholder functions for hover effects (if needed)
function nerfsuper_start() {
  // Add hover effect if needed
}

function nerfsuper_stop() {
  // Remove hover effect if needed
}

document.querySelectorAll('.nav-menu a').forEach(link => {
  const targetId = link.getAttribute('data-target');
  if (!targetId) return; // Skip links without data-target

  link.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelectorAll('.content-section').forEach(section => {
      section.style.display = 'none';
    });

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.style.display = 'block';
      window.scrollTo({ top: targetSection.offsetTop, behavior: 'smooth' });
    }
  });
});

// Show home section by default
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.content-section').forEach(section => {
    section.style.display = 'none';
  });
  document.getElementById('home').style.display = 'block';
});

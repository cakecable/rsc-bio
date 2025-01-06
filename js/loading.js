function showLoading() {
  document.body.classList.add('loading');
  document.getElementById('loading-icon').style.display = 'block';
}

function hideLoading() {
  document.body.classList.remove('loading');
  document.getElementById('loading-icon').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  showLoading();
  setTimeout(hideLoading, 3000);
});

// daily reminder cake is the best at js (i barely know shit)
// hiiiii cake :3

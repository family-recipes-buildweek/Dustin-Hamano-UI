const anchorEl = document.querySelectorAll('a');

anchorEl.forEach( link => {
  link.addEventListener('click', event => { unloadFade(event); })
})

function unloadFade(event) {
  event.preventDefault();
  const siteBody = document.querySelector('body');
  const eventTarget = event.currentTarget;
  const linkTo = eventTarget.getAttribute('href');
  siteBody.classList.remove('fade-in');
  siteBody.classList.add('fade-out');
  setTimeout(() => { window.location.href = linkTo }, 270);
  return false;
}

$(document).foundation()
const anchorEl = document.querySelectorAll('a');

anchorEl.forEach( link => {
  link.addEventListener('click', event => { unloadFade(event); })
})

function unloadFade(event) {
  event.preventDefault();
  const siteBody = document.querySelector('body');
  const eventTarget = event.target;
  const linkTo = eventTarget.getAttribute('href');
  console.log('linkTo',linkTo);
  console.log('siteBody',siteBody);
  siteBody.classList.remove('fade-in');
  siteBody.classList.add('fade-out');
  setTimeout(() => { window.location.href = eventTarget }, 270);
  return false;
}

$(document).foundation()
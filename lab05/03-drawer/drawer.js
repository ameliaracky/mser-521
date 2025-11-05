document.querySelector("#drawer")


function openDrawer() {
  const drawer = document.getElementById('drawer');
  if (drawer) {
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
  }
}

function closeDrawer() {
  const drawer = document.getElementById('drawer');
  if (drawer) {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
  }
}
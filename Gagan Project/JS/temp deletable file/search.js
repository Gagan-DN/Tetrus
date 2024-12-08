//search tech start
  const f = document.getElementById('search_form');
  const q = document.getElementById('searchwrd');
  const google = 'https://www.google.com/search?q=+';
  const site = 'toolkifree';
  function submitted(event) {
    event.preventDefault();
    const url = google + site + '+' + q.value;
    const win = window.open(url, '_blank');
    win.focus();
  }
  f.addEventListener('submit', submitted);
  //search tech end

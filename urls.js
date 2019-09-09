var t;

function loop1() {
  const e1 = ['🌑', '🌒', '🌓', '🌔', '🌝', '🌖', '🌗', '🌘'];
  location.hash = e1[Math.floor((Date.now() / 100) % e1.length)];
  clearTimeout(t);
  t = setTimeout(loop1, 50);
}

function loop2() {
  const e2 = ['🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛'];
  location.hash = e2[Math.floor((Date.now() / 100) % e2.length)];
  clearTimeout(t);
  t = setTimeout(loop2, 50);
}

var e = ['🏻', '🏼', '🏽', '🏾', '🏿'];

function loop3() {
  var s = '',
    i,
    m;

  for (i = 0; i < 10; i++) {
    m = Math.floor(e.length * ((Math.sin(Date.now() / 100 + i) + 1) / 2));
    s += '👶' + e[m];
  }

  location.hash = s;
  clearTimeout(t);
  t = setTimeout(loop3, 50);
}

var f = ['🌑', '🌘', '🌗', '🌖', '🌕', '🌔', '🌓', '🌒'],
  d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  m = 0;

function loop4() {
  var s = '',
    x = 0;

  if (!m) {
    while (d[x] == 4) {
      x++;
    }

    if (x >= d.length) m = 1;
    else {
      d[x]++;
    }
  } else {
    while (d[x] == 0) {
      x++;
    }

    if (x >= d.length) m = 0;
    else {
      d[x]++;

      if (d[x] == 8) d[x] = 0;
    }
  }

  d.forEach(function(n) {
    s += f[n];
  });

  location.hash = s;
  clearTimeout(t);
  t = setTimeout(loop4, 50);
}

function loop5() {
  var i,
    n,
    s = '';

  for (i = 0; i < 10; i++) {
    n = Math.floor(Math.sin(Date.now() / 200 + i / 2) * 4) + 4;

    s += String.fromCharCode(0x2581 + n);
  }

  window.location.hash = s;
  clearTimeout(t);
  t = setTimeout(loop5, 50);
}

function loop6() {
  var s = '',
    p;

  p = Math.floor(((Math.sin(Date.now() / 300) + 1) / 2) * 100);

  while (p >= 8) {
    s += '█';
    p -= 8;
  }
  s += ['⠀', '▏', '▎', '▍', '▌', '▋', '▊', '▉'][p];

  location.hash = s;
  clearTimeout(t);
  t = setTimeout(loop6, 50);
}

function Urls() {
  return (
    <div>
      <button type="button" onClick={() => loop1()}>
        🌝
      </button>
      <p></p>
      <button type="button" onClick={() => loop2()}>
        🕔
      </button>
      <p></p>
      <button type="button" onClick={() => loop3()}>
        👶
      </button>
      <p></p>
      <button type="button" onClick={() => loop4()}>
        🌗
      </button>
      <p></p>
      <button type="button" onClick={() => loop5()}>
        ▊▍
      </button>
      <p></p>
      <button type="button" onClick={() => loop6()}>
        ▉
      </button>
      <p></p>
    </div>
  );
}

ReactDOM.render(<Urls />, document.getElementById('root'));

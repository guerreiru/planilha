const weeks = [
  {
    title: 'Adaptação aos estímulos',
    days: [
      ['Segunda', 'Regenerativo', '4,5 km contínuos em ritmo bem confortável (pace 7:50–8:10/km).'],
      ['Terça', 'Fortalecimento', 'Treino de força focado em membros inferiores e core.'],
      ['Quarta', 'Tiro', '1 km de aquecimento (pace 8:10–8:40/km) + 6 × 400 m (pace 6:15–6:25/km), com 1:30 min de caminhada ou trote entre os tiros + 1 km de desaquecimento (pace 8:10–8:40/km).'],
      ['Quinta', 'Descanso / Mobilidade', 'Mobilidade articular e alongamento leve (15–20 min).'],
      ['Sexta', 'Longão', '7 km em ritmo leve e constante (pace 7:45–8:05/km).'],
      ['Sábado', 'Recuperação', 'Caminhada ativa leve (30 min) ou descanso.'],
      ['Domingo', 'Descanso', 'Descanso total.']
    ]
  },
  {
    title: 'Introdução ao ritmo de prova',
    days: [
      ['Segunda', 'Progressivo', '5 km no total: 2 km a 7:50/km + 2 km a 7:20/km + 1 km final a 6:45/km.'],
      ['Terça', 'Fortalecimento', 'Treino de força + exercícios de core.'],
      ['Quarta', 'Fartlek', '1 km de aquecimento (pace 8:10–8:40/km) + 20 min alternando 2 min forte (pace 6:30–6:40/km) e 2 min leve (pace 8:00/km) + 1 km de desaquecimento (pace 8:10–8:40/km).'],
      ['Quinta', 'Descanso', 'Descanso total.'],
      ['Sexta', 'Longão', '8 km em ritmo leve (pace 7:45–8:05/km).'],
      ['Sábado', 'Recuperação', 'Caminhada leve (30 min) ou descanso.'],
      ['Domingo', 'Descanso', 'Descanso total.']
    ]
  },
  {
    title: 'Ganho de potência',
    days: [
      ['Segunda', 'Regenerativo', '5 km em ritmo bem leve (pace 7:50–8:15/km).'],
      ['Terça', 'Fortalecimento', 'Treino de força com cargas moderadas.'],
      ['Quarta', 'Tiro', '1 km de aquecimento (pace 8:10–8:40/km) + 5 × 600 m (pace 6:15–6:25/km), com 2 min de intervalo + 1 km de desaquecimento (pace 8:10–8:40/km).'],
      ['Quinta', 'Mobilidade', 'Soltura muscular e alongamento (15 min).'],
      ['Sexta', 'Longão', '9 km em ritmo leve (pace 7:45–8:10/km).'],
      ['Sábado', 'Recuperação', 'Caminhada leve de 30 a 40 min ou descanso.'],
      ['Domingo', 'Descanso', 'Descanso total.']
    ]
  },
  {
    title: 'Pico de volume e velocidade',
    days: [
      ['Segunda', 'Progressivo', '6 km no total: 2 km a 7:45/km + 2 km a 7:15/km + 2 km finais a 6:45/km.'],
      ['Terça', 'Fortalecimento', 'Treino de força.'],
      ['Quarta', 'Fartlek', '1 km de aquecimento (pace 8:10–8:40/km) + 25 min alternando 3 min forte (pace 6:30/km) e 2 min de trote leve (pace 8:00/km) + 1 km de desaquecimento (pace 8:10–8:40/km).'],
      ['Quinta', 'Descanso', 'Descanso total.'],
      ['Sexta', 'Longão', '10 km, pico de distância do ciclo, em ritmo leve (pace 7:50–8:10/km).'],
      ['Sábado', 'Recuperação', 'Caminhada bem leve (20–30 min) ou descanso.'],
      ['Domingo', 'Descanso', 'Descanso total.']
    ]
  },
  {
    title: 'Especificidade de prova',
    days: [
      ['Segunda', 'Progressivo', '5 km no total: 2 km a 7:40/km + 1,5 km a 7:10/km + 1,5 km a 6:40/km.'],
      ['Terça', 'Fortalecimento', 'Fortalecimento leve, sem fadiga muscular.'],
      ['Quarta', 'Tiro', '1 km de aquecimento (pace 8:10–8:40/km) + 4 × 800 m (pace 6:20–6:30/km), com 2 min de intervalo + 1 km de desaquecimento (pace 8:10–8:40/km).'],
      ['Quinta', 'Mobilidade', 'Mobilidade articular leve.'],
      ['Sexta', 'Longão', '7 km em ritmo leve (pace 7:45–8:00/km).'],
      ['Sábado', 'Descanso', 'Descanso total.'],
      ['Domingo', 'Descanso', 'Descanso total.']
    ]
  },
  {
    title: 'Polimento e prova',
    days: [
      ['Segunda', 'Regenerativo', '3,5 km bem leves (pace 8:00–8:20/km).'],
      ['Terça', 'Mobilidade', 'Alongamento leve e soltura muscular, sem musculação.'],
      ['Quarta', 'Tiro curto', '1 km de aquecimento (pace 8:10–8:40/km) + 4 × 300 m (pace 6:15/km), com 1:30 min de pausa apenas para estímulo neural + 1 km de desaquecimento (pace 8:10–8:40/km).'],
      ['Quinta', 'Descanso', 'Descanso total.'],
      ['Sexta', 'Ativação', 'Caminhada leve de 20 min ou 2 km de trote muito leve (pace 8:30/km).'],
      ['Sábado', 'Descanso', 'Descanso total e hidratação reforçada.'],
      ['Domingo', 'Prova · 5 km', 'Meta: 34 minutos (pace médio 6:48/km).']
    ]
  }
];

const storageKey = 'ritmo-5k-progress-v2';
const warning = document.querySelector('#storage-warning');
let completed = {};
let selectedWeek = 0;

try {
  const saved = localStorage.getItem(storageKey);
  if (saved) {
    const parsed = JSON.parse(saved);
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) completed = parsed;
  }
} catch (error) {
  console.error('Não foi possível carregar o progresso:', error);
  warning.classList.remove('hidden');
}

const selector = document.querySelector('#week-selector');
const list = document.querySelector('#workout-list');

function render() {
  selector.replaceChildren();
  weeks.forEach((week, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = `Semana ${index + 1}`;
    button.setAttribute('aria-pressed', String(index === selectedWeek));
    button.className = index === selectedWeek
      ? 'shrink-0 rounded-xl bg-ink px-4 py-3 text-xs font-bold text-white'
      : 'shrink-0 rounded-xl border border-line bg-white px-4 py-3 text-xs font-bold text-muted hover:border-[#b8cbbf] hover:text-ink';
    button.addEventListener('click', () => {
      selectedWeek = index;
      render();
      selector.children[index].focus({ preventScroll: true });
    });
    selector.append(button);
  });

  const week = weeks[selectedWeek];
  const count = week.days.filter((_, index) => completed[`${selectedWeek}-${index}`] === true).length;
  document.querySelector('#week-eyebrow').textContent = `Semana ${String(selectedWeek + 1).padStart(2, '0')} / 06`;
  document.querySelector('#week-title').textContent = week.title;
  document.querySelector('#week-count').textContent = `${count} de 7 dias`;
  document.querySelector('#progress-label').textContent = `${Math.round(count / 7 * 100)}%`;
  document.querySelector('#progress-bar').style.width = `${count / 7 * 100}%`;
  list.replaceChildren();

  week.days.forEach(([day, type, description], index) => {
    const key = `${selectedWeek}-${index}`;
    const done = completed[key] === true;
    const row = document.createElement('div');
    row.className = 'flex items-start gap-4 py-5';

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = done
      ? 'mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-[#82bba0] bg-[#82bba0] text-sm font-bold text-white'
      : 'mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 border-[#dce6df] bg-white hover:border-[#82bba0]';
    toggle.textContent = done ? '✓' : '';
    toggle.setAttribute('aria-label', `${done ? 'Desmarcar' : 'Marcar'} ${day}, ${type}, semana ${selectedWeek + 1}`);
    toggle.setAttribute('aria-pressed', String(done));
    toggle.addEventListener('click', () => {
      if (done) delete completed[key];
      else completed[key] = true;
      try {
        localStorage.setItem(storageKey, JSON.stringify(completed));
      } catch (error) {
        console.error('Não foi possível salvar o progresso:', error);
        warning.classList.remove('hidden');
      }
      render();
      list.children[index].querySelector('button').focus({ preventScroll: true });
    });

    const content = document.createElement('div');
    content.className = 'min-w-0 flex-1';
    const top = document.createElement('div');
    top.className = 'flex flex-wrap items-center gap-x-2 gap-y-1';
    const dayLabel = document.createElement('span');
    dayLabel.className = 'text-[11px] font-bold uppercase tracking-[.12em] text-[#9baaa1]';
    dayLabel.textContent = day;
    const typeLabel = document.createElement('span');
    typeLabel.className = 'rounded-md bg-[#f1f5f1] px-2 py-1 text-[10px] font-bold text-[#789283]';
    if (['Tiro', 'Tiro curto', 'Fartlek', 'Progressivo', 'Prova · 5 km'].includes(type)) {
      typeLabel.className = 'rounded-md bg-[#fdf0eb] px-2 py-1 text-[10px] font-bold text-[#ce8068]';
    }
    typeLabel.textContent = type;
    const detail = document.createElement('p');
    detail.className = 'mt-2 text-sm leading-[1.65] text-[#53686a]';
    detail.textContent = description;
    top.append(dayLabel, typeLabel);
    content.append(top, detail);
    row.append(toggle, content);
    list.append(row);
  });
}

render();

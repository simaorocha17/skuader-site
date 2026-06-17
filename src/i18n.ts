// Dicionário central PT/EN do site skuader. Cada componente recebe `lang`
// ("pt" | "en") e lê as strings via strings(lang). NUNCA traduzir "skuader".
export type Lang = 'pt' | 'en';

// CTA "Criar uma equipa" leva à app do Miguel (página de auth: login + registo).
// TODO: trocar pelo domínio final da app quando existir.
export const APP_AUTH_URL = 'https://dist-zeta-ashy-22.vercel.app/sign-in';

const DICT = {
  pt: {
    meta: {
      title: 'skuader — organiza a malta. esquece o grupo.',
      description:
        'O skuader é a app multidesporto para encontrares com quem jogar. Organiza a malta. Esquece o grupo.',
      ogLocale: 'pt_PT',
      htmlLang: 'pt-PT',
    },
    header: {
      navHow: 'Como funciona',
      navSports: 'Desportos',
      navReliability: 'Fiabilidade',
      cta: 'Cria uma equipa',
      backToTop: 'skuader — voltar ao topo',
      navAria: 'Principal',
      langAria: 'Mudar idioma',
    },
    hero: {
      promise: 'Organiza a malta. Esquece o grupo.',
      ctaPrimary: 'Cria uma equipa',
      ctaSecondary: 'Como funciona',
    },
    problem: {
      eyebrow: 'O método antigo',
      headingL1: '40 mensagens.',
      headingL2: 'Jogo nenhum.',
      note: 'E ninguém reservou o campo. O grupo nunca ia organizar nada. Tu só querias jogar.',
      fwd: 'O skuader substitui isto tudo por um ecrã.',
      shotAlt: 'Um campo de futebol urbano vazio à noite, com uma bola deixada no círculo central',
    },
    thisweek: {
      eyebrow: 'A tua semana',
      heading: 'Todos os jogos, já tratados.',
      lead: 'Próximos jogos, quem entra, onde e quando — sem uma única captura de ecrã.',
      b1: 'Vê a tua semana num relance',
      b2: 'Quem entra, sai ou talvez',
      b3: 'Marca um jogo em 30 segundos',
      cta: 'Ver uma semana real',
    },
    how: {
      eyebrow: 'Como funciona',
      heading: 'Três jogadas. Sem grupo.',
      steps: [
        { n: '01', t: 'Lança um jogo', d: 'Escolhe a modalidade, o sítio, a hora. Diz quantos jogadores precisas. Trinta segundos, feito.' },
        { n: '02', t: 'Encontra a malta', d: 'O skuader mostra o teu jogo a jogadores perto de ti, do teu nível, e avisa primeiro os teus habituais. As vagas preenchem-se sozinhas.' },
        { n: '03', t: 'Aparece', d: 'Equipa fechada, campo reservado, toda a gente avisada uma vez. Sem andar atrás de ninguém, sem spam, sem “+1?”.' },
      ],
    },
    roster: {
      eyebrow: 'Abertos agora · A menos de 3 km',
      heading: 'É isto que a tua cidade já anda a jogar.',
      rows: [
        { sport: 'Futebol 5v5', place: 'Parque Central', time: '19:00', slots: '2 vagas', full: false },
        { sport: 'Padel', place: 'Clube Norte', time: '18:30', slots: '1 vaga', full: false },
        { sport: 'Basquetebol 3x3', place: 'Polidesportivo do Rio', time: '20:15', slots: 'COMPLETO', full: true },
        { sport: 'Corrida', place: 'Circuito do Rio', time: '07:00', slots: '3 vagas', full: false },
      ],
      note: 'As equipas atualizam ao minuto. Sem capturas — isto é o produto.',
      shotAlt: 'Vista aérea de um campo de futsal urbano iluminado entre prédios à noite',
      phoneLabel: 'A app skuader: lista de equipas num iPhone 3D',
    },
    sports: {
      eyebrow: 'Joga o que jogas',
      heading: 'Uma app. Todos os desportos que praticas.',
      list: ['Futebol', 'Padel', 'Ténis', 'Basquetebol', 'Corrida', 'Ciclismo', 'Voleibol', 'Escalada', 'Surf', 'Squash', 'Futsal', 'Caminhada'],
      live: 'AO VIVO',
      srPrefix: 'Desportos no skuader: ',
      srSuffix: ', e mais à medida que surgem equipas.',
      more: 'Mais à medida que surgem equipas.',
      shots: [
        { src: '/photos/football.webp', caption: 'Futebol 5v5', alt: 'Futebol de cinco num campo urbano gradeado e iluminado à noite' },
        { src: '/photos/padel.webp', caption: 'Padel', alt: 'Jogador de padel a esticar-se para uma voleia dentro de um campo de vidro à noite' },
        { src: '/photos/basketball.webp', caption: 'Basquetebol 3x3', alt: 'Basquetebol de rua três-contra-três sob holofotes à noite' },
      ],
    },
    squad: {
      eyebrow: 'A equipa',
      heading: 'Dentro, fora ou talvez — nunca um mistério.',
      lead: 'As etiquetas de estado acabam com a arqueologia dos “+1”. Seis dentro, um talvez, um fora — num relance, nunca a adivinhar.',
      phoneLabel: 'A app skuader: a página da equipa num iPhone 3D',
    },
    stats: [
      { value: '12k', label: 'jogos fechados esta semana', lime: false },
      { value: '12', label: 'desportos, uma app', lime: false },
      { value: '94%', label: 'taxa de comparência', lime: true },
    ],
    proof: {
      eyebrow: 'Dos refugiados dos grupos de conversa',
      heading: 'A fiabilidade agora é uma estatística.',
      lead: 'Cada perfil mostra jogos disputados, desportos, nível e um índice de fiabilidade construído a partir de presenças reais — para que quem falha sempre não tenha onde se esconder. Confirma uma vez, aparece, e o teu índice fala por ti.',
      signals: ['Índice de fiabilidade', 'Jogos disputados', 'A distância que escolhes', 'Por presenças, não por palpites'],
      phoneLabel: 'A app skuader: perfil num iPhone 3D',
      q1: 'Mudei de cidade e em quatro dias tinha padel à terça. Não conhecia ninguém.',
      q1who: 'Marta, padel',
      q2pre: 'Gerimos um futebol de cinco com 30 pessoas pelo skuader. A folha de cálculo está ',
      q2mark: 'morta',
      q2post: '.',
      q2who: 'Joel, futebol',
      q3: 'O índice de fiabilidade é brutal, e é por isso mesmo que as pessoas aparecem.',
      q3who: 'Devon, basquetebol',
    },
    closing: {
      eyebrow: 'É a tua vez',
      heading: 'Para de organizar. Começa a jogar.',
      support: 'Encontra o teu primeiro jogo esta semana. Aderir é grátis.',
      cta: 'Cria uma equipa',
      meta: 'É grátis · iOS e Android',
    },
    footer: {
      tag: 'Organiza a malta. Esquece o grupo.',
      aria: 'Rodapé',
      cols: [
        {
          h: 'Navegar',
          links: [
            { label: 'Como funciona', href: '#how-it-works' },
            { label: 'Desportos', href: '#sports' },
            { label: 'Fiabilidade', href: '#proof' },
            { label: 'Cria uma equipa', href: APP_AUTH_URL },
          ],
        },
        {
          h: 'Legal',
          links: [
            { label: 'Privacidade', href: '/privacidade' },
            { label: 'Termos', href: '/termos' },
          ],
        },
      ],
      creditLead: 'iPhone 3D:',
      creditBy: 'de',
      creditResized: '(texturas redimensionadas)',
    },
  },

  en: {
    meta: {
      title: 'skuader — organise the people. skip the group chat.',
      description:
        'skuader is the multi-sport app to find people to play with. Organise the people. Skip the group chat.',
      ogLocale: 'en',
      htmlLang: 'en',
    },
    header: {
      navHow: 'How it works',
      navSports: 'Sports',
      navReliability: 'Reliability',
      cta: 'Start a squad',
      backToTop: 'skuader — back to top',
      navAria: 'Primary',
      langAria: 'Change language',
    },
    hero: {
      promise: 'Organise the people. Skip the group chat.',
      ctaPrimary: 'Start a squad',
      ctaSecondary: 'See how it works',
    },
    problem: {
      eyebrow: 'The old way',
      headingL1: '40 messages.',
      headingL2: 'Still no game.',
      note: 'And nobody actually booked the court. The group chat was never going to organise anything. You just wanted to play.',
      fwd: 'skuader replaces all of this with one screen.',
      shotAlt: 'An empty floodlit urban football court at night, a single ball left on the centre spot',
    },
    thisweek: {
      eyebrow: 'Your week',
      heading: 'Every game, already sorted.',
      lead: "Upcoming sessions, who's in, where and when — without a single screenshot.",
      b1: 'See your week at a glance',
      b2: "Who's in, out or maybe",
      b3: 'Add a game in 30 seconds',
      cta: 'See a live week',
    },
    how: {
      eyebrow: 'How it works',
      heading: 'Three moves. No chat.',
      steps: [
        { n: '01', t: 'Drop a game', d: 'Pick a sport, a spot, a time. Say how many players you need. Thirty seconds, done.' },
        { n: '02', t: 'Find your people', d: 'skuader surfaces your game to players near you at your level, and pings your regulars first. Spots fill themselves.' },
        { n: '03', t: 'Show up', d: 'Squad’s locked, court’s set, everyone’s notified once. No chasing, no spam, no “+1?”.' },
      ],
    },
    roster: {
      eyebrow: 'Open now · Within 3 km',
      heading: 'This is what your city is already playing.',
      rows: [
        { sport: 'Football 5v5', place: 'Parque Central', time: '19:00', slots: '2 spots left', full: false },
        { sport: 'Padel', place: 'Clube Norte', time: '18:30', slots: '1 spot left', full: false },
        { sport: 'Basketball 3v3', place: 'Polidesportivo do Rio', time: '20:15', slots: 'FULL', full: true },
        { sport: 'Running', place: 'Circuito do Rio', time: '07:00', slots: '3 spots left', full: false },
      ],
      note: 'Live squads update by the minute. No screenshot — this is the product.',
      shotAlt: 'Aerial view of a floodlit urban futsal court between buildings at night',
      phoneLabel: 'The skuader app: squads list on a 3D iPhone',
    },
    sports: {
      eyebrow: 'Play whatever you play',
      heading: 'One app. Every sport you bounce between.',
      list: ['Football', 'Padel', 'Tennis', 'Basketball', 'Running', 'Cycling', 'Volleyball', 'Climbing', 'Surf', 'Squash', 'Futsal', 'Hiking'],
      live: 'LIVE',
      srPrefix: 'Sports on skuader: ',
      srSuffix: ', and more added as squads form.',
      more: 'More added as squads form.',
      shots: [
        { src: '/photos/football.webp', caption: 'Football 5v5', alt: 'Five-a-side football on a floodlit caged urban court at night' },
        { src: '/photos/padel.webp', caption: 'Padel', alt: 'Padel player stretching for a volley inside a glass court at night' },
        { src: '/photos/basketball.webp', caption: 'Basketball 3v3', alt: 'Three-on-three streetball under floodlights at night' },
      ],
    },
    squad: {
      eyebrow: 'The squad',
      heading: 'In, out, or maybe — never a mystery.',
      lead: 'Status pills replace the “+1” archaeology. Six in, one maybe, one out — at a glance, never a guess.',
      phoneLabel: 'The skuader app: the squad page on a 3D iPhone',
    },
    stats: [
      { value: '12k', label: 'games locked this week', lime: false },
      { value: '12', label: 'sports, one app', lime: false },
      { value: '94%', label: 'show-up rate', lime: true },
    ],
    proof: {
      eyebrow: 'From the group-chat refugees',
      heading: 'Reliability is a stat now.',
      lead: 'Every profile shows games played, sports, level and a reliability score built from real attendance — so serial no-shows have nowhere to hide. Confirm once, show up, and your score does the vouching.',
      signals: ['Reliability score', 'Games played', 'Distance you choose', 'Attendance-based, not vibes'],
      phoneLabel: 'The skuader app: profile on a 3D iPhone',
      q1: 'Moved cities, found a Tuesday padel game in four days. Didn’t know a soul.',
      q1who: 'Marta, padel',
      q2pre: 'We run a 30-person five-a-side off skuader now. The spreadsheet is ',
      q2mark: 'dead',
      q2post: '.',
      q2who: 'Joel, football',
      q3: 'The reliability score is brutal, and that’s exactly why people turn up.',
      q3who: 'Devon, basketball',
    },
    closing: {
      eyebrow: 'Your move',
      heading: 'Stop organising. Start playing.',
      support: 'Find your first game this week. Free to join.',
      cta: 'Start a squad',
      meta: 'It’s free · iOS & Android',
    },
    footer: {
      tag: 'Organise the people. Skip the group chat.',
      aria: 'Footer',
      cols: [
        {
          h: 'Navigate',
          links: [
            { label: 'How it works', href: '#how-it-works' },
            { label: 'Sports', href: '#sports' },
            { label: 'Reliability', href: '#proof' },
            { label: 'Start a squad', href: APP_AUTH_URL },
          ],
        },
        {
          h: 'Legal',
          links: [
            { label: 'Privacy', href: '/privacy' },
            { label: 'Terms', href: '/terms' },
          ],
        },
      ],
      creditLead: '3D iPhone:',
      creditBy: 'by',
      creditResized: '(textures resized)',
    },
  },
};

export function strings(lang: Lang) {
  return DICT[lang === 'en' ? 'en' : 'pt'];
}

// rota da outra língua, para o seletor do header
export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'pt' : 'en';
}
export function langHref(lang: Lang): string {
  return lang === 'en' ? '/en' : '/';
}

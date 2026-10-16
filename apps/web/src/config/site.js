// Dados e textos do site em um só lugar.

export const SITE = {
  name: 'Dr. Diego Zubieta',
  crm: 'CRM/SP 246.697',
  role: 'Médico residente em psiquiatria',
  whatsappNumber: '5519991412825',
  whatsappDisplay: '(19) 99141-2825',
  whatsappMessage: 'Olá, Dr. Diego! Gostaria de agendar uma consulta.',
  email: 'diegozub94@gmail.com',
};

export const NAV = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'areas', label: 'Áreas' },
  { id: 'trajetoria', label: 'Trajetória' },
  { id: 'atendimento', label: 'Atendimento' },
  { id: 'duvidas', label: 'Dúvidas' },
];

// Cada pilar corresponde a um dos quatro lobos do logo.
export const PILLARS = [
  {
    title: 'Acolhimento',
    text: 'Um espaço seguro e sem julgamentos, com tempo para ouvir a sua história.',
  },
  {
    title: 'Ética',
    text: 'Respeito à dignidade, à autonomia e ao sigilo de cada paciente.',
  },
  {
    title: 'Ciência',
    text: 'Condutas baseadas em evidências científicas e em diretrizes atualizadas.',
  },
  {
    title: 'Cuidado integral',
    text: 'Um olhar para a pessoa como um todo, e não apenas para os sintomas.',
  },
];

export const AREAS = [
  {
    title: 'Depressão',
    text: 'Acompanhamento de transtornos depressivos com abordagem individualizada e baseada em evidências.',
  },
  {
    title: 'Ansiedade',
    text: 'Transtorno de ansiedade generalizada, fobias e transtorno do pânico.',
  },
  {
    title: 'Transtorno bipolar',
    text: 'Estabilização do humor e prevenção de novas crises.',
  },
  {
    title: 'TDAH em adultos',
    text: 'Avaliação e tratamento do Transtorno de Déficit de Atenção e Hiperatividade.',
  },
  {
    title: 'Sono',
    text: 'Avaliação e tratamento da insônia e de outras alterações do sono.',
  },
  {
    title: 'Uso de substâncias',
    text: 'Avaliação e tratamento de transtornos por uso de álcool e outras substâncias.',
  },
];

export const JOURNEY = [
  {
    tag: 'Graduação',
    title: 'Medicina',
    place: 'UNIFEV · Centro Universitário de Votuporanga',
    text: 'Formação médica com base científica e humanística.',
  },
  {
    tag: 'Residência',
    title: 'Psiquiatria · último ano',
    place: 'Instituto Bairral · Itapira/SP',
    text: 'O maior complexo hospitalar de saúde mental da América Latina, referência no manejo de casos graves e complexos.',
  },
  {
    tag: 'Experiência',
    title: 'Foi responsável pelo setor de saúde mental',
    place: 'Clínica Vivare · Santo Antônio da Posse/SP',
    text: 'Atendimento acolhedor em saúde mental.',
  },
  {
    tag: 'Experiência',
    title: 'Integrou a equipe de psiquiatria',
    place: 'Hospital 22 de Outubro · Mogi Mirim/SP',
    text: 'Cuidado hospitalar em saúde mental.',
  },
];

export const LOCATIONS = {
  presencial: {
    city: 'Piracicaba/SP',
    place: 'Splendor Office',
    address: 'Rua Tiradentes, 1200 · Sala 37 · Centro',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+Tiradentes%2C+1200%2C+Centro%2C+Piracicaba+-+SP',
  },
  online: {
    reach: 'Para todo o Brasil e o mundo',
  },
};

export const STEPS = [
  {
    title: 'Mande uma mensagem',
    text: 'Fale pelo WhatsApp e, se quiser, conte um pouco do que está buscando.',
  },
  {
    title: 'Escolha como e quando',
    text: 'Combine o melhor horário e a modalidade: presencial em Piracicaba ou online.',
  },
  {
    title: 'Primeira consulta',
    text: 'Uma avaliação cuidadosa da sua história para construir, junto com você, o plano de cuidado.',
  },
];

export const FAQ = [
  {
    q: 'Como faço para agendar uma consulta?',
    a: `Pelo WhatsApp ${SITE.whatsappDisplay}. É só mandar uma mensagem com o seu nome e a modalidade que prefere.`,
  },
  {
    q: 'O atendimento é feito por plano de saúde?',
    a: 'Não. O atendimento é exclusivamente particular, tanto no consultório quanto online.',
  },
  {
    q: 'O atendimento online funciona para quem mora longe?',
    a: 'Sim. As consultas online atendem pacientes de todo o Brasil e do exterior.',
  },
  {
    q: 'Onde fica o consultório presencial?',
    a: `No ${LOCATIONS.presencial.place}, ${LOCATIONS.presencial.address}, em ${LOCATIONS.presencial.city}.`,
  },
  {
    q: 'Qual é a formação do Dr. Diego?',
    a: 'É médico formado pela UNIFEV e cursa o último ano da residência médica em Psiquiatria no Instituto Bairral, em Itapira/SP.',
  },
  {
    q: 'E se eu estiver em crise agora?',
    a: 'Este canal não atende emergências. Ligue para o CVV no 188 (gratuito, 24 horas), para o SAMU no 192 ou procure o pronto-socorro mais próximo.',
  },
];

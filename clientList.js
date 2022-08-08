const PLATFORM = {
  CP: 'CP',
  ZH: 'ZH',
  NEWZH: 'NEWZH',
};

const SERVER = {
  AWS1: 'AWS1',
  AZURE: 'AZURE',
  AWS2: 'AWS2',
  AWS3: 'AWS3',
  AWS4: 'AWS4',
  AWS5: 'AWS5',
  AWS6: 'AWS6',
  AWS8: 'AWS8',
  AWS9: 'AWS9',
  AWS10: 'AWS10',
  AWS11: 'AWS11',
  AWS12: 'AWS12',
  AWS13: 'AWS13',
  AWS13a: 'AWS13a',
  AWS15: 'AWS15',
  AWS16: 'AWS16',
  AWS17: 'AWS17',
};

const THEMES = {
  DARK: 'DARK',
  LIGHT: 'LIGHT',
  CUSTOM_DARK: 'CUSTOM_DARK',
  CUSTOM_LIGHT: 'CUSTOM_LIGHT',
};

const clientList = [
  // AWS 1 =============================================================

  { platform: PLATFORM.CP, server: SERVER.AWS1, client: '106-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS1, client: 'c6-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS1, client: 'wfcp-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS1, client: 'd8cp-m' },
  { platform: PLATFORM.ZH, server: SERVER.AWS1, client: '666-m' },
  {
    platform: PLATFORM.NEWZH,
    server: SERVER.AWS1,
    client: '977-m',
    themes: THEMES.DARK,
  },
  {
    platform: PLATFORM.NEWZH,
    server: SERVER.AWS1,
    client: 'cp12-m',
    themes: THEMES.DARK,
  },
  // { platform: PLATFORM.CP, server: SERVER.AWS1, client: 'qq-m' },

  // AZURE =============================================================

  { platform: PLATFORM.CP, server: SERVER.AZURE, client: '105cp-m' },
  { platform: PLATFORM.CP, server: SERVER.AZURE, client: '709cp-m' },
  { platform: PLATFORM.CP, server: SERVER.AZURE, client: '998-m' },
  {
    platform: PLATFORM.NEWZH,
    server: SERVER.AZURE,
    client: '933v2-m',
    themes: THEMES.DARK,
  },
  // { platform: PLATFORM.CP, server: SERVER.AWS2, client: '8ycp-m' },
  // { platform: PLATFORM.CP, server: SERVER.AWS2, client: '01cp-m' },

  // AWS 2 =============================================================

  {
    platform: PLATFORM.NEWZH,
    server: SERVER.AWS2,
    client: 'xxcp-m',
    themes: THEMES.DARK,
  },
  {
    platform: PLATFORM.NEWZH,
    server: SERVER.AWS2,
    client: 'xycp-m',
    themes: THEMES.CUSTOM_DARK,
  },
  { platform: PLATFORM.NEWZH, server: SERVER.AWS2, client: '1000-m' },
  // { platform: PLATFORM.CP, server: SERVER.AWS2, client: 'xkcp-m' },

  // AWS 3 =============================================================

  { platform: PLATFORM.CP, server: SERVER.AWS3, client: 'cp77-m' },
  {
    platform: PLATFORM.NEWZH,
    server: SERVER.AWS3,
    client: '168-m',
    themes: THEMES.LIGHT,
  },
  {
    platform: PLATFORM.NEWZH,
    server: SERVER.AWS3,
    client: '779-m',
    themes: THEMES.CUSTOM_LIGHT,
  },
  // { platform: PLATFORM.CP, server: SERVER.AWS3, client: 'awcp-m' },

  // AWS 4 =============================================================

  // { platform: PLATFORM.CP, server: SERVER.AWS4, client: 'yycp-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS4, client: '365-m' },

  // AWS 5 =============================================================

  { platform: PLATFORM.CP, server: SERVER.AWS5, client: '038-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS5, client: '118-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS5, client: '978cp-m' },
  {
    platform: PLATFORM.NEWZH,
    server: SERVER.AWS5,
    client: '758-m',
    themes: THEMES.DARK,
  },
  // {
  //   platform: PLATFORM.NEWZH,
  //   server: SERVER.AWS5,
  //   client: '555-m',
  //   themes: THEMES.DARK,
  // },
  // { platform: PLATFORM.CP, server: SERVER.AWS5, client: 'wyzcp-m' },

  // AWS 6 =============================================================

  { platform: PLATFORM.CP, server: SERVER.AWS6, client: 'mxcp-m' },
  {
    platform: PLATFORM.NEWZH,
    server: SERVER.AWS6,
    client: 'djcp-m',
    themes: THEMES.LIGHT,
  },
  // { platform: PLATFORM.CP, server: SERVER.AWS6, client: 'c8-m' },
  // {
  //   platform: PLATFORM.NEWZH,
  //   server: SERVER.AWS6,
  //   client: '96cc-m',
  //   themes: THEMES.CUSTOM_DARK,
  // },
  // { platform: PLATFORM.CP, server: SERVER.AWS6, client: 'scw-m' },

  // AWS 8 =============================================================

  { platform: PLATFORM.CP, server: SERVER.AWS8, client: 'bzcp-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS8, client: '656cp-m' },
  {
    platform: PLATFORM.NEWZH,
    server: SERVER.AWS8,
    client: '570-m',
    themes: THEMES.CUSTOM_DARK,
  },
  // { platform: PLATFORM.CP, server: SERVER.AWS8, client: '888cp-m' },
  // {
  //   platform: PLATFORM.NEWZH,
  //   server: SERVER.AWS8,
  //   client: '51cp-m',
  //   themes: THEMES.DARK,
  // },
  // {
  //   platform: PLATFORM.NEWZH,
  //   server: SERVER.AWS8,
  //   client: '91cp-m',
  //   themes: THEMES.DARK,
  // },

  // AWS 9 =============================================================

  { platform: PLATFORM.CP, server: SERVER.AWS9, client: 'c5-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS9, client: '959-m' },
  {
    platform: PLATFORM.NEWZH,
    server: SERVER.AWS9,
    client: '626-m',
    themes: THEMES.CUSTOM_LIGHT,
  },
  {
    platform: PLATFORM.NEWZH,
    server: SERVER.AWS9,
    client: '7755-m',
    themes: THEMES.DARK,
  },
  // { platform: PLATFORM.CP, server: SERVER.AWS9, client: '113-m' },

  // AWS 10 =============================================================

  { platform: PLATFORM.CP, server: SERVER.AWS10, client: '767-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS10, client: '668cp-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS10, client: '008cp-m' },
  {
    platform: PLATFORM.NEWZH,
    server: SERVER.AWS10,
    client: '109-m',
    themes: THEMES.DARK,
  },
  // {
  //   platform: PLATFORM.NEWZH,
  //   server: SERVER.AWS10,
  //   client: '125-m',
  //   themes: THEMES.CUSTOM_LIGHT,
  // },
  // {
  //   platform: PLATFORM.NEWZH,
  //   server: SERVER.AWS10,
  //   client: '099cp-m',
  //   themes: THEMES.DARK,
  // },

  // AWS 11 =============================================================

  { platform: PLATFORM.CP, server: SERVER.AWS11, client: '901-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS11, client: '101-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS11, client: '890-m' },
  {
    platform: PLATFORM.NEWZH,
    server: SERVER.AWS11,
    client: '355-m',
    themes: THEMES.DARK,
  },
  {
    platform: PLATFORM.NEWZH,
    server: SERVER.AWS11,
    client: '315-m',
    themes: THEMES.CUSTOM_LIGHT,
  },

  // AWS 12 =============================================================

  {
    platform: PLATFORM.NEWZH,
    server: SERVER.AWS12,
    client: '957-m',
    themes: THEMES.CUSTOM_DARK,
  },

  // AWS 13 =============================================================

  {
    platform: PLATFORM.NEWZH,
    server: SERVER.AWS13,
    client: 'fl-m', // also known as 833
    themes: THEMES.DARK,
  },
  {
    platform: PLATFORM.NEWZH,
    server: SERVER.AWS13,
    client: 'ttf-m',
    themes: THEMES.DARK,
  },

  // AWS 13a =============================================================

  {
    platform: PLATFORM.NEWZH,
    server: SERVER.AWS13a,
    client: '9hcp-m',
    themes: THEMES.CUSTOM_DARK,
  },
  {
    platform: PLATFORM.NEWZH,
    server: SERVER.AWS13a,
    client: 'hck-m',
    themes: THEMES.DARK,
  },

  // AWS 16 =============================================================

  {
    platform: PLATFORM.NEWZH,
    server: SERVER.AWS16,
    client: 'tty-m',
    themes: THEMES.LIGHT,
  },
  {
    platform: PLATFORM.NEWZH,
    server: SERVER.AWS16,
    client: '4gcp-m',
    themes: THEMES.CUSTOM_DARK,
  },

  // AWS 17 =============================================================

  {
    platform: PLATFORM.NEWZH,
    server: SERVER.AWS17,
    client: 'hcp-m',
    themes: THEMES.LIGHT,
  },
  // {
  //   platform: PLATFORM.NEWZH,
  //   server: SERVER.AWS17,
  //   client: 'hycp-m',
  //   themes: THEMES.DARK,
  // },
  // { platform: PLATFORM.NEWZH, server: SERVER.AWS17, client: '309cp-m' },
];

export { PLATFORM, SERVER, THEMES, clientList };

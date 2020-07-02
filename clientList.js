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

const clientList = [
  { platform: PLATFORM.CP, server: SERVER.AWS1, client: '106-m' },
  { platform: PLATFORM.NEWZH, server: SERVER.AWS1, client: '306-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS1, client: 'c6-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS1, client: 'qq-m' },
  { platform: PLATFORM.ZH, server: SERVER.AWS1, client: '666-m' },
  { platform: PLATFORM.NEWZH, server: SERVER.AWS1, client: '977-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS1, client: 'wfcp-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS1, client: 'd8cp-m' },
  { platform: PLATFORM.NEWZH, server: SERVER.AWS1, client: 'cp12-m' },

  { platform: PLATFORM.CP, server: SERVER.AZURE, client: '105cp-m' },
  { platform: PLATFORM.CP, server: SERVER.AZURE, client: '709cp-m' },
  { platform: PLATFORM.NEWZH, server: SERVER.AZURE, client: '933v2-m' },
  { platform: PLATFORM.CP, server: SERVER.AZURE, client: '998-m' },

  { platform: PLATFORM.CP, server: SERVER.AWS2, client: '8ycp-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS2, client: '01cp-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS2, client: 'xkcp-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS2, client: 'lcw-m' },
  { platform: PLATFORM.NEWZH, server: SERVER.AWS2, client: 'xxcp-m' },
  { platform: PLATFORM.NEWZH, server: SERVER.AWS2, client: 'xycp-m' },
  { platform: PLATFORM.ZH, server: SERVER.AWS2, client: '1000-m' },

  { platform: PLATFORM.CP, server: SERVER.AWS3, client: '168-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS3, client: 'cp77-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS3, client: 'awcp-m' },
  { platform: PLATFORM.NEWZH, server: SERVER.AWS3, client: '779-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS3, client: '234-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS3, client: '093cp-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS3, client: '123cp-m' },

  { platform: PLATFORM.CP, server: SERVER.AWS4, client: 'yycp-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS4, client: '365-m' },

  { platform: PLATFORM.CP, server: SERVER.AWS5, client: '038-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS5, client: '118-m' },
  { platform: PLATFORM.NEWZH, server: SERVER.AWS5, client: '555-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS5, client: 'wyzcp-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS5, client: '978cp-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS5, client: '758-m' },

  { platform: PLATFORM.CP, server: SERVER.AWS6, client: 'mxcp-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS6, client: 'c8-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS6, client: 'scw-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS6, client: '96cc-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS6, client: 'djcp-m' },

  { platform: PLATFORM.CP, server: SERVER.AWS8, client: '51cp-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS8, client: '91cp-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS8, client: '888cp-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS8, client: '656cp-m' },
  { platform: PLATFORM.NEWZH, server: SERVER.AWS8, client: '570-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS8, client: 'bzcp-m' },

  { platform: PLATFORM.CP, server: SERVER.AWS9, client: '7755-m' },
  { platform: PLATFORM.NEWZH, server: SERVER.AWS9, client: '626-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS9, client: '959-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS9, client: 'c5-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS9, client: '113-m' },

  { platform: PLATFORM.CP, server: SERVER.AWS10, client: '767-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS10, client: '668cp-m' },
  { platform: PLATFORM.NEWZH, server: SERVER.AWS10, client: '125-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS10, client: '109-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS10, client: '099cp-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS10, client: '008cp-m' },

  { platform: PLATFORM.CP, server: SERVER.AWS11, client: '03cp-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS11, client: '101-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS11, client: '890-m' },
  { platform: PLATFORM.NEWZH, server: SERVER.AWS11, client: '355-m' },
  { platform: PLATFORM.ZH, server: SERVER.AWS11, client: '315-m' },
  { platform: PLATFORM.CP, server: SERVER.AWS11, client: '901-m' },

  { platform: PLATFORM.NEWZH, server: SERVER.AWS12, client: '957-m' },

  { platform: PLATFORM.NEWZH, server: SERVER.AWS13, client: '833-m' },

  { platform: PLATFORM.NEWZH, server: SERVER.AWS13a, client: '9hcp-m' },

  { platform: PLATFORM.NEWZH, server: SERVER.AWS15, client: '703cp-m' },

  { platform: PLATFORM.NEWZH, server: SERVER.AWS16, client: 'tty-m' },
  { platform: PLATFORM.NEWZH, server: SERVER.AWS16, client: '4gcp-m' },

  { platform: PLATFORM.NEWZH, server: SERVER.AWS17, client: '309cp-m' },
  { platform: PLATFORM.NEWZH, server: SERVER.AWS17, client: 'hycp-m' },
];

module.exports.PLATFORM = PLATFORM;
module.exports.SERVER = SERVER;
module.exports.clientList = clientList;

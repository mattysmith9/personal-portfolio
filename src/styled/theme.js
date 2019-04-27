const theme = {
  colors: {
    items: '#f6faff',
    blue: '#355c7d',
    green: '#13ab89',
    orange: '#774A62',
    teal: '#2aa1af',
    grey: '#4D5B6B',
    modal: '#44545f',
    footer: '#e3f0fc',
    yellow: '#f3b80b',
    header: '#b1aeba',
    scroll: '#bcc7cf',
  },

  gradient:
    'linear-gradient(to bottom, #657d8d, #5d7381, #556976, #4d5f6b, #455560);',

  fontSizes: {
    small: '13px',
    medium: '14px',
  },

  fontFamily: 'Roboto sans-serif',
  fontFamilyBtn: 'Poppins sans-serif',
  subsets: 'latin',
  fontDisplay: 'auto',
  footerSize: '1.1rem',
  navWeight: '100',
  borderRadiusBtn: '8px',
  borderRadiusCard: '4px',

  transition: 'ease-in-out',
  transform: 'scale(1)',
  boxShadow: '0 5px 9px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.2)',

  gridTemplateColumnsDesk: 'repeat(3, 1fr)',
  gridTemplateColumnsMob9: 'repeat(2, 1fr)',
  gridTemplateColumnsMob6: '1fr',
  gridTemplateRows: '8fr',
  gap: '1.2rem 1.2rem',

  hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,
};

export default theme;

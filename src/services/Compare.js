const compare = (a, b, simbol) => {
  switch (simbol) {
  case 'maior que':
    return (+a > +b);
  case 'menor que':
    return (+a < +b);
  case 'igual a':
    return (+a === +b);
  default:
    return null;
  }
};

export default compare;

const messageEmailInvalid = 'E-mail Inválido!';
const messageInvalid = 'Valor do campo não é válido.';

export const required = v => !!v || 'Este campo é obrigatório';

export const email = v => {
  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (v) {
    return pattern.test(v) || messageEmailInvalid;
  } else {
    return true;
  }
};

export const cpf = v => {
  if (v === null || v === undefined || v === '') return false;

  v = v.replace(/\-/g, '').replace(/\./g, '');

  if (!/^[0-9]+$/.test(v)) return messageInvalid;

  if (
    v.length != 11 ||
    v == '191' ||
    v == '00000000000' ||
    v == '11111111111' ||
    v == '22222222222' ||
    v == '33333333333' ||
    v == '44444444444' ||
    v == '55555555555' ||
    v == '66666666666' ||
    v == '77777777777' ||
    v == '88888888888' ||
    v == '99999999999'
  ) {
    return messageInvalid;
  }

  let total, index, leftover, verifyingDigit, counter;

  if (v.length >= 11) {
    index = 2;
    total = 0;
    leftover = 0;
    verifyingDigit = 0;

    for (counter = -9; counter <= -1; counter++) {
      total = total + Math.abs(v.substr(Math.abs(counter) - 1, 1) * index);
      index = index + 1;
    }

    leftover = total % 11;

    leftover === 0 || leftover === 1 ? (verifyingDigit = 0) : (verifyingDigit = 11 - leftover);

    if ('' + v.substr(9, 1) != '' + verifyingDigit) {
      return messageInvalid;
    }

    index = 2;
    total = 0;
    leftover = 0;
    verifyingDigit = 0;

    for (counter = -10; counter <= -1; counter++) {
      total = total + Math.abs(v.substr(Math.abs(counter) - 1, 1) * index);
      index = index + 1;
    }

    leftover = total % 11;

    leftover === 0 || leftover === 1 ? (verifyingDigit = 0) : (verifyingDigit = 11 - leftover);

    if ('' + v.substr(10, 1) !== '' + verifyingDigit) {
      return messageInvalid;
    }
  }

  return true;
};

export const cnpj = v => {
  if (v === null || v === undefined || v === '') return false;

  v = v
    .replace(/\-/g, '')
    .replace(/\./g, '')
    .replace(/\//g, '');

  if (!/^[0-9]+$/.test(v)) return messageInvalid;

  if (
    v.length != 14 ||
    v == '00000000000000' ||
    v == '11111111111111' ||
    v == '22222222222222' ||
    v == '33333333333333' ||
    v == '44444444444444' ||
    v == '55555555555555' ||
    v == '66666666666666' ||
    v == '77777777777777' ||
    v == '88888888888888' ||
    v == '99999999999999'
  ) {
    return messageInvalid;
  }

  if (v.length >= 14) {
    let total = 0,
      index = 2,
      leftover = 0,
      verifyingDigit = 0,
      counter = 0;

    for (counter = -12; counter <= -1; counter++) {
      total = total + Math.abs(v.substr(Math.abs(counter) - 1, 1)) * index;

      index === 9 ? (index = 2) : (index = index + 1);
    }

    leftover = total % 11;

    leftover === 0 || leftover === 1 ? (verifyingDigit = 0) : (verifyingDigit = 11 - leftover);

    if ('' + v.substr(12, 1) !== '' + verifyingDigit) {
      return messageInvalid;
    }

    index = 2;
    total = 0;
    leftover = 0;
    verifyingDigit = 0;

    for (counter = -13; counter <= -1; counter++) {
      total = total + Math.abs(v.substr(Math.abs(counter) - 1, 1)) * index;

      index === 9 ? (index = 2) : (index = index + 1);
    }

    leftover = total % 11;

    leftover === 0 || leftover === 1 ? (verifyingDigit = 0) : (verifyingDigit = 11 - leftover);

    if ('' + v.substr(13, 1) !== '' + verifyingDigit) {
      return messageInvalid;
    }
  }

  return true;
};

export const unmask = text => {
  if (text) {
    const defaultDelimiters = /[-!$%^&*()_+|~=`{}[\]:";'<>?,./\\ ]/;

    return String(text).replace(new RegExp(defaultDelimiters, 'g'), '');
  }

  return null;
};

const regexCaracter = /^[a-zA-Z0-9]+$/;

export const formatMoney = value => {
  let number = parseFloat(value).toFixed(2).split('.');
  number[0] = number[0].split(/(?=(?:...)*$)/).join('.');

  return `R$ ${number.join(',')}`;
};

export const formatDate = value => {
  try {
    if (value) {
      value = new Date(value);

      let day = value.getDate().toString().padStart(2, '0');
      let month = (value.getMonth() + 1).toString().padStart(2, '0');
      let year = value.getFullYear();

      return `${day}/${month}/${year}`;
    } else {
      return '';
    }
  } catch (error) {
    throw Error(error);
  }
};

export const formatDecimal = value => {
  if (typeof value == 'number') {
    let currencySymbol = 'R$';

    let number = parseFloat(value).toFixed(2).split('.');
    number[0] = number[0].split(/(?=(?:...)*$)/).join('.');

    return `${currencySymbol} ${number.join(',')}`;
  }

  return value;
};

export const formatZipCode = value => {
  if (value && regexCaracter.test(value)) {
    let valueString = value.toString();

    if (valueString.length == 8) {
      let regex = /([0-9]{5})([0-9]{3})/;
      let valueSplit = regex.exec(valueString);

      return `${valueSplit[1]}-${valueSplit[2]}`;
    }
  }

  return value;
};

export const formatPhone = value => {
  if (value && regexCaracter.test(value)) {
    let valueString = value.toString();

    if (valueString.toString().length == 10) {
      let regex = /([0-9]{2})([0-9]{4})([0-9]{4})/;
      let valueSplit = regex.exec(valueString);

      return `(${valueSplit[1]}) ${valueSplit[2]}-${valueSplit[3]}`;
    } else if (valueString.toString().length == 11) {
      let regex = /([0-9]{2})([0-9]{5})([0-9]{4})/;
      let valueSplit = regex.exec(valueString);

      return `(${valueSplit[1]}) ${valueSplit[2]}-${valueSplit[3]}`;
    }
  }

  return value;
};

export const formatCpf = value => {
  if (value && regexCaracter.test(value)) {
    let valueString = value.toString();

    if (valueString.toString().length == 11) {
      let regex = /(\d{3})(\d{3})(\d{3})(\d{2})$/;
      let valueSplit = regex.exec(valueString);

      return `${valueSplit[1]}.${valueSplit[2]}.${valueSplit[3]}-${valueSplit[4]}`;
    }
  }

  return value;
};

export const formatCNPJ = value => {
  if (value && regexCaracter.test(value)) {
    let valueString = value.toString();

    if (valueString.toString().length == 14) {
      let regex = /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g;
      let valueSplit = regex.exec(valueString);

      return `${valueSplit[1]}.${valueSplit[2]}.${valueSplit[3]}/${valueSplit[4]}-${valueSplit[5]}`;
    }
  }

  return value;
};

export const formatPercentageSymbol = value => {
  if (/\d */g.test(value)) {
    let valueString = value.toString();

    if (valueString.toString().length > 0) {
      let valueSplit = valueString.replace(/[ÁÉÍÓÚáéíóúâêîôûàèìòùÇçãõ/.,~!@#$%&_-]*/g, '').replace(/[a-z-A-Z]*/g, '');

      return `${valueSplit} %`;
    }
  }

  return value;
};

export const doTruncateText = (text, limit) => {
  if (text.length < limit || text === null) return text;

  limit--;
  let last;

  last = text.substr(limit - 1, 1);

  while (last !== ' ' && limit > 0) {
    limit--;
    last = text.substr(limit - 1, 1);
  }

  last = text.substr(limit - 2, 1);

  if (last == ',' || last == ';' || last == ':') return `${text.substr(0, limit - 2)} ...`;

  if (last == '.' || last == '?' || last == '!') return text.substr(0, limit - 1);

  return `${text.substr(0, limit - 1)} ...`;
};

const b64toBlob = (b64Data, contentType, sliceSize) => {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);
    const byteNumbers = new Array(slice.length);

    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, {
    type: contentType
  });

  return blob;
};

export const downloadFile = (data, contentType, extension, fileName) => {
  const blob = b64toBlob(data, contentType, 512);
  const blobUrl = window.URL.createObjectURL(blob);

  let tag = document.createElement('a');
  tag.className = 'download-file';
  tag.style = 'display: none';
  tag.href = blobUrl;
  tag.download = fileName ? `${fileName}.${extension}` : `file-${new Date().getTime()}.${extension}`;

  document.body.appendChild(tag);
  tag.click();
  window.URL.revokeObjectURL(blobUrl);
  document.getElementsByClassName('download-file')[0].remove();
};

export const formatBytes = bytes => {
  if (bytes) {
    bytes = bytes * 1000;

    let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

    if (bytes == 0) return '0 Byte';

    let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));

    return `${Math.round(bytes / Math.pow(1024, i), 2)} ${sizes[i]}`;
  }

  return bytes;
};

export const convertSecondInMilisecounds = seconds => {
  return ((seconds % 60000) * 1000).toFixed(0);
};

export const getColor = status => {
  let color = {
    Ativo: 'success--text',
    Inativo: 'error--text',
    default: ''
  };

  return color[status] || color['default'];
};

export const getIconProduct = param => {
  let icons = {
    true: 'check_circle',
    false: 'not_interested',
    default: ''
  };

  return icons[param] || icons['default'];
};

export const checkApi = url => {
  return url.includes('https://viacep.com.br/');
};

export const randomId = () => {
  const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);

  return `${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
};

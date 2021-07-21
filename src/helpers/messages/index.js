import Swal from 'sweetalert2';
import * as HANDLERS from '@/helpers/handlers';
import eventBus from 'vue-option-events';

export const showMessage = (type, message, timer = 6000) => {
  let newMessage = '';

  if (message) {
    const Toast = Swal.mixin({
      position: 'top-end',
      showConfirmButton: false,
      timer: timer,
      timerProgressBar: true,
      toast: true
    });

    if (Array.isArray(message)) {
      message.map(item => (newMessage += `${item} <br>`));
    } else {
      newMessage = message;
    }

    return Toast.fire({
      icon: type,
      title: newMessage
    });
  }

  throw new Error('Obrigatório passar como parâmetro uma mensagem!');
};

export const showMessageErrorModal = message => {
  if (message) {
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      html: message,
      width: '600px',
      confirmButtonColor: '#ff5252'
    });
  }

  throw new Error('Obrigatório passar como parâmetro uma mensagem!');
};

export const confirmMessage = async (title, text, item, handler_name) => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      cancelButton: `v-btn v-btn--contained theme--dark v-size--default`,
      confirmButton: `v-btn v-btn--contained theme--dark v-size--default`
    },
    buttonsStyling: false
  });

  const result = await swalWithBootstrapButtons.fire({
    title,
    html: text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Confirmar',
    reverseButtons: true,
    cancelButtonText: 'Cancelar'
  });

  if (result.value) {
    eventBus.$emit(HANDLERS[handler_name], item);
  }
};

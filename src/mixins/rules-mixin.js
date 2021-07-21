import { required, email, cpf, cnpj } from '@/helpers/validations';

const rulesMixin = {
  data() {
    return {
      required,
      email,
      cpf,
      cnpj
    };
  }
};

export default rulesMixin;

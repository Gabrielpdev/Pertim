import React, { useState } from 'react';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';
import { Form, Input } from '@rocketseat/unform';
import { MdArrowBack, MdCheck } from 'react-icons/md';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { Container, Button } from './styles';

const schema = Yup.object().shape({
  inicio: Yup.string()
    .min(8, 'É obrigatório completar o campo')
    .required('Este campo é obrigatório'),
  fim: Yup.string()
    .min(8, 'É obrigatório completar o campo')
    .required('Este campo é obrigatório'),
});

function Horario() {
  const [inicio, setInicio] = useState('');
  const [fim, setFim] = useState('');

  async function handleSubmit() {
    try {
      await api.post('/funcionamentos', {
        inicio,
        fim,
      });

      history.push('/funcionamento/add');
      toast.success('Horário de funcionamento cadastrado !');
    } catch (err) {
      toast.error('Erro ao cadastrar horárrio de funcionamento');
    }
  }

  return (
    <Container>
      <strong>Cadastro de Funcionamento</strong>
      <Form onSubmit={handleSubmit} schema={schema}>
        <div className="esquerda">
          <strong>Inicio:</strong>
          <InputMask
            mask="99:99:99"
            maskChar=""
            onChange={(e) => setInicio(e.target.value)}
          >
            {() => (
              <Input name="inicio" type="text" placeholder="Ex.: 00:00:00" />
            )}
          </InputMask>
        </div>

        <div className="direita">
          <strong>Fim:</strong>
          <InputMask
            mask="99:99:99"
            maskChar=""
            onChange={(e) => setFim(e.target.value)}
          >
            {() => <Input name="fim" type="text" placeholder="Ex.: 00:00:00" />}
          </InputMask>
        </div>

        <div />
        <div className="footer">
          <Button
            type="button"
            onClick={() => history.push('/funcionamento/add')}
          >
            <MdArrowBack size={20} color="#37759e" />
            VOLTAR
          </Button>
          <Button className="salvar" type="submit">
            <MdCheck size={20} color="#37759e" />
            SALVAR
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Horario;

import React, { useEffect, useState, useMemo } from 'react';
import { Form } from '@rocketseat/unform';
import { MdArrowBack, MdCheck, MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import Select from '~/components/Select';

import { Container, Button, AddButton } from './styles';

function Add() {
  const [dias, setDias] = useState([]);
  const [diaSelecionado, setDiaSelecionado] = useState();
  const [horairos, setHorarios] = useState([]);
  const [horarioSelecionado, setHorarioSelecionado] = useState();

  useEffect(() => {
    async function carregarDiasEHorairos() {
      const responseDias = await api.get('dias');
      const responseHorarios = await api.get('funcionamentos');

      setDias(responseDias.data);
      setHorarios(responseHorarios.data);
    }
    carregarDiasEHorairos();
  }, []);

  const OpcoesHorario = useMemo(() => {
    return horairos.map((horario) => ({
      value: horario,
      label: `${horario.inicio} - ${horario.fim}`,
    }));
  }, [horairos]);

  const OpcoesDia = useMemo(() => {
    return dias.map((dia) => ({
      value: dia,
      label: dia.nome,
    }));
  }, [dias]);

  const TrocarHorario = (selectedOption) => {
    const { value } = selectedOption;

    setHorarioSelecionado(value.id);
  };

  const TrocarDia = (selectedOption) => {
    const { value } = selectedOption;

    setDiaSelecionado(value.id);
  };

  async function handleSubmit() {
    try {
      await api.post('/funcionamento-dia', {
        funcionamento_id: horarioSelecionado,
        dia_id: diaSelecionado,
      });

      history.push('/funcionamento');
      toast.success('Funcionamento cadastrado !');
    } catch (err) {
      toast.error(
        'Erro ao cadastrar funcionamento, Verifique se o dia e horário já nao estão cadastrados'
      );
    }
  }

  return (
    <Container>
      <strong>Cadastro de Funcionamento</strong>
      <Form onSubmit={handleSubmit}>
        <div>
          <Select
            visivel
            label="Horários Cadastrados:"
            value={horarioSelecionado}
            onChange={TrocarHorario}
            options={OpcoesHorario}
            placeholder="Selecione o horário"
            defaultValue={undefined}
          />
        </div>
        <Select
          visivel
          label="Dias Cadastrados:"
          value={diaSelecionado}
          onChange={TrocarDia}
          options={OpcoesDia}
          placeholder="Selecione o dia"
          defaultValue={undefined}
        />
        <AddButton
          type="button"
          onClick={() => history.push('/funcionamento/add/horario')}
        >
          <MdAdd size={20} color="#37759e" />
          <strong>Adicionar horário</strong>
        </AddButton>
        <div className="footer">
          <Button type="button" onClick={() => history.push('/funcionamento')}>
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

export default Add;

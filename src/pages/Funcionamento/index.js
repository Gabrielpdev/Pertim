/* eslint-disable no-nested-ternary */
import React, { useEffect, useState, useMemo } from 'react';
import { Form } from '@rocketseat/unform';
import { MdArrowBack, MdCheck, MdAdd, MdDelete } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';

import history from '~/services/history';
import api from '~/services/api';

import Select from '~/components/Select';

import { Container, Funionamentos, Button, AddButton } from './styles';

function Funcionamento() {
  const usuarioFun = useSelector((state) => state.user.empresa.funcionamento);

  const [dias, setDias] = useState([]);
  const [diaSelecionado, setDiaSelecionado] = useState();
  const [horairos, setHorarios] = useState([]);
  const [horarioSelecionado, setHorarioSelecionado] = useState();
  const [funcionamentosDias, setFuncionamentosDias] = useState([]);
  const [funcionamentoSelecionado, setFuncionamentoSelecionado] = useState();

  const [funcionamentos, setFuncionamentos] = useState(usuarioFun);

  useEffect(() => {
    async function carregarDiasEHorairos() {
      const responseDias = await api.get('dias');
      const responseHorarios = await api.get('funcionamentos');
      const responseFuncionamentosDias = await api.get('funcionamento-dia');

      setFuncionamentosDias(responseFuncionamentosDias.data);
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

  const OpcoesFuncionamento = useMemo(() => {
    return funcionamentosDias.map((funcionamento) => ({
      value: funcionamento,
      label: `${funcionamento.dia.nome} --
      ${funcionamento.funcionamento.inicio} -
      ${funcionamento.funcionamento.fim} `,
    }));
  }, [funcionamentosDias]);

  const TrocarHorario = (selectedOption) => {
    const { value } = selectedOption;

    setHorarioSelecionado(value.id);
  };

  const TrocarDia = (selectedOption) => {
    const { value } = selectedOption;

    setDiaSelecionado(value.id);
  };

  const TrocarFuncionamento = (selectedOption) => {
    const { value } = selectedOption;

    setFuncionamentoSelecionado(value.id);
  };

  async function deletarFuncionamento(id) {
    for (let i = 0; i < funcionamentos.length; i++) {
      console.tron.log(funcionamentos[i]);
    }
  }

  async function handleSubmit(data) {
    // if (!horarioSelecionado || !diaSelecionado) {
    //   console.tron.log('Dados incompletos');
    // } else {
    //   data.horario = horarioSelecionado;
    //   data.dia = diaSelecionado;
    //   data.funcionamento = funcionamentoSelecionado;
    // }
  }

  return (
    <Container>
      <strong>Cadastro de Funcionalidade</strong>
      <Form onSubmit={handleSubmit}>
        <div className="esquerda">
          <AddButton type="button" onClick={() => {}}>
            <MdAdd size={20} color="#37759e" />
          </AddButton>
          <Select
            visivel
            label="Horários Cadastrados:"
            value={horarioSelecionado}
            onChange={TrocarHorario}
            options={OpcoesHorario}
            placeholder="Selecione o horário"
            defaultValue={undefined}
          />
          <Select
            visivel
            label="Dias Cadastrados:"
            value={diaSelecionado}
            onChange={TrocarDia}
            options={OpcoesDia}
            placeholder="Selecione o dia"
            defaultValue={undefined}
          />
        </div>
        <div className="direita">
          <Select
            visivel
            funcionamento
            label="Funcionamentos Cadastrados:"
            value={funcionamentoSelecionado}
            onChange={TrocarFuncionamento}
            options={OpcoesFuncionamento}
            placeholder="Selecione o horário de funcionamento"
            defaultValue={undefined}
          />
          <Funionamentos>
            <strong>Funcionamento da empresa</strong>
            {funcionamentos.map((funcionamento) => (
              <div>
                <text>
                  {funcionamento.dia.nome} --{' '}
                  {funcionamento.funcionamento.inicio} -{' '}
                  {funcionamento.funcionamento.fim}
                </text>
                <button
                  type="button"
                  onClick={() => deletarFuncionamento(funcionamento.id)}
                >
                  <MdDelete size={15} color="#37759e" />
                </button>
              </div>
            ))}
          </Funionamentos>
        </div>
        <div />
        <div className="footer">
          <Button type="button" onClick={() => history.push('/dashboard')}>
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

export default Funcionamento;

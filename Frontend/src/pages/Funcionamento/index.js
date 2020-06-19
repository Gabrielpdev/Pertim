/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { Form } from '@rocketseat/unform';
import { MdArrowBack, MdCheck, MdAdd, MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';

import history from '~/services/history';
import api from '~/services/api';

import { Container, Funionamentos, Button, AddButton } from './styles';

import { UpdateEmpresaRequest } from '~/store/modules/user/actions';

function Funcionamento() {
  const empresaID = useSelector((state) => state.user.empresa.id);
  const usuarioFun = useSelector((state) => state.user.empresa.funcionamento);

  const [funcionamentosDias, setFuncionamentosDias] = useState([]);
  const [funcionamentoSelecionado, setFuncionamentoSelecionado] = useState(
    usuarioFun
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function carregarDiasEHorairos() {
      const responseFuncionamentosDias = await api.get('funcionamento-dia');

      setFuncionamentosDias(responseFuncionamentosDias.data);
    }
    carregarDiasEHorairos();
  }, []);

  function handleSelectItem(id, dia) {
    const alreadySelected = funcionamentoSelecionado.findIndex(
      (item) => item.id === id
    );

    if (alreadySelected >= 0) {
      const filteredItens = funcionamentoSelecionado.filter(
        (item) => item.id !== id
      );

      setFuncionamentoSelecionado(filteredItens);
    } else {
      const checarDia = funcionamentoSelecionado.find(
        (item) => item.dia_id === dia
      );

      if (checarDia) {
        toast.error('Dia já usado pela empresa!');
      } else if (funcionamentoSelecionado.length < 7) {
        const filteredItens = funcionamentosDias.find((item) => item.id === id);

        setFuncionamentoSelecionado([
          ...funcionamentoSelecionado,
          filteredItens,
        ]);
      }
    }
  }

  async function deletarFuncionamento(id) {
    const filteredItens = funcionamentoSelecionado.filter(
      (item) => item.id !== id
    );

    setFuncionamentoSelecionado(filteredItens);
  }

  async function handleSubmit() {
    try {
      const funcionamentos = [];
      for (let i = 0; i < funcionamentoSelecionado.length; i += 1) {
        funcionamentos.push(funcionamentoSelecionado[i].id);
      }

      dispatch(
        UpdateEmpresaRequest({
          id: empresaID,
          funcionamento_id: funcionamentos,
        })
      );
      history.push('/dashboard');
      toast.success('Funcionamentos cadastrados');
    } catch (err) {
      toast.error('Erro ao cadastrar funcionamento!');
    }
  }

  return (
    <Container>
      <strong>Funcionamento</strong>
      <Form onSubmit={handleSubmit}>
        <div className="esquerda">
          <strong>Funcionamentos cadastrados</strong>
          <Funionamentos>
            {funcionamentosDias.map((funcionamento) => (
              <div>
                <button
                  onClick={() =>
                    handleSelectItem(funcionamento.id, funcionamento.dia_id)
                  }
                  type="button"
                  className={
                    funcionamentoSelecionado.find(
                      (func) => func.id === funcionamento.id
                    )
                      ? 'selecionado'
                      : 'funcionamentos'
                  }
                >
                  {funcionamento.dia.nome} --{' '}
                  {funcionamento.funcionamento.inicio} -{' '}
                  {funcionamento.funcionamento.fim}
                </button>
              </div>
            ))}
          </Funionamentos>
        </div>

        <div className="direita">
          <strong>Funcionamento da empresa</strong>
          <Funionamentos>
            {funcionamentoSelecionado.map((funcionamento) => (
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
        <AddButton
          type="button"
          onClick={() => history.push('/funcionamento/add')}
        >
          <MdAdd size={20} color="#37759e" />
          <strong>Adicionar funcionamentos</strong>
        </AddButton>
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

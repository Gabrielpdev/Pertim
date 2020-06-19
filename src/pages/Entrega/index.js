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

function Entrega() {
  const empresaID = useSelector((state) => state.user.empresa.id);
  const usuarioEntrega = useSelector((state) => state.user.empresa.entrega);

  const [entregasDias, setentregasDias] = useState([]);
  const [entregasSelecionadas, setEntregasSelecionadas] = useState(
    usuarioEntrega
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function carregarDiasEHorairos() {
      const responseEntregasDias = await api.get('entrega-dia');

      setentregasDias(responseEntregasDias.data);
    }
    carregarDiasEHorairos();
  }, []);

  function handleSelectItem(id, dia) {
    const alreadySelected = entregasSelecionadas.findIndex(
      (item) => item.id === id
    );

    if (alreadySelected >= 0) {
      const filteredItens = entregasSelecionadas.filter(
        (item) => item.id !== id
      );

      setEntregasSelecionadas(filteredItens);
    } else {
      const checarDia = entregasSelecionadas.find(
        (item) => item.dia_id === dia
      );

      if (checarDia) {
        toast.error('Dia já usado pela empresa!');
      } else if (entregasSelecionadas.length < 7) {
        const filteredItens = entregasDias.find((item) => item.id === id);

        setEntregasSelecionadas([...entregasSelecionadas, filteredItens]);
      }
    }
  }

  async function deletarFuncionamento(id) {
    const filteredItens = entregasSelecionadas.filter((item) => item.id !== id);

    setEntregasSelecionadas(filteredItens);
  }

  async function handleSubmit() {
    try {
      const entregas = [];
      for (let i = 0; i < entregasSelecionadas.length; i += 1) {
        entregas.push(entregasSelecionadas[i].id);
      }

      dispatch(
        UpdateEmpresaRequest({
          id: empresaID,
          entrega_id: entregas,
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
      <strong>Entrega</strong>
      <Form onSubmit={handleSubmit}>
        <div className="esquerda">
          <strong>Entregas cadastrados</strong>
          <Funionamentos>
            {entregasDias.map((entrega) => (
              <div>
                <button
                  onClick={() => handleSelectItem(entrega.id, entrega.dia_id)}
                  type="button"
                  className={
                    entregasSelecionadas.find((func) => func.id === entrega.id)
                      ? 'selecionado'
                      : 'entregas'
                  }
                >
                  {entrega.dia.nome} -- {entrega.entrega.inicio} -{' '}
                  {entrega.entrega.fim}
                </button>
              </div>
            ))}
          </Funionamentos>
        </div>

        <div className="direita">
          <strong>Entrega da empresa</strong>
          <Funionamentos>
            {entregasSelecionadas.map((entrega) => (
              <div>
                {entrega ? (
                  <>
                    <text>
                      {entrega.dia.nome} -- {entrega.entrega.inicio} -{' '}
                      {entrega.entrega.fim}
                    </text>
                    <button
                      type="button"
                      onClick={() => deletarFuncionamento(entrega.id)}
                    >
                      <MdDelete size={15} color="#37759e" />
                    </button>
                  </>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </Funionamentos>
        </div>
        <AddButton type="button" onClick={() => history.push('/entrega/add')}>
          <MdAdd size={20} color="#37759e" />
          <strong>Adicionar entregas</strong>
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

export default Entrega;

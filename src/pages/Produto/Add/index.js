import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { PropTypes } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { MdArrowBack, MdCheck } from 'react-icons/md';
import { Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { UpdateProdutoRequest } from '~/store/modules/user/actions';

import { Container, Footer, Formulario, InputSuperior } from './styles';

const schema = Yup.object().shape({
  nome: Yup.string().required('Este campo é obrigatório'),
  valor: Yup.number().required('Este campo é obrigatório'),
  valor_promocional: Yup.number().required('Este campo é obrigatório'),
  informacao: Yup.string().required('Este campo é obrigatório'),
});

function Add({ match }) {
  const { id } = match.params;
  const dispatch = useDispatch();

  const usuarioId = useSelector((state) => state.user.profile.id);
  const empresaId = useSelector((state) => state.user.empresa.id);

  const [nome, setNome] = useState('');
  const [valor, setValor] = useState();
  const [valorPromocional, setValorPromocional] = useState();
  const [informacao, setInformacao] = useState('');

  useEffect(() => {
    async function loadData() {
      if (id) {
        const produto = await api.get(`/produtos/${id}`);
        setNome(produto.data.nome);
        setValor(produto.data.valor);
        setValorPromocional(produto.data.valor_promocional);
        setInformacao(produto.data.informacao);
      }
    }
    loadData();
  }, [id]);

  async function handleSubmit(data) {
    if (id) {
      try {
        await api.put(`/produtos/${id}`, {
          ...data,
        });
        toast.success('O produto foi atualizado com sucesso !');
      } catch (err) {
        toast.error('Erro ao atualizar produto');
      }
    } else {
      try {
        await api.post(`/produtos`, {
          ...data,
          empresa_id: empresaId,
        });
        toast.success('O produto foi cadastrado com sucesso !');
      } catch (err) {
        toast.error('Erro ao cadastrar produto');
      }
    }
    try {
      dispatch(UpdateProdutoRequest(usuarioId));
      history.push('/produto');
    } catch (err) {
      toast.error('Erro ao vincular produto');
    }
  }

  return (
    <Container>
      {id ? (
        <strong>Editar Produto</strong>
      ) : (
        <strong>Cadastrar Produto</strong>
      )}

      <Formulario onSubmit={handleSubmit} schema={schema}>
        <InputSuperior>
          <div className="inputField">
            <strong>Nome:</strong>
            <Input
              name="nome"
              placeholder="Ex.: Pão de Forma"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="inputField">
            <strong>Valor:</strong>
            <Input
              name="valor"
              placeholder="Ex.: 5.99"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          </div>
          <div className="inputField">
            <strong>Valor Promocional:</strong>
            <Input
              name="valor_promocional"
              placeholder="Ex.: 3.99"
              value={valorPromocional}
              onChange={(e) => setValorPromocional(e.target.value)}
            />
          </div>
        </InputSuperior>
        <div className="inputField">
          <strong>Informações</strong>
          <Input
            name="informacao"
            placeholder="Ex.: Pão de Forma da marca X, com 0% de açucar"
            value={informacao}
            onChange={(e) => setInformacao(e.target.value)}
            multiline
          />
        </div>
        <Footer>
          <button type="button" onClick={() => history.push('/produto')}>
            <MdArrowBack size={20} color="#37759e" />
            VOLTAR
          </button>
          <button className="salvar" type="submit">
            <MdCheck size={20} color="#37759e" />
            SALVAR
          </button>
        </Footer>
      </Formulario>
    </Container>
  );
}

export default Add;

Add.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

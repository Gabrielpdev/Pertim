import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdArrowBack, MdAdd, MdDelete, MdEdit } from 'react-icons/md';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { UpdateProdutoRequest } from '~/store/modules/user/actions';

import { Container, ProdutoLista, Adicionar, Titulo } from './styles';

function Produto() {
  const dispatch = useDispatch();

  const usuarioId = useSelector((state) => state.user.profile.id);
  const empresaProduto = useSelector((state) => state.user.empresa.produto);

  const produtos = empresaProduto;

  const handleDelete = useCallback(
    async (produto) => {
      const confirmDelete = window.confirm(`Deseja deletar o produto ?`);

      if (!confirmDelete) {
        return;
      }

      await api.delete(`produtos/${produto.id}`);
      dispatch(UpdateProdutoRequest(usuarioId));
      toast.success('O produto foi excluida com sucesso !');
    },
    [usuarioId, dispatch]
  );

  return (
    <Container>
      <Titulo>
        <button type="button" onClick={() => history.push('/dashboard')}>
          <MdArrowBack size={20} />
        </button>
        <strong>Produtos</strong>
      </Titulo>
      <Adicionar>
        <button type="button" onClick={() => history.push('/produto/add')}>
          <MdAdd size={20} />
          Adicionar produto
        </button>
      </Adicionar>
      <ProdutoLista>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Valor</th>
            <th>Valor Promocional</th>
            <th>Informação</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.nome}</td>
              <td>{produto.valor}</td>
              <td>{produto.valor_promocional}</td>
              <td>{produto.informacao}</td>
              <td>
                <button
                  type="button"
                  onClick={() => history.push(`/produto/add/${produto.id}`)}
                >
                  <MdEdit size={15} />
                </button>
                <button type="button" onClick={() => handleDelete(produto)}>
                  <MdDelete size={15} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProdutoLista>
    </Container>
  );
}

export default Produto;

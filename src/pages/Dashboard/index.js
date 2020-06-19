import React from 'react';
import { useSelector } from 'react-redux';
import { MdEdit } from 'react-icons/md';

import history from '~/services/history';

import foto from '~/assets/semfoto.svg';

import { Container } from './styles';

export default function Dashboard() {
  const empresa = useSelector((state) => state.user.empresa);

  return (
    <Container>
      {empresa ? (
        <>
          <div className="botoes">
            <button type="button" onClick={() => history.push('/endereco')}>
              Endereço
            </button>
            <button
              type="button"
              onClick={() => history.push('/funcionamento')}
            >
              Funcionamento
            </button>
            <button type="button" onClick={() => history.push('/entrega')}>
              Entrega
            </button>
            <button type="button" onClick={() => history.push('/produto')}>
              Produto
            </button>
            <button type="button" onClick={() => history.push('/perfil')}>
              Perfil do proprietário
            </button>
          </div>

          <div className="empresa">
            <div className="header">
              <strong>{empresa.nome}</strong>
              <img
                src={empresa.arquivo ? empresa.arquivo.url : foto}
                alt={empresa.nome}
              />
            </div>

            <strong>{empresa.bio}</strong>

            <div className="empresaInfo">
              <div className="esquerda">
              <strong> Telefone:</strong><span> {empresa.telefone}</span>
                <strong> Whatsapp: </strong><span>{empresa.whatsapp}</span>

                <strong> Instagram:</strong> <span>{empresa.instagram ? empresa.instagram : '----'}
                </span>

                <strong> Facebook:</strong> <span>{empresa.facebook ? empresa.facebook : '----'}
                </span>
              </div>

              <div className="meio">
                <strong>Tempo Máximo:</strong> <span>{empresa.tempo_max}</span>
                <strong>Tempo Mínimo:</strong><span> {empresa.tempo_min}</span>
                <strong>Valor da entrega: </strong><span>{empresa.valor_entrega}</span>
              </div>

              <div className="direita">
                <strong>Tipos de pagamento: {empresa.pagamento.map( pagamento => (
                  <li key={pagamento.id} >{pagamento.tipo_pagamento}</li>
                ))} </strong>
              </div>
            </div>


            <div className="informacoes">
              {empresa.endereco[0] ? (
                <div className="endereco">
                  <strong>Endereço:</strong>
                  <span>
                    {empresa.endereco[0].logradouro} -{' '}
                    {empresa.endereco[0].numero}, {empresa.endereco[0].bairro}
                  </span>
                </div>
              ) : (
                <strong>Nenhum endereço cadastrado</strong>
              )}
              {empresa.funcionamento[0] ? (
                <div className="funcionamento">
                  <strong>Funcionamento:</strong>
                  {empresa.funcionamento.map((funcionamento) => (
                    <span>
                      {funcionamento.dia.nome.substr(0, 3)}:{' '}
                      {funcionamento.funcionamento.inicio.substr(0, 5)} -{' '}
                      {funcionamento.funcionamento.fim.substr(0, 5)}
                    </span>
                  ))}
                </div>
              ) : (
                <strong>Nenhum horário de funcionamento cadastrado</strong>
              )}
              {empresa.entrega[0] ? (
                <div className="entrega">
                  <strong>Entrega:</strong>
                  {empresa.entrega.map((entrega) => (
                    <span>
                      {entrega.dia.nome.substr(0, 3)}:{' '}
                      {entrega.entrega.inicio.substr(0, 5)} -{' '}
                      {entrega.entrega.fim.substr(0, 5)}
                    </span>
                  ))}
                </div>
              ) : (
                <strong>Nenhum horário de entrega cadastrado</strong>
              )}
            </div>
          </div>
          <div className="edicao">
            <button
              type="button"
              onClick={() => history.push(`/empresas/${empresa.id}`)}
            >
              <MdEdit size={20} color="#fff" />
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="cadastre">
            <strong>Você não tem nenhuma empresa vinculada a sua conta.</strong>

            <button type="button" onClick={() => history.push(`/empresas`)}>
              Cadastrar Empresa
            </button>
          </div>
        </>
      )}
    </Container>
  );
}

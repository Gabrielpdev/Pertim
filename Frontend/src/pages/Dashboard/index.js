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
            <button type="button">Entrega</button>
            <button type="button">Produto</button>
            <button type="button">Perfil do proprietário</button>
          </div>

          <div className="empresa">
            <div className="header">
              <strong>{empresa.nome}</strong>
              <img
                src={empresa.arquivo ? empresa.arquivo.url : foto}
                alt={empresa.nome}
              />
            </div>
            <span>{empresa.bio}</span>
            <span>Telefone: {empresa.telefone}</span>
            <span>Whatsapp: {empresa.whatsapp}</span>
            <span>
              Instagram: {empresa.instagram ? empresa.instagram : '----'}
            </span>
            <span>
              Facebook: {empresa.facebook ? empresa.facebook : '----'}
            </span>
            <span>Tempo Máximo: {empresa.tempo_max}</span>
            <span>Tempo Mínimo: {empresa.tempo_min}</span>
            <span>Valor da entrega: {empresa.valor_entrega}</span>
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
                  <span>Seg: 08:00 - 18:00</span>
                  <span>Ter: 08:00 - 18:00</span>
                  <span>Qua: 08:00 - 18:00</span>
                  <span>Qui: 08:00 - 18:00</span>
                  <span>Sex: 08:00 - 18:00</span>
                  <span>Sab: 08:00 - 18:00</span>
                  <span>Dom: 08:00 - 18:00</span>
                </div>
              ) : (
                <strong>Nenhum horário de funcionamento cadastrado</strong>
              )}
              {empresa.entrega[0] ? (
                <div className="entrega">
                  <strong>Entrega:</strong>
                  <span>Seg: 08:00 - 18:00</span>
                  <span>Ter: 08:00 - 18:00</span>
                  <span>Qua: 08:00 - 18:00</span>
                  <span>Qui: 08:00 - 18:00</span>
                  <span>Sex: 08:00 - 18:00</span>
                  <span>Sab: 08:00 - 18:00</span>
                  <span>Dom: 08:00 - 18:00</span>
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

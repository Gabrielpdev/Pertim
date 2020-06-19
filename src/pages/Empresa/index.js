import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InputMask from 'react-input-mask';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Input, Form } from '@rocketseat/unform';
import { MdArrowBack, MdCheck } from 'react-icons/md';

import {
  UpdateEmpresaRequest,
  VincularEmpresaRequest,
} from '~/store/modules/user/actions';

import history from '~/services/history';
import api from '~/services/api';

import Arquivo from './Arquivo';

import { Container } from './styles';

const schema = Yup.object().shape({
  nome: Yup.string().required('Este campo é obrigatório'),
  telefone: Yup.string()
    .min(14, 'É obrigatório completar o campo')
    .required('Este campo é obrigatório'),
  whatsapp: Yup.string()
    .min(14, 'É obrigatório completar o campo')
    .required('Este campo é obrigatório'),
  bio: Yup.string().required('Este campo é obrigatório'),
  valor_entrega: Yup.string('Somente numeros')
    .min(7, 'É obrigatório completar o campo')
    .required('Este campo é obrigatório'),
  tempo_max: Yup.string()
    .min(8, 'É obrigatório completar o campo')
    .required('Este campo é obrigatório'),
  tempo_min: Yup.string()
    .min(8, 'É obrigatório completar o campo')
    .required('Este campo é obrigatório'),
  facebook: Yup.string(),
  instagram: Yup.string(),
  arquivo_id: Yup.number(),
});

function Empresa() {
  const dispatch = useDispatch();

  const empresa = useSelector((state) => state.user.empresa);
  const usuarioID = useSelector((state) => state.user.profile.id);

  const [nome, setNome] = useState(empresa === null ? undefined : empresa.nome);
  const [telefone, setTelefone] = useState(
    empresa === null ? undefined : empresa.telefone
  );
  const [whatsapp, setWhatsapp] = useState(
    empresa === null ? undefined : empresa.whatsapp
  );
  const [tempoMax, setTempoMax] = useState(
    empresa === null ? undefined : empresa.tempo_max
  );
  const [tempoMin, setTempoMin] = useState(
    empresa === null ? undefined : empresa.tempo_min
  );
  const [valorEntrega, setValorEntrega] = useState(
    empresa === null ? undefined : empresa.valor_entrega
  );
  const [facebook, setFacebook] = useState(
    empresa === null ? undefined : empresa.facebook
  );
  const [instagram, setInstagram] = useState(
    empresa === null ? undefined : empresa.instagram
  );
  const [bio, setBio] = useState(empresa === null ? undefined : empresa.bio);
  const [pagamentos, setPagamentos] = useState([]);
  const [pagamentoSelecionado, setPagamentoSelecionado] = useState(empresa === null ? undefined : empresa.pagamento);

  useEffect(() => {
    async function loadPagamento(){
      const response = await api.get('/tipo-pagamentos');

      setPagamentos(response.data)
    }
    loadPagamento()
  },[])

  function handleSelectItem(pagamento) {
    const alreadySelected = pagamentoSelecionado.findIndex((item) => item.id === pagamento.id);

    if (alreadySelected >= 0) {
      const filteredItens = pagamentoSelecionado.filter((item) => item.id !== pagamento.id);

      setPagamentoSelecionado(filteredItens);
    } else {
      setPagamentoSelecionado([...pagamentoSelecionado, pagamento]);
    }
  }
  async function SubmitEmpresa(data) {
    if (empresa !== null) {
      const pagamento_id = []

      pagamentoSelecionado.map( pagamento => {
        pagamento_id.push(pagamento.id)
      })
      try {
        dispatch(UpdateEmpresaRequest({
          id: empresa.id,
          ...data,
          pagamento_id }));

        history.push('/dashboard');
      } catch (err) {
        toast.error('Erro ao atualizar empresa');
      }
    } else {
      try {
        const response = await api.post('empresas', {
          ...data,
          pagamento_id:pagamentoSelecionado,
          situacao: 'ATIVA',
          propietario_id: usuarioID,
        });
        dispatch(VincularEmpresaRequest(response.data));
        toast.success('Empresa cadastrada com sucesso!');
        history.push('/dashboard');
      } catch (err) {
        console.tron.log(err);
      }
    }
  }

  return (
    <Container>
      <strong>
        {empresa === null ? 'Cadastro de Empresa' : 'Edição de Empresa'}
      </strong>
      <Form schema={schema} onSubmit={SubmitEmpresa} initialData={empresa}>
        <Arquivo name="arquivo_id" />

        <div className="colunas">
          <div>
            <strong>Nome da Empresa:</strong>
            <Input
              name="nome"
              placeholder="Ex.: Restaurante Gasparzinho"
              value={empresa === null ? undefined : nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div>
            <strong>Telefone da Empresa:</strong>
            <InputMask
              mask="(33)99999-9999"
              maskChar=""
              value={empresa === null ? undefined : telefone}
              onChange={(e) => setTelefone(e.target.value)}
            >
              {() => (
                <Input
                  name="telefone"
                  type="text"
                  placeholder="Ex.: 0000-0000"
                />
              )}
            </InputMask>
          </div>
          <div>
            <strong>Whatsapp da Empresa:</strong>
            <InputMask
              mask="(33)99999-9999"
              maskChar=""
              value={empresa === null ? undefined : whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            >
              {() => (
                <Input
                  name="whatsapp"
                  type="text"
                  placeholder="Ex.: 0000-0000"
                />
              )}
            </InputMask>
          </div>
          <div>
            <strong>Tempo máximo de entrega:</strong>
            <InputMask
              mask="99:99:99"
              maskChar=""
              value={empresa === null ? undefined : tempoMax}
              onChange={(e) => setTempoMax(e.target.value)}
            >
              {() => (
                <Input
                  name="tempo_max"
                  type="text"
                  placeholder="Ex.: 00:00:00"
                />
              )}
            </InputMask>
          </div>
          <div>
            <strong>Tempo mínimo de entrega:</strong>
            <InputMask
              mask="99:99:99"
              maskChar=""
              value={empresa === null ? undefined : tempoMin}
              onChange={(e) => setTempoMin(e.target.value)}
            >
              {() => (
                <Input
                  name="tempo_min"
                  type="text"
                  placeholder="Ex.: 00:00:00"
                />
              )}
            </InputMask>
          </div>
          <div>
            <strong>Valor de entrega:</strong>
            <InputMask
              mask="99.99R$"
              maskChar=""
              value={empresa === null ? undefined : valorEntrega}
              onChange={(e) => setValorEntrega(e.target.value)}
            >
              {() => <Input name="valor_entrega" placeholder="Ex.: 00,00R$" />}
            </InputMask>
          </div>
          <div>
            <strong>Facebook:</strong>
            <Input
              name="facebook"
              placeholder="Ex.: RestauranteGasparzinho"
              value={empresa === null ? undefined : facebook}
              onChange={(e) => setFacebook(e.target.value)}
            />
          </div>
          <div>
            <strong>Instagram:</strong>
            <Input
              name="instagram"
              placeholder="Ex.: @rest_gaspar"
              value={empresa === null ? undefined : instagram}
              onChange={(e) => setInstagram(e.target.value)}
            />
          </div>
        </div>
        <div>
          <strong>Biografia da Empresa:</strong>
          <Input
            name="bio"
            placeholder="Ex.: Restaurante feito para sua família se alimentar...."
            value={empresa === null ? undefined : bio}
            onChange={(e) => setBio(e.target.value)}
            multiline
          />
        </div>
        <strong>Tipo de pagamento:</strong>
        <div className="footer">
          <div className='pagamento' >
            {pagamentos.map( pagamento => (
              <button
              onClick={() => handleSelectItem(pagamento)}
              type="button"
              className={
                pagamentoSelecionado.find(pag => pag.id === pagamento.id)
                  ? 'selecionado'
                  : 'pagamentos'
              }
            >
              {pagamento.tipo_pagamento}
            </button>
            ))}
          </div>
          <div className="botao">
            <button type="button" onClick={() => history.push('/dashboard')}>
              <MdArrowBack size={20} color="#37759e" />
              VOLTAR
            </button>
            <button type="submit">
              <MdCheck size={20} color="#37759e" />
              SALVAR
            </button>
          </div>
        </div>
      </Form>
    </Container>
  );
}
export default Empresa;

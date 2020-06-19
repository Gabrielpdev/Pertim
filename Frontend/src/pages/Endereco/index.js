/* eslint-disable no-nested-ternary */
import React, { useState, useMemo } from 'react';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { GoogleApiWrapper } from 'google-maps-react';
import { Form } from '@rocketseat/unform';
import { MdArrowBack, MdCheck, MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';

import axios from 'axios';
import history from '~/services/history';
import api from '~/services/api';

import Select from '~/components/Select';
import Mapa from '~/components/Mapa';

import {
  UpdateEmpresaRequest,
  VincularEnderecoRequest,
} from '~/store/modules/user/actions';

import { Container, Button, Aviso, INput, AddButton } from './styles';

const schema = Yup.object().shape({
  cep: Yup.string().required('Este campo é obrigatório'),
  logradouro: Yup.string().required('Este campo é obrigatório'),
  numero: Yup.string().required('Este campo é obrigatório'),
  bairro: Yup.string().required('Este campo é obrigatório'),
  cidade: Yup.string().required('Este campo é obrigatório'),
  uf: Yup.string()
    .max(2, 'É obrigatório completar o campo')
    .required('Este campo é obrigatório'),
});

function Endereco() {
  const dispatch = useDispatch();

  const usuarioEnd = useSelector((state) => state.user.empresa.endereco);
  const empresaID = useSelector((state) => state.user.empresa.id);

  const [cep, setCep] = useState(usuarioEnd[0] && usuarioEnd[0].cep);
  const [logradouro, setLogadouro] = useState(
    usuarioEnd[0] && usuarioEnd[0].logradouro
  );
  const [numero, setNumero] = useState(usuarioEnd[0] && usuarioEnd[0].numero);
  const [bairro, setBairro] = useState(usuarioEnd[0] && usuarioEnd[0].bairro);
  const [cidade, setCidade] = useState(usuarioEnd[0] && usuarioEnd[0].cidade);
  const [uf, setUf] = useState(usuarioEnd[0] && usuarioEnd[0].uf);
  const [centro, setcentro] = useState({
    lat: usuarioEnd[0] && usuarioEnd[0].latitude,
    lng: usuarioEnd[0] && usuarioEnd[0].longitude,
  });
  const [enderecoSelecionado, setEnderecoSelecionado] = useState(
    usuarioEnd[0] && usuarioEnd[0].id
  );
  const [validacao, setValidacao] = useState(false);
  const [novoEndereco, setNovoEndereco] = useState(!usuarioEnd[0]);

  useMemo(async () => {
    const { data } = await axios(
      `https://viacep.com.br/ws/${cep}/json/unicode/`
    );
    setCep(data.cep);
    if (data.logradouro) {
      setLogadouro(data.logradouro);
    }
    if (data.bairro) {
      setBairro(data.bairro);
    }
    if (data.localidade) {
      setCidade(data.localidade);
    }
    if (data.uf) {
      setUf(data.uf);
    }
  }, [cep]);

  const OpcoesEndereco = useMemo(() => {
    return usuarioEnd.map((endereco, index) => ({
      value: index,
      label: endereco.logradouro,
    }));
  }, [usuarioEnd]);

  const TrocarEndereco = (selectedOption) => {
    const { value } = selectedOption;

    setEnderecoSelecionado(usuarioEnd[value].id);
    setCep(usuarioEnd[value].cep);
    setLogadouro(usuarioEnd[value].logradouro);
    setNumero(usuarioEnd[value].numero);
    setBairro(usuarioEnd[value].bairro);
    setCidade(usuarioEnd[value].localidade);
    setUf(usuarioEnd[value].uf);
    setValidacao(false);
  };

  async function verificarEndereco() {
    try {
      if (!numero && !logradouro && !cidade && !uf) {
        const e = new Error('error');
        throw e;
      }
      const { data } = await axios(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${numero}+${logradouro},+${cidade},
        +${uf},+Brasil&key=${process.env.REACT_APP_GOOGLE_KEY}`
      );
      setcentro(data.results[0].geometry.location);
      setValidacao(true);
    } catch (err) {
      toast.error('Erro ao verificar endereço, confira seus dados!');
    }
  }

  async function alterarEndereco() {
    setValidacao(false);
  }

  async function addEndereco() {
    setCep('');
    setLogadouro('');
    setNumero('');
    setBairro('');
    setCidade('');
    setUf('');
    setNovoEndereco(true);
  }

  async function handleSubmit(data) {
    if (usuarioEnd[0] && novoEndereco === true) {
      try {
        const response = await api.post('enderecos', {
          ...data,
          latitude: centro.lat,
          longitude: centro.lng,
          usuario: false,
        });
        const enderecos = [];
        for (let i = 0; i < usuarioEnd.length; i += 1) {
          enderecos.push(usuarioEnd[i].id);
        }
        enderecos.push(response.data.id);

        dispatch(
          UpdateEmpresaRequest({ id: empresaID, endereco_id: enderecos })
        );

        dispatch(VincularEnderecoRequest(response.data));
        toast.success('Endereço cadastrado com sucesso!');
        history.push('/dashboard');
      } catch (err) {
        toast.error('Erro ao cadastrar endereço!');
      }
    } else if (usuarioEnd[0]) {
      const response = await api.put(`enderecos/${enderecoSelecionado}`, {
        ...data,
        latitude: centro.lat,
        longitude: centro.lng,
      });
      dispatch(
        UpdateEmpresaRequest({ id: empresaID, endereco_id: response.data.id })
      );
      history.push('/dashboard');
    } else {
      try {
        const response = await api.post('enderecos', {
          ...data,
          latitude: centro.lat,
          longitude: centro.lng,
          usuario: false,
        });
        dispatch(
          UpdateEmpresaRequest({
            id: empresaID,
            endereco_id: response.data.id,
          })
        );
        toast.success('Endereço cadastrado com sucesso!');
        history.push('/dashboard');
      } catch (err) {
        toast.error('Erro ao cadastrar endereço!');
      }
    }
  }

  return (
    <Container>
      <div>
        <strong>
          {usuarioEnd[0]
            ? novoEndereco === true
              ? 'Cadastro de Endereço'
              : 'Edição de Endereço'
            : 'Cadastro de Endereço'}
        </strong>

        <AddButton type="button" onClick={addEndereco} visivel={!novoEndereco}>
          <MdAdd size={20} color="#37759e" />
        </AddButton>
        {usuarioEnd[0] ? (
          <AddButton
            type="button"
            onClick={() => setNovoEndereco(false)}
            visivel={novoEndereco}
          >
            <MdArrowBack size={20} color="#37759e" />
          </AddButton>
        ) : (
          <></>
        )}
      </div>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Select
          visivel={!novoEndereco}
          label="Endereços Cadastrados:"
          value={enderecoSelecionado}
          onChange={TrocarEndereco}
          options={OpcoesEndereco}
          placeholder="Selecione o endereço"
          defaultValue={
            usuarioEnd[0]
              ? {
                  value: usuarioEnd[0].id,
                  label: usuarioEnd[0].logradouro,
                }
              : undefined
          }
        />
        <div className="colunas">
          <div>
            <strong>CEP :</strong>
            <INput
              disabled={validacao}
              name="cep"
              placeholder="Ex.: 00000000"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />
          </div>
          <div>
            <strong>Logradouro:</strong>
            <INput
              disabled={validacao}
              name="logradouro"
              placeholder="Ex.: 7 de Setembro"
              value={logradouro}
              onChange={(e) => setLogadouro(e.target.value)}
            />
          </div>
          <div>
            <strong>Numero:</strong>
            <INput
              disabled={validacao}
              type="number"
              name="numero"
              placeholder="Ex.: 09"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
          </div>
          <div>
            <strong>Bairro:</strong>
            <INput
              disabled={validacao}
              name="bairro"
              placeholder="Ex.: Centro"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
            />
          </div>
          <div>
            <strong>Cidade:</strong>
            <INput
              disabled={validacao}
              name="cidade"
              placeholder="Ex.: Governador Valadares"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
          </div>
          <div>
            <strong>UF :</strong>
            <INput
              disabled={validacao}
              name="uf"
              placeholder="Ex.: MG"
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            />
          </div>
        </div>
        <div className="verificacao">
          <Button
            type="button"
            onClick={verificarEndereco}
            disabled={validacao}
          >
            Verificar Endereço
          </Button>
          <Button type="button" onClick={alterarEndereco} disabled={!validacao}>
            Alterar Endereço
          </Button>
        </div>

        <Mapa
          centro={centro.lat === undefined ? { lat: 0, lng: 0 } : centro}
          zoom={centro.lat === undefined ? 0.2 : 16}
        />
        <div className="botao">
          <Button type="button" onClick={() => history.push('/dashboard')}>
            <MdArrowBack size={20} color="#37759e" />
            VOLTAR
          </Button>
          <Button className="salvar" type="submit" disabled={!validacao}>
            <MdCheck size={20} color="#37759e" />
            SALVAR
          </Button>
        </div>
      </Form>
      <Aviso visivel={!validacao}>Verifique o endereço antes de salvar</Aviso>
    </Container>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_KEY,
})(Endereco);

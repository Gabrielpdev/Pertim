import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Empresa from '~/pages/Empresa';
import Endereco from '~/pages/Endereco';

import Funcionamento from '~/pages/Funcionamento';
import FuncionamentoAdd from '~/pages/Funcionamento/Add';
import FuncionamentoAddHorario from '~/pages/Funcionamento/Add/Horario';

import Entrega from '~/pages/Entrega';
import EntregaAdd from '~/pages/Entrega/Add';
import EntregaAddHorario from '~/pages/Entrega/Add/Horario';

import Produto from '~/pages/Produto';
import ProdutoAdd from '~/pages/Produto/Add';

import Parfil from '~/pages/Perfil';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/registrar" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/empresas/:id" exact component={Empresa} isPrivate />
      <Route path="/empresas" exact component={Empresa} isPrivate />
      <Route path="/endereco" exact component={Endereco} isPrivate />
      <Route path="/funcionamento" exact component={Funcionamento} isPrivate />
      <Route
        path="/funcionamento/add"
        exact
        component={FuncionamentoAdd}
        isPrivate
      />
      <Route
        path="/funcionamento/add/horario"
        exact
        component={FuncionamentoAddHorario}
        isPrivate
      />
      <Route path="/entrega" exact component={Entrega} isPrivate />
      <Route path="/entrega/add" exact component={EntregaAdd} isPrivate />
      <Route
        path="/entrega/add/horario"
        exact
        component={EntregaAddHorario}
        isPrivate
      />

      <Route path="/produto" exact component={Produto} isPrivate />
      <Route path="/produto/add" exact component={ProdutoAdd} isPrivate />
      <Route path="/produto/add/:id" exact component={ProdutoAdd} isPrivate />

      <Route path="/perfil" exact component={Parfil} isPrivate />
    </Switch>
  );
}

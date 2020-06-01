import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Empresa from '~/pages/Empresa';
import Endereco from '~/pages/Endereco';
import Funcionamento from '~/pages/Funcionamento';

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
    </Switch>
  );
}

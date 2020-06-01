import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from '@rocketseat/unform';

import { Container } from './styles';

function Checkbox({ value, name, label, checked }) {
  const [marcado, setMarcado] = useState(checked === true);

  function toggleCheck() {
    setMarcado(!marcado);
  }

  return (
    <Container>
      <label htmlFor={name}>
        <Input
          name={name}
          type="checkbox"
          value={marcado ? value : undefined}
          checked={marcado}
          onChange={toggleCheck}
        />
        {label}
      </label>
    </Container>
  );
}

export default Checkbox;

Checkbox.propTypes = {
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
};

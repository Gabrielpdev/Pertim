import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';
import { MdImage } from 'react-icons/md';
import api from '~/services/api';

import { Container } from './styles';

export default function Arquivo({ name }) {
  const { defaultValue, registerField } = useField('arquivo');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name,
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField, name]);

  async function handleChanged(e) {
    const data = new FormData();

    data.append('arquivo', e.target.files[0]);

    const response = await api.post('arquivos', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="arquivo">
        {preview ? (
          <img src={preview} alt="arquivo" />
        ) : (
          <div>
            <MdImage /> <strong>Adicionar foto</strong>
          </div>
        )}

        <input
          type="file"
          id="arquivo"
          accept="image/*"
          data-file={file}
          onChange={handleChanged}
          ref={ref}
          name={name}
        />
      </label>
    </Container>
  );
}

Arquivo.propTypes = {
  name: PropTypes.string.isRequired,
};

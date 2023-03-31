import React, { useState, useEffect } from 'react'
import { Typography, Grid, Button, TextField } from '@mui/material';
import validate from 'validate.js';
import emailjs from 'emailjs-com';


const USER_ID = "tvmvDOPlEPwXedsyZ"
const TEMPLATE_ID = "template_k7px06a"
const SERVICE_ID = "service_wk77tzj"

const schema = {
  name: {
    presence: { allowEmpty: false, message: 'is required' },
    length: { maximum: 18 },
  },
  phone_number: {
    presence: { allowEmpty: false, message: 'is required' },
    length: { min: 11, maximum: 18 },
    type: Number
  }
};

function COntactForm({prichina}) {

  const sendEmail = (e) => {
    e.preventDefault();

        emailjs.sendForm(
          SERVICE_ID,
          TEMPLATE_ID,
          e.target,
          USER_ID
        )
        .then((res) => alert('Ваше сообщение доставлено!', res.status, res.text))
        .catch(error => console.log('Ошибка...', error));

        setFormState(formState => ({
          ...formState,
          isValid: false,
          values: {},
          touched: {},
          errors: {}
        }));
  }
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });
  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = (e) => {
    e.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [e.target.name]:
          e.target.type === 'checkbox'
            ? e.target.checked
            : e.target.value,
      },
      touched: {
        ...formState.touched,
        [e.target.name]: true,
      },
    }));
  };

  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;


  return (
    <div>
      <form 
        headers='application/json'
        name="contact-form"
        onSubmit={sendEmail}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              <strong>Оставьте заявку на обратный звонок</strong>
            </Typography>
            <Typography variant="h6" color="textSecondary" align="center">
            и наш специалист свяжется с Вами
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              placeholder="Name"
              label="Ваше имя *"
              variant="outlined"
              size="medium"
              name="name"
              id="name"
              fullWidth
              helperText={
                hasError('name') ? formState.errors.name[0] : null
              }
              error={hasError('name')}
              onChange={handleChange}
              type="text"
              value={formState.values.name || ''}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              placeholder="PhoneNumber"
              label="+7 777 999 44 77 *"
              variant="outlined"
              size="medium"
              name="phone_number"
              fullWidth
              onChange={handleChange}
              type="tel"
              value={formState.values.phone_number || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              size="large"
              variant="contained"
              type="submit"
              color="primary"
              disabled={!formState.isValid}
            >
              Отправить
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default COntactForm
import { defineMessages } from 'react-intl';
import forms from './forms';
import fields from './fields';

export default (pluginContext) => ({
  optionLists: {
    receipt: {
      values: [
        'yes',
        'no',
      ],
      messages: defineMessages({
        yes: {
          id: 'option.receipt.yes',
          defaultMessage: 'Yes',
        },
        no: {
          id: 'option.receipt.no',
          defaultMessage: 'No',
        },
      }),
    },
  },
  forms: forms(pluginContext),
  fields: fields(pluginContext),
});

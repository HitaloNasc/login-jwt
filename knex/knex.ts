import knex from 'knex';
import knexConfig from '../src/common/config/knex-config';

const config = {
  ...knexConfig,
};

export default knex(config);

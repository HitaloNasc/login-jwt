// global
import knex from 'knex';
// local
import knexConfig from '../src/common/config/knex-config';

const config = {
  ...knexConfig,
};

export default knex(config);

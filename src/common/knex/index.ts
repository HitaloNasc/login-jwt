import { Knex, knex } from 'knex';
import knexConfig from '../config/knex-config';

const config: Knex.Config = {
  ...knexConfig,
};

export default knex(config);

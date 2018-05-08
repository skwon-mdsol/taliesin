require('dotenv').config();

const {EurekaConfig, EurekaClient} = require('node-eureka-mauth');

const config = {
  'app_id': {
    'app_uuid': process.env.APP_UUID,
    'private_key': process.env.PRIVATE_KEY
  },

  'eureka_config': {
    'base_uri': process.env.EUREKA_URL,
    'deployments_path': '/v1/deployments',
    'cache_time_minutes': 5
  }
}

const eurekaConfig = new EurekaConfig(config);
const eurekaClient = new EurekaClient(eurekaConfig, 'app_id', {userUuid: '81ceb63e-6bc1-46cb-901e-6875866e566f'});

eurekaClient.call('enroll_configurator_study_environments', 'index', { user_uuid: '81ceb63e-6bc1-46cb-901e-6875866e566f '}).then(result => {
  console.log(result);
});

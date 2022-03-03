const config = {
  DEVELOPMENT: {
    FRONTEND_URL: 'http://localhost:3000',
    BACKEND_URL: 'http://localhost:5000/api',
  },
  PRODUCTION: {
    FRONTEND_URL: 'http://smartcrowdshare.herokuapp.com',
    BACKEND_URL: 'https://smart-crowd-api.herokuapp.com/api',
  },
};

const ENVIRONMENT = process.env.NODE_ENV;

const getConfig = () => {
  if (ENVIRONMENT === 'development') {
    return config.DEVELOPMENT;
  } else {
    return config.PRODUCTION;
  }
};

export default getConfig;

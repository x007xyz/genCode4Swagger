import { generateService } from '../src/index';

// generateService('https://gw-admin-dev.yhche.com/bss/v3/api-docs', { prefix: 'bss', mode: 'ts' });

// generateService('https://gw-admin-dev.yhche.com/car/v3/api-docs', { prefix: 'car', mode: 'js' });

// generateService('https://gw-admin-dev.yhche.com/auth/v3/api-docs', { prefix: 'auth', mode: 'js' });

// generateService('https://gw-admin-dev.yhche.com/user/v3/api-docs', { prefix: 'user', mode: 'js' });

// generateService('https://gw-admin-dev.yhche.com/order/v3/api-docs', { prefix: 'order', mode: 'js' });

generateService("http://d.yofishseo.com:8071/api/v3/api-docs/default", { prefix: '', mode: 'js', requestStr: "import request, { alovaInstance } from '../../utils/request';" });

// generateService('https://gw-api-dev.yhche.com/order/v3/api-docs', { prefix: 'order', mode: 'js' });
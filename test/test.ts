import { generateService } from '../src/index';

generateService('https://gw-admin-dev.yhche.com/seller/v3/api-docs', { prefix: 'seller', mode: 'js' });

generateService('https://gw-admin-dev.yhche.com/auth/v3/api-docs', { prefix: 'auth', mode: 'js' });

generateService('https://gw-admin-dev.yhche.com/car/v3/api-docs', { prefix: 'car', mode: 'js' });
generateService('https://gw-admin-dev.yhche.com/bss/v3/api-docs', { prefix: 'bss', mode: 'js' });
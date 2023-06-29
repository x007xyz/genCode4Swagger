## 通过swagger生成接口文件
执行代码：
```js
import { generateService } from 'gencode4swagger';

generateService(swaggerUrl, { prefix: 'car', mode: 'js' });
```
将会在文件夹`src/api/car/`下生成接口文件`index.js`和类型声明文件`typings.d.ts`
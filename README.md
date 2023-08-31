<a name="generateService"></a>

## generateService(schemaPath, config) ⇒ <code>Promise.&lt;void&gt;</code>
<p>根据提供的 schema 和配置生成服务文件。</p>

**Kind**: global function  
**Returns**: <code>Promise.&lt;void&gt;</code> - <ul>
<li>返回一个 Promise，当所有操作完成时 resolve。</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| schemaPath | <code>string</code> | <p>schema 的路径。</p> |
| config | <code>ConfigOptions</code> | <p>配置选项。</p> |
| config.templateDir | <code>string</code> | <p>模板目录的路径。</p> |
| config.outputPath | <code>string</code> | <p>输出目录的路径。</p> |
| config.prefix | <code>string</code> | <p>api 的前缀。</p> |
| config.pathReg | <code>string</code> | <p>对路径进行正则判断，不符合的路径不生成。</p> |
| config.ignore | <code>Array.&lt;string&gt;</code> | <p>忽略的路径列表。</p> |
| config.dir | <code>string</code> | <p>生成的 api 文件的目录。</p> |
| config.mode | <code>&#x27;ts&#x27;</code> \| <code>&#x27;js&#x27;</code> | <p>生成文件的模式（'ts' 或 'js'）。</p> |

**Example**  
```js
// generateService 的使用示例
generateService('schemaPath', {
  templateDir: 'path/to/template',
  outputPath: 'path/to/output',
  prefix: 'api',
  ignore: ['ignore1', 'ignore2'],
  dir: 'api',
  mode: 'ts'
});
```

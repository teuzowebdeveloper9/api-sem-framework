# API Sem Framework

Bem-vindo à **API Sem Framework**! Este projeto demonstra como construir uma API RESTful em Node.js utilizando apenas TypeScript e módulos nativos, sem frameworks externos. Aqui você encontra boas práticas, organização em camadas, uso de enums para status HTTP e scripts personalizados para facilitar o desenvolvimento.

---
leia também project.md para entender o raciocinio antes da criação da API

leia os issues do projeto para entender como lidei com os problemas


---

## Boas Práticas Utilizadas
- **TypeScript** para tipagem forte e segurança no desenvolvimento.
- **Arquitetura em camadas**: separação clara entre controllers, services, repositories e utils.
- **Enums para status HTTP**: todos os status codes relevantes estão centralizados em um enum, facilitando manutenção e padronização.
- **Scripts personalizados** no `package.json` para build e execução.
- **Tratamento de erros** e respostas padronizadas em JSON.
- **Uso de arquivos estáticos** (JSON) para simular um banco de dados.

---

## Enums de Status HTTP
O projeto possui um enum `statusCode` em `src/UTILS/status-code.ts` que centraliza todos os principais status HTTP, tornando o código mais legível e padronizado. Exemplo de uso:
```ts
import { statusCode } from './UTILS/status-code';
res.writeHead(statusCode.OK, { 'content-type': 'application/json' });
```
---


## Enums de http methods
O projeto possui um enum `httpmethods` em `src/UTILS/http-methods.ts` que centraliza todos os principais http methods, tornando o código mais legível e padronizado. Exemplo de uso:
```ts
import { http-methods } from './UTILS/http-methods';

 if (req.method === httpsMethods.GET && baseurl === Routes.LIST_EPISODES) {
      await getListEpisodes(req, res);
     }
   
     if (req.method === httpsMethods.GET && baseurl === Routes.FILTER_EPISODES) {
      await getFilterEpisodes(req, res);
     }
```
---

## Arquitetura de Camadas
O projeto está organizado em:
- **Controllers**: recebem e tratam as requisições HTTP.
- **Services**: contêm a lógica de negócio.
- **Repositories**: fazem acesso e manipulação dos dados (JSON).
- **Utils**: utilitários e enums.

Essa separação facilita manutenção, testes e escalabilidade.

---

## Como testar a API
1. **Clone o repositório:**
   ```sh
   git clone https://github.com/teuzowebdeveloper9/api-sem-framework
   cd api-sem-framework
   ```
2. **Instale as dependências:**
   ```sh
   npm install
   ```
3. **Build do projeto:**
   ```sh
   npm run build
   ```
   > **Importante:** Use sempre o `npm run build`! Ele garante que o arquivo `.json` de dados seja copiado para a pasta `build`. Se rodar apenas o `tsc`, o JSON não será copiado e a API não funcionará corretamente.
4. **Inicie a API:**
   ```sh
   npm start
   ```
5. **Acesse os endpoints** conforme sua implementação (exemplo: `/podcasts`, `/podcasts?name=podpah`).

---

## Mapa do Projeto
```
api-sem-framework/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── repositories/
│   ├── services/
│   ├── UTILS/
│   └── serve.ts
├── build/ (gerada após o build)
│   ├── controllers/
│   ├── models/
│   ├── repositories/
│   ├── services/
│   ├── UTILS/
│   └── serve.js
├── package.json
├── tsconfig.json
└── README.md
```
> O mesmo mapa vale para a pasta `build` após rodar o build.

---

## Bug Resolvido
Durante o desenvolvimento, enfrentei um bug na feature de filtro de podcasts: a API não retornava o JSON esperado. Após revisar todo o código, identifiquei que o problema estava na lógica de comparação do nome do podcast. Corrigi tornando a busca case-insensitive e garantindo que o parâmetro fosse passado corretamente. Agora o filtro funciona perfeitamente!

---

Muito obrigado pela atenção ao meu projeto!

---

#### Feito com esforço e 💻 por Teuzo Web Developer 

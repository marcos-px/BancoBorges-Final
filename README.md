# gama-xp44-backend-typescript-aula09

	- npm init
 
	- npm i express debug winston express-winston cors

	- npm i --save-dev @types/cors @types/express @types/debug source-map-support tslint typescript

    - npm i node-fetch@2.6.6 @types/node-fetch

	- tsc --init

    - Alterar o arquivo tsconfig.json:
        - "outDir": "./dist"
        - "inlineSourceMap": true
 
 - Incluir scripts de start e debug no arquivo package.json
	- "start": "tsc && node --unhandled-rejections=strict ./dist/app.js"
	- "debug": "export DEBUG=* && npm run start",
	
 - Testar aplicação :)
# gama-xp44-backend-typescript-aula09

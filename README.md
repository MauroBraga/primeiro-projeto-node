# Primeiro Projeto Node

    . criar o projeto node:
        -> yarn init -Y
    . Adiciona o typescript como depedencia de desenvolvimento
        -> yarn add typescript -D
    . Comando para gerar o tsconfig
        -> yarn tsc --init

    . Descomentar no tsc config
        ->"outDir": "./dis",                        /* Redirect output structure to the directory. */
        -> "rootDir": "./src",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */

    . Ao executar o comando yarn tsc a pasta dist vai ser criada
        -> yarn tsc

    . Toda vez que aparecer um erro no arquivo typescript do tipo  da variavél , adicionar o type dela
        -> yarn add @types/express -D

    . Substitui o nodeman.
        -> yarn add ts-node-dev -D

# Padrões de Projeto com Eslint, Prettier e Editor Config
    . https://www.notion.so/Padr-es-de-projeto-com-ESLint-Prettier-e-EditorConfig-0b57b47a24724c859c0cf226aa0cc3a7#d154b50637114fa3a9e6db072e06b018


yarn add @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.21.2 @typescript-eslint/parser@latest -D

 add --inspect para debugar
 ts-node-dev --inspect --ignore-watch node_modules src/server.ts


# SOLID
    . Sigle Responsability Principle
    . Dependecy Invertion Principle

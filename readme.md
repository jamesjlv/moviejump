# MovieJump 🎬

O seu aplicativo para achar os filmes do momento 🍿

#

### <b>UI</b>

<p align='center'>
<img src="https://raw.githubusercontent.com/jamesjlv/moviejump/master/src/assets/MovieJump.png" alt="UI" width="700"/>
</p>

#

### <b>Primeiros passos</b>

Para iniciar, primeiro instale as depêndencias do projeto, rodando o camando abaixo na raiz do projeto

```
yarn
```

Após instalado as dependências, instale as dependências pro ios via pod install com o comando abaixo

```
cd ios && pod install
```

<b>Buildar o aplicativo</b>

Para iOS, basta rodar

```
yarn ios
```

Para Android, basta rodar

```
yarn android
```

Caso vá utilizar os dois dispositivos, é preferivel que rode o bundle primeiro e o mantenha aberto, para isso basta rodar na raiz do projeto

```
yarn start
```

e depois rodar o comando desejado dos builds.

#

## <b> Informações adicionais </b>

</br>
O Aplicativo utiliza de conexão com duas apis, uma para pegar informações dos filmes e outra para pegar as imagens do filme.
</br></br>
<b>Para os filmes:</b> [Trakt](https://trakt.docs.apiary.io)
</br>
<b>Para imagens: </b>[The Movie Database](https://developers.themoviedb.org/3)

</br>
</br>

## Testes? nós temos.

Constantemente melhorando os testes, é possível garantir um aplicativo funcional e com menos possibilidade de erros.

Para ver o coverage do aplicativo, basta rodar o comando abaixo na raiz do terminal

```
yarn test:ci
```

ele irá apresentar direto no console como está o coverage da aplicação, mas também irá criar os arquivos de coverage que poderá ser visto direto no seu navegador web.

Para abrir esse aquivo, navegue e abra o arquivo em <b> coverage/lcov-report/index.html</b>

## Dependências

Nesse projeto, todas as dependências estão fixas para garantir que o mesmo será executado em sua maquina, mas enquanto em desenvolvimento, o mesmo será atualizado e testado para possiveis mudanças nas versões.

#

## Veja funcionando

https://user-images.githubusercontent.com/63821594/163736083-fae4cdc2-7c6f-4971-9699-c8b0f0b9f0fe.mov

#

<p align='center'>Feito com carinho por James Leal </br> 🚀🚀🚀</p>

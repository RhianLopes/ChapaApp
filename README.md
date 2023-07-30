# Chapa App

O aplicativo tem como objetivo ser um MVP de uma funcionalidade nova de busca de fretes com inteligência artificial dentro do aplicativo da Fretebras, proporcionando uma nova experiência na hora de buscar fretes.

## Demo

[![](https://img.youtube.com/vi/pFyDTbWgkxg/0.jpg)](https://youtube.com/shorts/pFyDTbWgkxg)

## Tecnologias

- JavaScript
- React Native
- Expo

## Executando localmente

É necessário utilizar NodeJS 18, inicialmente basta instalar as dependências com:

```shell
npm i
```

O aplicativo estará em execução, para acessá-lo sugiro a utilização de um emulador android no Android Studio.

Passo a passo da expo para configuração do Android Studio:
https://docs.expo.dev/workflow/android-studio-emulator/

Configurado o Android Studio, utilize o dispositivo Pixel_3a_API_34_extension_level_7_x86_64 com essas configurações.

Por fim, é necessário exportar a localização do SDK em seu terminal, executando o seguinte comando informando o caminho do SDK em seu computador:

```shell
export ANDROID_HOME=/home/{SEU_USUARIO}/Android/Sdk
```

Com isso podemos executar o servidor do expo a partir do seguinte comando:

```shell
npx expo start
```

Com o servidor em execução no terminal, pressione a letra “a”, que servirá como comando para abrir em seu emulador o aplicativo.

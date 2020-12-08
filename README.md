[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=simaps-ubs_simaps-frontend&metric=coverage)](https://sonarcloud.io/dashboard?id=simaps-ubs_simaps-frontend)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=simaps-ubs_simaps-frontend&metric=bugs)](https://sonarcloud.io/dashboard?id=simaps-ubs_simaps-frontend)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=simaps-ubs_simaps-frontend&metric=alert_status)](https://sonarcloud.io/dashboard?id=simaps-ubs_simaps-frontend)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=simaps-ubs_simaps-frontend&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=simaps-ubs_simaps-frontend)
[![Build Status](https://travis-ci.org/simaps-ubs/simaps-frontend.svg?branch=master)](https://travis-ci.org/simaps-ubs/simaps-frontend)

# SiMAPS Front-end

<p align="center">
  <img src="./img/logo.svg" alt="logo">
</p>

O Front-end do projeto **SiMAPS** é a camada que interage diretamente com o usuário.
## Tecnologias utilizadas

1. [React JS](https://pt-br.reactjs.org/)
2. [Docker](https://www.docker.com/what-docker)

## Rodando da aplicação

O projeto ultiliza a plataforma [Docker](https://www.docker.com/what-docker) para a configuração de ambiente, afim de evitar problemas de compatibilidade de sistema. Os passos abaixo podem ser seguidos para executar a aplicação usando a plataforma:

1) Instalação do [Docker](https://docs.docker.com/engine/installation/)
2) Instalação do [Docker Compose](https://docs.docker.com/compose/install/)
3) Siga as seguintes etapas:

Clone o repositório:

 ```
 git clone https://github.com/mecassauro/RADAR-frontend.git
 ```

Crie e inicie os containers dos serviços:

 ```
 docker-compose build
 docker-compose up
 ```

Ao terminar de usar os serviços, user o seguinte comando para para-los:
 ```
 docker-compose down
 ```

Acesse a aplicação na porta 3001 do seu `browser`: [http://localhost:3001]()

## Análise estática do código

[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-white.svg)](https://sonarcloud.io/dashboard?id=simaps-ubs_simaps-frontend)

 ## Como contribuir com o projeto?

 <details><summary><b>Contribuição</b></summary>
 1. <a href="https://github.com/mecassauro/RADAR-frontend/blob/master/docs/CONTRIBUTING.md">Guia de Contribuição</a>
 </details>

<details><summary><b>Código de Conduta</b></summary>
1. <a href="https://github.com/mecassauro/RADAR-frontend/blob/master/docs/CODE_OF_CONDUCT.md">Código de Conduta</a>
</details>

<details><summary><b>Políticas de Contribuição</b></summary>
1. <a href="https://github.com/mecassauro/docs/blob/master/docs/gcs.md">Política de branchs/commits/</a>
</details>






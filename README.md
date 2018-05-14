
# Hacker News Front-End with Angular

## Integrants del equip
- Alex Huang Feng
- Pau González Montiel
- Carla Varea Parra
- Sergi Ventura
- Sara Bourjila

## Aplicació desplegada a Heroku
[Aplicació a Heroku](https://g11d-hackernews.herokuapp.com/)

## Repositori Back-End
[Bitbucket](https://bitbucket.org/ahuangfeng/g11d_hackernews/)

## Angular Init Project (CLI)
[Angular](https://cli.angular.io/)

## YAML per al swagger
[Swagger](https://g11d-hackernews.herokuapp.com/api/api.yaml)

### Per a fer deploy a Heroku
- Si s'ha creat una nova taula a la BD : `heroku run rake db:migrate`
- Si dona un error chungo al fer el migrate a heroku:  `heroku pg:reset`, i despres fer el migrate un altre cop
- Deploy : `git push heroku master`
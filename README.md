# traefik-demo

## How to run traefik locally ?

`docker run -d -p 8080:8080 -p 82:80 -v $PWD/traefik.toml:/etc/traefik/traefik.toml -v /var/run/docker.sock:/var/run/docker.sock  --name traefik traefik`

## See result

You should be able to see traefik user interface and metrics at http://localhost:8080

## Traefik knows your containers !

Let's give a try :

`docker run -l traefik.frontend.rule=Host:test.localhost -l traefik.port=80 -d cheztone/cheztone-front`

you can see you container appear at http://localhost:8080 and to access to the frontend application at http://test.localhost:82





# traefik-demo

## How to run example

`docker run -d -p 8080:8080 -p 82:80 -v $PWD/traefik.toml:/etc/traefik/traefik.toml -v /var/run/docker.sock:/var/run/docker.sock  --name traefik traefik`

`docker run -l traefik.frontend.rule=Host:test.localhost -l traefik.port=80 -d cheztone/cheztone-front`

## Result

You should be able to see traefik user interface and metrics at http://localhost:8080 and to access to the frontend application at http://test.localhost:82 



# traefik-demo

run

`docker kill mad_rosalinddocker run -d -p 8080:8080 -p 82:80 -v $PWD/traefik.toml:/etc/traefik/traefik.toml -v /var/run/docker.sock:/var/run/docker.sock  --name traefik traefik`

`docker run -l traefik.frontend.rule=Host:test.localhost -l traefik.port=80 -d cheztone/cheztone-front`


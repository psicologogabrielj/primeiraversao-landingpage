#!/bin/sh
# Sem banco nesta app: não há schema nem migração a preparar, o container
# só serve tráfego.
#
# `exec` no fim é obrigatório: sem ele o Node vira filho do shell e o SIGTERM
# do orquestrador nunca chega na app.

exec "$@"

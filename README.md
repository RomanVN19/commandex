# Simple commander

Web app to run preconfigured shell commands on server and see results.
Commands stores at server in file `s-commander-data.json` so this
app cannot be used as backdoor shell.
But it has not built in password protection, so you need to
hide a web service to avoid everyone access.
It can be done by proxy https server with http basic auth (`nginx` for example).


Web-server starts on `host`/`port` specified in `s-commander-data.json`.
Client app can be accessed through any modern browser at `path`.

Select a command from list by clicking on it, then click "Exec" to se the result.

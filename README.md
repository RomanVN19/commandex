# CommandEx - command executor

Web app to run preconfigured shell commands on server and see results.
Commands stores at server in file `commandex-data.json` so this
app cannot be used as backdoor shell.
App also has built in user/password protection.

Web-server starts on `host`/`port` specified in `s-commander-data.json`.
Client app can be accessed through any modern browser at `path`.

Select a command from list by clicking on it, then click "Exec" to se the result.

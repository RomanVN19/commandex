# CommandEx - command executor

Web app to run preconfigured shell commands on server and see results.
Commands stores at server in file `commandex-data.json` so this
app cannot be used as backdoor shell.
App also has built in user/password protection.

Web-server starts on `host` specified in `env.json`.

Use folowing credentials (username\password) to access an application
- admin\admin - full access
- user\user - only list and exec commands

Select a command from list by clicking on it, then click "Exec" to se the result.

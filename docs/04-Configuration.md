# Configuration Files

Since v0.4.1, Skytable supports custom configuration files to let users customize the functioning of Skytable. Arguably, Skytable has one of the simplest configuration files around. With v0.5.0, Skytable allows configuration via [command line arguments](/03-command-line-config).

## An example configuration

A configuration file is a TOML file, which looks like:

``` toml
[server]
host = "127.0.0.1"
port = 2003
noart = false

# Post v0.4.2 only
[bgsave]
enabled = true
every = 120 # Every 120 seconds
```

This is the default configuration used by Skytable when you don't specify a configuration file. Let's understand what each of the keys mean:

* `server` :
    - `host` : This is the IP address to which you want the database server to bind to. It can be any valid IPv4 *or* IPv6 address, as a quoted string
    - `port` : This is the port to which you want Skytable to bind to
    - `noart` (OPTIONAL): This is **an optional argument** and is recommended for secure environments where displaying terminal artwork might cause problems
* `bgsave` (post `v0.4.2` ):
    - `enabled` : This is an optional key, which is to be set to true to enable BGSAVE or false to disable it. If this key is not specified, Skytable will enable BGSAVE by default
    - `every` : Run BGSAVE `every` seconds. So, for example, if you set this to 120, BGSAVE will run every two minutes. This is also an optional key, and if you don't provide it, the default BGSAVE duration of 120 seconds is used
* `snapshot` (since `v0.4.5`, OPTIONAL): This key can be used to configure snapshots and is not enabled by default. See [this](/06-snapshots) for more information.

## Using a configuration file

To use a configuration file:

1. Create it! We recommend you to name it as `sdb.toml` for easy identification
2. Start the database server with: `sdb -c /path/to/your/file.toml`
3. Done 🎉

If you're confused about creating a configuration file, we always recommend you to download a sample file from [this link](https://github.com/skytable/skytable/blob/next/examples/config-files/template.toml). Do note that this file is bleeding-edge and as a result will have new keys as they're created upstream.

That's all that's there for using configuration files!

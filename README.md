rest-sampler
============
A small CLI utility to sample REST apis every given interval.

Overview
--------
*Synopsis:* `sample -u <rest-api-url>`

Samples the provided <rest-api-url> every 5000 millis,
emits outputs to console, and saves them also in `./results.txt`.

* Windows uses - See compatibility note bellow

WFT?
----
We had a wierd proxi / cache problem we needed to investigate, 
where users reported that they get different responses form same 
services, who should be in fact static.

This utility samples them, and performs a diff of every response
against it's previous, and emits descriptive warnings if a difference 
is found, including text-diffs and all :)

Features
--------

* colorful output to the screen
* output is saved in hourly rotating log file

Usage
-----
*Synopsis:* `sample -u <url> [options]`

Samples the provided url every 5000 millis, emits outputs to console, and saves them also in `./results.txt`

Options:
```
  -u, --url        the url to sample               [required]
  -i, --interval   interval of sampling            [default: 5000]
  -l, --log-level  default log level for the tool  [default: "INFO"]
  -o, --output     output file of results          [default: "results.txt"]
```

*NOTE:* if you want to sample few URLs - currenlty, you can run few processes, 
and direct the results of every URL to a different file.

*Compatibility NOTE:* windows users should have their `%PATH%` set to include `;.\node_modules\.bin` 
(which is a common practice recommended for node Windows developers), 
or use the form `node sample -u <url> [options]`.

Install
-------
`npm install rest-sampler`

you can also:

`npm install rest-sampler -g`

* *Compatibility NOTE:* windows users - I have a reason to belive latest versions of node-installer take care of %PATH% regarding CLI tools on installed globaly, if not - you'll have to do it yourselves...

Contribute
----------
* Through PRs - the usual way :)
* Please mind the indentation style (poor me and my OCD)
* please run the tests

Lisence
-------
MIT, and that's it.

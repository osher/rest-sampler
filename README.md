rest-sampler
============
A small CLI utility to sample REST apis every given interval.

Overview
--------
*Synopsis:* `node sample -u <rest-api-url>`

Samples the provided <rest-api-url> every 5000 millis,
emits outputs to console, and saves them also in `./results.txt`.

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
*Synopsis:* `node sample -u <url> [options]`

Samples the provided url every 5000 millis, emits outputs to console, and saves them also in `./results.txt`

Options:
```
  -u, --url        the url to sample               [required]
  -i, --interval   interval of sampling            [default: 5000]
  -l, --log-level  default log level for the tool  [default: "INFO"]
  -o, --output     output file of results          [default: "results.txt"]
```

*NOTE* if you want to sample few URLs - currenlty, you can run few processes, 
and direct the results of every URL to a different file.

Install
-------
`npm install rest-sampler`

Contribute
----------
* Through PRs - the usual way :)
* Please mind the indentation style (poor me and my OCD)
* please run the tests

Lisence
-------
MIT, and that's it.

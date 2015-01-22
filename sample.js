var //built in
    fs      = require('fs')
    //3rd party
  , diff    = require('diff')
    //local
  , args    = require('./lib/args').of(process.argv)
  , log     = require('./lib/log').use(args).of('sampler')
  , sample  = require('./lib/sample')(args, log)
  ;

log.debug("arguments\n",args);
log.info(
   [ "sampling"
   , ""
   , "  sampling URL: %s"
   , "  interval    : %s"
   , "  output file : %s"
   , ""
   ].join("\n")
 , args.u
 , args.i
 , args.o
 );

sample();


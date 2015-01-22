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
   [ "started"
   , "sampling"
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

process.on('SIGINT', terminate);
process.on('SIGTERM', terminate);
process.on('uncaughtException', function(e) {
    log.error(e.stack, e);
});

function terminate() {
    log.info("-- stopped \n---------------------------------------------------------------------------")
    process.exit();
}
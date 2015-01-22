var logger = require('log4js')
  , args   = require('./args')
  ;

module.exports = 
{ use: 
  function(args) {
      logger.clearAppenders();
      logger.configure(
        { levels: 
          { "[all]" : args.l 
          }
        , appenders: 
          [ { type     : "console" 
            } 
          , { type     : "dateFile"
            , filename : args.o
            , pattern  : "-dd--hh.log"
            , alwaysIncludePattern 
                       : false
            }
          ] 
        } 
      );
      logger.setGlobalLogLevel( args.l )
      return this;//chainable
  }
, of : 
  function(name) { 
      return logger.getLogger(name) 
  }
}

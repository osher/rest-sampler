var yargs = require('yargs')
  ;
module.exports = 
{ of : 
  function(argv) {
      return yargs
        .options(
          { u : 
            { alias    : "url"
            , describe : "the url to sample"
            }
          , i :
            { alias    : "interval"
            , describe : "interval of sampling"
            , default  : 5000
            }
          , l : 
            { alias    : "log-level"
            , describe : "default log level for the tool"
            , default  : "INFO"
            }
          , o : 
            { alias    : "output"
            , describe : "output file of results"
            , default  : "results.txt"
            }
          }
        ).demand("u")
        .parse(argv)
      ;
  }
}
var prev = null
  , request = require('request')
  ;
module.exports = function(args, log) {
    return sample;

    function sample() {
        log.debug("trying url: ", args.u);

        request( args.u, function(e, r) {

            log.debug("responded");

            if (e) {
                log.warn(e.message, e.stack);
                return queNext();
            }
            
            if (r.statusCode != 200) {
                log.warn("wrong status code: ", r.statusCode );
                return queNext();
            }

            var cur = 
                { raw     : r.body
                , headers : r.headers
                }
              ;

            try {
                cur.parsed = JSON.parse(r.body)
            } catch (ex) {
                log.warn("cannot parse response body:", ex.stack);
                return queNext();
            }

            log.debug("rest body parsed successfully");

            cur.length     = JSON.stringify(cur.parsed).length;
            cur.beautified = JSON.stringify(cur.parsed, null, 3);

            if (  prev 
               && prev.beautified != cur.beautified
               )
                log.warn( 
                  "content length: %s, raw length: %s, stringified size: %s\n" 
                , r.headers["content-length"]
                , cur.raw.length
                , cur.length 
                , diff.createPatch(args.u, cur.beautified, prev.beautified ) 
                );
            else
                log.info( 
                  "content length: %s, raw length: %s, stringified size:" 
                , r.headers["content-length"]
                , cur.raw.length
                , cur.length 
                );

            prev = cur;
            queNext();
        });

        function queNext() {
            setTimeout(sample, args.interval); 
        }
    }

}

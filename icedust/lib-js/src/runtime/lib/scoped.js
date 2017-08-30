var _ = require('lodash');

function scoped(oldScope, bindings, scopedBlock){
  scopedBlock(_.assign({}, oldScope, bindings));
}

module.exports = scoped;
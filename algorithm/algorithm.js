/**
 *
 * algorithm Algorithm | Decision Tree
 * Azmi Fachriza Firdaus
 *
 */

// calculate entropy
var entropy = function(vals) {
  var uniqueVals = _.unique(vals);
  var probs = uniqueVals.map(function(x) {
    return prob(x, vals);
  });
  var logVals = probs.map(function(p) {
    return -p * Math.log2(p);
  });
  return logVals.reduce(function(a, b) {
    return a + b;
  }, 0);
};

// calculate gain
var gain = function(clnode, tarnode, rules) {
  var attrVals = _.unique(clnode.pluck(rules));
  var setEntropy = entropy(clnode.pluck(tarnode));
  var setSize = clnode.size();
  var entropies = attrVals.map(function(n) {
    var subset = clnode.filter(function(x) {
      return x[rules] === n;
    });
    return (subset.length / setSize) * entropy(_.pluck(subset, tarnode));
  });
  var sumOfEntropies = entropies.reduce(function(a, b) {
    return a + b;
  }, 0);
  return setEntropy - sumOfEntropies;
};

// pick from gain value
var gainVal = function(clnode, tarnode, ftnode) {
  return _.max(ftnode, function(e) {
    return gain(clnode, tarnode, e);
  });
};

var algorithm = function(clnode, tarnode, ftnode) {
  var nodeTargets = _.unique(clnode.pluck(tarnode));
  if (nodeTargets.length == 1) {
    console.log("end node?" + nodeTargets[0]);
    return {
      type: "result",
      values: nodeTargets[0],
      name: nodeTargets[0],
      alias: nodeTargets[0] + randomTag()
    };
  }
  if (ftnode.length == 0) {
    console.log("returning the most dominate rules!!!");
    var topNodeTg = mostCommon(clnode.pluck(tarnode));
    return {
      type: "result",
      values: topNodeTg,
      name: topNodeTg,
      alias: topNodeTg + randomTag()
    };
  }
  var bestFt = gainVal(clnode, tarnode, ftnode);
  var remainFt = _.without(ftnode, bestFt);
  var possibleVal = _.unique(clnode.pluck(bestFt));
  console.log("node for " + bestFt);
  var node = {
    name: bestFt,
    alias: bestFt + randomTag()
  };
  node.type = "rules";
  node.vals = _.map(possibleVal, function(v) {
    console.log("creating a branch for " + v);
    var _newS = _(
      clnode.filter(function(x) {
        return x[bestFt] == v;
      })
    );
    var child_node = {
      name: v,
      alias: v + randomTag(),
      type: "typeVals"
    };
    child_node.child = algorithm(_newS, tarnode, remainFt);
    return child_node;
  });
  return node;
};

var decision = function(id3Model, sample) {
  var root = id3Model;
  while (root.type != "result") {
    var attr = root.name;
    var sampleVal = sample[attr];
    var childNode = _.detect(root.vals, function(x) {
      return x.name == sampleVal;
    });
    root = childNode.child;
  }
  return root.values;
};

var prob = function(values, vals) {
  var instances = _.filter(vals, function(x) {
    return x === values;
  }).length;
  var total = vals.length;
  return instances / total;
};

var mostCommon = function(l) {
  return _.sortBy(l, function(a) {
    return _.filter(l, function(b) {
      return b === a;
    }).length;
  }).reverse()[0];
};

var randomTag = function() {
  return "_r" + Math.round(Math.random() * 900000).toString();
};

var addEdges = function(node, g) {
  if (node.type == "rules") {
    _.each(node.vals, function(m) {
      g.push([m.alias, node.alias, ""]);
      g = addEdges(m, g);
    });
    return g;
  }
  if (node.type == "typeVals") {
    g.push([node.child.alias, node.alias, ""]);
    if (node.child.type != "result") {
      g = addEdges(node.child, g);
    }
    return g;
  }
  return g;
};

var showTablesPredict = function (samples, $el, model, tarnode, ftnode) {
    $el.append("<tr><td colspan='4'>Prediction</td></tr>");
    $el.append("<tr><td><b>Psikotest</b></td><td><b>Wawancara</b></td><td><b>Tes Tulis</b></td><td><b>Diterima</b></td></tr>");
    _.each(samples, function (s) {
        var NodeTermRnd = _.map(ftnode, function (x) {
            return s[x];
        });
        $el.append("<tr><td>" + NodeTermRnd.join('</td><td>') + "</td><td><b>" + decision(model, s) + "</td></tr>");
    })
}

var showTablesData = function (datas, $el, tarnode, ftnode, idAsg) {
    console.log("datas : " + JSON.stringify(datas));
    $el.append("<tr><td colspan='4'>Training Data</td></tr>");
    $el.append("<tr><td><b>Psikotest</b></td><td><b>Wawancara</b></td><td><b>Tes Tulis</b></td><td><b>Diterima</b></td></tr>");
    datas.each(function (s) {
        console.log("tarnode : " + s[tarnode]);
        console.log("ftnode : " + ftnode +"|"+ idAsg);
        // $el.append("<tr><td>" + s[idAsg] + "</td><td>" + _.map(ftnode, function (x) {
        $el.append("<tr><td>" + _.map(ftnode, function (x) {
            return s[x];
        }).join('</td><td>') + "</td><td>" + s[tarnode] + "</td></tr>");
    })
}

var drawGraph = function (mods, divId) {
    var edges = new Array();
    edges = addEdges(mods, edges).reverse();
    var chartData = google.visualization.arrayToDataTable(edges.concat(edges));
    var chart = new google.visualization.OrgChart(document.getElementById(divId));
    google.visualization.events.addListener(chart, 'ready', function () {
        _.each($('.google-visualization-orgchart-node'), function (x) {
            var tempVal = $(x).html();
            if (tempVal) {
                $(x).html(tempVal.replace(/_r[0-9]+/, ''));
            }
        });
    });
    chart.draw(chartData, {
        allowHtml: true
    });
}
function add_general_data(uuid){
    return $.ajax({
        url: "request_data/"+uuid,
        dataType: 'json',
        type: 'GET',
        success : function(d) {
            Object.keys(d).forEach(function(i) {
            if (d[i]==null) {
                d[i] = "unknown";
                                }});
                return d
                        }});
}
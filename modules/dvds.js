var request = require('sync-request');

exports.get_dvds_location = (location) => {
    res1 = request('GET', "http://localhost:3035/dvds/all/" + location);
    if (res1.statusCode == 404) {
        return ""
    }
    else if (res1.statusCode == 500) {
        return "500"
    }
    console.log(res1.getBody().toString());
    return res1.getBody().toString();
};

exports.get_team = () => {
    var res1 = request('GET', "http://localhost:3035/dvds/team");
    if (res1.statusCode == 404) {
        return ""
    }
    console.log(res1.getBody().toString());
    return res1.getBody().toString();
}
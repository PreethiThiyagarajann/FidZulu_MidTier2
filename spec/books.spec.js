const { response } = require("express");
const request = require("sync-request");
const base_url = "http://localhost:3034/books/all/";
const team_url = "http://localhost:3034/books/team";
describe("Test bikes service", () => {
    describe("GET on the given location", () => {
        it("returns status code 200 with Durham location", (done) => {
            res = request('GET', base_url + "Durham");
            expect(res.statusCode).toBe(200);
            done();
        });
        it("returns status code 200 with Raleigh location", (done) => {
            res = request('GET', base_url + "Raleigh");
            expect(res.statusCode).toBe(200);
            done();
        });
        it("returns data with bikes on correct location", (done) => {
            res = request('GET', base_url + "Durham");
            expect(res.getBody().toString()).toBeTruthy();
            expect(res.getBody().toString()).toContain("DJ Fat Bike 500W");
            done();
        });
        it("returns 404 with unknown location", (done) => {
            res = request('GET', base_url + "Mexico");
            expect(res.statusCode).toBe(500);
            done();
        })
    });
    describe("GET on the team", () => {
        it("returns names with status 200", (done) => {
            res = request('GET', team_url);
            expect(res.statusCode).toBe(200);
            expect(res.getBody().toString()).toContain("Isaac Klein");
            done();
        });
    });

});
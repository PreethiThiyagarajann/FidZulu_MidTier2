const { response } = require("express");
const request = require("sync-request");
const base_url = "http://localhost:3033/toys/all/";
const team_url = "http://localhost:3033/toys/team";
describe("Test toys service", ()=>{
    describe("GET on the given location", () =>{
        it("returns status code 200 with Durham location", (done)=>{
            res = request('GET', base_url+"Durham");
            expect(res.statusCode).toBe(200);
            done();
        });
        it("returns status code 200 with Raleigh location", (done)=>{
            res = request('GET', base_url+"Raleigh");
            expect(res.statusCode).toBe(200);
            done();
        });
        it("returns data with toys on correct location", (done)=>{
            res = request('GET', base_url+"Durham");
            expect(res.getBody().toString()).toBeTruthy();
            expect(res.getBody().toString()).toContain("Medical Kit");
            done();
        });
        it("returns 404 with unknown location", (done)=>{
            res = request('GET', base_url+"Cuba");
            expect(res.statusCode).toBe(404);
            done();
        })
    });
    describe("GET on the team", () =>{
        it("returns names with status 200", (done)=>{
            res = request('GET', team_url);
            expect(res.statusCode).toBe(200);
            expect(res.getBody().toString()).toContain("Alexander Doudnikov");
            done();
        });
    });
        
});
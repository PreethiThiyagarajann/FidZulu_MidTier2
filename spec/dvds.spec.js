const { response } = require("express");
const request = require("request");
const base_url = "http://localhost:3021/classA/food/all/";
describe("Test food server", ()=>{
    describe("GET /Raleigh", ()=>{
        it("returns status code 200", (done)=>{
            request.get(base_url+"Raleigh", (error, response, body) =>{
                expect(response.statusCode).toBe(200);
                done();
            });
            })
        })
        it("returns food with prices for Raleigh", (done) => {
            request.get(base_url+"Raleigh", (error, response, body) =>{
                expect(body).toBeTruthy();
                expect(body).toContain("The Original Sandwich");
                done();
            })
        });
        // searching unknown location
        it("returns 404 with unknown location", (done) =>{
            request.get(base_url+"Jersey", (error, response, body) =>{
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    })

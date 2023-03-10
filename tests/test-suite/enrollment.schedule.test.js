const request = require('supertest');
const assert = require('chai').assert;
const should = require('chai').should;
const expect = require('chai').expect;

const infra = require('../index');

///////////////////////////////////////////////////////////////////////////

describe('Enrollment schedule tests', function() {

    var agent = request.agent(infra.app);

    it('Create enrollment schedule', function(done) {
        loadEnrollmentTaskCreateModel();
        const createModel = TestCache.EnrollmentTaskCreateModel;
        agent
            .post(`/api/v1/enrollment-schedules/`)
            .set('Content-Type', 'application/json')
            .send(createModel)
            .expect(response => {
                TestCache['ENROLLMENT_SCHEDULE_ID'] = response.body.Data.id;
                //assert.exists(response.body.Data.Xyz, 'Xyz exists.');
                expect(response.body.Data).to.have.property('id');
                expect(response.body.Data).to.have.property('id');
                expect(response.body.Data).to.have.property('EnrollmentId');
                expect(response.body.Data).to.have.property('UserId');
                expect(response.body.Data).to.have.property('CareplanActivityId');
                expect(response.body.Data).to.have.property('AssetId');
                expect(response.body.Data).to.have.property('AssetType');
                expect(response.body.Data).to.have.property('CareplanId');
                expect(response.body.Data).to.have.property('TimeSlot');
                expect(response.body.Data).to.have.property('ScheduledDate');

                expect(response.body.Data.id).to.equal(TestCache.EnrollmentTaskCreateModel.id);
                expect(response.body.Data.EnrollmentId).to.equal(TestCache.EnrollmentTaskCreateModel.EnrollmentId);
                expect(response.body.Data.UserId).to.equal(TestCache.EnrollmentTaskCreateModel.UserId);
                expect(response.body.Data.CareplanActivityId).to.equal(TestCache.EnrollmentTaskCreateModel.CareplanActivityId);
                expect(response.body.Data.AssetId).to.equal(TestCache.EnrollmentTaskCreateModel.AssetId);
                expect(response.body.Data.AssetType).to.equal(TestCache.EnrollmentTaskCreateModel.AssetType);
                expect(response.body.Data.CareplanId).to.equal(TestCache.EnrollmentTaskCreateModel.CareplanId);
                expect(response.body.Data.TimeSlot).to.equal(TestCache.EnrollmentTaskCreateModel.TimeSlot);
                expect(response.body.Data.ScheduledDate).to.equal(TestCache.EnrollmentTaskCreateModel.ScheduledDate);

            })
            .expect(201, done);
    });

    it('Get enrollment schedule by id', function(done) {
        const id = `${TestCache.ENROLLMENT_SCHEDULE_ID}`
        agent
            .get(`/api/v1/enrollment-schedules/${TestCache.ENROLLMENT_SCHEDULE_ID}`)
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${TestCache.AdminJwt}`)
            .expect(response => {
                expect(response.body.Data).to.have.property('id');
                expect(response.body.Data).to.have.property('EnrollmentId');
                expect(response.body.Data).to.have.property('UserId');
                expect(response.body.Data).to.have.property('CareplanActivityId');
                expect(response.body.Data).to.have.property('AssetId');
                expect(response.body.Data).to.have.property('AssetType');
                expect(response.body.Data).to.have.property('CareplanId');
                expect(response.body.Data).to.have.property('TimeSlot');
                expect(response.body.Data).to.have.property('ScheduledDate');

                expect(response.body.Data.id).to.equal(TestCache.EnrollmentTaskCreateModel.id);
                expect(response.body.Data.EnrollmentId).to.equal(TestCache.EnrollmentTaskCreateModel.EnrollmentId);
                expect(response.body.Data.UserId).to.equal(TestCache.EnrollmentTaskCreateModel.UserId);
                expect(response.body.Data.CareplanActivityId).to.equal(TestCache.EnrollmentTaskCreateModel.CareplanActivityId);
                expect(response.body.Data.AssetId).to.equal(TestCache.EnrollmentTaskCreateModel.AssetId);
                expect(response.body.Data.AssetType).to.equal(TestCache.EnrollmentTaskCreateModel.AssetType);
                expect(response.body.Data.CareplanId).to.equal(TestCache.EnrollmentTaskCreateModel.CareplanId);
                expect(response.body.Data.TimeSlot).to.equal(TestCache.EnrollmentTaskCreateModel.TimeSlot);
                expect(response.body.Data.ScheduledDate).to.equal(TestCache.EnrollmentTaskCreateModel.ScheduledDate);

            })
            .expect(200, done);
    });

    it('Search enrollment schedule records', function(done) {
        loadEnrollmentTaskQueryString();
        const queryString = TestCache.EnrollmentTaskQueryString;
        agent
            .get(`/api/v1/enrollment-schedules/search${queryString}`)
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${TestCache.AdminJwt}`)
            .expect(response => {
                expect(response.body.Data).to.have.property('TotalCount');
                expect(response.body.Data).to.have.property('RetrievedCount');
                expect(response.body.Data).to.have.property('PageIndex');
                expect(response.body.Data).to.have.property('ItemsPerPage');
                expect(response.body.Data).to.have.property('Order');
                expect(response.body.Data).to.have.property('OrderedBy');
                expect(response.body.Data.TotalCount).to.greaterThan(0);
                expect(response.body.Data.RetrievedCount).to.greaterThan(0);
                expect(response.body.Data.Items.length).to.greaterThan(0);
            })
            .expect(200, done);
    });

    it('Update enrollment schedule', function(done) {
        loadEnrollmentTaskUpdateModel();
        const updateModel = TestCache.EnrollmentTaskUpdateModel;
        const id = `${TestCache.ENROLLMENT_SCHEDULE_ID}`
        agent
            .put(`/api/v1/enrollment-schedules/${TestCache.ENROLLMENT_SCHEDULE_ID}`)
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${TestCache.AdminJwt}`)
            .send(updateModel)
            .expect(response => {
                expect(response.body.Data).to.have.property('id');
                expect(response.body.Data).to.have.property('EnrollmentId');
                expect(response.body.Data).to.have.property('UserId');
                expect(response.body.Data).to.have.property('CareplanActivityId');
                expect(response.body.Data).to.have.property('AssetId');
                expect(response.body.Data).to.have.property('AssetType');
                expect(response.body.Data).to.have.property('CareplanId');
                expect(response.body.Data).to.have.property('TimeSlot');
                expect(response.body.Data).to.have.property('ScheduledDate');

                expect(response.body.Data.id).to.equal(TestCache.EnrollmentTaskCreateModel.id);
                expect(response.body.Data.EnrollmentId).to.equal(TestCache.EnrollmentTaskCreateModel.EnrollmentId);
                expect(response.body.Data.UserId).to.equal(TestCache.EnrollmentTaskCreateModel.UserId);
                expect(response.body.Data.CareplanActivityId).to.equal(TestCache.EnrollmentTaskCreateModel.CareplanActivityId);
                expect(response.body.Data.AssetId).to.equal(TestCache.EnrollmentTaskCreateModel.AssetId);
                expect(response.body.Data.AssetType).to.equal(TestCache.EnrollmentTaskCreateModel.AssetType);
                expect(response.body.Data.CareplanId).to.equal(TestCache.EnrollmentTaskCreateModel.CareplanId);
                expect(response.body.Data.TimeSlot).to.equal(TestCache.EnrollmentTaskCreateModel.TimeSlot);
                expect(response.body.Data.ScheduledDate).to.equal(TestCache.EnrollmentTaskCreateModel.ScheduledDate);

            })
            .expect(200, done);
    });

    it('Delete enrollment schedule', function(done) {
        const id = `${TestCache.ENROLLMENT_SCHEDULE_ID}`

        //Delete
        agent
            .delete(`/api/v1/enrollment-schedules/${TestCache.ENROLLMENT_SCHEDULE_ID}`)
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${TestCache.AdminJwt}`)
            .expect(response => {
                expect(response.body.Data).to.have.property('Deleted');
                expect(response.body.Data.Deleted).to.equal(true);
            })
            .expect(200, done);

        //Check again if exists!
        agent
            .get(`/api/v1/enrollment-schedules/${TestCache.ENROLLMENT_SCHEDULE_ID}`)
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${TestCache.AdminJwt}`)
            .expect(404, done);

        //Recreate it again because we need it again
        const createModel = TestCache.EnrollmentTaskCreateModel;
        agent
            .post(`/api/v1/enrollment-schedules/`)
            .set('Content-Type', 'application/json')
            .send(createModel)
            .expect(response => {
                TestCache['ENROLLMENT_SCHEDULE_ID'] = response.body.Data.id;
                //assert.exists(response.body.Data.Xyz, 'Xyz exists.');
                expect(response.body.Data).to.have.property('id');
                expect(response.body.Data).to.have.property('id');
                expect(response.body.Data).to.have.property('EnrollmentId');
                expect(response.body.Data).to.have.property('UserId');
                expect(response.body.Data).to.have.property('CareplanActivityId');
                expect(response.body.Data).to.have.property('AssetId');
                expect(response.body.Data).to.have.property('AssetType');
                expect(response.body.Data).to.have.property('CareplanId');
                expect(response.body.Data).to.have.property('TimeSlot');
                expect(response.body.Data).to.have.property('ScheduledDate');

                expect(response.body.Data.id).to.equal(TestCache.EnrollmentTaskCreateModel.id);
                expect(response.body.Data.EnrollmentId).to.equal(TestCache.EnrollmentTaskCreateModel.EnrollmentId);
                expect(response.body.Data.UserId).to.equal(TestCache.EnrollmentTaskCreateModel.UserId);
                expect(response.body.Data.CareplanActivityId).to.equal(TestCache.EnrollmentTaskCreateModel.CareplanActivityId);
                expect(response.body.Data.AssetId).to.equal(TestCache.EnrollmentTaskCreateModel.AssetId);
                expect(response.body.Data.AssetType).to.equal(TestCache.EnrollmentTaskCreateModel.AssetType);
                expect(response.body.Data.CareplanId).to.equal(TestCache.EnrollmentTaskCreateModel.CareplanId);
                expect(response.body.Data.TimeSlot).to.equal(TestCache.EnrollmentTaskCreateModel.TimeSlot);
                expect(response.body.Data.ScheduledDate).to.equal(TestCache.EnrollmentTaskCreateModel.ScheduledDate);

            })
            .expect(201, done);
    });

});

///////////////////////////////////////////////////////////////////////////

function loadEnrollmentTaskCreateModel() {
    const model = {
        AssetType: "Message",

    };
    TestCache.EnrollmentTaskCreateModel = model;
}

function loadEnrollmentTaskUpdateModel() {
    const model = {
        AssetType: "Message",

    };
    TestCache.EnrollmentTaskUpdateModel = model;
}

function loadEnrollmentTaskQueryString() {
    //This is raw query. Please modify to suit the test
    const queryString = '?assetId=xyz&assetType=xyz&careplanId=xyz&timeSlot=xyz'
    return queryString;
}

///////////////////////////////////////////////////////////////////////////
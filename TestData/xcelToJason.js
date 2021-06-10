'use strict';

var fs = require('fs-extra');
const excelToJson = require('convert-excel-to-json');

const result = excelToJson({
    source: fs.readFileSync('./TestData/userRoles.xlsx'),
    header: {
        // Is the number of rows that will be skipped and will not be present at our result object. 
        rows: 1
    }
});

console.log('xcel  output::', result)
console.log('FlukeUserRole_ID1', result.userRoles[0].A)
console.log('FlukeUserRole_USER_ID1', result.userRoles[0].B)
console.log('FlukeUserRole_ROLE_ID1', result.userRoles[0].C)
console.log('FlukeUserRole_created_at1', result.userRoles[0].D)
console.log('FlukeUserRole_firstname1', result.userRoles[0].E)
console.log('FlukeUserRole_lastname1', result.userRoles[0].F)
console.log('FlukeUserRole_ID2', result.userRoles[1].A)
console.log('FlukeUserRole_USER_ID2', result.userRoles[1].B)
console.log('FlukeUserRole_ROLE_ID2', result.userRoles[1].C)
console.log('FlukeUserRole_created_at2', result.userRoles[1].D)
console.log('FlukeUserRole_firstname2', result.userRoles[1].E)
console.log('FlukeUserRole_lastname2', result.userRoles[1].F)


var dataRequired = function () {

    this.testConfig = {

        FlukeUserRole_ID1: result.userRoles[0].A,
        FlukeUserRole_USER_ID1: result.userRoles[0].B,
        FlukeUserRole_ROLE_ID1:result.userRoles[0].C,
        FlukeUserRole_created_at1: result.userRoles[0].D,
        FlukeUserRole_firstname1: result.userRoles[0].E,
        FlukeUserRole_lastname1:result.userRoles[0].F,
        FlukeUserRole_ID2: result.userRoles[1].A,
        FlukeUserRole_USER_ID2: result.userRoles[1].B,
        FlukeUserRole_ROLE_ID2:result.userRoles[1].C,
        FlukeUserRole_created_at2:result.userRoles[1].D,
        FlukeUserRole_firstname2:result.userRoles[1].E,
        FlukeUserRole_lastname2:result.userRoles[1].F,
        FlukeUserRole_fistname_OliverFN:result.userRoles[4].E,
        FlukeUserRole_OliverID:result.userRoles[4].A,
        FlukeUserRole_OliverUserID:result.userRoles[4].B,
        FlukeUserRole_OliverRoleID:result.userRoles[4].C,
        FlukeUserRole_Bandon_firstname:result.userRoles[8].E,
        FlukeUserRole_Bandon_Id:result.userRoles[8].A,
        FlukeUserRole_Bandon_UserId:result.userRoles[8].B,
        FlukeUserRole_Bandon_RoleId:result.userRoles[8].C,
        FlukeUserRole_Austin_FirstName:result.userRoles[12].E,
        FlukeUserRole_Austin_Id:result.userRoles[12].A,
        FlukeUserRole_Austin_UserId:result.userRoles[12].B,
        FlukeUserRole_Austin_RoleId:result.userRoles[12].C,
        FlukeUserRole_Lambert_FirstName:result.userRoles[16].E,
        FlukeUserRole_Lambert_Id:result.userRoles[16].A,
        FlukeUserRole_Lambert_UserId:result.userRoles[16].B,
        FlukeUserRole_Lambert_RoleId:result.userRoles[16].C,
        FlukeUserRole_Joseph_FirstName:result.userRoles[20].E,
        FlukeUserRole_Joseph_Id:result.userRoles[20].A,
        FlukeUserRole_Joseph_UserId:result.userRoles[20].B,
        FlukeUserRole_Joseph_RoleId:result.userRoles[20].C,
//-----------------------------------------------------------------------//
        FlukeProject_CameronNetworks_Id:result.projects[0].A,
        FlukeProject_CameronNetworks_OrgId:result.projects[0].B,
        FlukeProject_CameronNetworks_UserId:result.projects[0].C,
        FlukeProject_CameronNetworks_Name:result.projects[0].D,
        FlukeProject_Keith_Id:result.projects[2].A,
        FlukeProject_Keith_OrgId:result.projects[2].B,
        FlukeProject_Keith_UserId:result.projects[2].C,
        FlukeProject_Keith_Name:result.projects[2].D,


    };


}



module.exports = new dataRequired();
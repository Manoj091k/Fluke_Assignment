const { browser, element } = require("protractor");


class Roles {
    constructor() {



this.ClickOnRolesDropDown= element(by.xpath("(//div/mat-select[contains(@role,'listbox')])[1]"));
this.ClickOnProjectsTab= element(by.xpath("//div[@id='mat-tab-label-0-1']"));
this.ListOfAllRoles= element.all(by.xpath("//div[contains(@id,'mat-select-0-panel')]/mat-option[@role='option']"));
this.ListOfAllProjects= element.all(by.xpath("//div[contains(@id,'mat-select-1-panel')]/mat-option[@role='option']/span"));
this.TechnicianFullName= element(by.xpath("//mat-cell[contains(text(),'Rachel Glover')]"));
this.IdForTech = element(by.xpath("//mat-cell[contains(text(),'86c87f8b-a9a1-48fd-a2a2-b208f9b10494')]"));
this.UserIdTech= element(by.xpath("//mat-cell[contains(text(),'0962152c-b76d-423b-95e0-74653cae41e3')]"));
this.RoleIdTech= element(by.xpath("(//mat-cell[contains(text(),' 753cee57-4360-97bb-d900-feb4e2f38e76 ')])[1]"));
this.PMFullName= element(by.xpath("//mat-cell[contains(text(),'Oliver Pullman')]"));
this.PMId= element(by.xpath("//mat-cell[contains(text(),'d2201ddf-1229-447f-ae78-630da27e2f22')]"));
this.PMUserId= element(by.xpath("//mat-cell[contains(text(),'ab5f9640-98b7-43f2-b2ff-6c9efd3bea54')]"));
this.PMRoleId= element(by.xpath("(//mat-cell[contains(text(),' 4d6f93be-bd21-2277-5797-b7b7841ee1f0 ')])[1]"));
this.CustomerFN= element(by.xpath("//mat-cell[contains(text(),'Brandon Mathis')]"));
this.CustomerId= element(by.xpath("//mat-cell[contains(text(),'ee1ae40b-e55b-4da8-8b37-d07fc78e6bc4')]"));
this.CustomerUserId= element(by.xpath("//mat-cell[contains(text(),'0962152c-b76d-423b-95e0-74653cae41e3')]"));
this.CustomerRoleId= element(by.xpath("(//mat-cell[contains(text(),'61a9b7b5-3b96-4e30-9fbf-a0bd4e64a940')])[1]"));
this.SMFirstName= element(by.xpath("//mat-cell[contains(text(),'Austin Wilkins')]"));
this.SMId= element(by.xpath("//mat-cell[contains(text(),'c0291de8-a238-4269-980c-c5601f017acc')]"));
this.SMUserId= element(by.xpath("//mat-cell[contains(text(),'c9a4c293-c2f7-4432-9264-56e2d683f403')]"));
this.SMRoleId= element(by.xpath("(//mat-cell[contains(text(),'33968c05-1f6c-4ddd-a4c7-ed5ec23b10e2')])[1]"));
this.OwnerFN= element(by.xpath("//mat-cell[contains(text(),'Yvonne Lambert')]"));
this.OwnerID= element(by.xpath("//mat-cell[contains(text(),'13878ad9-9866-4075-ad08-ab6405c771ba')]"));
this.OwnerUserID= element(by.xpath("//mat-cell[contains(text(),'0962152c-b76d-423b-95e0-74653cae41e3')]"));
this.OwnerRoleId= element(by.xpath("(//mat-cell[contains(text(),'377615a5-4a03-0c52-e7ed-458d9e093c30')])[1]"));
this.AdminFN= element(by.xpath("//mat-cell[contains(text(),'Joseph Mills')]"));
this.AdminId= element(by.xpath("//mat-cell[contains(text(),'e7c7edf5-1a8f-441b-b94b-70440e82bc04')]"));
this.AdminUserId= element(by.xpath("//mat-cell[contains(text(),'6f8297f7-6f77-4bd5-b27b-929a4349c19a')]"));
this.AdminRoleId= element(by.xpath("(//mat-cell[contains(text(),'46c278b7-285c-35fd-158a-9739e44d14da')])[1]"))
//--------------------------------------------------------------------------------------------------------------------
this.CameronNetworkId= element(by.xpath("//mat-cell[contains(text(),'aacc7893-217f-4c21-969a-1f53dad50345')]"));
this.CameronNetworkOrgId= element(by.xpath("(//mat-cell[contains(text(),'01f03f7d-8636-4e9c-9147-167cc4f0ab87')])[1]"));
this.CameronNetworkUserId= element(by.xpath("(//mat-cell[contains(text(),'0962152c-b76d-423b-95e0-74653cae41e3')])[1]"));
this.CameronNetworkName= element(by.xpath("(//mat-cell[contains(text(),' Sub3')])[1]"));
this.KeithId= element(by.xpath("//mat-cell[contains(text(),'d7432b52-82e2-40ed-9b84-f91cfe682a96')]"));
this.KeithOrgId=element(by.xpath("(//mat-cell[contains(text(),'0145a1e0-de12-4138-b963-de4ab5f8ffdc')])[1]"));
this.KeithUserId=element(by.xpath("(//mat-cell[contains(text(),'82e4e51f-275e-425f-a22b-582724204337')])[1]"));
this.KeithName=element(by.xpath("(//mat-cell[contains(text(),'foo2')])[1]"));
this.selectProject= element(by.xpath("//span[contains(text(),'Cameron Networks')]"));
this.verifyHeaderInfo= element(by.xpath("//td[contains(text(),'FLUKE NETWORKS')]"))
this.verifyRolesPageInfo= element(by.xpath("//div[contains(text(),'Find users by selecting role')]"))
this.VerifyProjectPageInfo= element(by.xpath("//div[contains(text(),'Find projects by selecting organizations')]"))



    }


}

module.exports = new Roles();
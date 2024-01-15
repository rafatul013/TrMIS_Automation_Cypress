import BaseUrl from "../pages/BaseUrl";

describe("Check TrMIS Website",()=>{
    const visitpage =new BaseUrl();

        it("Visit TrMIS website successfully",()=>{
            visitpage.visitpage();
            
        })
        it("Visit TrMIS login successfully",()=>{
            visitpage.visitadmindashboard();
            
        })

    })
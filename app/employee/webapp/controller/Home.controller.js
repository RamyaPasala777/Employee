
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/FilterOperator",
], (Controller,FilterOperator) => {
    "use strict";

    return Controller.extend("com.app.employee.controller.Home", {
        onInit() {
           var oModel =this.getOwnerComponent().getModel("ModelV2");
           this.getView().setModel(oModel)
        },
        onSearch:function(){
           var that=this;
           var oSearchFeild=this.getView().byId("searchField").getValue()
           var oModel =this.getOwnerComponent().getModel("ModelV2");
        //    if(!(oSearchFeild)){
        //     oModel.read(`/Books`,{
        //         success:function(oData){
        //             var oProductDeatils=[];
                   
        //             oProductDeatils.push({
        //                 "ID":oData.ID,
        //                 "name":oData.name,
        //                 "age":oData.age,
        //                 "dept":oData.dept,
        //                 "sal":oData.sal
        //             });
        //             var oProductModel = new sap.ui.model.json.JSONModel({ products: oProductDeatils });
        //             that.byId("idProductsTable").setModel(oProductModel);
        //             that.byId("idProductsTable").bindItems({
        //                 path: "/products",
        //                 template: new sap.m.ColumnListItem({
        //                     cells: [
        //                         new sap.m.Text({ text: "{ID}" }),
        //                         new sap.m.Text({ text: "{name}" }),
        //                         new sap.m.Text({ text: "{age}" }),
        //                         new sap.m.Text({ text: "{dept}" }),
        //                         new sap.m.Text({ text: "{sal}" }),
        //                     ]
        //                 })
        //             });
    
        //         },
        //         error:function(){
    
        //         }
        //        })
        //     return
        //    }

           oModel.read(`/Books(${oSearchFeild})`,{
            success:function(oData){
                var oProductDeatils=[];
               
                oProductDeatils.push({
                    "ID":oData.ID,
                    "name":oData.name,
                    "age":oData.age,
                    "dept":oData.dept,
                    "sal":oData.sal
                });
                var oProductModel = new sap.ui.model.json.JSONModel({ products: oProductDeatils });
                that.byId("idProductsTable").setModel(oProductModel);
                that.byId("idProductsTable").bindItems({
                    path: "/products",
                    template: new sap.m.ColumnListItem({
                        cells: [
                            new sap.m.Text({ text: "{ID}" }),
                            new sap.m.Text({ text: "{name}" }),
                            new sap.m.Text({ text: "{age}" }),
                            new sap.m.Text({ text: "{dept}" }),
                            new sap.m.Text({ text: "{sal}" }),
                        ]
                    })
                });

            },
            error:function(){

            }
           })
        }
    });
});

MyApp.controller("HomeCtrl",function($http){

    var vm = this;
    vm.data = {
        products:null,
        selectedProd:null
    }
    
    $http.get("/products").then(function(response){
        vm.data.products=response.data;
        vm.data.products.productList.forEach(function(prod){
            if(prod.imageUrls["xs"] != undefined){
                prod.imageUrls["xs"]=prod.imageUrls["sm"];
            }
        });
    },function(){

    });
    

    vm.manipulateDesc=function(desc){
        return desc.length > 60 ? desc.substr(0,60) +" ..." : desc; 
    }
    
    vm.changeHoverProd=function(index){
        vm.data.selectedProd=vm.data.products.productList[index];
    }
    vm.showPrice=function(index){
        alert( vm.data.selectedProd.pricing.price.was);
    }
});
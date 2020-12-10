angular.module('myapp',[])
.controller('myctrl',function($scope)
{
    $scope.listProducts=[
        {id:'p01',name:'Bike_Tyres',price:4200,quantity:580},
        {id:'p02',name:'Helmets',price:900,quantity:2440},
        {id:'p03',name:'Head_light',price:11500,quantity:1040},
        {id:'p04',name:'Dif',price:9999,quantity:3000},
        {id:'p05',name:'Engine_Oil',price:850,quantity:4000}
    ];
    $scope.save=function()
    {
        var index=getindex($scope.id);
        $scope.listProducts[index].name=$scope.name;
        $scope.listProducts[index].price=$scope.price;
        $scope.listProducts[index].quantity=$scope.quantity;
    }
    $scope.add=function()
    {
        $scope.listProducts.push({
            id:$scope.id,name:$scope.name,price:$scope.price,quantity:$scope.quantity
        });
    }
    function getindex(id)
    {
        for(var i=0;i<$scope.listProducts.length;i++)
        if($scope.listProducts[i].id==id)
        return i;
        return -1;
    }
    $scope.edit=function(id)
    {
        var index=this.$index;
        var product=$scope.listProducts[index];
        $scope.id=product.id;
        $scope.name=product.name;
        $scope.price=product.price;
        $scope.quantity=product.quantity;
    }
    $scope.delete=function()
    {
        var result=confirm('Are you sure?');
        if(result==true)
        {
            var index=this.$index;
            $scope.listProducts.splice(index,1);
        }
    };
});
$(function () {
    ko.applyBindings(IndexVM);
});

var IndexVM = {
    viewEmployeeList: function(){
        $.ajax({
            url: '/Employee/Index',
            type: 'get',
            contentType: 'application/json',
            success: function (result) {
            },
            error: function (err) {
                console.log('Error: ' + err);
            },
            complete: function () {
                window.location.href = '/Employee/Index';
            }
        });
    }
};

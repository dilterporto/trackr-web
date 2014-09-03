var app = {
    model: function(){        
        var _model = $('#__model');
        
        return JSON.parse(_model.val());        
    }
};
(function () {

    "use strict";

    var copyOwnProperties = function (from, to) {
        for (var propertyName in from) {
            if (from.hasOwnProperty(propertyName)) {
                to[propertyName] = from[propertyName];
            }
        }
    };

    var _new = function (additionalProperties) {

        var factory = Object.create(this);

        factory.create = function () {
            var instance = Object.create(factory);

            if (typeof instance.initialize === "function") {
                instance.initialize.apply(instance, arguments);
            }

            return instance;
        };

        copyOwnProperties(additionalProperties, factory);

        return factory;
    };

    Object.new = _new;

}());
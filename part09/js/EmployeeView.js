var EmployeeView = function(adapter, template, employee) {

    this.initialize = function() {
        this.el = $('<div/>');
        this.el.on('click', '.add-location-btn', this.addLocation);
    };

    this.render = function() {
        this.el.html(template(employee));
        return this;
    };

    this.addLocation = function(event) {
        event.preventDefault();
        console.log('addLocation');
        navigator.geolocation.getCurrentPosition(
            function(position) {
                alert("Lat: " + position.coords.latitude + ' Lng:' + position.coords.longitude);
            },
            function() {
                alert('Error getting location');
            });
        return false;
    };

    this.initialize();

}
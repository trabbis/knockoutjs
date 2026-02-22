// ViewModel for the KnockoutJS application
function AppViewModel() {
    var self = this;

    self.firstName = ko.observable("John");
    self.lastName = ko.observable("Doe");
    self.newItemText = ko.observable("");
    self.fullName = ko.computed(function() {
        return self.firstName() + " " + self.lastName();
    }, self);
    self.items = ko.observableArray([
        { name: "Sample Item 1" },
        { name: "Sample Item 2" }
    ]);
    self.addItem = function() {
        var text = self.newItemText().trim();
        if (text) {
            self.items.push({ name: text });
            self.newItemText("");
        }
    };
    self.removeItem = function(item) {
        self.items.remove(item);
    };
    self.addItemOnEnter = function(data, event) {
        if (event.keyCode === 13) {
            self.addItem();
            return false;
        }
        return true;
    };
}

document.addEventListener("DOMContentLoaded", function() {
    ko.applyBindings(new AppViewModel());
});

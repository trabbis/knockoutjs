// ViewModel for the KnockoutJS application
function AppViewModel() {
    // Observable properties
    this.firstName = ko.observable("John");
    this.lastName = ko.observable("Doe");
    this.newItemText = ko.observable("");
    
    // Computed property - automatically updates when firstName or lastName changes
    this.fullName = ko.computed(function() {
        return this.firstName() + " " + this.lastName();
    }, this);
    
    // Observable array to store items
    this.items = ko.observableArray([
        { name: "Sample Item 1" },
        { name: "Sample Item 2" }
    ]);
    
    // Method to add a new item
    this.addItem = () => {
        const text = this.newItemText().trim();
        if (text) {
            this.items.push({ name: text });
            this.newItemText(""); // Clear the input
        }
    };
    
    // Method to remove an item
    this.removeItem = (item) => {
        this.items.remove(item);
    };
    
    // Method to add item on Enter key press
    this.addItemOnEnter = (data, event) => {
        if (event.keyCode === 13) { // Enter key
            this.addItem();
            return false;
        }
        return true;
    };
}

// Apply bindings when DOM is ready
document.addEventListener("DOMContentLoaded", function() {
    ko.applyBindings(new AppViewModel());
});

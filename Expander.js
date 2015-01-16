var Expander = {};

// Helper function to create divs
// Has the option to give the div className(s)
Expander.makeDiv = function(classAttr) {
    var div = document.createElement('div');
    div.className = classAttr;
    return div;
}

// Expander will be called on a div and 
// expand it to have more funcitonality
// pass in the root div as a paramerter
Expander.makeExpander = function(root) {
    // find all the children items within the root.
    var root = $(root),
        children = $(root).children();

    // Add a border class if there are child elements in the root
    if (children.length > 0) {
        root.addClass('generic-border');
    }

    // For each child item add a up / down button and a title
    children.each(function(index, element) {
        $(this).addClass('page');

        // Use a container item for grouping all the content
        containerItem = $("<div class ='container-item'></div>")

        containerItem.append("<i class='fa fa-angle-up button'></i>");
        containerItem.append("<i class='fa fa-angle-down button'></i>");
        containerItem.append("<div class='title'>" + this.title + "</div>")
        containerItem.append(this);

        // Attach all item to the root
        root.append(containerItem);
    });

    // Gather all the rootChildren
    var rootChildren = root.children();

    // Hide the text when you click the title and change color
    rootChildren.children('.title').click(function() {
        $(this).toggleClass('red');
        $(this).next().toggleClass('u-display-none');
    });

    // Move the child item down when you click the down button
    rootChildren.children('.fa-angle-down').click(function() {
        var parent = $(this).parent();
        parent.before(parent.next());
    });

    // Move the child item up when you click the up button
    rootChildren.children('.fa-angle-up').click(function() {
        var parent = $(this).parent();
        parent.prev().before(parent);
    });
}

window.onload = function() {
    $('.root').each(function() {
        Expander.makeExpander(this);
    });
};
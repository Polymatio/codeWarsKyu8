// Create an object for the pirate crew spies to create a new ship object based on their observations.
// Making properties for the ship
// Adding a method to determine if the ship cab hold the loot on board
// It must hold more then 20 units without crew mates
// Creating isWorthIt method to calculate the units of loot on board

function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = function() {
        return this.draft - this.crew * 1.5 >20;
    }
}
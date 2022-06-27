//Create an object for the pirate crew spies to create a new ship object based on their observations.

function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = function() {
        return this.draft - this.crew * 1.5 >20;
    }
}
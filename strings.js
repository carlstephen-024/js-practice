let actor = {
    ActorFirstName: 'Patrick',
    ActorLastName: 'Garcia',
    get fullName() {
        return this.ActorFirstName + ' ' + this.ActorLastName;
    },
    message: 'My favorite actor is'
};

// Appending the full name and message
actor.message += ` ${actor.fullName}, his best show is Silicon Valley`;

console.log(actor.fullName);
console.log(actor.message);


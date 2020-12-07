const generateCards = (employees) => {
    console.log('employees:', employees);

    const createManager = (manager) => {
        return `
        <div class="col s4">
            <div class="card deep-blue accent-3">
                <div class="card content teal lighten-3 center-align">
                    <h2 class="card-title">${manager.getName()}</h2>
                    <h5><span class="icon icons"><i class="fas fa-briefcase"></i></span>${manager.getRole()}</h5>
                </div>
                <div class="card-content">
                    <div class="card-content">
                        <span>ID:${manager.getId()}</span>
                    </div>
                    <div class="card-content">
                        <span>Email:<a class='black-text' href='mailto:${manager.getEmail()}'> ${manager.getEmail()}</a></span>
                    </div>
                    <div class="card-content">
                        <span>Office Number: ${manager.officeNumber}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    };


    const createEngineer = (engineer) => {
        return `
            <div clas= "col s4"> `
    };
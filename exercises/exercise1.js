class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
        this.admin = false;
    }

    isAdmin(){
        return this.admin;
    }
}

class Admin extends User{
    constructor(email, password){
        super(email, password);
        this.admin = true;
    }
}

const user1 = new User('email@test.com', 'password123');
const adm1 = new Admin('email@test.com', 'password123');

console.log(user1.isAdmin());
console.log(adm1.isAdmin());
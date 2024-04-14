class User {
    constructor(public name: string) {}
  
    readContent(): void {
      console.log(`${this.name} is reading content.`);
    }
  }
  
  class Administrator extends User {
    constructor(name: string) {
      super(name);
    }
  
    editContent(): void {
      console.log(`${this.name} is editing content.`);
    }
  }
  
  const appUser = new User('Jerry');
  const appAdmin = new Administrator('Eyrma');
  
  appUser.readContent(); // Output: Jerry is reading content.
  appAdmin.readContent(); // Output: Eyrma is reading content.
  appAdmin.editContent(); // Output: Eyrma is editing content.
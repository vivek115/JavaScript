class Profile{
    age =20;
    Name='vivek'
    qualification='b.tech'
    get location(){
        return 'canada'
    }
constructor(youman,showman){
this.youman=youman;
this.showman=showman
}
 fullname(){
    console.log(this.youman + this.showman);
}
}
let profile = new Profile("vivek", "joshi")
console.log(profile.age);
console.log(profile.location);
console.log(profile.fullname());
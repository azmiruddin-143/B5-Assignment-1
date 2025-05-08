# What are some differences between interfaces and types in TypeScript?
## Both interface and type are used to define the structure of data. That is, they are useful for describing what an object or data will look like.
## Answere
- If you only want to create the structure of an object, then it is better to use Interface.

- And if you have to work with many types (such as union, intersection) then it is better to use type

# Example
## interface User {
 ## name: string;
 ## age: number;
}

## const user1: User = {
 ## name: "Azmir",
 ## age: 20
## };

## type ID = string | number;

## type Admin = {
## name: string;
## role: string;
## };

## type SuperAdmin = Admin & { accessLevel: number };

## const admin1: SuperAdmin = {
## name: "Azmir",
## role: "Manager",
## accessLevel: 5
## };



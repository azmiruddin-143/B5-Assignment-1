# What are some differences between interfaces and types in TypeScript?
## Both interface and type are used to define the structure of data. That is, they are useful for describing what an object or data will look like.
## Answere
- If you only want to create the structure of an object, then it is better to use Interface.

- And if you have to work with many types (such as union, intersection) then it is better to use type

# Example
##  Interface Example

```ts
interface User {
  name: string;
  age: number;
}

const user1: User = {
  name: "Azmir",
  age: 20
};
```
---
##  Type Alias Example

```ts
type ID = string | number;
```

---

##  Intersection Type Example

```ts
type Admin = {
  name: string;
  role: string;
};

type SuperAdmin = Admin & { accessLevel: number };

const admin1: SuperAdmin = {
  name: "Azmir Uddin",
  role: "Manager",
  accessLevel: 5
};
```
---


# What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

## enum (full form: enumeration) is a feature of TypeScript that allows us to create a group of specific values ​​— so that we don't have to write them over and over again, and the code is cleaner and safer.

## Suppose I'm building an app where the user selects their favorite day. I want the user to only enter Monday, Tuesday, Wednesday — nothing else.

## Now, if I use the string ("Monday") directly, there's a risk of typos or incorrect strings. For example, someone might write "Monday".

## Now if I use enum, I will decide in advance what values ​​the user can provide. This increases type safety.

# Example


##  Enum Example

```ts
enum FavoriteDay {
  Monday,
  Tuesday,
  Wednesday
}

function chooseFavoriteDay(day: FavoriteDay) {
  if (day === FavoriteDay.Monday) {
    console.log("You chose Monday!");
  } else if (day === FavoriteDay.Tuesday) {
    console.log("You chose Tuesday!");
  } else {
    console.log("You chose Wednesday!");
  }
}

chooseFavoriteDay(FavoriteDay.Monday); // Output: You chose Monday!
```

---

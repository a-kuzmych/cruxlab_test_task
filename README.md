# Password Validator

A simple tool to validate passwords based on rules.

## Demo Link
[View the live demo](https://a-kuzmych.github.io/cruxlab_test_task/)

## Task Description
Given a text file with the following format:
```
a 1-5: abcdj
z 2-4: asfalseiruqwo
b 3-6: bhhkkbbjjjb
```
Each line consists of a password rule and a password. The rule specifies a character and how many times it must appear in the password. For example:
- In the first line, the rule "a 1-5" means the character 'a' must appear between 1 and 5 times.
- In the second line, the rule "z 2-4" requires 'z' to appear between 2 and 4 times, but it appears 0 times, so the password is invalid.

The task is to count how many passwords are valid according to their rules. In the example above, two passwords (1st and 3rd) are valid.

## License
This is a test project for demonstration purposes.


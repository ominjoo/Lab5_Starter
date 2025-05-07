# Lab 5 - Starter
Participants: Minjoo O

Expose: https://ominjoo.github.io/Lab5_Starter/expose.html


Answers to Explore pt. 3:
1. No, I would not use a unit test to test the "message" feature of a messaging application because unit tests are meant to test small, isolated pieces of logic, but this is testing functionality on an application level and includes things like the network + backend + UI.
2. Yes, I would use unit testing to test the "max message length" feature because that is self-contained piece of logic that can be easily verified by checking the behavior of the app when the character limit is exceeded. 
# This repo has some practice for you!

Steps to get these on your computer.
1. Fork up at the top
    ![](./fork.png)
2. Clone down 
    ![](./code.png)
    ```
    git clone 'your url from the fork'
    ```
3. To Validate it is there and then
    ```
    ls
    ```  
 
    ```
        cd 'the file'
    ``` 
    ```
    code .

## Exercies can be found in exercises.js
## Answers to the exercises can be found in solutions.js. You are encouraged to only view the solutions when you are stuck and googling a solution has not helped. 

## functions.js contains empty functions and instructions for what the function should do.  Tests have been written for these functions already in example.test.js.  When your test passes, you have written the function! (Read through the tests to get a sense of how they are set up!) Once your test passes, think about refactoring.  Is there a way to make your code cleaner?  If you refactor your function and the test still passes, good job! 







## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"**
1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1) **For each HTML element ask: Why do I need this?** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1) **Think about how to validate each of your features according to a Definition of Done**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)

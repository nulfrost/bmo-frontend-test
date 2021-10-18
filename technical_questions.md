1. How long did you spend on the coding assignment?

I spent just under about 7 to 8 hours working on this assignment.

- a.
  - I would possibly do better job of creating reusable components
  - Add more testing and test edge cases
  - Move some of the utility functions I created into a general file
  - Possibly pagination, hadn't realized that there was such a thing until after
  - Better styling, currently it is really basic and barebones
  - Could have done a better job with accessibility, could have done testing with Mac VoiceOver

2. What was the most useful feature that was added to the latest version of your chosen language?

I think the most recent feature that was added that would probably be useful for me is `Promise.any`. I have yet to use it in an actual project but I assume I will soon.

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(
    () => resolve("Promise 1 resolves at some point"),
    Math.floor(Math.random() * 100)
  );
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(
    () => resolve("Promise 2 resolves at some point"),
    Math.floor(Math.random() * 100)
  );
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(
    () => resolve("Promise 3 resolves at some point"),
    Math.floor(Math.random() * 100)
  );
});

Promise.any([promise1, promise2, promise3]).then((value) => {
  // whichever one wins the random lottery will win
});
```

3. How would you track down a performance issue in production? Have you ever had to do this?

I haven't done it in production but have done so in a test environment, it was related to an input having a really delayed response during user interaction. In this case the input state and setter function were being passed down through multiple components that did not need to know about that state. I had already known what the issue was but and knew how to solve it but if there were a case where I was unsure I would use the performance tab plus the react profiler in the devtools to debug a performance issue. Not something I've done before but I assume that would be the place to start. For tracking down something on specific device I'd probably use a device simulator and troubleshoot manually.

4. How would you improve the API that you just used?

- I would have it be https by default
- I would have the images be uniform and for anything without an image there would be a placeholder with the book title
- I would add properly formatted dates
- Some response items aren't consistent, probably at some point either filtering those out or filling that data in

5. Please describe yourself using correctly formatted JSON.

```json
{
  "fullName": "Dane Miller",
  "occupation": "Frontend Developer",
  "favoriteFood": "Poutine",
  "hobbies": ["Skateboarding", "Video Games", "Music"]
}
```

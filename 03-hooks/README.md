# **1. Counter with [useState]**
**Prompt:** _Create a component that displays a number and two buttons. One button should increment the number by 1, and the other should decrement the number by 1. Use the **[useState]** Hook to manage the number state._


# **2. To-Do List with [useState] and [useEffect]**
**Prompt:** _Create a to-do list. When a new task is added, it should appear in a list on the screen. When a task is added, use the **[useEffect]** Hook to save the list of tasks to **[localStorage]** so that the list persists after reloading the page. Use **[useState]** to manage the tasks._


# **3. Clock with [useState] and [useEffect]**
**Prompt:** _Create a component that shows a digital clock in real-time. Use **[useState]** to hold the current time and [useEffect] to update it every second. Use **[setInterval]** inside **[useEffect]** to update the state every 1000 ms (1 second), and ensure you clean up the interval when the component unmounts._


# **4. Form with Validation using [useState]**
**Prompt:** _Create a form with a text field where the user must input an email address. Use **[useState]** to manage the input field value and display an error message if the email format is invalid (for example, if it does not contain "@" and ".com"). Add a submit button and disable it if the email is not valid._


# **5. Counter with [useReducer]**
**Prompt:** _Create a counter with buttons to increment, decrement, and the reset counter value. Instead of using **[useState]**, use **[useReducer]** to manage the counter state. The reducer should have three actions: "INCREMENT", "DECREMENT", and "RESET"._
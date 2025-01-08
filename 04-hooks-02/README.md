# **1. Timer**
**Prompt:** Create a component called `Timer` that:  
- Uses **[useState]** to manage a timer starting at 0 seconds.  
- Uses **[useEffect]** to increment the timer by 1 second automatically.  
- Has two buttons: **Pause** and **Reset**.  
  - The **Pause** button should stop the timer.  
  - The **Reset** button should reset the timer to 0 and restart it.

# **2. UserList**
**Prompt:** Create a component called `UserList` that:  
- Uses **[useEffect]** to fetch data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users) to get a list of users.  
- Stores the data in the state using **[useState]**.  
- Renders the user names in a list.  
- Displays a "Loading..." message while fetching the data.

# **3. LoginForm**
**Prompt:** Create a component called `LoginForm` that:  
- Contains a form with two fields: **Username** and **Password**.  
- Uses **[useState]** to manage the state of each field.  
- Displays the entered username and password in the console when the form is submitted.

# **4. User Search**
**Prompt:** Create an application that:  
- Uses an input field (`<input>`) to allow the user to type a search term.  
- Uses `useState` to store the search term.  
- Uses `useEffect` to simulate an API call every time the search term changes (introduce a 500ms delay to simulate the call).  
- Displays a list of results based on the search term (use a predefined list of users such as `["John", "Maria", "Peter", "Anna", "Carlos"]`).  
- Shows a message if no results are found.  

**Requirements:**  
- Update the search term in real time as the user types.  
- Simulate the API call using a `setTimeout` with a 500ms delay to avoid triggering it on every keystroke.  
- Display a message like "Enter a search term" if the input field is empty.  

# **5. AdvancedCounter**
**Prompt:** Create a component called `AdvancedCounter` that:  
- Uses **[useReducer]** to manage a counter with the following actions: increment, decrement, reset.  
- Provides a button for each action.  
- Includes an initial state for the counter, set to 0.

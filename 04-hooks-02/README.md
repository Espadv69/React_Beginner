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

# **4. Theme Toggle**
**Prompt:** Create an application that:  
- Uses a `ThemeContext` to manage a dark/light theme.  
- Provides a button to toggle between the dark and light themes.  
- Changes the page styles based on the selected theme.

# **5. AdvancedCounter**
**Prompt:** Create a component called `AdvancedCounter` that:  
- Uses **[useReducer]** to manage a counter with the following actions: increment, decrement, reset.  
- Provides a button for each action.  
- Includes an initial state for the counter, set to 0.

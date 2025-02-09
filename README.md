# Express.js Route Handler Missing Error Handling

This repository demonstrates a common error in Express.js route handlers: missing error handling for invalid input.  The `bug.js` file shows a route that's vulnerable to crashes or unexpected behavior when passed an invalid user ID.  The `bugSolution.js` file provides a corrected version with robust error handling.
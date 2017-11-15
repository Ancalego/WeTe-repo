// tasks.js
// This script manages a to-do list.

// Need a global variable:
var tasks = []; 

// Function called when the form is submitted.
// Function adds a task to the global array.
function addTask() {
    'use strict';

    // Get the task:
    var task = document.getElementById('task');

    // Reference to where the output goes:
    var output = document.getElementById('output');
    
    // For the output:
    var message = '';

    if (task.value) {
    
        // Add the item to the array:
        tasks.push(task.value);
        
        // Update the page:
        message = '<h2>To-Do</h2><ol>';
        for (var i = 0, count = tasks.length; i < count; i++) {
            message += '<li>' + tasks[i] + '</li>';
        }
        message += '</ol>';
        output.innerHTML = message;
        
    } // End of task.value IF.

    // Return false to prevent submission:
    return false;
    
} // End of addTask() function.
function removeduplicates() {
	'use strict';
	var alt = tasks
	.map((task)=>{
		return {count: 1, task: task}
	})
	.reduce((a, b)=> {
		a[b.task] = (a[b.name] || 0) + b.count
		return a},{})
	var duplicates = Object.keys(alt).filter((a)=> uniq[a]>1
	
	}

	
// Initial setup:
function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = addTask;
} // End of init() function.
window.onload = init;

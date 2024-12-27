// List of available courses with future start and end dates, and faculty names
const courses = [
    {
        id: 1,
        name: 'Artificial Intelligence',
        startDate: '2024-12-01',
        endDate: '2025-05-31',
        faculty: 'Dr. Alice Morgan',
        description: 'Learn the fundamentals and advanced topics of Artificial Intelligence.'
    },
    {
        id: 2,
        name: 'Machine Learning',
        startDate: '2025-01-10',
        endDate: '2025-07-10',
        faculty: 'Prof. Mark Smith',
        description: 'Dive deep into Machine Learning concepts and real-world applications.'
    },
    {
        id: 3,
        name: 'Cloud Computing',
        startDate: '2025-02-15',
        endDate: '2025-08-15',
        faculty: 'Dr. Emily White',
        description: 'Understand the power of Cloud Computing and how it is changing industries.'
    },
    {
        id: 4,
        name: 'Cyber Security',
        startDate: '2025-03-20',
        endDate: '2025-09-20',
        faculty: 'Mr. Richard Black',
        description: 'Get hands-on with Cyber Security concepts, including ethical hacking and network security.'
    },
    {
        id: 5,
        name: 'Python Programming',
        startDate: '2025-04-25',
        endDate: '2025-10-25',
        faculty: 'Dr. Laura Green',
        description: 'Master Python programming from beginner to expert level.'
    },
    {
        id: 6,
        name: 'Full Stack Web Technology',
        startDate: '2025-05-30',
        endDate: '2025-11-30',
        faculty: 'Mr. Michael Brown',
        description: 'Learn both frontend and backend technologies to become a full-stack developer.'
    }
];

// Display the list of courses on the page
function loadCourses() {
    const courseList = document.getElementById('courseList');
    courses.forEach(course => {
        const listItem = document.createElement('li');
        listItem.textContent = course.name;
        listItem.onclick = () => showCourseDetails(course);
        courseList.appendChild(listItem);
    });
}

// Display the details of a selected course
function showCourseDetails(course) {
    // Hide the available courses section
    document.getElementById('availableCourses').style.display = 'none';
    
    // Show the course details section
    document.getElementById('courseDetails').style.display = 'block';
    
    // Set course details
    document.getElementById('courseDescription').textContent = course.description;
    document.getElementById('startDate').textContent = course.startDate;
    document.getElementById('endDate').textContent = course.endDate;
    document.getElementById('facultyName').textContent = course.faculty;
}

// Go back to the list of courses
function backToCourses() {
    // Show the available courses and hide the course details
    document.getElementById('availableCourses').style.display = 'block';
    document.getElementById('courseDetails').style.display = 'none';
}

// Display a success message when the user clicks the "Complete Process" button
function completeProcess() {
    const selectedCourseName = document.getElementById('courseDescription').textContent;
    const courseName = selectedCourseName.split('.')[0]; // Get course name from the description

    // Display success message with course name
    alert(`Successfully registered for the ${courseName} course!`);

    // Redirect to the home page after clicking "OK"
    window.location.href = 'index.html'; // Change 'index.html' to your home page URL
}

// Load the courses when the page is loaded
window.onload = loadCourses;

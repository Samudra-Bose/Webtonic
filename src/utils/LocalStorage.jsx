localStorage.clear()

const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "e@e.com",
    password: "123",
    taskCounts: {
      active: 3,
      newTask: 2,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Complete Project Report",
        taskDescription: "Prepare and submit the monthly project progress report.",
        taskDate: "2026-08-20",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Documentation",
        taskDescription: "Update the project documentation with the latest changes.",
        taskDate: "2026-08-17",
        category: "Documentation"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Find and fix the authentication issue in the login system.",
        taskDate: "2026-08-21",
        category: "Bug Fixing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team Meeting",
        taskDescription: "Attend the weekly development team meeting.",
        taskDate: "2026-08-18",
        category: "Meeting"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Implement User Dashboard",
        taskDescription: "Build the employee dashboard with required components.",
        taskDate: "2026-08-23",
        category: "Development"
      }
    ]
  },

  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 3,
      newTask: 2,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Dashboard",
        taskDescription: "Create the UI design for the employee dashboard.",
        taskDate: "2026-08-21",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Review Pull Requests",
        taskDescription: "Review and approve pending pull requests.",
        taskDate: "2026-08-18",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "API Documentation",
        taskDescription: "Document the latest API endpoints and parameters.",
        taskDate: "2026-08-22",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Application",
        taskDescription: "Deploy the latest version of the application to staging.",
        taskDate: "2026-08-16",
        category: "Deployment"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Test New Features",
        taskDescription: "Perform functional testing on the newly implemented features.",
        taskDate: "2026-08-24",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review the code submitted by the development team.",
        taskDate: "2026-08-15",
        category: "Development"
      }
    ]
  },

  {
    id: 3,
    firstName: "Arjun",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Presentation",
        taskDescription: "Prepare slides for the upcoming client presentation.",
        taskDate: "2026-08-22",
        category: "Presentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Analyze Sales Data",
        taskDescription: "Analyze this month's sales performance and prepare insights.",
        taskDate: "2026-08-17",
        category: "Analysis"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Send Client Report",
        taskDescription: "Send the finalized project report to the client.",
        taskDate: "2026-08-16",
        category: "Reporting"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Customer Feedback",
        taskDescription: "Collect and organize feedback from recent customers.",
        taskDate: "2026-08-21",
        category: "Research"
      }
    ]
  },

  {
    id: 4,
    firstName: "Neha",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 4,
      newTask: 2,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Cleanup",
        taskDescription: "Remove duplicate and outdated records from the database.",
        taskDate: "2026-08-21",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription: "Create a complete backup of the production database.",
        taskDate: "2026-08-17",
        category: "Database"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Optimize Queries",
        taskDescription: "Identify and optimize slow database queries.",
        taskDate: "2026-08-23",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Security Audit",
        taskDescription: "Perform a security audit of the application.",
        taskDate: "2026-08-14",
        category: "Security"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Database Schema",
        taskDescription: "Apply the updated database schema to the development environment.",
        taskDate: "2026-08-25",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Check Server Logs",
        taskDescription: "Review server logs for unusual activity and errors.",
        taskDate: "2026-08-18",
        category: "Server"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Monitor Server",
        taskDescription: "Monitor server performance and resource usage.",
        taskDate: "2026-08-26",
        category: "Server"
      }
    ]
  },

  {
    id: 5,
    firstName: "Aditya",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 5,
      newTask: 3,
      completed: 3,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Marketing Campaign",
        taskDescription: "Create the next social media marketing campaign.",
        taskDate: "2026-08-22",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Analyze Campaign Results",
        taskDescription: "Analyze the performance of the previous marketing campaign.",
        taskDate: "2026-08-16",
        category: "Analysis"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prepare Social Media Posts",
        taskDescription: "Prepare social media posts for the upcoming week.",
        taskDate: "2026-08-21",
        category: "Marketing"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Marketing Strategy",
        taskDescription: "Update the marketing strategy based on recent campaign results.",
        taskDate: "2026-08-24",
        category: "Strategy"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Feedback Analysis",
        taskDescription: "Analyze recent customer and client feedback.",
        taskDate: "2026-08-18",
        category: "Research"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Competitor Research",
        taskDescription: "Research recent activities and strategies of competitors.",
        taskDate: "2026-08-15",
        category: "Research"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prepare Monthly Report",
        taskDescription: "Prepare the monthly marketing performance report.",
        taskDate: "2026-08-28",
        category: "Reporting"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Plan Next Campaign",
        taskDescription: "Create a plan and timeline for the next marketing campaign.",
        taskDate: "2026-08-30",
        category: "Marketing"
      }
    ]
  },

  {
    id: 6,
    firstName: "Rohan",
    email: "employee6@example.com",
    password: "123",
    taskCounts: {
      active: 3,
      newTask: 2,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Authentication System",
        taskDescription: "Implement secure authentication and authorization for the application.",
        taskDate: "2026-08-21",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Development Environment",
        taskDescription: "Configure the development environment and required dependencies.",
        taskDate: "2026-08-18",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Implement Password Reset",
        taskDescription: "Create the password reset functionality for users.",
        taskDate: "2026-08-23",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Review Security Guidelines",
        taskDescription: "Review the application's security requirements and guidelines.",
        taskDate: "2026-08-17",
        category: "Security"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Authentication Module",
        taskDescription: "Deploy the authentication module to the staging environment.",
        taskDate: "2026-08-16",
        category: "Deployment"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Add Role Based Access",
        taskDescription: "Implement role-based access control for employees and administrators.",
        taskDate: "2026-08-25",
        category: "Security"
      }
    ]
  },

  {
    id: 7,
    firstName: "Sneha",
    email: "employee7@example.com",
    password: "123",
    taskCounts: {
      active: 3,
      newTask: 2,
      completed: 3,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Employee Dashboard",
        taskDescription: "Create a modern and responsive dashboard interface for employees.",
        taskDate: "2026-08-22",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Login Screen",
        taskDescription: "Design and implement the application's login screen.",
        taskDate: "2026-08-17",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Improve Dashboard UI",
        taskDescription: "Improve the dashboard layout and user experience.",
        taskDate: "2026-08-24",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Color Palette",
        taskDescription: "Prepare a consistent color palette for the application.",
        taskDate: "2026-08-16",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Design Task Cards",
        taskDescription: "Create reusable designs for displaying employee tasks.",
        taskDate: "2026-08-19",
        category: "Design"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Admin Dashboard",
        taskDescription: "Design the interface for the administrator dashboard.",
        taskDate: "2026-08-26",
        category: "Design"
      }
    ]
  },

  {
    id: 8,
    firstName: "Vikram",
    email: "employee8@example.com",
    password: "123",
    taskCounts: {
      active: 3,
      newTask: 2,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Develop REST API",
        taskDescription: "Create REST API endpoints required by the frontend application.",
        taskDate: "2026-08-21",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Connect Database",
        taskDescription: "Connect the backend application with the production database.",
        taskDate: "2026-08-23",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Database Models",
        taskDescription: "Create database models for employees and tasks.",
        taskDate: "2026-08-18",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "API Testing",
        taskDescription: "Test all API endpoints and verify their responses.",
        taskDate: "2026-08-17",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Production Deployment",
        taskDescription: "Deploy the latest backend changes to production.",
        taskDate: "2026-08-15",
        category: "Deployment"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Optimize API Performance",
        taskDescription: "Improve API response times and backend performance.",
        taskDate: "2026-08-27",
        category: "Backend"
      }
    ]
  },

  {
    id: 9,
    firstName: "Karan",
    email: "employee9@example.com",
    password: "123",
    taskCounts: {
      active: 3,
      newTask: 2,
      completed: 3,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Perform Application Testing",
        taskDescription: "Test the application for functional and usability issues.",
        taskDate: "2026-08-22",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Test Login Flow",
        taskDescription: "Verify that the login and logout functionality works correctly.",
        taskDate: "2026-08-18",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Test Task Management",
        taskDescription: "Test task creation, completion, and failure functionality.",
        taskDate: "2026-08-24",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write Test Cases",
        taskDescription: "Create detailed test cases for the employee management system.",
        taskDate: "2026-08-16",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Verification",
        taskDescription: "Verify that previously reported bugs have been fixed.",
        taskDate: "2026-08-19",
        category: "Bug Fixing"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Regression Testing",
        taskDescription: "Perform regression testing after the latest application updates.",
        taskDate: "2026-08-28",
        category: "Testing"
      }
    ]
  },

  {
    id: 10,
    firstName: "Ananya",
    email: "employee10@example.com",
    password: "123",
    taskCounts: {
      active: 4,
      newTask: 2,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Sales Report",
        taskDescription: "Prepare the monthly sales report with performance insights.",
        taskDate: "2026-08-21",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Customer Records",
        taskDescription: "Update customer information and remove outdated records.",
        taskDate: "2026-08-17",
        category: "Management"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Analyze Sales Performance",
        taskDescription: "Analyze recent sales data and identify performance trends.",
        taskDate: "2026-08-23",
        category: "Analysis"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Attend the scheduled meeting with the client.",
        taskDate: "2026-08-18",
        category: "Meeting"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Sales Strategy",
        taskDescription: "Develop a strategy to improve sales performance for the next month.",
        taskDate: "2026-08-26",
        category: "Strategy"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Client Proposal",
        taskDescription: "Prepare and submit the proposal for the new client.",
        taskDate: "2026-08-15",
        category: "Sales"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Follow Up With Clients",
        taskDescription: "Follow up with existing clients regarding pending requirements.",
        taskDate: "2026-08-25",
        category: "Sales"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    firstName: "Admin",
    email: "admin@example.com",
    password: "123"
  }
]; 


export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))    
    localStorage.setItem('admin',JSON.stringify(admin))    
}

export const getLocalStorage=()=>{

    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    
        return {employees,admin}    
    
}
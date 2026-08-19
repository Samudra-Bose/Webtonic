const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        completed: false,
        newTask: true,
        failed: false,
        title: "Complete Project Report",
        description: "Prepare and submit the monthly project progress report.",
        date: "2026-08-20",
        category: "Development"
      },
      {
        active: false,
        completed: true,
        newTask: false,
        failed: false,
        title: "Update Documentation",
        description: "Update the project documentation with the latest changes.",
        date: "2026-08-17",
        category: "Documentation"
      },
      {
        active: true,
        completed: false,
        newTask: false,
        failed: false,
        title: "Fix Login Bug",
        description: "Find and fix the authentication issue in the login system.",
        date: "2026-08-21",
        category: "Bug Fixing"
      },
      {
        active: false,
        completed: true,
        newTask: false,
        failed: false,
        title: "Team Meeting",
        description: "Attend the weekly development team meeting.",
        date: "2026-08-18",
        category: "Meeting"
      },
      {
        active: true,
        completed: false,
        newTask: true,
        failed: false,
        title: "Implement User Dashboard",
        description: "Build the employee dashboard with required components.",
        date: "2026-08-23",
        category: "Development"
      }
    ]
  },

  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        completed: false,
        newTask: true,
        failed: false,
        title: "Design Dashboard",
        description: "Create the UI design for the employee dashboard.",
        date: "2026-08-21",
        category: "Design"
      },
      {
        active: false,
        completed: true,
        newTask: false,
        failed: false,
        title: "Review Pull Requests",
        description: "Review and approve pending pull requests.",
        date: "2026-08-18",
        category: "Development"
      },
      {
        active: true,
        completed: false,
        newTask: false,
        failed: false,
        title: "API Documentation",
        description: "Document the latest API endpoints and parameters.",
        date: "2026-08-22",
        category: "Documentation"
      },
      {
        active: false,
        completed: false,
        newTask: false,
        failed: true,
        title: "Deploy Application",
        description: "Deploy the latest version of the application to staging.",
        date: "2026-08-16",
        category: "Deployment"
      },
      {
        active: true,
        completed: false,
        newTask: true,
        failed: false,
        title: "Test New Features",
        description: "Perform functional testing on the newly implemented features.",
        date: "2026-08-24",
        category: "Testing"
      },
      {
        active: false,
        completed: true,
        newTask: false,
        failed: false,
        title: "Code Review",
        description: "Review the code submitted by the development team.",
        date: "2026-08-15",
        category: "Development"
      }
    ]
  },

  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        completed: false,
        newTask: true,
        failed: false,
        title: "Prepare Presentation",
        description: "Prepare slides for the upcoming client presentation.",
        date: "2026-08-22",
        category: "Presentation"
      },
      {
        active: false,
        completed: true,
        newTask: false,
        failed: false,
        title: "Analyze Sales Data",
        description: "Analyze this month's sales performance and prepare insights.",
        date: "2026-08-17",
        category: "Analysis"
      },
      {
        active: false,
        completed: true,
        newTask: false,
        failed: false,
        title: "Send Client Report",
        description: "Send the finalized project report to the client.",
        date: "2026-08-16",
        category: "Reporting"
      },
      {
        active: true,
        completed: false,
        newTask: false,
        failed: false,
        title: "Customer Feedback",
        description: "Collect and organize feedback from recent customers.",
        date: "2026-08-21",
        category: "Research"
      }
    ]
  },

  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        completed: false,
        newTask: true,
        failed: false,
        title: "Database Cleanup",
        description: "Remove duplicate and outdated records from the database.",
        date: "2026-08-21",
        category: "Database"
      },
      {
        active: false,
        completed: true,
        newTask: false,
        failed: false,
        title: "Database Backup",
        description: "Create a complete backup of the production database.",
        date: "2026-08-17",
        category: "Database"
      },
      {
        active: true,
        completed: false,
        newTask: false,
        failed: false,
        title: "Optimize Queries",
        description: "Identify and optimize slow database queries.",
        date: "2026-08-23",
        category: "Database"
      },
      {
        active: false,
        completed: false,
        newTask: false,
        failed: true,
        title: "Security Audit",
        description: "Perform a security audit of the application.",
        date: "2026-08-14",
        category: "Security"
      },
      {
        active: true,
        completed: false,
        newTask: true,
        failed: false,
        title: "Update Database Schema",
        description: "Apply the updated database schema to the development environment.",
        date: "2026-08-25",
        category: "Database"
      },
      {
        active: false,
        completed: true,
        newTask: false,
        failed: false,
        title: "Check Server Logs",
        description: "Review server logs for unusual activity and errors.",
        date: "2026-08-18",
        category: "Server"
      },
      {
        active: true,
        completed: false,
        newTask: false,
        failed: false,
        title: "Monitor Server",
        description: "Monitor server performance and resource usage.",
        date: "2026-08-26",
        category: "Server"
      }
    ]
  },

  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        completed: false,
        newTask: true,
        failed: false,
        title: "Create Marketing Campaign",
        description: "Create the next social media marketing campaign.",
        date: "2026-08-22",
        category: "Marketing"
      },
      {
        active: false,
        completed: true,
        newTask: false,
        failed: false,
        title: "Analyze Campaign Results",
        description: "Analyze the performance of the previous marketing campaign.",
        date: "2026-08-16",
        category: "Analysis"
      },
      {
        active: true,
        completed: false,
        newTask: false,
        failed: false,
        title: "Prepare Social Media Posts",
        description: "Prepare social media posts for the upcoming week.",
        date: "2026-08-21",
        category: "Marketing"
      },
      {
        active: true,
        completed: false,
        newTask: true,
        failed: false,
        title: "Update Marketing Strategy",
        description: "Update the marketing strategy based on recent campaign results.",
        date: "2026-08-24",
        category: "Strategy"
      },
      {
        active: false,
        completed: true,
        newTask: false,
        failed: false,
        title: "Client Feedback Analysis",
        description: "Analyze recent customer and client feedback.",
        date: "2026-08-18",
        category: "Research"
      },
      {
        active: false,
        completed: true,
        newTask: false,
        failed: false,
        title: "Competitor Research",
        description: "Research recent activities and strategies of competitors.",
        date: "2026-08-15",
        category: "Research"
      },
      {
        active: true,
        completed: false,
        newTask: false,
        failed: false,
        title: "Prepare Monthly Report",
        description: "Prepare the monthly marketing performance report.",
        date: "2026-08-28",
        category: "Reporting"
      },
      {
        active: true,
        completed: false,
        newTask: true,
        failed: false,
        title: "Plan Next Campaign",
        description: "Create a plan and timeline for the next marketing campaign.",
        date: "2026-08-30",
        category: "Marketing"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
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
    
    console.log(employees,admin);
    
    
}
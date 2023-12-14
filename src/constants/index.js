export const iEngagePath = "";

export const projects = [
  {
    id: 1,
    project_name: "Innomate",
    desc: "Innomate Solution is at the forefront of innovation, providing financial institutions and businesses with a robust platform to manage, monitor, and optimize their ATM networks. Elevate your fintech capabilities with Innomate's user-friendly interface and advanced functionalities.",
    project_desc: "Innomate Solution is a cutting-edge fintech application developed by Innovative Private Limited, designed to offer comprehensive monitoring and execution capabilities for Automated Teller Machines (ATMs). This powerful solution provides real-time insights into the status of connected devices, offering a holistic view of transactional events and images captured by the ATMs.",
    img: "Innomate.JPG",
    tags: [
      {
        name: "C#",
        color: "red-600",
      },
      {
        name: "DotNet",
        color: "green-600",
      },
    ],
    link: "https://pvz-2-api.vercel.app/",
        code: "https://github.com/code-cracked/plants-vs-zombies-api",
    project_modules: [
      {

        title: "Monitoring",
        desc: 'The Monitoring module in Innomate stands as a cornerstone for real-time oversight and control within the fintech ecosystem. It comprises several essential s, each designed to provide insights and management capabilities critical to the seamless operation of financial systems.',
        module_desc: 'The Monitoring module in Innomate is a vital component that empowers users to maintain the integrity and reliability of the fintech ecosystem. Through its s—Event Monitoring, Device Fail Monitoring, and Commands Monitoring—this module ensures that users have the tools needed for real-time oversight, proactive issue resolution, and effective management of critical system elements. The result is a robust and resilient fintech application that operates seamlessly in dynamic financial environments.',
        tags: [
          {
            name: "C#",
            color: "red-600",
          },
          {
            name: "DotNet",
            color: "green-600",
          },
        ],
        img: "monitoring.webp",
        link: "https://pvz-2-api.vercel.app/",
        code: "https://github.com/code-cracked/plants-vs-zombies-api",
        carausalData: [
          {imgName: "carousal/monitoring/monitoring.webp", imgTitle: "Monitoring"},
          {imgName: "carousal/monitoring/pieChart.JPG", imgTitle: "Views"},
          {imgName: "carousal/monitoring/events.webp", imgTitle: "Events"},
        ],
        features: [
          {
            id: 1,
            name: "Events",
            image: ["projects/Innomate/Monitoring/Events.JPG"],
            desc: "The Event Monitoring  offers a comprehensive view of system events, allowing users to track and analyze critical occurrences within the fintech infrastructure. From transactional events to system alerts, this feature ensures proactive management and timely responses to potential issues.",
            carausalData: [
              {imgName: "projects/Innomate/Monitoring/Events.JPG", imgTitle: "Events"},
              {imgName: "projects/Innomate/Monitoring/Events.JPG", imgTitle: "Events"},
            ],
          },
          {
            id: 2,
            name: "Device Fail",
            image: ["projects/Innomate/Monitoring/deviceFail.JPG"],
            desc: "Device Fail Monitoring focuses on detecting and addressing device-related failures promptly. This  provides insights into hardware malfunctions, connectivity issues, or any other factors impacting the operational status of financial devices. Swift identification and resolution are paramount in maintaining uninterrupted services.",
            carausalData: [
              {imgName: "projects/Innomate/Monitoring/deviceFail.JPG", imgTitle: "Events"},
              {imgName: "projects/Innomate/Monitoring/Events.JPG", imgTitle: "Events"},
            ],
          },
          {
            id: 3,
            name: "Commands",
            image: ["monitoring/commands.JPG"],
            desc: "The Commands Monitoring  enables users to oversee and manage commands issued within the system. Whether it's initiating transactions, updates, or system configurations, this feature ensures visibility and control over command execution, contributing to efficient and secure operations.",
            carausalData: [
              {imgName: "projects/Innomate/Monitoring/deviceFail.JPG", imgTitle: "Events"},
              {imgName: "projects/Innomate/Monitoring/Events.JPG", imgTitle: "Events"},
            ],
          },
          {
            id: 4,
            name: "Master Data",
            image: ["monitoring/masterData.JPG"],
            desc: "The Master Data Tracking  provides visibility into changes and updates made to master data within the system. Users can track modifications to critical information, ensuring data integrity, compliance, and facilitating comprehensive auditing. This feature is essential for maintaining accurate and up-to-date financial records.",
            carausalData: [
              {imgName: "projects/IEngage/ProfileManagment/Profile.JPG", imgTitle: "Profile"},
              {imgName: "projects/IEngage/ProfileManagment/Clone.JPG", imgTitle: "Profile Clone"},
              {imgName: "projects/IEngage/ProfileManagment/DeleteProfile.JPG", imgTitle: "Delete Prfile"},
            ],
          },
          {
            id: 5,
            name: "Views",
            image: ["monitoring/views.JPG"],
            desc: "The Views  allows users to access customized views of pertinent data within the fintech application. Users can tailor their perspectives based on specific criteria, enabling efficient monitoring of key metrics, reports, and essential information. This feature enhances user experience and facilitates quick decision-making.",
            carausalData: [
              {imgName: "projects/IEngage/ProfileManagment/Profile.JPG", imgTitle: "Profile"},
              {imgName: "projects/IEngage/ProfileManagment/Clone.JPG", imgTitle: "Profile Clone"},
              {imgName: "projects/IEngage/ProfileManagment/DeleteProfile.JPG", imgTitle: "Delete Prfile"},
            ],
          },
        ]
      },
      // {
      //   title: "Incident Management",
      //   desc: "An app made with NextJs to help each other communicate fastly and securely. We can also search for the friends with their username.Realtime updates on messages.",
      //   module_desc: 'In my portfolio, I showcase a dynamic user interface design that enhances user experience within a hierarchical system. Users can seamlessly navigate through a left pane displaying their assigned devices. Upon selecting a parent hierarchy, devices within that category are revealed. Choosing a specific device presents its name in the device ID box, accompanied by its current state prominently displayed above. Additionally, a detailed table illustrates the state of individual components of the selected device. For further insights, users can click on the "Events" button to access a comprehensive log of all events associated with the chosen device. Alternatively, they can explore job results or delve into master data to obtain in-depth physical details. On the right pane, users have the flexibility to create, view, or edit custom views, including Pie charts, Alert Views, and Incident Views. This dynamic interface not only streamlines device management but also offers a robust visualization toolset for comprehensive data analysis.',
      //   tags: [
      //     {
      //       name: "Java",
      //       color: "red-600",
      //     },
      //     {
      //       name: "SpringBoot",
      //       color: "green-600",
      //     }
      //   ],
      //   img: "incident-management.webp",
      //   link: "https://web-chat-app-brown.vercel.app",
      //   code: "https://github.com/daniel-jebarson/web-chat-app",
      //   carausalData: [
      //     {imgName: "jobs.webp", imgTitle: "Job Management"},
      //     {imgName: "jobs.webp", imgTitle: "Job Management"},
      //     {imgName: "jobs.webp", imgTitle: "Job Management"},
      //   ],
      //   features: [
      //     {
      //       id: 1,
      //       name: "Events",
      //       image: ["projects/Innomate/Monitoring/Events.JPG"],
      //       desc: "On this page you can view events of the machine sort in descending order. You can search by date for events. Upon clicking on an event, the details of event appear in the chart.",
      //       carausalData: [
      //         {imgName: "projects/Innomate/Monitoring/Events.JPG", imgTitle: "Events"},
      //         {imgName: "projects/Innomate/Monitoring/Events.JPG", imgTitle: "Events"},
      //       ],
      //     },
      //     {
      //       id: 2,
      //       name: "Device Fail",
      //       image: ["projects/Innomate/Monitoring/deviceFail.JPG"],
      //       desc: "The Device Fail page displays a history of issues or failures that have occurred on devices, including relevant details and resolutions. It serves as a valuable tool for tracking device performance, identifying patterns, and improving maintenance practices.",
      //       carausalData: [
      //         {imgName: "projects/Innomate/Monitoring/deviceFail.JPG", imgTitle: "Events"},
      //         {imgName: "projects/Innomate/Monitoring/Events.JPG", imgTitle: "Events"},
      //       ],
      //     },
      //     {
      //       id: 3,
      //       name: "Commands",
      //       image: ["monitoring/commands.JPG"],
      //       desc: "Commands contain different commands which perform different tasks. It includes the following commands.",
      //       carausalData: [
      //         {imgName: "projects/Innomate/Monitoring/deviceFail.JPG", imgTitle: "Events"},
      //         {imgName: "projects/Innomate/Monitoring/Events.JPG", imgTitle: "Events"},
      //       ],
      //     },
      //     {
      //       id: 4,
      //       name: "Master Data",
      //       image: ["monitoring/masterData.JPG"],
      //       desc: "Here you can view the physical details or static data of device such as branch, location, custodian etc. Note: User can only view the data here.",
      //       carausalData: [
      //         {imgName: "projects/IEngage/ProfileManagment/Profile.JPG", imgTitle: "Profile"},
      //         {imgName: "projects/IEngage/ProfileManagment/Clone.JPG", imgTitle: "Profile Clone"},
      //         {imgName: "projects/IEngage/ProfileManagment/DeleteProfile.JPG", imgTitle: "Delete Prfile"},
      //       ],
      //     },
      //     {
      //       id: 5,
      //       name: "Views",
      //       image: ["monitoring/views.JPG"],
      //       desc: "User can view device states in 3 types of view that is pie chart, alert view and incident view. User can create customized pie chart and alert view for himself.",
      //       carausalData: [
      //         {imgName: "projects/IEngage/ProfileManagment/Profile.JPG", imgTitle: "Profile"},
      //         {imgName: "projects/IEngage/ProfileManagment/Clone.JPG", imgTitle: "Profile Clone"},
      //         {imgName: "projects/IEngage/ProfileManagment/DeleteProfile.JPG", imgTitle: "Delete Prfile"},
      //       ],
      //     },
      //   ],
      // },
      {
        title: "Job Scheduling",
        desc: "Job Scheduling module emerges as a pivotal component, orchestrating seamless execution and management of critical tasks. This module integrates several key s, each finely tuned to optimize job workflows, monitor executions, and enforce essential rules.",
        module_desc: 'The Job Scheduling module within my fintech app not only centralizes task management but also empowers users with tools for real-time monitoring, execution control, and rule enforcement. Its robust capabilities contribute to the optimization of operational workflows, ensuring that critical tasks are executed efficiently and in accordance with defined business rules. This module is a testament to my commitment to delivering solutions that enhance efficiency and precision in financial operations.',
        tags: [
          {
            name: "C#",
            color: "red-600",
          },
          {
            name: "DotNet",
            color: "green-600",
          },
        ],
        img: "job-Management.webp",
        link: "https://drive.google.com/file/d/1npEOuOhQh-1zRiLB9fFn-6ORTwd1gZkl/view",
        code: "https://github.com/daniel-jebarson/EXPLOITER",
        carausalData: [
          {imgName: "jobs.webp", imgTitle: "Job Management"},
          {imgName: "carousal/job management/events.webp", imgTitle: "Event"},
          {imgName: "carousal/job management/piechart.webp", imgTitle: "Views"},
        ],
        features: [
          {
            id: 1,
            name: "Job Management",
            image: ["reports/cardCapture.JPG"],
            desc: "Streamline and centralize the organization of tasks with a robust job management system. This  empowers users to efficiently create, modify, and prioritize tasks, ensuring a well-organized and prioritized schedule.",
            carausalData: [
              {imgName: "projects/IEngage/ProfileManagment/Profile.JPG", imgTitle: "Profile"},
              {imgName: "projects/IEngage/ProfileManagment/Clone.JPG", imgTitle: "Profile Clone"},
              {imgName: "projects/IEngage/ProfileManagment/DeleteProfile.JPG", imgTitle: "Delete Prfile"},
            ],
          },
          {
            id: 1,
            name: "Job Monitoring",
            image: ["reports/cardCapture.JPG"],
            desc: "Monitor the real-time progress and status of scheduled jobs with the Job Monitoring . Gain insights into the execution timeline, identify potential bottlenecks, and proactively address issues to maintain optimal operational efficiency.",
            carausalData: [
              {imgName: "projects/IEngage/ProfileManagment/Profile.JPG", imgTitle: "Profile"},
              {imgName: "projects/IEngage/ProfileManagment/Clone.JPG", imgTitle: "Profile Clone"},
              {imgName: "projects/IEngage/ProfileManagment/DeleteProfile.JPG", imgTitle: "Delete Prfile"},
            ],
          },
          {
            id: 1,
            name: "Job Execution",
            image: ["reports/cardCapture.JPG"],
            desc: "Ensure the flawless execution of scheduled tasks through the Job Execution . This feature allows for precise control over the initiation, pausing, and resumption of jobs, guaranteeing that critical processes are executed with precision.",
            carausalData: [
              {imgName: "projects/IEngage/ProfileManagment/Profile.JPG", imgTitle: "Profile"},
              {imgName: "projects/IEngage/ProfileManagment/Clone.JPG", imgTitle: "Profile Clone"},
              {imgName: "projects/IEngage/ProfileManagment/DeleteProfile.JPG", imgTitle: "Delete Prfile"},
            ],
          },
          
        ]
      },
      {
        title: "Report Management",
        desc: 'The Reports module stands as a cornerstone for comprehensive financial analytics. This multifaceted module offers a suite of s, each meticulously designed to address specific facets of financial operations. From capturing critical data related to card transactions in the "Card Capture"  to providing insights into cash-related activities through features like "Cassettes Counter," "Cash Outage Report," and "Cash Replenishment Report," the Reports module ensures a holistic view of financial processes.',
        module_desc: 'In my portfolio, I showcase a dynamic user interface design that enhances user experience within a hierarchical system. Users can seamlessly navigate through a left pane displaying their assigned devices. Upon selecting a parent hierarchy, devices within that category are revealed. Choosing a specific device presents its name in the device ID box, accompanied by its current state prominently displayed above. Additionally, a detailed table illustrates the state of individual components of the selected device. For further insights, users can click on the "Events" button to access a comprehensive log of all events associated with the chosen device. Alternatively, they can explore job results or delve into master data to obtain in-depth physical details. On the right pane, users have the flexibility to create, view, or edit custom views, including Pie charts, Alert Views, and Incident Views. This dynamic interface not only streamlines device management but also offers a robust visualization toolset for comprehensive data analysis.',
        tags: [
          {
            name: "Java",
            color: "red-600",
          },
          {
            name: "SpringBoot",
            color: "green-600",
          },
        ],
        img: "reports-management.webp",
        link: "https://stock-market-seven.vercel.app/",
        code: "https://github.com/daniel-jebarson/Stock-Market",
        carausalData: [
          {imgName: "carousal/reports/cardCapture.JPG", imgTitle: "Card Capture"},
          {imgName: "carousal/reports/casseteCounter.JPG", imgTitle: "Cassete Counter"},
          {imgName: "jobs.webp", imgTitle: "Job Management"},
        ],
        features: [
          {
            id: 1,
            name: "Card Capture",
            image: ["reports/cardCapture.JPG"],
            desc: "Provides insights into card transactions, capturing essential data related to card-based financial activities. This module ensures a detailed overview of card usage within the system."
          },
          {
            id: 2,
            name: "Cassettes Counter",
            image: ["reports/casseteCounter.JPG"],
            desc: "Offers a specialized counter module focusing on cassettes within the financial infrastructure. This tool enables tracking and management of cassette-related metrics, ensuring efficient monitoring of cash dispensing and collection."
          },
          {
            id: 3,
            name: "Cash Outage Report",
            image: ["reports/cashOutageReport.JPG"],
            desc: "Delivers a detailed report on instances of cash outage, highlighting periods where the system experiences a shortage of physical currency. This feature is crucial for understanding and mitigating potential disruptions in cash availability."
          },
          {
            id: 4,
            name: "Cash Outage Summary",
            image: ["reports/cashOutageSummary.JPG"],
            desc: "Provides a summarized view of cash outage incidents, offering a quick and efficient way to grasp the overall impact and frequency of cash shortages within the system."
          },
          {
            id: 5,
            name: "Cash Replenishment Report",
            image: ["reports/cashReplacement.JPG"],
            desc: "Focuses on reporting the process of cash replenishment, outlining the frequency and volume of currency refills. This module aids in optimizing cash management strategies to ensure the seamless operation of financial services."
          },
          {
            id: 6,
            name: "Device List",
            image: ["reports/deviceList.JPG"],
            desc: "Compiles a comprehensive list of all devices within the financial ecosystem. This feature serves as a foundational tool for easy navigation and access to individual device details."
          },
          {
            id: 7,
            name: "Device Dashboard",
            image: ["reports/deviceDashboard.JPG"],
            desc: "Offers an intuitive and visually appealing dashboard summarizing key metrics and health indicators of devices. This provides at-a-glance insights into the overall status of the financial infrastructure."
          },
          {
            id: 8,
            name: "Device Health Status Report",
            image: ["reports/deviceHealthReport.JPG"],
            desc: "This report displays Status of devices. It displays state of devices with time and duration as well. Device health status report can be generated in PDF, Excel and CSV formats. The user has to select file format and resources."
          },
          {
            id: 9,
            name: "Device Event List Summary",
            image: ["reports/deviceEventListSummary.JPG"],
            desc: "This report displays information about all events which occur on devices. Device event list summary report can be generated in PDF, Excel and CSV formats. The user has to select activity date, file format and resources"
          },
          {
            id: 10,
            name: "ATM EJ Data",
            image: ["reports/EjData.JPG"],
            desc: "This report displays Electronic Journal data of machine. It displays events which occurred on devices. ATM EJ data report can be generated in PDF, Excel and CSV formats. The user has to select activity date, file format and resources. "
          },
          {
            id: 11,
            name: "Job Result",
            image: ["reports/jonResultReport.JPG"],
            desc: "Job result displays job status of the job running on device. Job result report can be generated in PDF, Excel and CSV formats. The user has to select activity date, Job Id ,file format and resources."
          },
          {
            id: 12,
            name: "Transaction Report",
            image: ["reports/transactionReport.JPG"],
            desc: "This report displays information about zero transactions. It shows time/date and duration of no transaction on devices. Transaction report can be generated in PDF, Excel and CSV formats .The user has to select date, approved status, file format and resources"
          },
          {
            id: 13,
            name: "ATM Uptime Report",
            image: ["reports/userRight.JPG"],
            desc: "This report displays downtime of device during core and non core time.It can be generated in PDF, Excel and CSV formats.The user has to select activity date, file format and resources."
          },
          {
            id: 14,
            name: "ATM Downtime Report",
            image: ["reports/atmDownReport.JPG"],
            desc: "This report displays total downtime and uptime of machine with respect to time.It can be generated in PDF, Excel and CSV formats.The user has to select activity date, file format and resources."
          },
          {
            id: 15,
            name: "ATM Downtime Timewise Report",
            image: ["reports/atmDownTimewiseReoprt.JPG"],
            desc: "This report displays downtime of machine with respect to time. It can be generated in PDF, Excel and CSV formats.The user has to select activity date, file format and resources."
          },
          {
            id: 16,
            name: "Device Outage Details",
            image: ["reports/deviceOutageDetail.JPG"],
            desc: "This report displays ticket generation and close time of device outage. It can be generated in PDF, Excel and CSV formats.The user has to select activity date, file format and resources."
          },
          {
            id: 17,
            name: "Device Outage Details Summary",
            image: ["reports/deviceOutageSummary.JPG"],
            desc: "This report displays average resolution time of issue and the description of issue. It can be generated in PDF, Excel and CSV formats.The user has to select activity date, file format and resources."
          },
          {
            id: 18,
            name: "Power Outage",
            image: ["reports/powerOutage.JPG"],
            desc: "This report displays Power outage details of device. It can be generated in PDF, Excel and CSV formats.The user has to select activity date, file formats and resources."
          },
          {
            id: 19,
            name: "Dispenser Outage",
            image: ["reports/dispenserOutage.JPG"],
            desc: "This report displays details of dispenser outage of machine.It can be generated in PDF, Excel and CSV formats.The user has to select activity date, file formats and resources."
          },
          {
            id: 20,
            name: "Outage Timewise Report",
            image: ["reports/outageTimeWise.JPG"],
            desc: "This report displays start time/end time of Power and Dispenser outage.It can be generated in PDF, Excel and CSV formats. The user has to select activity date, Element ID, file formats and resources."
          },
          {
            id: 21,
            name: "EJ Report",
            image: ["reports/EJReport.JPG"],
            desc: "This report displays transaction details. It can be generated in text and excel format."
          },
          {
            id: 22,
            name: "EJ By Summary",
            image: ["reports/EJbySummary.JPG"],
            desc: "This report displays all the transactions of last year, more than a year,last 3 months, last month,last week and yesterda."
          },
          {
            id: 23,
            name: "ATM Inventory",
            image: ["reports/atmInventory.JPG"],
            desc: "This displays hardware and software inventory of machine.It can be generated in PDF, Excel and CSV formats. The user has to select file formats and resources."
          },
          {
            id: 24,
            name: "User Selection Inventory Report",
            image: ["reports/userRight.JPG"],
            desc: "This report displays Information of device according to the selected category. It can be generated in PDF, Excel and CSV formats. The user has to select file formats and resources."
          },
          {
            id: 25,
            name: "Version Report",
            image: ["reports/versionReport.JPG"],
            desc: "This report includes version information of a device. It includes JRE version,OS Name, OS Pack, Procash/NDC,ProBase,ProChip,Epp.It can be generated in PDF, Excel and CSV formats. The user has to select file formats and resources."
          },
          {
            id: 26,
            name: "User Status",
            image: ["reports/userRight.JPG"],
            desc: "This report displays information about users.It can be generated in PDF, Excel and CSV formats. The user has to select file formats."
          },
          {
            id: 27,
            name: "User Right",
            image: ["reports/userRight.JPG"],
            desc: "This report displays user role information.It can be generated in PDF, Excel and CSV formats. The user has to select file formats. "
          },
          {
            id: 28,
            name: "Availability Summary",
            image: ["reports/availableSummary.JPG"],
            desc: "This page allows user to view pie charts view for last images received per ATM and also the connection status of all ATM assigned to user."
          },
          {
            id: 29,
            name: "Image Quality",
            image: ["reports/imageQuality.JPG"],
            desc: "This page allows user to see the image quality of images being taken in night and day time at a device. It can serve as an audit of images in light and dim scenarios for each device that is assigned to the navigating user. User can also export the report in PDF by clicking on export to PDF button."
          },
          {
            id: 30,
            name: "Image Count",
            image: ["reports/imageCount.JPG"],
            desc: "On this page user can check the count of images made by an ATM and the number of trans action during a specified period. In-case of no specific period given, the portal shows by default of last 20 days."
          },
          {
            id: 31,
            name: "Image Transfer",
            image: ["reports/imageTransfer.JPG"],
            desc: "This page shows the transfer status of image to the server from ATM. Its shows when is the last image received from ATM to the server."
          },
          {
            id: 32,
            name: "EJ By Date",
            image: ["reports/EJbyDATE.JPG"],
            desc: "User can view EJ of a device of complete day from this page. User has to select the Device and date and submit to find the EJ. Also this EJ can be exported to PDF or TXT Format."
          },
        ]
      }
    ],
  },
  {
    id: 2,
    project_name: "IEngage",
    desc: 'IEngage is a sophisticated web-based application meticulously crafted to simplify the complexities of campaign management systems. Developed with a user-centric approach, IEngage offers a seamless and intuitive interface, empowering users to efficiently manage various facets of their campaign strategies.',
    project_desc: "Innomate Solution is a cutting-edge fintech application developed by Innovative Private Limited, designed to offer comprehensive monitoring and execution capabilities for Automated Teller Machines (ATMs). This powerful solution provides real-time insights into the status of connected devices, offering a holistic view of transactional events and images captured by the ATMs.",
    img: "IEngage.JPG",
    tags: [
      {
        name: "C#",
        color: "red-600",
      },
      {
        name: "DotNet",
        color: "green-600",
      },
    ],
    link: "https://pvz-2-api.vercel.app/",
        code: "https://github.com/code-cracked/plants-vs-zombies-api",
    project_modules: [
      {
        title: "Campaign Management",
        desc: "The Campaign Management module within iEngage, an integral part of the IPL System, offers a specialized interface for handling customized campaigns tailored to meet the unique requirements of our clients. This module ensures a seamless and interactive experience for users engaging with campaigns while providing flexibility and choices for optimal user engagement.",
        module_desc: 'With Campaign Management as a cornerstone feature within iEngage, users are presented with a dynamic and customizable approach to campaign participation. This module not only aligns with the diverse preferences of users but also ensures that promotional initiatives are strategically integrated into the user journey, maximizing the effectiveness of client campaigns.',
        tags: [
          {
            name: "C#",
            color: "red-600",
          },
          {
            name: "DotNet",
            color: "green-600",
          },
        ],
        img: "Campaign.JPG",
        link: "https://pvz-2-api.vercel.app/",
        code: "https://github.com/code-cracked/plants-vs-zombies-api",
        carausalData: [
          {imgName: "projects/IEngage/CompainManagement/AddCampaign.JPG", imgTitle: "Add Campaign"},
          {imgName: "projects/IEngage/CompainManagement/Campaigns.JPG", imgTitle: "Campaign Management"},
        ],
        features: [
        ],
      },
      {
        title: "Transaction Reports",
        desc: "The Transaction Reports feature within iEngage empowers users with a comprehensive tool to delve into the intricacies of successfully completed transactions. This robust feature offers a user-friendly interface for customizing transaction reports, allowing users to extract specific data based on tailored criteria.",
        module_desc: 'The Transaction Reports feature stands as a pivotal tool within iEngage, offering users the ability to tailor their data analysis and reporting based on specific criteria. This customization not only enhances the user experience but also ensures that users can derive meaningful and actionable insights from their transactional data.',
        tags: [
          {
            name: "Java",
            color: "red-600",
          },
          {
            name: "SpringBoot",
            color: "green-600",
          }
        ],
        img: "projects/IEngage/TransactionReports/Report.JPG",
        link: "https://web-chat-app-brown.vercel.app",
        code: "https://github.com/daniel-jebarson/web-chat-app",
        carausalData: [
          {imgName: "jobs.webp", imgTitle: "Job Management"},
          {imgName: "jobs.webp", imgTitle: "Job Management"},
          {imgName: "jobs.webp", imgTitle: "Job Management"},
        ],
        features: [
          
          // {
          //   id: 32,
          //   name: "EJ By Date",
          //   image: ["reports/userRight.JPG"],
          // },
        ]
      },
      // {
      //   title: "Reports",
      //   desc: "This is the simple multi-featured discord bot which is in more than 90+ servers that resembles lords mobile as mini game. It contains the featiures of many bots such as dyno,carl-bot,mee6 etc.It helps to authorize the users, audit the messages and can also be used for other server developments and also for mini-games.  ",
      //   module_desc: 'In my portfolio, I showcase a dynamic user interface design that enhances user experience within a hierarchical system. Users can seamlessly navigate through a left pane displaying their assigned devices. Upon selecting a parent hierarchy, devices within that category are revealed. Choosing a specific device presents its name in the device ID box, accompanied by its current state prominently displayed above. Additionally, a detailed table illustrates the state of individual components of the selected device. For further insights, users can click on the "Events" button to access a comprehensive log of all events associated with the chosen device. Alternatively, they can explore job results or delve into master data to obtain in-depth physical details. On the right pane, users have the flexibility to create, view, or edit custom views, including Pie charts, Alert Views, and Incident Views. This dynamic interface not only streamlines device management but also offers a robust visualization toolset for comprehensive data analysis.',
      //   tags: [
      //     {
      //       name: "C#",
      //       color: "red-600",
      //     },
      //     {
      //       name: "DotNet",
      //       color: "green-600",
      //     },
      //   ],
      //   img: "job-Management.webp",
      //   link: "https://drive.google.com/file/d/1npEOuOhQh-1zRiLB9fFn-6ORTwd1gZkl/view",
      //   code: "https://github.com/daniel-jebarson/EXPLOITER",
      //   carausalData: [
      //     {imgName: "jobs.webp", imgTitle: "Job Management"},
      //     {imgName: "jobs.webp", imgTitle: "Job Management"},
      //     {imgName: "jobs.webp", imgTitle: "Job Management"},
      //   ],
      //   features: [
      //     {
      //       id: 1,
      //       name: "Card Capture",
      //       image: ["reports/userRight.JPG"],
      //     },
      //     {
      //       id: 2,
      //       name: "Cassettes Counter",
      //       image: ["reports/userRight.JPG"],
      //     },
      //     {
      //       id: 3,
      //       name: "Cash Outage Report",
      //       image: ["reports/userRight.JPG"],
      //     },
      //     {
      //       id: 4,
      //       name: "Cash Outage Summary",
      //       image: ["reports/userRight.JPG"],
      //     },
      //     {
      //       id: 5,
      //       name: "Cash Replenishment Report",
      //       image: ["reports/userRight.JPG"],
      //     },
      //     {
      //       id: 6,
      //       name: "Device List",
      //       image: ["reports/userRight.JPG"],
      //     },
      //     {
      //       id: 7,
      //       name: "Device Dashboard",
      //       image: ["reports/userRight.JPG"],
      //     },
      //     {
      //       id: 8,
      //       name: "Device Health Status Report",
      //       image: ["reports/userRight.JPG"],
      //     },
      //     {
      //       id: 9,
      //       name: "Device Event List Summary",
      //       image: ["reports/userRight.JPG"],
      //     },
      //     {
      //       id: 10,
      //       name: "ATM EJ Data",
      //       image: ["reports/userRight.JPG"],
      //     },
      //     {
      //       id: 11,
      //       name: "Job Result",
      //       image: ["reports/userRight.JPG"],
      //     },
      //     {
      //       id: 12,
      //       name: "Transaction Report",
      //       image: ["reports/userRight.JPG"],
      //     },
      //     {
      //       id: 13,
      //       name: "ATM Uptime Report",
      //       image: ["reports/userRight.JPG"],
      //     },
      //     {
      //       id: 14,
      //       name: "ATM Downtime Report",
      //       image: ["reports/userRight.JPG"],
      //     },
      //     {
      //       id: 15,
      //       name: "ATM Downtime Timewise Report",
      //       image: ["reports/userRight.JPG"],
      //     },
      //     {
      //       id: 16,
      //       name: "Device Outage Details",
      //       image: ["reports/userRight.JPG"],
      //     },
      //     {
      //       id: 17,
      //       name: "Device Outage Details Summary",
      //       image: ["reports/userRight.JPG"],
      //     },
      //     {
      //       id: 18,
      //       name: "Power Outage",
      //       image: ["reports/userRight.JPG"],
      //     },
      //     {
      //       id: 19,
      //       name: "Dispenser Outage",
      //       image: ["reports/userRight.JPG"],
      //     },
      //     {
      //       id: 20,
      //       name: "Outage Timewise Report",
      //       image: ["reports/userRight.JPG"],
      //     },
      //     {
      //       id: 21,
      //       name: "EJ Report",
      //       image: ["reports/userRight.JPG"],
      //     },
      //     {
      //       id: 22,
      //       name: "EJ By Summary",
      //       image: ["reports/userRight.JPG"],
      //     },
      //     {
      //       id: 23,
      //       name: "ATM Inventory",
      //       image: ["reports/userRight.JPG"],
      //     },
      //     {
      //       id: 24,
      //       name: "User Selection Inventory Report",
      //       image: ["reports/userRight.JPG"],
      //     },
      //     {
      //       id: 25,
      //       name: "Version Report",
      //       image: ["reports/userRight.JPG"],
      //     },
      //     {
      //       id: 26,
      //       name: "User Status",
      //       image: ["reports/userRight.JPG"],
      //     },
      //     {
      //       id: 27,
      //       name: "User Right",
      //       image: ["reports/userRight.JPG"],
      //     },
      //     {
      //       id: 28,
      //       name: "Availability Summary",
      //       image: ["reports/userRight.JPG"],
      //     },
      //     {
      //       id: 29,
      //       name: "Image Quality",
      //       image: ["reports/userRight.JPG"],
      //     },
      //     {
      //       id: 30,
      //       name: "Image Count",
      //       image: ["reports/userRight.JPG"],
      //     },
      //     {
      //       id: 31,
      //       name: "Image Transfer",
      //       image: ["reports/userRight.JPG"],
      //     },
      //     {
      //       id: 32,
      //       name: "EJ By Date",
      //       image: ["reports/userRight.JPG"],
      //     },
      //   ]
      // },
      {
        title: "Profile Management",
        desc: 'The "Profile Management" module in iEngage serves as a central hub for efficient control and customization of user profiles within the system. With a focus on user-centric design, this module offers three distinct s— "View Profile," "Device Assign," and "Hierarchy"— each catering to specific aspects of user profile administration.',
        module_desc: 'The "Profile Management" module, with its s "View Profile," "Device Assign," and "Hierarchy," enhances the overall user experience within iEngage. By focusing on user empowerment, efficient device allocation, and flexible organizational structures, this module contributes to a seamless and personalized profile management experience for all users in the system.',
        tags: [
          {
            name: "Java",
            color: "red-600",
          },
          {
            name: "SpringBoot",
            color: "green-600",
          }
        ],
        img: "Profile.JPG",
        link: "https://stock-market-seven.vercel.app/",
        code: "https://github.com/daniel-jebarson/Stock-Market",
        carausalData: [
          {imgName: "projects/IEngage/ProfileManagment/Profile.JPG", imgTitle: "Profile"},
          {imgName: "projects/IEngage/ProfileManagment/DeviceAssign.JPG", imgTitle: "Device Assiegnment"},
          {imgName: "projects/IEngage/ProfileManagment/Hierarchy.JPG", imgTitle: "Hierarchy Clone"},
        ],
        features: [
          {
            id: 1,
            name: "View Profile",
            image: ["projects/IEngage/ProfileManagment/Profile.JPG"],
            desc: `The "View Profile"  provides users with a detailed overview of their individual profiles. Users can access and review personal information, preferences, and settings associated with their accounts. This  ensures transparency and empowers users to manage and update their profiles seamlessly..`,
            carausalData: [
              {imgName: "projects/IEngage/ProfileManagment/Profile.JPG", imgTitle: "Profile"},
              {imgName: "projects/IEngage/ProfileManagment/Clone.JPG", imgTitle: "Profile Clone"},
              {imgName: "projects/IEngage/ProfileManagment/DeleteProfile.JPG", imgTitle: "Delete Prfile"},
            ],
          },
          {
            id: 2,
            name: "Device Assign",
            image: ["projects/IEngage/ProfileManagment/DeviceAssign.JPG"],
            desc: 'In the "Device Assign" , users can efficiently manage the assignment of devices within the iEngage system. This includes assigning specific devices to users based on their roles or responsibilities. Device Assign streamlines the allocation process, ensuring that users have access to the necessary tools to fulfill their tasks.',
            carausalData: [
              {imgName: "projects/IEngage/ProfileManagment/DeviceAssign.JPG", imgTitle: "Device Assign"},
              {imgName: "projects/IEngage/ProfileManagment/AssignedDevices.JPG", imgTitle: "Assign Devices"},
              {imgName: "projects/IEngage/ProfileManagment/NewAssign.JPG", imgTitle: "New Device Assign"},
            ],
          },
          {
            id: 3,
            name: "Hierarchy",
            image: ["projects/IEngage/ProfileManagment/Hierarchy.JPG"],
            desc: 'The "Hierarchy"  focuses on the organizational structure within iEngage. Users can view and manage the hierarchical relationships among different entities, such as users, teams, or departments. Hierarchy allows for the dynamic organization of users, ensuring a flexible and scalable structure that aligns with organizational needs.',
            carausalData: [
              {imgName: "projects/IEngage/ProfileManagment/Hierarchy.JPG", imgTitle: "Hierarchy"},
              {imgName: "projects/IEngage/ProfileManagment/HierarchyManagement.JPG", imgTitle: "Hierarchy Management"},
            ],
          },
        ]
      }
    ],
  },
];


export const charts = [
  {
    id: 1,
    chartName: "Pie Chart",
    chartDescription: "User can create pie chart view in which he will give the name, devices to be shown and the states in which devices are to be shown. These views can be later edited by the user too. Upon clicking the view. A new box of view is opened.",
    chartImageUrl: ["card/graph/piegraph.webp"]
  },
  {
    id: 2,
    chartName: "Alert Views",
    chartDescription: "Alert view shows device states in a tabular form. Like pie chart, these views can alsobe created similarly in which he will give the name, devices to be shown and the states in which devices are to be shown. These views can be later edited by the user too. Upon clicking the view. A new box of view is opened",
    chartImageUrl: ["card/graph/alertgraph.webp"]
  },
  {
    id: 3,
    chartName: "Chessboard Views",
    chartDescription: "Chessboard Views shows total number of devices, selected device count and device states. These views can also be created by providing name, selecting devices in resource and states in which devices are to be shown. These views can be edited by the user",
    chartImageUrl: ["card/graph/chessboardgrapgh.webp"]
  },
  {
    id: 4,
    chartName: "Incident Views",
    chartDescription: "This view cannot be created, it’s created by default. It displays the incidents opened on a device",
    chartImageUrl: ["card/graph/incidentView.webp"]
  },
  {
    id: 5,
    chartName: "Line Charts",
    chartDescription: "These are line graphs created by default.There are two Line charts.",
    chartImageUrl: ["card/graph/piechart.webp"]
  },
]


// export const features = [
//   {

//   }
    
  
// ]
# 📋 Task Management System

> A modern, full-stack Task Management System built using **React + TypeScript**, **Spring Boot**, **PostgreSQL**, and **JWT Authentication**. The application enables users to securely manage tasks with advanced features like Kanban Board, analytics dashboard, filtering, sorting, dark mode, profile management, and export functionality.

---



# ✨ Features

## 🔐 Authentication

- User Registration
- Secure Login
- JWT Authentication
- Protected Routes
- Logout
- Session Management

---

## 📋 Task Management

- Create Task
- Update Task
- Delete Task
- View Tasks
- Search Tasks
- Sort Tasks
- Filter by Status
- Filter by Priority
- Pagination

---

## 📊 Dashboard Analytics

- Total Tasks
- Completed Tasks
- Pending Tasks
- High Priority Tasks
- Progress Card
- Pie Chart
- Priority Bar Chart

---

## 📌 Kanban Board

- TODO
- IN PROGRESS
- COMPLETED

---

## 👤 User Profile

- Profile Page
- Update Name
- Update Email
- Upload Profile Picture

---

## 🌙 UI Features

- Responsive Design
- Material UI
- Dark Mode
- Toast Notifications
- Loading Spinner

---

## 📤 Export Features

- Export Tasks to CSV
- Export Tasks to PDF

---

# 🛠️ Tech Stack

## Frontend

- React
- TypeScript
- Vite
- Material UI
- Axios
- React Router DOM
- React Hot Toast
- Recharts
- React Dropzone
- jsPDF
- File Saver
- Hello Pangea Drag & Drop

---

## Backend

- Spring Boot
- Spring Security
- Spring Data JPA
- Hibernate
- JWT Authentication
- Maven

---

## Database

- PostgreSQL

---

## Tools

- IntelliJ IDEA
- VS Code
- Postman
- Git
- GitHub

---

# 📂 Project Structure

```text
task-manager-system/
│
├── backend/                      # Spring Boot Backend
│   ├── src/main/java/com/taskmanager/
│   │   ├── TaskManagerApplication.java
│   │   │
│   │   ├── config/
│   │   │   ├── SecurityConfig.java
│   │   │   ├── WebSocketConfig.java
│   │   │   └── CorsConfig.java
│   │   │
│   │   ├── controller/
│   │   │   ├── AuthController.java
│   │   │   ├── TaskController.java
│   │   │   └── WebSocketController.java
│   │   │
│   │   ├── service/
│   │   │   ├── AuthService.java
│   │   │   ├── TaskService.java
│   │   │   └── WebSocketService.java
│   │   │
│   │   ├── security/
│   │   │   ├── JwtTokenProvider.java
│   │   │   └── JwtAuthenticationFilter.java
│   │   │
│   │   └── model/
│   │       ├── entity/
│   │       ├── dto/
│   │       └── enums/
│   │
│   ├── src/main/resources/
│   │   ├── application.yml
│   │   └── db/migration/
│   │
│   ├── Dockerfile
│   └── pom.xml
│
├── frontend/                     # React + TypeScript Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskList.tsx
│   │   │   ├── TaskForm.tsx
│   │   │   ├── LoginForm.tsx
│   │   │   └── Layout/
│   │   │
│   │   ├── pages/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Login.tsx
│   │   │   └── TaskDetail.tsx
│   │   │
│   │   ├── services/
│   │   │   ├── api.ts
│   │   │   ├── auth.ts
│   │   │   └── websocket.ts
│   │   │
│   │   ├── hooks/
│   │   │   ├── useTasks.ts
│   │   │   └── useAuth.ts
│   │   │
│   │   ├── context/
│   │   │   ├── AuthContext.tsx
│   │   │   └── TaskContext.tsx
│   │   │
│   │   ├── types/
│   │   │   └── task.ts
│   │   │
│   │   ├── styles/
│   │   ├── App.tsx
│   │   └── main.tsx
│   │
│   ├── public/
│   ├── Dockerfile
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
├── docker-compose.yml
├── .github/workflows/
├── README.md
└── .gitignore
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/task-manager-fullstack.git
```

```bash
cd task-manager-fullstack
```

---

## 2. Backend Setup

```bash
cd backend
```

Configure PostgreSQL credentials in

```
application.yml
```

Run

```bash
mvn spring-boot:run
```

Backend runs at

```
http://localhost:8083
```

---

## 3. Frontend Setup

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Create

```
.env
```

Add

```env
VITE_API_URL=http://localhost:8083/api
```

Run

```bash
npm run dev
```

Frontend runs at

```
http://localhost:5173
```

---

# 🔑 Environment Variables

### Frontend

```env
VITE_API_URL=http://localhost:8083/api
```

---

### Backend

Configure PostgreSQL database details inside

```
application.yml
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint |
|---------|----------|
| POST | /api/auth/register |
| POST | /api/auth/login |

---

## Tasks

| Method | Endpoint |
|---------|----------|
| GET | /api/tasks |
| POST | /api/tasks |
| PUT | /api/tasks/{id} |
| DELETE | /api/tasks/{id} |

---

# 🎯 Future Improvements

- Email Verification
- Forgot Password
- OAuth Login (Google/GitHub)
- Team Collaboration
- Task Comments
- File Attachments
- Notifications
- Calendar View
- Activity Timeline
- Mobile Application

---


# 👩‍💻 Author

**Priyanka Solanki**

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

---

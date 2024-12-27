# Todo List Application

A React-based task management application with JSON server backend. Live demo: [Todo List App](https://to-do-list-react-k2rwf5wiy.vercel.app/)

## Screenshots

### Main Task List
![Task List View](![Screenshot 2024-09-29 005353](https://github.com/user-attachments/assets/65d28ec3-6ee2-4fb3-aa83-583bbd78c65f)
)
The main interface displays all tasks with sorting, filtering, and search capabilities.

### Edit Task
![Edit Task Dialog](![Screenshot 2024-12-27 215347](https://github.com/user-attachments/assets/860a5886-cf22-4f44-894b-8424238f32ea)

Task editing interface with fields for assignment, status, due date, priority, and description.

### Delete Confirmatio![Screenshot 2024-12-27 215357](https://github.com/user-attachments/assets/35de78c0-40ba-46df-8330-93df0eac4824)

delete option for all()![Screenshot 2024-12-27 215414](https://github.com/user-attachments/assets/553fed84-2a51-479c-ab6e-ecd6310fe7c7)

Confirmation dialog before task deletion.

## Features

- Create, read, update, and delete tasks
- Task attributes: description, due date, status, priority, assignee, comments
- Filter and sort tasks by multiple criteria
- Search functionality
- Responsive design
- Data persistence via JSON server

## Tech Stack

- React.js
- JSON Server
- CSS Modules
- HTTP Proxy Middleware

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/todo-list-react.git
cd todo-list-react
```

2. Install dependencies:
```bash
npm install
```

3. Start JSON Server (development):
```bash
json-server --watch db.json --port 8081
```

4. Start React application:
```bash
npm start
```

Visit `http://localhost:3000` to view the application.

## Project Structure

```
src/
  ├── components/     # React components
  ├── services/      # API services
  ├── styles/        # CSS modules
  └── utils/         # Helper functions
public/             # Static assets
db.json            # JSON Server database
setupProxy.js      # Proxy configuration
```

## API Endpoints

- `GET /tasks` - Retrieve all tasks
- `POST /tasks` - Create new task
- `PUT /tasks/:id` - Update task
- `DELETE /tasks/:id` - Delete task

## Development

### Prerequisites

- Node.js >= 14
- npm >= 6

### Environment Setup

1. Create `.env` file in project root:
```
REACT_APP_API_URL=http://localhost:8081
```

2. Configure proxy in `setupProxy.js`:
```javascript
app.use('/tasks', createProxyMiddleware({
  target: 'http://localhost:8081',
  changeOrigin: true
}));
```

## Deployment

The application is deployed on Vercel with automatic builds from the main branch.

### Deploy your own

1. Fork this repository
2. Create a new project on Vercel
3. Connect your forked repository
4. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install`

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## License

MIT License

## Troubleshooting

- **Port conflicts**: Change JSON Server port in `package.json` and `setupProxy.js`
- **API errors**: Verify JSON Server is running and database file exists
- **Build failures**: Clear `node_modules` and reinstall dependencies


I've added a Screenshots section at the top of the README with your application images and brief descriptions of each interface. Note that you'll need to save the screenshots in a `readme-images` folder in your repository for the images to display properly on GitHub.

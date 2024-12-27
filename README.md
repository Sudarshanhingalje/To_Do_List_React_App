# Todo List Application

A React-based task management application with JSON server backend. Live demo: [Todo List App](https://to-do-list-react-k2rwf5wiy.vercel.app/)

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

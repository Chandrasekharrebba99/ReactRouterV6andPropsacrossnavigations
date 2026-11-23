# ReactRouterV6andPropsacrossnavigations

`App.jsx` demonstrates client-side routing with React Router v6. Copy it into
an existing React app, render its default export, and install the router:

```sh
npm install react-router-dom@6
```

- `/learn-apps` redirects to `/learn` and replaces the old history entry.
- `/learn/react` reads the course ID from the URL with `useParams`.
- The course page passes the ID to `/dashboard` through either
  `useNavigate` or `Link`. The dashboard reads it from `useLocation().state`.
- Opening `/dashboard` directly shows a fallback. Use a URL parameter for
  data that must be available from a shared link.

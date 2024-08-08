# Full-Stack Authorization System

A basic full-stack authorization system built with ExpressJS and React.

## Endpoints

- **Login**
- **Register**
- **Forgot Password**
- **Set New Password**
- **Logout**

## Running the Application

You can run the application using Docker with the following commands in your terminal:

```
docker compose build
docker compose up
```

### Default URLs

- **Backend**: `http://localhost:3000`
- **Frontend**: `http://localhost:5173`

## Running Servers Individually

If you prefer to run the servers individually, navigate to the corresponding directory and run:

```
npm run dev
```

## Application Flow

- Upon a successful login, the user is redirected to the Home Page, which is a private component:

  ```jsx
  <Private component={Home} />
  ```

- Any page that requires authorization should be wrapped with the `Private` component.
- The user's login status is managed with the `AuthProvider`.

## Home Page

The Home Page includes a Left Menu and a Header. It is customizable using the `HomePageTemplate`.

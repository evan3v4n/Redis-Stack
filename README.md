
## Environment Setup

Our web application uses Next.js for the frontend and Redis as a database. To ensure the application can connect to your Redis instance, you need to set up a few environment variables. This guide will walk you through the steps to configure your environment properly.

### Prerequisites

- Ensure you have Redis installed and running on your machine or have access to a Redis server.
- Make sure you have Node.js installed to run the Next.js application.

### Configuring Environment Variables

The application requires you to set up environment variables for connecting to your Redis instance. These variables include the Redis host, port, and password. We use a `.env.local` file to manage these variables securely.

Follow these steps to set up your environment variables:

1. **Create a `.env.local` file**: In the root directory of your project, create a file named `.env.local` if it doesn't already exist.

2. **Add Redis configuration variables**: Open the `.env.local` file in a text editor and add the following lines, replacing `<YOUR_REDIS_HOST>`, `<YOUR_REDIS_PORT>`, and `<YOUR_REDIS_PASSWORD>` with your actual Redis host, port, and password.

    ```
    REDIS_HOST=<YOUR_REDIS_HOST>
    REDIS_PORT=<YOUR_REDIS_PORT>
    REDIS_PASSWORD=<YOUR_REDIS_PASSWORD>
    ```

    Example configuration:

    ```
    REDIS_HOST=127.0.0.1
    REDIS_PORT=6379
    REDIS_PASSWORD=mySecurePassword
    ```

3. **Save the `.env.local` file**: After entering your Redis configuration, save the file.

### Accessing Environment Variables in Your Application

After making the .env.local file, the inputs should automatically be used


### Running the Application

With the environment variables set, you can now run your application:

1. Install dependencies (if you haven't already):

    ```
    npm install
    ```

2. Run the development server:

    ```
    npm run dev
    ```

Your Next.js application should now be able to connect to Redis using the provided environment variables.

---

**Note**: For security reasons, never commit your `.env.local` file to version control. It should be added to your `.gitignore` file to prevent accidental exposure of sensitive data.

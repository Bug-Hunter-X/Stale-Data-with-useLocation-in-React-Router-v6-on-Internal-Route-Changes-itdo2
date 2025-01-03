The solution is to use the `useEffect` hook to watch for changes in the `location` object.  Here's how:

```javascript
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function MyComponent() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Location updated:', location);
    // Perform actions based on the updated location
  }, [location]);

  const handleInternalNavigation = () => {
    navigate('./new-route');
  };

  return (
    <div>
      <p>Current Path: {location.pathname}</p>
      <button onClick={handleInternalNavigation}>Go to New Route</button>
    </div>
  );
}

```

By adding the `useEffect` hook and including `location` in the dependency array, the component will re-render and update its state whenever the location changes, even within the same component.
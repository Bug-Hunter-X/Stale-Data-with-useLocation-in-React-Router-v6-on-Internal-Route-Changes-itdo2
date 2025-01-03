In React Router Dom v6, the `useLocation` hook doesn't update immediately when the route changes within the same component. This can lead to stale data being displayed if you're relying on `useLocation` to trigger updates or access the current URL parameters.  For example:

```javascript
import { useLocation } from 'react-router-dom';

function MyComponent() {
  const location = useLocation();
  console.log('Location:', location);

  return (
    <div>
      {/* ... JSX using location.search ... */}
    </div>
  );
}
```

If the route changes within `MyComponent` (e.g., using internal navigation), `location` won't reflect the change until the next render. This is because `useLocation` only updates on the component's mount and when the entire component's route changes. 